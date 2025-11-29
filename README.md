# Movemint-Ledger

The financial backbone of the MoveMint ecosystem—a transparent, auditable ledger system designed to track all monetary flows between customers, movers, and the platform.

## Quick Start

```bash
# Install dependencies
npm ci

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start
```

## Endpoints

- **Landing Page**: `/movemint` - Public-facing page explaining the ledger system
- **Ledger API**: `/api/ledger` - REST API endpoint for transaction queries

## Documentation

See [OPS_PROJECT.md](./OPS_PROJECT.md) for comprehensive project documentation including:
- Project goals and MVP scope
- Money path architecture
- Current status and next steps
- Deployment strategy

## Deployment

This project is configured for deployment on Vercel. See `vercel.json` for configuration details.

## Contributing

1. Check existing [issues](../../issues) for work items
2. Use the Feature Request template for new proposals
3. Submit PRs for review

## License

MIT License - see [LICENSE](./LICENSE) for details.