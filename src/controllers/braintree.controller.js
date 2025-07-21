const braintreeService = require('../services/braintree.service');

exports.getClientToken = async (req, res) => {
  try {
    const clientToken = await braintreeService.generateClientToken();
    res.json({ success: true, clientToken });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

exports.createTransaction = async (req, res) => {
  try {
    const { amount, paymentMethodNonce } = req.body;

    if (!paymentMethodNonce) {
      return res.status(400).json({ success: false, error: 'Missing nonce' });
    }

    const result = await braintreeService.createTransaction(amount, paymentMethodNonce);
    if (result.success) {
      res.json({ success: true, transaction: result.transaction });
    } else {
      res.status(400).json({ success: false, error: result.message });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
