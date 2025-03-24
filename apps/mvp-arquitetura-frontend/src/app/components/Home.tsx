import { useEffect, useState } from 'react';
import { Container, Typography, Grid2, Paper, Button } from '@mui/material';
import TransactionTable from '../components/TransactionTable';
import { useAuth0 } from '@auth0/auth0-react';
import AddTransactionModal from './AddTransactionModal';
import useTransactions from '../hooks/useTransactions';

const Home = () => {
  const { isAuthenticated } = useAuth0();
  const {
    transactions,
    fetchTransactions,
    addTransaction,
    deleteTransaction,
    categories,
    fetchCategories,
  } = useTransactions();

  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    if (isAuthenticated) {
      fetchTransactions();
      fetchCategories();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  return (
    <Container>
      <Grid2 container spacing={3} sx={{ marginTop: 3 }}>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Total Deposits</Typography>
            <Typography variant="h5">
              $
              {transactions
                .filter((t) => t.type === 'deposit')
                .reduce((sum, t) => sum + t.amount, 0)
                .toFixed(2)}
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Total Withdrawals</Typography>
            <Typography variant="h5">
              $
              {transactions
                .filter((t) => t.type === 'withdraw')
                .reduce((sum, t) => sum + t.amount, 0)
                .toFixed(2)}
            </Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 4 }}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6">Net Total</Typography>
            <Typography variant="h5">
              $
              {(
                transactions
                  .filter((t) => t.type === 'deposit')
                  .reduce((sum, t) => sum + t.amount, 0) -
                transactions
                  .filter((t) => t.type === 'withdraw')
                  .reduce((sum, t) => sum + t.amount, 0)
              ).toFixed(2)}
            </Typography>
          </Paper>
        </Grid2>
      </Grid2>

      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpenModal(true)}
        sx={{ marginBottom: 3, marginTop: 3 }}
      >
        Add Transaction
      </Button>

      <TransactionTable
        transactions={transactions}
        handleDeleteTransaction={deleteTransaction}
      />

      <AddTransactionModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onAddTransaction={addTransaction}
        categories={categories}
      />
    </Container>
  );
};

export default Home;
