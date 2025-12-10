# Phase 3: Autonomous Oversight Layer

## Overview

Phase 3 introduces an **Autonomous Oversight Layer** that provides continuous governance awareness and architectural guidance for the Movemint-Ledger repository. This layer consists of three complementary automated workflows that work together to maintain code quality, architectural integrity, and audit trail visibility.

## Architecture

The Phase 3 oversight system is designed around three pillars:

```
┌─────────────────────────────────────────────────────────────┐
│                  Phase 3: Oversight Layer                    │
├─────────────────┬──────────────────┬────────────────────────┤
│  Diff Auditor   │  Drift Detector  │  Provenance Reporter   │
│  (Pre-merge)    │  (Pre-merge)     │  (Post-merge)          │
└─────────────────┴──────────────────┴────────────────────────┘
```

### 1. Diff Auditor (`diff-auditor.yml`)

**Purpose**: Provide non-blocking architectural summaries on pull request changes.

**Triggers**: 
- Pull request opened, synchronized, or reopened

**Key Features**:
- Analyzes changed files and categorizes them by layer (API, UI, workflow, etc.)
- Flags governance-relevant touchpoints:
  - Ledger/API changes (data integrity concerns)
  - Workflow/CI changes (build/deployment impacts)
  - Schema changes (migration planning)
  - Configuration changes (behavior modifications)
- Provides diff statistics and layer distribution
- Posts actionable architectural notes
- **Non-blocking**: Always informational, never blocks merges

**Governance Value**:
- Increases awareness of change scope before review
- Highlights areas requiring special attention
- Helps reviewers focus on governance-critical code paths

**Example Output**:
```
🏗️ Architectural Summary

Governance Touchpoints:
- ⚠️ Ledger/API Changes Detected
  - src/ledger/core.ts
  - Governance Note: Ledger changes require careful review for data integrity

Change Statistics:
- Files Changed: 5
- Diff Stats: 3 files changed, 45 insertions(+), 12 deletions(-)

Layer Breakdown:
- API/Backend: 3 file(s)
- UI/Frontend: 0 file(s)
- Workflows/CI: 0 file(s)
- Documentation: 2 file(s)
```

### 2. Architecture Drift Detector (`architecture-drift.yml`)

**Purpose**: Detect architectural coupling and drift, especially when UI and ledger layers change together.

**Triggers**:
- Pull request opened, synchronized, or reopened

**Key Features**:
- Detects cross-layer coupling patterns:
  - **High**: UI + Ledger changes (tight coupling concern)
  - **Medium**: API + multiple layers
  - **Low/None**: Single-layer changes (good separation)
- Provides easy-to-understand coupling diagnostics
- Explains why coupling matters for governance
- Suggests how to separate concerns when appropriate
- Optionally adds labels for tracking (`architecture-drift`)
- **Non-blocking**: Informational guidance only

**Governance Value**:
- Maintains clean architectural boundaries
- Makes coupling visible and understandable
- Helps teams learn good separation practices over time
- Reduces risk by isolating critical changes

**Coupling Levels**:

| Level | Condition | Recommendation |
|-------|-----------|----------------|
| **High** | UI + Ledger both modified | Consider splitting into backend PR + frontend PR |
| **Medium** | API + UI or API + Schema | Review carefully for proper layering |
| **None** | Single layer modified | Good architectural separation ✅ |

**Example Output**:
```
🧭 Architecture Drift Analysis

⚠️ HIGH COUPLING DETECTED

This PR modifies both UI/Frontend and Ledger layers simultaneously.

Ledger Files (2):
- src/ledger/transactions.ts
- app/api/ledger/route.ts

UI Files (3):
- app/components/TransactionForm.tsx
- app/pages/dashboard.tsx

⚠️ Coupling Concern: Changes that span from UI to ledger indicate potential tight coupling.

💡 Recommendation: Consider whether these changes can be separated into:
1. A backend/ledger PR (API contract changes)
2. A frontend PR (consuming the new API)

Why this matters for governance:
- Tightly coupled changes make it harder to review data integrity separately
- Changes to critical ledger code should be isolated for focused review
- Separation allows independent testing and rollback
```

