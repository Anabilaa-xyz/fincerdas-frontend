const generateRecommendation = (inputData) => {
  return {
    risk_score: 78,
    risk_level: 'High Risk',
    causes: [
      'Tagihan terlalu tinggi dibandingkan limit kredit',
      'Riwayat pembayaran menunjukkan keterlambatan',
    ],
    recommendations: [
      'Kurangi penggunaan kartu kredit',
      'Bayar tagihan sebelum jatuh tempo',
      'Prioritaskan pembayaran tagihan minimum',
    ],
  };
};

module.exports = {
  generateRecommendation,
};
