import React, { useState } from 'react';
import { Train } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const mockSchedule = [
  { station: 'New Delhi (NDLS)', arrival: 'Source', departure: '16:55', day: 1, distance: '0 km', halt: '-' },
  { station: 'Mathura Jn (MTJ)', arrival: '18:42', departure: '18:44', day: 1, distance: '141 km', halt: '2 min' },
  { station: 'Agra Cantt (AGC)', arrival: '18:58', departure: '19:00', day: 1, distance: '188 km', halt: '2 min' },
  { station: 'Gwalior (GWL)', arrival: '20:11', departure: '20:13', day: 1, distance: '305 km', halt: '2 min' },
  { station: 'Jhansi (JHS)', arrival: '21:05', departure: '21:10', day: 1, distance: '403 km', halt: '5 min' },
  { station: 'Bhopal (BPL)', arrival: '00:05', departure: '00:10', day: 2, distance: '702 km', halt: '5 min' },
  { station: 'Itarsi (ET)', arrival: '01:20', departure: '01:22', day: 2, distance: '796 km', halt: '2 min' },
  { station: 'Nagpur (NGP)', arrival: '05:00', departure: '05:10', day: 2, distance: '1085 km', halt: '10 min' },
  { station: 'Bhubaneswar (BBS)', arrival: '14:55', departure: '15:00', day: 2, distance: '1698 km', halt: '5 min' },
  { station: 'Howrah Jn (HWH)', arrival: '19:55', departure: 'Destination', day: 2, distance: '1947 km', halt: '-' },
];

const TrainSchedule = () => {
  const [trainNo, setTrainNo] = useState('');
  const [schedule, setSchedule] = useState(null);

  const handleSubmit = () => {
    if (!trainNo.trim()) {
      alert('Please enter a train number.');
      return;
    }
    setSchedule({ number: trainNo, name: 'Howrah Rajdhani Express', runs: 'Mon, Tue, Wed, Thu, Fri, Sat, Sun' });
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />
      <main style={{ flex: 1, padding: '60px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

        <div className="glass" style={{ width: '100%', maxWidth: '900px', borderRadius: '24px', padding: '48px 40px' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, textAlign: 'center', marginBottom: '8px', color: 'var(--text-main)' }}>
            Train Schedule
          </h1>
          <p style={{ color: 'var(--text-muted)', textAlign: 'center', marginBottom: '36px' }}>
            Enter a train number to view its complete route schedule
          </p>

          <div style={{ display: 'flex', gap: '12px', marginBottom: '36px' }}>
            <input
              type="text"
              className="custom-input"
              placeholder="Enter Train Number (e.g. 12301)"
              value={trainNo}
              onChange={e => setTrainNo(e.target.value)}
              style={{ flex: 1, fontSize: '1rem' }}
            />
            <button className="btn-primary" onClick={handleSubmit} style={{ padding: '12px 28px', display: 'flex', alignItems: 'center', gap: '8px', whiteSpace: 'nowrap' }}>
              <Train size={18} /> Submit
            </button>
          </div>

          {schedule && (
            <div>
              <div style={{ marginBottom: '24px', backgroundColor: 'rgba(255,109,0,0.08)', borderRadius: '14px', padding: '16px 20px', border: '1px solid rgba(255,109,0,0.2)' }}>
                <div style={{ color: 'var(--orange-primary)', fontWeight: 800, fontSize: '1.2rem' }}>{schedule.number} — {schedule.name}</div>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginTop: '4px' }}>Runs on: {schedule.runs}</div>
              </div>

              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
                  <thead>
                    <tr style={{ backgroundColor: 'rgba(255,109,0,0.12)' }}>
                      {['#', 'Station', 'Arrival', 'Departure', 'Day', 'Distance', 'Halt'].map(h => (
                        <th key={h} style={{ padding: '12px 14px', textAlign: 'left', color: 'var(--text-main)', fontWeight: 700, borderBottom: '1px solid var(--border-glass)', whiteSpace: 'nowrap' }}>{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {mockSchedule.map((row, i) => (
                      <tr key={i} style={{ borderBottom: '1px solid var(--border-glass)', transition: 'background 0.2s' }}
                        onMouseEnter={e => e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)'}
                        onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                      >
                        <td style={{ padding: '12px 14px', color: 'var(--text-muted)', fontWeight: 600 }}>{i + 1}</td>
                        <td style={{ padding: '12px 14px', color: 'var(--text-main)', fontWeight: 700 }}>{row.station}</td>
                        <td style={{ padding: '12px 14px', color: row.arrival === 'Source' ? 'var(--text-muted)' : 'var(--text-main)' }}>{row.arrival}</td>
                        <td style={{ padding: '12px 14px', color: row.departure === 'Destination' ? 'var(--text-muted)' : 'var(--orange-primary)', fontWeight: 600 }}>{row.departure}</td>
                        <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>Day {row.day}</td>
                        <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>{row.distance}</td>
                        <td style={{ padding: '12px 14px', color: 'var(--text-muted)' }}>{row.halt}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TrainSchedule;
