import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const galleryItems = [
  { id: 1, emoji: '🚄', label: 'Vande Bharat Express', category: 'Trains', desc: 'India\'s pride — semi-high speed train with world-class interiors' },
  { id: 2, emoji: '🚂', label: 'Steam Engine Heritage', category: 'Heritage', desc: 'Iconic steam locomotives that shaped India\'s railway history' },
  { id: 3, emoji: '🛤️', label: 'Mountain Railway Tracks', category: 'Scenic', desc: 'UNESCO World Heritage mountain railways of India' },
  { id: 4, emoji: '🏛️', label: 'Chhatrapati Shivaji Terminus', category: 'Stations', desc: 'Victorian Gothic masterpiece — UNESCO World Heritage Site, Mumbai' },
  { id: 5, emoji: '🌉', label: 'Pamban Bridge', category: 'Scenic', desc: 'India\'s first sea bridge carrying trains over Palk Strait' },
  { id: 6, emoji: '🚃', label: 'Rajdhani Express', category: 'Trains', desc: 'India\'s premier long-distance express connecting major cities' },
  { id: 7, emoji: '🏔️', label: 'Darjeeling Toy Train', category: 'Heritage', desc: 'Narrow gauge locomotive through misty Himalayan slopes' },
  { id: 8, emoji: '🌿', label: 'Konkan Railway', category: 'Scenic', desc: 'Engineering marvel through Western Ghats tunnels and bridges' },
  { id: 9, emoji: '🕌', label: 'New Delhi Railway Station', category: 'Stations', desc: 'One of India\'s busiest stations, handling 450+ trains daily' },
  { id: 10, emoji: '🚆', label: 'Gatimaan Express', category: 'Trains', desc: 'India\'s fastest train running at 160 km/h between Delhi and Agra' },
  { id: 11, emoji: '🌊', label: 'Rameswaram Station', category: 'Stations', desc: 'Southernmost railway station with views of the Indian Ocean' },
  { id: 12, emoji: '🎭', label: 'Howrah Station', category: 'Stations', desc: 'Kolkata\'s iconic 500-year-old railway junction, busiest in India' },
];

const galleryCats = ['All', 'Trains', 'Stations', 'Scenic', 'Heritage'];

const Gallery = () => {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered = galleryItems.filter(g => filter === 'All' || g.category === filter);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '40px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '36px' }}>
            <h1 style={{ fontSize: '2.2rem', fontWeight: 900, color: 'var(--text-main)', marginBottom: '8px' }}>📸 IRCTC <span style={{ color: 'var(--orange-primary)' }}>Gallery</span></h1>
            <p style={{ color: 'var(--text-muted)' }}>A visual journey through India's magnificent railways — trains, stations and scenic routes</p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '32px' }}>
            {galleryCats.map(c => (
              <button key={c} onClick={() => setFilter(c)} style={{ padding: '8px 22px', borderRadius: '100px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', background: filter === c ? 'var(--orange-primary)' : 'rgba(255,255,255,0.07)', color: filter === c ? '#fff' : 'var(--text-muted)', transition: 'all 0.2s' }}>{c}</button>
            ))}
          </div>

          <div style={{ columns: '3 300px', gap: '16px' }}>
            {filtered.map((item, i) => (
              <div key={item.id} onClick={() => setLightbox(item)} style={{ breakInside: 'avoid', marginBottom: '16px', borderRadius: '18px', overflow: 'hidden', cursor: 'zoom-in', transition: 'transform 0.25s' }}
                onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.02)'}
                onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div className="glass" style={{ padding: 0, borderRadius: '18px', overflow: 'hidden', border: '1px solid var(--border-glass)' }}>
                  <div style={{ height: i % 3 === 1 ? '220px' : '160px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '5rem', background: 'linear-gradient(135deg, rgba(255,109,0,0.05), rgba(96,165,250,0.05))', position: 'relative' }}>
                    {item.emoji}
                    <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.5)', color: 'rgba(255,255,255,0.8)', fontSize: '0.68rem', fontWeight: 700, padding: '3px 8px', borderRadius: '100px' }}>{item.category}</div>
                  </div>
                  <div style={{ padding: '14px 16px' }}>
                    <div style={{ color: 'var(--text-main)', fontWeight: 700, fontSize: '0.9rem', marginBottom: '4px' }}>{item.label}</div>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.78rem', lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Lightbox */}
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, cursor: 'zoom-out' }}>
          <div className="glass" style={{ borderRadius: '24px', padding: '48px', textAlign: 'center', maxWidth: '500px', margin: '20px' }}>
            <div style={{ fontSize: '8rem', marginBottom: '20px' }}>{lightbox.emoji}</div>
            <div style={{ background: 'rgba(255,109,0,0.15)', color: 'var(--orange-primary)', fontSize: '0.78rem', fontWeight: 700, padding: '4px 14px', borderRadius: '100px', display: 'inline-block', marginBottom: '14px' }}>{lightbox.category}</div>
            <h2 style={{ color: 'var(--text-main)', fontWeight: 800, fontSize: '1.4rem', marginBottom: '12px' }}>{lightbox.label}</h2>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.7 }}>{lightbox.desc}</p>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.78rem', marginTop: '20px' }}>Click anywhere to close</div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Gallery;
