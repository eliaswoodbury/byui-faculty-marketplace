---
name: grading
description: Use the local Essay Grader MCP tools when the user asks to grade, score, assess, or give feedback on an essay or assignment.
---

# Local grading workflow

Keep student work local. Use `list_rubrics` and `list_submissions` to discover available material, then call `prepare_grading` before grading. The preparation result contains the rubric and submission text.

Grade only against the selected rubric. Cite short excerpts or specific evidence from the submission, explain each criterion score, calculate the total, and separate rubric-based deductions from optional coaching.

Before saving anything, show the proposed score and feedback to the user and ask for confirmation. Only call `save_grade` after explicit approval. Never include private student data in external URLs or send it to another service.
