import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart, cartTotal } from '../../lib/CartContext';
import { supabase } from '../../../supabase/client';
import { ArrowLeft, Plus, Minus, Trash2 } from 'lucide-react';

export function Cart() {
  const { state, dispatch } = useCart();
  const navigate = useNavigate();
  const [note, setNote] = useState('');
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState('');
  const total = cartTotal(state.items);

  const placeOrder = async () => {
    if (!state.tableId || !state.tableNumber || state.items.length === 0) return;
    setPlacing(true);
    setError('');

    const maxPrep = Math.max(...state.items.map(i => i.dish.prep_time_mins));

    const { data, error: err } = await supabase
      .from('eatery_orders')
      .insert({
        table_id: state.tableId,
        table_number: state.tableNumber,
        items: state.items.map(i => ({ id: i.dish.id, name: i.dish.name, price: i.dish.price, qty: i.qty })),
        total,
        special_instructions: note.trim() || null,
        status: 'pending',
        estimated_mins: maxPrep,
      })
      .select('id')
      .single();

    if (err || !data) {
      setError('Could not place order. Please try again.');
      setPlacing(false);
      return;
    }

    dispatch({ type: 'CLEAR' });
    navigate(`/order/confirm?id=${(data as { id: string }).id}`, { replace: true });
  };

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6 text-center">
        <div>
          <p className="text-4xl mb-4">🛒</p>
          <p className="text-gray-600 mb-4">Your cart is empty.</p>
          <button onClick={() => navigate('/order/menu')} className="text-orange-500 font-semibold">
            ← Back to menu
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      <div className="bg-white border-b border-gray-100 px-4 py-4 flex items-center gap-3 sticky top-0 z-10">
        <button onClick={() => navigate(-1)} className="p-1.5 rounded-lg hover:bg-gray-100 transition-colors">
          <ArrowLeft className="w-5 h-5 text-gray-600" />
        </button>
        <h1 className="font-bold text-gray-900">Your Order</h1>
      </div>

      <div className="p-4 space-y-3">
        {state.items.map(item => (
          <div key={item.dish.id} className="bg-white rounded-xl border border-gray-100 p-4 flex items-center gap-4">
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{item.dish.name}</p>
              <p className="text-sm text-orange-500">₹{item.dish.price} each</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch({ type: 'SET_QTY', dishId: item.dish.id, qty: item.qty - 1 })}
                className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center"
              >
                {item.qty === 1 ? <Trash2 className="w-3.5 h-3.5" /> : <Minus className="w-4 h-4" />}
              </button>
              <span className="w-6 text-center font-bold">{item.qty}</span>
              <button
                onClick={() => dispatch({ type: 'SET_QTY', dishId: item.dish.id, qty: item.qty + 1 })}
                className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
            <span className="w-16 text-right font-semibold text-gray-900">₹{item.dish.price * item.qty}</span>
          </div>
        ))}

        <div className="bg-white rounded-xl border border-gray-100 p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">Special instructions (optional)</label>
          <textarea
            rows={3}
            value={note}
            onChange={e => setNote(e.target.value)}
            placeholder="e.g. No spice, extra chutney…"
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm resize-none focus:outline-none focus:ring-2 focus:ring-orange-400"
          />
        </div>

        <div className="bg-white rounded-xl border border-gray-100 p-4 flex justify-between items-center">
          <span className="font-medium text-gray-700">Total</span>
          <span className="text-xl font-bold text-gray-900">₹{total}</span>
        </div>
      </div>

      {error && <p className="text-center text-sm text-red-500 px-4">{error}</p>}

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100">
        <button
          onClick={placeOrder}
          disabled={placing}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600 transition-colors shadow-md disabled:opacity-60 active:scale-[0.98]"
        >
          {placing ? 'Placing order…' : 'Place Order'}
        </button>
      </div>
    </div>
  );
}
