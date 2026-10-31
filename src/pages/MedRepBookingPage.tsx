import { useState, useEffect } from 'react'
import { supabase } from '../supabase/client'
import type { BookingFormData } from '../types/appointment'

interface BookedResult {
  serial_no: number
  rep_name: string
  company_name: string
  mobile_no: string
  appointment_date: string
}

function isWeekend(dateStr: string): boolean {
  const [y, m, d] = dateStr.split('-').map(Number)
  const day = new Date(y, m - 1, d).getDay()
  return day === 0 || day === 6
}

const INPUT = 'w-full bg-[#111] border border-white/[0.12] rounded-lg px-3 py-2 text-sm text-white placeholder-white/35 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition'

export function MedRepBookingPage() {
  const [form, setForm] = useState<BookingFormData>({
    rep_name: '', company_name: '', mobile_no: '', appointment_date: '',
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [confirmed, setConfirmed] = useState<BookedResult | null>(null)
  const [slotsRemaining, setSlotsRemaining] = useState<number | null>(null)
  const [checkingSlots, setCheckingSlots] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    if (!form.appointment_date) { setSlotsRemaining(null); return }
    let cancelled = false
    setCheckingSlots(true)
    supabase
      .rpc('get_available_slots', { target_date: form.appointment_date })
      .then(({ data }) => {
        if (!cancelled) {
          setSlotsRemaining(typeof data === 'number' ? data : null)
          setCheckingSlots(false)
        }
      })
    return () => { cancelled = true }
  }, [form.appointment_date])

  function handleDateChange(value: string) {
    if (value && isWeekend(value)) {
      setError('Weekends are not working days. Please select Monday – Friday.')
      setForm(f => ({ ...f, appointment_date: '' }))
      setSlotsRemaining(null)
    } else {
      setError(null)
      setForm(f => ({ ...f, appointment_date: value }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    setError(null)

    const { data, error: rpcError } = await supabase.rpc('book_appointment', {
      p_rep_name: form.rep_name.trim(),
      p_company_name: form.company_name.trim(),
      p_mobile_no: form.mobile_no.trim(),
      p_appointment_date: form.appointment_date,
    })

    if (rpcError) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
      return
    }

    const result = data as { status: string; serial_no?: number; rep_name?: string; company_name?: string; mobile_no?: string; appointment_date?: string }

    if (result.status === 'slot_full') {
      setSlotsRemaining(0)
      setError('All slots filled for this date. Please choose another day.')
    } else if (result.status === 'duplicate') {
      setError("You've already booked an appointment for this date.")
    } else if (result.status === 'success') {
      setConfirmed({
        serial_no: result.serial_no!,
        rep_name: result.rep_name!,
        company_name: result.company_name!,
        mobile_no: result.mobile_no!,
        appointment_date: result.appointment_date!,
      })
    }

    setLoading(false)
  }

  function resetForm() {
    setConfirmed(null)
    setError(null)
    setForm({ rep_name: '', company_name: '', mobile_no: '', appointment_date: '' })
    setSlotsRemaining(null)
  }

  /* ── Confirmation screen ── */
  if (confirmed) {
    const [y, m, d] = confirmed.appointment_date.split('-')
    const displayDate = `${d}-${m}-${y}`
    return (
      <div className="py-16 px-4 m-10 flex flex-col items-center">
        <div className="w-full max-w-sm">
          <div className="flex flex-col items-center mb-7">
            <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
              style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 0 36px rgba(249,115,22,0.45)' }}>
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-white">Appointment Confirmed</h2>
            <p className="text-white/55 text-sm mt-1">Your slot is reserved</p>
          </div>

          <div className="rounded-xl border border-white/[0.12] overflow-hidden" style={{ background: '#141414' }}>
            {/* Slot highlight */}
            <div className="px-5 py-4 flex items-center justify-between border-b border-white/[0.08]"
              style={{ background: 'linear-gradient(90deg,rgba(249,115,22,0.18) 0%,transparent 100%)' }}>
              <span className="text-white/65 text-xs font-semibold uppercase tracking-widest">Slot No.</span>
              <span className="text-2xl font-black text-orange-400">#{confirmed.serial_no}</span>
            </div>
            <div className="px-5 py-4 space-y-3">
              {[
                ['Name', confirmed.rep_name],
                ['Company', confirmed.company_name],
                ['Date', displayDate],
                ['Time', '13:01'],
                ['Mobile', confirmed.mobile_no],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between items-center gap-4">
                  <span className="text-white/50 text-sm shrink-0">{label}</span>
                  <span className="text-white text-sm font-medium text-right">{value}</span>
                </div>
              ))}
            </div>
            <div className="px-5 py-3 border-t border-white/[0.08] bg-white/[0.02]">
              <p className="text-white/45 text-xs text-center">Please show this at reception on time.</p>
            </div>
          </div>

          <button onClick={resetForm}
            className="w-full mt-3 py-2.5 rounded-xl text-sm font-medium text-orange-400 border border-orange-500/25 hover:border-orange-500/50 hover:bg-orange-500/5 transition-all">
            Book another appointment →
          </button>
        </div>
      </div>
    )
  }

  /* ── Booking form ── */
  return (
    <div className="relative py-12 m-10 px-4 flex flex-col items-center overflow-hidden">
      {/* subtle glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[260px] rounded-full"
        style={{ background: 'radial-gradient(ellipse, rgba(249,115,22,0.09) 0%, transparent 70%)' }} />

      <div className="relative w-full max-w-sm">

        {/* Card */}
        <div className="rounded-2xl border border-white/[0.12] overflow-hidden" style={{ background: '#141414' }}>

          {/* Card header */}
          <div className="px-6 pt-6 pb-5 border-b border-white/[0.08]">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'linear-gradient(135deg,#f97316,#ea580c)', boxShadow: '0 0 18px rgba(249,115,22,0.4)' }}>
                <svg className="w-4.5 h-4.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <div>
                <h1 className="text-base font-bold text-white leading-tight">Medical Rep Appointment</h1>
                <p className="text-white/50 text-xs mt-0.5">GKF Hospital, Madurai</p>
              </div>
            </div>

            {/* Info chips */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-orange-300 bg-orange-500/10 border border-orange-500/20 rounded-full px-3 py-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                Mon – Fri only
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                13:01 fixed
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/60 bg-white/[0.06] border border-white/10 rounded-full px-3 py-1">
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                20 slots / day
              </span>
            </div>
          </div>

          {/* Form body */}
          <div className="px-6 py-5">
            {error && (
              <div className="flex items-start gap-2 rounded-lg px-3 py-2.5 mb-4 border border-red-500/20 bg-red-500/[0.08] text-red-400 text-xs leading-relaxed">
                <svg className="w-3.5 h-3.5 mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                </svg>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Date */}
              <F label="Date">
                <input
                  required type="date" min={today}
                  className={INPUT + ' [color-scheme:dark]'}
                  value={form.appointment_date}
                  onChange={e => handleDateChange(e.target.value)}
                />
                {form.appointment_date && (
                  <p className="mt-1 text-xs">
                    {checkingSlots
                      ? <span className="text-white/50">Checking…</span>
                      : slotsRemaining === null ? null
                      : slotsRemaining === 0
                        ? <span className="text-red-400">Fully booked — try another date</span>
                        : slotsRemaining <= 5
                          ? <span className="text-orange-400">{slotsRemaining} of 20 slots left</span>
                          : <span className="text-emerald-400">{slotsRemaining} of 20 slots available</span>
                    }
                  </p>
                )}
              </F>

              {/* Name + Company side by side on sm+ */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <F label="Full Name">
                  <input required placeholder="Your name" className={INPUT}
                    value={form.rep_name}
                    onChange={e => setForm(f => ({ ...f, rep_name: e.target.value }))} />
                </F>
                <F label="Company">
                  <input required placeholder="Company name" className={INPUT}
                    value={form.company_name}
                    onChange={e => setForm(f => ({ ...f, company_name: e.target.value }))} />
                </F>
              </div>

              {/* Mobile */}
              <F label="Mobile Number">
                <input required type="tel" pattern="[0-9]{10}" maxLength={10} inputMode="numeric"
                  placeholder="10-digit number" className={INPUT}
                  value={form.mobile_no}
                  onChange={e => setForm(f => ({ ...f, mobile_no: e.target.value.replace(/\D/g, '') }))} />
              </F>

              <button
                type="submit"
                disabled={loading || slotsRemaining === 0}
                className="w-full mt-1 py-2.5 rounded-xl font-semibold text-sm text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all duration-200 active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg,#f97316,#ea580c)',
                  boxShadow: loading || slotsRemaining === 0 ? 'none' : '0 4px 20px rgba(249,115,22,0.35)',
                }}
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z" />
                    </svg>
                    Booking…
                  </span>
                ) : 'Confirm Appointment'}
              </button>
            </form>
          </div>
        </div>

        <p className="text-center text-xs text-white/35 mt-4">
          One booking per mobile number per day
        </p>
      </div>
    </div>
  )
}

function F({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold text-white/60 uppercase tracking-wider mb-1.5">
        {label}
      </label>
      {children}
    </div>
  )
}
