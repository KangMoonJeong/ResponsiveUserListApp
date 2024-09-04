const express = require('express');
const { allUsers, randomUsers } = require('../controllers/userController');

const router = express.Router();

router.get('/', allUsers);
router.get('/random', randomUsers);


module.exports = router;
