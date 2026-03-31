import React from 'react';
import { Plane, BedDouble, Lightbulb, Utensils, Bus, Umbrella, Train, Mountain, PlaySquare, Image as ImageIcon } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const BentoGrid = () => {
  const { t } = useLanguage();

  const services = [
    { name: t('services.flights'), icon: Plane },
    { name: 'Retiring Room', icon: BedDouble },
    { name: t('services.rail_drishti'), icon: Lightbulb },
    { name: t('services.e_catering'), icon: Utensils },
    { name: t('services.bus'), icon: Bus },
    { name: t('services.holidays'), icon: Umbrella },
    { name: t('services.tourist_train'), icon: Train },
    { name: t('services.hill_railways'), icon: Mountain },
    { name: t('services.charter_train'), icon: PlaySquare },
    { name: t('services.gallery'), icon: ImageIcon },
  ];

  return (
    <section style={{ padding: '80px 20px', backgroundColor: 'var(--blue-navy)', position: 'relative', zIndex: 10 }}>
      {/* Container wrapper for opaque background look */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', background: 'var(--blue-navy)', padding: '60px 0', borderRadius: '40px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, marginBottom: '8px' }}>{t('services.heading1')}</h2>
          <h2 style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--text-muted)' }}>{t('services.heading2')}</h2>
        </div>

        {/* Circular Icon Grid matching official site but strictly styled */}
        <div className="bento-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '40px', justifyContent: 'center', padding: '0 40px' }}>
          {services.map((service, idx) => (
            <div key={idx} className="service-icon-wrapper" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', cursor: 'pointer' }}>
              
              <div className="service-circle slide-up" style={{ 
                width: '100px', 
                height: '100px', 
                borderRadius: '50%', 
                border: '1px solid rgba(255,255,255,0.2)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                backgroundColor: 'rgba(255,255,255,0.05)',
                transition: 'all 0.3s ease',
                animationDelay: `${idx * 0.05}s`
              }}>
                <service.icon size={40} className="service-svg" style={{ transition: 'all 0.3s ease' }} />
              </div>

              <span style={{ fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.5px', color: 'var(--text-main)', textAlign: 'center' }}>
                {service.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .service-svg {
          color: var(--orange-primary);
        }
        .bento-grid {
          grid-template-columns: repeat(5, 1fr) !important;
        }
        @media (max-width: 1024px) {
          .bento-grid { grid-template-columns: repeat(4, 1fr) !important; gap: 28px !important; padding: 0 20px !important; }
        }
        @media (max-width: 768px) {
          .bento-grid { grid-template-columns: repeat(3, 1fr) !important; gap: 20px !important; }
        }
        @media (max-width: 480px) {
          .bento-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 16px !important; padding: 0 8px !important; }
          .service-circle { width: 72px !important; height: 72px !important; }
        }
        .service-icon-wrapper:hover .service-circle {
          background-color: var(--orange-primary) !important;
          border-color: var(--orange-primary) !important;
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(255, 109, 0, 0.4);
        }
        .service-icon-wrapper:hover .service-svg {
          color: white !important;
          transform: scale(1.1);
        }
      `}</style>
    </section>
  );
};

export default BentoGrid;
