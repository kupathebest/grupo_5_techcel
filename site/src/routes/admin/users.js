const express = require('express');
const router = express.Router();
const {users, destroy,update} = require('../../controllers/admin/usersController');
 
const adminUserCheck = require('../../middlewares/adminUserCheck');


/* admin/users */
router.get('/',adminUserCheck,users);
router.put('/update/:id', update)
router.delete('/delete/:id',destroy);

module.exports = router;