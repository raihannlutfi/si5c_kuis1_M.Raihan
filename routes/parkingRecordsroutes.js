const express = require('express');
const router = express.Router();
const parkingRecordsController = require('../controllers/parkingRecordsController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', parkingRecordsController.getAll);
router.get('/:id', parkingRecordsController.getById);
router.post('/', cekApiKey, parkingRecordsController.create);
router.put('/:id', cekApiKey, parkingRecordsController.update);
router.delete('/:id', cekApiKey, parkingRecordsController.remove);

module.exports = router;