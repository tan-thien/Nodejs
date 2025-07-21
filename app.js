const express = require('express');
const body_parser = require('body-parser');
const cors = require('cors');
const accountRouter = require('./src/routers/Account.router');
const branchRouter = require('./src/routers/Branch.router');
const CinemaRouter = require('./src/routers/Cinema.router');
const genreRouter = require('./src/routers/Genre.router');
const movieRouter = require('./src/routers/Movie.router');
const scheduleRouter = require('./src/routers/Schedule.router');
const seatRouter = require('./src/routers/seat.router');
const scheduleSeatRoutes = require('./src/routers/scheduleSeat.routes');
const ticketRoutes = require('./src/routers/ticket.routes');
const newsRoutes = require('./src/routers/News.route');
const servicesRoutes = require('./src/routers/Service.route');
const paymentRouter = require('./src/routers/payment.route');
const paypalRouter = require('./src/routers/paypal.route');
const braintreeRoute = require('./src/routers/braintree.route');
const order = require('./src/routers/order.routes');

const app = express();

// Cấu hình CORS để cho phép mọi origin localhost
app.use(cors({
origin: function (origin, callback) {
// Cho phép yêu cầu không có origin (như từ Postman) hoặc bất kỳ origin localhost nào
if (!origin || origin.startsWith('http://localhost')) {
callback(null, true);
} else {
callback(new Error('Not allowed by CORS'));
}
},
credentials: true
}));

app.use(body_parser.json());

// Router
app.use('/', accountRouter);
app.use('/', branchRouter);
app.use('/', CinemaRouter);
app.use('/', genreRouter);
app.use('/', movieRouter);
app.use('/', scheduleRouter);
app.use('/api/seats', seatRouter);
app.use('/', scheduleSeatRoutes);
app.use('/', ticketRoutes);
app.use('/',newsRoutes);
app.use('/',servicesRoutes);
app.use('/', paymentRouter);
app.use('/api/paypal', paypalRouter);
app.use('/api/braintree', braintreeRoute);
app.use('/', order);

module.exports = app;