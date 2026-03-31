import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PNREnquiry = () => {
  const [pnr, setPnr] = useState('');
  const [result, setResult] = useState(null);

  const handleCheck = () => {
    if (!pnr || pnr.length < 10) {
      alert('Please enter a valid 10-digit PNR number.');
      return;
    }
    // Mock result
    setResult({
      pnr,
      trainNo: '12301',
      trainName: 'Howrah Rajdhani',
      from: 'NDLS - New Delhi',
      to: 'HWH - Howrah Junction',
      date: '01-Apr-2026',
      class: '3A - AC 3 Tier',
      status: 'CNF / Coach B3 / Seat 42',
      chartStatus: 'Chart Not Prepared'
    });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        <div className="glass" style={{ width: '100%', maxWidth: '700px', borderRadius: '24px', padding: '48px 40px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '8px', color: 'var(--text-main)' }}>
            PNR Enquiry
          </h1>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '36px' }}>
            Enter your 10-digit PNR number to check booking status
          </p>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
            <input
              type="text"
              className="custom-input"
              placeholder="Enter PNR number"
              maxLength={10}
              value={pnr}
              onChange={e => setPnr(e.target.value.replace(/\D/g, ''))}
              style={{ flex: 1, fontSize: '1rem' }}
            />
            <button className="btn-primary" onClick={handleCheck} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
              <Search size={18} /> Get Status
            </button>
          </div>

          {result && (
            <div style={{ borderTop: '1px solid var(--border-glass)', paddingTop: '28px' }}>
              <h3 style={{ color: 'var(--orange-primary)', fontWeight: 700, marginBottom: '20px', fontSize: '1.1rem' }}>
                PNR: {result.pnr}
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                {[
                  ['Train', `${result.trainNo} - ${result.trainName}`],
                  ['From', result.from],
                  ['To', result.to],
                  ['Date', result.date],
                  ['Class', result.class],
                  ['Chart Status', result.chartStatus],
                ].map(([label, val]) => (
                  <div key={label} style={{ backgroundColor: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '14px 18px', border: '1px solid var(--border-glass)' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px', fontWeight: 600 }}>{label}</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.95rem' }}>{val}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '16px', backgroundColor: 'rgba(255,109,0,0.1)', borderRadius: '12px', padding: '16px 20px', border: '1px solid rgba(255,109,0,0.3)' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '4px', fontWeight: 600 }}>Booking Status</div>
                <div style={{ color: '#4ade80', fontWeight: 800, fontSize: '1.05rem' }}>{result.status}</div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PNREnquiry;
