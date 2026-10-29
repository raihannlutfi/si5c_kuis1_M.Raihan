// const express = require('express');
// const router = express.Router();
// const parkingRecordsController = require('../controllers/parkingRecordsController');
// const cekApiKey = require('../middlewares/cekApiKey');

// router.get('/', parkingRecordsController.getAll);
// router.get('/:id', parkingRecordsController.getById);
// router.post('/', cekApiKey, parkingRecordsController.create);
// router.put('/:id', cekApiKey, parkingRecordsController.update);
// router.delete('/:id', cekApiKey, parkingRecordsController.remove);

// module.exports = router;

const express = require('express');
const router = express.Router();
const c = require('../controllers/parkingRecordsController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', c.getAll);
router.get('/:id', c.getById);
router.post('/', cekApiKey, c.create);
router.put('/:id', cekApiKey, c.update);
router.delete('/:id', cekApiKey, c.remove);

module.exports = router;