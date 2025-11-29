import { NextResponse } from 'next/server'

// Sample ledger entries for MVP demonstration
const sampleLedgerEntries = [
  {
    id: 'txn_001',
    timestamp: '2025-11-29T10:00:00Z',
    type: 'PAYMENT',
    amount_cents: 15000,
    currency: 'USD',
    from_account: 'customer_abc123',
    to_account: 'platform',
    reference: 'move_20251129_001',
    metadata: {
      description: 'Moving service payment',
      move_date: '2025-12-01'
    }
  },
  {
    id: 'txn_002',
    timestamp: '2025-11-29T10:00:01Z',
    type: 'FEE',
    amount_cents: 2250,
    currency: 'USD',
    from_account: 'platform',
    to_account: 'platform_revenue',
    reference: 'move_20251129_001',
    metadata: {
      description: 'Platform fee (15%)',
      original_transaction: 'txn_001'
    }
  },
  {
    id: 'txn_003',
    timestamp: '2025-11-29T10:00:02Z',
    type: 'PAYOUT',
    amount_cents: 12750,
    currency: 'USD',
    from_account: 'platform',
    to_account: 'mover_xyz789',
    reference: 'move_20251129_001',
    metadata: {
      description: 'Mover payout',
      original_transaction: 'txn_001'
    }
  }
]

export async function GET() {
  return NextResponse.json({
    success: true,
    message: 'MoveMint-Ledger API v1.0',
    data: {
      total_entries: sampleLedgerEntries.length,
      entries: sampleLedgerEntries
    },
    meta: {
      version: '1.0.0',
      timestamp: new Date().toISOString()
    }
  })
}
