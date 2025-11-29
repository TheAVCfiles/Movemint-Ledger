# Movemint-Ledger

MoveMint Studio Ledger - A transaction tracking and management MVP.

## Features

- **Landing Page** (`/movemint`) - Beautiful studio interface for transaction management
- **Ledger API** (`/api/ledger`) - REST API endpoint for programmatic access
- **Vercel Ready** - Configured for seamless deployment

## Getting Started

### Prerequisites

- Node.js 22+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Production Build

```bash
npm run build
npm start
```

## API Reference

### GET /api/ledger

Returns ledger status and entries.

**Response:**
```json
{
  "status": "ok",
  "version": "1.0.0",
  "name": "MoveMint Ledger API",
  "timestamp": "2024-01-01T00:00:00Z",
  "entries": [...],
  "balance": 74.5
}
```

## Deployment

This project is configured for Vercel deployment. Simply connect your GitHub repository to Vercel for automatic deployments.

## License

See [LICENSE](LICENSE) for details.