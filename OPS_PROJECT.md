# MoveMint-Ledger: Operational Project Summary

## Product Vision

MoveMint-Ledger is a lightweight financial tracking and movement logging platform. The product focuses on simplicity and clarity, enabling users to track financial transactions and movements through an accessible API and web interface.

## Target Outcomes

- **Primary**: Ship the `/movemint` frontend and `/api/ledger` API endpoint to production
- **Secondary**: Establish a repeatable deployment pipeline on Vercel
- **Long-term**: Build a sustainable product with clear revenue paths

## MVP Scope

The Minimum Viable Product includes:

| Endpoint | Purpose |
|----------|---------|
| `/movemint` | User-facing dashboard for viewing and managing ledger entries |
| `/api/ledger` | RESTful API for ledger data operations (CRUD) |

### MVP Acceptance Criteria

- [ ] `/movemint` renders a functional UI for ledger interactions
- [ ] `/api/ledger` returns valid JSON responses
- [ ] Both endpoints pass CI smoke tests
- [ ] Deployment to Vercel succeeds without manual intervention

## Revenue Strategies

1. **Freemium Model**: Basic ledger functionality free; premium features (analytics, exports, integrations) paid
2. **API Access Tiers**: Rate-limited free tier; paid tiers for higher volume and SLA guarantees
3. **Enterprise Licensing**: Custom deployments for business clients requiring dedicated infrastructure

## Vercel Deployment

### Prerequisites

- Node.js 22+
- Vercel CLI installed (`npm i -g vercel`)
- GitHub repository connected to Vercel

### Deployment Steps

1. **Connect Repository**
   ```bash
   vercel link
   ```

2. **Configure Environment Variables** (if needed)
   - Set via Vercel Dashboard → Settings → Environment Variables

3. **Deploy to Preview**
   ```bash
   vercel
   ```

4. **Deploy to Production**
   ```bash
   vercel --prod
   ```

### Vercel Configuration

Vercel auto-detects most frameworks (Next.js, React, Vue, etc.) and configures builds automatically. For projects requiring custom settings, add a `vercel.json` file:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Adjust `outputDirectory` based on your framework (e.g., `.next` for Next.js, `build` for Create React App, `dist` for Vite).

> **Note**: Only add `vercel.json` if auto-detection fails or custom configuration is required.

## Next Steps

1. **Immediate**: Complete core `/movemint` UI and `/api/ledger` implementation
2. **This Sprint**: Pass all CI smoke tests and deploy to Vercel preview
3. **Next Sprint**: Add user authentication and basic analytics
4. **Future**: Implement premium features and payment integration

## Workflow & Process

- Use GitHub Issues for all feature requests and bug reports
- Feature requests require user stories and acceptance criteria
- All PRs must pass CI before merge
- Deployments trigger automatically on merge to `main`

---

*Last updated: November 2025*
