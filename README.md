# MoveMint Ledger

MoveMint Ledger is a Next.js application that provides a RESTful API for managing ledger entries with deterministic behavior, schema versioning, and strong governance compliance.

## Features

- **Schema Versioning**: All API responses include a `schemaVersion` field (currently `1.0.0`) for tracking API evolution
- **Deterministic Behavior**: GET responses are sorted by timestamp to ensure consistency
- **Strict Validation**: POST requests validate payload structure and reject malformed inputs
- **CI/CD Integration**: Automated replay integrity tests ensure data consistency
- **Governance Compliance**: Aligned with Maintainer's Shield governance framework

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm

### Installation

```bash
npm ci
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Build

```bash
npm run build
```

### Production

```bash
npm run start
```

## API Endpoints

### GET /api/ledger

Retrieves all ledger entries, sorted by timestamp in ascending order.

**Response:**

```json
{
  "schemaVersion": "1.0.0",
  "entries": [
    {
      "id": "1702234567890-abc123def",
      "type": "deposit",
      "amount": 100.50,
      "timestamp": "2025-12-10T03:47:30.698Z"
    },
    {
      "id": "1702234567891-xyz789ghi",
      "type": "withdrawal",
      "amount": 50.25,
      "timestamp": "2025-12-10T03:48:15.123Z"
    }
  ]
}
```

**Features:**
- Returns deterministic, timestamp-sorted entries
- Always includes `schemaVersion` field
- Empty array if no entries exist

### POST /api/ledger

Creates a new ledger entry.

**Request:**

```json
{
  "type": "deposit",
  "amount": 100.50
}
```

**Required Fields:**
- `type` (string): The type of ledger entry (e.g., "deposit", "withdrawal", "transfer")
- `amount` (number): The transaction amount

**Success Response (201):**

```json
{
  "schemaVersion": "1.0.0",
  "entry": {
    "id": "1702234567890-abc123def",
    "type": "deposit",
    "amount": 100.50,
    "timestamp": "2025-12-10T03:47:30.698Z"
  }
}
```

**Error Response (400):**

```json
{
  "error": "Invalid request: \"type\" field is required and must be a string",
  "schemaVersion": "1.0.0"
}
```

**Validation Rules:**
- `type` must be a non-empty string
- `amount` must be a number
- Malformed JSON returns 400 error
- All responses include `schemaVersion`

## API Schema

The ledger API follows the schema defined in `src/ledger/schema/v1.json`.

### Schema Version: 1.0.0

**LedgerEntry Object:**
```json
{
  "id": "string (auto-generated)",
  "type": "string (required)",
  "amount": "number (required)",
  "timestamp": "string (ISO 8601, auto-generated)"
}
```

**GET Response Format:**
```json
{
  "schemaVersion": "1.0.0",
  "entries": [LedgerEntry]
}
```

**POST Response Format:**
```json
{
  "schemaVersion": "1.0.0",
  "entry": LedgerEntry
}
```

## Testing

The project includes comprehensive CI tests:

1. **Build Test**: Ensures the application builds successfully
2. **Smoke Test**: Verifies the ledger endpoint is accessible
3. **Replay Integrity Tests**:
   - POST entry verification
   - GET entry retrieval confirmation
   - Deterministic ordering validation
   - Malformed payload rejection

Run tests locally:

```bash
npm run lint   # Lint the code
npm run build  # Build the application
npm run test   # Run tests (if available)
```

## Governance & Compliance

This project aligns with the Maintainer's Shield governance framework:

- **Phase 1 (Shield Compliance)**: ✅ Implemented
  - Schema versioning for API evolution
  - Deterministic behavior for consistency
  - Strict validation for data integrity
  
- **Phase 2 (Automation)**: ✅ Implemented
  - CI replay tests enforce ledger safety
  - Automated validation in pull requests
  - Governance workflows integrated

**Labels:**
- `ledger`: Ledger-related changes
- `api`: API endpoint modifications
- `risk:ledger-critical`: Critical ledger operations
- `ci`: CI/CD pipeline changes
- `docs`: Documentation updates

## Architecture

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **API Routes**: Next.js Route Handlers
- **Storage**: In-memory (development)
- **Schema**: JSON Schema v7

## Project Structure

```
Movemint-Ledger/
├── app/
│   ├── api/
│   │   └── ledger/
│   │       └── route.ts         # Ledger API endpoint
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Landing page
├── src/
│   └── ledger/
│       └── schema/
│           └── v1.json          # Ledger schema definition
├── .github/
│   └── workflows/
│       ├── ci-smoke.yml         # CI with replay tests
│       └── merge-gate.yml       # Merge gate workflow
├── package.json
├── tsconfig.json
├── next.config.js
└── README.md
```

## Contributing

All contributions must comply with the Maintainer's Shield governance framework. Please ensure:

1. Schema changes are versioned appropriately
2. API behavior remains deterministic
3. CI tests pass, including replay integrity tests
4. Documentation is updated for any API changes

## License

See [LICENSE](LICENSE) file for details.