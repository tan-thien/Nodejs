const seatService = require('../services/seat.service');

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
