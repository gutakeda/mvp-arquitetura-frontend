import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Paper,
} from '@mui/material';
import { Delete } from '@mui/icons-material';
import { Transaction } from '../types';

interface TransactionTableProps {
  transactions: Transaction[];
  handleDeleteTransaction: (id: number) => void;
}

const TransactionTable = ({
  transactions,
  handleDeleteTransaction,
}: TransactionTableProps) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Title</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.id}</TableCell>
              <TableCell>{transaction.title}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell>
                {new Date(transaction.created_at).toLocaleString()}
              </TableCell>
              <TableCell>
                <IconButton
                  onClick={() => handleDeleteTransaction(transaction.id)}
                >
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TransactionTable;
