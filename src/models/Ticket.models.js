const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const TicketSchema = new Schema({
    bookingTime: { type: Date, default: Date.now },
    Gia: Number,
    status: { type: String, enum: ['reserved', 'paid', 'cancelled'], default: 'available' },
    MaLich: { type: mongoose.Schema.Types.ObjectId, ref: 'Schedule' },
    MaGhe: { type: mongoose.Schema.Types.ObjectId, ref: 'Seat' },
    MaTK: { type: mongoose.Schema.Types.ObjectId, ref: 'Account' }
  });

const ticketModel = db.model('Ticket',TicketSchema);

module.exports = ticketModel;