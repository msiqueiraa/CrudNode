const express = require('express');
const router = express.Router();
const userController = require('../api/controller/user.controller');

router.post('/user', userController.createUser);
router.get('/user', userController.readOneUser);
router.put('/user', userController.updateUser);
router.delete('/user', userController.deleteUser);

module.exports = router;
