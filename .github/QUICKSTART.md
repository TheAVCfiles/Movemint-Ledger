# Phase 2 Automation Quick Start Guide

Welcome! This guide will help you understand how to work with the Phase 2 automation in the Movemint-Ledger repository.

## What Happens When You Open a PR?

When you open a pull request, several automated workflows run within seconds:

### 1. 🏷️ Auto-Labeling (Auto-Labeling Workflow)
Your PR is automatically labeled based on the files you changed:
- `ledger` - You modified ledger-critical code
- `api` - You changed API endpoints
- `schema-change` - You modified database schemas
- `docs` - You updated documentation

### 2. 📊 Risk Classification (Risk Classification Workflow)
Your PR is assigned a risk level:
- `risk:low` - Small, safe changes
- `risk:medium` - Moderate changes needing review
- `risk:high` - Schema changes or large modifications
- `risk:ledger-critical` - Critical ledger code changes

A comment explains why your PR received this risk level.

### 3. 🔒 Ledger Compliance Check (Ledger Compliance Bot)
**Only triggers if you modified ledger-critical paths** (`/src/ledger/`, `/app/api/ledger/`, `/api/ledger/`)

If triggered, you'll receive a compliance checklist comment asking you to confirm:
- ✅ Input validation is in place
- ✅ Schema versioning is handled
- ✅ Migration strategies are documented
- ✅ Operations are deterministic
- ✅ Test coverage is complete
- ✅ Documentation is updated

**Important:** Ledger-critical PRs require founder approval to merge.

### 4. 📋 Schema Versioning Guidance (Schema Versioning Workflow)
**Only triggers if you modified schema-related files** (files containing "schema", "migration", "model")

If triggered, you'll receive guidance on:
- Semantic versioning requirements
- Migration file requirements
- Documentation requirements
- Backward compatibility considerations

## Working with the Automation

### For Simple Changes (docs, small fixes)

1. Open your PR
2. Wait for automation (usually <1 minute)
3. Check that risk level is appropriate (`risk:low` expected)
4. Request reviews as needed
5. Merge when CI passes

### For API Changes

1. Open your PR
2. Wait for automation
3. Check for `api` label and `risk:medium` or `risk:high`
4. Ensure API documentation is updated
5. Test integration points
6. Request reviews
7. Merge when approved

### For Schema Changes

1. Open your PR
2. Wait for automation
3. Read the Schema Versioning Guidance comment carefully
4. Ensure you have:
   - Updated version number in `package.json`
   - Created migration files
   - Documented the changes
   - Tested migrations
5. Address all checklist items
6. Request reviews
7. Merge when approved

### For Ledger-Critical Changes

1. Open your PR
2. Wait for automation
3. You'll receive a Ledger Compliance Checklist
4. Check all items in the checklist:
   - Add comments confirming each item
   - Link to tests for coverage
   - Reference documentation updates
5. **Request founder review** (required for merge)
6. Wait for founder approval
7. Merge when all checks pass

## Common Scenarios

### Scenario: "I only changed documentation, why do I have risk:medium?"

The automation might have detected:
- Many documentation files changed (>10 files)
- Documentation mixed with code changes

If you believe the risk level is wrong, mention it in the PR description.

### Scenario: "My PR is blocked by Merge Gate"

The Merge Gatekeeper enforces several rules:
- CI must pass
- No merge conflicts
- No TODOs in ledger code
- Founder approval for ledger-critical changes

Check the workflow logs to see which rule is blocking.

### Scenario: "The bot didn't comment on my PR"

This is normal if:
- No ledger-critical changes (no Ledger Compliance comment)
- No schema changes (no Schema Versioning comment)

The Risk Classification comment should always appear.

### Scenario: "I need to update my PR after automation ran"

Just push new commits! The automation will re-run and update:
- Labels (if file changes warrant it)
- Risk classification
- Compliance checklists

## Best Practices

### ✅ DO:
- Read automation comments carefully
- Address all checklist items before requesting review
- Update documentation for API/schema changes
- Include tests for all code changes
- Request founder review for ledger changes early

### ❌ DON'T:
- Ignore compliance checklists
- Remove automation-applied labels
- Merge without required approvals
- Leave TODOs in ledger-critical code
- Skip version bumps for schema changes

## After Your PR Merges

The Post-Merge Summary workflow will:
1. Generate a detailed summary of changes
2. List all modified files by category
3. Assess risks and compatibility
4. Suggest next steps

This helps maintainers track repository evolution and plan deployments.

## Need Help?

- **Workflow not running?** Check the Actions tab for errors
- **Confused about a requirement?** Read [PHASE2_AUTOMATION.md](../PHASE2_AUTOMATION.md)
- **Bot comment unclear?** Ask in your PR comments
- **Labels wrong?** Mention it in your PR - labels can be adjusted manually

## Quick Reference

| Label | Meaning | Action Required |
|-------|---------|-----------------|
| `ledger` | Ledger code changed | Get founder approval, complete checklist |
| `api` | API changed | Update API docs, test endpoints |
| `schema-change` | Schema changed | Update version, create migrations, document |
| `risk:ledger-critical` | Critical changes | Extra scrutiny, founder approval required |
| `risk:high` | High risk | Thorough review needed |
| `risk:medium` | Medium risk | Standard review |
| `risk:low` | Low risk | Quick review OK |

## Examples

### Example 1: Documentation Update
```
Files changed: README.md
Labels: docs
Risk: risk:low
Required: None
Steps: 1. Wait for CI → 2. Request review → 3. Merge
```

### Example 2: API Endpoint Addition
```
Files changed: app/api/users/route.ts, docs/api.md
Labels: api, docs
Risk: risk:medium
Required: API documentation
Steps: 1. Wait for automation → 2. Verify docs → 3. Request review → 4. Merge
```

### Example 3: Ledger Code Fix
```
Files changed: src/ledger/transaction.ts, tests/ledger/transaction.test.ts
Labels: ledger
Risk: risk:ledger-critical
Required: Compliance checklist, founder approval
Steps: 1. Wait for automation → 2. Complete checklist → 3. Request founder review → 4. Wait for approval → 5. Merge
```

---

**Remember:** The automation is here to help maintain quality and safety. Take time to read and address the automated feedback - it catches issues before they reach production!
