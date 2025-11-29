# OPS_PROJECT — Movemint-Ledger

> Single source of truth for the Movemint-Ledger repository's mission, scope, status, and next actions.

---

## Mission

Provide a simple, reliable ledger backend for Movemint—a moving-industry operations platform. The goal is to centralize quote, invoice, and payment data for small-to-medium moving companies.

---

## Scope

| In Scope | Out of Scope |
| -------- | ------------ |
| REST API endpoints under `/api/ledger` | Mobile apps |
| Basic CRUD for ledger entries | Real-time sync |
| Vercel deployment pipeline | On-premise hosting |
| Studio Standard v1 templates & CI | Multi-tenant SaaS features (future) |

---

## Status

**Phase:** MVP (Minimum Viable Product)

- [x] Repository initialized
- [x] CI/CD workflow (GitHub Actions)
- [x] Issue & PR templates
- [ ] `/api/ledger` endpoint live on Vercel
- [ ] Production domain configured
- [ ] First customer pilot

---

## Next Actions

1. **Finalize `/api/ledger` endpoint** — Ensure the smoke test passes in CI.
2. **Deploy to Vercel** — Connect the repo and configure environment variables.
3. **Add authentication layer** — Protect endpoints before pilot launch.
4. **Onboard pilot customer** — Gather feedback and iterate.

---

## Ownership

| Role | Handle |
| ---- | ------ |
| Maintainer | @TheAVCfiles |

---

_Last updated: 2025-11_
