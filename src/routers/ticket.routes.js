const router = require('express').Router();
const TicketController = require('../controllers/Ticket.controller');
const authenticateToken = require('../middlewares/authenticateToken');

// 👇 API đặt vé
router.post('/ticket/book', authenticateToken, TicketController.book);

router.get('/ticket/user', authenticateToken, TicketController.getUserTickets);

module.exports = router;
