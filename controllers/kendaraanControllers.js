const Kendaraan = require('../models/kendaraanModel');

exports.create = async (req, res) => {
  try {
    const kendaraan = await Kendaraan.create(req.body);
    res.status(201).json(kendaraan);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAll = async (req, res) => {
  res.json(await Kendaraan.find());
};