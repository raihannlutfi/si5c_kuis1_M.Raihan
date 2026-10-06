let parkingRecords = [
  {
    id: 1,
    platNomor: 'BG 1234 AA',
    jenisKendaraan: 'motor',
    waktuMasuk: '2026-09-24T08:15:00+07:00',
    waktuKeluar: null,
    biaya: 0
  },
  {
    id: 2,
    platNomor: 'BG 5678 BB',
    jenisKendaraan: 'mobil',
    waktuMasuk: '2026-09-24T09:00:00+07:00',
    waktuKeluar: null,
    biaya: 0
  }
];
let nextId = 3;

function getAll(jenisKendaraan) {
  if (jenisKendaraan) return parkingRecords.filter((m) => m.jenisKendaraan === jenisKendaraan);
  return parkingRecords;
}

function getById(id) {
  return parkingRecords.find((m) => m.id === id);
}

function create(data) {
  const baru = { id: nextId++, ...data };
  parkingRecords.push(baru);
  return baru;
}

function update(id, data) {
  const index = parkingRecords.findIndex((m) => m.id === id);
  if (index === -1) return null;
  parkingRecords[index] = { ...parkingRecords[index], ...data, id };
  return parkingRecords[index];
}

function remove(id) {
  const index = parkingRecords.findIndex((m) => m.id === id);
  if (index === -1) return false;
  parkingRecords.splice(index, 1);
  return true;
}

module.exports = { getAll, getById, create, update, remove };