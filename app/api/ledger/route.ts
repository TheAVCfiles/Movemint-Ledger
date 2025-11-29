import { NextRequest, NextResponse } from 'next/server';

export interface LedgerEntry {
  id: string;
  timestamp: string;
  action: string;
  details: string;
}

interface LedgerResponse {
  success: boolean;
  entry?: LedgerEntry;
  entries?: LedgerEntry[];
  error?: string;
}

// In-memory storage for demo purposes
// NOTE: Data will be lost on server restart. Use a proper database for production.
const ledgerStore: LedgerEntry[] = [];

function generateId(): string {
  return `ledger_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

function getCorsHeaders(origin: string | null): HeadersInit {
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
  const headers: HeadersInit = {
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };

  if (origin && (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development')) {
    headers['Access-Control-Allow-Origin'] = origin;
  }

  return headers;
}

export async function OPTIONS(request: NextRequest): Promise<NextResponse> {
  const origin = request.headers.get('origin');
  return new NextResponse(null, {
    status: 200,
    headers: getCorsHeaders(origin),
  });
}

export async function POST(request: NextRequest): Promise<NextResponse<LedgerResponse>> {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  try {
    const body = await request.json();
    const { action, details } = body;

    if (!action || !details) {
      return NextResponse.json(
        {
          success: false,
          error: 'Missing required fields: action and details',
        },
        { status: 400, headers }
      );
    }

    const entry: LedgerEntry = {
      id: generateId(),
      timestamp: new Date().toISOString(),
      action: String(action),
      details: String(details),
    };

    ledgerStore.unshift(entry);

    // Keep only the last 100 entries in memory
    if (ledgerStore.length > 100) {
      ledgerStore.pop();
    }

    return NextResponse.json(
      {
        success: true,
        entry,
      },
      { status: 201, headers }
    );
  } catch (error) {
    console.error('Ledger API internal error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Internal server error',
      },
      { status: 500, headers }
    );
  }
}

export async function GET(request: NextRequest): Promise<NextResponse<LedgerResponse>> {
  const origin = request.headers.get('origin');
  const headers = getCorsHeaders(origin);

  return NextResponse.json(
    {
      success: true,
      entries: ledgerStore.slice(0, 50),
    },
    { status: 200, headers }
  );
}
