const Schedule = require('../models/Schedule.models');

exports.create = async (data) => {
  return await Schedule.create(data);
};

exports.getAll = async () => {
  return await Schedule.find().populate('MaPhim').populate('MaPhong');
};

exports.getById = async (id) => {
  return await Schedule.findById(id).populate('MaPhim').populate('MaPhong');
};

exports.update = async (id, data) => {
  return await Schedule.findByIdAndUpdate(id, data, { new: true });
};

exports.remove = async (id) => {
  return await Schedule.findByIdAndDelete(id);
};
