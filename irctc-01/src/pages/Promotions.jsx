import React, { useState } from 'react';
import { Tag, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const promos = [
  { id: 1, title: '10% Off on SBI Card Bookings', code: 'SBI10IRCTC', discount: '10%', validTill: '30 Apr 2026', category: 'Card Offers', color: '#60A5FA', emoji: '💙', desc: 'Get 10% off (max ₹500) on all train ticket bookings with IRCTC SBI Credit Card.', terms: 'Minimum transaction ₹1000. Valid on non-discounted fares only.' },
  { id: 2, title: 'Flat ₹150 Off on Hotel Booking', code: 'HOTEL150', discount: '₹150', validTill: '15 Apr 2026', category: 'Hotels', color: '#34D399', emoji: '🏨', desc: 'Get ₹150 flat discount on hotel bookings above ₹2000 via IRCTC Hotels.', terms: 'Valid for first-time hotel bookings. Not applicable on premium suites.' },
  { id: 3, title: 'Free Meal Upgrade on E-Catering', code: 'MEALFREE', discount: 'FREE', validTill: '10 Apr 2026', category: 'Meals', color: '#FBBF24', emoji: '🍛', desc: 'Order food worth ₹300+ and get a complimentary dessert or beverage.', terms: 'Valid on Rajdhani, Shatabdi and Vande Bharat trains only.' },
  { id: 4, title: '5% Cashback via IRCTC E-Wallet', code: 'EWALLET5', discount: '5%', validTill: '30 Apr 2026', category: 'E-Wallet', color: '#A78BFA', emoji: '💜', desc: '5% cashback (max ₹200) when you pay using IRCTC E-Wallet for train tickets.', terms: 'Cashback credited within 24 hours of successful journey.' },
  { id: 5, title: 'BOB Card: 40 Reward Pts/₹100', code: 'BOBPAY', discount: '40X', validTill: '31 May 2026', category: 'Card Offers', color: '#34D399', emoji: '💚', desc: 'Earn up to 40 BOBCard reward points per ₹100 spent on IRCTC train bookings.', terms: 'Card must be linked to IRCTC loyalty account prior to booking.' },
  { id: 6, title: '₹200 Off on Holiday Packages', code: 'HOLIDAY200', discount: '₹200', validTill: '30 Apr 2026', category: 'Holidays', color: '#FF6D00', emoji: '🌏', desc: 'Get ₹200 discount on any IRCTC Tourism holiday package above ₹10,000.', terms: 'One offer per user. Cannot be combined with other promotional codes.' },
  { id: 7, title: 'Senior Citizen — 40% Off on Fares', code: 'N/A', discount: '40%', validTill: 'Ongoing', category: 'Senior Citizen', color: '#F0ABFC', emoji: '👴', desc: 'Female senior citizens (above 58) and male senior citizens (above 60) get 40% fare concession on non-Rajdhani/non-Shatabdi trains.', terms: 'Age proof required at ticket checking. Applicable on base fare only.' },
  { id: 8, title: 'Student Concession on Sleeper', code: 'N/A', discount: '25-75%', validTill: 'Ongoing', category: 'Student', color: '#FBBF24', emoji: '🎓', desc: 'Students from recognized institutions can get 25% to 75% concession on train fares for educational tours and competitions.', terms: 'Applicable with valid institution ID and endorsement letter.' },
];

const promoCats = ['All', 'Card Offers', 'Hotels', 'Meals', 'E-Wallet', 'Holidays', 'Senior Citizen', 'Student'];

const Promotions = () => {
  const [filter, setFilter] = useState('All');
  const [copied, setCopied] = useState(null);

  const filtered = promos.filter(p => filter === 'All' || p.category === filter);

  const copyCode = (id, code) => {
    if (code === 'N/A') return;
    navigator.clipboard?.writeText(code).catch(() => {});
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>🏷️ Offers & <span style={{ color: 'var(--orange-primary)' }}>Promotions</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>Exclusive deals, discounts and promo codes for IRCTC services</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {promoCats.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{ padding: '7px 18px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem', background: filter === c ? 'var(--orange-primary)' : 'rgba(255,255,255,0.07)', color: filter === c ? '#fff' : 'var(--text-muted)', transition: 'all 0.2s' }}>{c}</button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px' }}>
            {filtered.map(promo => (
              <div key={promo.id} className="glass" style={{ borderRadius: '20px', overflow: 'hidden', border: `1px solid ${promo.color}20`, transition: 'transform 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-4px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Card top strip */}
                <div style={{ background: `linear-gradient(135deg, ${promo.color}20, ${promo.color}08)`, padding: '20px 22px', borderBottom: `1px solid ${promo.color}15`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '1.8rem' }}>{promo.emoji}</span>
                    <div>
                      <div style={{ color: promo.color, fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px' }}>{promo.category}</div>
                      <div style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '0.95rem', lineHeight: 1.3 }}>{promo.title}</div>
                    </div>
                  </div>
                  <div style={{ background: promo.color, color: '#0a0f1e', fontWeight: 900, fontSize: '1rem', padding: '6px 14px', borderRadius: '10px', flexShrink: 0 }}>{promo.discount}</div>
                </div>

                <div style={{ padding: '18px 22px' }}>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6, marginBottom: '14px' }}>{promo.desc}</p>

                  {/* Promo Code */}
                  {promo.code !== 'N/A' && (
                    <div style={{ display: 'flex', gap: '8px', marginBottom: '14px' }}>
                      <div style={{ flex: 1, padding: '10px 14px', background: 'rgba(255,255,255,0.04)', border: `1px dashed ${promo.color}40`, borderRadius: '10px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Tag size={14} color={promo.color} />
                        <span style={{ color: promo.color, fontWeight: 800, fontSize: '0.9rem', letterSpacing: '1px' }}>{promo.code}</span>
                      </div>
                      <button onClick={() => copyCode(promo.id, promo.code)} style={{ padding: '10px 14px', background: copied === promo.id ? '#4ade8020' : `${promo.color}20`, border: `1px solid ${copied === promo.id ? '#4ade80' : promo.color}40`, color: copied === promo.id ? '#4ade80' : promo.color, borderRadius: '10px', cursor: 'pointer', fontWeight: 700, fontSize: '0.8rem', transition: 'all 0.2s', whiteSpace: 'nowrap' }}>
                        {copied === promo.id ? '✓ Copied!' : 'Copy'}
                      </button>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={12} /> Valid till {promo.validTill}</div>
                    <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem' }}>*T&C apply</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.2)', fontSize: '0.75rem', marginTop: '32px' }}>
            All offers are subject to availability and applicable terms & conditions. © IRCTC. All rights reserved.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Promotions;
