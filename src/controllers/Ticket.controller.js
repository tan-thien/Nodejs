const TicketService = require('../services/Ticket.service');

exports.book = async (req, res) => {
  try {
    const { scheduleSeatId, Gia } = req.body;
    const MaTK = req.user.userId; // 👈 lấy từ JWT đã decode (middleware)

    const ticket = await TicketService.bookTicket({ scheduleSeatId, MaTK, Gia });

    res.status(201).json({
      status: true,
      message: 'Đặt vé thành công',
      data: ticket
    });
  } catch (err) {
    res.status(400).json({
      status: false,
      message: err.message
    });
  }
};

exports.getUserTickets = async (req, res) => {
  try {
    const userId = req.user.userId; // từ JWT middleware
    const tickets = await TicketService.getTicketsByUser(userId);
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};