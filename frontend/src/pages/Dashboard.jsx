import "../styles/Dashboard.css";

import { useNavigate } from "react-router-dom";

import {
  Home,
  FileText,
  PieChart,
  Lightbulb,
  Shield,
  Rocket,
  Cpu,
  DollarSign,
  TrendingUp,
} from "lucide-react";

function Dashboard() {

  const navigate = useNavigate();

  return (
    <div className="dashboard-page">

      {/* HEADER */}
      <header className="top-header">

        {/* LOGO */}
        <div className="logo-section">

          <div className="logo-icon">
            <TrendingUp size={28} />
          </div>

          <h2>
            Fin<span>Cerdas</span>
          </h2>

        </div>

        {/* BADGES */}
        <div className="badge-container">

          <div className="badge">

            <Cpu size={18} />

            Machine Learning

          </div>

          <div className="badge">

            <Shield size={18} />

            Data aman

          </div>

          <div className="badge">

            <DollarSign size={18} />

            Gratis

          </div>

        </div>

      </header>

      {/* MAIN LAYOUT */}
      <div className="main-layout">

        {/* SIDEBAR */}
        <aside className="sidebar">

          {/* MENU */}
          <div>

            <h3 className="sidebar-title">
              MENU
            </h3>

            <ul className="menu-list">

              <li className="active-menu">

                <Home size={18} />

                Beranda

              </li>

              <li
                onClick={() => navigate("/input-data")}
              >

                <FileText size={18} />

                Input Data

              </li>

              <li
                onClick={() => navigate("/hasil-analisis")}
              >

                <PieChart size={18} />

                Hasil Analisis

              </li>

              <li>

                <Lightbulb size={18} />

                Rekomendasi

              </li>

            </ul>

          </div>

          {/* PROGRESS */}
          <div className="progress-section">

            <h3 className="sidebar-title">
              PROGRESS
            </h3>

            <div className="progress-item">

              <div className="circle">
                1
              </div>

              <span>Input Data</span>

            </div>

            <div className="line"></div>

            <div className="progress-item">

              <div className="circle">
                2
              </div>

              <span>Hasil Analisis</span>

            </div>

            <div className="line"></div>

            <div className="progress-item">

              <div className="circle">
                3
              </div>

              <span>Rekomendasi</span>

            </div>

          </div>

          {/* DISCLAIMER */}
          <div className="disclaimer-box">

            Data kamu diproses secara aman
            dan tidak disimpan

          </div>

        </aside>

        {/* CONTENT */}
        <main className="dashboard-content">

          <div className="hero-card">

            {/* LEFT */}
            <div className="hero-left">

              <h1>
                Cek Kondisi Keuanganmu,
                <br />
                Cegah Risiko
                <br />
                Gagal Bayar
              </h1>

              <p>
                Sistem Prediksi berbasis machine learning
                yang menganalisis pola penggunaan kartu kredit
                untuk mendeteksi risiko gagal bayar sejak dini.
              </p>

              {/* BUTTON */}
              <button
                className="hero-button"
                onClick={() => navigate("/input-data")}
              >

                <Rocket size={20} />

                Cek Risiko Sekarang

              </button>

            </div>

            {/* RIGHT */}
            <div className="hero-right">

              <div className="metric-card">

                <h2>25+</h2>

                <span>Variabel dianalisis</span>

              </div>

              <div className="metric-card">

                <h2>ML</h2>

                <span>Machine Learning</span>

              </div>

              <div className="metric-card">

                <h2>100%</h2>

                <span>Gratis untuk pengguna</span>

              </div>

            </div>

          </div>

        </main>

      </div>

    </div>
  );
}

export default Dashboard;