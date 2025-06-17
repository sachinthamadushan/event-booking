const express = require('express');
const router = express.Router();
const userController = require('../controller/authController');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
module.exports = router;