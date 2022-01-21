const express = require('express');
const router = express.Router();

const subController = require('../controllers/Subscriber');

router.post('/', subController.create)
router.get('/', subController.all)

module.exports = router;