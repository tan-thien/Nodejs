const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const NewsSchema = new Schema({
  TieuDe: { type: String, required: true, trim: true },
  NoiDung: { type: String, required: true },
  AnhTinTuc: { type: String, required: true },
  MaPhim: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  TrangThai: { type: Boolean, default: true }
}, { timestamps: true });

const NewsModel = db.model('News', NewsSchema);
module.exports = NewsModel;
