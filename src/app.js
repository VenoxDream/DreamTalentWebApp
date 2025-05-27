import { HomePage } from './pages/home.js';
import { LoginPage } from './pages/login.js';
import { RegisterPage } from './pages/register.js';

export function initApp() {
  const app = document.getElementById('app');
  const path = window.location.hash;

  switch (path) {
    case '#/login':
      app.innerHTML = LoginPage();
      break;
    case '#/register':
      app.innerHTML = RegisterPage();
      break;
    default:
      app.innerHTML = HomePage();
      break;
  }
}
