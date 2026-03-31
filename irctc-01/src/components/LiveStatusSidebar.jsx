import React from 'react';
import { X, MapPin, Navigation, Clock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LiveStatusSidebar = ({ isOpen, onClose }) => {
  const { t } = useLanguage();

  return (
    <div 
      className="glass"
      style={{
        position: 'fixed',
        top: 0,
        right: 0,
        height: '100vh',
        width: '400px',
        maxWidth: '100%',
        zIndex: 100,
        transform: isOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
        borderLeft: '1px solid var(--border-glass)',
        borderTop: 'none',
        borderBottom: 'none',
        borderRight: 'none',
        borderRadius: '24px 0 0 24px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div style={{ padding: '24px', borderBottom: '1px solid var(--border-glass)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h3 style={{ fontSize: '1.4rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10B981', boxShadow: '0 0 10px #10B981', animation: 'pulse 2s infinite' }}></div>
          {t('livestatus.title')}
        </h3>
        <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', display: 'flex' }}>
          <X size={24} />
        </button>
      </div>

      <div style={{ padding: '24px', flex: 1, overflowY: 'auto' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
          <label style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: 500 }}>{t('livestatus.train_no')}</label>
          <input type="text" className="custom-input" placeholder={t('livestatus.train_placeholder') || "e.g. 22436 / VANDE BHARAT EXP"} />
          <button className="btn-primary" style={{ marginTop: '12px', padding: '12px' }}>{t('livestatus.track_btn') || "Track Train"}</button>
        </div>

        <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '16px', border: '1px solid var(--border-glass)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px' }}>
            <span style={{ fontWeight: 600, color: 'var(--orange-primary)' }}>22436 VANDE BHARAT</span>
            <span style={{ fontSize: '0.9rem', color: '#10B981', fontWeight: 500 }}>{t('livestatus.on_time')}</span>
          </div>

          <div style={{ position: 'relative', paddingLeft: '24px' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '7px', top: '10px', bottom: '10px', width: '2px', backgroundColor: 'var(--border-glass)' }}></div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-22px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--orange-primary)', border: '2px solid var(--blue-navy)' }}></div>
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem' }}>New Delhi (NDLS)</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', gap: '16px', marginTop: '4px' }}>
                  <span><Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> 06:00 AM</span>
                  <span style={{ color: 'var(--text-main)', fontSize: '0.8rem', backgroundColor: 'rgba(255,255,255,0.1)', padding: '2px 8px', borderRadius: '4px' }}>{t('livestatus.departed') || 'Departed'}</span>
                </p>
              </div>

              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '-22px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', backgroundColor: 'var(--text-muted)', border: '2px solid var(--blue-navy)' }}></div>
                <h4 style={{ fontWeight: 600, fontSize: '1.1rem', color: 'var(--text-muted)' }}>Varanasi Jn (BSB)</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', display: 'flex', gap: '16px', marginTop: '4px' }}>
                  <span><Clock size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }}/> 14:00 PM</span>
                  <span style={{ fontSize: '0.8rem' }}>{t('livestatus.expected') || 'Expected'}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.4); }
          70% { box-shadow: 0 0 0 10px rgba(16, 185, 129, 0); }
          100% { box-shadow: 0 0 0 0 rgba(16, 185, 129, 0); }
        }
      `}</style>
    </div>
  );
};

export default LiveStatusSidebar;
