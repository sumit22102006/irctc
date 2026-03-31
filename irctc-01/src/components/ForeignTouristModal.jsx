import React from 'react';
import { useNavigate } from 'react-router-dom';

const ForeignTouristModal = ({ onClose }) => {
  const navigate = useNavigate();
  const handleOk = () => { if (onClose) onClose(); else navigate(-1); };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', borderRadius: '12px', width: '640px', maxWidth: '95vw', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1a3c6e, #0f2448)', color: '#fff', padding: '14px 24px', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.2rem' }}>🔔</span> Confirmation
        </div>

        <div style={{ padding: '24px' }}>
          {/* Aadhaar Banner */}
          <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #E0EAFF)', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px', border: '2px solid #BFD0FF' }}>

            {/* Aadhaar Card SVG */}
            <div style={{ flexShrink: 0, width: '88px', height: '56px', background: 'linear-gradient(135deg, #1a3c6e, #2d5fa0)', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', border: '2px solid rgba(255,255,255,0.3)', boxShadow: '0 4px 12px rgba(26,60,110,0.3)' }}>
              <div style={{ fontSize: '1.4rem' }}>🪪</div>
              <div style={{ color: '#fff', fontSize: '0.48rem', fontWeight: 800, letterSpacing: '0.5px' }}>AADHAAR</div>
            </div>

            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '1.25rem', color: '#1a1a2e', marginBottom: '4px' }}>From July 1, 2025</div>
              <div style={{ fontWeight: 600, fontSize: '0.9rem', color: '#374151', marginBottom: '14px', lineHeight: 1.5 }}>
                Only <strong>Aadhaar Verified</strong> users can book<br/>Tatkal Train Tickets
              </div>
              <button
                style={{ background: 'linear-gradient(135deg, #1a3c6e, #2d5fa0)', color: '#fff', border: 'none', borderRadius: '8px', padding: '9px 24px', fontWeight: 700, cursor: 'pointer', fontSize: '0.88rem', boxShadow: '0 4px 12px rgba(26,60,110,0.3)' }}
                onClick={() => window.open('https://www.irctc.co.in', '_blank')}
              >
                🔐 Authenticate now
              </button>
            </div>

            {/* IRCTC Logo Replacement */}
            <div style={{ flexShrink: 0, width: '72px', height: '56px', background: '#fff', borderRadius: '10px', border: '2px solid #DDE8FF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
              <div style={{ fontSize: '1.6rem' }}>🚆</div>
              <div style={{ fontSize: '0.42rem', fontWeight: 900, color: '#1a3c6e', letterSpacing: '0.5px' }}>IRCTC</div>
            </div>
          </div>

          {/* Globe + Foreign Tourist info */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ fontSize: '2rem' }}>🌍</div>
            <p style={{ textAlign: 'center', fontWeight: 700, fontSize: '1.05rem', color: '#1a1a2e', margin: 0 }}>
              You are booking in{' '}
              <span style={{ color: '#1a3c6e', borderBottom: '2px solid #1a3c6e' }}>Foreign Tourist quota</span>
            </p>
            <div style={{ fontSize: '2rem' }}>✈️</div>
          </div>

          {/* Info boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {[
              { icon: '🪪', label: 'Valid Passport Required' },
              { icon: '💱', label: 'Pay in Foreign Currency' },
              { icon: '🏨', label: 'Hotel Voucher if Needed' },
            ].map(item => (
              <div key={item.label} style={{ background: '#F0F4FF', borderRadius: '10px', padding: '10px 8px', textAlign: 'center', border: '1px solid #DDE8FF' }}>
                <div style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{item.icon}</div>
                <div style={{ fontSize: '0.72rem', color: '#374151', fontWeight: 600, lineHeight: 1.3 }}>{item.label}</div>
              </div>
            ))}
          </div>

          <hr style={{ borderColor: '#e5e7eb', marginBottom: '20px' }} />

          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button onClick={handleOk} style={{ background: 'linear-gradient(135deg, #FF6D00, #FF9500)', color: '#fff', border: 'none', borderRadius: '10px', padding: '11px 56px', fontWeight: 800, fontSize: '1rem', cursor: 'pointer', boxShadow: '0 4px 16px rgba(255,109,0,0.4)', transition: 'transform 0.2s' }}
              onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.04)'}
              onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
            >OK</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeignTouristModal;
