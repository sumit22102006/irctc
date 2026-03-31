import React, { useState } from 'react';
import { Search, XCircle, AlertTriangle, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mockTickets = {
  '1234567890': { train: '12301 - Howrah Rajdhani', from: 'NDLS', to: 'HWH', date: '02-Apr-2026', class: '3A', passengers: [{ name: 'Rahul Sharma', seat: 'B3/42', status: 'CNF' }], fare: 1850, refund: 1480 },
  '9876543210': { train: '22691 - Rajdhani Express', from: 'SBC', to: 'NDLS', date: '05-Apr-2026', class: '2A', passengers: [{ name: 'Priya Singh', seat: 'A1/12', status: 'CNF' }], fare: 3200, refund: 2560 },
};

const CancelTicket = () => {
  const [pnr, setPnr] = useState('');
  const [ticket, setTicket] = useState(null);
  const [selected, setSelected] = useState([]);
  const [cancelled, setCancelled] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError(''); setTicket(null); setCancelled(false); setSelected([]);
    if (!pnr || pnr.length < 10) { setError('Please enter a valid 10-digit PNR number.'); return; }
    const found = mockTickets[pnr];
    if (!found) { setError('No booking found for PNR ' + pnr + '. Try: 1234567890 or 9876543210'); return; }
    setTicket(found);
  };

  const handleCancel = () => {
    if (!selected.length) { setError('Please select at least one passenger to cancel.'); return; }
    setCancelled(true);
  };

  const refundStyle = { color: '#4ade80', fontWeight: 800, fontSize: '1.2rem' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '48px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '700px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(239,68,68,0.15)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <XCircle size={32} color="#ef4444" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>Cancel E-Ticket</h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Enter your PNR to view and cancel your booking</p>
          </div>

          <div className="glass" style={{ borderRadius: '20px', padding: '36px' }}>
            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              <input type="text" className="custom-input" placeholder="Enter 10-digit PNR number" maxLength={10} value={pnr} onChange={e => setPnr(e.target.value.replace(/\D/g,''))} style={{ flex: 1, fontSize: '1rem' }} />
              <button className="btn-primary" onClick={handleSearch} style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
                <Search size={18} /> Search
              </button>
            </div>

            {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#f87171', marginBottom: '16px', display: 'flex', gap: '10px', alignItems: 'center' }}><AlertTriangle size={16} />{error}</div>}

            {ticket && !cancelled && (
              <div>
                <div style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '14px', padding: '20px', marginBottom: '20px', border: '1px solid var(--border-glass)' }}>
                  <div style={{ fontWeight: 700, color: 'var(--orange-primary)', marginBottom: '12px', fontSize: '1rem' }}>PNR: {pnr}</div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    {[['Train', ticket.train], ['From', ticket.from], ['To', ticket.to], ['Date', ticket.date], ['Class', ticket.class], ['Fare Paid', '₹' + ticket.fare]].map(([l, v]) => (
                      <div key={l}><div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>{l}</div><div style={{ color: 'var(--text-main)', fontWeight: 600 }}>{v}</div></div>
                    ))}
                  </div>
                </div>

                <h3 style={{ color: 'var(--text-main)', fontWeight: 700, marginBottom: '14px', fontSize: '0.95rem' }}>Select Passengers to Cancel:</h3>
                {ticket.passengers.map((p, i) => (
                  <label key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '14px 16px', background: selected.includes(i) ? 'rgba(239,68,68,0.08)' : 'rgba(255,255,255,0.03)', borderRadius: '10px', border: `1px solid ${selected.includes(i) ? 'rgba(239,68,68,0.3)' : 'var(--border-glass)'}`, cursor: 'pointer', marginBottom: '10px', transition: 'all 0.2s' }}>
                    <input type="checkbox" checked={selected.includes(i)} onChange={() => setSelected(s => s.includes(i) ? s.filter(x => x !== i) : [...s, i])} style={{ width: '18px', height: '18px', accentColor: '#ef4444', flexShrink: 0 }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ color: 'var(--text-main)', fontWeight: 700 }}>{p.name}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>Seat: {p.seat} | Status: {p.status}</div>
                    </div>
                    {selected.includes(i) && <div style={{ color: '#4ade80', fontSize: '0.82rem', fontWeight: 700 }}>Refund: ₹{ticket.refund}</div>}
                  </label>
                ))}

                <div style={{ background: 'rgba(255,109,0,0.08)', border: '1px solid rgba(255,109,0,0.2)', borderRadius: '10px', padding: '14px 16px', marginBottom: '20px', display: 'flex', gap: '10px' }}>
                  <AlertTriangle size={16} color="var(--orange-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.83rem', margin: 0, lineHeight: 1.6 }}>Cancellation charges will be deducted as per Railway rules. Refund will be credited to your original payment source within 5-7 working days, or instantly to IRCTC E-Wallet.</p>
                </div>

                <button onClick={handleCancel} style={{ width: '100%', padding: '14px', background: 'linear-gradient(135deg, #dc2626, #ef4444)', color: '#fff', border: 'none', borderRadius: '12px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer' }}>
                  Cancel Selected Ticket(s)
                </button>
              </div>
            )}

            {cancelled && (
              <div style={{ textAlign: 'center', padding: '32px 0' }}>
                <CheckCircle size={56} color="#4ade80" style={{ marginBottom: '16px' }} />
                <h3 style={{ color: '#4ade80', fontWeight: 800, fontSize: '1.3rem', marginBottom: '8px' }}>Cancellation Successful!</h3>
                <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>PNR: {pnr} has been cancelled.</p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Refund of <span style={refundStyle}>₹{ticket?.refund}</span> will be processed within 5-7 working days.</p>
                <button onClick={() => { setPnr(''); setTicket(null); setCancelled(false); setSelected([]); }} style={{ marginTop: '20px', padding: '10px 28px', background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}>Cancel Another Ticket</button>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CancelTicket;
