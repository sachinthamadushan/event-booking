const express = require('express');
const router = express.Router();
const registrationController = require('../controller/registrationController');
const auth = require('../middleware/auth');

router.post('/create',auth, registrationController.createRegistration);
router.get('/all',registrationController.getAllRegistrations)


module.exports=router;