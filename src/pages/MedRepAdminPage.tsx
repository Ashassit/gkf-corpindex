import { useEffect, useState } from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'
import { supabase } from '../supabase/client'
import type { Appointment } from '../types/appointment'

export function MedRepAdminPage() {
  const [date, setDate] = useState(new Date().toISOString().split('T')[0])
  const [appointments, setAppointments] = useState<Appointment[]>([])
  const [loading, setLoading] = useState(false)
  const [session, setSession] = useState<any>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [authError, setAuthError] = useState<string | null>(null)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [pdfGenerating, setPdfGenerating] = useState(false)

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => setSession(data.session))
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (session) fetchAppointments()
  }, [date, session])

  async function fetchAppointments() {
    setLoading(true)
    const { data } = await supabase
      .from('medrep_appointments')
      .select('*')
      .eq('appointment_date', date)
      .order('serial_no', { ascending: true })
    setAppointments((data as Appointment[]) ?? [])
    setLoading(false)
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault()
    setAuthError(null)
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) setAuthError(error.message)
  }

  async function handleDelete(id: string) {
    if (!confirm('Delete this appointment?')) return
    setDeleting(id)
    const { error } = await supabase.from('medrep_appointments').delete().eq('id', id)
    if (!error) setAppointments(prev => prev.filter(a => a.id !== id))
    setDeleting(null)
  }

  function downloadPDF() {
    setPdfGenerating(true)
    try {
      const [y, m, d] = date.split('-')
      const displayDate = `${d}-${m}-${y}`

      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' })
      const pageW = doc.internal.pageSize.getWidth()

      // Title block
      doc.setFontSize(13)
      doc.setFont('helvetica', 'bold')
      doc.text('MEDICAL REPS APPOINTMENT CONFIRMED LIST', pageW / 2, 22, { align: 'center' })

      doc.setFontSize(11)
      doc.setFont('helvetica', 'bold')
      doc.text(`DATE OF APPOINTMENT : ${displayDate}`, pageW / 2, 30, { align: 'center' })

      // Build exactly 20 rows
      const tableRows = Array.from({ length: 20 }, (_, i) => {
        const appt = appointments[i] ?? null
        return [
          String(i + 1),
          appt?.rep_name ?? '',
          appt?.company_name ?? '',
          '13.01',           // always show time (spec: show even for empty rows)
          appt?.mobile_no ?? '',
        ]
      })

      autoTable(doc, {
        startY: 37,
        head: [['S. No', 'Reps Name', 'Company Name', 'Time', 'Mobile No']],
        body: tableRows,
        theme: 'grid',
        styles: {
          fontSize: 9,
          cellPadding: 2.5,
          valign: 'middle',
          lineColor: [80, 80, 80],
          lineWidth: 0.3,
        },
        headStyles: {
          fillColor: [173, 216, 230],
          textColor: [0, 0, 0],
          fontStyle: 'bold',
          fontSize: 9.5,
        },
        columnStyles: {
          0: { cellWidth: 14, halign: 'center' },
          3: { cellWidth: 17, halign: 'center' },
          4: { cellWidth: 34 },
        },
        alternateRowStyles: { fillColor: [255, 255, 255] },
      })

      doc.save(`appointments_${displayDate}.pdf`)
    } finally {
      setPdfGenerating(false)
    }
  }

  const rows = Array.from({ length: 20 }, (_, i) => appointments[i] ?? null)
  const [y, m, d] = date.split('-')
  const formattedDate = `${d}-${m}-${y}`

  const slotColor =
    appointments.length >= 20 ? 'text-red-600' :
    appointments.length >= 15 ? 'text-orange-500' :
    'text-green-600'

  if (!session) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <div className="max-w-sm w-full bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-10 h-10 bg-gray-900 rounded-xl mb-3">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h1 className="text-xl font-semibold text-gray-900">Admin Login</h1>
            <p className="text-sm text-gray-400 mt-0.5">Medical Rep Appointment System</p>
          </div>

          {authError && (
            <div className="bg-red-50 border border-red-100 rounded-lg px-4 py-3 mb-4 text-red-700 text-sm">
              {authError}
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-3">
            <input
              required type="email" placeholder="Email"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              value={email} onChange={e => setEmail(e.target.value)}
            />
            <input
              required type="password" placeholder="Password"
              className="w-full border border-gray-200 rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800 transition"
              value={password} onChange={e => setPassword(e.target.value)}
            />
            <button type="submit"
              className="w-full bg-gray-900 text-white rounded-lg py-2.5 font-medium text-sm hover:bg-gray-800 transition-colors mt-1">
              Sign In
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <div className="max-w-5xl mx-auto p-4 sm:p-6">

        {/* Controls bar */}
        <div className="mb-5 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          {/* Row 1: title + slot count */}
          <div className="flex items-center gap-2 mb-3">
            <h1 className="text-lg font-semibold text-gray-900 flex-1 min-w-0">Appointment List</h1>
            <div className="flex items-center gap-1 text-sm shrink-0">
              <span className={`font-bold text-lg ${slotColor}`}>{appointments.length}</span>
              <span className="text-gray-400">/ 20</span>
            </div>
          </div>

          {/* Row 2: date + buttons (stack on mobile, row on sm+) */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="date" value={date}
              onChange={e => setDate(e.target.value)}
              className="w-full sm:w-auto border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-800"
            />
            <div className="flex gap-2">
              <button
                onClick={downloadPDF}
                disabled={pdfGenerating}
                className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-60"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {pdfGenerating ? 'Generating…' : 'Download PDF'}
              </button>
              <button
                onClick={() => supabase.auth.signOut()}
                className="shrink-0 border border-gray-200 px-4 py-2 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>

        {/* Appointment table */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 sm:p-6">
          <div className="text-center mb-5">
            <h2 className="text-base font-bold uppercase tracking-wide text-gray-900">
              Medical Reps Appointment Confirmed List
            </h2>
            <p className="text-sm font-semibold mt-1 text-gray-700">
              Date of Appointment : {formattedDate}
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center py-12">
              <div className="w-8 h-8 border-4 border-orange-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm min-w-[600px]">
                <thead>
                  <tr style={{ backgroundColor: '#add8e6' }}>
                    <th className="border border-gray-400 px-3 py-2 text-center w-12 font-bold">S. No</th>
                    <th className="border border-gray-400 px-3 py-2 text-left font-bold">Reps Name</th>
                    <th className="border border-gray-400 px-3 py-2 text-left font-bold">Company Name</th>
                    <th className="border border-gray-400 px-3 py-2 text-center w-20 font-bold">Time</th>
                    <th className="border border-gray-400 px-3 py-2 text-left w-36 font-bold">Mobile No</th>
                    <th className="border border-gray-400 px-3 py-2 w-20 font-bold text-center">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                      <td className="border border-gray-300 px-3 py-2 text-center text-gray-700">{i + 1}</td>
                      <td className="border border-gray-300 px-3 py-2">{row?.rep_name ?? ''}</td>
                      <td className="border border-gray-300 px-3 py-2">{row?.company_name ?? ''}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center text-gray-600">13.01</td>
                      <td className="border border-gray-300 px-3 py-2">{row?.mobile_no ?? ''}</td>
                      <td className="border border-gray-300 px-3 py-2 text-center">
                        {row && (
                          <button
                            onClick={() => handleDelete(row.id)}
                            disabled={deleting === row.id}
                            className="text-red-500 hover:text-red-700 text-xs font-medium disabled:opacity-40 transition-colors"
                          >
                            {deleting === row.id ? '…' : 'Delete'}
                          </button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </div>
  )
}
