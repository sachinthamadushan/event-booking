const express = require('express');
const router = express.Router();
const eventController = require
('../controller/eventController');

router.post('/create',eventController.createEvent);
router.get('/all',eventController.getAllEvents);

module.exports = router;

