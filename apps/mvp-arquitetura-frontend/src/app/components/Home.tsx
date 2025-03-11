// src/app/components/Home.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Container, Typography, Button, Box } from '@mui/material';

function Home() {
  const { user } = useAuth0();

  return (
    <Container maxWidth="sm">
      <Box sx={{ textAlign: 'center' }}>
        <Typography variant="h3" gutterBottom>
          Welcome to YourExpenses, {user?.name}
        </Typography>
        <Typography variant="h6">
          Gerencie seus gastos facilmente e mantenha o controle das suas
          finanças.
        </Typography>
        {/* Aqui você pode adicionar a lista de gastos ou outras funcionalidades */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => alert('Add expense logic here')}
        >
          Add Expense
        </Button>
      </Box>
    </Container>
  );
}

export default Home;
