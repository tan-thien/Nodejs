const ScheduleSeatService = require('../services/ScheduleSeat.service');


exports.generateSeatsForSchedule = async (req, res) => {
  try {
    const { scheduleId, cinemaId } = req.body;
    await ScheduleSeatService.generateSeatsForSchedule(scheduleId, cinemaId);
    res.status(201).json({ message: 'Ghế đã được tạo thành công cho lịch chiếu.' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getSeatsBySchedule = async (req, res) => {
  try {
    const { scheduleId } = req.params;
    const seats = await ScheduleSeatService.getSeatsBySchedule(scheduleId);
    res.json(seats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
