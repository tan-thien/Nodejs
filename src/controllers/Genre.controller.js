// src/controllers/Genre.controller.js
const GenreService = require('../services/Genre.service');

exports.create = async (req, res) => {
  try {
    const result = await GenreService.createGenre(req.body);
    res.status(201).json(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const genres = await GenreService.getAllGenres();
    res.status(200).json(genres);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const genre = await GenreService.getGenreById(req.params.id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.status(200).json(genre);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const genre = await GenreService.updateGenre(req.params.id, req.body);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.status(200).json(genre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.remove = async (req, res) => {
  try {
    const genre = await GenreService.deleteGenre(req.params.id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    res.status(200).json({ message: 'Genre deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
