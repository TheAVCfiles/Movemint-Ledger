# Continuous Integration - Layered Testing Approach

## Overview

The Movemint-Ledger CI pipeline implements a layered testing strategy designed for the StagePort ecosystem. This approach ensures systematic validation from basic smoke tests to comprehensive functionality checks.

## Testing Layers

### 1. Smoke Testing (Current Implementation)

**Purpose**: Validate that the application can start and that critical endpoints respond correctly.

**Workflow**: `.github/workflows/ci-smoke.yml`

**What it validates**:
- Repository checkout succeeds
- Node.js environment (v20) setup completes
- NPM dependencies install without errors
- Application builds successfully
- Application starts without critical failures
- `/api/ledger` endpoint responds with a `2xx` HTTP status

**When it runs**:
- On every push to the `main` branch
- On every pull request targeting `main`

**Why it matters**:
- Provides immediate feedback on merge-breaking changes
- Protects against failing imports or basic configuration errors
- Establishes baseline protection for the ledger system
- Enables fast iteration cycles with quick feedback

**Logs and Troubleshooting**:
The smoke test captures and outputs:
- HTTP status codes from endpoint tests
- Response body content for debugging
- Clear pass/fail indicators
- Detailed error messages when endpoints fail to respond

### 2. Component Integrity Testing (Planned)

**Purpose**: Validate individual modules and components in isolation.

**Status**: Planned for future milestone

**Scope**:
- Unit tests for ledger operations
- Module-level integration tests
- Data validation and consistency checks
- Error handling verification

### 3. Functionality Testing (Planned)

**Purpose**: End-to-end validation of complete user workflows and system behaviors.

**Status**: Planned for future milestone

**Scope**:
- Full transaction lifecycle testing
- Multi-component interaction tests
- Performance and load testing
- Security and compliance validation

## CI Workflow Details

### Environment Setup

```yaml
Node.js: v20
Package Manager: npm
OS: ubuntu-latest (GitHub Actions)
```

### Workflow Steps

1. **Checkout Repository**: Clone the codebase
2. **Setup Node.js**: Configure Node v20 with npm cache
3. **Install Dependencies**: Run `npm ci` for clean install
4. **Lint** (if available): Run code quality checks
5. **Test** (if available): Execute existing test suite
6. **Build**: Compile the application
7. **Start Application**: Launch server in background (20-second warmup)
8. **Smoke Test**: Validate `/api/ledger` endpoint

### Endpoint Validation

The smoke test validates the `/api/ledger` endpoint:

```bash
# Test command captures HTTP status and response body
curl -s -o /tmp/response.txt -w "%{http_code}" http://localhost:3000/api/ledger

# Success criteria: HTTP status 2xx (200-299)
# Failure: Any non-2xx status code
```

**Success output**:
```
✓ Smoke test passed - /api/ledger returned 2xx status
```

**Failure output**:
```
✗ Smoke test failed - /api/ledger returned non-2xx status: [code]
[Response body content for debugging]
```

## Benefits of the Layered Approach

1. **Fast Feedback**: Smoke tests run in minutes, providing rapid validation
2. **Incremental Validation**: Each layer builds on the previous, ensuring stability
3. **Clear Failure Attribution**: Know exactly which layer (and thus which type of issue) caused a failure
4. **Efficient Resource Usage**: Only run comprehensive tests when basic tests pass
5. **Regression Protection**: Prevent breaking changes from reaching production

## Risk Assessment

**Current Risk Level**: None

The smoke test implementation is:
- Non-invasive (no application code changes)
- Focused on validation only
- Using standard CI/CD practices
- Well-isolated from production systems

## Future Enhancements

As the StagePort ecosystem grows, the CI pipeline will expand to include:

- **Component Integrity Layer**: Module-specific test suites
- **Functionality Layer**: Comprehensive end-to-end tests
- **Performance Benchmarks**: Automated performance regression detection
- **Security Scanning**: Automated vulnerability assessment
- **Deployment Automation**: Conditional deployment based on test results

## Contributing

When adding features to Movemint-Ledger:

1. Ensure smoke tests continue to pass
2. Consider adding component-level tests as that layer is implemented
3. Update this documentation if CI workflow changes
4. Test your changes locally before pushing

## Troubleshooting

### Smoke Test Failures

**Symptom**: `/api/ledger` endpoint returns non-2xx status

**Common causes**:
1. Application failed to start within 20 seconds
2. Port 3000 already in use
3. Missing or incorrect environment configuration
4. Breaking changes to endpoint path or logic
5. Dependency installation failures

**Resolution steps**:
1. Review the CI logs for error messages
2. Check the HTTP status code and response body
3. Verify the build step completed successfully
4. Ensure `npm run start` works locally
5. Confirm endpoint path is `/api/ledger`

### Build Failures

**Symptom**: `npm run build` step fails

**Common causes**:
1. Syntax errors in source code
2. Missing dependencies
3. Type errors (if using TypeScript)
4. Breaking changes in dependencies

**Resolution steps**:
1. Run `npm run build` locally
2. Review build output for specific errors
3. Verify `package.json` and lock file are in sync
4. Check for recent dependency updates

### Dependency Installation Failures

**Symptom**: `npm ci` step fails

**Common causes**:
1. Corrupted package-lock.json
2. Incompatible package versions
3. Network issues (rare in CI)
4. Private packages without proper authentication

**Resolution steps**:
1. Regenerate package-lock.json locally
2. Verify all packages are available on npm registry
3. Check for deprecated or removed packages
4. Review recent changes to dependencies

## Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [StagePort Documentation Index](INDEX.md)
