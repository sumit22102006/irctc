import React, { useState } from 'react';
import { Search, Train, Users, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ftrTrains = [
  { no: '09001', name: 'Premium Special Express', from: 'Mumbai CST', to: 'Delhi', capacity: 800, coaches: 20, fare: '₹45,000/coach', type: 'Full Train' },
  { no: '09002', name: 'Tourist Special', from: 'Delhi', to: 'Agra', capacity: 600, coaches: 15, fare: '₹32,000/coach', type: 'Full Train' },
  { no: '09003', name: 'Heritage Express', from: 'Jaipur', to: 'Jodhpur', capacity: 400, coaches: 10, fare: '₹21,000/coach', type: 'FTR Coach' },
];

const FTRBooking = () => {
  const [form, setForm] = useState({ from: '', to: '', date: '', passengers: '', purpose: '', type: 'Full Train' });
  const [submitted, setSubmitted] = useState(false);

  const set = k => e => setForm({ ...form, [k]: e.target.value });
  const lbl = { color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '6px' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '48px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ width: '64px', height: '64px', background: 'rgba(255,109,0,0.15)', border: '1px solid rgba(255,109,0,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Train size={32} color="var(--orange-primary)" />
            </div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>FTR Coach / Train Booking</h1>
            <p style={{ color: 'var(--text-muted)' }}>Book an entire train or FTR coach for group travel, events, and special journeys</p>
          </div>

          {/* Info Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {[
              { icon: '🚆', title: 'Full Train', desc: 'Book an entire train for large groups (500–1200 passengers)' },
              { icon: '🚃', title: 'FTR Coach', desc: 'Book individual coaches attached to scheduled trains' },
              { icon: '👥', title: 'Group Tours', desc: 'Ideal for pilgrimages, corporate tours, educational trips' },
            ].map(c => (
              <div key={c.title} className="glass" style={{ borderRadius: '16px', padding: '22px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', marginBottom: '10px' }}>{c.icon}</div>
                <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>{c.title}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>{c.desc}</div>
              </div>
            ))}
          </div>

          {!submitted ? (
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              {/* Booking Form */}
              <div className="glass" style={{ borderRadius: '20px', padding: '32px' }}>
                <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '24px' }}>📋 Booking Request</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  <div>
                    <label style={lbl}>Booking Type</label>
                    <select className="custom-input" value={form.type} onChange={set('type')} style={{ appearance: 'none' }}>
                      <option>Full Train</option>
                      <option>FTR Coach</option>
                    </select>
                  </div>
                  <div>
                    <label style={lbl}>From Station</label>
                    <input type="text" className="custom-input" placeholder="Origin Station" value={form.from} onChange={set('from')} />
                  </div>
                  <div>
                    <label style={lbl}>To Station</label>
                    <input type="text" className="custom-input" placeholder="Destination Station" value={form.to} onChange={set('to')} />
                  </div>
                  <div>
                    <label style={lbl}>Journey Date</label>
                    <input type="date" className="custom-input" value={form.date} onChange={set('date')} style={{ colorScheme: 'dark' }} />
                  </div>
                  <div>
                    <label style={lbl}>No. of Passengers</label>
                    <input type="number" className="custom-input" placeholder="Minimum 500 for full train" value={form.passengers} onChange={set('passengers')} />
                  </div>
                  <div>
                    <label style={lbl}>Purpose of Journey</label>
                    <select className="custom-input" value={form.purpose} onChange={set('purpose')} style={{ appearance: 'none' }}>
                      <option value="">Select Purpose</option>
                      <option>Pilgrimage</option>
                      <option>Corporate Event</option>
                      <option>Educational Tour</option>
                      <option>Wedding / Social Event</option>
                      <option>Sports Event</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <button className="btn-primary" onClick={() => { if (form.from && form.to && form.date) setSubmitted(true); else alert('Please fill all required fields.'); }} style={{ padding: '14px', fontWeight: 800, fontSize: '1rem', marginTop: '8px' }}>
                    Submit Booking Request
                  </button>
                </div>
              </div>

              {/* Available Trains */}
              <div className="glass" style={{ borderRadius: '20px', padding: '32px' }}>
                <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '24px' }}>🚆 Available FTR Trains</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {ftrTrains.map(t => (
                    <div key={t.no} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid var(--border-glass)', borderRadius: '12px', padding: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                        <span style={{ color: 'var(--orange-primary)', fontWeight: 700, fontSize: '0.82rem' }}>{t.no}</span>
                        <span style={{ background: 'rgba(255,109,0,0.15)', color: 'var(--orange-primary)', fontSize: '0.7rem', fontWeight: 700, padding: '2px 10px', borderRadius: '100px' }}>{t.type}</span>
                      </div>
                      <div style={{ color: 'var(--text-main)', fontWeight: 700, marginBottom: '6px' }}>{t.name}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '8px' }}>{t.from} → {t.to}</div>
                      <div style={{ display: 'flex', gap: '12px' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>👥 {t.capacity} pax</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>🚃 {t.coaches} coaches</span>
                        <span style={{ color: '#4ade80', fontSize: '0.78rem', fontWeight: 600 }}>{t.fare}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="glass" style={{ borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
              <CheckCircle size={56} color="#4ade80" style={{ marginBottom: '16px' }} />
              <h2 style={{ color: '#4ade80', fontWeight: 800, fontSize: '1.4rem', marginBottom: '12px' }}>Request Submitted!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Your FTR Booking request from <strong style={{ color: 'var(--text-main)' }}>{form.from}</strong> to <strong style={{ color: 'var(--text-main)' }}>{form.to}</strong> has been submitted.</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>An IRCTC FTR executive will contact you within 2-3 working days. Reference ID: <strong style={{ color: 'var(--orange-primary)' }}>FTR{Math.floor(Math.random()*90000+10000)}</strong></p>
              <button onClick={() => { setSubmitted(false); setForm({ from:'', to:'', date:'', passengers:'', purpose:'', type:'Full Train' }); }} style={{ padding: '10px 28px', background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}>Make Another Request</button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FTRBooking;
