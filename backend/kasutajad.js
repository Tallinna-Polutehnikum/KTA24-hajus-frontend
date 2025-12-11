const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// In-memory users array
const users = [];

// JWT secret
const JWT_SECRET = 'your_secret_key';

// Register a user
async function registerUser({ username, email, password }) {
  if (users.find(u => u.email === email)) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = { username, email, password: hashedPassword };
  users.push(newUser);

  return { msg: 'User registered successfully' };
}

// Login a user
async function loginUser({ email, password }) {
  const user = users.find(u => u.email === email);
  if (!user) throw new Error('User not found');

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) throw new Error('Invalid password');

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  return { token, msg: 'Login successful' };
}

module.exports = { registerUser, loginUser };
