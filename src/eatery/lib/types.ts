export type Dish = {
  id: string;
  name: string;
  price: number;
  is_available: boolean;
  prep_time_mins: number;
  display_order: number;
  created_at: string;
};

export type EateryTable = {
  id: string;
  table_number: number;
  qr_token: string;
  created_at: string;
};

export type OrderItem = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

export type OrderStatus = 'pending' | 'confirmed' | 'preparing' | 'ready' | 'served';

export type Order = {
  id: string;
  table_id: string;
  table_number: number;
  items: OrderItem[];
  total: number;
  special_instructions: string | null;
  status: OrderStatus;
  estimated_mins: number | null;
  created_at: string;
};

export type CartItem = {
  dish: Dish;
  qty: number;
};
