// src/services/Genre.service.js
const Genre = require('../models/Genre.models');

exports.createGenre = async (data) => {
  const genre = new Genre(data);
  return await genre.save();
};

exports.getAllGenres = async () => {
  return await Genre.find();
};

exports.getGenreById = async (id) => {
  return await Genre.findById(id);
};

exports.updateGenre = async (id, data) => {
  return await Genre.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteGenre = async (id) => {
  return await Genre.findByIdAndDelete(id);
};
