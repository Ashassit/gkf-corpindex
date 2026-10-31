import { useEffect } from 'react';
import { CheckCircle, XCircle, X } from './Icons';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

export function Toast({ message, type, onClose, duration = 5000 }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5">
      <div className={`flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl max-w-md ${
        type === 'success' 
          ? 'bg-green-50 border-2 border-green-200' 
          : 'bg-red-50 border-2 border-red-200'
      }`}>
        {type === 'success' ? (
          <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0" />
        ) : (
          <XCircle className="w-6 h-6 text-red-600 flex-shrink-0" />
        )}
        <p className={`flex-1 ${
          type === 'success' ? 'text-green-900' : 'text-red-900'
        }`}>
          {message}
        </p>
        <button
          onClick={onClose}
          className={`${
            type === 'success' ? 'text-green-600 hover:text-green-700' : 'text-red-600 hover:text-red-700'
          } transition-colors`}
        >
          <X className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
