const cinemaService = require('../services/Cinema.service');

class CinemaController {
  async create(req, res) {
    try {
      const cinema = await cinemaService.create(req.body);
      res.status(201).json(cinema);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const cinemas = await cinemaService.getAll();
      res.json(cinemas);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getById(req, res) {
    try {
      const cinema = await cinemaService.getById(req.params.id);
      if (!cinema) return res.status(404).json({ message: 'Cinema not found' });
      res.json(cinema);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async update(req, res) {
    try {
      const updatedCinema = await cinemaService.update(req.params.id, req.body);
      if (!updatedCinema) return res.status(404).json({ message: 'Cinema not found' });
      res.json(updatedCinema);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async remove(req, res) {
    try {
      const removed = await cinemaService.remove(req.params.id);
      if (!removed) return res.status(404).json({ message: 'Cinema not found' });
      res.json({ message: 'Cinema deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new CinemaController();