### 3. Post-Merge Provenance Reporter (`post-merge-report.yml`)

**Purpose**: Create an audit trail of what was merged, when, and by whom, with governance implications.

**Triggers**:
- Push to `main` or `master` branch (after merge)

**Key Features**:
- Generates comprehensive provenance report for each merge
- Documents governance-relevant changes:
  - Ledger modifications (data integrity)
  - Schema changes (migration tracking)
  - Workflow changes (process modifications)
  - Configuration changes (behavior changes)
- Creates issue for permanent audit trail
- Links back to original PR when applicable
- Provides layer breakdown and diff statistics

**Governance Value**:
- Permanent, searchable audit trail
- Easy to review what landed in production
- Helps with compliance and retrospective analysis
- Documents who, what, when, where of changes

**Example Report** (created as issue):
```
📦 Post-Merge Provenance Report

Branch: main
Commit: abc123def
Author: Jane Developer
Date: 2025-12-10 10:30:00
PR: #42

---

📊 Change Summary
Files Changed: 8
Diff Stats: 8 files changed, 120 insertions(+), 45 deletions(-)

🎯 Governance-Relevant Changes

⚠️ Ledger Changes (2 files)
Critical ledger code was modified:
- src/ledger/transactions.ts
- app/api/ledger/route.ts

Governance Impact: Ledger changes affect data integrity and must be carefully audited.

🔧 Workflow/CI Changes (1 file)
CI/CD workflows were modified:
- .github/workflows/ci-smoke.yml

Governance Impact: Workflow changes affect build, test, and deployment processes.

📁 Layer Breakdown
Ledger:       2 file(s)
API:          3 file(s)
UI:           1 file(s)
Workflows:    1 file(s)
Tests:        1 file(s)

🔗 Provenance Trail
- What was merged: Changes summarized above
- Who merged it: Jane Developer
- When: 2025-12-10 10:30:00
- Where: main branch
- Review: PR #42
```

## Workflow Interaction

The three workflows complement each other throughout the development lifecycle:

```
┌─────────────────────────────────────────────────────────────┐
│                     Development Flow                         │
└─────────────────────────────────────────────────────────────┘

  Pull Request Opened
         │
         ├──▶ Diff Auditor runs
         │    └─▶ Posts architectural summary
         │
         ├──▶ Drift Detector runs  
         │    └─▶ Flags coupling if detected
         │
         ▼
  Code Review (informed by reports)
         │
         ▼
  Merge to Main
         │
         └──▶ Provenance Reporter runs
              └─▶ Creates audit trail issue
```

### Information Flow

1. **Pre-merge** (PR stage):
   - Diff Auditor provides scope awareness
   - Drift Detector highlights coupling concerns
   - Both help reviewers understand governance implications

2. **Post-merge** (main branch):
   - Provenance Reporter documents what landed
   - Creates permanent audit trail
   - Links changes back to review process

## Governance Principles

### Non-Blocking Philosophy

All Phase 3 workflows are **informational only** and never block merges. This design choice is intentional:

- **Educate, don't obstruct**: Help teams learn good practices over time
- **Context, not control**: Provide information for better decisions
- **Continuous improvement**: Teams can improve based on patterns, not enforcement
- **Flexibility**: Different changes have different needs; humans decide

### Governance Awareness

The workflows focus on making governance implications **visible and understandable**:

- **Clear categorization**: What changed (ledger, schema, config, etc.)
- **Plain language**: Why it matters for governance
- **Actionable insights**: What to consider during review
- **Historical trail**: What was decided and merged

### Coupling Detection

Architectural drift detection emphasizes **easy-to-understand diagnostics**:

- **Visual clarity**: High/medium/none levels are self-explanatory
- **Practical recommendations**: Specific suggestions for improvement
- **Educational**: Explains why coupling matters
- **Pattern recognition**: Teams learn what good separation looks like

## Using the Oversight Layer

### For Contributors

When you open a PR, expect to see:

1. **Architectural Summary** comment from Diff Auditor
   - Review to understand governance touchpoints
   - Use to write better PR descriptions
   - Help reviewers know what to focus on

