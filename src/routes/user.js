const express = require('express');
const router = express.Router();
const {
  createUser,
  signInUser,
  fetchAllUsers,
  fetchUserById,
} = require('../controllers/users.controller');
const { checkIfIdExists } = require('../middlewares/user.middleware');

router.post('/signup', createUser);
router.post('/login', signInUser);
router.get('/', fetchAllUsers);
router.get('/:id', checkIfIdExists, fetchUserById);

module.exports = router;