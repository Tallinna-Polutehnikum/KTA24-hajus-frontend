const express = require('express');
const cors = require('cors');
const { registerUser, loginUser } = require('./kasutajad.js');


const app = express();


app.use(express.json());
app.use(cors()); 

app.post('/api/auth/register', async (req, res) => {
  try {
    const result = await registerUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});

app.post('/api/auth/login', async (req, res) => {
  try {
    const result = await loginUser(req.body);
    res.json(result);
  } catch (err) {
    res.status(400).json({ msg: err.message });
  }
});


const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Auth server running on http://localhost:${PORT}`);
});

