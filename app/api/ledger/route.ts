import { NextRequest, NextResponse } from 'next/server';

// Schema version for ledger API
const SCHEMA_VERSION = '1.0.0';

// In-memory ledger storage (in a real app, this would be a database)
interface LedgerEntry {
  id: string;
  type: string;
  amount: number;
  timestamp: string;
}

// Store ledger entries in memory
const ledgerEntries: LedgerEntry[] = [];

// Helper function to generate unique ID
function generateId(): string {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}

// GET handler - returns all ledger entries sorted by timestamp
export async function GET(request: NextRequest) {
  // Sort entries by timestamp to ensure deterministic order
  const sortedEntries = [...ledgerEntries].sort((a, b) => {
    return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
  });

  return NextResponse.json({
    schemaVersion: SCHEMA_VERSION,
    entries: sortedEntries
  });
}

// POST handler - adds a new ledger entry
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Strict validation: type and amount are required
    if (!body.type || typeof body.type !== 'string') {
      return NextResponse.json(
        { 
          error: 'Invalid request: "type" field is required and must be a string',
          schemaVersion: SCHEMA_VERSION 
        },
        { status: 400 }
      );
    }

    if (body.amount === undefined || typeof body.amount !== 'number') {
      return NextResponse.json(
        { 
          error: 'Invalid request: "amount" field is required and must be a number',
          schemaVersion: SCHEMA_VERSION 
        },
        { status: 400 }
      );
    }

    // Create new ledger entry
    const newEntry: LedgerEntry = {
      id: generateId(),
      type: body.type,
      amount: body.amount,
      timestamp: new Date().toISOString()
    };

    // Add to ledger
    ledgerEntries.push(newEntry);

    return NextResponse.json({
      schemaVersion: SCHEMA_VERSION,
      entry: newEntry
    }, { status: 201 });

  } catch (error) {
    return NextResponse.json(
      { 
        error: 'Invalid JSON payload',
        schemaVersion: SCHEMA_VERSION 
      },
      { status: 400 }
    );
  }
}
