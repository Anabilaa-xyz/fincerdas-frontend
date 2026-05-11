const { generateRecommendation } = require('../services/recommendation.service');

const predictRisk = (req, res) => {
  const inputData = req.body;

  if (!inputData || Object.keys(inputData).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Data input tidak boleh kosong',
    });
  }

  const requiredFields = ['limit_kredit', 'tagihan', 'riwayat_pembayaran'];

  const missingFields = requiredFields.filter((field) => inputData[field] === undefined || inputData[field] === '');

  if (missingFields.length > 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Data input belum lengkap',
      missing_fields: missingFields,
    });
  }

  const { limit_kredit, tagihan, riwayat_pembayaran } = inputData;

  if (typeof limit_kredit !== 'number' || limit_kredit <= 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Limit kredit harus berupa angka dan lebih dari 0',
    });
  }

  if (typeof tagihan !== 'number' || tagihan < 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Tagihan harus berupa angka dan tidak boleh negatif',
    });
  }

  const allowedPaymentHistory = ['tepat_waktu', 'terlambat'];

  if (!allowedPaymentHistory.includes(riwayat_pembayaran)) {
    return res.status(400).json({
      status: 'error',
      message: 'Riwayat pembayaran harus bernilai tepat_waktu atau terlambat',
    });
  }

  const result = generateRecommendation(inputData);

  return res.status(200).json({
    status: 'success',
    message: 'Prediksi berhasil diproses',
    input: inputData,
    data: result,
  });
};

module.exports = {
  predictRisk,
};


