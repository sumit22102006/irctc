import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const Holidays = () => {
  const { t } = useLanguage();

  const packages = [
    {
      title: "Maharajas' Express",
      image: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&w=700&q=80',
      description: 'Redefining Royalty, Luxury and Comfort, Maharajas\' express takes you on a sojourn to the era of bygone stately splendour of princely states. Sylvan furnishings, elegant ambience and modern amenities are amalgamated for an "Experience Unsurpassed". It has been a winner of "World\'s Leading Luxury train" by World Travel Awards consecutively for last six years.',
      link: 'https://www.irctctourism.com/maharaja-express'
    },
    {
      title: 'International Packages',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&w=700&q=80',
      description: 'Best deals in International Holiday packages, handpicked by IRCTC, for Thailand, Dubai, Sri Lanka, Hong Kong, China, Macau, Bhutan, Nepal, U.K., Europe, USA, Australia etc. The packages are inclusive of sightseeing, meals, visa charges and overseas medical insurance to give you a hassle-free and memorable experience.',
      link: 'https://www.irctctourism.com/international'
    },
    {
      title: 'Domestic Air Packages',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&w=700&q=80',
      description: 'Be it the spiritual devotee seeking blessings of Tirupati, Shirdi or Mata Vaishno Devi or the leisure traveller wanting to relish the Blue mountains of North East, Sand-dunes of Rajasthan, Hamlets of Ladakh, Wonders of Himalayas, Serene lakes or Picturesque Islands, IRCTC has it all. Discover India through IRCTC!',
      link: 'https://www.irctctourism.com/domestic'
    },
    {
      title: 'Bharat Gaurav Tourist Train',
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&w=700&q=80',
      description: 'IRCTC operates Bharat Gaurav Tourist Train having AC III-Tier accommodation on train specially designed to promote domestic tourism in India. This train runs on various theme based circuits covering pilgrimage and heritage destinations in its itinerary on a 5 days to 20 days trip and showcase India\'s rich cultural heritage.',
      link: 'https://www.irctctourism.com/bharat-gaurav'
    },
    {
      title: 'Rail Tour Packages',
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&w=700&q=80',
      description: 'IRCTC offers Exclusive Rail tour packages with confirmed train tickets, sight-seeing and meals for enchanting Nilgiri Mountains, Darjeeling, Kullu Manali, Kashmir, Gangtok or divine tours of Mata Vaishno Devi, Rameswaram, Madurai, Shirdi, Tirupati etc. Holiday packages / Land packages to these destinations are also available.',
      link: 'https://www.irctctourism.com/rail-tours'
    },
  ];

  return (
    <section style={{ backgroundColor: 'var(--blue-navy)', padding: '60px 20px', position: 'relative', zIndex: 10 }} className="holidays-section">
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{ fontSize: '2.2rem', fontWeight: 800, textAlign: 'center', marginBottom: '48px', textTransform: 'uppercase', letterSpacing: '2px' }}>{t('services.holidays')}</h2>
        
        <div className="holidays-grid">
          {packages.map((pkg, idx) => (
            <div key={idx} className="holiday-card" style={{ 
              backgroundColor: 'var(--blue-navy-light)', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              border: '1px solid var(--border-glass)',
              transition: 'all 0.4s ease',
              cursor: 'pointer'
            }}>
              
              <div style={{ width: '100%', height: '240px', overflow: 'hidden' }}>
                <img src={pkg.image} alt={pkg.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="holiday-img" />
              </div>

              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '16px', color: 'var(--text-main)' }}>{pkg.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '24px' }}>
                  {pkg.description}
                </p>
                <a 
                  href={pkg.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ 
                    color: 'var(--orange-primary)', 
                    fontWeight: 700, 
                    fontSize: '1rem', 
                    display: 'flex', 
                    alignItems: 'center', 
                    gap: '8px', 
                    cursor: 'pointer',
                    textDecoration: 'none'
                  }}
                >
                  Read More <ArrowRight size={18} />
                </a>
              </div>

            </div>
          ))}
        </div>
      </div>

      <style>{`
        .holidays-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 32px;
        }
        @media (max-width: 1024px) {
          .holidays-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 640px) {
          .holidays-grid { grid-template-columns: 1fr; gap: 20px; }
        }
        .holiday-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 32px rgba(0,0,0,0.4);
          border-color: rgba(255, 109, 0, 0.3) !important;
        }
        .holiday-card:hover .holiday-img {
          transform: scale(1.05);
        }
      `}</style>
    </section>
  );
};

export default Holidays;
