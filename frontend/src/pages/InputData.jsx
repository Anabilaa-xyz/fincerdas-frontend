import "../styles/Dashboard.css";
import "../styles/InputData.css";
import { useNavigate } from "react-router-dom";
import {
  Home, FileText, PieChart, Lightbulb,
  Shield, Cpu, DollarSign, TrendingUp,
  RotateCcw, ArrowRight,
} from "lucide-react";

function InputData() {
  const navigate = useNavigate();

  return (
    <div className="input-page">

      {/* HEADER */}
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

        {/* SIDEBAR */}
        <aside className="sidebar">
          <div>
            <p className="sidebar-title">Menu</p>
            <ul className="menu-list">
              <li onClick={() => navigate("/dashboard")}><Home size={16}/>Beranda</li>
              <li className="active-menu"><FileText size={16}/>Input Data</li>
              <li><PieChart size={16}/>Hasil Analisis</li>
              <li><Lightbulb size={16}/>Rekomendasi</li>
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
                <div className="circle">2</div>
                <span>Hasil Analisis</span>
              </div>
              <div className="line"></div>
              <div className="progress-item">
                <div className="circle">3</div>
                <span>Rekomendasi</span>
              </div>
            </div>
            <div className="disclaimer-box" style={{marginTop:'24px'}}>
              🔒 Data kamu diproses aman dan tidak disimpan.
            </div>
          </div>
        </aside>

        {/* CONTENT */}
        <main className="content">
          <div className="page-header">
            <h1>Input Data Keuangan</h1>
            <p>Isi data di bawah sesuai kartu kreditmu. Semua field wajib diisi.</p>
          </div>

          {/* TIPS */}
          <div className="tips-card">
            <span className="tips-icon">💡</span>
            <div className="tips-text">
              <strong>Tips Pengisian Data</strong>
              <p>Masukkan angka tanpa titik atau koma. Contoh: 50000000 untuk Rp 50.000.000. Data ini hanya digunakan untuk analisis dan tidak disimpan.</p>
            </div>
          </div>

          <div className="form-wrapper">

            {/* LEFT CARD */}
            <div className="form-card">
              <h2>Data Kartu Kredit</h2>

              <div className="form-group">
                <label>Limit Kredit (Rp)</label>
                <div className="input-with-icon">
                  <span className="input-icon">Rp</span>
                  <input type="text" placeholder="Contoh: 50000000"/>
                </div>
              </div>

              <div className="double-input">
                <div className="form-group">
                  <label>Tagihan Bulan Ini</label>
                  <input type="text" placeholder="Rp"/>
                </div>
                <div className="form-group">
                  <label>Tagihan Bulan Lalu</label>
                  <input type="text" placeholder="Rp"/>
                </div>
              </div>

              <div className="double-input">
                <div className="form-group">
                  <label>Tagihan 2 Bulan Lalu</label>
                  <input type="text" placeholder="Rp"/>
                </div>
                <div className="form-group">
                  <label>Jumlah Pembayaran Bulan Ini</label>
                  <input type="text" placeholder="Rp"/>
                </div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div className="form-card">
              <h2>Riwayat Pembayaran</h2>

              {["Bulan 1","Bulan 2","Bulan 3","Bulan 4","Bulan 5","Bulan 6"].map((bln, i) => (
                <div className="form-group" key={i}>
                  <label>{bln}</label>
                  <div className="select-wrapper">
                    <select defaultValue="">
                      <option value="" disabled>Pilih status pembayaran</option>
                      <option value="0">✅ Bayar Penuh</option>
                      <option value="-1">💛 Bayar Minimum</option>
                      <option value="1">❌ Terlambat 1 Bulan</option>
                      <option value="2">🔴 Terlambat 2 Bulan</option>
                      <option value="3">⛔ Terlambat 3+ Bulan</option>
                    </select>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* BUTTONS */}
          <div className="button-group">
            <button className="reset-btn">
              <RotateCcw size={15}/>
              Reset Form
            </button>
            <button className="analyze-btn" onClick={() => navigate("/hasil-analisis")}>
              Analisis Sekarang
              <ArrowRight size={18}/>
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default InputData;
