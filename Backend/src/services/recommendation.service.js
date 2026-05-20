const generateRecommendation = (inputData) => {
  const { limit_kredit, tagihan, riwayat_pembayaran } = inputData;

  const rasioTagihan = tagihan / limit_kredit;

  let riskScore = 30;
  let riskLevel = 'Low Risk';
  const causes = [];
  const recommendations = [];

  if (rasioTagihan >= 0.8) {
    riskScore += 40;
    causes.push('Tagihan sudah mendekati atau melebihi sebagian besar limit kredit');
    recommendations.push('Kurangi penggunaan kartu kredit agar tagihan tidak semakin tinggi');
  } else if (rasioTagihan >= 0.5) {
    riskScore += 25;
    causes.push('Tagihan berada pada tingkat sedang dibandingkan limit kredit');
    recommendations.push('Batasi penggunaan kartu kredit dan mulai atur prioritas pembayaran');
  } else {
    causes.push('Tagihan masih berada pada batas yang relatif aman dibandingkan limit kredit');
    recommendations.push('Pertahankan penggunaan kartu kredit secara bijak');
  }

  if (riwayat_pembayaran === 'terlambat') {
    riskScore += 30;
    causes.push('Riwayat pembayaran menunjukkan adanya keterlambatan');
    recommendations.push('Bayar tagihan sebelum jatuh tempo untuk menurunkan risiko gagal bayar');
  } else {
    causes.push('Riwayat pembayaran menunjukkan pembayaran tepat waktu');
    recommendations.push('Pertahankan kebiasaan membayar tagihan tepat waktu');
  }

  if (riskScore >= 80) {
    riskLevel = 'High Risk';
  } else if (riskScore >= 50) {
    riskLevel = 'Medium Risk';
  } else {
    riskLevel = 'Low Risk';
  }

  return {
    risk_score: riskScore,
    risk_level: riskLevel,
    causes,
    recommendations,
  };
};

module.exports = {
  generateRecommendation,
};

