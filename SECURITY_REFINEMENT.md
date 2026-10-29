# BYU–Idaho plugin security refinement

## Already present and intentionally retained

The current plugins already cover source/package review, intended use, authentication and deployment model, course/resource authorization, audience freshness, human approval, private delivery, retry and unknown-outcome recovery, data minimization, retention, prompt injection/tool boundaries, release provenance, education, accessibility, institutional governance, incident response, fictional practice, approval separation, unsupported wording, link review, independent transfer, and value comparison.

## Redundant or not portable from the White Coat World audit

Do not make every BYU–Idaho plugin implement White Coat World’s social-profile middleware, cookie/session page guards, social counters, follows, posts, pills, comments, usernames, organization names, surveys, under-18 reporting, school verification, supervisor-email normalization, Supabase migration numbering, worktree/Vercel deployment ritual, or White Coat Connect product rules. Keep only the general lessons: fail closed, verify identity, protect side effects, test concurrency, preserve provenance, and maintain rollback/support ownership.

OpenAI no-training contract terms are relevant context, not a complete plugin security control. They do not prevent accidental disclosure through an unrelated connector, URL, email, message recipient, export, screenshot, host surface, or faculty decision.

## Additions now embedded

1. Purpose boundaries and prohibited faculty uses.
2. Action/side-effect classification with read-only and dry-run defaults.
3. Education-record classification and field minimization.
4. Connector allowlists and explicit data-egress review.
5. Plain-language visibility into what was read, interpreted, shared, and changed.
6. Approval binding to exact audience, content, links, sender, tenant, version, and expiry.
7. Output checks for unsupported claims, wrong names, sensitive detail, inaccessible wording, and misleading activity language.
8. Freshness and authority checks at the point of action.
9. Safe cancellation, unknown-result reconciliation, and no blind retry.
10. Separate retention/deletion review for memory, host, services, backups, and ledgers.
11. Pinned releases, drift detection, owner/support, disable/revoke, and rollback.
12. Decision-point risk cards, independent fictional practice, accessibility checks, and stop/ask-IT behavior.

## Review rule

Do not average these into a compliance score. Label each control verified, claimed, unknown, or not applicable, name the affected approval gate, and require acceptance evidence before a real faculty pilot.

## Operating boundary

These plugins are advisory-only. They produce findings, suggested changes, options, owners, and acceptance tests. They do not edit reviewed plugins, modify configuration, install or remove anything, commit or push code, deploy, change permissions, connect to production, or apply remediation.

## Communication rule

Every result must be understandable to a non-technical faculty member. Put the everyday explanation first, define unavoidable technical terms, avoid unexplained acronyms, and describe what the person may see, what could go wrong, and what to do next.
