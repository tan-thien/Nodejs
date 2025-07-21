const mongoose = require('mongoose');
const db = require('../configs/db');

const ScheduleSeatSchema = new mongoose.Schema({
  ScheduleId: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule', required: true },
  SeatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Seat', required: true },
  IsReserved: { type: Boolean, default: false },
  
  //BookingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Booking', default: null } // nếu có hệ thống đặt vé
}, {
  timestamps: true
});

const scheduleSeatModel = db.model('ScheduleSeat', ScheduleSeatSchema);
module.exports = scheduleSeatModel;
