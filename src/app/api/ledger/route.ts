import { NextResponse } from "next/server";

interface LedgerEntry {
  id: number;
  type: "credit" | "debit";
  amount: number;
  description: string;
  createdAt: string;
}

export async function GET() {
  const entries: LedgerEntry[] = [
    {
      id: 1,
      type: "credit",
      amount: 100.0,
      description: "Initial deposit",
      createdAt: "2024-01-01T00:00:00Z",
    },
    {
      id: 2,
      type: "debit",
      amount: 25.5,
      description: "Service fee",
      createdAt: "2024-01-02T00:00:00Z",
    },
  ];

  const balance = entries.reduce(
    (sum, entry) => sum + (entry.type === "credit" ? entry.amount : -entry.amount),
    0
  );

  const ledgerData = {
    status: "ok",
    version: "1.0.0",
    name: "MoveMint Ledger API",
    timestamp: new Date().toISOString(),
    entries,
    balance,
  };

  return NextResponse.json(ledgerData);
}
