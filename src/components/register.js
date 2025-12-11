import { html } from '../utils.js';
import { registerUser } from '../api.js';

export default function RegisterPage() {
  const form = html`
    <form id="registerForm">
      <h2>Register</h2>
      <input type="text" name="username" placeholder="Username" required />
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit">Register</button>
      <p id="error" style="color:red"></p>
    </form>
  `;

  const errorEl = form.querySelector('#error');

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const data = {
      username: form.username.value,
      email: form.email.value,
      password: form.password.value
    };

    const res = await registerUser(data);
    if (res.msg === 'User registered successfully') {
      alert('Registration successful!');
      window.location.href = '/login'; // redirect to login
    } else {
      errorEl.textContent = res.msg || 'Registration failed';
    }
  });

  return form;
}
