import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Phone, Link as LinkIcon, Mail } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ContactModal = () => {
  const navigate = useNavigate();
  const { t } = useLanguage();

  const handleClose = (e) => {
    if (e.target.id === 'modal-backdrop') {
      navigate('/');
    }
  };

  const CardRow = ({ title, numbers, email }) => (
    <div style={{ borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '16px', marginBottom: '16px' }}>
      <h5 style={{ fontWeight: 600, fontSize: '0.95rem', marginBottom: '8px', color: 'var(--text-main)' }}>{t('contact.loyalty_card')} {title}</h5>
      {numbers && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: '8px', marginBottom: '4px' }}><Phone size={14} /> {t('contact.contact_number')} <span style={{ color: '#60A5FA', fontWeight: 600 }}>{numbers}</span></p>}
      {email && <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', display: 'flex', gap: '8px' }}><LinkIcon size={14} /> {t('contact.email_url')} <span style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'underline' }}>{email}</span></p>}
    </div>
  );

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
          maxWidth: '800px',
          maxHeight: '90vh',
          backgroundColor: 'var(--blue-navy)',
          borderRadius: '24px',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          boxShadow: '0 24px 60px rgba(0,0,0,0.8)'
        }}
      >
        {/* Header */}
        <div style={{ backgroundColor: 'var(--blue-navy-light)', padding: '24px 32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-glass)' }}>
          <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--text-main)' }}>{t('contact.heading')}</h2>
          <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}><X size={24} /></button>
        </div>

        {/* Scrollable Content */}
        <div style={{ padding: '32px', overflowY: 'auto' }}>
          
          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-main)' }}>{t('contact.queries_railway')}</h3>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', marginBottom: '32px' }}>
            <h4 style={{ fontWeight: 700, marginBottom: '12px', fontSize: '1rem' }}>{t('contact.support')}</h4>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '8px', lineHeight: 1.5 }}>
              {t('contact.support_desc1')}
            </p>
            <p style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '16px', fontSize: '0.95rem' }}>
               <LinkIcon size={16} color="#60A5FA"/> <span style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'underline' }}>https://equery.irctc.co.in/</span>
            </p>

            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '8px', lineHeight: 1.5 }}>
              {t('contact.support_desc2')}
            </p>
            <p style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '24px', fontSize: '0.95rem' }}>
               <Mail size={16} color="#60A5FA"/> <span style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'underline' }}>etickets@irctc.co.in</span>
            </p>
            
            <p style={{ color: 'var(--text-main)', fontSize: '1.1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
               <Phone size={18} color="var(--orange-primary)"/> {t('contact.dial')}
            </p>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', lineHeight: 1.5, marginBottom: '24px' }}>
              {t('contact.languages')}
            </p>

            <h4 style={{ fontWeight: 700, marginBottom: '8px', fontSize: '0.95rem' }}>{t('contact.support_outside')}</h4>
            <p style={{ color: 'var(--text-main)', fontSize: '0.95rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}>
               <Phone size={16} color="var(--orange-primary)"/> 
               {t('contact.call')} <span style={{ color: '#60A5FA', textDecoration: 'underline' }}>+91-8044647999</span> / <span style={{ color: '#60A5FA', textDecoration: 'underline' }}>+91-8035734999</span>
            </p>

            <h4 style={{ fontWeight: 700, fontSize: '0.95rem', marginBottom: '8px' }}>{t('contact.imudra')}</h4>
            <p style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.95rem' }}>
               <LinkIcon size={16} color="#60A5FA"/> <span style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'underline' }}>https://equery.irctc.co.in/</span>
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-glass)', marginBottom: '32px' }} />

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '24px', color: 'var(--text-main)', lineHeight: 1.4 }}>{t('contact.loyalty_complaint')}</h3>
          
          <div style={{ backgroundColor: 'rgba(255,255,255,0.02)', padding: '24px', borderRadius: '16px', marginBottom: '32px' }}>
            <CardRow title="IRCTC-SBI" numbers="0124-39021212 / 18001801295" email="customercare@sbicard.com" />
            <CardRow title="IRCTC-BOB" numbers="1800225100 / 18001031006" email="crm@bobfinancial.com" />
            <CardRow title="IRCTC-HDFC" numbers="18002026161 / 18602676161" email="https://www.hdfcbank.com/personal/need-help/contact-us" />
            <CardRow title="IRCTC-RBL" numbers="02262327777 / 02271190900" email="cardservices@rblbank.com" />
            
            <p style={{ fontSize: '0.95rem', marginTop: '24px', lineHeight: 1.5, color: 'var(--text-muted)' }}>
              {t('contact.loyalty_other')} <span style={{ color: '#60A5FA', fontWeight: 600, textDecoration: 'underline' }}>loyaltyprogram@irctc.co.in</span>
            </p>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid var(--border-glass)', marginBottom: '32px' }} />

          <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>{t('contact.office')}</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.95rem' }}>
            {t('contact.office_line1')}<br/>
            {t('contact.office_line2')}<br/>
            {t('contact.office_line3')}
          </p>

        </div>
      </div>
      
      <style>{`
        ::-webkit-scrollbar {
          width: 8px;
        }
        ::-webkit-scrollbar-track {
          background: rgba(0,0,0,0.1);
          border-radius: 4px;
        }
        ::-webkit-scrollbar-thumb {
          background: rgba(255,255,255,0.2);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default ContactModal;
