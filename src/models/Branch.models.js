const mongoose = require('mongoose');
const db = require('../configs/db');

const { Schema } = mongoose;

const BranchSchema = new Schema({
TenChiNhanh: { type: String, required: true },
  DiaChi: { type: String, required: true },
  SDT: { type: String, required: true },
  Status: { type: Boolean, default: true }
});

const branchModel = db.model('Branch',BranchSchema);

module.exports = branchModel;