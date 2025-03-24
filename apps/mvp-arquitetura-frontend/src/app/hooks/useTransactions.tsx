import { useState } from 'react';
import useAxios, { API_BASE_URL } from '../../utils/useAxios';
import { Category, Transaction, TransactionPayload } from '../types';

const useTransactions = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const axios = useAxios();

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/transactions`);
      setTransactions(response.data);
    } catch (error) {
      console.error('Error fetching transactions', error);
    }
  };

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`${API_BASE_URL}/categories`);
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories', error);
    }
  };

  const addTransaction = async (transaction: TransactionPayload) => {
    try {
      await axios.post(`${API_BASE_URL}/transaction`, transaction);
      fetchTransactions();
    } catch (error) {
      console.error('Error adding transaction', error);
    }
  };

  const deleteTransaction = async (id: number) => {
    try {
      await axios.delete(`${API_BASE_URL}/transaction/${id}`);
      setTransactions((prevTransactions) =>
        prevTransactions.filter((transaction) => transaction.id !== id)
      );
    } catch (error) {
      console.error('Error deleting transaction', error);
    }
  };

  return {
    transactions,
    fetchTransactions,
    categories,
    fetchCategories,
    addTransaction,
    deleteTransaction,
  };
};

export default useTransactions;
