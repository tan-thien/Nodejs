const moment = require('moment');
const qs = require('qs');
const crypto = require('crypto');
const config = require('../configs/vnpay.config');

function sortObject(obj) {
  const sorted = {};
  const keys = Object.keys(obj).sort();
  for (let key of keys) {
    sorted[key] = obj[key];
  }
  return sorted;
}

const createPaymentUrl = (paymentData, clientIp) => {
  const date = moment();
  const orderId = `ORDER${date.format('YYYYMMDDHHmmss')}`;
  const createDate = date.format('YYYYMMDDHHmmss');
  const ipAddr = clientIp || '127.0.0.1';
  const amount = paymentData.amount * 100;

  let vnp_Params = {
    vnp_Version: '2.1.0',
    vnp_Command: 'pay',
    vnp_TmnCode: config.vnp_TmnCode,
    vnp_Locale: 'vn',
    vnp_CurrCode: 'VND',
    vnp_TxnRef: orderId,
    vnp_OrderInfo: paymentData.description,
    vnp_OrderType: 'billpayment',
    vnp_Amount: amount,
    vnp_ReturnUrl: config.vnp_ReturnUrl,
    vnp_IpAddr: ipAddr,
    vnp_CreateDate: createDate,
    vnp_BankCode: paymentData.bankCode || 'NCB'
  };

  vnp_Params = sortObject(vnp_Params);

  const signData = qs.stringify(vnp_Params, { encode: false });
  const hmac = crypto.createHmac('sha512', config.vnp_HashSecret);
  const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');
  vnp_Params['vnp_SecureHash'] = signed;

  const paymentUrl = `${config.vnp_Url}?${qs.stringify(vnp_Params, { encode: false })}`;
  return paymentUrl;
};

const returnFromVnpay = (query) => {
  const vnp_HashSecret = config.vnp_HashSecret;
  const secureHash = query.vnp_SecureHash;

  const inputData = { ...query };
  delete inputData['vnp_SecureHash'];
  delete inputData['vnp_SecureHashType'];

  const sortedKeys = Object.keys(inputData).sort();
  const signData = sortedKeys.map(k => `${k}=${inputData[k]}`).join('&');

  const crypto = require('crypto');
  const hmac = crypto.createHmac('sha512', vnp_HashSecret);
  const signed = hmac.update(Buffer.from(signData, 'utf-8')).digest('hex');

  if (secureHash === signed) {
    return { code: '00', message: 'Payment success', data: query };
  } else {
    return { code: '97', message: 'Invalid signature', data: query };
  }
};


module.exports = { createPaymentUrl, returnFromVnpay };
