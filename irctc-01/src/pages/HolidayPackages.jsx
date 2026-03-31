import React, { useState } from 'react';
import { Search, CheckCircle, Tag } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const packages = [
  { id: 1, name: 'Golden Triangle Tour', cities: 'Delhi → Agra → Jaipur', nights: 5, price: 18500, per: 'per person', img: '🕌', category: 'Heritage', rating: 4.8, includes: ['AC Train', 'Hotel 3★', 'Breakfast', 'Guide'] },
  { id: 2, name: 'Kerala Backwaters', cities: 'Kochi → Munnar → Alleppey', nights: 6, price: 22000, per: 'per person', img: '🌴', category: 'Nature', rating: 4.9, includes: ['Train', 'Houseboat Stay', 'All Meals', 'Transfers'] },
  { id: 3, name: 'Goa Beach Holiday', cities: 'Mumbai → North Goa → South Goa', nights: 4, price: 14500, per: 'per person', img: '🏖️', category: 'Beach', rating: 4.7, includes: ['Train', 'Beach Resort', 'Breakfast', 'Sightseeing'] },
  { id: 4, name: 'Varanasi Pilgrimage', cities: 'Delhi → Varanasi → Prayagraj', nights: 4, price: 12000, per: 'per person', img: '🛕', category: 'Pilgrimage', rating: 4.6, includes: ['AC Train', 'Hotel', 'Ganga Aarti', 'Boat Ride'] },
  { id: 5, name: 'Ladakh Adventure', cities: 'Delhi → Leh → Pangong Lake', nights: 7, price: 35000, per: 'per person', img: '🏔️', category: 'Adventure', rating: 4.8, includes: ['Flight', 'Camp Stays', 'All Meals', 'Bike Tour'] },
  { id: 6, name: 'Andaman Islands', cities: 'Kolkata → Port Blair → Havelock', nights: 6, price: 28500, per: 'per person', img: '🌊', category: 'Beach', rating: 4.9, includes: ['Ship', 'Beach Resort', 'Breakfast', 'Water Sports'] },
  { id: 7, name: 'Rajasthan Royal Tour', cities: 'Jaipur → Jodhpur → Udaipur', nights: 7, price: 24000, per: 'per person', img: '🏰', category: 'Heritage', rating: 4.7, includes: ['Train', 'Heritage Hotel', 'Breakfast', 'Camel Safari'] },
  { id: 8, name: 'Darjeeling & Sikkim', cities: 'Kolkata → Darjeeling → Gangtok', nights: 6, price: 19500, per: 'per person', img: '🚂', category: 'Nature', rating: 4.8, includes: ['Train', 'Mountain Hotels', 'Breakfast', 'Toy Train'] },
];

const cats = ['All', 'Heritage', 'Nature', 'Beach', 'Pilgrimage', 'Adventure'];

const HolidayPackages = () => {
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [booked, setBooked] = useState(false);
  const [guests, setGuests] = useState(2);

  const filtered = packages.filter(p => filter === 'All' || p.category === filter);

  if (booked && selected) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div className="glass" style={{ borderRadius: '24px', padding: '56px', textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '3.5rem', marginBottom: '16px' }}>✈️</div>
          <CheckCircle size={52} color="#4ade80" style={{ marginBottom: '16px' }} />
          <h2 style={{ color: '#4ade80', fontWeight: 900, fontSize: '1.5rem', marginBottom: '12px' }}>Package Booked!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}><strong style={{ color: 'var(--text-main)' }}>{selected.name}</strong></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '8px' }}>{guests} Guests × ₹{selected.price.toLocaleString()} = <strong style={{ color: '#4ade80' }}>₹{(guests * selected.price).toLocaleString()}</strong></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '24px' }}>Booking ID: <strong style={{ color: 'var(--orange-primary)' }}>HOL{Math.floor(Math.random()*900000+100000)}</strong></p>
          <button onClick={() => { setBooked(false); setSelected(null); }} className="btn-primary" style={{ padding: '12px 32px' }}>Browse More Packages</button>
        </div>
      </main>
      <Footer />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>🌏 Holiday <span style={{ color: 'var(--orange-primary)' }}>Packages</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Curated tour packages across India's most iconic destinations — by IRCTC Tourism</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '28px' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {cats.map(c => (
                <button key={c} onClick={() => setFilter(c)} style={{ padding: '8px 20px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: filter === c ? 'var(--orange-primary)' : 'rgba(255,255,255,0.07)', color: filter === c ? '#fff' : 'var(--text-muted)', transition: 'all 0.2s' }}>{c}</button>
              ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)', fontSize: '0.85rem' }}>
              👥 Guests:
              <button onClick={() => setGuests(g => Math.max(1, g - 1))} style={{ width: '28px', height: '28px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'transparent', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 800 }}>−</button>
              <span style={{ color: 'var(--orange-primary)', fontWeight: 800, minWidth: '16px', textAlign: 'center' }}>{guests}</span>
              <button onClick={() => setGuests(g => Math.min(20, g + 1))} style={{ width: '28px', height: '28px', borderRadius: '8px', border: 'none', background: 'var(--orange-primary)', color: '#fff', cursor: 'pointer', fontWeight: 800 }}>+</button>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(290px, 1fr))', gap: '20px' }}>
            {filtered.map(pkg => (
              <div key={pkg.id} className="glass" style={{ borderRadius: '20px', overflow: 'hidden', transition: 'transform 0.25s', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '4rem', background: 'rgba(255,255,255,0.04)', borderBottom: '1px solid var(--border-glass)', position: 'relative' }}>
                  {pkg.img}
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'var(--orange-primary)', color: '#fff', fontSize: '0.7rem', fontWeight: 800, padding: '3px 10px', borderRadius: '100px' }}>{pkg.category}</div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', color: '#FBBF24', fontSize: '0.75rem', fontWeight: 700, padding: '3px 8px', borderRadius: '100px' }}>⭐ {pkg.rating}</div>
                </div>
                <div style={{ padding: '18px' }}>
                  <div style={{ fontWeight: 800, color: 'var(--text-main)', fontSize: '1rem', marginBottom: '4px' }}>{pkg.name}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '10px' }}>📍 {pkg.cities}</div>
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                    {pkg.includes.map(i => (
                      <span key={i} style={{ background: 'rgba(255,109,0,0.1)', border: '1px solid rgba(255,109,0,0.2)', color: 'var(--orange-primary)', fontSize: '0.7rem', fontWeight: 600, padding: '2px 8px', borderRadius: '100px' }}>{i}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div>
                      <div style={{ color: 'var(--orange-primary)', fontWeight: 900, fontSize: '1.1rem' }}>₹{pkg.price.toLocaleString()}</div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.72rem' }}>{pkg.per} | {pkg.nights} nights</div>
                    </div>
                    <div style={{ color: '#4ade80', fontWeight: 700, fontSize: '0.85rem' }}>Total: ₹{(pkg.price * guests).toLocaleString()}</div>
                  </div>
                  <button onClick={() => { setSelected(pkg); setBooked(true); }} className="btn-primary" style={{ width: '100%', padding: '10px', fontWeight: 800, fontSize: '0.9rem' }}>Book Now</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HolidayPackages;
