import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minHeight: '100vh', flexDirection: 'column', gap: 12,
        fontFamily: 'sans-serif', color: '#6b7280'
      }}>
        <div style={{
          width: 36, height: 36,
          border: '3px solid #dcfce7',
          borderTopColor: '#16a34a',
          borderRadius: '50%',
          animation: 'spin .8s linear infinite'
        }} />
        <p>Memuat...</p>
        <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}