const router = require('express').Router();
const OrderController = require('../controllers/order.controller');
const authenticateToken = require('../middlewares/authenticateToken');

// Đặt hàng mới
router.post('/order/create', authenticateToken, OrderController.createOrder);

// Lấy đơn hàng của người dùng
router.get('/order/my-orders', authenticateToken, OrderController.getOrdersByUser);

// Lấy chi tiết đơn hàng
router.get('/order/details/:id', authenticateToken, OrderController.getOrderDetails);

module.exports = router;
