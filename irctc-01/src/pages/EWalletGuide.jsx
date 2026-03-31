import React, { useState } from 'react';
import { Wallet, ChevronDown, ChevronUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const steps = [
  {
    phase: 'Step 1',
    title: 'Login to IRCTC Website',
    color: '#FF6D00',
    icon: '🔐',
    instructions: [
      'Go to www.irctc.co.in and click on "LOGIN" button at the top.',
      'Enter your User ID and Password.',
      'Complete the CAPTCHA verification.',
      'Click "SIGN IN" to access your account.',
    ],
    note: 'You must have a verified IRCTC account. If not registered, click "REGISTER" to create one.',
  },
  {
    phase: 'Step 2',
    title: 'Navigate to E-Wallet Section',
    color: '#F59E0B',
    icon: '💳',
    instructions: [
      'After login, click on your username/profile at the top right.',
      'From the dropdown menu, select "E-Wallet".',
      'Alternatively, hover over "E-WALLET" in the navigation bar.',
      'Click on "About E-Wallet" or "E-Wallet Recharge".',
    ],
    note: 'First-time users will see an activation screen. Existing users will see their current balance.',
  },
  {
    phase: 'Step 3',
    title: 'Activate / Register for E-Wallet',
    color: '#10B981',
    icon: '✅',
    instructions: [
      'Click the "REGISTER FOR E-WALLET" button.',
      'Read the Terms & Conditions carefully.',
      'Check the checkbox to agree to T&Cs.',
      'An OTP will be sent to your registered mobile number.',
      'Enter the OTP and click "Submit" to activate your wallet.',
    ],
    note: 'Your wallet is now activated with ₹0 balance. You can now recharge it.',
  },
  {
    phase: 'Step 4',
    title: 'Recharge Your E-Wallet',
    color: '#6366F1',
    icon: '💰',
    instructions: [
      'Click on "Recharge E-Wallet" from the E-Wallet section.',
      'Enter the amount you wish to add (Minimum ₹100, Maximum ₹10,000).',
      'Select your payment method: Debit Card / Credit Card / Net Banking / UPI.',
      'Complete the payment on the bank\'s secure payment page.',
      'Wallet is recharged instantly upon successful payment.',
      'An SMS confirmation is sent to your registered mobile number.',
    ],
    note: 'Ensure your wallet balance does not exceed ₹10,000 at any time. KYC is required for balance above ₹2,000.',
  },
  {
    phase: 'Step 5',
    title: 'Book a Ticket Using E-Wallet',
    color: '#EC4899',
    icon: '🎟️',
    instructions: [
      'Search for trains on the IRCTC home page as usual.',
      'Select your train, class, and passengers.',
      'On the payment page, select "E-Wallet" as your payment method.',
      'Your current wallet balance will be displayed.',
      'An OTP will be sent to your registered mobile number for confirmation.',
      'Enter the OTP and click "Pay Now".',
      'Booking is confirmed instantly and your wallet is debited.',
    ],
    note: 'If your wallet balance is insufficient, you will need to top up before booking. Partial payment using E-Wallet is also supported.',
  },
  {
    phase: 'Step 6',
    title: 'Cancel Ticket & Get Refund',
    color: '#14B8A6',
    icon: '🔄',
    instructions: [
      'Go to your booking history in "Booked Ticket History".',
      'Select the ticket you wish to cancel.',
      'Click "Cancel Ticket" and confirm the cancellation.',
      'Refund amount (after applicable charges) is credited instantly to your E-Wallet.',
      'You can view the updated balance in the E-Wallet section.',
    ],
    note: 'Refunds for E-Wallet bookings are processed instantly to your wallet, unlike bank refunds which may take 5–7 working days.',
  },
  {
    phase: 'Step 7',
    title: 'Check Wallet Balance & Statement',
    color: '#8B5CF6',
    icon: '📊',
    instructions: [
      'Login to IRCTC and navigate to your profile.',
      'Click on "E-Wallet" → "Wallet Statement".',
      'Select date range for transaction history.',
      'View all credits (recharges/refunds) and debits (payments).',
      'Download statement as PDF if needed.',
    ],
    note: 'Statements can be downloaded for up to 12 months of transaction history.',
  },
];

const EWalletGuide = () => {
  const [openStep, setOpenStep] = useState(0);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ width: '72px', height: '72px', backgroundColor: 'rgba(255,109,0,0.15)', borderRadius: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', border: '1px solid rgba(255,109,0,0.3)' }}>
              <Wallet size={36} color="var(--orange-primary)" />
            </div>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '12px' }}>
              E-Wallet <span style={{ color: 'var(--orange-primary)' }}>User Guide</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.7 }}>
              A complete step-by-step guide to activating, recharging, and using your IRCTC E-Wallet for seamless train ticket bookings.
            </p>
          </div>

          {/* Quick Info Bar */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '40px' }}>
            {[
              { label: 'Max Balance', value: '₹10,000', icon: '💳' },
              { label: 'Transaction Fee', value: 'FREE', icon: '🎁' },
              { label: 'Refund Time', value: 'Instant', icon: '⚡' },
            ].map(item => (
              <div key={item.label} className="glass" style={{ borderRadius: '14px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: '8px' }}>{item.icon}</div>
                <div style={{ color: 'var(--orange-primary)', fontWeight: 800, fontSize: '1.2rem' }}>{item.value}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginTop: '2px' }}>{item.label}</div>
              </div>
            ))}
          </div>

          {/* Step-by-Step Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {steps.map((step, i) => (
              <div key={i} className="glass" style={{ borderRadius: '16px', overflow: 'hidden', border: openStep === i ? `1px solid ${step.color}40` : '1px solid var(--border-glass)', transition: 'all 0.3s' }}>

                {/* Accordion Header */}
                <button
                  onClick={() => setOpenStep(openStep === i ? -1 : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', alignItems: 'center', gap: '16px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                >
                  <div style={{ width: '44px', height: '44px', borderRadius: '12px', backgroundColor: `${step.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.4rem', flexShrink: 0, border: `1px solid ${step.color}40` }}>
                    {step.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ color: step.color, fontWeight: 700, fontSize: '0.78rem', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '2px' }}>{step.phase}</div>
                    <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '1rem' }}>{step.title}</div>
                  </div>
                  <div style={{ color: 'var(--text-muted)', flexShrink: 0 }}>
                    {openStep === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>

                {/* Accordion Body */}
                {openStep === i && (
                  <div style={{ padding: '0 24px 24px' }}>
                    <ol style={{ padding: '0 0 0 20px', margin: '0 0 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {step.instructions.map((inst, j) => (
                        <li key={j} style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                          {inst}
                        </li>
                      ))}
                    </ol>
                    {step.note && (
                      <div style={{ backgroundColor: `${step.color}12`, border: `1px solid ${step.color}30`, borderRadius: '10px', padding: '12px 16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <span style={{ fontSize: '1rem', flexShrink: 0 }}>💡</span>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: 1.5 }}><strong style={{ color: step.color }}>Note:</strong> {step.note}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Footer */}
          <div className="glass" style={{ borderRadius: '20px', padding: '36px', marginTop: '32px', textAlign: 'center' }}>
            <h3 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.3rem', marginBottom: '12px' }}>Ready to activate your E-Wallet?</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px' }}>Visit the official IRCTC website to activate your E-Wallet and enjoy seamless ticket booking.</p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="https://www.irctc.co.in/nget/profile/ewallet" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary" style={{ padding: '12px 32px', fontWeight: 700, fontSize: '0.95rem' }}>Activate E-Wallet on IRCTC</button>
              </a>
              <a href="https://contents.irctc.co.in/en/AboutEwallet.pdf" target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '12px 32px', fontWeight: 700, fontSize: '0.95rem', background: 'rgba(255,255,255,0.06)', border: '1px solid var(--border-glass)', color: 'var(--text-main)', borderRadius: '12px', cursor: 'pointer' }}>
                  Download PDF Guide
                </button>
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EWalletGuide;
