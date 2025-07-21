const ServiceService = require('../services/Service.service');

exports.create = async (req, res, next) => {
  try {
    const service = await ServiceService.createService(req.body);
    res.status(201).json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const services = await ServiceService.getAllServices();
    res.json({ success: true, data: services });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const service = await ServiceService.getServiceById(req.params.id);
    if (!service) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const service = await ServiceService.updateService(req.params.id, req.body);
    res.json({ success: true, data: service });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await ServiceService.deleteService(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
