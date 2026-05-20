import "../styles/InputData.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

function InputData() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    limit_bal: 0,

    bill_amt1: 0,
    bill_amt2: 0,
    bill_amt3: 0,

    pay_amt1: 0,

    pay_1: 0,
    pay_2: 0,
    pay_3: 0,
    pay_4: 0,
    pay_5: 0,
    pay_6: 0,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async () => {

    try {

      const response = await axios.post(
        "http://localhost:5000/api/predict",
        formData
      );

      console.log(response.data);

      navigate("/hasil-analisis", {
        state: {
          hasil: response.data,
        },
      });

    } catch (error) {

      console.error(error);

      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Gagal menghubungkan ke backend");
      }

    }
  };

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
              name="limit_bal"
              placeholder="Masukkan limit kredit"
              onChange={handleChange}
            />

          </div>

          {/* TAGIHAN */}
          <div className="form-group">

            <label>Tagihan Bulan 1</label>

            <input
              type="number"
              name="bill_amt1"
              placeholder="Masukkan tagihan bulan 1"
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Tagihan Bulan 2</label>

            <input
              type="number"
              name="bill_amt2"
              placeholder="Masukkan tagihan bulan 2"
              onChange={handleChange}
            />

          </div>

          <div className="form-group">

            <label>Tagihan Bulan 3</label>

            <input
              type="number"
              name="bill_amt3"
              placeholder="Masukkan tagihan bulan 3"
              onChange={handleChange}
            />

          </div>

          {/* PEMBAYARAN */}
          <div className="form-group">

            <label>Jumlah Pembayaran</label>

            <input
              type="number"
              name="pay_amt1"
              placeholder="Masukkan jumlah pembayaran"
              onChange={handleChange}
            />

          </div>

          {/* STATUS PEMBAYARAN */}
          <div className="form-group">

            <label>Riwayat Pembayaran Bulan 1</label>

            <select
              name="pay_1"
              onChange={handleChange}
            >
              <option value="0">Tepat Waktu</option>
              <option value="1">Terlambat</option>
            </select>

          </div>

          <div className="form-group">

            <label>Riwayat Pembayaran Bulan 2</label>

            <select
              name="pay_2"
              onChange={handleChange}
            >
              <option value="0">Tepat Waktu</option>
              <option value="1">Terlambat</option>
            </select>

          </div>

          <div className="form-group">

            <label>Riwayat Pembayaran Bulan 3</label>

            <select
              name="pay_3"
              onChange={handleChange}
            >
              <option value="0">Tepat Waktu</option>
              <option value="1">Terlambat</option>
            </select>

          </div>

          <div className="form-group">

            <label>Riwayat Pembayaran Bulan 4</label>

            <select
              name="pay_4"
              onChange={handleChange}
            >
              <option value="0">Tepat Waktu</option>
              <option value="1">Terlambat</option>
            </select>

          </div>

          <div className="form-group">

            <label>Riwayat Pembayaran Bulan 5</label>

            <select
              name="pay_5"
              onChange={handleChange}
            >
              <option value="0">Tepat Waktu</option>
              <option value="1">Terlambat</option>
            </select>

          </div>

          <div className="form-group">

            <label>Riwayat Pembayaran Bulan 6</label>

            <select
              name="pay_6"
              onChange={handleChange}
            >
              <option value="0">Tepat Waktu</option>
              <option value="1">Terlambat</option>
            </select>

          </div>

          {/* BUTTON */}
          <button
            type="button"
            className="analyze-btn"
            onClick={handleSubmit}
          >
            Analisis Sekarang
          </button>

        </form>

      </div>

    </div>

  );
}

export default InputData;