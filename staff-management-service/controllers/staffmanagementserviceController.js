const Staff-management-service = require("../models/staffmanagementserviceModel");

exports.getAll = async (req, res) => {
  try {
    const items = await Staff-management-service.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = new Staff-management-service(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
