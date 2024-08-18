// server/routes/userRoutes.js
const express = require('express');
const { signup, login , addInterestTag } = require('../controllers/userController');
const authenticateUser = require('../middleware/authMiddleware');

const router = express.Router();

// Public routes
router.post('/signup', signup);
router.post('/login', login);


// Protected routes
router.get('/profile', authenticateUser, (req, res) => {
  res.send(`Welcome ${req.user.email}`);
});

module.exports = router;
