const mongoose = require('mongoose');
const kendaraanModel = require('./kendaraanModel');

//schema untuk embedding data kendaraan
const kendaraanSchema = new mongoose.Schema({
  kendaraan: kendaraanSchema,
  kendaraanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kendaraan' },
  createdAt: { type: Date, default: Date.now },
  platNomor: String,
  jenisKendaraan: String,
}, { _id: false });

// Schema utama catatan parkir
const parkingRecordsSchema = new mongoose.Schema({
  kendaraan: kendaraanSchema,
  waktuMasuk: { type: Date, default: Date.now },
  waktuKeluar: { type: Date },
  biaya: { type: Number, default: 0 },

  kendaraanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kendaraan', required: true },
});

module.exports = mongoose.model('ParkingRecord', parkingRecordsSchema);