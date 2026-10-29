# Essay Grader MCP

Local-first prototype for grading essays and assignments through ChatGPT.

The repository stores rubrics, submissions, and saved grades in `data/`. The MCP server does not call an external API, does not host data, and writes protocol messages only to stdout. ChatGPT receives the selected rubric and submission through the local MCP connection and performs the grading analysis.

## Test locally

```sh
npm test
```

## Add your own material

- Add rubrics to `data/rubrics.json`.
- Add submissions to `data/submissions.json`.
- Keep sensitive files out of GitHub; use a private local data directory before real deployment.

## Update test

Change the server version or a tool description, run `npm test`, then refresh the connected MCP app/plugin in the ChatGPT workspace. Existing approved tool definitions may be frozen by the workspace and require an administrator refresh.

This is a technical proof of concept. Before using real student records, add authentication, access controls, audit policy, backup policy, input-size limits, and institution-approved deployment procedures.
