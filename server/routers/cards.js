const express = require('express');
const Controller = require('../controllers');

const router = express.Router();

router.get('/api/cards', Controller.cards.getCards);

module.exports = router;