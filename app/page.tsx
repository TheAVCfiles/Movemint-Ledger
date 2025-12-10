export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif', maxWidth: '800px', margin: '0 auto' }}>
      <h1>MoveMint Ledger</h1>
      <p>Welcome to the MoveMint Ledger API. This application provides a RESTful API for managing ledger entries.</p>
      
      <h2>API Endpoints</h2>
      
      <h3>GET /api/ledger</h3>
      <p>Retrieve all ledger entries, sorted by timestamp.</p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`{
  "schemaVersion": "1.0.0",
  "entries": [
    {
      "id": "1234567890-abc123",
      "type": "deposit",
      "amount": 100.50,
      "timestamp": "2025-12-10T03:47:30.000Z"
    }
  ]
}`}
      </pre>
      
      <h3>POST /api/ledger</h3>
      <p>Create a new ledger entry. Requires <code>type</code> (string) and <code>amount</code> (number) fields.</p>
      <p><strong>Request:</strong></p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`{
  "type": "deposit",
  "amount": 100.50
}`}
      </pre>
      <p><strong>Response:</strong></p>
      <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflow: 'auto' }}>
{`{
  "schemaVersion": "1.0.0",
  "entry": {
    "id": "1234567890-abc123",
    "type": "deposit",
    "amount": 100.50,
    "timestamp": "2025-12-10T03:47:30.000Z"
  }
}`}
      </pre>

      <h2>Features</h2>
      <ul>
        <li>Schema versioning (v1.0.0)</li>
        <li>Deterministic, timestamp-sorted responses</li>
        <li>Strict payload validation</li>
        <li>RESTful API design</li>
      </ul>
    </main>
  );
}
