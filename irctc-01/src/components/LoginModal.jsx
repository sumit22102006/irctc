import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const LoginModal = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { t } = useLanguage();

  const handleClose = (e) => {
    if (e.target.id === 'modal-backdrop') {
      navigate('/');
    }
  };

  return (
    <div 
      id="modal-backdrop"
      onClick={handleClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0,0,0,0.6)',
        backdropFilter: 'blur(16px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
    >
      <div 
        className="glass fade-in" 
        style={{
          width: '100%',
          maxWidth: '480px',
          backgroundColor: 'var(--blue-navy)',
          borderRadius: '24px',
          overflow: 'hidden',
          position: 'relative',
          boxShadow: '0 24px 50px rgba(0,0,0,0.8)'
        }}
      >
        <button 
          onClick={() => navigate('/')} 
          style={{ position: 'absolute', top: '20px', right: '20px', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer', zIndex: 10 }}
        >
          <X size={24} />
        </button>

        <div style={{ padding: '40px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 800, marginBottom: '32px', color: 'var(--text-main)' }}>
            <span style={{ borderBottom: '4px solid var(--orange-primary)', paddingBottom: '8px' }}>{t('login.title').toUpperCase()}</span>
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input type="text" className="custom-input" placeholder={t('login.username')} style={{ padding: '16px', fontSize: '1rem' }} />
            </div>

            <div style={{ position: 'relative', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <input 
                type={showPassword ? 'text' : 'password'} 
                className="custom-input" 
                placeholder={t('login.password')} 
                style={{ padding: '16px', fontSize: '1rem', paddingRight: '48px' }} 
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <a href="#" style={{ color: '#60A5FA', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none', marginTop: '-8px' }}>
              {t('login.forgot')}
            </a>

            <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', marginTop: '8px' }}>
              <input type="checkbox" style={{ marginTop: '4px', width: '18px', height: '18px', accentColor: 'var(--orange-primary)', cursor: 'pointer' }} />
              <span style={{ fontSize: '0.9rem', color: 'var(--text-main)', lineHeight: 1.5, fontWeight: 500 }}>
                {t('login.visually_impaired')}
              </span>
            </label>

            <button className="btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1.2rem', marginTop: '16px', textTransform: 'uppercase', letterSpacing: '1px' }}>
              {t('login.sign_in')}
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'var(--border-glass)' }}>
          <button style={{ backgroundColor: 'var(--blue-navy-light)', color: 'var(--text-main)', border: 'none', padding: '20px', fontWeight: 700, cursor: 'pointer', fontSize: '1rem', textTransform: 'uppercase', transition: 'background-color 0.3s' }} className="hover-lighter">
            {t('login.register')}
          </button>
          <button style={{ backgroundColor: 'var(--blue-navy-light)', color: 'var(--text-main)', border: 'none', padding: '20px', fontWeight: 700, cursor: 'pointer', fontSize: '1rem', textTransform: 'uppercase', transition: 'background-color 0.3s' }} className="hover-lighter">
            {t('login.agent_login')}
          </button>
        </div>
      </div>
      
      <style>{`
        .hover-lighter:hover {
          background-color: var(--blue-navy-lighter) !important;
        }
      `}</style>
    </div>
  );
};

export default LoginModal;
