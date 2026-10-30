
const mongoose = require('mongoose');

// Schema embedding untuk data kendaraan
const kendaraanSchema = new mongoose.Schema({
  jenisKendaraan: { type: String, required: [true, 'jenisKendaraan wajib diisi'], unique: true, trim: true },
  warna: { type: String, required: [true, 'warna wajib diisi'], trim: true },
});

module.exports = mongoose.model('Kendaraan', kendaraanSchema);