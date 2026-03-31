import React, { useState } from 'react';
import { Globe, CreditCard, Shield, Zap, RefreshCcw, FileText } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  { icon: <Zap size={26} />, title: 'Instant Payments', desc: 'Pay for train, air, hotel and bus tickets instantly without re-entering bank details.', color: '#FBBF24' },
  { icon: <Shield size={26} />, title: 'Bank-Grade Security', desc: 'PCI-DSS compliant platform with end-to-end encryption for every transaction.', color: '#4ade80' },
  { icon: <RefreshCcw size={26} />, title: 'Instant Refunds', desc: 'Refunds on cancellations are processed instantly — back to your iPAY balance.', color: '#60A5FA' },
  { icon: <Globe size={26} />, title: 'Multi-Service', desc: 'Works across all IRCTC services — trains, flights, hotels and bus bookings.', color: '#F0ABFC' },
  { icon: <CreditCard size={26} />, title: 'All Payment Modes', desc: 'Load via Debit/Credit Card, Net Banking, UPI or NEFT/RTGS bank transfer.', color: '#FF6D00' },
  { icon: <FileText size={26} />, title: 'Full Statements', desc: 'Download monthly transaction statements for all your IRCTC payments.', color: '#34D399' },
];

const steps = [
  { no: '01', title: 'Login to IRCTC', desc: 'Access your IRCTC account at irctc.co.in with your User ID and password.' },
  { no: '02', title: 'Navigate to iPAY', desc: 'Go to Other Services → IRCTC-iPAY or find it in your profile menu.' },
  { no: '03', title: 'KYC Verification', desc: 'Complete your KYC with PAN/Aadhaar for full access. Basic access without KYC.' },
  { no: '04', title: 'Load Balance', desc: 'Add money using Debit/Credit card, UPI, Net Banking or NEFT/RTGS.' },
  { no: '05', title: 'Pay Seamlessly', desc: 'At checkout, choose iPAY as payment method for instant, OTP-free payments.' },
];

const IRCTCiPay = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ background: 'linear-gradient(135deg, #0f1b35 0%, #162448 50%, #0a1628 100%)', borderRadius: '28px', padding: '56px 48px', marginBottom: '32px', position: 'relative', overflow: 'hidden', textAlign: 'center' }}>
            <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,109,0,0.06)' }} />
            <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(96,165,250,0.05)' }} />
            
            {/* Logo mock */}
            <div style={{ width: '96px', height: '96px', background: 'linear-gradient(135deg, #FF6D00, #FF9500)', borderRadius: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', boxShadow: '0 16px 40px rgba(255,109,0,0.4)' }}>
              <div style={{ fontSize: '2rem' }}>💳</div>
              <div style={{ color: '#fff', fontSize: '0.55rem', fontWeight: 900, letterSpacing: '1px' }}>iPAY</div>
            </div>

            <h1 style={{ fontSize: '2.8rem', fontWeight: 900, color: '#fff', marginBottom: '12px' }}>
              IRCTC <span style={{ color: 'var(--orange-primary)' }}>iPAY</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '560px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              India's smart digital payment solution for all IRCTC services. Load once, pay instantly — no OTP, no delays.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.irctc.co.in/nget/profile/ewallet" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ padding: '14px 36px', fontWeight: 800, fontSize: '1rem' }}>Activate iPAY →</button>
              </a>
              <a href="https://contents.irctc.co.in/en/irctc_ipay_english.pdf" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ padding: '14px 36px', fontWeight: 700, fontSize: '1rem', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.8)', borderRadius: '12px', cursor: 'pointer' }}>Download Guide</button>
              </a>
            </div>
          </div>

          {/* Key Stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {[
              { val: '₹50,000', label: 'Max Balance (KYC)', icon: '💰' },
              { val: '₹10,000', label: 'Without KYC', icon: '🆔' },
              { val: 'FREE', label: 'Transaction Fee', icon: '🎁' },
              { val: 'Instant', label: 'Refund Speed', icon: '⚡' },
            ].map(s => (
              <div key={s.label} className="glass" style={{ borderRadius: '16px', padding: '22px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{s.icon}</div>
                <div style={{ color: 'var(--orange-primary)', fontWeight: 900, fontSize: '1.3rem', marginBottom: '4px' }}>{s.val}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem' }}>{s.label}</div>
              </div>
            ))}
          </div>

          {/* Features */}
          <div style={{ marginBottom: '32px' }}>
            <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.5rem', textAlign: 'center', marginBottom: '24px' }}>Why Use IRCTC iPAY?</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '18px' }}>
              {features.map(f => (
                <div key={f.title} className="glass" style={{ borderRadius: '18px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                  <div style={{ color: f.color, flexShrink: 0, marginTop: '2px' }}>{f.icon}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '6px' }}>{f.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* How to Get Started */}
          <div className="glass" style={{ borderRadius: '20px', padding: '36px' }}>
            <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.3rem', marginBottom: '28px', textAlign: 'center' }}>🚀 How to Get Started</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {steps.map((s, i) => (
                <div key={i} style={{ display: 'flex', gap: '20px', alignItems: 'flex-start', paddingBottom: i < steps.length - 1 ? '24px' : 0, position: 'relative' }}>
                  {i < steps.length - 1 && <div style={{ position: 'absolute', left: '19px', top: '40px', bottom: 0, width: '2px', background: 'rgba(255,109,0,0.2)' }} />}
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,109,0,0.15)', border: '1px solid rgba(255,109,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 900, color: 'var(--orange-primary)', fontSize: '0.85rem', flexShrink: 0 }}>{s.no}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: 'var(--text-main)', marginBottom: '4px' }}>{s.title}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.6 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IRCTCiPay;
