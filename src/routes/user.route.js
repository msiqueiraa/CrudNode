const express = require('express');
const router = express.Router();
const userController = require('../api/controller/user.controller');

router.post('/user', userController.create);
router.get('/user', userController.readOne);
router.put('/user', userController.update);
router.delete('/user', userController.remove);

module.exports = router;
