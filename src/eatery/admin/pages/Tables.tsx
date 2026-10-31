import { useState, useEffect } from 'react';
import { KitchenLayout } from '../KitchenLayout';
import { supabase } from '../../../supabase/client';
import type { EateryTable } from '../../lib/types';
import QRCode from 'react-qr-code';
import { Plus, Trash2 } from 'lucide-react';

const BASE_URL = 'https://gkfmadurai.in/order';

export function Tables() {
  const [tables, setTables] = useState<EateryTable[]>([]);
  const [loading, setLoading] = useState(true);
  const [adding, setAdding] = useState(false);
  const [newNumber, setNewNumber] = useState('');

  const fetchTables = async () => {
    const { data } = await supabase
      .from('eatery_tables')
      .select('*')
      .order('table_number');
    if (data) setTables(data as EateryTable[]);
    setLoading(false);
  };

  useEffect(() => { fetchTables(); }, []);

  const addTable = async () => {
    const num = parseInt(newNumber);
    if (!num || num < 1) return;
    setAdding(true);
    await supabase.from('eatery_tables').insert({ table_number: num });
    setNewNumber('');
    await fetchTables();
    setAdding(false);
  };

  const deleteTable = async (id: string) => {
    if (!confirm('Delete this table?')) return;
    await supabase.from('eatery_tables').delete().eq('id', id);
    await fetchTables();
  };

  return (
    <KitchenLayout>
      <h2 className="text-xl font-bold text-gray-900 mb-4">Tables & QR Codes</h2>

      {/* Add table */}
      <div className="flex gap-2 mb-6 max-w-xs">
        <input
          type="number"
          min={1}
          placeholder="Table number"
          value={newNumber}
          onChange={e => setNewNumber(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && addTable()}
          className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          onClick={addTable}
          disabled={adding}
          className="flex items-center gap-1 bg-orange-500 text-white px-3 py-2 rounded-lg text-sm hover:bg-orange-600 transition-colors disabled:opacity-60"
        >
          <Plus className="w-4 h-4" />
          Add
        </button>
      </div>

      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-8 h-8 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {tables.map(table => (
            <div key={table.id} className="bg-white rounded-xl border border-gray-200 p-4 text-center relative group">
              <button
                onClick={() => deleteTable(table.id)}
                className="absolute top-2 right-2 p-1 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <p className="font-bold text-gray-900 mb-3">Table {table.table_number}</p>
              <div className="flex justify-center mb-3">
                <div className="p-2 bg-white border border-gray-100 rounded-lg inline-block">
                  <QRCode
                    value={`${BASE_URL}?t=${table.qr_token}`}
                    size={100}
                    bgColor="#ffffff"
                    fgColor="#111827"
                    level="M"
                  />
                </div>
              </div>
              <p className="text-xs text-gray-400 break-all">?t={table.qr_token.slice(0, 8)}…</p>
            </div>
          ))}
        </div>
      )}
    </KitchenLayout>
  );
}
