const NewsModel = require('../models/News.models');

class NewsService {
  static async createNews(data) {
    return await NewsModel.create(data);
  }

  static async getAllNews() {
    return await NewsModel.find().populate('MaPhim');
  }

  static async getNewsById(id) {
    return await NewsModel.findById(id).populate('MaPhim');
  }

  static async updateNews(id, data) {
    return await NewsModel.findByIdAndUpdate(id, data, { new: true });
  }

  static async deleteNews(id) {
    return await NewsModel.findByIdAndDelete(id);
  }
}

module.exports = NewsService;
