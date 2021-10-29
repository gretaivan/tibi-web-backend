const express = require('express');
const router = express.Router();

const subController = require('../controllers/subscribers');

router.post('/', subController.create)
router.get('/:id', subController.find)

module.exports = router;