const seatService = require('../services/seat.service');
const Seat = require('../models/Seat.models');

exports.generateSeats = async (req, res) => {
    try {
        const totalCreated = await seatService.generateSeats(req.body);
        return res.status(201).json({
            message: 'Tạo ghế thành công',
            totalCreated
        });
    } catch (error) {
        console.error(error);
        return res.status(400).json({ message: error.message || 'Lỗi server' });
    }
};


exports.getByCinema = async (req, res) => {
  try {
    const { cinemaId } = req.params;
    console.log('[SeatController] 📩 Nhận yêu cầu GET /getbycinema với MaRap =', cinemaId);

    const seats = await Seat.find({ MaRap: cinemaId });
    console.log(`[SeatController] ✅ Tìm thấy ${seats.length} ghế cho rạp ${cinemaId}`);

    res.status(200).json(seats);
  } catch (err) {
    console.error('[SeatController] ❌ Lỗi khi lấy danh sách ghế:', err);
    res.status(500).json({ message: err.message });
  }
};



