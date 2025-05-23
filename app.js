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

module.exports = app;