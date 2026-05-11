const { generateRecommendation } = require('../services/recommendation.service');

const predictRisk = (req, res) => {
  const inputData = req.body;

  if (!inputData || Object.keys(inputData).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Data input tidak boleh kosong',
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

