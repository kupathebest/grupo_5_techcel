const express = require('express');
const router = express.Router();
const {users} = require('../../controllers/admin/usersController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');


/* admin/users */
router.get('/',adminUserCheck,users);

module.exports = router;