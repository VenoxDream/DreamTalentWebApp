export function RegisterForm() {
  return `
    <form id="registerForm">
      <h2>Registrieren</h2>
      <input type="text" name="username" placeholder="Name" required />
      <input type="file" name="profilePic" accept="image/*" />
      <input type="email" name="email" placeholder="E-Mail" required />
      <input type="password" name="password" placeholder="Passwort" required />
      <button type="submit">Konto erstellen</button>
    </form>
  `;
}
