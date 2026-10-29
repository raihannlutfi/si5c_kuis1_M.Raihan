
const mongoose = require('mongoose');

// Schema embedding untuk data kendaraan
const kendaraanSchema = new mongoose.Schema({
  platNomor: String,
  jenisKendaraan: String
}, { _id: false });
