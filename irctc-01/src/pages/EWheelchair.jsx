import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const wheelchairTypes = [
  { id: 'manual', name: 'Manual Wheelchair', icon: '♿', desc: 'Standard manual wheelchair with an attendant. Suitable for most passengers.', available: true },
  { id: 'electric', name: 'Electric Wheelchair', icon: '🦽', desc: 'Battery-powered wheelchair for passengers with limited upper body strength.', available: true },
  { id: 'porter', name: 'Porter + Wheelchair', icon: '👤', desc: 'Dedicated railway porter assistance with wheelchair throughout your journey.', available: true },
];

const EWheelchair = () => {
  const [form, setForm] = useState({ pnr: '', name: '', mobile: '', station: '', type: '', special: '' });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const set = k => e => setForm({ ...form, [k]: e.target.value });
  const lbl = { color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' };

  const handleSubmit = () => {
    if (!form.pnr || form.pnr.length < 10 || !form.name || !form.mobile || !form.station || !form.type) {
      setError('Please fill all required fields including wheelchair type.'); return;
    }
    setError(''); setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '12px' }}>♿</div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>E-Wheelchair <span style={{ color: 'var(--orange-primary)' }}>Service</span></h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '540px', margin: '0 auto', lineHeight: 1.7 }}>
              IRCTC provides complimentary wheelchair assistance at major railway stations. Book in advance for a seamless travel experience.
            </p>
          </div>

          {/* Info Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
            {[
              { icon: '🆓', title: 'Free of Cost', desc: 'Wheelchair service is completely free for all passengers' },
              { icon: '⏰', title: 'Book 24h Prior', desc: 'Request at least 24 hours before your journey date' },
              { icon: '🏥', title: 'All Major Stations', desc: 'Available at over 400 major railway stations in India' },
            ].map(s => (
              <div key={s.title} className="glass" style={{ borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px', fontSize: '0.95rem' }}>{s.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', lineHeight: 1.5 }}>{s.desc}</div>
              </div>
            ))}
          </div>

          {!submitted ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {/* Booking Form */}
              <div className="glass" style={{ borderRadius: '20px', padding: '32px' }}>
                <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '24px' }}>📋 Book Wheelchair Assistance</h2>
                {error && <div style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)', borderRadius: '10px', padding: '10px 14px', color: '#f87171', marginBottom: '16px', display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.83rem' }}><AlertCircle size={15} />{error}</div>}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div><label style={lbl}>PNR Number *</label><input className="custom-input" placeholder="10-digit PNR" maxLength={10} value={form.pnr} onChange={e => set('pnr')({ target: { value: e.target.value.replace(/\D/,'').slice(0,10) } })} /></div>
                  <div><label style={lbl}>Passenger Name *</label><input className="custom-input" placeholder="Name as on ticket" value={form.name} onChange={set('name')} /></div>
                  <div><label style={lbl}>Mobile Number *</label><input className="custom-input" placeholder="Registered mobile" value={form.mobile} onChange={set('mobile')} /></div>
                  <div><label style={lbl}>Station Required At *</label><input className="custom-input" placeholder="e.g. New Delhi, Howrah" value={form.station} onChange={set('station')} /></div>
                  <div><label style={lbl}>Special Requirements</label><textarea className="custom-input" placeholder="Any specific needs..." value={form.special} onChange={set('special')} rows={2} style={{ resize: 'none' }} /></div>
                  <button onClick={handleSubmit} className="btn-primary" style={{ padding: '13px', fontWeight: 800 }}>Submit Request ♿</button>
                </div>
              </div>

              {/* Wheelchair Types */}
              <div className="glass" style={{ borderRadius: '20px', padding: '32px' }}>
                <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '24px' }}>🦽 Wheelchair Types</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {wheelchairTypes.map(w => (
                    <label key={w.id} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', padding: '16px', background: form.type === w.id ? 'rgba(255,109,0,0.08)' : 'rgba(255,255,255,0.03)', borderRadius: '14px', border: `1px solid ${form.type === w.id ? 'rgba(255,109,0,0.3)' : 'var(--border-glass)'}`, cursor: 'pointer', transition: 'all 0.2s' }}>
                      <input type="radio" name="wheelchairType" value={w.id} checked={form.type === w.id} onChange={set('type')} style={{ marginTop: '4px', accentColor: 'var(--orange-primary)', flexShrink: 0 }} />
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                          <span style={{ fontSize: '1.3rem' }}>{w.icon}</span>
                          <span style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem' }}>{w.name}</span>
                        </div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>{w.desc}</div>
                        <div style={{ color: '#4ade80', fontSize: '0.75rem', fontWeight: 700, marginTop: '4px' }}>✓ Available</div>
                      </div>
                    </label>
                  ))}
                </div>

                <div style={{ marginTop: '20px', background: 'rgba(255,109,0,0.06)', border: '1px solid rgba(255,109,0,0.15)', borderRadius: '12px', padding: '14px 16px' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem', margin: 0, lineHeight: 1.6 }}>
                    💡 Tip: For senior citizens and differently-abled passengers, IRCTC also provides dedicated booking quota (PH Quota) for lower berths.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass" style={{ borderRadius: '20px', padding: '56px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>♿</div>
              <CheckCircle size={52} color="#4ade80" style={{ marginBottom: '16px' }} />
              <h2 style={{ color: '#4ade80', fontWeight: 900, fontSize: '1.5rem', marginBottom: '12px' }}>Request Submitted!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '6px' }}>Wheelchair assistance booked for <strong style={{ color: 'var(--text-main)' }}>{form.name}</strong> at <strong style={{ color: 'var(--orange-primary)' }}>{form.station}</strong></p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>Reference ID: <strong style={{ color: 'var(--orange-primary)' }}>WC{Math.floor(Math.random()*900000+100000)}</strong> | A confirmation SMS will be sent to {form.mobile}</p>
              <button onClick={() => { setSubmitted(false); setForm({ pnr:'', name:'', mobile:'', station:'', type:'', special:'' }); }} style={{ padding: '10px 28px', background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}>Book Another</button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EWheelchair;
