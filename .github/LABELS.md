# Repository Label Setup

This file contains the labels that need to be created in the GitHub repository for Phase 2 automation to work correctly.

## Required Labels

### Category Labels

```yaml
- name: "ledger"
  color: "d93f0b"
  description: "Changes to ledger-critical code paths"

- name: "api"
  color: "0366d6"
  description: "API endpoint changes"

- name: "schema-change"
  color: "d876e3"
  description: "Database schema or model modifications"

- name: "docs"
  color: "0075ca"
  description: "Documentation changes"
```

### Risk Labels

```yaml
- name: "risk:low"
  color: "28a745"
  description: "Low risk - minor changes with minimal impact"

- name: "risk:medium"
  color: "ffa500"
  description: "Medium risk - moderate changes requiring review"

- name: "risk:high"
  color: "ff6347"
  description: "High risk - schema or significant changes"

- name: "risk:ledger-critical"
  color: "dc143c"
  description: "Critical - changes to ledger-critical code paths"
```

## Setup Instructions

### Option 1: Manual Setup via GitHub UI

1. Go to your repository on GitHub
2. Click on "Issues" tab
3. Click on "Labels"
4. Click "New label" for each label above
5. Enter the name, description, and color code
6. Click "Create label"

### Option 2: Using GitHub CLI

If you have GitHub CLI installed, you can run:

```bash
# Category labels
gh label create "ledger" --color "d93f0b" --description "Changes to ledger-critical code paths"
gh label create "api" --color "0366d6" --description "API endpoint changes"
gh label create "schema-change" --color "d876e3" --description "Database schema or model modifications"
gh label create "docs" --color "0075ca" --description "Documentation changes"

# Risk labels
gh label create "risk:low" --color "28a745" --description "Low risk - minor changes with minimal impact"
gh label create "risk:medium" --color "ffa500" --description "Medium risk - moderate changes requiring review"
gh label create "risk:high" --color "ff6347" --description "High risk - schema or significant changes"
gh label create "risk:ledger-critical" --color "dc143c" --description "Critical - changes to ledger-critical code paths"
```

### Option 3: Using GitHub API

```bash
# Set your repository details
OWNER="TheAVCfiles"
REPO="Movemint-Ledger"
TOKEN="your_github_token"

# Create labels using curl
curl -X POST \
  -H "Authorization: token $TOKEN" \
  -H "Accept: application/vnd.github.v3+json" \
  https://api.github.com/repos/$OWNER/$REPO/labels \
  -d '{"name":"ledger","color":"d93f0b","description":"Changes to ledger-critical code paths"}'

# Repeat for each label...
```

## Verification

After creating the labels, verify they exist:

```bash
gh label list
```

You should see all 8 labels listed.

## Notes

- The automation workflows will fail silently if labels don't exist
- Labels are case-sensitive
- Color codes should be 6-digit hex without the `#` prefix
- You can adjust colors to match your repository's theme
