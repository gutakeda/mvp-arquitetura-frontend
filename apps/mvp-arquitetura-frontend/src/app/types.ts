export interface Transaction {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  created_at: string;
}

export interface TransactionPayload {
  title: string;
  type: string;
  amount: number;
  category_id: string;
}

export interface Category {
  id: number;
  name: string;
}

export interface CategoryPayload {
  name: string;
}
