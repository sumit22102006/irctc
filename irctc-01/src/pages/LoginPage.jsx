import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, ShieldCheck } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ username: '', password: '', captcha: '', remember: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Login successful! (Demo)');
    navigate('/');
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />

      <main style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ display: 'flex', gap: '40px', width: '100%', maxWidth: '1000px', alignItems: 'stretch', flexWrap: 'wrap' }}>

          {/* Left: Login Form */}
          <div className="glass fade-in" style={{ flex: '1 1 380px', borderRadius: '24px', padding: '48px 40px', minWidth: '320px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
              <img src="https://www.irctc.co.in/nget/assets/images/logo.png" alt="IRCTC" style={{ height: '50px', objectFit: 'contain', background: 'rgba(255,255,255,0.9)', borderRadius: '10px', padding: '6px 12px' }} />
            </div>

            <h1 style={{ textAlign: 'center', fontSize: '1.7rem', fontWeight: 800, marginBottom: '8px', color: 'var(--text-main)' }}>
              Welcome Back
            </h1>
            <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '32px', fontSize: '0.9rem' }}>
              Sign in to your IRCTC account
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>

              {/* Username */}
              <div style={{ position: 'relative' }}>
                <User size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                <input
                  type="text"
                  className="custom-input"
                  placeholder="User ID / Email Address"
                  required
                  value={form.username}
                  onChange={e => setForm({ ...form, username: e.target.value })}
                  style={{ paddingLeft: '44px', fontSize: '0.95rem' }}
                />
              </div>

              {/* Password */}
              <div style={{ position: 'relative' }}>
                <Lock size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                <input
                  type={showPassword ? 'text' : 'password'}
                  className="custom-input"
                  placeholder="Password"
                  required
                  value={form.password}
                  onChange={e => setForm({ ...form, password: e.target.value })}
                  style={{ paddingLeft: '44px', paddingRight: '48px', fontSize: '0.95rem' }}
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', right: '14px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              {/* Captcha */}
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <div style={{ background: 'linear-gradient(135deg, #1E293B, #334155)', borderRadius: '10px', padding: '10px 16px', fontFamily: 'monospace', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '6px', color: '#FF6D00', userSelect: 'none', flexShrink: 0, border: '1px solid var(--border-glass)' }}>
                  7K4MX
                </div>
                <div style={{ position: 'relative', flex: 1 }}>
                  <ShieldCheck size={18} style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                  <input
                    type="text"
                    className="custom-input"
                    placeholder="Enter Captcha"
                    value={form.captcha}
                    onChange={e => setForm({ ...form, captcha: e.target.value })}
                    style={{ paddingLeft: '44px', fontSize: '0.95rem' }}
                  />
                </div>
              </div>

              {/* Forgot + Remember */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <label style={{ display: 'flex', gap: '8px', alignItems: 'center', cursor: 'pointer', fontSize: '0.88rem', color: 'var(--text-muted)' }}>
                  <input type="checkbox" checked={form.remember} onChange={e => setForm({ ...form, remember: e.target.checked })} style={{ accentColor: 'var(--orange-primary)', width: '16px', height: '16px' }} />
                  Remember me
                </label>
                <a href="#" style={{ color: '#60A5FA', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none' }}>Forgot Password?</a>
              </div>

              {/* Visually impaired */}
              <label style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', cursor: 'pointer' }}>
                <input type="checkbox" style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: 'var(--orange-primary)', flexShrink: 0 }} />
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5 }}>
                  I am a Divyaang person / Visually impaired user
                </span>
              </label>

              {/* Sign In Button */}
              <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1.05rem', letterSpacing: '1px', textTransform: 'uppercase', fontWeight: 800 }}>
                Sign In
              </button>
            </form>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginTop: '20px' }}>
              <Link to="/register" style={{ textDecoration: 'none' }}>
                <button style={{ width: '100%', background: 'rgba(255,109,0,0.1)', border: '1px solid rgba(255,109,0,0.3)', color: 'var(--orange-primary)', borderRadius: '12px', padding: '12px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}>
                  Register Now
                </button>
              </Link>
              <button style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', borderRadius: '12px', padding: '12px', fontWeight: 700, cursor: 'pointer', fontSize: '0.9rem', transition: 'all 0.2s' }}>
                Agent Login
              </button>
            </div>
          </div>

          {/* Right: Info Panel */}
          <div style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', gap: '20px', justifyContent: 'center' }}>
            {[
              { icon: '🚆', title: 'Book Train Tickets', desc: 'Reserve seats across 13,000+ trains with instant confirmation' },
              { icon: '📱', title: 'IRCTC Rail Connect', desc: 'Download the official app for seamless ticket management' },
              { icon: '💳', title: '10% Cashback', desc: 'Pay via IRCTC SBI Credit Card and earn exclusive rewards' },
              { icon: '🍱', title: 'E-Catering', desc: 'Order fresh meals from 400+ restaurants to your seat' },
            ].map(item => (
              <div key={item.title} className="glass" style={{ borderRadius: '16px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <span style={{ fontSize: '1.8rem', flexShrink: 0 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '0.95rem', marginBottom: '4px' }}>{item.title}</div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.82rem', lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LoginPage;
