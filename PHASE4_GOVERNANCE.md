# Phase 4 Governance: Predictive Risk Intelligence

## Overview

Phase 4 introduces **predictive risk intelligence** to the Movemint-Ledger governance framework. This automated system provides non-blocking, data-driven insights about Pull Request risks before they are merged, enabling better decision-making through early awareness of potential complexity and architectural concerns.

## Philosophy

Phase 4 follows the **non-blocking intelligence** principle:
- **Educates** rather than enforces
- **Informs** rather than blocks
- **Guides** rather than mandates

The system provides contextual intelligence to help maintainers and contributors make informed decisions about code changes without creating artificial barriers to contribution.

## Features

### 1. Semantic Risk Scanner

The core of Phase 4 is the **Semantic Risk Scanner**, which analyzes Pull Requests using multiple signals to calculate a comprehensive risk score.

#### Risk Signals

The scanner considers the following factors:

**File Path Zones:**
- 🔴 **Ledger Zone** (`src/ledger/*`, `app/api/ledger/*`, `api/ledger/*`) - Critical financial logic
- 🟡 **Schema Zone** (`*schema*`, `*Schema*`) - Data structure definitions
- 🟠 **API Zone** (`app/api/*`, `api/*`, `src/api/*`) - External interfaces
- 🔵 **UI Zone** (`app/*`, `src/components/*`, `src/pages/*`, `public/*`) - User interface
- 🟣 **Config Zone** (`*.config.*`, `*.json`, `*.yml`, `*.yaml`) - Configuration
- ⚪ **Docs Zone** (`*.md`, `docs/*`) - Documentation
- 🟤 **Workflow Zone** (`.github/workflows/*`) - CI/CD automation

**PR Size Metrics:**
- Number of files changed
- Lines added
- Lines deleted
- Total delta (additions + deletions)

**Architectural Patterns:**
- Zone count (how many different areas are touched)
- Cross-zone dependencies
- Architectural hotspots

#### Risk Scoring

The system calculates a risk score based on weighted factors:

| Factor | Score Impact | Rationale |
|--------|--------------|-----------|
| Ledger Zone | +50 | Critical financial logic requires extra scrutiny |
| Schema Zone | +30 | Data structure changes affect persistence and contracts |
| API Zone | +20 | External interfaces impact integrations |
| Multi-zone (≥3) | +25 | Cross-cutting changes increase complexity |
| Large PR (≥10 files) | +15 | More files = more review surface area |
| Large delta (≥500 lines) | +15 | More changes = higher potential for issues |

#### Risk Tiers

Based on the calculated score, PRs are classified into three tiers:

- 🟢 **Low Risk** (score < 25): Small, focused changes in non-critical areas
- 🟡 **Medium Risk** (score 25-49): Moderate changes or changes to important areas
- 🔴 **High Risk** (score ≥ 50): Large changes, critical area changes, or architectural hotspots

### 2. Architecture Hotspot Detection

The scanner automatically detects problematic architectural patterns:

**Critical Hotspots:**
- **Ledger + Schema**: Changes affecting both financial logic and data structures
- **Ledger + UI**: Changes spanning backend financial logic and frontend display

**Architecture Hotspots:**
- **Schema + API + UI**: Full-stack changes affecting multiple layers
- **4+ Zones**: Changes crossing too many architectural boundaries

When detected, these hotspots trigger specific warnings and recommendations.

### 3. Sticky PR Comments

The scanner posts (or updates) a **sticky comment** on each PR with:

- Risk tier and score
- Detailed change statistics
- Active architectural zones
- Hotspot analysis (if applicable)
- Tailored recommendations

The comment is automatically updated on each PR synchronization, providing a living assessment that evolves with the PR.

### 4. GitHub Actions Integration

The workflow integrates seamlessly with GitHub Actions:

- Triggers on PR open, synchronize, and reopen events
- Uses GitHub CLI for PR data fetching
- Posts comments via GitHub API
- Adds summary to GitHub Actions step summary
- Requires minimal permissions (`contents: read`, `pull-requests: write`, `issues: write`)

## Workflow Configuration

The workflow is defined in `.github/workflows/phase4-risk-scan.yml` and runs automatically on all Pull Requests.

### Triggers

```yaml
on:
  pull_request:
    types: [opened, synchronize, reopened]
```

### Job Steps

1. **Checkout repository** - Fetches the code with full history
2. **Fetch PR details** - Gathers file count, additions, deletions
3. **Analyze file paths** - Detects architectural zones
4. **Calculate risk tier** - Computes risk score and assigns tier
5. **Detect architecture hotspots** - Identifies problematic patterns
6. **Generate risk report** - Builds markdown report with insights
7. **Post sticky PR comment** - Updates or creates PR comment
8. **Summary** - Adds report to GitHub Actions summary

