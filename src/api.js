const BASE_URL = 'http://localhost:5000/api/auth'; 

export async function registerUser(data) {
  try {
    const res = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error('Registration error:', err);
    return { msg: 'Server error' };
  }
}

export async function loginUser(data) {
  try {
    const res = await fetch(`${BASE_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error('Login error:', err);
    return { msg: 'Server error' };
  }
}
