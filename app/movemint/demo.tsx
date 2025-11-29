'use client';

import { useState } from 'react';

interface LedgerEntry {
  id: string;
  timestamp: string;
  action: string;
  details: string;
}

export default function LedgerDemo() {
  const [ledgerEntries, setLedgerEntries] = useState<LedgerEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const logAction = async (action: string, details: string) => {
    setLoading(true);
    try {
      const response = await fetch('/api/ledger', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ action, details }),
      });
      const data = await response.json();
      if (data.success) {
        setLedgerEntries((prev) => [data.entry, ...prev]);
        setMessage('Action logged successfully!');
      }
    } catch (error) {
      console.error('Ledger API error:', error);
      setMessage('Error logging action');
    }
    setLoading(false);
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <div className="demo-container">
      <div className="demo-actions">
        <h4>Quick Actions</h4>
        <div className="demo-buttons">
          <button 
            className="btn btn-demo" 
            onClick={() => logAction('ATTENDANCE', 'Student checked in for Ballet 101')}
            disabled={loading}
          >
            📋 Log Attendance
          </button>
          <button 
            className="btn btn-demo" 
            onClick={() => logAction('PAYMENT', 'Monthly subscription payment received')}
            disabled={loading}
          >
            💰 Record Payment
          </button>
          <button 
            className="btn btn-demo" 
            onClick={() => logAction('SCHEDULE', 'New class added: Hip Hop Fundamentals')}
            disabled={loading}
          >
            📅 Add Class
          </button>
          <button 
            className="btn btn-demo" 
            onClick={() => logAction('STUDENT', 'New student registration completed')}
            disabled={loading}
          >
            👤 Register Student
          </button>
        </div>
        {message && <div className="demo-message">{message}</div>}
      </div>
      
      <div className="ledger-display">
        <h4>📜 Ledger Activity Log</h4>
        <div className="ledger-entries">
          {ledgerEntries.length === 0 ? (
            <p className="ledger-empty">Click an action above to see live ledger entries</p>
          ) : (
            ledgerEntries.map((entry) => (
              <div key={entry.id} className="ledger-entry">
                <span className="ledger-time">{new Date(entry.timestamp).toLocaleTimeString()}</span>
                <span className="ledger-action">{entry.action}</span>
                <span className="ledger-details">{entry.details}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
