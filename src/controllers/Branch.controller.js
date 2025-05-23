const BranchService = require('../services/Branch.service');

exports.create = async (req, res, next) => {
  try {
    const branch = await BranchService.createBranch(req.body);
    res.status(201).json({ success: true, data: branch });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const branches = await BranchService.getAllBranches();
    res.json({ success: true, data: branches });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const branch = await BranchService.getBranchById(req.params.id);
    if (!branch) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: branch });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const branch = await BranchService.updateBranch(req.params.id, req.body);
    res.json({ success: true, data: branch });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await BranchService.deleteBranch(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
