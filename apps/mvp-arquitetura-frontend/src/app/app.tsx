// Uncomment this line to use CSS modules
// import styles from './app.module.scss';
import { useAuth0 } from '@auth0/auth0-react';

export function App() {
  // UseAuth0 fornece métodos para login, logout, etc.
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();

  return (
    <div>
      {/* <NxWelcome title="mvp-arquitetura-frontend" /> */}

      {/* Se o usuário está autenticado, exibe uma mensagem e botão de logout */}
      {isAuthenticated ? (
        <div>
          <h2>Welcome, {user?.name}</h2>
          <button onClick={() => logout({ returnTo: window.location.origin })}>
            Log Out
          </button>
        </div>
      ) : (
        // Se não autenticado, exibe um botão de login
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )}
    </div>
  );
}

export default App;
