# BYU–Idaho plugin security profile

Use this profile in addition to the C01–C15 baseline when reviewing plugins intended for BYU–Idaho faculty. It is a practical review profile, not a contract, legal opinion, FERPA determination, or institutional approval.

## What is already covered

The existing reviewer already covers: intended use; identity and deployment model; course/resource authorization; audience freshness; independent human approval; private delivery; retry and unknown-outcome recovery; data flow and minimization; retention; prompt injection and tool boundaries; release provenance; user education; accessibility; institutional governance; and incident response/exit. The educator already covers layered explanation, fictional practice, audience-versus-send approval, unsupported wording, links, uncertainty recovery, independent transfer, accessibility, and value comparison.

## Redundant or out-of-scope material from the White Coat World security work

Do not copy these application-specific controls into every BYU–Idaho plugin review:

- White Coat World page/session-cookie middleware, profile privacy, social routes, followers, posts, pills, comments, usernames, org names, surveys, under-18 reporting, and social moderation.
- White Coat World product rules such as minimum age 18, White Coat Connect behavior, positive-only kudos, no leaderboards, or app-specific profile visibility.
- White Coat World database migration numbering, Supabase schema checks, worktree/push/Vercel procedures, or live-site curl checks. Retain only the general lesson: changes need provenance, testing, rollback, and an owner.
- White Coat World-specific account deletion queues, school verification, supervisor-email normalization, and faculty-file path restrictions.
- Claims about the White Coat World public pages, HECVAT/DPA language, or its deployment state. These are evidence for that application, not universal plugin requirements.

OpenAI’s no-training contractual terms may reduce one institutional concern, but they do not make a plugin safe by themselves. A plugin can still expose education records through tool calls, prompts, model context, URLs, generated output, screenshots, email, Canvas messages, connected services, host logs, or faculty sharing. Review those paths directly and do not treat “no training” as “no disclosure,” “no retention,” or “no human error.”

## Add these BYU–Idaho plugin-specific controls

For every plugin, identify the following and require evidence proportional to the action:

1. **Purpose and prohibited decisions.** State the supported faculty task, normal alternative, and unsuitable uses. Block unsupported diagnoses, risk labels, grading/discipline conclusions, attendance claims, eligibility decisions, or individualized claims not grounded in returned evidence.
2. **Action and side-effect map.** Classify every capability as read, analyze, draft, recommend, write/send, change permissions, or delete. Default to read-only or dry-run; place a visible, deliberate gate before every consequential action.
3. **Data classification and minimization.** Identify education records, identifiers, grades, behavior/activity, accommodations, messages, and credentials. Return only fields needed for the task, avoid broad roster dumps, and prevent copying sensitive records into unrelated tools or public outputs.
4. **Connector and egress control.** List every host, model, MCP server, URL, file, email, LMS, analytics, and documentation destination. Permit only intended destinations; prohibit student context in unrelated searches, arbitrary URL fetches, telemetry, or external sharing without an explicit approved purpose.
5. **Faculty decision visibility.** Before action, show in plain language what was read, how it was interpreted, who/what will receive the output, what will change, what is uncertain, and what the faculty member must decide. Do not imply that a model explanation is a complete audit trail.
6. **Audience and content binding.** Bind approval to tenant, course/section, sender, exact stable recipient IDs, final rendered content, links, version, and expiry. Any material change requires fresh review; never silently expand an audience.
7. **Safe output and language.** Detect or flag unsupported causal claims, sensitive details, stigmatizing language, wrong names, inaccessible wording, unverified login/engagement claims, and links that may not be accessible to recipients.
8. **Freshness and authority.** Recheck permissions, enrollment, scope, and relevant data before batches or writes. Treat retrieved names/titles/content as untrusted data, never instructions or authority.
9. **Failure-safe operation.** Make cancellation easy; classify success, failed, and unknown outcomes; reconcile before retry; make writes idempotent where possible; and avoid destructive defaults or blind retries after restart.
10. **Retention and deletion.** Document memory, local storage, host conversation/tool logs, connected-service records, backups, exports, and future ledgers separately. Provide cleanup and deletion behavior. No-training terms do not answer these questions.
11. **Release and support.** Pin and verify the build, registration path, dependencies, permissions, and hashes; assign owner/support; publish rollback and emergency disable/revoke steps; detect drift and unreviewed updates.
12. **Faculty readiness.** Teach the above at the decision point in ordinary language, then test an unseen fictional scenario, a correction, and an uncertain outcome. Test accessibility and record help needed, not only completion or confidence.

## Required review artifacts

For each plugin, produce: an action/data/egress map; prohibited-use list; decision-point risk cards; evidence table; synthetic acceptance tests; incident/stop procedure; and a faculty-facing quick explanation. Mark each item verified, claimed, unknown, or not applicable. Do not average categories into a readiness percentage.

