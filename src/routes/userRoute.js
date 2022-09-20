const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');

router.post('/registration', userController.store);
router.get('/searchUser', userController.read);
router.put('/updateUser', userController.updateUser);
router.delete('/deleteUser', userController.deleteUser);

module.exports = router;