import { useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home');
    }
  }, [isAuthenticated, navigate]);

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          marginTop: 8,
        }}
      >
        <Typography variant="h5">Sign In with Auth0</Typography>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => loginWithRedirect()}
          sx={{ marginTop: 2 }}
        >
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default Login;
