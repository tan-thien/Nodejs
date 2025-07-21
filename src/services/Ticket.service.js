const Ticket = require('../models/Ticket.models');
const ScheduleSeat = require('../models/ScheduleSeat.model');

exports.bookTicket = async ({ scheduleSeatId, MaTK, Gia }) => {
  // 1. Kiểm tra ScheduleSeat tồn tại
  const ss = await ScheduleSeat.findById(scheduleSeatId);
  if (!ss) {
    throw new Error('Ghế không tồn tại');
  }

  // 2. Nếu đã được đặt rồi
  if (ss.IsReserved) {
    throw new Error('Ghế đã được đặt');
  }

  // 3. Tạo vé (ticket)
  const ticket = await Ticket.create({
    ScheduleSeatId: scheduleSeatId,
    MaTK,
    Gia,
    status: 'reserved'
  });

  // 4. Đánh dấu ScheduleSeat là đã được đặt
  ss.IsReserved = true;
  await ss.save();

  return ticket;
};

exports.getTicketsByUser = async (userId) => {
  return Ticket.find({ MaTK: userId })
    .sort({ bookingTime: -1 }) // mới nhất trước
    .populate({
      path: 'ScheduleSeatId',
      populate: [
        {
          path: 'ScheduleId',
          populate: [
            { path: 'MaPhim', select: 'TenPhim' },  // tên phim
            { path: 'MaRap', select: 'TenRap' }     // tên rạp
          ]
        },
        {
          path: 'SeatId',
          select: 'SoGhe LoaiGhe'                  // số ghế & loại ghế
        }
      ]
    });
};
