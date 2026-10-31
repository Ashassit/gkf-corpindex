import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { supabase } from '../../../supabase/client';
import { useCart } from '../../lib/CartContext';
import type { EateryTable } from '../../lib/types';
import { Utensils } from 'lucide-react';

export function Landing() {
  const [params] = useSearchParams();
  const token = params.get('t');
  const navigate = useNavigate();
  const { dispatch } = useCart();
  const [table, setTable] = useState<EateryTable | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) { setError('Invalid QR code. Please scan the QR at your table.'); setLoading(false); return; }

    supabase
      .from('eatery_tables')
      .select('*')
      .eq('qr_token', token)
      .single()
      .then(({ data, error: err }) => {
        if (err || !data) { setError('Table not found. Please ask a staff member for help.'); }
        else {
          setTable(data as EateryTable);
          dispatch({ type: 'SET_TABLE', token: (data as EateryTable).qr_token, number: (data as EateryTable).table_number, id: (data as EateryTable).id });
        }
        setLoading(false);
      });
  }, [token, dispatch]);

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50">
      <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center bg-orange-50 p-6 text-center">
      <div>
        <p className="text-4xl mb-4">⚠️</p>
        <p className="text-gray-700">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-amber-50 flex items-center justify-center p-6">
      <div className="text-center max-w-xs">
        <div className="w-20 h-20 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
          <Utensils className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">GKF Eatery</h1>
        <p className="text-gray-500 mb-2">Welcome!</p>
        <div className="inline-block bg-orange-100 text-orange-700 font-bold px-4 py-1.5 rounded-full text-sm mb-8">
          Table {table?.table_number}
        </div>
        <button
          onClick={() => navigate('/order/menu')}
          className="w-full bg-orange-500 text-white py-4 rounded-2xl font-semibold text-lg hover:bg-orange-600 transition-colors shadow-md active:scale-[0.98]"
        >
          View Menu →
        </button>
      </div>
    </div>
  );
}
