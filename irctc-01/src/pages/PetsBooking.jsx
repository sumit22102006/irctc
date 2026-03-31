import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const breeds = {
  Dogs: ['Labrador Retriever','German Shepherd','Golden Retriever','Beagle','Pug','Bulldog','Indian Pariah','Doberman','Rottweiler','Pomeranian'],
  Cats: ['Persian','Siamese','Tabby','Bengal','British Shorthair','Maine Coon','Ragdoll','Sphynx','Indian Domestic','Burmese'],
};

const PetsBooking = () => {
  const [form, setForm] = useState({ from: '', to: '', date: '', trainNo: '', pnr: '', petType: 'Dogs', breed: '', weight: '', cage: 'Yes', count: '1', ownerName: '', mobile: '' });
  const [submitted, setSubmitted] = useState(false);
  const set = k => e => setForm({ ...form, [k]: e.target.value });
  const lbl = { color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '6px' };

  const handleSubmit = () => {
    if (!form.from || !form.to || !form.date || !form.trainNo || !form.pnr || !form.breed || !form.ownerName || !form.mobile) {
      alert('Please fill all required fields.'); return;
    }
    setSubmitted(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '48px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <div style={{ fontSize: '4rem', marginBottom: '12px' }}>🐾</div>
            <h1 style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>Dogs & Cats Booking</h1>
            <p style={{ color: 'var(--text-muted)', maxWidth: '500px', margin: '0 auto' }}>Book travel arrangements for your pet alongside your confirmed train ticket</p>
          </div>

          {/* Rules Banner */}
          <div className="glass" style={{ borderRadius: '16px', padding: '20px 24px', marginBottom: '28px', border: '1px solid rgba(251,191,36,0.2)', background: 'rgba(251,191,36,0.06)' }}>
            <h3 style={{ color: '#FBBF24', fontWeight: 700, marginBottom: '12px', fontSize: '0.95rem' }}>⚠️ Important Rules & Guidelines</h3>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              {[
                'Pet must travel in the Brake Van / Luggage Van of the train',
                'Owner must have a valid train ticket (same train & date)',
                'Pet must be in a proper ventilated cage/carrier',
                'Valid vaccination certificate (Rabies, Distemper) required',
                'Maximum 2 pets allowed per booking',
                'Charges: ₹30-100/kg based on pet weight',
                'Advance booking required at least 24 hours before departure',
                'Not permitted in AC coaches or passenger compartments',
              ].map((r, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                  <span style={{ color: '#FBBF24', fontSize: '0.9rem', flexShrink: 0 }}>•</span>
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>{r}</span>
                </div>
              ))}
            </div>
          </div>

          {!submitted ? (
            <div className="glass" style={{ borderRadius: '20px', padding: '36px' }}>
              <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.1rem', marginBottom: '24px' }}>🐕 Pet Travel Request</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '18px' }}>

                <div>
                  <label style={lbl}>From Station *</label>
                  <input type="text" className="custom-input" placeholder="Departure Station" value={form.from} onChange={set('from')} />
                </div>
                <div>
                  <label style={lbl}>To Station *</label>
                  <input type="text" className="custom-input" placeholder="Destination Station" value={form.to} onChange={set('to')} />
                </div>
                <div>
                  <label style={lbl}>Journey Date *</label>
                  <input type="date" className="custom-input" value={form.date} onChange={set('date')} style={{ colorScheme: 'dark' }} />
                </div>
                <div>
                  <label style={lbl}>Train Number *</label>
                  <input type="text" className="custom-input" placeholder="e.g. 12301" value={form.trainNo} onChange={set('trainNo')} />
                </div>
                <div>
                  <label style={lbl}>Your PNR Number *</label>
                  <input type="text" className="custom-input" placeholder="10-digit PNR" value={form.pnr} onChange={e => set('pnr')({ target: { value: e.target.value.replace(/\D/,'').slice(0,10) } })} />
                </div>
                <div>
                  <label style={lbl}>Pet Type *</label>
                  <select className="custom-input" value={form.petType} onChange={e => setForm({...form, petType: e.target.value, breed: ''})} style={{ appearance: 'none' }}>
                    <option>Dogs</option>
                    <option>Cats</option>
                  </select>
                </div>
                <div>
                  <label style={lbl}>Breed *</label>
                  <select className="custom-input" value={form.breed} onChange={set('breed')} style={{ appearance: 'none' }}>
                    <option value="">Select Breed</option>
                    {breeds[form.petType].map(b => <option key={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label style={lbl}>Pet Weight (kg) *</label>
                  <input type="number" className="custom-input" placeholder="Weight in kg" value={form.weight} onChange={set('weight')} min="0.5" max="50" />
                </div>
                <div>
                  <label style={lbl}>Number of Pets</label>
                  <select className="custom-input" value={form.count} onChange={set('count')} style={{ appearance: 'none' }}>
                    <option>1</option>
                    <option>2</option>
                  </select>
                </div>
                <div>
                  <label style={lbl}>Cage/Carrier Provided</label>
                  <select className="custom-input" value={form.cage} onChange={set('cage')} style={{ appearance: 'none' }}>
                    <option>Yes</option>
                    <option>No (Railway cage will be provided for fee)</option>
                  </select>
                </div>
                <div>
                  <label style={lbl}>Owner's Full Name *</label>
                  <input type="text" className="custom-input" placeholder="As on ticket" value={form.ownerName} onChange={set('ownerName')} />
                </div>
                <div>
                  <label style={lbl}>Mobile Number *</label>
                  <input type="tel" className="custom-input" placeholder="Registered mobile" value={form.mobile} onChange={set('mobile')} />
                </div>

                <div style={{ gridColumn: '1 / -1', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', padding: '16px', border: '1px solid var(--border-glass)' }}>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '6px' }}>Estimated Charges (demo):</div>
                  <div style={{ color: 'var(--orange-primary)', fontWeight: 700 }}>
                    {form.weight ? `₹${Math.ceil(parseFloat(form.weight) * 30 * parseInt(form.count || 1))} (${form.count || 1} pet × ${form.weight}kg × ₹30/kg)` : 'Enter weight to see estimate'}
                  </div>
                </div>

                <div style={{ gridColumn: '1 / -1' }}>
                  <button onClick={handleSubmit} className="btn-primary" style={{ width: '100%', padding: '14px', fontWeight: 800, fontSize: '1rem' }}>
                    Submit Pet Booking Request 🐾
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass" style={{ borderRadius: '20px', padding: '48px', textAlign: 'center' }}>
              <div style={{ fontSize: '3rem', marginBottom: '12px' }}>🐾</div>
              <CheckCircle size={48} color="#4ade80" style={{ marginBottom: '12px' }} />
              <h2 style={{ color: '#4ade80', fontWeight: 800, fontSize: '1.4rem', marginBottom: '12px' }}>Pet Booking Confirmed!</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>{form.petType.slice(0,-1)} booking for train {form.trainNo} from <strong style={{ color: 'var(--text-main)' }}>{form.from}</strong> to <strong style={{ color: 'var(--text-main)' }}>{form.to}</strong>.</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>Please carry vaccination certificate at the station. Booking Ref: <strong style={{ color: 'var(--orange-primary)' }}>PET{Math.floor(Math.random()*90000+10000)}</strong></p>
              <button onClick={() => setSubmitted(false)} style={{ padding: '10px 28px', background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', borderRadius: '10px', cursor: 'pointer', fontWeight: 600 }}>Book Another</button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PetsBooking;
