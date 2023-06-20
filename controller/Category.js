const {Category} = require("../model/Category");

exports.fetchCategory = async (req, res) => {
  try {
    const categories = await Category.find({}).exec();
    res.status(200).json(categories);
  } catch (error) {
    res.status(400).json(err);
  }
};

exports.createCategory = async (req, res) => {
    const categories = new Category(req.body);
    try {
      const doc = await categories.save();
      res.status(201).status(201).json(doc);
    } catch (error) {
      res.status(400).json(err);
    }
  };
