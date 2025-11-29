import Link from 'next/link'

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
      background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
      color: '#ffffff'
    }}>
      <h1 style={{
        fontSize: '3rem',
        marginBottom: '1rem',
        textAlign: 'center'
      }}>
        MoveMint-Ledger
      </h1>
      <p style={{
        fontSize: '1.25rem',
        marginBottom: '2rem',
        textAlign: 'center',
        maxWidth: '600px',
        opacity: 0.9
      }}>
        The financial backbone of the MoveMint ecosystem
      </p>
      <nav style={{
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Link
          href="/movemint"
          style={{
            padding: '0.75rem 1.5rem',
            background: '#e94560',
            borderRadius: '8px',
            fontWeight: 'bold',
            transition: 'background 0.2s'
          }}
        >
          Learn More
        </Link>
        <Link
          href="/api/ledger"
          style={{
            padding: '0.75rem 1.5rem',
            background: 'transparent',
            border: '2px solid #e94560',
            borderRadius: '8px',
            fontWeight: 'bold'
          }}
        >
          View API
        </Link>
      </nav>
    </main>
  )
}
