const BranchModel = require('../models/Branch.models');

class BranchService {
  static async createBranch(data) {
    return await BranchModel.create(data);
  }

  static async getAllBranches() {
    return await BranchModel.find();
  }

  static async getBranchById(id) {
    return await BranchModel.findById(id);
  }

  static async updateBranch(id, data) {
    return await BranchModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteBranch(id) {
    return await BranchModel.findByIdAndDelete(id);
  }
}

module.exports = BranchService;
