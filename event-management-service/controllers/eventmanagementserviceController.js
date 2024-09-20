const Event-management-service = require("../models/eventmanagementserviceModel");

exports.getAll = async (req, res) => {
  try {
    const items = await Event-management-service.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = new Event-management-service(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
