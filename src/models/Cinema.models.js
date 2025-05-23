const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const CinemaSchema = new Schema({
    TenRap: { type: String, required: true },
    SoLuongGhe: {type : Number, required: true },
    TrangThai: { type: Boolean, default: true },
    MaChiNhanh: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Branch'  // Tên của model chi nhánh
  }
  });

const cinemaModel = db.model('Cinema',CinemaSchema);

module.exports = cinemaModel;