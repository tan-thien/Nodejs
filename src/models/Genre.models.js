const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const GenreSchema = new Schema({
  TenTheLoai: String
});

const genreModel = db.model('Genre',GenreSchema);

module.exports = genreModel;