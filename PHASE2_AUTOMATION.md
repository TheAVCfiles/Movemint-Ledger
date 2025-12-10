# Phase 2 Automation Documentation

This document describes the Phase 2 automation features implemented in the Movemint-Ledger repository. These workflows provide governance, compliance checking, and automated risk assessment for all pull requests.

## Overview

Phase 2 automation elevates the governance model to self-regulation through advanced workflows and bots. The system ensures that all code contributes to the institutional integrity and safety of the ledger system.

## Workflows

### 1. Ledger Compliance Bot

**File:** `.github/workflows/ledger-compliance-bot.yml`

**Purpose:** Automatically monitors and enforces compliance for changes to ledger-critical paths.

**Triggers:**
- Pull request opened
- Pull request synchronized (new commits pushed)
- Pull request reopened

**What it does:**
1. Scans for changes in ledger-critical paths:
   - `/src/ledger/**`
   - `/app/api/ledger/**`
   - `/api/ledger/**`

2. When ledger-critical paths are detected, posts a compliance checklist comment with required checks:
   - ✅ Input Validation: All inputs validated and sanitized
   - ✅ Schema Versioning: Schema changes include proper versioning
   - ✅ Migration Strategies: Migration paths documented and tested
   - ✅ Determinism: Operations produce deterministic outputs
   - ✅ Test Coverage: Tests cover all ledger-critical code paths
   - ✅ Documentation: Schema changes are documented

3. Enforces founder approval requirement for ledger-critical PRs

**Best Practices:**
- Address all items in the compliance checklist before requesting review
- Include test coverage for all ledger code changes
- Document any schema changes in the PR description
- Ensure migrations are reversible and tested

### 2. Auto-Labeling

**File:** `.github/workflows/auto-labeling.yml`

**Purpose:** Automatically applies descriptive labels based on file changes in the PR.

**Triggers:**
- Pull request opened
- Pull request synchronized
- Pull request reopened

**Labels Applied:**

| Label | Applied When |
|-------|-------------|
| `ledger` | Changes to `/src/ledger/`, `/app/api/ledger/`, or `/api/ledger/` |
| `api` | Changes to `/api/` or `/app/api/` paths |
| `schema-change` | Files containing "schema", "migration", or "model" |
| `docs` | Changes to `.md`, `.txt`, `.rst`, `.adoc` files or `docs/` directory |

**Benefits:**
- Helps contributors and reviewers quickly identify PR scope
- Enables filtering and searching PRs by category
- Assists in triage and prioritization

### 3. Risk Classification

**File:** `.github/workflows/risk-classification.yml`

**Purpose:** Dynamically classifies PRs into risk levels for maintainer convenience.

**Triggers:**
- Pull request opened
- Pull request synchronized
- Pull request reopened

**Risk Levels:**

| Risk Level | Criteria |
|-----------|----------|
| `risk:ledger-critical` | Changes to ledger-critical paths (`/src/ledger/`, `/app/api/ledger/`, `/api/ledger/`) |
| `risk:high` | Schema, migration, or data model changes |
| `risk:medium` | API changes, >10 files changed, workflow changes, or configuration changes |
| `risk:low` | Documentation-only changes, or small focused changes (≤3 files) |

**How it works:**
1. Analyzes changed files and their patterns
2. Removes any existing risk labels
3. Applies the appropriate risk label
4. Posts a comment explaining the risk classification

**Benefits:**
- Provides at-a-glance understanding of PR impact
- Helps prioritize review efforts
- Enables risk-based review processes

### 4. Schema Versioning

**File:** `.github/workflows/schema-versioning.yml`

**Purpose:** Detects schema modifications and guides proper versioning and migration practices.

**Triggers:**
- Pull request opened
- Pull request synchronized
- Pull request reopened

**What it checks:**
1. **Schema Changes:** Detects files matching: schema, migration, model, database, prisma, sequelize, typeorm
2. **Version Bump:** Checks if `package.json` version was updated
3. **Migration Files:** Verifies presence of migration files
4. **Documentation:** Confirms documentation updates

**Guidance Provided:**
- Semantic versioning requirements (MAJOR.MINOR.PATCH)
- Migration strategy checklist
- Backward compatibility considerations
- Documentation requirements

**Best Practices:**
- Follow semantic versioning:
  - **MAJOR**: Breaking schema changes
  - **MINOR**: Backward-compatible additions
  - **PATCH**: Backward-compatible fixes
- Always include migration files for schema changes
- Test migrations with sample data
- Document upgrade paths for breaking changes

### 5. Post-Merge Summary

**File:** `.github/workflows/post-merge-summary.yml`

**Purpose:** Generates detailed summaries after PR merges to track evolution of the codebase.

**Triggers:**
- Pull request closed (and merged)

**Summary Includes:**
- **Change Statistics:** Files changed, insertions, deletions
- **Codebase Breakdown:** Categorized list of changed files by type:
  - 🔒 Ledger Changes
  - 🔌 API Changes
  - 📊 Schema Changes
  - 🔧 Workflow Changes
  - ⚙️ Configuration Changes
  - 📝 Documentation Changes