## Example Output

### Low Risk Example

```markdown
## 🎯 Phase 4 Risk Assessment

### Risk Tier: 🟢 **low** (score: 10)

### 📊 Change Statistics
- **Files Changed**: 2
- **Lines Added**: +15
- **Lines Deleted**: -8
- **Total Delta**: 23 lines

### 🗺️ Architectural Zones Affected
`Docs` 

**Active Zones**: 1

### 💡 Recommendations
- No specific recommendations for low-risk changes

---
*🤖 Automated by Phase 4 Predictive Risk Scanner - Non-blocking intelligence for better decisions*
```

### High Risk Example

```markdown
## 🎯 Phase 4 Risk Assessment

### Risk Tier: 🔴 **high** (score: 80)

### 📊 Change Statistics
- **Files Changed**: 12
- **Lines Added**: +345
- **Lines Deleted**: -123
- **Total Delta**: 468 lines

### 🗺️ Architectural Zones Affected
`Ledger` `Schema` `UI` 

**Active Zones**: 3

### 🔥 Architecture Hotspot Analysis
🔥 **CRITICAL HOTSPOT**: Ledger + Schema changes detected. This affects data contracts and persistence.

### 💡 Recommendations
- 🔍 Request thorough code review from maintainers
- 🧪 Ensure comprehensive test coverage
- 📚 Update documentation for any API/schema changes
- 🛡️ Founder approval required for ledger-critical changes
- 🔀 Consider splitting into smaller, focused PRs
- 🧩 Review architectural boundaries and separation of concerns

---
*🤖 Automated by Phase 4 Predictive Risk Scanner - Non-blocking intelligence for better decisions*
```

## Benefits

### For Contributors

- **Transparency**: Understand how changes are perceived before review
- **Guidance**: Receive actionable recommendations
- **Learning**: Gain insights into architectural boundaries and best practices

### For Maintainers

- **Efficiency**: Quickly assess PR complexity and risk
- **Consistency**: Objective, automated risk assessment for all PRs
- **Focus**: Prioritize review effort based on risk tier

### For the Project

- **Quality**: Encourages smaller, focused PRs through hotspot detection
- **Architecture**: Reinforces architectural boundaries and separation of concerns
- **Documentation**: Surfaces patterns and conventions through automated analysis

## Customization

The risk scoring algorithm can be tuned by adjusting the weights in the "Calculate risk tier" step:

```bash
# Ledger changes are automatically high risk
if [ "$LEDGER_ZONE" = "1" ]; then
  RISK_SCORE=$((RISK_SCORE + 50))  # Adjust this value
fi
```

Zone detection patterns can be modified in the "Analyze file paths" step:

```bash
case "$file" in
  src/ledger/*|app/api/ledger/*|api/ledger/*)
    LEDGER_ZONE=1
    # Add more patterns here
    ;;
esac
```

## Limitations

1. **Pattern-based**: Detection relies on file path patterns, not semantic code analysis
2. **No code complexity**: Doesn't analyze cyclomatic complexity or code quality metrics
3. **Simple scoring**: Uses additive scoring without ML or historical data
4. **GitHub-dependent**: Requires GitHub CLI and API access

## Future Enhancements

Potential Phase 5+ capabilities:

1. **Historical analysis**: Learn from past PRs to improve risk prediction
2. **Code complexity metrics**: Integrate cyclomatic complexity, coupling metrics
3. **Test coverage impact**: Assess changes in test coverage
4. **Dependency analysis**: Detect new dependencies and their security posture
5. **Churn prediction**: Identify files likely to require rework
6. **ML-based scoring**: Use machine learning for more sophisticated risk modeling

## Integration with Other Phases

Phase 4 complements earlier governance phases:

- **Phase 1-2**: Manual and semi-automated governance
- **Phase 3**: Autonomous oversight (diff-auditor, architecture-drift, post-merge-report)
- **Phase 4**: Predictive intelligence (risk scanner)

All phases maintain the **non-blocking philosophy**, providing information rather than enforcement.

## Maintenance

The workflow requires minimal maintenance:

- **No dependencies**: Uses only GitHub CLI and bash
- **Self-contained**: All logic in the workflow file
- **Version controlled**: Changes tracked in git
- **Tested**: Zone detection and scoring logic validated

## Support

For questions, issues, or enhancement requests related to Phase 4:

1. Review this documentation
2. Check existing workflow runs for examples
3. Open an issue with the `governance` label
4. Tag the maintainer (@TheAVCfiles) for urgent matters

## License

This governance framework follows the same license as the Movemint-Ledger project (see LICENSE file).

---

**Last Updated**: 2025-12-10  
**Version**: 1.0.0  
**Author**: Movemint-Ledger Governance Team
