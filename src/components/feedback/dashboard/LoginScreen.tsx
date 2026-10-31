import { useState } from 'react';

interface LoginScreenProps {
  onLogin: (email: string, password: string) => Promise<void>;
  error: string | null;
}

export function LoginScreen({ onLogin, error }: LoginScreenProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPw, setShowPw] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await onLogin(email, password);
    setLoading(false);
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: 'linear-gradient(160deg, #1B3A5C 0%, #0d2a46 55%, #091d33 100%)' }}
    >
      <div className="w-full max-w-sm">
        {/* Brand */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-[#E8A020] rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-xl shadow-amber-900/30">
            <span className="text-3xl">📊</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Staff Dashboard</h1>
          <p className="text-blue-300 text-sm mt-1">Grace Kennett Foundation</p>
        </div>

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-blue-200 mb-2">Email Address</label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="staff@gkfmadurai.in"
                className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-sm text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020]/50 transition-all"
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-blue-200 mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPw ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 pr-11 text-sm text-white placeholder-blue-400/60 focus:outline-none focus:ring-2 focus:ring-[#E8A020]/50 focus:border-[#E8A020]/50 transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(v => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-200 transition-colors text-base leading-none"
                  aria-label="Toggle password visibility"
                >
                  {showPw ? '🙈' : '👁'}
                </button>
              </div>
            </div>

            {error && (
              <div className="flex items-center gap-2.5 bg-red-500/20 border border-red-400/30 rounded-xl p-3">
                <span className="text-red-400 shrink-0">⚠</span>
                <p className="text-xs text-red-300 leading-relaxed">{error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-[#E8A020] hover:bg-amber-500 text-white rounded-xl text-sm font-bold shadow-lg shadow-amber-900/30 transition-all disabled:opacity-60 active:scale-95"
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Signing in…
                </span>
              ) : (
                'Sign In →'
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-blue-600 text-xs mt-6">
          Grace Kennett Foundation © 2025
        </p>
      </div>
    </div>
  );
}