2. **Drift Analysis** comment from Drift Detector (if applicable)
   - If high coupling detected, consider if separation is feasible
   - Use recommendations to improve architecture
   - Discuss with reviewers if separation isn't practical

### For Reviewers

Use the automated reports to:

1. **Prioritize review focus**:
   - Look closely at flagged governance touchpoints
   - Pay special attention to ledger/schema changes
   - Consider coupling implications

2. **Ask better questions**:
   - "Can this UI+Ledger change be separated?"
   - "Is this schema change backward compatible?"
   - "Do these workflow changes affect production?"

3. **Maintain standards**:
   - Ensure governance-critical changes have proper testing
   - Verify documentation for API/schema changes
   - Check that ledger changes preserve data integrity

### For Maintainers

After merges, use provenance reports to:

1. **Audit trail**: Review what landed in each release
2. **Pattern analysis**: Look for recurring coupling issues
3. **Compliance**: Document governance-relevant changes
4. **Retrospectives**: Understand what changed when issues arise

## Configuration

### Required Labels

For optimal functionality, create these labels in your repository:

- `provenance` - Applied to post-merge provenance reports
- `post-merge` - Applied to post-merge provenance reports
- `architecture-drift` - Applied when high coupling is detected

### Required Permissions

The workflows need these permissions (already configured):

- `pull-requests: write` - To post comments
- `contents: read` - To analyze changes
- `issues: write` - To create provenance issues

### Customization

To adjust detection patterns, edit the file pattern matches in each workflow:

```yaml
# Example: Add custom ledger paths
LEDGER_FILES=$(echo "$CHANGED_FILES" | grep -E "(src/ledger|app/api/ledger|api/ledger|custom/ledger/path)" || true)
```

## Integration with Existing Phases

Phase 3 builds on earlier governance work:

- **Phase 1**: Manual governance (maintainer shield)
- **Phase 2**: Automated labeling and risk classification
- **Phase 3**: Continuous oversight and provenance tracking

Together, these phases create a comprehensive governance framework:

```
Phase 1: Foundation
  └─▶ Maintainer approval for critical paths
       │
Phase 2: Automation  
  └─▶ Risk classification, labeling, compliance
       │
Phase 3: Oversight
  └─▶ Architectural awareness, coupling detection, audit trail
```

## Benefits

### Immediate Benefits

- **Visibility**: All changes categorized and explained
- **Education**: Teams learn governance patterns
- **Safety**: Critical changes are flagged for review
- **Audit Trail**: Complete provenance history

### Long-term Benefits

- **Better Architecture**: Teams naturally improve separation of concerns
- **Faster Reviews**: Reviewers know what to focus on
- **Compliance**: Easy to demonstrate governance processes
- **Quality**: Patterns and anti-patterns become visible

## Maintenance

### Updating Detection Patterns

As your codebase evolves, update file patterns in workflows:

1. Review patterns quarterly or when structure changes
2. Add new critical paths as they emerge
3. Remove patterns for deprecated paths
4. Test pattern changes with historical PRs

### Monitoring Effectiveness

Track these metrics to ensure oversight is working:

- How often high coupling is detected
- Whether coupling issues are resolved over time
- If provenance reports are useful in retrospectives
- Whether teams reference reports in reviews

## Future Enhancements

Potential improvements for Phase 4+:

- **Metrics Dashboard**: Visualize coupling trends over time
- **Custom Rules**: Per-repo governance rules
- **Integration**: Link to external compliance systems
- **ML Patterns**: Learn project-specific anti-patterns
- **Automated Fixes**: Suggest specific code improvements

## Conclusion

The Phase 3 Autonomous Oversight Layer provides continuous, non-blocking governance awareness throughout the development lifecycle. By making architectural concerns visible and understandable, it helps teams maintain high standards while moving quickly.

The three workflows work together to ensure that:
- Changes are understood before merge (Diff Auditor)
- Coupling is detected and can be addressed (Drift Detector)  
- History is preserved for audit and learning (Provenance Reporter)

This creates a foundation for sustainable, governable software development at scale.
