const cinemaModel = require('../models/Cinema.models');

class CinemaService {
  async create(data) {
    const cinema = new cinemaModel(data);
    return await cinema.save();
  }

  async getAll() {
    return await cinemaModel.find().populate('MaChiNhanh').exec();
  }

  async getById(id) {
    return await cinemaModel.findById(id).populate('MaChiNhanh').exec();
  }

  async update(id, data) {
    return await cinemaModel.findByIdAndUpdate(id, data, { new: true });
  }

  async remove(id) {
    return await cinemaModel.findByIdAndDelete(id);
  }
}

module.exports = new CinemaService();
