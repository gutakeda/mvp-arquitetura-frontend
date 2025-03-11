// src/app/components/Login.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Box, Button, Container, Typography } from '@mui/material';

function Login() {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          //height: '100vh',
        }}
      >
        <Typography variant="h3" gutterBottom>
          Welcome to YourExpenses
        </Typography>
        <Typography variant="h6" paragraph>
          Please log in to manage your expenses.
        </Typography>
        {/* Exibe o botão de login se o usuário não estiver autenticado */}
        {!isAuthenticated ? (
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginWithRedirect()}
          >
            Log In
          </Button>
        ) : (
          <Typography variant="h6">Welcome, {user?.name}</Typography>
        )}
      </Box>
    </Container>
  );
}

export default Login;
