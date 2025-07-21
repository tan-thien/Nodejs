const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/Payment.controller');

// Tạo link thanh toán
router.post('/api/payment/create', paymentController.createPayment);

// Callback từ VNPay
router.get('/api/payment/vnpay-return', paymentController.paymentReturn);


module.exports = router;
