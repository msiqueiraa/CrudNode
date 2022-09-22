const express = require('express');
const router = express.Router();
const userController = require('../api/controller/userController');

router.post('/user', userController.store);
router.get('/user', userController.read);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

module.exports = router;