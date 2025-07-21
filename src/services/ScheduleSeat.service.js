const Schedule = require('../models/Schedule.models');
const Seat = require('../models/Seat.models');
const ScheduleSeat = require('../models/ScheduleSeat.model');

exports.generateSeatsForSchedule = async (scheduleId, cinemaId) => {
  // B1: Lấy tất cả ghế của rạp
  const seats = await Seat.find({ MaRap: cinemaId });

  // B2: Tạo bản ghi ScheduleSeat cho từng ghế
  const scheduleSeats = seats.map(seat => ({
    ScheduleId: scheduleId,
    SeatId: seat._id,
    IsReserved: false
  }));

  await ScheduleSeat.insertMany(scheduleSeats);
};

exports.getSeatsBySchedule = async (scheduleId) => {
  return await ScheduleSeat.find({ ScheduleId: scheduleId })
    .populate('SeatId'); // lấy thông tin ghế (SoGhe, LoaiGhe...)
};
