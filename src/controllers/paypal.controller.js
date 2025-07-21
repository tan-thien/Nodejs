// File: controllers/paypal.controller.js
const paypalService = require('../services/paypal.service');

exports.createOrder = async (req, res) => {
  try {
    const { amount } = req.body;
    const order = await paypalService.createOrder(amount);
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.captureOrder = async (req, res) => {
  try {
    const { orderId } = req.body;
    const result = await paypalService.captureOrder(orderId);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
