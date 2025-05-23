const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const MovieSchema = new Schema({
  TenPhim: {
    type: String,
    required: true,
    trim: true
  },
  MoTa: {
    type: String,
    trim: true
  },
  ThoiLuong: {
    type: Number,
    required: true,
    min: 1 // không chấp nhận phim có thời lượng 0 phút
  },
  Ngay: {
    type: Date,
    required: true
  },
  AnhPhim: {
    type: String,
    required: true
  },
  trailerUrl: {
    type: String,
    trim: true
  },
  TrangThai: {
    type: Boolean,
    default: true
  },
  MaTheLoai: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: true
  }
}, {
  timestamps: true 
});

const movieModel = db.model('Movie',MovieSchema);

module.exports = movieModel;