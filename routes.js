const express = require('express');

const router = express.Router();

const userController = require('./controllers/userController');
const todoController = require('./controllers/todoController');

router.get('/users', userController.index);
router.get('/todos', todoController.index);

module.exports = router;
