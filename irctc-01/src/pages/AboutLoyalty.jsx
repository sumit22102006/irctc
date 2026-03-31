import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Gift, Award, ArrowRight, CheckCircle } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const cards = [
  {
    id: 'rbl',
    name: 'IRCTC RBL Card',
    badge: 'BEST FOR REWARDS',
    badgeColor: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #1e1b4b, #312e81, #4C1D95)',
    accentColor: '#A78BFA',
    fee: '₹500',
    renewal: '₹500',
    welcome: '500 Points',
    irctcPoints: '5 pts / ₹200',
    otherPoints: '1 pt / ₹200',
    lounge: '8/year (2/quarter)',
    txnWaiver: '1%',
    applyUrl: 'https://creditcard-rblbank.my.site.com/s/cobranding?partner=irctc',
    learnUrl: '/loyalty-rbl',
    highlights: [
      '5 Reward Points / ₹200 on IRCTC',
      '3 pts on FASTag/NCMC/UTS',
      '2 pts on Flights & Tours via IRCTC',
      'Train Cancellation Protect ₹5,000',
      '8 Free Executive Lounge visits/year',
      '1% Transaction charge waiver',
    ],
  },
  {
    id: 'sbi',
    name: 'IRCTC SBI Card',
    badge: 'MOST POPULAR',
    badgeColor: '#FF6D00',
    gradient: 'linear-gradient(135deg, #1a2642, #1e3a6e, #1e4d8c)',
    accentColor: '#60A5FA',
    fee: '₹500',
    renewal: '₹300',
    welcome: '350 Points',
    irctcPoints: '10 pts / ₹100',
    otherPoints: '1 pt / ₹125',
    lounge: '4/year (1/quarter)',
    txnWaiver: '1%',
    applyUrl: 'https://www.sbicard.com/sprint/irctc-platinum',
    learnUrl: '/loyalty-sbi',
    highlights: [
      'Up to 10 Reward Points / ₹100 on IRCTC',
      '350 Welcome Bonus Points',
      '4 Free Railway Lounge visits/year',
      '1% Transaction charge waiver',
      'Annual Fee: ₹500 | Renewal: ₹300',
      'Available on Visa & RuPay platform',
    ],
  },
  {
    id: 'sbi-premier',
    name: 'IRCTC SBI Premier',
    badge: 'PREMIUM',
    badgeColor: '#F59E0B',
    gradient: 'linear-gradient(135deg, #1c1107, #3d2200, #7c4700)',
    accentColor: '#FBBF24',
    fee: '₹1,499',
    renewal: '₹1,499',
    welcome: '1,500 Points',
    irctcPoints: '10 pts / ₹100',
    otherPoints: '1 pt / ₹125',
    lounge: '8/year (2/quarter)',
    txnWaiver: '1%',
    applyUrl: 'https://www.sbicard.com/sprint/irctcPremier',
    learnUrl: '/loyalty-sbi',
    highlights: [
      '10 Reward Points / ₹100 on IRCTC',
      '5 pts / ₹100 on Air & E-Catering',
      '3 pts on Dining & Utilities',
      '1,500 Welcome Bonus Points',
      '8 Free Railway Lounge visits/year',
      '1% waiver on Rail & Air bookings',
    ],
  },
  {
    id: 'bob',
    name: 'IRCTC BOB Card',
    badge: 'HIGH EARN RATE',
    badgeColor: '#10B981',
    gradient: 'linear-gradient(135deg, #0c2722, #064e3b, #065f46)',
    accentColor: '#34D399',
    fee: '₹500',
    renewal: '₹350',
    welcome: '500 Points',
    irctcPoints: '40 pts / ₹100',
    otherPoints: '4 pts / ₹100',
    lounge: '4/year (1/quarter)',
    txnWaiver: '1%',
    applyUrl: 'https://cardonline.bobcard.co.in/?utm=cbirc&utm_source=website_irc&utm_medium=IRCTC&utm_campaign=conversion',
    learnUrl: '/loyalty-bob',
    highlights: [
      'Up to 40 BOBCard Points / ₹100 on IRCTC',
      '4 pts on every ₹100 other spends',
      '500 Welcome Bonus Points',
      '4 Free Railway Lounge visits/year',
      '1% Transaction charge waiver',
      'RuPay platform benefits',
    ],
  },
  {
    id: 'hdfc',
    name: 'IRCTC HDFC Card',
    badge: 'BEST VALUE',
    badgeColor: '#EC4899',
    gradient: 'linear-gradient(135deg, #1a0a1e, #3b0764, #581c87)',
    accentColor: '#F0ABFC',
    fee: '₹500',
    renewal: '₹500',
    welcome: '₹500 Gift Voucher',
    irctcPoints: '5 pts / ₹100',
    otherPoints: '1 pt / ₹100',
    lounge: '8/year (2/quarter)',
    txnWaiver: '1%',
    applyUrl: 'https://applyonline.hdfcbank.com/cards/credit-cards.html?CHANNELSOURCE=IRCT&LGcode=IRCT&SMcode=IRCT#nbb',
    learnUrl: '/loyalty-hdfc',
    highlights: [
      '5 Reward Points / ₹100 on IRCTC',
      '₹500 Welcome Gift Voucher',
      '8 Free Executive Lounge visits/year',
      '1% Transaction charge waiver',
      '1 pt / ₹100 on all other spends',
      'Seamless IRCTC integration',
    ],
  },
];

