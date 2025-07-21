const NewsService = require('../services/News.service');

exports.create = async (req, res, next) => {
  try {
    const news = await NewsService.createNews(req.body);
    res.status(201).json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const news = await NewsService.getAllNews();
    res.json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const news = await NewsService.getNewsById(req.params.id);
    if (!news) return res.status(404).json({ success: false, message: "Not found" });
    res.json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const news = await NewsService.updateNews(req.params.id, req.body);
    res.json({ success: true, data: news });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await NewsService.deleteNews(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    next(err);
  }
};
