import { createContext, useContext, useReducer } from 'react';
import type { ReactNode, Dispatch } from 'react';
import type { CartItem, Dish } from './types';

type CartState = {
  items: CartItem[];
  tableToken: string | null;
  tableNumber: number | null;
  tableId: string | null;
};

type CartAction =
  | { type: 'SET_TABLE'; token: string; number: number; id: string }
  | { type: 'ADD'; dish: Dish }
  | { type: 'REMOVE'; dishId: string }
  | { type: 'SET_QTY'; dishId: string; qty: number }
  | { type: 'CLEAR' };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'SET_TABLE':
      return { ...state, tableToken: action.token, tableNumber: action.number, tableId: action.id };
    case 'ADD': {
      const hit = state.items.find(i => i.dish.id === action.dish.id);
      if (hit) return { ...state, items: state.items.map(i => i.dish.id === action.dish.id ? { ...i, qty: i.qty + 1 } : i) };
      return { ...state, items: [...state.items, { dish: action.dish, qty: 1 }] };
    }
    case 'REMOVE':
      return { ...state, items: state.items.filter(i => i.dish.id !== action.dishId) };
    case 'SET_QTY':
      if (action.qty <= 0) return { ...state, items: state.items.filter(i => i.dish.id !== action.dishId) };
      return { ...state, items: state.items.map(i => i.dish.id === action.dishId ? { ...i, qty: action.qty } : i) };
    case 'CLEAR':
      return { ...state, items: [] };
    default:
      return state;
  }
}

const CartContext = createContext<{ state: CartState; dispatch: Dispatch<CartAction> } | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, {
    items: [],
    tableToken: null,
    tableNumber: null,
    tableId: null,
  });
  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be inside CartProvider');
  return ctx;
}

export function cartTotal(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.dish.price * i.qty, 0);
}

export function cartCount(items: CartItem[]) {
  return items.reduce((sum, i) => sum + i.qty, 0);
}
