import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer style={{ backgroundColor: '#211e4f', color: '#fff', fontSize: '0.85rem' }}>
      
      {/* Social Media Bar */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '24px', padding: '20px', borderBottom: '1px solid rgba(255,255,255,0.1)', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '1.1rem', fontWeight: 500, marginRight: '16px' }}>{t('footer.social_connect')}</span>
        <div style={{ display: 'flex', gap: '12px' }}>
          <div className="social-icon" style={{ backgroundColor: '#1877F2' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/facebook.svg" className="brand-icon" alt="Facebook" /></div>
          <div className="social-icon" style={{ backgroundColor: '#25D366' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/whatsapp.svg" className="brand-icon" alt="WhatsApp" /></div>
          <div className="social-icon" style={{ backgroundColor: '#FF0000' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/youtube.svg" className="brand-icon" alt="YouTube" /></div>
          <div className="social-icon" style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/instagram.svg" className="brand-icon" alt="Instagram" /></div>
          <div className="social-icon" style={{ backgroundColor: '#0A66C2' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" className="brand-icon" alt="LinkedIn" /></div>
          <div className="social-icon" style={{ backgroundColor: '#26A5E4' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/telegram.svg" className="brand-icon" alt="Telegram" /></div>
          <div className="social-icon" style={{ backgroundColor: '#E60023' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/pinterest.svg" className="brand-icon" alt="Pinterest" /></div>
          <div className="social-icon" style={{ backgroundColor: '#1DA1F2' }}><img src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/twitter.svg" className="brand-icon" alt="Twitter" /></div>
        </div>
      </div>

      {/* Links Grid */}
      <div className="footer-cols" style={{ maxWidth: '1200px', margin: '0 auto', padding: '40px 20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '32px' }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{t('footer.irctc_trains')}</h4>
          <a href="#" className="footer-link">{t('footer.general_info')}</a>
          <a href="#" className="footer-link">{t('footer.important_info')}</a>
          <a href="#" className="footer-link">{t('footer.agents')}</a>
          <a href="#" className="footer-link">{t('footer.enquiries')}</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{t('footer.how_to')}</h4>
          <a href="#" className="footer-link">{t('footer.irctc_app')}</a>
          <a href="#" className="footer-link">{t('footer.advertise')}</a>
          <a href="#" className="footer-link">{t('footer.refund_rules')}</a>
          <a href="#" className="footer-link">{t('footer.person_with_disability')}</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{t('footer.ewallet')}</h4>
          <a href="#" className="footer-link">{t('footer.cobranded_card')}</a>
          <a href="#" className="footer-link">{t('footer.irctc_ipay')}</a>
          <a href="#" className="footer-link">{t('footer.irctc_zone')}</a>
          <a href="#" className="footer-link">{t('footer.dmrc_ticket')}</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{t('footer.newly_migrated_agents')}</h4>
          <a href="#" className="footer-link">{t('footer.mobile_zone')}</a>
          <a href="#" className="footer-link">{t('footer.policies_link')}</a>
          <a href="#" className="footer-link">{t('footer.ask_disha')}</a>
          <a href="#" className="footer-link">{t('footer.about_us')}</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <h4 style={{ fontWeight: 600, marginBottom: '8px' }}>{t('footer.help_support')}</h4>
          <a href="#" className="footer-link">{t('footer.epantry')}</a>
        </div>
      </div>

      {/* Bottom Partner Logos & Copyright */}
      <div style={{ backgroundColor: 'var(--text-main)', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
        <div style={{ display: 'flex', gap: '24px', color: 'var(--blue-navy)', fontWeight: 800, fontSize: '1.2rem', alignItems: 'center' }}>
          <span>VeriSign</span>
          <span style={{ color: '#eb001b' }}>MasterCard</span>
          <span style={{ color: '#016fd0' }}>American Express</span>
          <span style={{ color: '#1a1f71' }}>VISA</span>
          <span style={{ color: '#e47d21' }}>RuPay</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', color: 'var(--blue-navy)', fontSize: '0.8rem' }}>
          <p>{t('footer.copyright_text')}</p>
          <p>{t('footer.designed_by')} <strong>CRIS</strong></p>
          <p><strong>{t('footer.compatible_browsers')}</strong></p>
        </div>
      </div>

      <style>{`
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .social-icon:hover {
          transform: scale(1.15) translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.5);
        }
        .brand-icon {
          width: 20px;
          height: 20px;
          filter: invert(1) brightness(100);
          pointer-events: none;
        }
        .footer-link {
          color: rgba(255,255,255,0.7);
          text-decoration: none;
          transition: color 0.3s ease;
        }
        .footer-link:hover {
          color: var(--orange-primary);
        }
      `}</style>
    </footer>
  );
}

export default Footer;
