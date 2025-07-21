const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const orderDetailSchema = new Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  serviceId: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  quantity: { type: Number, required: true },
  priceAtOrder: { type: Number, required: true }
});

const OrderDetailModel = db.model('OrderDetail', orderDetailSchema); // ✅ Dùng đúng biến schema
module.exports = OrderDetailModel;
