const Schedule = require('../models/Schedule.models');
const Seat = require('../models/Seat.models');
const ScheduleSeat = require('../models/ScheduleSeat.model');



exports.create = async (data) => {
  return await Schedule.create(data);
};

exports.getAll = async () => {
  return await Schedule.find().populate('MaPhim').populate('MaRap');
};

exports.getById = async (id) => {
  return await Schedule.findById(id).populate('MaPhim').populate('MaRap');
};

exports.update = async (id, data) => {
  return await Schedule.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Schedule.findByIdAndDelete(id);
};

exports.getByMovieId = async (movieId) => {
  return await Schedule.find({ MaPhim: movieId })
    .populate('MaPhim')
    .populate({
      path: 'MaRap',
      populate: {
        path: 'MaChiNhanh',
        model: 'Branch'
      }
    });
};


exports.getByCinemaId = async (cinemaId) => {
  return await Schedule.find({ MaRap: cinemaId }).populate('MaPhim').populate('MaRap');
};
