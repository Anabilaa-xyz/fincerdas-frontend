import "../styles/Dashboard.css";
import "../styles/Rekomendasi.css";
import { useNavigate } from "react-router-dom";
import { Home, FileText, PieChart, Lightbulb, Shield, Cpu, DollarSign, TrendingUp } from "lucide-react";

function Rekomendasi() {
  const navigate = useNavigate();

  return (
    <div className="input-page">
      <header className="top-header">
        <div className="logo-section">
          <div className="logo-icon"><TrendingUp size={20}/></div>
          <h2>Fin<span>Cerdas</span></h2>
        </div>
        <div className="badge-container">
          <span className="badge badge-ml"><Cpu size={14}/> Machine Learning</span>
          <span className="badge badge-secure"><Shield size={14}/> Data Aman</span>
          <span className="badge badge-free"><DollarSign size={14}/> Gratis</span>
        </div>
      </header>

      <div className="main-layout">
        <aside className="sidebar">
          <div>
            <p className="sidebar-title">Menu</p>
            <ul className="menu-list">
              <li onClick={() => navigate("/dashboard")}><Home size={16}/>Beranda</li>
              <li onClick={() => navigate("/input-data")}><FileText size={16}/>Input Data</li>
              <li onClick={() => navigate("/hasil-analisis")}><PieChart size={16}/>Hasil Analisis</li>
              <li className="active-menu"><Lightbulb size={16}/>Rekomendasi</li>
            </ul>
          </div>
          <div>
            <p className="sidebar-title" style={{marginTop:'24px'}}>Progress</p>
            <div className="progress-section">
              <div className="progress-item">
                <div className="circle active-circle">1</div>
                <span>Input Data</span>
              </div>
              <div className="line"></div>
              <div className="progress-item">
                <div className="circle active-circle">2</div>
                <span>Hasil Analisis</span>
              </div>
              <div className="line"></div>
              <div className="progress-item">
                <div className="circle active-circle">3</div>
                <span>Rekomendasi</span>
              </div>
            </div>
            <div className="disclaimer-box" style={{marginTop:'24px'}}>
              🔒 Data kamu diproses secara aman dan tidak disimpan
            </div>
          </div>
        </aside>

        <main className="content">
          <div className="page-header">
            <h1>Rekomendasi</h1>
            <p>Berikut rekomendasi keuanganmu berdasarkan data yang dimasukkan</p>
          </div>

          {/* 3 CARDS */}
          <div className="rec3-grid">

            <div className="rec3-card rec3-red">
              <div className="rec3-card-top">
                <span className="rec3-icon">🕐</span>
                <span className="rec3-badge rec3-badge-red">Prioritas Utama</span>
              </div>
              <h3>Bayar Tagihan tepat waktu</h3>
              <p>Riwayat keterlambatan adalah faktor risiko terbesar kamu. Aktifkan auto-debit minimum agar tidak terlewat setiap bulan.</p>
            </div>

            <div className="rec3-card rec3-yellow">
              <div className="rec3-card-top">
                <span className="rec3-icon">📉</span>
                <span className="rec3-badge rec3-badge-yellow">Penting</span>
              </div>
              <h3>Turunkan Penggunaan limit</h3>
              <p>Kamu menggunakan 85% limit kartu kredit. Target di bawah 30% untuk menjaga credit score dan mengurangi risiko gagal bayar.</p>
            </div>

            <div className="rec3-card rec3-green">
              <div className="rec3-card-top">
                <span className="rec3-icon">📈</span>
                <span className="rec3-badge rec3-badge-green">Tips Jangka Panjang</span>
              </div>
              <h3>Buat anggaran bulanan</h3>
              <p>Catat pengeluaran tiap bulan dan identifikasi pos yang bisa dikurangi untuk mempercepat pelunasan tagihan.</p>
            </div>

          </div>

          {/* MOTIVASI BANNER */}
          <div className="rec3-motivasi">
            <div className="rec3-motivasi-top">
              <span className="rec3-heart">💗</span>
              <span className="rec3-motivasi-label">PESAN UNTUK KAMU</span>
            </div>
            <h2>"Mengetahui masalah adalah langkah pertama yang paling berani. Kamu sudah melakukannya."</h2>
            <p>Kondisi keuangan bisa diperbaiki, asalkan dimulai dari kesadaran. Ikuti rekomendasi di atas satu persatu - tidak perlu sempurna sekaligus. Perubahan kecil yang konsisten jauh lebih kuat dari perubahan besar yang tidak bertahan.</p>
          </div>

        </main>
      </div>
    </div>
  );
}

export default Rekomendasi;