const AboutLoyalty = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Hero */}
          <div style={{ textAlign: 'center', marginBottom: '56px', position: 'relative' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,109,0,0.12)', border: '1px solid rgba(255,109,0,0.3)', borderRadius: '100px', padding: '6px 18px', marginBottom: '20px' }}>
              <Star size={14} color="var(--orange-primary)" fill="var(--orange-primary)" />
              <span style={{ color: 'var(--orange-primary)', fontSize: '0.78rem', fontWeight: 700, letterSpacing: '1px', textTransform: 'uppercase' }}>IRCTC Loyalty Program</span>
            </div>
            <h1 style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '16px', lineHeight: 1.2 }}>
              Earn While You <span style={{ color: 'var(--orange-primary)', background: 'linear-gradient(90deg, #FF6D00, #FF9500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Travel</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '640px', margin: '0 auto 32px', lineHeight: 1.8 }}>
              IRCTC's Co-brand Credit Cards reward you every time you book a train ticket. Earn Travel Points with SBI, BOB, HDFC & RBL Bank — redeem for free tickets.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/compare-cards">
                <button className="btn-primary" style={{ padding: '14px 32px', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Compare All Cards <ArrowRight size={18} />
                </button>
              </Link>
              <a href="https://www.irctc.co.in/nget/profile/add-loyalty-account-without-login" target="_blank" rel="noopener noreferrer">
                <button style={{ padding: '14px 32px', fontWeight: 700, fontSize: '1rem', background: 'rgba(255,255,255,0.07)', border: '1px solid var(--border-glass)', color: 'var(--text-main)', borderRadius: '12px', cursor: 'pointer' }}>
                  Link Card to IRCTC
                </button>
              </a>
            </div>
          </div>

          {/* How It Works */}
          <div style={{ marginBottom: '56px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '32px' }}>How It Works</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {[
                { icon: '💳', step: '01', title: 'Get the Card', desc: 'Apply for any IRCTC co-brand credit card from our partner banks.' },
                { icon: '🚆', step: '02', title: 'Link to IRCTC', desc: 'Link your credit card to your IRCTC account from your profile.' },
                { icon: '⭐', step: '03', title: 'Earn Points', desc: 'Earn Travel Points every time you book train tickets at IRCTC.' },
                { icon: '🎟️', step: '04', title: 'Redeem for Tickets', desc: 'Use your accumulated points to get free or discounted train tickets.' },
              ].map(item => (
                <div key={item.step} className="glass" style={{ borderRadius: '18px', padding: '28px 22px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: '12px', right: '16px', fontSize: '2.5rem', fontWeight: 900, color: 'rgba(255,109,0,0.08)', lineHeight: 1 }}>{item.step}</div>
                  <div style={{ fontSize: '2.4rem', marginBottom: '14px' }}>{item.icon}</div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem', marginBottom: '8px' }}>{item.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.84rem', lineHeight: 1.6 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Cards Grid */}
          <h2 style={{ textAlign: 'center', fontSize: '1.6rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '32px' }}>Choose Your Card</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            {cards.map(card => (
              <div key={card.id} style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.5)', position: 'relative', border: `1px solid ${card.accentColor}30`, transition: 'transform 0.3s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'translateY(-6px)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'translateY(0)'}
              >
                {/* Card Visual Header */}
                <div style={{ background: card.gradient, padding: '32px 28px 28px', position: 'relative', overflow: 'hidden' }}>
                  {/* Decorative circles */}
                  <div style={{ position: 'absolute', top: '-30px', right: '-30px', width: '120px', height: '120px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
                  <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />

                  {/* Badge */}
                  <div style={{ display: 'inline-block', backgroundColor: card.badgeColor, borderRadius: '100px', padding: '4px 12px', fontSize: '0.7rem', fontWeight: 800, color: '#fff', letterSpacing: '1px', marginBottom: '16px' }}>
                    {card.badge}
                  </div>

                  {/* Card chip mockup */}
                  <div style={{ width: '100%', height: '56px', background: 'rgba(255,255,255,0.08)', borderRadius: '10px', display: 'flex', alignItems: 'center', padding: '0 16px', gap: '12px', marginBottom: '16px', border: `1px solid ${card.accentColor}20` }}>
                    <div style={{ width: '36px', height: '26px', background: 'linear-gradient(135deg, #d4a843, #f0c040)', borderRadius: '5px' }} />
                    <div style={{ flex: 1 }}>
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.2)', borderRadius: '2px', marginBottom: '6px', width: '80%' }} />
                      <div style={{ height: '4px', background: 'rgba(255,255,255,0.12)', borderRadius: '2px', width: '60%' }} />
                    </div>
                    <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: `${card.accentColor}40`, border: `1px solid ${card.accentColor}60` }} />
                  </div>

                  <div style={{ fontSize: '1.2rem', fontWeight: 800, color: '#fff', marginBottom: '4px' }}>{card.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.6)' }}>Annual Fee: {card.fee} | Renewal: {card.renewal}</div>
                </div>

                {/* Card Body */}
                <div style={{ background: 'rgba(13,17,38,0.95)', padding: '24px 28px' }}>
                  {/* Welcome Benefit */}
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '18px', padding: '10px 14px', background: `${card.accentColor}10`, borderRadius: '10px', border: `1px solid ${card.accentColor}20` }}>
                    <Gift size={16} color={card.accentColor} />
                    <div>
                      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>Welcome Benefit</div>
                      <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#fff' }}>{card.welcome}</div>
                    </div>
                  </div>

                  {/* Key Stats */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '18px' }}>
                    {[
                      ['IRCTC Points', card.irctcPoints],
                      ['Other Points', card.otherPoints],
                      ['Lounge Access', card.lounge],
                      ['Txn Waiver', card.txnWaiver],
                    ].map(([label, val]) => (
                      <div key={label} style={{ background: 'rgba(255,255,255,0.04)', borderRadius: '10px', padding: '10px 12px', border: '1px solid rgba(255,255,255,0.06)' }}>
                        <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', marginBottom: '3px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{label}</div>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: card.accentColor }}>{val}</div>
                      </div>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
                    {card.highlights.map((h, i) => (
                      <li key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <CheckCircle size={14} color={card.accentColor} style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.5 }}>{h}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Buttons */}
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <a href={card.applyUrl} target="_blank" rel="noopener noreferrer" style={{ flex: 2, textDecoration: 'none' }}>
                      <button style={{ width: '100%', padding: '11px', background: `linear-gradient(135deg, ${card.accentColor}80, ${card.accentColor}40)`, border: `1px solid ${card.accentColor}60`, color: '#fff', borderRadius: '10px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}>
                        Apply Now
                      </button>
                    </a>
                    <Link to={card.learnUrl} style={{ flex: 1, textDecoration: 'none' }}>
                      <button style={{ width: '100%', padding: '11px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.7)', borderRadius: '10px', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
                        Details
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div style={{ marginTop: '40px', padding: '16px 20px', background: 'rgba(255,255,255,0.04)', borderRadius: '12px', border: '1px solid var(--border-glass)' }}>
            <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.78rem', margin: 0, lineHeight: 1.6 }}>
              <strong style={{ color: 'rgba(255,255,255,0.5)' }}>Disclaimer:</strong> The features outlined above are subject to the prevailing terms and conditions as stipulated by the respective card issuing partners and are subject to change without prior notice. © IRCTC. All rights reserved.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutLoyalty;
