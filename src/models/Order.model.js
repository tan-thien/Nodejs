const mongoose = require('mongoose');
const db = require('../configs/db'); // custom connection

const { Schema } = mongoose;

const OrderSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'Account', required: true },
  totalAmount: { type: Number, required: true },
  status: { type: String, enum: ['pending', 'paid', 'cancelled'], default: 'pending' },
  createdAt: { type: Date, default: Date.now }
});


const OrderModel = db.model('Order', OrderSchema);
module.exports = OrderModel;
