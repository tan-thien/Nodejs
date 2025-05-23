const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const ScheduleSchema = new mongoose.Schema({
  GioChieu: { type: Date, required: true },
  TrangThai: { type: Boolean, default: true },
  MaPhim: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  MaPhong: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema', required: true }
}, {
  timestamps: true 
});

const scheduleModel = db.model('Schedule',ScheduleSchema);

module.exports = scheduleModel;
  