- **Risk Assessment:** Risk level and implications
- **Backward Compatibility:** Specific concerns and considerations
- **Version Impact:** Notes on version requirements
- **Next Steps:** Recommended actions post-merge

**Benefits:**
- Creates audit trail of repository evolution
- Helps track technical debt and risk accumulation
- Provides deployment guidance
- Assists in writing release notes

### 6. Enhanced Merge Gatekeeper

**File:** `.github/workflows/merge-gate.yml`

**Purpose:** Enforces quality gates and approval requirements before merging.

**Enhanced Features (Phase 2):**
1. **Ledger-Critical Approval Enforcement:**
   - Detects ledger-critical path changes
   - Requires founder approval for such changes
   - Blocks merge if approval is missing

2. **Phase 2 Automation Verification:**
   - Checks for risk labels applied by automation
   - Warns if labels are missing

**Existing Features:**
- CI status validation
- TODO blocking in ledger code
- Smoke test verification
- Maintainer approval tracking

## Usage Guidelines

### For Contributors

1. **Before Opening a PR:**
   - Review the auto-labeling criteria to understand how your changes will be categorized
   - For ledger-critical changes, prepare compliance checklist responses
   - For schema changes, update version numbers and create migrations

2. **After Opening a PR:**
   - Wait for automation to run (usually <1 minute)
   - Review and address any bot comments
   - Complete compliance checklists if posted
   - Request founder review for ledger-critical changes

3. **Before Merging:**
   - Ensure all CI checks pass
   - Verify risk classification is appropriate
   - Confirm all required approvals are received
   - Address merge gate requirements

### For Reviewers

1. **Use Labels for Triage:**
   - Filter by risk level to prioritize reviews
   - Check `ledger` label for critical reviews
   - Look for `schema-change` label for versioning validation

2. **Review Checklists:**
   - Verify compliance checklist items for ledger changes
   - Confirm schema versioning guidance is followed
   - Check backward compatibility considerations

3. **Founder Approval:**
   - Ledger-critical PRs require founder approval
   - Merge gate will block without this approval

### For Maintainers

1. **Monitor Post-Merge Summaries:**
   - Review summaries to track repository evolution
   - Use risk assessments for deployment planning
   - Check backward compatibility notes

2. **Adjust Risk Classification:**
   - If risk classifications seem incorrect, adjust workflow thresholds
   - File count and path patterns can be tuned in `risk-classification.yml`

3. **Maintain Label Consistency:**
   - Ensure repository has all required labels:
     - `ledger`, `api`, `schema-change`, `docs`
     - `risk:low`, `risk:medium`, `risk:high`, `risk:ledger-critical`

## Required Repository Labels

Create these labels in your repository for proper automation:

| Label | Color | Description |
|-------|-------|-------------|
| `ledger` | `#d93f0b` | Changes to ledger-critical code |
| `api` | `#0366d6` | API endpoint changes |
| `schema-change` | `#d876e3` | Database schema modifications |
| `docs` | `#0075ca` | Documentation changes |
| `risk:low` | `#28a745` | Low risk changes |
| `risk:medium` | `#ffa500` | Medium risk changes |
| `risk:high` | `#ff6347` | High risk changes |
| `risk:ledger-critical` | `#dc143c` | Ledger-critical changes |

## Troubleshooting

### Workflows Not Running

**Issue:** Automation workflows don't trigger on PR

**Solutions:**
- Verify `.github/workflows/` files are present in the branch
- Check GitHub Actions are enabled for the repository
- Ensure workflow files have correct YAML syntax
- Review Actions tab for error messages

### Bot Comments Not Appearing

**Issue:** Ledger Compliance Bot or Risk Classifier doesn't comment

**Solutions:**
- Check workflow permissions (needs `pull-requests: write`)
- Verify bot token has necessary permissions
- Check if workflow completed successfully in Actions tab
- Review workflow logs for API errors

### Labels Not Applied

**Issue:** Auto-labeling doesn't apply expected labels

**Solutions:**
- Verify labels exist in repository
- Check file patterns match expected paths
- Review auto-labeling workflow logs
- Ensure workflow has `pull-requests: write` permission

### Merge Gate Failures

**Issue:** Merge gate blocks even with approvals

**Solutions:**
- Verify founder username matches in workflow
- Check if all required CI checks passed
- Review merge gate workflow logs
- Ensure PR is mergeable (no conflicts)

## Future Enhancements (Phase 3 & 4)

Planned features for future phases:

- **Contributor Scoring:** Track contributor quality and reliability
- **Integration Testing Fanning:** Automated test generation
- **Ledger Safety Analytics:** Advanced metrics and monitoring
- **Automated Rollback:** Safety nets for high-risk changes
- **Dependency Risk Scanning:** Third-party package governance
- **Performance Impact Analysis:** Benchmark tracking

## Support

For issues or questions about Phase 2 automation:
1. Check workflow logs in the Actions tab
2. Review this documentation
3. Open an issue with the `workflow` label
4. Contact repository maintainers

---

**Last Updated:** 2025-12-10  
**Phase:** 2 - Self-Regulation Automation  
**Status:** Active
