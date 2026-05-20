import "../styles/LandingPage.css";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-container">

      {/* NAVBAR */}
      <nav className="navbar">

        <h2 className="logo">
          Fin<span>Cerdas</span>
        </h2>

        <ul className="nav-links">
          <li>Beranda</li>
          <li>Fitur</li>
          <li>Tentang</li>
        </ul>

        <button
          className="nav-button"
          onClick={() => navigate("/dashboard")}
        >
          Mulai Analisis
        </button>

      </nav>

      {/* HERO */}
      <section className="hero-section">

        <div className="hero-content">

          <h1>
            Cek Kondisi
            <br />
            Keuanganmu
          </h1>

          <p>
            Prediksi risiko gagal bayar dan dapatkan
            rekomendasi keuangan berbasis machine learning.
          </p>

          <button
            className="hero-button"
            onClick={() => navigate("/dashboard")}
          >
            Mulai Sekarang
          </button>

        </div>

      </section>

      {/* FEATURES */}
      <section className="features-section">

        <div className="feature-card">
          <h3>Input Data</h3>

          <p>
            Masukkan data keuangan dan penggunaan kartu kredit.
          </p>
        </div>

        <div className="feature-card">
          <h3>Analisis Risiko</h3>

          <p>
            Sistem AI menganalisis kemungkinan gagal bayar.
          </p>
        </div>

        <div className="feature-card">
          <h3>Rekomendasi</h3>

          <p>
            Dapatkan saran pengelolaan keuangan yang sesuai.
          </p>
        </div>

      </section>

    </div>
  );
}

export default LandingPage;