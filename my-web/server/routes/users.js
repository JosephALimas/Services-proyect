// routes/users.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersControllers');

router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);
router.put('/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);
router.put('/profile-picture', userController.updateProfilePicture);


module.exports = router;
