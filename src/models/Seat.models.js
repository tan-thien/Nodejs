const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const SeatSchema = new mongoose.Schema({
    SoGhe: String,
    LoaiGhe: String,
    TrangThai: Boolean,
    MaRap: { type: mongoose.Schema.Types.ObjectId, ref: 'Cinema' } // FK tới Cinema
  });

const seatModel =  db.model('Seat',SeatSchema);

module.exports = seatModel;