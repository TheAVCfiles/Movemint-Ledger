# Movemint-Ledger

A governance-first ledger system with institutional-grade automation and compliance.

## Features

- 🔒 **Ledger Compliance Bot** - Automated compliance checking for ledger-critical code
- 🏷️ **Auto-Labeling** - Smart PR categorization based on file changes
- 📊 **Risk Classification** - Dynamic risk assessment for all changes
- 📋 **Schema Versioning** - Automated guidance for database changes
- 📈 **Post-Merge Summaries** - Detailed evolution tracking
- 🛡️ **Merge Gatekeeper** - Multi-layer approval and quality gates

## Phase 2 Automation

This repository implements Phase 2 automation, elevating governance from policy to enforceable institution. All PRs are automatically scanned, classified, and validated through advanced workflows.

**Key Benefits:**
- Self-policing: Violations flagged and addressed automatically
- Architecturally aligned: All changes verified for completeness and compatibility
- Future-proofed: Maintenance discipline enforced proactively

For detailed documentation, see [PHASE2_AUTOMATION.md](./PHASE2_AUTOMATION.md)

## Getting Started

1. Open a pull request with your changes
2. Wait for automation to classify and label your PR
3. Address any compliance checklists or guidance comments
4. Request reviews as needed (founder approval required for ledger-critical changes)
5. Merge once all checks pass

## Repository Labels

The following labels are automatically applied:
- `ledger` - Ledger-critical code changes
- `api` - API endpoint changes
- `schema-change` - Database schema modifications
- `docs` - Documentation updates
- `risk:low` / `risk:medium` / `risk:high` / `risk:ledger-critical` - Risk classifications

## Contributing

All contributions are subject to automated governance workflows. Please:
- Follow the compliance checklists for ledger changes
- Update documentation for schema changes
- Ensure all CI checks pass
- Request founder approval for ledger-critical changes

## License

See [LICENSE](./LICENSE) for details.