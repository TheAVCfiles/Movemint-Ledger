import { NextResponse } from "next/server";

export async function GET() {
  const ledgerData = {
    status: "ok",
    version: "1.0.0",
    name: "MoveMint Ledger API",
    timestamp: new Date().toISOString(),
    entries: [
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
    ],
    balance: 74.5,
  };

  return NextResponse.json(ledgerData);
}
