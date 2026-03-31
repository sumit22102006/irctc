import React, { useState } from 'react';
import { Search, ShoppingCart, Coffee, CheckCircle, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const menuItems = [
  { id: 1, name: 'Veg Biryani', category: 'Main Course', price: 120, time: '30 min', img: '🍛', veg: true, rating: 4.5, desc: 'Aromatic basmati rice with mixed vegetables and spices' },
  { id: 2, name: 'Paneer Butter Masala', category: 'Main Course', price: 140, time: '25 min', img: '🍲', veg: true, rating: 4.4, desc: 'Creamy tomato-based curry with cottage cheese cubes' },
  { id: 3, name: 'Chicken Biryani', category: 'Main Course', price: 160, time: '35 min', img: '🍗', veg: false, rating: 4.7, desc: 'Classic Hyderabadi dum biryani with tender chicken' },
  { id: 4, name: 'Masala Dosa', category: 'Breakfast', price: 80, time: '20 min', img: '🥞', veg: true, rating: 4.3, desc: 'Crispy dosa with spiced potato filling and chutneys' },
  { id: 5, name: 'Idli Sambar', category: 'Breakfast', price: 70, time: '15 min', img: '🫓', veg: true, rating: 4.2, desc: 'Steamed rice cakes with lentil soup and coconut chutney' },
  { id: 6, name: 'Club Sandwich', category: 'Snacks', price: 100, time: '15 min', img: '🥪', veg: false, rating: 4.1, desc: 'Toasted bread with chicken, egg, lettuce and mayo' },
  { id: 7, name: 'Veg Sandwich', category: 'Snacks', price: 85, time: '12 min', img: '🥙', veg: true, rating: 4.0, desc: 'Grilled sandwich with fresh veggies and green chutney' },
  { id: 8, name: 'Mineral Water 1L', category: 'Beverages', price: 20, time: '5 min', img: '💧', veg: true, rating: 5.0, desc: 'IRCTC Rail Neer packaged drinking water' },
  { id: 9, name: 'Masala Tea', category: 'Beverages', price: 25, time: '8 min', img: '☕', veg: true, rating: 4.5, desc: 'Hot spiced Indian tea with ginger and cardamom' },
  { id: 10, name: 'Gulab Jamun', category: 'Desserts', price: 60, time: '10 min', img: '🍮', veg: true, rating: 4.6, desc: 'Soft milk-solid dumplings soaked in sugar syrup' },
  { id: 11, name: 'Curd Rice', category: 'Main Course', price: 90, time: '15 min', img: '🍚', veg: true, rating: 4.2, desc: 'Comforting yogurt mixed rice with curry leaves tempering' },
  { id: 12, name: 'Egg Curry', category: 'Main Course', price: 110, time: '20 min', img: '🍳', veg: false, rating: 4.3, desc: 'Boiled eggs in spiced masala gravy' },
];

const categories = ['All', 'Main Course', 'Breakfast', 'Snacks', 'Beverages', 'Desserts'];

const EPantry = () => {
  const [pnr, setPnr] = useState('');
  const [station, setStation] = useState('');
  const [pnrVerified, setPnrVerified] = useState(false);
  const [filter, setFilter] = useState('All');
  const [vegOnly, setVegOnly] = useState(false);
  const [cart, setCart] = useState({});
  const [ordered, setOrdered] = useState(false);

  const verify = () => { if (pnr.length >= 10 && station) setPnrVerified(true); else alert('Enter valid PNR and delivery station.'); };
  const addToCart = id => setCart(c => ({ ...c, [id]: (c[id] || 0) + 1 }));
  const removeFromCart = id => setCart(c => { const n = { ...c }; if (n[id] > 1) n[id]--; else delete n[id]; return n; });
  const total = Object.entries(cart).reduce((sum, [id, qty]) => sum + menuItems.find(m => m.id === +id).price * qty, 0);
  const cartCount = Object.values(cart).reduce((a, b) => a + b, 0);

  const filtered = menuItems.filter(m => (filter === 'All' || m.category === filter) && (!vegOnly || m.veg));

  if (ordered) return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div className="glass" style={{ borderRadius: '24px', padding: '56px 48px', textAlign: 'center', maxWidth: '500px' }}>
          <div style={{ fontSize: '4rem', marginBottom: '16px' }}>🎉</div>
          <CheckCircle size={52} color="#4ade80" style={{ marginBottom: '16px' }} />
          <h2 style={{ color: '#4ade80', fontWeight: 900, fontSize: '1.5rem', marginBottom: '12px' }}>Order Placed!</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '8px' }}>Your food will be delivered at <strong style={{ color: 'var(--orange-primary)' }}>{station}</strong></p>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>Order ID: <strong style={{ color: 'var(--orange-primary)' }}>EP{Math.floor(Math.random()*900000+100000)}</strong> | Total: <strong style={{ color: '#4ade80' }}>₹{total}</strong></p>
          <button onClick={() => { setOrdered(false); setCart({}); setPnrVerified(false); setPnr(''); setStation(''); }} className="btn-primary" style={{ padding: '12px 32px' }}>Order More Food</button>
        </div>
      </main>
      <Footer />
    </div>
  );

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>🍽️ Book Food — <span style={{ color: 'var(--orange-primary)' }}>E-Pantry</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Order fresh, hygienic meals delivered to your seat on the train</p>
          </div>

          {/* PNR Step */}
          {!pnrVerified ? (
            <div className="glass" style={{ borderRadius: '20px', padding: '36px', maxWidth: '600px', margin: '0 auto' }}>
              <h2 style={{ color: 'var(--text-main)', fontWeight: 800, marginBottom: '24px', fontSize: '1.1rem' }}>Step 1: Verify Your Journey</h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>PNR Number *</label>
                  <input className="custom-input" placeholder="Enter 10-digit PNR" maxLength={10} value={pnr} onChange={e => setPnr(e.target.value.replace(/\D/,'').slice(0,10))} />
                </div>
                <div>
                  <label style={{ color: 'var(--text-muted)', fontSize: '0.82rem', fontWeight: 600, display: 'block', marginBottom: '6px' }}>Delivery Station *</label>
                  <input className="custom-input" placeholder="e.g. Kanpur Central, Allahabad Jn" value={station} onChange={e => setStation(e.target.value)} />
                </div>
                <button className="btn-primary" onClick={verify} style={{ padding: '13px', fontWeight: 800, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Search size={18} /> Find My Train & Proceed to Menu
                </button>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.76rem', marginTop: '16px', textAlign: 'center' }}>Try PNR: 1234567890 | Station: Kanpur Central</p>
            </div>
          ) : (
            <div>
              {/* Filters */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {categories.map(c => (
                    <button key={c} onClick={() => setFilter(c)} style={{ padding: '7px 18px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: filter === c ? 'var(--orange-primary)' : 'rgba(255,255,255,0.07)', color: filter === c ? '#fff' : 'var(--text-muted)', transition: 'all 0.2s' }}>{c}</button>
                  ))}
                </div>
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)', fontSize: '0.85rem', cursor: 'pointer' }}>
                  <input type="checkbox" checked={vegOnly} onChange={() => setVegOnly(v => !v)} style={{ accentColor: '#4ade80', width: '16px', height: '16px' }} />
                  🌿 Veg Only
                </label>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px', marginBottom: '28px' }}>
                {filtered.map(item => (
                  <div key={item.id} className="glass" style={{ borderRadius: '16px', padding: '18px', position: 'relative', transition: 'transform 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                    onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
                      <div style={{ fontSize: '2.4rem' }}>{item.img}</div>
                      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '4px' }}>
                        <span style={{ width: '12px', height: '12px', borderRadius: '2px', border: `2px solid ${item.veg ? '#4ade80' : '#ef4444'}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.veg ? '#4ade80' : '#ef4444' }} />
                        </span>
                        <span style={{ color: '#FBBF24', fontSize: '0.75rem', fontWeight: 700 }}>⭐ {item.rating}</span>
                      </div>
                    </div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '4px' }}>{item.name}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.76rem', marginBottom: '8px', lineHeight: 1.4 }}>{item.desc}</div>
                    <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ color: 'var(--orange-primary)', fontWeight: 800, fontSize: '1rem' }}>₹{item.price}</span>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '3px' }}><Clock size={12} /> {item.time}</span>
                    </div>
                    {cart[item.id] ? (
                      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <button onClick={() => removeFromCart(item.id)} style={{ width: '30px', height: '30px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'rgba(255,255,255,0.07)', color: 'var(--text-main)', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem' }}>−</button>
                        <span style={{ color: 'var(--text-main)', fontWeight: 800, minWidth: '20px', textAlign: 'center' }}>{cart[item.id]}</span>
                        <button onClick={() => addToCart(item.id)} style={{ width: '30px', height: '30px', borderRadius: '8px', border: 'none', background: 'var(--orange-primary)', color: '#fff', cursor: 'pointer', fontWeight: 800, fontSize: '1.1rem' }}>+</button>
                      </div>
                    ) : (
                      <button onClick={() => addToCart(item.id)} style={{ width: '100%', padding: '9px', background: 'rgba(255,109,0,0.12)', border: '1px solid rgba(255,109,0,0.3)', color: 'var(--orange-primary)', borderRadius: '10px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}>+ Add to Order</button>
                    )}
                  </div>
                ))}
              </div>

              {cartCount > 0 && (
                <div style={{ position: 'sticky', bottom: '24px', display: 'flex', justifyContent: 'center' }}>
                  <div className="glass" style={{ borderRadius: '16px', padding: '16px 28px', display: 'flex', alignItems: 'center', gap: '20px', border: '1px solid rgba(255,109,0,0.3)', boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-muted)' }}>
                      <ShoppingCart size={18} color="var(--orange-primary)" />
                      <span>{cartCount} item{cartCount > 1 ? 's' : ''}</span>
                    </div>
                    <div style={{ color: '#4ade80', fontWeight: 800, fontSize: '1.1rem' }}>₹{total}</div>
                    <button onClick={() => setOrdered(true)} className="btn-primary" style={{ padding: '10px 28px', fontWeight: 800 }}>Place Order</button>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EPantry;
