const express = require('express');
const router = express.Router();
const braintreeController = require('../controllers/braintree.controller');

// Lấy client token để gửi về Flutter app
router.get('/client-token', braintreeController.getClientToken);

// Tạo giao dịch sau khi nhận nonce từ Flutter
router.post('/checkout', braintreeController.createTransaction);

module.exports = router;
