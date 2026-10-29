import { spawn } from "node:child_process";
import assert from "node:assert/strict";

const child = spawn(process.execPath, ["server.js"], { stdio: ["pipe", "pipe", "inherit"] });
let buffer = Buffer.alloc(0);
let nextId = 1;
const pending = new Map();

child.stdout.on("data", (chunk) => {
  buffer = Buffer.concat([buffer, chunk]);
  while (true) {
    const separator = buffer.indexOf("\r\n\r\n");
    if (separator < 0) return;
    const match = buffer.subarray(0, separator).toString().match(/Content-Length:\s*(\d+)/i);
    if (!match) throw new Error("Missing Content-Length");
    const length = Number(match[1]);
    const start = separator + 4;
    if (buffer.length < start + length) return;
    const response = JSON.parse(buffer.subarray(start, start + length).toString());
    buffer = buffer.subarray(start + length);
    pending.get(response.id)?.(response);
    pending.delete(response.id);
  }
});

function request(method, params = {}) {
  return new Promise((resolve) => {
    const id = nextId++;
    pending.set(id, resolve);
    const body = JSON.stringify({ jsonrpc: "2.0", id, method, params });
    child.stdin.write(`Content-Length: ${Buffer.byteLength(body)}\r\n\r\n${body}`);
  });
}

const initialized = await request("initialize");
assert.equal(initialized.result.serverInfo.name, "essay-grader-mcp");
const listed = await request("tools/list");
assert.deepEqual(listed.result.tools.map((tool) => tool.name), ["list_rubrics", "list_submissions", "prepare_grading", "save_grade", "list_grades"]);
const prepared = await request("tools/call", { name: "prepare_grading", arguments: { rubricId: "argumentative-essay-100", submissionId: "demo-001" } });
assert.equal(prepared.result.structuredContent.rubric.id, "argumentative-essay-100");
assert.equal(prepared.result.structuredContent.submission.id, "demo-001");
const rejected = await request("tools/call", { name: "save_grade", arguments: { submissionId: "demo-001", rubricId: "argumentative-essay-100", totalPoints: 80, criterionScores: [], feedback: "test", approvedByUser: false } });
assert.match(rejected.error.message, /explicit user approval/);
child.kill();
console.log("MCP smoke test passed: initialize, tool discovery, local preparation, and approval guard.");
