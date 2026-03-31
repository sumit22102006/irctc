import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const compareData = {
  headers: ['Feature', 'SBI Platinum', 'SBI Premier', 'BOB RuPay', 'HDFC', 'RBL'],
  colors: ['#60A5FA', '#FBBF24', '#34D399', '#F0ABFC', '#A78BFA'],
  rows: [
    ['Annual Fee', '₹500', '₹1,499', '₹500', '₹500', '₹500'],
    ['Renewal Fee', '₹300', '₹1,499', '₹350', '₹500', '₹500'],
    ['Welcome Benefit', '350 pts', '1,500 pts', '500 pts', '₹500 voucher', '500 pts'],
    ['IRCTC Points Rate', '10 pts/₹100', '10 pts/₹100', '40 pts/₹100', '5 pts/₹100', '5 pts/₹200'],
    ['Other Spends', '1 pt/₹125', '1 pt/₹125', '4 pts/₹100', '1 pt/₹100', '1 pt/₹200'],
    ['Dining Bonus', '—', '3 pts/₹125', '—', '—', '—'],
    ['Air/Catering Bonus', '—', '5 pts/₹100', '—', '—', '2 pts/₹200'],
    ['FASTag/NCMC', '—', '—', '—', '—', '3 pts/₹200'],
    ['Txn Charge Waiver', '1%', '1% Rail+Air', '1%', '1%', '1%'],
    ['Lounge Access', '4/year', '8/year', '4/year', '8/year', '8/year'],
    ['Lounge Per Quarter', '1', '2', '1', '2', '2'],
    ['Cancel Protect', '—', '—', '—', '—', '₹5,000'],
    ['Fuel Surcharge', '—', '—', '1%', '—', '—'],
    ['Insurance Cover', '—', '—', 'Air+Rail 50L/10L', '—', '—'],
    ['Platform', 'Visa', 'Visa', 'RuPay', 'Visa', 'Visa'],
  ],
  applyUrls: [
    'https://www.sbicard.com/sprint/irctc-platinum',
    'https://www.sbicard.com/sprint/irctcPremier',
    'https://cardonline.bobcard.co.in/?utm=cbirc&utm_source=website_irc&utm_medium=IRCTC&utm_campaign=conversion',
    'https://applyonline.hdfcbank.com/cards/credit-cards.html?CHANNELSOURCE=IRCT&LGcode=IRCT&SMcode=IRCT#nbb',
    'https://creditcard-rblbank.my.site.com/s/cobranding?partner=irctc',
  ],
};

const CompareCards = () => {
  const [highlighted, setHighlighted] = useState(null);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '12px' }}>
              Compare <span style={{ color: 'var(--orange-primary)' }}>IRCTC Cards</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', maxWidth: '560px', margin: '0 auto' }}>
              Find the perfect co-brand credit card for your travel needs. Compare rewards, lounge access, and benefits side by side.
            </p>
          </div>

          {/* Column selector hint */}
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.8rem', textAlign: 'center', marginBottom: '20px' }}>
            💡 Hover over a card column to highlight it
          </p>

          {/* Table */}
          <div style={{ overflowX: 'auto', borderRadius: '20px', border: '1px solid var(--border-glass)' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
              <thead>
                <tr style={{ backgroundColor: 'rgba(255,109,0,0.08)' }}>
                  <th style={{ padding: '18px 20px', textAlign: 'left', color: 'var(--text-main)', fontWeight: 800, borderBottom: '1px solid var(--border-glass)', width: '20%', fontSize: '0.9rem' }}>Feature</th>
                  {compareData.headers.slice(1).map((h, i) => (
                    <th
                      key={i}
                      onMouseEnter={() => setHighlighted(i)}
                      onMouseLeave={() => setHighlighted(null)}
                      style={{ padding: '18px 16px', textAlign: 'center', fontWeight: 800, fontSize: '0.85rem', borderBottom: '1px solid var(--border-glass)', cursor: 'default', transition: 'background 0.2s', color: highlighted === i ? compareData.colors[i] : 'var(--text-main)', backgroundColor: highlighted === i ? `${compareData.colors[i]}12` : 'transparent', borderTop: highlighted === i ? `3px solid ${compareData.colors[i]}` : '3px solid transparent' }}
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareData.rows.map((row, ri) => (
                  <tr key={ri} onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.03)'} onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'} style={{ borderBottom: '1px solid var(--border-glass)', transition: 'background 0.15s' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 600, color: 'var(--text-muted)', fontSize: '0.85rem' }}>{row[0]}</td>
                    {row.slice(1).map((val, ci) => (
                      <td
                        key={ci}
                        onMouseEnter={() => setHighlighted(ci)}
                        onMouseLeave={() => setHighlighted(null)}
                        style={{ padding: '14px 16px', textAlign: 'center', fontSize: '0.85rem', fontWeight: val === '—' ? 400 : 600, color: val === '—' ? 'rgba(255,255,255,0.2)' : (highlighted === ci ? compareData.colors[ci] : 'var(--text-main)'), backgroundColor: highlighted === ci ? `${compareData.colors[ci]}08` : 'transparent', transition: 'all 0.15s' }}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Apply row */}
                <tr style={{ backgroundColor: 'rgba(255,109,0,0.05)' }}>
                  <td style={{ padding: '20px', fontWeight: 700, color: 'var(--orange-primary)', fontSize: '0.85rem' }}>Apply Now</td>
                  {compareData.applyUrls.map((url, i) => (
                    <td key={i} style={{ padding: '16px', textAlign: 'center' }}>
                      <a href={url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                        <button style={{ backgroundColor: compareData.colors[i], color: '#0a0f1e', border: 'none', borderRadius: '8px', padding: '8px 20px', fontWeight: 800, cursor: 'pointer', fontSize: '0.82rem', transition: 'opacity 0.2s' }}
                          onMouseEnter={e => e.currentTarget.style.opacity = '0.8'}
                          onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                        >
                          Apply
                        </button>
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: '0.75rem', marginTop: '24px', lineHeight: 1.6 }}>
            Disclaimer: Features are subject to the prevailing T&Cs stipulated by the respective card issuing partners and are subject to change without prior notice.
            <br />© IRCTC. All rights reserved. Terms and Conditions Apply.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CompareCards;
