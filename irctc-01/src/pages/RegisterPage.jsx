import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, User, Lock, Mail, Phone, Calendar, MapPin } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const InputField = ({ icon: Icon, type = 'text', placeholder, value, onChange, required, children, style = {} }) => (
  <div style={{ position: 'relative' }}>
    {Icon && <Icon size={16} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none', zIndex: 1 }} />}
    <input
      type={type}
      className="custom-input"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      required={required}
      style={{ paddingLeft: Icon ? '40px' : '16px', fontSize: '0.9rem', ...style }}
    />
    {children}
  </div>
);

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    firstName: '', lastName: '', dob: '', gender: '', maritalStatus: '',
    email: '', mobile: '', nationality: 'Indian', occupation: '', aadhaar: '',
    username: '', password: '', confirmPassword: '', securityQuestion: '', securityAnswer: '',
    terms: false
  });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const handleNext = (e) => {
    e.preventDefault();
    setStep(2);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    alert('Registration successful! Please login to continue. (Demo)');
    navigate('/login');
  };

  const inputStyle = { fontSize: '0.9rem' };
  const labelStyle = { fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 600, marginBottom: '4px', display: 'block' };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--blue-navy)' }}>
      <Navbar />

      <main style={{ flex: 1, padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <div style={{ width: '100%', maxWidth: '800px' }}>

          {/* Header */}
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <img src="https://www.irctc.co.in/nget/assets/images/logo.png" alt="IRCTC" style={{ height: '48px', objectFit: 'contain', background: 'rgba(255,255,255,0.9)', borderRadius: '10px', padding: '6px 12px', marginBottom: '20px' }} />
            <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-main)', marginBottom: '8px' }}>
              Create Your <span style={{ color: 'var(--orange-primary)' }}>IRCTC Account</span>
            </h1>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Register to book train tickets, check PNR status and more</p>
          </div>

          {/* Step indicator */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0', marginBottom: '32px', justifyContent: 'center' }}>
            {['Personal Details', 'Account Setup'].map((label, i) => (
              <React.Fragment key={i}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '0.95rem', backgroundColor: step > i ? 'var(--orange-primary)' : step === i + 1 ? 'var(--orange-primary)' : 'rgba(255,255,255,0.1)', color: '#fff', border: step === i + 1 ? '3px solid rgba(255,109,0,0.4)' : 'none', transition: 'all 0.3s' }}>
                    {step > i + 1 ? '✓' : i + 1}
                  </div>
                  <span style={{ fontSize: '0.78rem', color: step === i + 1 ? 'var(--orange-primary)' : 'var(--text-muted)', fontWeight: step === i + 1 ? 700 : 400 }}>{label}</span>
                </div>
                {i < 1 && <div style={{ width: '100px', height: '2px', backgroundColor: step > 1 ? 'var(--orange-primary)' : 'rgba(255,255,255,0.1)', margin: '0 12px', marginBottom: '24px', transition: 'all 0.3s' }} />}
              </React.Fragment>
            ))}
          </div>

          <div className="glass fade-in" style={{ borderRadius: '24px', padding: '40px' }}>

            {/* === STEP 1: Personal Details === */}
            {step === 1 && (
              <form onSubmit={handleNext}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '28px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px' }}>
                  👤 Personal Details
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

                  <div>
                    <label style={labelStyle}>First Name *</label>
                    <InputField icon={User} placeholder="First Name" value={form.firstName} onChange={set('firstName')} required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Last Name *</label>
                    <InputField icon={User} placeholder="Last Name" value={form.lastName} onChange={set('lastName')} required style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Date of Birth *</label>
                    <InputField icon={Calendar} type="date" placeholder="Date of Birth" value={form.dob} onChange={set('dob')} required style={{ ...inputStyle, colorScheme: 'dark' }} />
                  </div>
                  <div>
                    <label style={labelStyle}>Gender *</label>
                    <select className="custom-input" value={form.gender} onChange={set('gender')} required style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Transgender</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Marital Status</label>
                    <select className="custom-input" value={form.maritalStatus} onChange={set('maritalStatus')} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select Status</option>
                      <option>Single</option>
                      <option>Married</option>
                      <option>Divorced</option>
                      <option>Widowed</option>
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Nationality *</label>
                    <select className="custom-input" value={form.nationality} onChange={set('nationality')} required style={{ ...inputStyle, appearance: 'none' }}>
                      <option>Indian</option>
                      <option>Foreign National</option>
                    </select>
                  </div>

                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <InputField icon={Mail} type="email" placeholder="Email Address" value={form.email} onChange={set('email')} required style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Mobile Number *</label>
                    <InputField icon={Phone} type="tel" placeholder="10-digit Mobile Number" value={form.mobile} onChange={set('mobile')} required style={inputStyle} />
                  </div>

                  <div>
                    <label style={labelStyle}>Aadhaar Number</label>
                    <InputField placeholder="12-digit Aadhaar (Optional)" value={form.aadhaar} onChange={set('aadhaar')} style={inputStyle} />
                  </div>
                  <div>
                    <label style={labelStyle}>Occupation</label>
                    <select className="custom-input" value={form.occupation} onChange={set('occupation')} style={{ ...inputStyle, appearance: 'none' }}>
                      <option value="">Select Occupation</option>
                      <option>Government Employee</option>
                      <option>Private Employee</option>
                      <option>Business</option>
                      <option>Student</option>
                      <option>Retired</option>
                      <option>Other</option>
                    </select>
                  </div>

                  <div style={{ gridColumn: '1 / -1' }}>
                    <label style={labelStyle}>Residential Address</label>
                    <InputField icon={MapPin} placeholder="City / Town" value={''} onChange={() => {}} style={inputStyle} />
                  </div>
                </div>

                <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '1rem', fontWeight: 800, marginTop: '28px', letterSpacing: '0.5px' }}>
                  Continue →
                </button>
              </form>
            )}

            {/* === STEP 2: Account Setup === */}
            {step === 2 && (
              <form onSubmit={handleSubmit}>
                <h2 style={{ fontSize: '1.3rem', fontWeight: 700, color: 'var(--text-main)', marginBottom: '28px', borderBottom: '1px solid var(--border-glass)', paddingBottom: '14px' }}>
                  🔐 Account Setup
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  <div>
                    <label style={labelStyle}>User ID (Username) *</label>
                    <InputField icon={User} placeholder="Choose a unique User ID (min. 8 chars)" value={form.username} onChange={set('username')} required style={inputStyle} />
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Alphanumeric, 8–35 characters. Cannot be changed later.</span>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={labelStyle}>Password *</label>
                      <div style={{ position: 'relative' }}>
                        <Lock size={16} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                        <input type={showPass ? 'text' : 'password'} className="custom-input" placeholder="Password" value={form.password} onChange={set('password')} required style={{ paddingLeft: '40px', paddingRight: '44px', fontSize: '0.9rem' }} />
                        <button type="button" onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                          {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '4px', display: 'block' }}>Min 8 chars, 1 uppercase, 1 number, 1 special character</span>
                    </div>
                    <div>
                      <label style={labelStyle}>Confirm Password *</label>
                      <div style={{ position: 'relative' }}>
                        <Lock size={16} style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                        <input type={showConfirmPass ? 'text' : 'password'} className="custom-input" placeholder="Confirm Password" value={form.confirmPassword} onChange={set('confirmPassword')} required style={{ paddingLeft: '40px', paddingRight: '44px', fontSize: '0.9rem' }} />
                        <button type="button" onClick={() => setShowConfirmPass(!showConfirmPass)} style={{ position: 'absolute', right: '13px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}>
                          {showConfirmPass ? <EyeOff size={16} /> : <Eye size={16} />}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                    <div>
                      <label style={labelStyle}>Security Question *</label>
                      <select className="custom-input" value={form.securityQuestion} onChange={set('securityQuestion')} required style={{ ...inputStyle, appearance: 'none' }}>
                        <option value="">Select a security question</option>
                        <option>What is your mother's maiden name?</option>
                        <option>What was the name of your first school?</option>
                        <option>What is the name of your first pet?</option>
                        <option>What city were you born in?</option>
                        <option>What is your favourite sports team?</option>
                      </select>
                    </div>
                    <div>
                      <label style={labelStyle}>Security Answer *</label>
                      <input type="text" className="custom-input" placeholder="Your answer" value={form.securityAnswer} onChange={set('securityAnswer')} required style={inputStyle} />
                    </div>
                  </div>

                  {/* Terms */}
                  <label style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', cursor: 'pointer', marginTop: '4px' }}>
                    <input type="checkbox" checked={form.terms} onChange={e => setForm({ ...form, terms: e.target.checked })} required style={{ width: '17px', height: '17px', marginTop: '3px', accentColor: 'var(--orange-primary)', flexShrink: 0 }} />
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                      I have read and agree to the <a href="#" style={{ color: 'var(--orange-primary)', fontWeight: 600 }}>Terms & Conditions</a> and <a href="#" style={{ color: 'var(--orange-primary)', fontWeight: 600 }}>Privacy Policy</a> of IRCTC.
                    </span>
                  </label>

                  <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
                    <button type="button" onClick={() => setStep(1)} style={{ flex: 1, background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-glass)', color: 'var(--text-muted)', borderRadius: '12px', padding: '14px', fontWeight: 700, cursor: 'pointer', fontSize: '0.95rem' }}>
                      ← Back
                    </button>
                    <button type="submit" className="btn-primary" style={{ flex: 2, padding: '14px', fontSize: '1rem', fontWeight: 800, letterSpacing: '0.5px' }}>
                      Create Account
                    </button>
                  </div>
                </div>
              </form>
            )}

            <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-muted)', fontSize: '0.88rem' }}>
              Already have an account?{' '}
              <Link to="/login" style={{ color: 'var(--orange-primary)', fontWeight: 700, textDecoration: 'none' }}>Sign In →</Link>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default RegisterPage;
