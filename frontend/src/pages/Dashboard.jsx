import "../styles/Dashboard.css";
import { useNavigate } from "react-router-dom";
import {
  Home, FileText, PieChart, Lightbulb,
  Shield, Cpu, DollarSign, TrendingUp, Rocket,
} from "lucide-react";

function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* HEADER */}
      <header className="top-header">
        <div className="logo-section">
          <div className="logo-icon">
            <TrendingUp size={20} />
          </div>
          <h2>Fin<span>Cerdas</span></h2>
        </div>
        <div className="badge-container">
          <span className="badge badge-ml"><Cpu size={14}/> Machine Learning</span>
          <span className="badge badge-secure"><Shield size={14}/> Data Aman</span>
          <span className="badge badge-free"><DollarSign size={14}/> Gratis</span>
        </div>
      </header>

      {/* MAIN */}
      <div className="main-layout">

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div>
            <p className="sidebar-title">Menu</p>
            <ul className="menu-list">
              <li className="active-menu"><Home size={16}/>Beranda</li>
              <li onClick={() => navigate("/input-data")}><FileText size={16}/>Input Data</li>
              <li onClick={() => navigate("/hasil-analisis")}><PieChart size={16}/>Hasil Analisis</li>
            <li onClick={() => navigate("/rekomendasi")}><Lightbulb size={16}/>Rekomendasi</li>
            </ul>
          </div>

          <div>
            <p className="sidebar-title" style={{marginTop: '24px'}}>Progress</p>
            <div className="progress-section">
              <div className="progress-item">
                <div className="circle">1</div>
                <span>Input Data</span>
              </div>
              <div className="line"></div>
              <div className="progress-item">
                <div className="circle">2</div>
                <span>Hasil Analisis</span>
              </div>
              <div className="line"></div>
              <div className="progress-item">
                <div className="circle">3</div>
                <span>Rekomendasi</span>
              </div>
            </div>

            <div className="disclaimer-box" style={{marginTop: '24px'}}>
              🔒 Data kamu diproses secara aman dan tidak disimpan permanen.
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="dashboard-content">
          <div className="hero-card">
            {/* Background image overlay */}
            <div className="hero-card-image">
              <img
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=60"
                alt=""
              />
            </div>

            <div className="hero-left">
              <h1>
                Cek Kondisi Keuanganmu,<br/>
                Cegah Risiko <em>Gagal Bayar</em>
              </h1>
              <p>
                Sistem prediksi berbasis machine learning yang menganalisis pola
                penggunaan kartu kredit untuk mendeteksi risiko gagal bayar sejak dini.
              </p>
              <button className="hero-button" onClick={() => navigate("/input-data")}>
                <Rocket size={18}/>
                Cek Risiko Sekarang
              </button>
            </div>

            <div className="hero-right">
              <div className="metric-card">
                <h2>25+</h2>
                <span>Variabel dianalisis</span>
              </div>
              <div className="metric-card">
                <h2>94%</h2>
                <span>Akurasi model</span>
              </div>
              <div className="metric-card">
                <h2>100%</h2>
                <span>Gratis untuk semua</span>
              </div>
            </div>
          </div>

          {/* Quick stats */}
          <div className="quick-stats-row">
            <div className="quick-stat-card">
              <div className="qs-icon qs-green">💳</div>
              <div className="qs-info">
                <strong>Siap Analisis</strong>
                <span>Isi data untuk mulai</span>
              </div>
            </div>
            <div className="quick-stat-card">
              <div className="qs-icon qs-blue">⚡</div>
              <div className="qs-info">
                <strong>&lt; 3 Detik</strong>
                <span>Waktu proses analisis</span>
              </div>
            </div>
            <div className="quick-stat-card">
              <div className="qs-icon qs-amber">🎯</div>
              <div className="qs-info">
                <strong>Rekomendasi Personal</strong>
                <span>Saran disesuaikan profilmu</span>
              </div>
            </div>
          </div>
        </main>
      </div>

    </div>
  );
}

export default Dashboard;
