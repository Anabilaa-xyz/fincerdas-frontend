import "../styles/HasilAnalisis.css";
import { useNavigate } from "react-router-dom";

function HasilAnalisis() {
  const navigate = useNavigate();

  const today = new Date().toLocaleDateString("id-ID", {
    day: "numeric", month: "long", year: "numeric"
  });

  return (
    <div className="hasil-page">
      <div className="hasil-container">

        {/* BREADCRUMB */}
        <div className="breadcrumb">
          <span onClick={() => navigate("/dashboard")}>🏠 Beranda</span>
          <span className="bc-sep">›</span>
          <span onClick={() => navigate("/input-data")}>Input Data</span>
          <span className="bc-sep">›</span>
          <span className="bc-current">Hasil Analisis</span>
        </div>

        {/* TITLE */}
        <div className="hasil-title-row">
          <div>
            <h1>Hasil Analisis Risiko</h1>
            <p>Prediksi kondisi finansialmu berdasarkan data yang telah dimasukkan.</p>
          </div>
          <div className="hasil-date">
            📅 {today}
          </div>
        </div>

        {/* RISK CARD */}
        <div className="risk-card">
          <div className="risk-card-header">
            <div>
              <h2>Skor Risiko Gagal Bayar</h2>
              <p>Berdasarkan analisis 25+ variabel keuangan dengan model ML</p>
            </div>
            <span className="risk-badge-high">🔴 Risiko Tinggi</span>
          </div>

          <div className="risk-visual">
            {/* Ring gauge */}
            <div className="risk-ring-wrap">
              <svg width="180" height="180" viewBox="0 0 180 180">
                <circle className="ring-bg" cx="90" cy="90" r="70"/>
                <circle className="ring-fill" cx="90" cy="90" r="70"/>
              </svg>
              <div className="ring-text">
                <span className="ring-percent">80%</span>
                <span className="ring-label">Probabilitas</span>
              </div>
            </div>

            {/* Breakdown */}
            <div className="risk-breakdown">
              <div className="breakdown-item">
                <div className="breakdown-header">
                  <span className="breakdown-label">Rasio Penggunaan Kredit</span>
                  <span className="breakdown-val" style={{color:'#f43f5e'}}>92%</span>
                </div>
                <div className="breakdown-bar">
                  <div className="breakdown-fill fill-red" style={{width:'92%'}}></div>
                </div>
              </div>

              <div className="breakdown-item">
                <div className="breakdown-header">
                  <span className="breakdown-label">Keterlambatan Pembayaran</span>
                  <span className="breakdown-val" style={{color:'#f59e0b'}}>3 bulan</span>
                </div>
                <div className="breakdown-bar">
                  <div className="breakdown-fill fill-amber" style={{width:'60%'}}></div>
                </div>
              </div>

              <div className="breakdown-item">
                <div className="breakdown-header">
                  <span className="breakdown-label">Jumlah Pembayaran vs Tagihan</span>
                  <span className="breakdown-val" style={{color:'#f43f5e'}}>35%</span>
                </div>
                <div className="breakdown-bar">
                  <div className="breakdown-fill fill-red" style={{width:'35%'}}></div>
                </div>
              </div>

              <div className="breakdown-item">
                <div className="breakdown-header">
                  <span className="breakdown-label">Stabilitas Tagihan</span>
                  <span className="breakdown-val" style={{color:'#22c55e'}}>Stabil</span>
                </div>
                <div className="breakdown-bar">
                  <div className="breakdown-fill fill-green" style={{width:'72%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* INSIGHT + RECOMMENDATION */}
        <div className="cards-row">
          <div className="insight-box">
            <h3>🔍 Insight Analisis</h3>
            <ul>
              <li>Total tagihan sangat tinggi dibanding limit kredit (92% utilisasi).</li>
              <li>Riwayat pembayaran menunjukkan keterlambatan di 3 bulan terakhir.</li>
              <li>Jumlah pembayaran jauh di bawah total tagihan yang jatuh tempo.</li>
              <li>Penggunaan kartu kredit sangat aktif dan konsisten tinggi.</li>
            </ul>
          </div>

          <div className="recommendation-box">
            <h3>💡 Rekomendasi Keuangan</h3>
            <ul className="rec-list">
              <li><span>✂️</span> Kurangi penggunaan kartu kredit maksimal 30% dari limit.</li>
              <li><span>📅</span> Prioritaskan bayar tagihan sebelum jatuh tempo.</li>
              <li><span>💰</span> Buat dana darurat minimal 3x pengeluaran bulanan.</li>
              <li><span>📊</span> Evaluasi pengeluaran rutin yang bisa dikurangi.</li>
              <li><span>🤝</span> Pertimbangkan konsultasi dengan perencana keuangan.</li>
            </ul>
          </div>
        </div>

        {/* NEXT STEPS */}
        <div className="next-steps-card">
          <div className="next-steps-text">
            <h3>Langkah Selanjutnya</h3>
            <p>Jangan khawatir! Risiko tinggi bisa diturunkan dengan langkah-langkah yang tepat. Mulai perubahan kecil hari ini untuk hasil yang lebih baik.</p>
          </div>
          <div className="next-steps-actions">
            <button className="btn-next-primary">
              📋 Lihat Rencana Aksi
            </button>
            <button className="btn-next-secondary" onClick={() => navigate("/dashboard")}>
              🏠 Kembali ke Dashboard
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default HasilAnalisis;
