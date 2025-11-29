# MoveMint-Ledger: Operations & Project Summary

## Overview

**MoveMint-Ledger** is the financial backbone of the MoveMint ecosystem—a transparent, auditable ledger system designed to track all monetary flows between customers, movers, and the platform. This document provides a comprehensive summary of project goals, MVP scope, money path architecture, current status, and engineering next steps.

---

## Project Goals

### Primary Objectives

1. **Financial Transparency**: Provide a clear, auditable record of all transactions within the MoveMint platform.
2. **Trust & Accountability**: Enable customers and movers to verify payment flows and platform fees.
3. **Scalable Architecture**: Build a foundation that supports future payment integrations, reporting, and analytics.
4. **Compliance Ready**: Structure data and processes to support future regulatory requirements.

### Success Metrics

- 100% transaction traceability from customer payment to mover payout
- Sub-second API response times for ledger queries
- Zero data discrepancies between ledger and payment processor records
- Audit trail completeness for all financial events

---

## MVP Scope

### In Scope (v1.0)

| Feature | Description | Priority |
|---------|-------------|----------|
| Landing Page | `/movemint` public-facing page explaining the ledger system | P0 |
| Ledger API | `/api/ledger` endpoint for transaction queries | P0 |
| Transaction Recording | Log all payment events with timestamps and metadata | P0 |
| Basic Authentication | API key-based access control | P1 |
| Health Check | System status endpoint for monitoring | P1 |

### Out of Scope (v1.0)

- Real-time payment processing integration
- Advanced analytics dashboard
- Multi-currency support
- Automated reconciliation reports
- Mobile application

---

## Money Path Architecture

### Transaction Flow

```
┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│  Customer   │───▶│   Platform  │───▶│   Ledger    │───▶│    Mover    │
│   Payment   │    │   (MoveMint)│    │   Record    │    │   Payout    │
└─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘
       │                  │                  │                  │
       │                  │                  │                  │
       ▼                  ▼                  ▼                  ▼
   [Payment          [Platform Fee      [Immutable        [Net Payment
    Captured]         Calculated]        Entry Created]    Disbursed]
```

### Fee Structure (MVP)

- **Platform Fee**: Configurable percentage deducted from each transaction
- **Mover Payout**: Customer payment minus platform fee
- **All amounts recorded in cents** to avoid floating-point issues

### Ledger Entry Schema

```json
{
  "id": "uuid",
  "timestamp": "ISO-8601",
  "type": "PAYMENT | PAYOUT | FEE | REFUND",
  "amount_cents": 10000,
  "currency": "USD",
  "from_account": "customer_id",
  "to_account": "mover_id | platform",
  "reference": "external_transaction_id",
  "metadata": {}
}
```

---

## Current Status

### Completed ✅

- [x] Repository initialized with MIT license
- [x] GitHub CI/CD pipeline configured (`ci-smoke.yml`)
- [x] Bug report issue template created
- [x] Project documentation structure established

### In Progress 🚧

- [ ] Landing page implementation (`/movemint`)
- [ ] Ledger API endpoint (`/api/ledger`)
- [ ] Vercel deployment configuration

### Planned 📋

- [ ] Authentication layer
- [ ] Database schema design
- [ ] Payment processor integration hooks
- [ ] Monitoring and alerting setup

---

## Engineering Next Steps

### Immediate (Sprint 1)

1. **Set Up Next.js Application**
   - Initialize Next.js 16+ with App Router
   - Configure TypeScript for type safety
   - Set up ESLint and Prettier

2. **Implement Landing Page**
   - Create `/movemint` route with project overview
   - Responsive design for mobile and desktop
   - Clear call-to-action for API documentation

3. **Build Ledger API**
   - Implement `/api/ledger` GET endpoint
   - Return mock transaction data for testing
   - Add proper error handling and status codes

4. **Deploy to Vercel**
   - Configure `vercel.json` for optimal deployment
   - Set up environment variables
   - Verify CI pipeline triggers deployments

### Short-term (Sprint 2-3)

5. **Database Integration**
   - Design PostgreSQL schema for ledger entries
   - Implement database migrations
   - Add connection pooling for performance

6. **Authentication**
   - Implement API key validation
   - Add rate limiting
   - Set up CORS policies

7. **Testing**
   - Unit tests for API endpoints
   - Integration tests for database operations
   - End-to-end smoke tests

### Medium-term (Sprint 4-6)

8. **Payment Integration**
   - Stripe webhook handlers
   - Transaction reconciliation logic
   - Error recovery mechanisms

9. **Monitoring**
   - Application performance monitoring (APM)
   - Error tracking and alerting
   - Usage analytics

---

## Deployment Strategy

### Environments

| Environment | URL | Purpose |
|-------------|-----|---------|
| Development | `localhost:3000` | Local development |
| Preview | `*.vercel.app` | PR previews |
| Production | TBD | Live system |

### CI/CD Pipeline

```yaml
Push to main → Lint → Test → Build → Deploy to Vercel
```

### Vercel Configuration

- **Framework**: Next.js
- **Node Version**: 22.x
- **Build Command**: `npm run build`
- **Output Directory**: `.next`

---

## Contributing

1. Check existing [issues](../../issues) for work items
2. Use the Feature Request template for new proposals
3. Follow the established code style and conventions
4. Ensure all tests pass before submitting PRs
5. Request review from maintainers

---

## Contact

For questions about this project, please open a GitHub issue or contact the maintainers through the repository.

---

*Last Updated: November 2025*
