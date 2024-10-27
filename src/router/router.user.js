const express = require('express');
const { allUser, deleteUser, loginUser, createUser } = require('../controllers/controller.user.js');

const router = express.Router(); 

router.get('/', allUser);
router.delete('/:id', deleteUser);
router.post('/', loginUser);
router.post('/create', createUser);

module.exports = router;

