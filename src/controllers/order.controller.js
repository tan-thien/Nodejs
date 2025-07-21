const Order = require('../models/Order.model');
const OrderDetail = require('../models/OrderDetail.model');
const Service = require('../models/Service.models');

exports.createOrder = async (req, res) => {
  try {
    const { services } = req.body; // services: [{ serviceId, quantity }]
    const userId = req.user.userId;

    if (!services || !Array.isArray(services) || services.length === 0) {
      return res.status(400).json({ message: 'Danh sách dịch vụ không hợp lệ.' });
    }

    // Tính tổng tiền
    let totalAmount = 0;
    const details = [];

    for (const item of services) {
      const service = await Service.findById(item.serviceId);
      if (!service) return res.status(404).json({ message: 'Dịch vụ không tồn tại' });


      const quantity = Number(item.quantity);
      const price = Number(service?.Gia);

      if (isNaN(quantity) || isNaN(price)) {
        return res.status(400).json({ message: 'Giá hoặc số lượng không hợp lệ.' });
      }

      totalAmount += quantity * price;
      details.push({
        serviceId: service._id,
        quantity,
        priceAtOrder: price,
      });


      console.log('Service:', service);
      console.log('Quantity:', quantity);
      console.log('Price:', price);
      console.log('TotalAmount:', totalAmount);


    }

    // Tạo Order
    const order = new Order({
      userId,
      totalAmount,
    });
    await order.save();

    // Tạo OrderDetail
    for (const d of details) {
      await new OrderDetail({
        orderId: order._id,
        serviceId: d.serviceId,
        quantity: d.quantity,
        priceAtOrder: d.priceAtOrder,
      }).save();
    }

    res.status(201).json({ message: 'Đặt hàng thành công', orderId: order._id });
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server', error: err.message });
  }
};

exports.getOrdersByUser = async (req, res) => {
  try {
    const orders = await Order.find({ userId: req.user.userId }).sort({ createdAt: -1 });
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server', error: err.message });
  }
};

exports.getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await OrderDetail.find({ orderId: id }).populate('serviceId');
    res.json(details);
  } catch (err) {
    res.status(500).json({ message: 'Lỗi server', error: err.message });
  }
};
