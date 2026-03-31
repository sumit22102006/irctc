import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronRight, ChevronDown, Home } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
  const [currentDate, setCurrentDate] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSection, setOpenSection] = useState(null);
  const navigate = useNavigate();
  const { language, toggleLanguage, t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setCurrentDate(now.toLocaleString('en-GB', {
        day: '2-digit', month: 'short', year: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
      }).replace(',', ' [') + ']');
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const toggleSection = (name) =>
    setOpenSection(prev => (prev === name ? null : name));

  const closeAll = () => { setMobileOpen(false); setOpenSection(null); };

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>

      {/* ─── Top Utility Bar ─── */}
      <div className="utility-bar" style={{
        padding: '6px 32px', display: 'flex', justifyContent: 'center',
        alignItems: 'center', fontSize: '0.78rem',
        borderBottom: '1px solid var(--border-glass)', color: 'var(--text-muted)'
      }}>
        <div style={{ display: 'flex', gap: '14px', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
          <span style={{ fontWeight: 600 }}>{currentDate || t('utility.loading')}</span>
          <span>|</span>
          <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>{language === 'en' ? 'A-' : 'अ -'}</a>
          <span>|</span>
          <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>{language === 'en' ? 'A' : 'अ'}</a>
          <span>|</span>
          <a href="#" style={{ color: 'var(--text-main)', textDecoration: 'none' }}>{language === 'en' ? 'A+' : 'अ +'}</a>
          <span>|</span>
          <a href="#" onClick={(e) => { e.preventDefault(); toggleLanguage(); }}
            style={{ color: 'var(--text-main)', textDecoration: 'none', fontWeight: 600, cursor: 'pointer' }}>
            {language === 'en' ? 'हिंदी' : 'English'}
          </a>
        </div>
      </div>

      {/* ─── Main Nav Row ─── */}
      <nav className="main-nav" style={{ padding: '12px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>

        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Link to="/" className="irctc-logo-link" style={{
            backgroundColor: 'rgba(255,255,255,0.9)', padding: '5px 8px',
            borderRadius: '10px', display: 'flex', alignItems: 'center',
            transition: 'transform 0.2s', boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}>
            <img src="https://www.irctc.co.in/nget/assets/images/logo.png"
              alt="IRCTC" className="navbar-logo-img" style={{ height: '40px', objectFit: 'contain' }} />
          </Link>
          <Link to="/" title="Home" className="navbar-home-btn" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: '36px', height: '36px',
            backgroundColor: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(255,255,255,0.15)',
            borderRadius: '8px', color: 'var(--text-main)', textDecoration: 'none',
            transition: 'all 0.2s', flexShrink: 0
          }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--orange-primary)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'; }}>
            <Home size={16} strokeWidth={2} />
          </Link>
        </div>

        {/* ─── Desktop Links (hidden below 1100px) ─── */}
        <div className="desktop-nav">
          <button onClick={() => navigate('/login')} className="btn-primary glowing-text"
            style={{ padding: '7px 18px', fontSize: '0.8rem' }}>
            {t('nav.login')}
          </button>

          <NavDropdown label={t('nav.trains')}>
            <Link to="/login" className="dropdown-item">{t('nav.book_ticket')}</Link>
            <Link to="/foreign-tourist" className="dropdown-item">{t('nav.foreign_tourist')}</Link>
            <Link to="/connecting-journey" className="dropdown-item">{t('nav.connecting_journey')}</Link>
            <NestedItem label={t('nav.irctc_trains')}>
              <a href="https://www.irctc.co.in/nget/train-search" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.group_booking')}</a>
              <a href="https://www.irctc.co.in/nget/profile/insurancepolicy" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.insurance')}</a>
            </NestedItem>
            <Link to="/cancel-ticket" className="dropdown-item">{t('nav.cancel_ticket')}</Link>
            <Link to="/pnr-enquiry" className="dropdown-item">{t('nav.pnr_enquiry')}</Link>
            <Link to="/train-schedule" className="dropdown-item">{t('nav.train_schedule')}</Link>
            <Link to="/track-train" className="dropdown-item">{t('nav.track_train')}</Link>
            <Link to="/ftr-booking" className="dropdown-item">{t('nav.ftr_booking')}</Link>
            <Link to="/pets-booking" className="dropdown-item">{t('nav.dogs_cats')}</Link>
            <a href="https://www.irctc.co.in/nget/profile/aadhaar-linking" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.link_aadhaar')}</a>
            <a href="https://www.irctc.co.in/nget/ticket-booking/counter-ticket-cancellation" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.counter_cancel')}</a>
            <a href="https://www.irctc.co.in/nget/ticket-booking/boarding-point-change" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.counter_boarding')}</a>
            <NestedItem label={t('nav.mobile_apps')}>
              <a href="https://play.google.com/store/apps/details?id=cris.org.in.prs.ima" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.rail_connect_android')}</a>
              <a href="https://apps.apple.com/in/app/irctc-rail-connect/id1107094371" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.rail_connect_ios')}</a>
            </NestedItem>
          </NavDropdown>

          <NavDropdown label={t('nav.meals')}>
            <Link to="/book-food" className="dropdown-item">{t('nav.epantry')}</Link>
            <a href="https://www.ecatering.irctc.co.in/" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.ecatering')}</a>
            <a href="https://menurates.irctc.co.in/" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.cooked_food')}</a>
          </NavDropdown>

          <NavDropdown label={t('nav.loyalty')}>
            <Link to="/loyalty" className="dropdown-item">{t('nav.about_loyalty')}</Link>
            <Link to="/compare-cards" className="dropdown-item">{t('nav.compare_cards')}</Link>
            <NestedItem label={t('nav.sbi_card')}>
              <Link to="/loyalty-sbi" className="dropdown-item">{t('nav.apply_now')}</Link>
              <Link to="/loyalty-sbi" className="dropdown-item">{t('nav.offers')}</Link>
            </NestedItem>
            <NestedItem label={t('nav.bob_card')}>
              <Link to="/loyalty-bob" className="dropdown-item">{t('nav.apply_now')}</Link>
            </NestedItem>
            <NestedItem label={t('nav.hdfc_card')}>
              <a href="https://applyonline.hdfcbank.com/cards/credit-cards.html" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.apply_now')}</a>
            </NestedItem>
            <NestedItem label={t('nav.rbl_card')}>
              <a href="https://creditcard-rblbank.my.site.com/s/cobranding?partner=irctc" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.apply_now')}</a>
            </NestedItem>
            <a href="https://www.irctc.co.in/nget/profile/add-loyalty-account-without-login" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('nav.add_loyalty')}</a>
          </NavDropdown>

          <NavDropdown label={t('nav.ewallet')}>
            <Link to="/about-ewallet" className="dropdown-item">{t('nav.about_ewallet')}</Link>
            <Link to="/ewallet-guide" className="dropdown-item">{t('nav.ewallet_guide')}</Link>
          </NavDropdown>

          <Link to="/alerts" className="nav-link-base">{t('nav.alerts')}</Link>

          <NavDropdown label={t('nav.other_services')}>
            <Link to="/irctc-ipay" className="dropdown-item">IRCTC-iPAY</Link>
            <a href="https://www.air.irctc.co.in/" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('services.flights')}</a>
            <a href="https://www.hotels.irctc.co.in/hotels" target="_blank" rel="noopener noreferrer" className="dropdown-item">{t('services.hotels')}</a>
            <Link to="/e-catering" className="dropdown-item">{t('services.e_catering')}</Link>
            <Link to="/holidays" className="dropdown-item">{t('services.holidays')}</Link>
            <Link to="/gallery" className="dropdown-item">{t('services.gallery')}</Link>
            <Link to="/e-wheelchair" className="dropdown-item">{t('services.e_wheelchair')}</Link>
            <a href="https://www.bus.irctc.co.in/home" target="_blank" rel="noopener noreferrer" className="dropdown-item">Bus Tickets</a>
            <Link to="/promotions" className="dropdown-item">{t('services.promotions')}</Link>
          </NavDropdown>

          <Link to="/contact" className="nav-link-base">{t('nav.contact_us')}</Link>
        </div>

        {/* ─── Hamburger (mobile only) ─── */}
        <button
          className="hamburger-btn"
          onClick={() => setMobileOpen(v => !v)}
          style={{
            background: 'none', border: '1px solid var(--border-glass)',
            color: 'var(--text-main)', borderRadius: '8px',
            padding: '8px', cursor: 'pointer', display: 'none'
          }}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* ─── Mobile Drawer ─── */}
      {mobileOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 999,
          display: 'flex', flexDirection: 'column'
        }} onClick={closeAll}>
          <div style={{
            backgroundColor: 'var(--blue-navy-light)',
            width: '100%', maxWidth: '380px',
            height: '100vh', overflowY: 'auto',
            padding: '0', boxShadow: '4px 0 30px rgba(0,0,0,0.5)'
          }} onClick={e => e.stopPropagation()}>
            {/* Drawer Header */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '16px 20px', borderBottom: '1px solid var(--border-glass)',
              backgroundColor: 'var(--blue-navy)'
            }}>
              <img src="https://www.irctc.co.in/nget/assets/images/logo.png"
                alt="IRCTC" style={{ height: '36px', backgroundColor: 'white', padding: '4px 8px', borderRadius: '8px' }} />
              <button onClick={closeAll} style={{ background: 'none', border: 'none', color: 'var(--text-main)', cursor: 'pointer' }}>
                <X size={24} />
              </button>
            </div>

            {/* Login button */}
            <div style={{ padding: '16px 20px' }}>
              <button onClick={() => { navigate('/login'); closeAll(); }}
                className="btn-primary" style={{ width: '100%', fontSize: '1rem', padding: '12px' }}>
                {t('nav.login')}
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div style={{ padding: '0 0 32px' }}>
              {[
                {
                  label: t('nav.trains'), items: [
                    { label: t('nav.book_ticket'), to: '/login' },
                    { label: t('nav.foreign_tourist'), to: '/foreign-tourist' },
                    { label: t('nav.connecting_journey'), to: '/connecting-journey' },
                    { label: t('nav.cancel_ticket'), to: '/cancel-ticket' },
                    { label: t('nav.pnr_enquiry'), to: '/pnr-enquiry' },
                    { label: t('nav.train_schedule'), to: '/train-schedule' },
                    { label: t('nav.track_train'), to: '/track-train' },
                    { label: t('nav.dogs_cats'), to: '/pets-booking' },
                  ]
                },
                {
                  label: t('nav.meals'), items: [
                    { label: t('nav.epantry'), to: '/book-food' },
                    { label: t('nav.ecatering'), href: 'https://www.ecatering.irctc.co.in/' },
                    { label: t('nav.cooked_food'), href: 'https://menurates.irctc.co.in/' },
                  ]
                },
                {
                  label: t('nav.loyalty'), items: [
                    { label: t('nav.about_loyalty'), to: '/loyalty' },
                    { label: t('nav.compare_cards'), to: '/compare-cards' },
                    { label: 'IRCTC SBI Card', to: '/loyalty-sbi' },
                    { label: 'IRCTC BOB Card', to: '/loyalty-bob' },
                  ]
                },
                {
                  label: t('nav.ewallet'), items: [
                    { label: t('nav.about_ewallet'), to: '/about-ewallet' },
                    { label: t('nav.ewallet_guide'), to: '/ewallet-guide' },
                  ]
                },
                {
                  label: t('nav.other_services'), items: [
                    { label: 'IRCTC-iPAY', to: '/irctc-ipay' },
                    { label: t('services.flights'), href: 'https://www.air.irctc.co.in/' },
                    { label: t('services.hotels'), href: 'https://www.hotels.irctc.co.in/hotels' },
                    { label: t('services.e_catering'), to: '/e-catering' },
                    { label: t('services.holidays'), to: '/holidays' },
                    { label: 'Bus Tickets', href: 'https://www.bus.irctc.co.in/home' },
                  ]
                },
              ].map(section => (
                <div key={section.label} style={{ borderBottom: '1px solid var(--border-glass)' }}>
                  <button
                    onClick={() => toggleSection(section.label)}
                    style={{
                      width: '100%', background: 'none', border: 'none',
                      color: 'var(--text-main)', padding: '16px 20px',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      cursor: 'pointer', fontWeight: 700, fontSize: '0.95rem',
                      textTransform: 'uppercase', letterSpacing: '0.5px'
                    }}
                  >
                    {section.label}
                    <ChevronDown size={18} style={{
                      transition: 'transform 0.3s',
                      transform: openSection === section.label ? 'rotate(180deg)' : 'rotate(0deg)'
                    }} />
                  </button>
                  {openSection === section.label && (
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.2)', padding: '4px 0' }}>
                      {section.items.map(item => (
                        item.href ? (
                          <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                            onClick={closeAll}
                            style={{ display: 'block', padding: '12px 32px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            {item.label}
                          </a>
                        ) : (
                          <Link key={item.label} to={item.to} onClick={closeAll}
                            style={{ display: 'block', padding: '12px 32px', color: 'var(--text-muted)', textDecoration: 'none', fontSize: '0.9rem' }}>
                            {item.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              ))}

              {/* Direct links */}
              <Link to="/alerts" onClick={closeAll} style={{ display: 'block', padding: '16px 20px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase', borderBottom: '1px solid var(--border-glass)' }}>{t('nav.alerts')}</Link>
              <Link to="/contact" onClick={closeAll} style={{ display: 'block', padding: '16px 20px', color: 'var(--text-main)', textDecoration: 'none', fontWeight: 700, textTransform: 'uppercase' }}>{t('nav.contact_us')}</Link>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .desktop-nav {
          display: flex;
          gap: 10px;
          align-items: center;
          font-size: 0.78rem;
        }
        .hamburger-btn { display: none !important; }
        @media (max-width: 1100px) {
          .desktop-nav { display: none !important; }
          .hamburger-btn { display: flex !important; }
          .utility-bar { display: none !important; }
        }

        @media (max-width: 480px) {
          .main-nav { padding: 10px 14px !important; }
          .navbar-logo-img { height: 32px !important; }
          .navbar-home-btn { width: 32px !important; height: 32px !important; }
          .navbar-home-btn svg { width: 14px !important; height: 14px !important; }
        }

        @media (max-width: 360px) {
          .main-nav { padding: 8px 10px !important; }
          .navbar-logo-img { height: 28px !important; }
          .irctc-logo-link { padding: 4px 6px !important; }
        }

        .nav-link-base {
          color: var(--text-main);
          text-decoration: none;
          font-weight: 600;
          opacity: 0.9;
          text-transform: uppercase;
          white-space: nowrap;
          padding: 4px 0;
        }
        .nav-link-base:hover { color: var(--orange-primary) !important; }

        /* Desktop dropdown */
        .nav-item { position: relative; padding: 8px 0; }
        .dropdown-menu {
          display: none;
          position: absolute;
          top: calc(100% + 4px);
          left: 0;
          background: var(--blue-navy-light);
          min-width: 270px;
          max-height: 70vh;
          overflow-y: auto;
          box-shadow: 0 12px 40px rgba(0,0,0,0.8);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 6px 0;
          z-index: 500;
        }
        .nav-item:hover .dropdown-menu { display: block; animation: fadeIn 0.2s ease-out; }
        .dropdown-item {
          position: relative;
          padding: 12px 18px;
          color: var(--text-main);
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s;
          font-size: 0.85rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          cursor: pointer;
        }
        .dropdown-item:last-child { border-bottom: none; }
        .dropdown-item:hover { background-color: rgba(255,109,0,0.12); color: var(--orange-primary); }

        /* Nested */
        .nested-dropdown {
          display: none;
          position: absolute;
          top: -6px;
          left: 100%;
          background: var(--blue-navy-light);
          min-width: 240px;
          box-shadow: 0 12px 40px rgba(0,0,0,0.8);
          border: 1px solid var(--border-glass);
          border-radius: 12px;
          padding: 6px 0;
          z-index: 600;
        }
        .has-nested:hover > .nested-dropdown { display: block; animation: fadeIn 0.2s ease-out; }

        @keyframes fadeIn { from { opacity: 0; transform: translateY(6px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </header>
  );
};

/* ─── Small helper components ─── */
const NavDropdown = ({ label, children }) => (
  <div className="nav-item">
    <span className="nav-link-base" style={{ cursor: 'default' }}>{label}</span>
    <div className="dropdown-menu">{children}</div>
  </div>
);

const NestedItem = ({ label, children }) => (
  <div className="dropdown-item has-nested">
    {label} <ChevronRight size={14} />
    <div className="nested-dropdown">{children}</div>
  </div>
);

export default Navbar;
