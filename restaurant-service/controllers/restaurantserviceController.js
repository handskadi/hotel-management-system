const Restaurant-service = require("../models/restaurantserviceModel");

exports.getAll = async (req, res) => {
  try {
    const items = await Restaurant-service.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = new Restaurant-service(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
