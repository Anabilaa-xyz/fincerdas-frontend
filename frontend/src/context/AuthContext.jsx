import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

// Akun dummy untuk simulasi (tanpa backend)
const DUMMY_USERS = [
  { id: 1, name: 'Admin', email: 'admin@fincerdas.com', password: 'admin123' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cek apakah sudah login sebelumnya
  useEffect(() => {
    const stored = localStorage.getItem('fc_user');
    if (stored) {
      try { setUser(JSON.parse(stored)); } catch {}
    }
    setLoading(false);
  }, []);

  // Register — simpan ke localStorage
  const register = ({ name, email, password }) => {
    const existing = JSON.parse(localStorage.getItem('fc_all_users') || '[]');
    const sudahAda = existing.find(u => u.email === email.toLowerCase());
    if (sudahAda) throw new Error('Email sudah terdaftar.');

    const newUser = {
      id: Date.now(),
      name: name.trim(),
      email: email.toLowerCase(),
      password, // di frontend saja, tidak di-hash
    };
    const updated = [...existing, newUser];
    localStorage.setItem('fc_all_users', JSON.stringify(updated));

    // Langsung login setelah register
    const { password: _, ...safeUser } = newUser;
    localStorage.setItem('fc_user', JSON.stringify(safeUser));
    setUser(safeUser);
  };

  // Login — cek dari localStorage + akun dummy
  const login = ({ email, password }) => {
    const allUsers = [
      ...DUMMY_USERS,
      ...JSON.parse(localStorage.getItem('fc_all_users') || '[]'),
    ];
    const found = allUsers.find(
      u => u.email === email.toLowerCase() && u.password === password
    );
    if (!found) throw new Error('Email atau password salah.');

    const { password: _, ...safeUser } = found;
    localStorage.setItem('fc_user', JSON.stringify(safeUser));
    setUser(safeUser);
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('fc_user');
    setUser(null);
  };

  const isAuthenticated = !!user;

  return (
    <AuthContext.Provider value={{ user, loading, isAuthenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth harus di dalam AuthProvider');
  return ctx;
};