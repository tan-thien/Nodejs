const Seat = require('../models/Seat.models');

function getRowLetter(index) {
    return String.fromCharCode(65 + index); // A = 65
}

exports.generateSeats = async ({ cinemaId, totalSeats, rows, cols, seatType }) => {
    if (!cinemaId || !totalSeats || !rows || !cols) {
        throw new Error('Thiếu thông tin đầu vào');
    }

    if (rows * cols !== totalSeats) {
        throw new Error('Số hàng x số cột phải bằng tổng số ghế');
    }

    const seats = [];

    for (let row = 0; row < rows; row++) {
        const rowLetter = getRowLetter(row);
        for (let col = 1; col <= cols; col++) {
            seats.push(new Seat({
                SoGhe: `${rowLetter}${col}`,
                LoaiGhe: seatType || 'Thuong',
                TrangThai: false,
                MaRap: cinemaId
            }));
        }
    }

    await Seat.insertMany(seats);
    return seats.length;
};
