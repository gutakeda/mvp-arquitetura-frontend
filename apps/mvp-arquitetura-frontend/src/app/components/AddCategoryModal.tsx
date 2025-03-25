import { useState } from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Button,
  TextField,
} from '@mui/material';
import { CategoryPayload } from '../types';

interface AddCategoryModalProps {
  open: boolean;
  onClose: () => void;
  onAddCategory: (category: CategoryPayload) => void;
}

const AddCategoryModal = ({
  open,
  onClose,
  onAddCategory,
}: AddCategoryModalProps) => {
  const [categoryName, setCategoryName] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(event.target.value);
  };

  const handleSubmit = async () => {
    if (categoryName) {
      onAddCategory({ name: categoryName });
      onClose();
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add Category</DialogTitle>
      <DialogContent>
        <TextField
          label="Category Name"
          value={categoryName}
          onChange={handleChange}
          fullWidth
          required
          sx={{ marginBottom: 2, marginTop: 2 }}
        />
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

export default AddCategoryModal;
