const parkingRecordsModel = require('../models/parkingRecordsModel');
const { errorHttp } = require('../middlewares/errorHandler');

exports.getAll = (req, res) => {
  const { jenisKendaraan } = req.query;
  res.json(parkingRecordsModel.getAll(jenisKendaraan));
};

exports.getById = (req, res, next) => {
  const id = parseInt(req.params.id);
  const data = parkingRecordsModel.getById(id);
  if (!data) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(data);
};

exports.create = (req, res, next) => {
  const { platNomor, jenisKendaraan } = req.body;
  if (!platNomor || !jenisKendaraan) return next(errorHttp(400, 'platNomor dan jenisKendaraan wajib diisi'));

  const baru = parkingRecordsModel.create({ platNomor, jenisKendaraan, waktuMasuk: new Date().toISOString(), waktuKeluar: null, biaya: 0 });
  res.status(201).json(baru);
};

exports.update = (req, res, next) => {
  const id = parseInt(req.params.id);
  const hasil = parkingRecordsModel.update(id, req.body);
  if (!hasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.json(hasil);
};

exports.remove = (req, res, next) => {
  const id = parseInt(req.params.id);
  const berhasil = parkingRecordsModel.remove(id);
  if (!berhasil) return next(errorHttp(404, 'Data tidak ditemukan'));
  res.status(204).send();
};