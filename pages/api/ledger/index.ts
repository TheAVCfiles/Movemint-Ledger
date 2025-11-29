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

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LedgerResponse>
) {
  // Return a minimal response for the smoke test
  res.status(200).json({
    status: 'ok',
    entries: []
  });
}
