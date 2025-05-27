export function LoginForm() {
  return `
    <form id="loginForm">
      <h2>Login</h2>
      <input type="email" name="email" placeholder="E-Mail" required />
      <input type="password" name="password" placeholder="Passwort" required />
      <button type="submit">Einloggen</button>
    </form>
  `;
}
