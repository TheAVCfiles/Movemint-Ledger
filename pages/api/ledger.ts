import type { NextApiRequest, NextApiResponse } from 'next';

interface LedgerEntry {
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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LedgerResponse>
) {
  // Set CORS headers for API access
  // In production, replace with specific allowed origins
  const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',') || [];
  const origin = req.headers.origin || '';
  
  if (allowedOrigins.includes(origin) || process.env.NODE_ENV === 'development') {
    res.setHeader('Access-Control-Allow-Origin', origin || '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method === 'POST') {
    try {
      const { action, details } = req.body;

      if (!action || !details) {
        return res.status(400).json({
          success: false,
          error: 'Missing required fields: action and details',
        });
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

      return res.status(201).json({
        success: true,
        entry,
      });
    } catch (error) {
      console.error('Ledger API internal error:', error);
      return res.status(500).json({
        success: false,
        error: 'Internal server error',
      });
    }
  }

  if (req.method === 'GET') {
    return res.status(200).json({
      success: true,
      entries: ledgerStore.slice(0, 50),
    });
  }

  return res.status(405).json({
    success: false,
    error: 'Method not allowed',
  });
}
