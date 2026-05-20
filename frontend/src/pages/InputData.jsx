import "../styles/InputData.css";
import { useNavigate } from "react-router-dom";

function InputData() {

  const navigate = useNavigate();

  return (
    <div className="input-page">

      <div className="input-card">

        <h1>Input Data Keuangan</h1>

        <p>
          Masukkan data penggunaan kartu kredit untuk
          menganalisis risiko finansialmu.
        </p>

        <form className="input-form">

          {/* LIMIT KREDIT */}
          <div className="form-group">

            <label>Limit Kredit</label>

            <input
              type="number"
              placeholder="Masukkan limit kredit"
            />

          </div>

          {/* TOTAL TAGIHAN */}
          <div className="form-group">

            <label>Total Tagihan</label>

            <input
              type="number"
              placeholder="Masukkan total tagihan"
            />

          </div>

          {/* RIWAYAT PEMBAYARAN */}
          <div className="form-group">

            <label>Riwayat Pembayaran</label>

            <select>

              <option>Tepat Waktu</option>

              <option>Terlambat</option>

            </select>

          </div>

          {/* BUTTON */}
          <button
            type="button"
            className="analyze-btn"
            onClick={() => navigate("/hasil-analisis")}
          >
            Analisis Sekarang
          </button>

        </form>

      </div>

    </div>
  );
}

export default InputData;