const express = require('express');
const router = express.Router();
const eventController = require
('../controller/eventController');

router.post('/create',eventController.createEvent);
router.get('/all',eventController.getAllEvents); 
router.put('/update/:id',eventController.updateEvent);
router.delete('/delete/:id',eventController.deleteEvent);

module.exports = router;

