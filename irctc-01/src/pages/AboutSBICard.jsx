import React, { useState } from 'react';
import { CheckCircle, Star, CreditCard, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const tabs = ['IRCTC SBI Card', 'IRCTC SBI Premier'];

const sbiCards = [
  {
    name: 'IRCTC SBI Card',
    tagline: 'Your everyday train travel companion',
    fee: '₹500',
    renewal: '₹300',
    applyUrl: 'https://www.sbicard.com/sprint/irctc-platinum',
    applyRuPayUrl: 'https://www.sbicard.com/sprint/irctcRuPay',
    accentColor: '#60A5FA',
    gradient: 'linear-gradient(135deg, #1e3a6e 0%, #1a2642 50%, #0f172a 100%)',
    welcome: '350 bonus Reward Points on card activation',
    features: [
      { icon: '🚆', label: 'IRCTC Train Bookings', value: 'Up to 10 pts / ₹100 spent' },
      { icon: '✈️', label: 'Air & E-Catering (IRCTC)', value: '5 pts / ₹100 spent' },
      { icon: '🛒', label: 'Regular Retail Spends', value: '1 pt / ₹125 spent' },
      { icon: '💸', label: 'Transaction Charge Waiver', value: '1% on IRCTC Train Bookings' },
      { icon: '🛋️', label: 'Railway Lounge Access', value: '4 free visits/year (1/quarter)' },
    ],
    highlights: [
      'Book at www.irctc.co.in and IRCTC Rail Connect App',
      'Accelerated points on all classes — Sleeper, AC, Tatkal',
      '1% transaction charge waiver on every train booking',
      'Welcome 350 pts ≈ ₹350 in redemption value',
      'Available on Visa and RuPay platforms',
    ],
  },
  {
    name: 'IRCTC SBI Card Premier',
    tagline: 'Premium benefits for the frequent traveller',
    fee: '₹1,499',
    renewal: '₹1,499',
    applyUrl: 'https://www.sbicard.com/sprint/irctcPremier',
    applyRuPayUrl: null,
    accentColor: '#FBBF24',
    gradient: 'linear-gradient(135deg, #7c4700 0%, #3d2200 50%, #1c1107 100%)',
    welcome: '1,500 bonus Reward Points on card activation',
    features: [
      { icon: '🚆', label: 'IRCTC Train Bookings', value: '10 pts / ₹100 spent' },
      { icon: '✈️', label: 'Air Tickets & E-Catering', value: '5 pts / ₹100 spent' },
      { icon: '🍽️', label: 'Dining & Utility Spends', value: '3 pts / ₹125 spent' },
      { icon: '🛒', label: 'Regular Retail Spends', value: '1 pt / ₹125 spent' },
      { icon: '💸', label: 'Transaction Charge Waiver', value: '1% on Rail & Air Bookings' },
      { icon: '🛋️', label: 'Railway Lounge Access', value: '8 free visits/year (2/quarter)' },
    ],
    highlights: [
      '1,500 welcome points — 4x more than standard card',
      'Double lounge access: 8/year vs 4/year on standard',
      'Covers bookings on irctc.co.in and air.irctc.co.in',
      '1% waiver applies to both rail AND air bookings',
      'Best for travellers spending ₹1L+ per year on IRCTC',
    ],
  },
];

const AboutSBICard = () => {
  const [activeTab, setActiveTab] = useState(0);
  const card = sbiCards[activeTab];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Tab Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', marginBottom: '36px' }}>
            {tabs.map((tab, i) => (
              <button key={i} onClick={() => setActiveTab(i)} style={{ padding: '10px 28px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.9rem', transition: 'all 0.25s', background: activeTab === i ? 'var(--orange-primary)' : 'rgba(255,255,255,0.07)', color: activeTab === i ? '#fff' : 'var(--text-muted)' }}>
                {tab}
              </button>
            ))}
          </div>

          {/* Hero */}
          <div style={{ background: card.gradient, borderRadius: '28px', padding: '48px 40px', marginBottom: '28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '28px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CreditCard size={20} color={card.accentColor} />
                  <span style={{ color: card.accentColor, fontWeight: 700, fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase' }}>SBI Card × IRCTC</span>
                </div>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>{card.name}</h1>
                <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '6px' }}>{card.tagline}</p>
                <p style={{ color: card.accentColor, fontWeight: 700, fontSize: '0.9rem', marginBottom: '24px' }}>
                  Annual Fee: {card.fee} | Renewal: {card.renewal}
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href={card.applyUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ background: card.accentColor, color: '#0a0f1e', border: 'none', borderRadius: '10px', padding: '12px 28px', fontWeight: 800, cursor: 'pointer', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Apply (Visa) <ExternalLink size={15} />
                    </button>
                  </a>
                  {card.applyRuPayUrl && (
                    <a href={card.applyRuPayUrl} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <button style={{ background: 'rgba(255,255,255,0.12)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}>
                        Apply (RuPay)
                      </button>
                    </a>
                  )}
                  <a href="https://www.irctc.co.in/nget/profile/add-loyalty-account-without-login" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '12px 24px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}>
                      Link with IRCTC
                    </button>
                  </a>
                </div>
              </div>
              {/* Welcome Stat */}
              <div style={{ background: `${card.accentColor}15`, border: `1px solid ${card.accentColor}30`, borderRadius: '16px', padding: '20px 24px', flexShrink: 0, textAlign: 'center', minWidth: '180px' }}>
                <Star size={24} color={card.accentColor} fill={card.accentColor} style={{ marginBottom: '8px' }} />
                <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '6px' }}>Welcome Benefit</div>
                <div style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', lineHeight: 1.4 }}>{card.welcome}</div>
              </div>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Features */}
            <div className="glass" style={{ borderRadius: '18px', padding: '28px' }}>
              <h3 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1rem', marginBottom: '18px' }}>💎 Rewards Breakdown</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {card.features.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px 14px', background: `${card.accentColor}08`, borderRadius: '10px', border: `1px solid ${card.accentColor}15` }}>
                    <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{f.icon}</span>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.74rem', marginBottom: '2px' }}>{f.label}</div>
                      <div style={{ color: card.accentColor, fontWeight: 700, fontSize: '0.9rem' }}>{f.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="glass" style={{ borderRadius: '18px', padding: '28px' }}>
              <h3 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1rem', marginBottom: '20px' }}>✨ Why Choose This Card?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {card.highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={16} color={card.accentColor} style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{h}</span>
                  </div>
                ))}
              </div>

              {/* Quick Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '24px' }}>
                {[
                  ['Joining Fee', card.fee],
                  ['Renewal Fee', card.renewal],
                  ['Lounge Visits', activeTab === 0 ? '4/year' : '8/year'],
                  ['Txn Waiver', '1%'],
                ].map(([label, val]) => (
                  <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px 14px' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.5px', marginBottom: '3px' }}>{label}</div>
                    <div style={{ color: card.accentColor, fontWeight: 800, fontSize: '0.95rem' }}>{val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', marginTop: '24px' }}>
            Features subject to prevailing T&Cs as stipulated by SBI Card. © IRCTC. All rights reserved.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutSBICard;
