// src/app/App.tsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes';
import {
  CssBaseline,
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
} from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';

export function App() {
  const { logout, isAuthenticated } = useAuth0();

  const handleLogout = () => {
    logout({ logoutParams: { returnTo: window.location.origin + '/login' } });
  };

  return (
    <Router>
      <CssBaseline />
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            YourExpenses
          </Typography>
          {isAuthenticated && (
            <Button color="inherit" onClick={handleLogout}>
              Log Out
            </Button>
          )}
        </Toolbar>
      </AppBar>

      <Container>
        <AppRoutes />
      </Container>
    </Router>
  );
}

export default App;
