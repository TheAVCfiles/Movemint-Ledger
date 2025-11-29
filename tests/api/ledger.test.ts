import { describe, it, expect } from 'vitest';
import { NextRequest } from 'next/server';
import { GET, POST } from '../../app/api/ledger/route';

const BASE_URL = process.env.TEST_BASE_URL || 'http://localhost:3000';

describe('/api/ledger', () => {
  describe('POST /api/ledger', () => {
    it('should create a ledger entry with valid data', async () => {
      const request = new NextRequest(`${BASE_URL}/api/ledger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'ATTENDANCE',
          details: 'Test student checked in',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(201);
      expect(data.success).toBe(true);
      expect(data.entry).toBeDefined();
      expect(data.entry.action).toBe('ATTENDANCE');
      expect(data.entry.details).toBe('Test student checked in');
      expect(data.entry.id).toBeDefined();
      expect(data.entry.timestamp).toBeDefined();
    });

    it('should return 400 when action is missing', async () => {
      const request = new NextRequest(`${BASE_URL}/api/ledger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          details: 'Missing action field',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error).toContain('Missing required fields');
    });

    it('should return 400 when details is missing', async () => {
      const request = new NextRequest(`${BASE_URL}/api/ledger`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'PAYMENT',
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.success).toBe(false);
      expect(data.error).toContain('Missing required fields');
    });
  });

  describe('GET /api/ledger', () => {
    it('should return an array of entries', async () => {
      const request = new NextRequest(`${BASE_URL}/api/ledger`, {
        method: 'GET',
      });

      const response = await GET(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data.success).toBe(true);
      expect(Array.isArray(data.entries)).toBe(true);
    });
  });
});
