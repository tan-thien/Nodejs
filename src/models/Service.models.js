const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const ServiceSchema = new Schema({
  TenDichVu: { type: String, required: true, trim: true },
  MoTa: { type: String, trim: true },
  Gia: { type: Number, required: true, min: 0 },
  HinhAnh: { type: String, required: true },
  TrangThai: { type: Boolean, default: true }
}, { timestamps: true });

const ServiceModel = db.model('Service', ServiceSchema);
module.exports = ServiceModel;
