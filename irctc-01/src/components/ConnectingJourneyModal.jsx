import React from 'react';
import { useNavigate } from 'react-router-dom';

const ConnectingJourneyModal = ({ onClose }) => {
  const navigate = useNavigate();
  const handleOk = () => { if (onClose) onClose(); else navigate(-1); };

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
      <div style={{ background: '#fff', borderRadius: '12px', width: '660px', maxWidth: '95vw', overflow: 'hidden', boxShadow: '0 24px 60px rgba(0,0,0,0.5)' }}>

        {/* Header */}
        <div style={{ background: 'linear-gradient(135deg, #1a3c6e, #0f2448)', color: '#fff', padding: '14px 24px', fontWeight: 700, fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '1.2rem' }}>🔔</span> Confirmation
        </div>

        <div style={{ padding: '24px' }}>
          {/* Aadhaar Banner */}
          <div style={{ background: 'linear-gradient(135deg, #EEF2FF, #E0EAFF)', borderRadius: '14px', padding: '20px', display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px', border: '2px solid #BFD0FF' }}>
            <div style={{ flexShrink: 0, width: '88px', height: '56px', background: 'linear-gradient(135deg, #1a3c6e, #2d5fa0)', borderRadius: '8px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '4px', boxShadow: '0 4px 12px rgba(26,60,110,0.3)' }}>
              <div style={{ fontSize: '1.4rem' }}>🪪</div>
              <div style={{ color: '#fff', fontSize: '0.48rem', fontWeight: 800, letterSpacing: '0.5px' }}>AADHAAR</div>
            </div>
            <div style={{ flex: 1, textAlign: 'center' }}>
              <div style={{ fontWeight: 900, fontSize: '1.2rem', color: '#1a1a2e', marginBottom: '4px' }}>From July 1, 2025</div>
              <div style={{ fontWeight: 600, fontSize: '0.88rem', color: '#374151', marginBottom: '12px' }}>
                Only <strong>Aadhaar Verified</strong> users can book Tatkal Train Tickets
              </div>
              <button style={{ background: 'linear-gradient(135deg, #1a3c6e, #2d5fa0)', color: '#fff', border: 'none', borderRadius: '8px', padding: '8px 22px', fontWeight: 700, cursor: 'pointer', fontSize: '0.85rem' }}
                onClick={() => window.open('https://www.irctc.co.in', '_blank')}>
                🔐 Authenticate now
              </button>
            </div>
            <div style={{ flexShrink: 0, width: '72px', height: '56px', background: '#fff', borderRadius: '10px', border: '2px solid #DDE8FF', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2px' }}>
              <div style={{ fontSize: '1.6rem' }}>🚆</div>
              <div style={{ fontSize: '0.42rem', fontWeight: 900, color: '#1a3c6e', letterSpacing: '0.5px' }}>IRCTC</div>
            </div>
          </div>

          {/* Connecting Journey illustration */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '16px' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem' }}>🚉</div>
              <div style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 600 }}>Station A</div>
            </div>
            <div style={{ flex: 1, height: '3px', background: 'repeating-linear-gradient(90deg, #1a3c6e 0, #1a3c6e 8px, transparent 8px, transparent 16px)', borderRadius: '2px', margin: '0 4px', marginBottom: '18px' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem' }}>🔄</div>
              <div style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 600 }}>Transfer</div>
            </div>
            <div style={{ flex: 1, height: '3px', background: 'repeating-linear-gradient(90deg, #FF6D00 0, #FF6D00 8px, transparent 8px, transparent 16px)', borderRadius: '2px', margin: '0 4px', marginBottom: '18px' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2rem' }}>🏁</div>
              <div style={{ fontSize: '0.7rem', color: '#6B7280', fontWeight: 600 }}>Station B</div>
            </div>
          </div>

          <p style={{ fontWeight: 700, fontSize: '0.92rem', color: '#1a1a2e', lineHeight: 1.7, marginBottom: '12px', textAlign: 'justify' }}>
            You Are Booking a <span style={{ color: '#1a3c6e' }}>Connecting Journey</span> ticket. You need to input an eligible PNR (any Counter Ticket PNR or PNR booked with the same User ID) for connecting journey ticket booking.
          </p>

          {/* Warning boxes */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            {[
              { icon: '⏱️', title: 'Allow Transfer Time', desc: 'Consider time needed to change platform or station' },
              { icon: '🚌', title: 'Transport Margin', desc: 'Account for traffic, transport availability between stations' },
              { icon: '🎫', title: 'Same User PNR', desc: 'Eligible PNR must be booked with the same IRCTC User ID' },
              { icon: '⚠️', title: 'Railway Not Liable', desc: 'Railways not responsible for missed connections due to delays' },
            ].map(item => (
              <div key={item.title} style={{ background: '#FFF7ED', border: '1px solid #FED7AA', borderRadius: '10px', padding: '10px 12px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.78rem', color: '#92400E', marginBottom: '2px' }}>{item.title}</div>
                  <div style={{ fontSize: '0.72rem', color: '#78350F', lineHeight: 1.4 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <hr style={{ borderColor: '#e5e7eb', marginBottom: '18px' }} />

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

export default ConnectingJourneyModal;
