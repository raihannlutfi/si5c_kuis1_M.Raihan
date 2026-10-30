const mongoose = require('mongoose');

//schema untuk embedding data kendaraan
const kendaraanSchema = new mongoose.Schema({
  kendaraanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kendaraan' },
  jenisKendaraan: String,
  warna: String,
}, { _id: false });

// Schema utama catatan parkir
const parkingRecordsSchema = new mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  platNomor: String,
  waktuMasuk: { type: Date, default: Date.now },
  waktuKeluar: { type: Date },
  biaya: { type: Number, default: 0 },
  kendaraan: {  type: kendaraanSchema, required: false },
  kendaraanId: { type: mongoose.Schema.Types.ObjectId, ref: 'Kendaraan' },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('ParkingRecord', parkingRecordsSchema);