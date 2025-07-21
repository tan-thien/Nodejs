const paymentService = require('../services/Payment.service');

exports.createPayment = (req, res) => {
  const { amount, description, bankCode } = req.body;
  const ipAddr = req.headers['x-forwarded-for'] || req.connection.remoteAddress;

  try {
    const paymentUrl = paymentService.createPaymentUrl(
      { amount, description, bankCode },
      ipAddr
    );
    res.json({ paymentUrl });
  } catch (err) {
    console.error('Lỗi tạo URL thanh toán:', err);
    res.status(500).json({ message: 'Lỗi tạo thanh toán' });
  }
};

exports.paymentReturn = (req, res) => {
  try {
    const result = paymentService.returnFromVnpay(req.query);
    if (result.code === '00') {
      res.send('Thanh toán thành công!');
    } else {
      res.send('Sai chữ ký hoặc lỗi thanh toán.');
    }
  } catch (err) {
    console.error('VNPay Return Error:', err);
    res.status(500).json({ message: 'Lỗi xử lý callback từ VNPay' });
  }
};

