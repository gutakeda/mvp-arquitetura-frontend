import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Radio,
  RadioGroup,
  FormControlLabel,
} from '@mui/material';
import { Category, TransactionPayload } from '../types';

interface AddTransactionModalProps {
  open: boolean;
  onClose: () => void;
  onAddTransaction: (transaction: TransactionPayload) => void;
  categories: Category[];
}

const AddTransactionModal = ({
  open,
  onClose,
  onAddTransaction,
  categories,
}: AddTransactionModalProps) => {
  const [newTransaction, setNewTransaction] = useState({
    title: '',
    amount: '',
    type: 'deposit',
    category_id: '',
  });

  const handleChange = (name: string, value: string) => {
    setNewTransaction((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    if (
      newTransaction.title &&
      newTransaction.amount &&
      newTransaction.category_id
    ) {
      const transactionData = {
        ...newTransaction,
        amount: parseFloat(newTransaction.amount),
      };
      onAddTransaction(transactionData);
      setNewTransaction({
        title: '',
        amount: '',
        type: 'deposit',
        category_id: '',
      });
      onClose();
    } else {
      alert('Please fill out all fields');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Transaction</DialogTitle>
      <DialogContent>
        <form id="transactionForm">
          <TextField
            label="Title"
            name="title"
            value={newTransaction.title}
            onChange={({ target }) => handleChange(target.name, target.value)}
            fullWidth
            required
            sx={{ marginBottom: 2, marginTop: 2 }}
          />

          <TextField
            label="Amount"
            name="amount"
            value={newTransaction.amount}
            onChange={({ target }) => handleChange(target.name, target.value)}
            fullWidth
            required
            type="number"
            sx={{ marginBottom: 2 }}
          />

          <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
            <RadioGroup
              row
              name="type"
              value={newTransaction.type}
              onChange={({ target }) => handleChange(target.name, target.value)}
            >
              <FormControlLabel
                value="deposit"
                control={<Radio />}
                label="Deposit"
              />
              <FormControlLabel
                value="withdraw"
                control={<Radio />}
                label="Withdraw"
              />
            </RadioGroup>
          </FormControl>

          <FormControl fullWidth sx={{ marginBottom: 2 }}>
            <InputLabel>Category</InputLabel>
            <Select
              name="category_id"
              value={newTransaction.category_id}
              onChange={({ target }) => handleChange(target.name, target.value)}
              label="Category"
              required
            >
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddTransactionModal;
