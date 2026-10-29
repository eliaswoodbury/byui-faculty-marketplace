# BYU–Idaho remediation policy

Use this policy when deciding whether a recommended plugin change is eligible for automated preparation. It does not authorize the reviewer to edit, commit, deploy, or publish a reviewed plugin.

## A change may be classified as automation-eligible only when all are true

- BYU–Idaho explicitly requires it by policy.
- It is safe for every plugin in the stated scope.
- It is mechanical and predictable.
- It is easy to test with a clear pass/fail result.
- It is reversible.
- It is unrelated to the plugin’s core purpose or student-data decisions.

Examples include preparing required plain-language explanations; a standard explanation of what data the plugin uses; advisory-only boundaries; warnings that AI suggestions are not verified facts; standard report sections and evidence labels; prohibited-use statements; synthetic-test instructions; required manifest fields and version metadata; checks for unapproved external connections; and checks that an assessor cannot edit the plugin it is reviewing.

## Human approval is required

Require human review before applying changes involving authentication or access controls; student-data handling or retention; grading or rubric logic; recipients or audience selection; messages, email, publishing, deletion, or record changes; connected-service permissions; the plugin’s purpose or authority; or anything that could affect a student or institutional decision.

The reviewer may generate a patch or side-by-side diff for a human to inspect. It must not apply the patch automatically. Every recommendation should say whether it is automation-eligible, human-review-only, or not enough evidence to decide.
