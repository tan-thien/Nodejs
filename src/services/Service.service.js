const ServiceModel = require('../models/Service.models');

class ServiceService {
  static async createService(data) {
    return await ServiceModel.create(data);
  }

  static async getAllServices() {
    return await ServiceModel.find();
  }

  static async getServiceById(id) {
    return await ServiceModel.findById(id);
  }

  static async updateService(id, data) {
    return await ServiceModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteService(id) {
    return await ServiceModel.findByIdAndDelete(id);
  }
}

module.exports = ServiceService;
