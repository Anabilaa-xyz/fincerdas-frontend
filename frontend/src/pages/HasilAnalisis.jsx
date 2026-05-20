import "../styles/HasilAnalisis.css";
import { useNavigate } from "react-router-dom";

function HasilAnalisis() {

  const navigate = useNavigate();

  return (
    <div className="hasil-page">

      <div className="hasil-card">

        <h1>Hasil Analisis</h1>

        <p className="subtitle">
          Berikut hasil prediksi kondisi finansialmu
          berdasarkan data yang telah dimasukkan.
        </p>

        {/* RISK SECTION */}
        <div className="risk-box">

          <h2>Risiko Gagal Bayar</h2>

          <div className="risk-percent">
            80%
          </div>

          <div className="progress-bar">
            <div className="progress-fill"></div>
          </div>

          <p className="risk-status">
            Risiko Tinggi
          </p>

        </div>

        {/* INSIGHT */}
        <div className="insight-box">

          <h3>Insight Analisis</h3>

          <ul>
            <li>Total tagihan cukup tinggi dibanding limit kredit.</li>

            <li>Riwayat pembayaran menunjukkan keterlambatan.</li>

            <li>Penggunaan kartu kredit terlalu aktif.</li>
          </ul>

        </div>

        {/* RECOMMENDATION */}
        <div className="recommendation-box">

          <h3>Rekomendasi Keuangan</h3>

          <p>
            Kurangi penggunaan kartu kredit,
            prioritaskan pembayaran tagihan tepat waktu,
            dan batasi pengeluaran tidak penting.
          </p>

        </div>

        {/* BUTTON */}
        <button
          className="back-btn"
          onClick={() => navigate("/dashboard")}
        >
          Kembali ke Dashboard
        </button>

      </div>

    </div>
  );
}

export default HasilAnalisis;