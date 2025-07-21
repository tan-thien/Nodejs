const braintree = require('braintree');

// Cấu hình môi trường Braintree
const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox, // Hoặc Production nếu đã live
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

module.exports = {
  generateClientToken: async () => {
    const response = await gateway.clientToken.generate({});
    return response.clientToken;
  },

  createTransaction: async (amount, paymentMethodNonce) => {
    const result = await gateway.transaction.sale({
      amount: amount,
      paymentMethodNonce: paymentMethodNonce,
      options: {
        submitForSettlement: true
      }
    });
    return result;
  }
};
