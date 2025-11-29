import type { NextApiRequest, NextApiResponse } from 'next';

type LedgerEntry = {
  id: string;
  type: 'quote' | 'invoice' | 'payment';
  amount: number;
  currency: string;
  createdAt: string;
};

type LedgerResponse = {
  status: string;
  entries: LedgerEntry[];
};

type ErrorResponse = {
  error: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LedgerResponse | ErrorResponse>
) {
  // Only allow GET requests
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  // Return a minimal response for the smoke test
  res.status(200).json({
    status: 'ok',
    entries: []
  });
}
