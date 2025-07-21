// File: services/paypal.service.js
const paypal = require('@paypal/checkout-server-sdk');

// Cấu hình PayPal SDK
const environment = new paypal.core.SandboxEnvironment(
  process.env.PAYPAL_CLIENT_ID,
  process.env.PAYPAL_CLIENT_SECRET
);
const client = new paypal.core.PayPalHttpClient(environment);

module.exports = {
  createOrder: async (amount, currency = 'USD') => {
    const request = new paypal.orders.OrdersCreateRequest();
    request.prefer('return=representation');
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [{
        amount: {
          currency_code: currency,
          value: amount.toString()
        }
      }]
    });

    const response = await client.execute(request);
    return response.result;
  },

  captureOrder: async (orderId) => {
    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});
    const response = await client.execute(request);
    return response.result;
  }
};
