// src/services/Movie.service.js
const Movie = require('../models/Movie.models');

exports.createMovie = async (data) => {
  const movie = new Movie(data);
  return await movie.save();
};

exports.getAllMovies = async () => {
  return await Movie.find().populate('MaTheLoai');
};

exports.getMovieById = async (id) => {
  return await Movie.findById(id).populate('MaTheLoai');
};

exports.updateMovie = async (id, data) => {
  return await Movie.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};
