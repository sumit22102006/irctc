import React from 'react';
import { CheckCircle, CreditCard, ExternalLink } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const bobFeatures = [
  { icon: '🚆', label: 'IRCTC Train Bookings', value: 'Up to 40 BOBCard Points / ₹100' },
  { icon: '🛒', label: 'Other Spends', value: 'Up to 4 Points / ₹100' },
  { icon: '💸', label: 'Transaction Charge Waiver', value: '1% on IRCTC Train Bookings' },
  { icon: '🛋️', label: 'Railway Lounge Access', value: '4 complimentary visits/year (1/quarter)' },
  { icon: '⛽', label: 'Fuel Surcharge Waiver', value: 'Up to 1% at all petrol pumps' },
  { icon: '✈️', label: 'Accident Insurance', value: 'Air ₹50L + Rail ₹10L cover' },
];

const highlights = [
  'Highest reward rate among IRCTC co-brand cards — 40 pts/₹100',
  '500 Welcome Bonus Points worth approx. ₹500',
  'Annual Fee ₹500 | Renewal ₹350 — affordable for regular travellers',
  'Complimentary Railway Lounge access 4x per year',
  '1% transaction charge waiver on every IRCTC train booking',
  'Insurance cover: Air accident ₹50 lakh, Rail accident ₹10 lakh',
  'Credit Card fraud liability cover of ₹1 lakh',
  'Up to 1% fuel surcharge waiver at all petrol pumps',
  'Annual Fee reversal on spends of ₹2 lakh in next year',
  'Runs on RuPay platform — accepted across all Indian banks & UPI',
  'Train Cancellation Protect up to ₹5,000 backed by insurance',
  'eMI available on purchases above ₹2,500',
];

const AboutBOBCard = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ background: 'linear-gradient(135deg, #0c2722 0%, #064e3b 50%, #065f46 100%)', borderRadius: '28px', padding: '48px 40px', marginBottom: '28px', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-50px', right: '-50px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(52,211,153,0.08)' }} />
            <div style={{ position: 'absolute', bottom: '-40px', left: '30px', width: '150px', height: '150px', borderRadius: '50%', background: 'rgba(52,211,153,0.05)' }} />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '28px' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <CreditCard size={20} color="#34D399" />
                  <span style={{ color: '#34D399', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '1px', textTransform: 'uppercase' }}>Bank of Baroda × IRCTC</span>
                </div>
                <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: '#fff', marginBottom: '8px' }}>IRCTC BOB RuPay Card</h1>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '1rem', marginBottom: '8px' }}>Highest reward rate for IRCTC train bookings</p>
                <p style={{ color: '#34D399', fontWeight: 700, fontSize: '0.9rem', marginBottom: '24px' }}>Annual Fee: ₹500 | Renewal: ₹350 | Welcome: 500 Points</p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="https://cardonline.bobcard.co.in/?utm=cbirc&utm_source=website_irc&utm_medium=IRCTC&utm_campaign=conversion" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ background: '#34D399', color: '#0a0f1e', border: 'none', borderRadius: '10px', padding: '12px 28px', fontWeight: 800, cursor: 'pointer', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      Apply Now <ExternalLink size={16} />
                    </button>
                  </a>
                  <a href="https://contents.irctc.co.in/en/bobrupay.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ background: 'rgba(255,255,255,0.1)', color: '#fff', border: '1px solid rgba(255,255,255,0.2)', borderRadius: '10px', padding: '12px 28px', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}>
                      Download PDF Guide
                    </button>
                  </a>
                  <a href="https://www.irctc.co.in/nget/profile/add-loyalty-account-without-login" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                    <button style={{ background: 'rgba(255,255,255,0.07)', color: 'rgba(255,255,255,0.7)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '10px', padding: '12px 28px', fontWeight: 600, cursor: 'pointer', fontSize: '0.9rem' }}>
                      Link with IRCTC
                    </button>
                  </a>
                </div>
              </div>

              {/* Visual Card */}
              <div style={{ width: '240px', height: '148px', background: 'linear-gradient(135deg, rgba(52,211,153,0.2), rgba(6,78,59,0.4))', borderRadius: '16px', border: '1px solid rgba(52,211,153,0.3)', padding: '18px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexShrink: 0 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ width: '34px', height: '24px', background: 'linear-gradient(135deg, #d4a843, #f0c040)', borderRadius: '4px' }} />
                  <span style={{ color: '#34D399', fontSize: '0.72rem', fontWeight: 800 }}>RuPay</span>
                </div>
                <div>
                  <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '1px', marginBottom: '2px' }}>IRCTC POINTS</div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 800, color: '#34D399' }}>40 pts/₹100</div>
                </div>
              </div>
            </div>
          </div>

          {/* Standout Stat Banner */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '28px' }}>
            {[
              { value: '40x', label: 'Points/₹100 on IRCTC', color: '#34D399' },
              { value: '₹50L', label: 'Air Accident Cover', color: '#60A5FA' },
              { value: '4/yr', label: 'Free Lounge Access', color: '#FBBF24' },
            ].map(stat => (
              <div key={stat.label} className="glass" style={{ borderRadius: '16px', padding: '24px', textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 900, color: stat.color, marginBottom: '6px' }}>{stat.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Features */}
            <div className="glass" style={{ borderRadius: '18px', padding: '28px' }}>
              <h3 style={{ color: 'var(--text-main)', fontWeight: 800, marginBottom: '20px', fontSize: '1rem' }}>Rewards & Benefits</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {bobFeatures.map((f, i) => (
                  <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '12px', background: 'rgba(52,211,153,0.05)', borderRadius: '10px', border: '1px solid rgba(52,211,153,0.1)' }}>
                    <span style={{ fontSize: '1.3rem', flexShrink: 0 }}>{f.icon}</span>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.74rem', marginBottom: '2px' }}>{f.label}</div>
                      <div style={{ color: '#34D399', fontWeight: 700, fontSize: '0.88rem' }}>{f.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div className="glass" style={{ borderRadius: '18px', padding: '28px' }}>
              <h3 style={{ color: 'var(--text-main)', fontWeight: 800, marginBottom: '20px', fontSize: '1rem' }}>Why Choose BOB Card?</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                {highlights.map((h, i) => (
                  <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                    <CheckCircle size={15} color="#34D399" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', marginTop: '28px' }}>
            Features subject to prevailing T&Cs. © IRCTC. All rights reserved.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutBOBCard;
