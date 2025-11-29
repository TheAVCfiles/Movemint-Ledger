export const metadata = {
  title: 'About MoveMint-Ledger',
  description: 'Learn about the MoveMint-Ledger financial system',
}

export default function MoveMintPage() {
  return (
    <main style={{
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: '#ffffff'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>
        <header style={{ marginBottom: '3rem', textAlign: 'center' }}>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
            MoveMint-Ledger
          </h1>
          <p style={{ fontSize: '1.25rem', opacity: 0.9 }}>
            Transparent Financial Tracking for the Moving Industry
          </p>
        </header>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#e94560' }}>
            What is MoveMint-Ledger?
          </h2>
          <p style={{ lineHeight: 1.7, opacity: 0.9 }}>
            MoveMint-Ledger is the financial backbone of the MoveMint ecosystem—a transparent, 
            auditable ledger system designed to track all monetary flows between customers, 
            movers, and the platform. Every transaction is recorded with full traceability, 
            ensuring trust and accountability for all parties involved.
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#e94560' }}>
            Key Features
          </h2>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0,
            display: 'grid',
            gap: '1rem'
          }}>
            {[
              { title: 'Transaction Transparency', desc: 'Every payment is tracked from customer to mover' },
              { title: 'Real-time API', desc: 'Query ledger data programmatically via REST API' },
              { title: 'Audit Trail', desc: 'Complete history of all financial events' },
              { title: 'Platform Fee Tracking', desc: 'Clear breakdown of fees and payouts' }
            ].map((feature, index) => (
              <li key={index} style={{
                padding: '1rem',
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '8px',
                borderLeft: '4px solid #e94560'
              }}>
                <strong style={{ display: 'block', marginBottom: '0.25rem' }}>
                  {feature.title}
                </strong>
                <span style={{ opacity: 0.8 }}>{feature.desc}</span>
              </li>
            ))}
          </ul>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#e94560' }}>
            API Access
          </h2>
          <p style={{ lineHeight: 1.7, opacity: 0.9, marginBottom: '1rem' }}>
            Access ledger data through our REST API endpoint:
          </p>
          <code style={{
            display: 'block',
            padding: '1rem',
            background: 'rgba(0,0,0,0.3)',
            borderRadius: '8px',
            fontSize: '0.9rem'
          }}>
            GET /api/ledger
          </code>
        </section>

        <footer style={{
          textAlign: 'center',
          paddingTop: '2rem',
          borderTop: '1px solid rgba(255,255,255,0.1)',
          opacity: 0.7
        }}>
          <p>© 2025 MoveMint-Ledger. MIT License.</p>
        </footer>
      </div>
    </main>
  )
}
