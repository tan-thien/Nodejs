const express = require('express');
const router = express.Router();
const paypalController = require('../controllers/paypal.controller');

// Tạo đơn hàng
router.post('/create-order', paypalController.createOrder);

// Capture đơn hàng sau khi thanh toán thành công
router.post('/capture-order', paypalController.captureOrder);

module.exports = router;
