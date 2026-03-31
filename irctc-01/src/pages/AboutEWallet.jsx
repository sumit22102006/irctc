import React from 'react';
import { Link } from 'react-router-dom';
import { Wallet, CheckCircle, Shield, Zap, RefreshCw, HelpCircle, Gift, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const features = [
  { icon: <Zap size={28} />, title: 'Instant Booking', desc: 'Book train tickets instantly without entering payment details every time. Your wallet balance is debited automatically.' },
  { icon: <Shield size={28} />, title: 'Secure & Safe', desc: 'IRCTC E-Wallet is fully secured with OTP authentication and linked directly to your IRCTC account.' },
  { icon: <RefreshCw size={28} />, title: 'Easy Refunds', desc: 'Cancelled ticket refunds are credited directly back to your E-Wallet within minutes, not days.' },
  { icon: <Gift size={28} />, title: 'No Extra Charges', desc: 'No transaction fees or service charges when you pay using IRCTC E-Wallet for train ticket bookings.' },
];

const benefits = [
  'No need to enter bank details or OTP for payment every time',
  'Instant refunds on ticket cancellations — credited to wallet immediately',
  'Valid for booking of all types of train tickets (Sleeper, AC, Tatkal, etc.)',
  'Wallet balance can be used for partial payment also',
  'Minimum wallet balance to maintain: ₹0',
  'Maximum wallet balance allowed: ₹10,000',
  'Recharge via Debit Card, Credit Card, Net Banking, or UPI',
  'Transaction history available in your account dashboard',
  'One wallet linked per registered IRCTC user account',
  'KYC verification required for wallet balances above ₹2,000',
];

const faqs = [
  { q: 'What is IRCTC E-Wallet?', a: 'IRCTC E-Wallet is a prepaid payment instrument that allows registered IRCTC users to add money in advance and use it for booking train tickets without entering bank/card details at checkout.' },
  { q: 'Who can use IRCTC E-Wallet?', a: 'Any registered IRCTC user with a valid User ID can activate and use the E-Wallet service. The user must complete the KYC process for higher balance limits.' },
  { q: 'What is the maximum balance I can hold?', a: 'The maximum wallet balance allowed is ₹10,000. Users who have completed full KYC may have a higher limit as per RBI guidelines.' },
  { q: 'How do I recharge my E-Wallet?', a: 'You can recharge your IRCTC E-Wallet using Debit Cards, Credit Cards, Net Banking, or UPI through the E-Wallet section in your IRCTC account.' },
  { q: 'Are refunds credited back to E-Wallet?', a: 'Yes! When you cancel a ticket booked via E-Wallet, the refund amount is instantly credited back to your E-Wallet balance.' },
  { q: 'Is there a transaction charge for using E-Wallet?', a: 'No. There are no transaction fees or service charges for payments made via IRCTC E-Wallet.' },
];

const AboutEWallet = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

          {/* Hero Section */}
          <div className="glass" style={{ borderRadius: '24px', padding: '56px 48px', marginBottom: '32px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '-40px', width: '200px', height: '200px', backgroundColor: 'rgba(255,109,0,0.08)', borderRadius: '50%' }} />
            <div style={{ position: 'absolute', bottom: '-60px', left: '-40px', width: '250px', height: '250px', backgroundColor: 'rgba(255,109,0,0.05)', borderRadius: '50%' }} />
            <div style={{ width: '80px', height: '80px', backgroundColor: 'rgba(255,109,0,0.15)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', border: '1px solid rgba(255,109,0,0.3)' }}>
              <Wallet size={40} color="var(--orange-primary)" />
            </div>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '16px' }}>
              IRCTC <span style={{ color: 'var(--orange-primary)' }}>E-Wallet</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 32px', lineHeight: 1.7 }}>
              A fast, secure and convenient prepaid payment solution for all your railway ticket bookings. Add money once and book tickets instantly — anytime, anywhere.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/ewallet-guide">
                <button className="btn-primary" style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  View User Guide <ArrowRight size={18} />
                </button>
              </Link>
              <a href="https://www.irctc.co.in/nget/profile/ewallet" target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '14px 32px', fontSize: '1rem', fontWeight: 700, background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border-glass)', color: 'var(--text-main)', borderRadius: '12px', cursor: 'pointer' }}>
                  Activate E-Wallet
                </button>
              </a>
            </div>
          </div>

          {/* Features Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
            {features.map((f, i) => (
              <div key={i} className="glass" style={{ borderRadius: '18px', padding: '28px 24px' }}>
                <div style={{ color: 'var(--orange-primary)', marginBottom: '16px' }}>{f.icon}</div>
                <h3 style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1.05rem', marginBottom: '10px' }}>{f.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6 }}>{f.desc}</p>
              </div>
            ))}
          </div>

          {/* Benefits + Balance Info */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>

            {/* Benefits */}
            <div className="glass" style={{ borderRadius: '20px', padding: '32px 28px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '24px' }}>
                ✅ Key Benefits
              </h2>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {benefits.map((b, i) => (
                  <li key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <CheckCircle size={18} color="#4ade80" style={{ flexShrink: 0, marginTop: '2px' }} />
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.5 }}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Balance / Limits */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="glass" style={{ borderRadius: '20px', padding: '28px', flex: 1 }}>
                <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '20px' }}>💳 Wallet Limits</h2>
                {[
                  ['Minimum Balance', '₹0'],
                  ['Maximum Balance', '₹10,000'],
                  ['KYC Required Above', '₹2,000'],
                  ['Recharge Minimum', '₹100'],
                  ['Recharge Maximum', '₹10,000'],
                  ['Valid For', 'All Train Tickets'],
                ].map(([label, val]) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border-glass)' }}>
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>{label}</span>
                    <span style={{ color: 'var(--orange-primary)', fontWeight: 700, fontSize: '0.9rem' }}>{val}</span>
                  </div>
                ))}
              </div>

              <div className="glass" style={{ borderRadius: '20px', padding: '28px' }}>
                <h2 style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '16px' }}>⚡ Recharge Methods</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                  {['Debit Card', 'Credit Card', 'Net Banking', 'UPI / BHIM'].map(m => (
                    <div key={m} style={{ background: 'rgba(255,109,0,0.08)', border: '1px solid rgba(255,109,0,0.2)', borderRadius: '10px', padding: '10px 12px', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: 600, textAlign: 'center' }}>{m}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* FAQs */}
          <div className="glass" style={{ borderRadius: '20px', padding: '36px 32px' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '28px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <HelpCircle size={24} color="var(--orange-primary)" /> Frequently Asked Questions
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ padding: '20px 0', borderBottom: i < faqs.length - 1 ? '1px solid var(--border-glass)' : 'none' }}>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '8px' }}>Q. {faq.q}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', lineHeight: 1.6, paddingLeft: '16px', borderLeft: '3px solid var(--orange-primary)' }}>{faq.a}</div>
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

export default AboutEWallet;
