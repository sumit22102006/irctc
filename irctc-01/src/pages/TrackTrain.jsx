import React, { useState } from 'react';
import { Search, MapPin, Clock, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mockTrainStatus = {
  '12301': { name: 'Howrah Rajdhani', from: 'New Delhi', to: 'Howrah Jn', delay: 0, lastStation: 'Mughal Sarai', lastUpdate: '02:14 AM', stations: [{ name: 'New Delhi (NDLS)', sched: '16:55', actual: '16:55', status: 'Departed', delay: 0 }, { name: 'Kanpur Central (CNB)', sched: '21:45', actual: '21:48', status: 'Departed', delay: 3 }, { name: 'Mughal Sarai (MGS)', sched: '00:58', actual: '01:02', status: 'Departed', delay: 4 }, { name: 'Patna Jn (PNBE)', sched: '03:00', actual: '—', status: 'Expected', delay: 0 }, { name: 'Howrah Jn (HWH)', sched: '09:55', actual: '—', status: 'Expected', delay: 0 }] },
  '22691': { name: 'Rajdhani Express', from: 'KSR Bengaluru', to: 'Hazrat Nizamuddin', delay: 15, lastStation: 'Bhopal Jn', lastUpdate: '01:32 AM', stations: [{ name: 'KSR Bengaluru (SBC)', sched: '20:00', actual: '20:00', status: 'Departed', delay: 0 }, { name: 'Vijayawada (BZA)', sched: '02:15', actual: '02:28', status: 'Departed', delay: 13 }, { name: 'Nagpur (NGP)', sched: '09:00', actual: '09:15', status: 'Departed', delay: 15 }, { name: 'Bhopal (BPL)', sched: '13:30', actual: '—', status: 'Expected', delay: 15 }, { name: 'H. Nizamuddin (NZM)', sched: '19:55', actual: '—', status: 'Expected', delay: 15 }] },
};

const TrackTrain = () => {
  const [trainNo, setTrainNo] = useState('');
  const [date, setDate] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = () => {
    setError(''); setResult(null);
    if (!trainNo.trim()) { setError('Please enter a train number.'); return; }
    const found = mockTrainStatus[trainNo.trim()];
    if (!found) { setError(`Train ${trainNo} not found. Try: 12301 or 22691`); return; }
    setResult(found);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '48px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(96,165,250,0.15)', border: '1px solid rgba(96,165,250,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <MapPin size={32} color="#60A5FA" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>Track Your Train</h1>
            <p style={{ color: 'var(--text-muted)' }}>Get real-time live running status of any train</p>
          </div>

          <div className="glass" style={{ borderRadius: '20px', padding: '36px', marginBottom: '24px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr auto', gap: '12px', alignItems: 'end' }}>
              <div>
                <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Train Number</label>
                <input type="text" className="custom-input" placeholder="e.g. 12301" value={trainNo} onChange={e => setTrainNo(e.target.value)} style={{ fontSize: '1rem' }} />
              </div>
              <div>
                <label style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Date of Journey</label>
                <input type="date" className="custom-input" value={date} onChange={e => setDate(e.target.value)} style={{ fontSize: '0.9rem', colorScheme: 'dark' }} />
              </div>
              <button className="btn-primary" onClick={handleSearch} style={{ padding: '12px 24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Search size={18} /> Track
              </button>
            </div>
            {error && <div style={{ marginTop: '16px', background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '12px 16px', color: '#f87171', display: 'flex', gap: '10px', alignItems: 'center' }}><AlertCircle size={16} />{error}</div>}
          </div>

          {result && (
            <div className="glass" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              {/* Train Header */}
              <div style={{ background: result.delay > 0 ? 'linear-gradient(135deg, #7c2d12, #431407)' : 'linear-gradient(135deg, #14532d, #052e16)', padding: '24px 28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', alignItems: 'center' }}>
                  <div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem', marginBottom: '4px' }}>LIVE STATUS</div>
                    <div style={{ color: '#fff', fontWeight: 800, fontSize: '1.3rem' }}>{trainNo} — {result.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.87rem', marginTop: '4px' }}>{result.from} → {result.to}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ color: result.delay > 0 ? '#fca5a5' : '#4ade80', fontWeight: 800, fontSize: '1.4rem' }}>
                      {result.delay === 0 ? 'ON TIME' : `${result.delay} min LATE`}
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.78rem', marginTop: '4px', display: 'flex', alignItems: 'center', gap: '4px', justifyContent: 'flex-end' }}>
                      <Clock size={12} /> Last at {result.lastStation} · {result.lastUpdate}
                    </div>
                  </div>
                </div>
              </div>

              {/* Station Progress */}
              <div style={{ padding: '24px 28px' }}>
                <h3 style={{ color: 'var(--text-main)', fontWeight: 700, marginBottom: '20px', fontSize: '0.95rem' }}>🗺️ Station-wise Status</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {result.stations.map((s, i) => {
                    const isDeparted = s.status === 'Departed';
                    const isLast = i === result.stations.length - 1;
                    return (
                      <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', paddingBottom: isLast ? 0 : '20px', position: 'relative' }}>
                        {/* Timeline line */}
                        {!isLast && <div style={{ position: 'absolute', left: '9px', top: '22px', bottom: 0, width: '2px', background: isDeparted ? '#4ade80' : 'var(--border-glass)' }} />}
                        {/* Dot */}
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: isDeparted ? '#4ade80' : 'rgba(255,255,255,0.1)', border: `2px solid ${isDeparted ? '#4ade80' : 'var(--border-glass)'}`, flexShrink: 0, marginTop: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          {isDeparted && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff' }} />}
                        </div>
                        <div style={{ flex: 1, paddingBottom: isLast ? 0 : '4px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '4px' }}>
                            <span style={{ color: isDeparted ? 'var(--text-main)' : 'var(--text-muted)', fontWeight: isDeparted ? 700 : 400, fontSize: '0.9rem' }}>{s.name}</span>
                            <span style={{ color: isDeparted ? '#4ade80' : 'rgba(255,255,255,0.3)', fontSize: '0.78rem', fontWeight: 600 }}>{s.status}</span>
                          </div>
                          <div style={{ display: 'flex', gap: '16px', marginTop: '3px' }}>
                            <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>Sched: {s.sched}</span>
                            {s.actual !== '—' && <span style={{ color: s.delay > 0 ? '#fca5a5' : '#4ade80', fontSize: '0.78rem', fontWeight: 600 }}>Actual: {s.actual} {s.delay > 0 ? `(+${s.delay}m)` : ''}</span>}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrackTrain;
