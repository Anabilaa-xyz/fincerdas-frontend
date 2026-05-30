import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Auth.css';

function getStrength(pw) {
  let s = 0;
  if (pw.length >= 6)           s++;
  if (pw.length >= 10)          s++;
  if (/[A-Z]/.test(pw))         s++;
  if (/[0-9]/.test(pw))         s++;
  if (/[^A-Za-z0-9]/.test(pw))  s++;
  return s;
}
const S_LABEL = ['','Sangat Lemah','Lemah','Cukup','Kuat','Sangat Kuat'];
const S_COLOR = ['','#ef4444','#f97316','#eab308','#22c55e','#16a34a'];
const S_WIDTH = ['0%','20%','40%','60%','80%','100%'];

export default function Register() {
  const navigate       = useNavigate();
  const { register }   = useAuth();

  const [form, setForm]           = useState({ name:'', email:'', password:'', confirm:'' });
  const [showPass, setShowPass]   = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');
  const [fieldErr, setFieldErr]   = useState({});

  const strength = getStrength(form.password);

  const handleChange = (e) => {
    setError('');
    setFieldErr(p => ({ ...p, [e.target.name]: '' }));
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  };

  const validate = () => {
    const e = {};
    if (!form.name.trim())   e.name = 'Nama wajib diisi.';
    if (!form.email)         e.email = 'Email wajib diisi.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
                             e.email = 'Format email tidak valid.';
    if (form.password.length < 6) e.password = 'Password minimal 6 karakter.';
    if (form.password !== form.confirm) e.confirm = 'Password tidak cocok.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setFieldErr(errs); return; }
    setLoading(true);
    try {
      register({ name: form.name, email: form.email, password: form.password });
      navigate('/dashboard', { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">

        <button className="auth-back" onClick={() => navigate('/')}>
          ← Kembali ke Beranda
        </button>

        <div className="auth-logo">
          <div className="auth-logo-icon">💚</div>
          <span className="auth-logo-text">Fin<span>Cerdas</span></span>
        </div>

        <h1 className="auth-title">Buat Akun Baru </h1>
        <p className="auth-subtitle">
          Daftar gratis dan mulai cek kondisi keuanganmu.
        </p>

        {error && <div className="auth-alert error">⚠️ {error}</div>}

        <form className="auth-form" onSubmit={handleSubmit} noValidate>

          {/* Nama */}
          <div className="auth-field">
            <label className="auth-label">Nama Lengkap</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">👤</span>
              <input name="name" type="text"
                className={`auth-input ${fieldErr.name ? 'error' : ''}`}
                placeholder="Nama kamu"
                value={form.name} onChange={handleChange} autoFocus />
            </div>
            {fieldErr.name && <span className="field-error">⚠ {fieldErr.name}</span>}
          </div>

          {/* Email */}
          <div className="auth-field">
            <label className="auth-label">Email</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">✉️</span>
              <input name="email" type="email"
                className={`auth-input ${fieldErr.email ? 'error' : ''}`}
                placeholder="nama@email.com"
                value={form.email} onChange={handleChange} />
            </div>
            {fieldErr.email && <span className="field-error">⚠ {fieldErr.email}</span>}
          </div>

          {/* Password */}
          <div className="auth-field">
            <label className="auth-label">Password</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">🔒</span>
              <input name="password"
                type={showPass ? 'text' : 'password'}
                className={`auth-input ${fieldErr.password ? 'error' : ''}`}
                placeholder="Minimal 6 karakter"
                value={form.password} onChange={handleChange} />
              <button type="button" className="auth-eye"
                onClick={() => setShowPass(p => !p)}>
                {showPass ? '🙈' : '👁️'}
              </button>
            </div>
            {fieldErr.password && <span className="field-error">⚠ {fieldErr.password}</span>}
            {form.password && (
              <>
                <div className="strength-bar">
                  <div className="strength-fill"
                    style={{ width: S_WIDTH[strength], background: S_COLOR[strength] }} />
                </div>
                <div className="strength-label" style={{ color: S_COLOR[strength] }}>
                  {S_LABEL[strength]}
                </div>
              </>
            )}
          </div>

          {/* Konfirmasi */}
          <div className="auth-field">
            <label className="auth-label">Konfirmasi Password</label>
            <div className="auth-input-wrap">
              <span className="auth-input-icon">🔐</span>
              <input name="confirm"
                type={showPass ? 'text' : 'password'}
                className={`auth-input ${fieldErr.confirm ? 'error' : ''}`}
                placeholder="Ulangi password"
                value={form.confirm} onChange={handleChange} />
            </div>
            {fieldErr.confirm && <span className="field-error">⚠ {fieldErr.confirm}</span>}
          </div>

          <button className="auth-btn" type="submit" disabled={loading}>
            {loading
              ? <><div className="btn-spinner" /> Mendaftarkan...</>
              : <> Daftar Sekarang</>
            }
          </button>
        </form>

        <p className="auth-footer">
          Sudah punya akun?{' '}
          <span onClick={() => navigate('/login')}>Masuk di sini</span>
        </p>
      </div>
    </div>
  );
}