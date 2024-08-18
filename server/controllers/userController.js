// server/controllers/userController.js
const User = require('../models/User');
const jwt = require('jsonwebtoken');

// Sign JWT
const signToken = (user) => {
  return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, {
    expiresIn: '1d',
  });
};

// Signup
exports.signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = new User({ name, email, password });
    await user.save();

    const token = signToken(user);
    res.status(201).json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(400).json({ message: 'Error creating account', error });
  }
};

// Login
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    const token = signToken(user);
    res.json({ token, user: { name: user.name, email: user.email } });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in', error });
  }
};




