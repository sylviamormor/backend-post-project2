const express = require('express');
const router = express.Router();
const { checkToken } = require('../middlewares/auth.middlewares');
const { checkTaskInput } = require('../middlewares/validation.middleware');
const {
    createTask,
    fetchAllTasks,
    fetchTaskByUser,
    updatedTask,
} = require('../controllers/task.controllers');
const { checkIfIdExists } = require('../middlewares/user.middlewares');
const { checkValidTask } = require('../middlewares/task.middlewares');

router.post('/', checkToken, checkTaskInput, createTask);
router.get('/', fetchAllTasks);
router.get('/user/:id', checkIfIdExists, fetchTaskByUser);
router.put('/:id', checkToken, checkTaskInput, checkValidTask, updatedTask);

module.exports = router;