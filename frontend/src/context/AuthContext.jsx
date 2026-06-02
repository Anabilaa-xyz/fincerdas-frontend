import { createContext, useContext, useState, useEffect } from 'react';
import api from '../utils/api';

const AuthContext = createContext(null);

// upgradde
const MODE_OFFLINE = true;

const DUMMY_USERS = [
  {
    id: 1,
    fullname: 'Admin Demo',
    email: 'admin@fincerdas.com',
    password: 'admin123',
    sex: 1, education: 2, marriage: 2, age: 25,
  },
];

export function AuthProvider({ children }) {
  const [user, setUser]       = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser  = localStorage.getItem('fc_user');
    const storedToken = localStorage.getItem('token');
    if (storedUser && storedToken) {
      try { setUser(JSON.parse(storedUser)); } catch {}
    }
    setLoading(false);
  }, []);

  // ── Register ─
  const register = async (formData) => {
    if (MODE_OFFLINE) {
      // Simpan ke localStorage
      const allUsers = JSON.parse(localStorage.getItem('fc_all_users') || '[]');
      const sudahAda = allUsers.find(u => u.email === formData.email.toLowerCase());
      if (sudahAda) throw new Error('Email sudah terdaftar.');

      const newUser = { id: Date.now(), ...formData, email: formData.email.toLowerCase() };
      localStorage.setItem('fc_all_users', JSON.stringify([...allUsers, newUser]));

      const { password: _, ...safeUser } = newUser;
      localStorage.setItem('token',   'offline-token');
      localStorage.setItem('fc_user', JSON.stringify(safeUser));
      setUser(safeUser);
      return;
    }

    // backend mode on
    const res = await api.post('/auth/register', {
      ...formData,
      sex:       Number(formData.sex),
      education: Number(formData.education),
      marriage:  Number(formData.marriage),
      age:       Number(formData.age),
    });
    if (res.data.status !== 'success') throw new Error(res.data.message);

    const loginRes = await api.post('/auth/login', {
      email: formData.email, password: formData.password,
    });
    const { token, data: userData } = loginRes.data;
    localStorage.setItem('token',   token);
    localStorage.setItem('fc_user', JSON.stringify(userData));
    setUser(userData);
  };

  // ── Login ───
  const login = async ({ email, password }) => {
    if (MODE_OFFLINE) {
      // Cek dummy + localStorage
      const allUsers = [
        ...DUMMY_USERS,
        ...JSON.parse(localStorage.getItem('fc_all_users') || '[]'),
      ];
      const found = allUsers.find(
        u => u.email === email.toLowerCase() && u.password === password
      );
      if (!found) throw new Error('Email atau password salah.');

      const { password: _, ...safeUser } = found;
      localStorage.setItem('token',   'offline-token');
      localStorage.setItem('fc_user', JSON.stringify(safeUser));
      setUser(safeUser);
      return;
    }

    // Mode online backend
    const res = await api.post('/auth/login', { email, password });
    if (res.data.status !== 'success') throw new Error(res.data.message);

    const { token, data: userData } = res.data;
    localStorage.setItem('token',   token);
    localStorage.setItem('fc_user', JSON.stringify(userData));
    setUser(userData);
  };

  // ── Logout ────────────────────────────────────────
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('fc_user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated: !!user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth harus di dalam AuthProvider');
  return ctx;
};