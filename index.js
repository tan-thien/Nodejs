const app = require('./app');

const db = require('./src/configs/db');

const accountModel = require('./src/models/Account.models');
const branchModel = require('./src/models/Branch.models');
const cinemaModel = require('./src/models/Cinema.models');
const genreModel = require('./src/models/Genre.models');
const movieModel = require('./src/models/Movie.models');
const scheduleModel = require('./src/models/Schedule.models');
const seatModel = require('./src/models/Seat.models');
const ticketModel = require('./src/models/Ticket.models');
const orderModel = require('./src/models/Order.model');
const orderdetailModel = require('./src/models/OrderDetail.model');

require('dotenv').config();

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>
{
    res.send("Hello World");
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server is listening on http://0.0.0.0:${port}`);
});