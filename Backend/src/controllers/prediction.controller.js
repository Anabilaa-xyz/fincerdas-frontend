const { generateRecommendation } = require('../services/recommendation.service');

const predictRisk = (req, res) => {
  const inputData = req.body;

  // cek data kosong
  if (!inputData || Object.keys(inputData).length === 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Data input tidak boleh kosong',
    });
  }

  const requiredFields = [
    'limit_bal',

    'bill_amt1',
    'bill_amt2',
    'bill_amt3',

    'pay_amt1',

     'pay_1',
     'pay_2',
     'pay_3',
     'pay_4',
     'pay_5',
     'pay_6',
    
  ];

  // cek field kosong
  const missingFields = requiredFields.filter(
    (field) =>
      inputData[field] === undefined ||
      inputData[field] === ''
  );

  if (missingFields.length > 0) {
    return res.status(400).json({
      status: 'error',
      message: 'Data input belum lengkap',
      missing_fields: missingFields,
    });
  }

  // destructuring input
  const {
    limit_bal,

    pay_1,
    pay_2,
    pay_3,
    pay_4,
    pay_5,
    pay_6,

    bill_amt1,
    bill_amt2,
    bill_amt3,

    pay_amt1,
  } = inputData;

  // validasi limit kredit
  if (
    typeof limit_bal !== 'number' ||
    limit_bal <= 0
  ) {
    return res.status(400).json({
      status: 'error',
      message:
        'Limit kredit harus berupa angka dan lebih dari 0',
    });
  }

  // validasi tagihan
  const bills = [
    bill_amt1,
    bill_amt2,
    bill_amt3,
  ];

  const isValidBills = bills.every(
    (bill) =>
      typeof bill === 'number'
  );

  if (!isValidBills) {
    return res.status(400).json({
      status: 'error',
      message:
        'Semua data tagihan harus berupa angka',
    });
  }

  // validasi pembayaran
  const payments = [
    pay_amt1,
  ];

  const isValidPayments = payments.every(
    (payment) =>
      typeof payment === 'number' &&
      payment >= 0
  );

  if (!isValidPayments) {
    return res.status(400).json({
      status: 'error',
      message:
        'Semua data pembayaran harus berupa angka dan tidak boleh negatif',
    });
  }

  // validasi status pembayaran
  const paymentStatus = [
    pay_1,
    pay_2,
    pay_3,
    pay_4,
    pay_5,
    pay_6,
  ];

  const isValidPaymentStatus =
    paymentStatus.every(
      (status) =>
        typeof status === 'number' &&
        status >= -2 &&
        status <= 3
    );

  if (!isValidPaymentStatus) {
    return res.status(400).json({
      status: 'error',
      message:
        'Status pembayaran harus berupa angka antara -2 sampai 3',
    });
  }

  
  const result =
    generateRecommendation(inputData);

  
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


