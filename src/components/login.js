import { html } from '../utils.js';
import { loginUser, registerUser } from '../api.js';

export default function LoginPage() {
  const form = html`
    <div class="login-page">
      <h2>Login</h2>
      <form id="loginForm">
        <label>Email:</label>
        <input type="email" name="email" required />
        <label>Password:</label>
        <input type="password" name="password" required />
        <button type="submit">Login</button>
        <p id="loginError" style="color:red"></p>
      </form>
    </div>
  `;

  const loginError = form.querySelector('#loginError');

  form.querySelector('#loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = form.email.value;
    const password = form.password.value;

    const data = await loginUser({ email, password });

    if (data.token) {
      localStorage.setItem('token', data.token);
      alert('Login successful!');
      window.location.hash = '#/home';
    } else {
      loginError.textContent = data.msg || 'Login failed';
    }
  });

  return form;
}
