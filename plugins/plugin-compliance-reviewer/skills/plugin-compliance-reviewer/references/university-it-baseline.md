# University IT review baseline

This baseline is adapted from the supplied preliminary university IT review of a Canvas messaging prototype dated 28 October 2026. It is a repeatable review framework, not an institutional approval standard or legal conclusion. Apply it proportionately to the plugin, host, connected services, and intended deployment.

## Categories

| ID | Category | Core question |
|---|---|---|
| C01 | Intended use | Is the purpose constrained and supportive, without silently becoming grading, discipline, attendance determination, or predictive-risk decisioning? |
| C02 | Identity and authentication | Does authentication fit the deployment model, use least privilege, bind credentials to the approved tenant, and support expiration, revocation, and offboarding? |
| C03 | Course/resource authorization | Are tenant, account, course, section, role, term, and resource checks enforced at the point of action? |
| C04 | Audience and freshness | Is the approved audience current, deduplicated by stable ID, scoped correctly, and prevented from widening silently? |
| C05 | Human approval | Is consent an independent, non-bypassable event bound to the exact sender, audience, rendered content, version, and expiry? |
| C06 | Private delivery | Are writes private and correctly scoped, with no assumption that sent means delivered or read? |
| C07 | Send recovery and audit | Are retries safe across timeouts, restarts, new previews, devices, and unknown outcomes, with minimized receipts? |
| C08 | Data flow and minimization | Are sensitive fields minimized and are host/model/tool egress paths understood and controlled? |
| C09 | Retention | Are memory, local, host, service, backup, and future-ledger retention/deletion rules explicit and bounded? |
| C10 | Prompt injection and tools | Is retrieved text treated as data, and are unrelated tools, arbitrary URLs, and external documentation boundaries controlled? |
| C11 | Releases and platforms | Is the build pinned, hash/provenance checked, supported across claimed platforms, and protected from unreviewed mutation? |
| C12 | User education | Can users correctly perform scope, audience, content approval, cancellation, and uncertain-outcome handling? |
| C13 | Accessibility and usability | Is there evidence for keyboard, screen-reader, readability, representative users, and applicable accessibility requirements? |
| C14 | Institutional data governance | Are classification, ownership, permitted use, contracts, subprocessors, location, retention, and deletion/return terms approved? |
| C15 | Incident response and exit | Are support, incident handling, disable/revoke, continuity, notification, recovery, and service-exit procedures assigned and tested? |

## Evidence vocabulary

- **Source verified**: observed in supplied source or metadata; runtime behavior is not proven.
- **Developer claim**: stated in README, release notes, or test report but not independently checked.
- **Not verified**: required evidence was unavailable; not itself a failure finding.
- **Institutional condition**: approval, contract, account, host, policy, or operational fact that source inspection cannot establish.

Always state whether review was source-only, package-only, runtime-tested, or based on a controlled synthetic environment. Never use an average score to imply approval; name each unmet gate.

## Minimum synthetic tests

Use synthetic identities and mocked or separately authorized test tenants. Test: wrong tenant and role; ambiguous/unselected scope; pagination and duplicate IDs; missing versus zero values; section and term boundaries; exact audience and frozen approvals; changed audience/content; replay and cancellation; independent human confirmation; accepted-then-timeout and restart recovery; 429/5xx/disconnect; private write payloads; arbitrary links; adversarial names/titles; egress to unrelated tools; retention cleanup; slow/huge/malformed responses; cancellation; update divergence; rollback; platform startup; accessibility; and representative user completion.

For every test capture pinned build, setup, expected result, actual result, evidence location, reviewer, and date. Never use production exports, real student credentials, or real notification destinations for this baseline's ordinary validation.
