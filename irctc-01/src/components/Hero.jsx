import React from 'react';
import { Search, MapPin, Calendar, Clock, ArrowRightLeft, Briefcase } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Hero = ({ onOpenStatus }) => {
  const { t } = useLanguage();

  return (
    <section className="hero-section">
      <div className="fade-in" style={{ width: '100%', maxWidth: '1200px', display: 'flex', flexDirection: 'column', gap: '36px', alignItems: 'center' }}>

        {/* Heading */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="hero-title">
            {t('hero.title')}<br />
            {t('hero.starts')} <span style={{ color: 'var(--orange-primary)' }}>{t('hero.here')}</span>
          </h1>
          <p className="hero-subtitle">{t('hero.subtitle')}</p>
        </div>

        {/* Floating Booking Card */}
        <div className="glass slide-up booking-card">

          {/* Tabs */}
          <div className="booking-tabs">
            <button style={{ background: 'none', border: 'none', color: 'var(--orange-primary)', fontWeight: 700, fontSize: '1rem', cursor: 'pointer', borderBottom: '2px solid var(--orange-primary)', paddingBottom: '6px' }}>
              {t('hero.book_ticket')}
            </button>
            <button onClick={onOpenStatus} style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', paddingBottom: '6px' }}>
              {t('hero.live_status')}
            </button>
            <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', fontWeight: 600, fontSize: '1rem', cursor: 'pointer', paddingBottom: '6px' }}>
              {t('hero.pnr_enquiry')}
            </button>
          </div>

          {/* From / Swap / To */}
          <div className="from-to-container">
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={15} /> {t('hero.from')}
              </label>
              <input type="text" className="custom-input" placeholder={t('hero.from')} defaultValue="NDLS - New Delhi" />
            </div>

            <div className="swap-btn-container">
              <ArrowRightLeft size={18} color="var(--orange-primary)" />
            </div>

            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <MapPin size={15} /> {t('hero.to')}
              </label>
              <input type="text" className="custom-input" placeholder={t('hero.to')} defaultValue="MMCT - Mumbai Central" />
            </div>
          </div>

          {/* Date / Quota / Classes */}
          <div className="date-row">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Calendar size={15} /> {t('hero.date')}
              </label>
              <input type="date" className="custom-input" style={{ colorScheme: 'dark' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Clock size={15} /> {t('hero.quota')}
              </label>
              <select className="custom-input" style={{ appearance: 'none' }}>
                <option>{t('hero.quota_general')}</option>
                <option>{t('hero.quota_tatkal')}</option>
                <option>{t('hero.quota_ladies')}</option>
              </select>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Briefcase size={15} /> Classes
              </label>
              <select className="custom-input" style={{ appearance: 'none' }}>
                <option>All Classes</option>
                <option>AC First Class (1A)</option>
                <option>Exec. Chair Car (EC)</option>
                <option>AC 2 Tier (2A)</option>
                <option>First Class (FC)</option>
              </select>
            </div>
          </div>

          {/* Checkboxes */}
          <div className="checkbox-row" style={{ paddingBottom: '8px' }}>
            <label style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--orange-primary)', cursor: 'pointer' }} />
              {t('hero.disability_concession')}
            </label>
            <label style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--orange-primary)', cursor: 'pointer' }} />
              {t('hero.flexible_date')}
            </label>
            <label style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', color: 'var(--text-main)', fontWeight: 600, fontSize: '0.9rem' }}>
              <input type="checkbox" style={{ width: '18px', height: '18px', accentColor: 'var(--orange-primary)', cursor: 'pointer' }} />
              {t('hero.railway_pass')}
            </label>
          </div>

          {/* Search Button */}
          <button className="btn-primary" style={{ width: '100%', marginTop: 'auto', minHeight: '52px', fontSize: '1.1rem', padding: '15px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '10px' }}>
            <Search size={20} /> {t('hero.search_trains')}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
