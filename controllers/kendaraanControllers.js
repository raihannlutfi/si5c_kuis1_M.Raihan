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
  const filter = {};
  if (req.query.jenisKendaraan) {
    filter['jenisKendaraan'] = String(req.query.jenisKendaraan).trim();
  }
  if (req.query.kendaraan) {
    const kendaraan = await Kendaraan.findOne({ kode: String(req.query.kendaraan).toUpperCase() });
    // Kode kendaraan tidak dikenal -> hasil kosong ($in: [] tidak cocok dengan apa pun)
    filter.kendaraanId = kendaraan ? kendaraan._id : { $in: [] };
  }
  const data = await Kendaraan.find(filter).populate('kendaraanId');
  res.json(data);
};