const express = require('express');
const router = express.Router();
const subController = require('../controllers/subscriber');

router.post('/', subController.create)
router.get('/', subController.index)

module.exports = router;