import { useState } from 'react';
import { useParams, useNavigate, useOutletContext } from 'react-router-dom';
import { usePatient } from '../lib/hooks/usePatients';
import { useCharges } from '../lib/hooks/useCharges';
import { usePayments } from '../lib/hooks/usePayments';
import { useChargeTypes } from '../lib/hooks/useChargeTypes';
import { ROLE_PERMISSIONS } from '../lib/types';
import type { IPOutletContext, IPCharge, IPChargeType } from '../lib/types';
import { ArrowLeft, Pencil, Trash2, Plus, X, Check, Printer } from 'lucide-react';

function fmt(n: number) {
  return '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

function ChargeRow({
  charge,
  canEdit,
  canDelete,
  userId,
  chargeTypes,
  onUpdate,
  onDelete,
}: {
  charge: IPCharge;
  canEdit: boolean;
  canDelete: boolean;
  userId: string;
  chargeTypes: IPChargeType[];
  onUpdate: (params: { id: string; chargeName: string; amount: number; userId: string }) => Promise<string | null>;
  onDelete: (id: string) => Promise<string | null>;
}) {
  const [editing, setEditing] = useState(false);
  const [name, setName] = useState(charge.charge_name);
  const [amount, setAmount] = useState(String(charge.amount));
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');

  async function save() {
    const amt = parseFloat(amount);
    if (!name || isNaN(amt) || amt < 0) { setErr('Select a charge type and enter a valid amount.'); return; }
    setSaving(true);
    const e = await onUpdate({ id: charge.id, chargeName: name, amount: amt, userId });
    setSaving(false);
    if (e) { setErr(e); return; }
    setEditing(false);
    setErr('');
  }

  function cancel() {
    setName(charge.charge_name);
    setAmount(String(charge.amount));
    setEditing(false);
    setErr('');
  }

  if (editing) {
    // Include current name in list even if it was removed from charge types
    const options = chargeTypes.map(ct => ct.name);
    if (!options.includes(name)) options.unshift(name);

    return (
      <>
        <tr className="bg-blue-50">
          <td className="px-4 py-2">
            <select
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full px-2 py-1 border border-blue-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {options.map(opt => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
          </td>
          <td className="px-4 py-2">
            <input
              type="number"
              min={0}
              step="0.01"
              value={amount}
              onChange={e => setAmount(e.target.value)}
              className="w-32 px-2 py-1 border border-blue-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </td>
          <td className="px-4 py-2">
            <div className="flex gap-1">
              <button onClick={save} disabled={saving} className="p-1.5 rounded bg-blue-600 hover:bg-blue-700 text-white transition-colors">
                <Check size={13} />
              </button>
              <button onClick={cancel} className="p-1.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-600 transition-colors">
                <X size={13} />
              </button>
            </div>
          </td>
        </tr>
        {err && (
          <tr className="bg-red-50">
            <td colSpan={3} className="px-4 py-1 text-xs text-red-600">{err}</td>
          </tr>
        )}
      </>
    );
  }

  return (
    <tr className="border-b border-slate-50 hover:bg-slate-50 group">
      <td className="px-4 py-3 text-slate-800">{charge.charge_name}</td>
      <td className="px-4 py-3 text-slate-800 font-medium">{fmt(charge.amount)}</td>
      <td className="px-4 py-3">
        <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
          {canEdit && (
            <button onClick={() => setEditing(true)} className="p-1.5 rounded hover:bg-blue-100 text-slate-400 hover:text-blue-600 transition-colors">
              <Pencil size={13} />
            </button>
          )}
          {canDelete && (
            <button
              onClick={async () => { if (confirm('Delete this charge?')) await onDelete(charge.id); }}
              className="p-1.5 rounded hover:bg-red-100 text-slate-400 hover:text-red-600 transition-colors"
            >
              <Trash2 size={13} />
            </button>
          )}
        </div>
      </td>
    </tr>
  );
}

function AddChargeForm({
  patientId,
  userId,
  chargeTypes,
  onAdd,
  onClose,
}: {
  patientId: string;
  userId: string;
  chargeTypes: IPChargeType[];
  onAdd: (params: { chargeName: string; amount: number; userId: string }) => Promise<string | null>;
  onClose: () => void;
}) {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState('');
  void patientId;

  async function handleAdd(e: React.FormEvent) {
    e.preventDefault();
    const amt = parseFloat(amount);
    if (!name) { setErr('Select a charge type.'); return; }
    if (isNaN(amt) || amt < 0) { setErr('Enter a valid amount.'); return; }
    setSaving(true);
    const error = await onAdd({ chargeName: name, amount: amt, userId });
    setSaving(false);
    if (error) { setErr(error); return; }
    setName('');
    setAmount('');
    setErr('');
    onClose();
  }

  return (
    <tr className="bg-green-50 border-b border-green-100">
      <td className="px-4 py-2">
        <select
          autoFocus
          value={name}
          onChange={e => setName(e.target.value)}
          className="w-full px-2 py-1 border border-green-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
        >
          <option value="" disabled>Select charge type…</option>
          {chargeTypes.map(ct => (
            <option key={ct.id} value={ct.name}>{ct.name}</option>
          ))}
        </select>
        {err && <p className="text-xs text-red-500 mt-1">{err}</p>}
      </td>
      <td className="px-4 py-2">
        <input
          type="number"
          min={0}
          step="0.01"
          placeholder="0.00"
          value={amount}
          onChange={e => setAmount(e.target.value)}
          className="w-32 px-2 py-1 border border-green-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
        />
      </td>
      <td className="px-4 py-2">
        <div className="flex gap-1">
          <button onClick={handleAdd} disabled={saving} className="p-1.5 rounded bg-green-600 hover:bg-green-700 text-white transition-colors">
            <Check size={13} />
          </button>
          <button onClick={onClose} className="p-1.5 rounded bg-slate-200 hover:bg-slate-300 text-slate-600 transition-colors">
            <X size={13} />
          </button>
        </div>
      </td>
    </tr>
  );
}

function DischargeModal({
  totalCharges,
  advanceAmount,
  additionalPaid,
  confirming,
  onConfirm,
  onCancel,
  onPrint,
}: {
  totalCharges: number;
  advanceAmount: number;
  additionalPaid: number;
  confirming: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  onPrint: () => void;
}) {
  const outstanding = Math.max(0, totalCharges - additionalPaid);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-sm mx-4 p-6">
        <h2 className="text-base font-semibold text-slate-900 mb-4">Confirm Discharge</h2>

        <div className="grid grid-cols-2 gap-2 mb-5">
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-400 mb-0.5">Total Charges</p>
            <p className="text-sm font-semibold text-slate-900">{fmt(totalCharges)}</p>
          </div>
          {advanceAmount > 0 && (
            <div className="bg-purple-50 rounded-lg p-3">
              <p className="text-xs text-purple-400 mb-0.5">Advance Held</p>
              <p className="text-sm font-semibold text-purple-700">{fmt(advanceAmount)}</p>
            </div>
          )}
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-400 mb-0.5">Paid (Additional)</p>
            <p className="text-sm font-semibold text-green-700">{fmt(additionalPaid)}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <p className="text-xs text-slate-400 mb-0.5">Outstanding</p>
            <p className={`text-sm font-semibold ${outstanding > 0 ? 'text-red-600' : 'text-green-700'}`}>
              {outstanding > 0 ? fmt(outstanding) : 'Nil'}
            </p>
          </div>
        </div>

        <button
          onClick={onPrint}
          className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors mb-4"
        >
          <Printer size={14} />
          Print Final Bill
        </button>

        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:bg-slate-50 transition-colors"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            disabled={confirming}
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm font-medium transition-colors disabled:opacity-60"
          >
            {confirming ? 'Discharging…' : 'Discharge'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function PatientDetail() {
  const { id } = useParams<{ id: string }>();
  const { role, userId } = useOutletContext<IPOutletContext>();
  const navigate = useNavigate();

  const { patient, loading: pLoading, dischargePatient } = usePatient(id!);
  const { charges, loading: cLoading, addCharge, updateCharge, deleteCharge, totalCharges } = useCharges(id!);
  const { payments, loading: pyLoading, addPayment, advanceAmount, additionalPaid, hasAdvance } = usePayments(id!);
  const { chargeTypes } = useChargeTypes();

  const perms = ROLE_PERMISSIONS[role];
  const [addingCharge, setAddingCharge] = useState(false);
  const [showDischargeModal, setShowDischargeModal] = useState(false);
  const [discharging, setDischarging] = useState(false);
  const [dischargeErr, setDischargeErr] = useState('');

  const [payForm, setPayForm] = useState({ amount: '', type: 'additional' as 'advance' | 'additional', notes: '' });
  const [payError, setPayError] = useState('');
  const [payLoading, setPayLoading] = useState(false);
  const [showPayForm, setShowPayForm] = useState(false);

  const outstanding = totalCharges - additionalPaid;

  async function confirmDischarge() {
    setDischarging(true);
    const err = await dischargePatient(userId);
    setDischarging(false);
    setShowDischargeModal(false);
    if (err) setDischargeErr(err);
  }

  async function handleAddPayment(e: React.FormEvent) {
    e.preventDefault();
    const amt = parseFloat(payForm.amount);
    if (isNaN(amt) || amt <= 0) { setPayError('Enter a valid amount.'); return; }
    setPayLoading(true);
    const err = await addPayment({ amount: amt, paymentType: payForm.type, notes: payForm.notes, userId });
    setPayLoading(false);
    if (err) { setPayError(err); return; }
    setPayForm({ amount: '', type: 'additional', notes: '' });
    setPayError('');
    setShowPayForm(false);
  }

  function handlePrintBill(showAdvance = false) {
    if (!patient) return;
    const now = new Date();
    const billDate = now.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    const billTime = now.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
    const outstanding = Math.max(0, totalCharges - additionalPaid);

    const fmtNum = (n: number) =>
      '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2 });

    const chargeRows = charges.map(c => `
      <tr>
        <td>${c.charge_name}</td>
        <td class="right">${fmtNum(c.amount)}</td>
      </tr>`).join('');

    const paymentRows = payments.map(p => `
      <tr>
        <td class="cap">${p.payment_type}</td>
        <td class="right">${fmtNum(p.amount)}</td>
        <td>${new Date(p.created_at).toLocaleDateString('en-IN')}</td>
        <td>${p.notes ?? ''}</td>
      </tr>`).join('');


    const advanceSummaryRow = showAdvance && advanceAmount > 0 ? `
    <tr>
      <td>Advance Held <em class="note">(applied at closing)</em></td>
      <td class="right purple">${fmtNum(advanceAmount)}</td>
    </tr>` : '';

    const filteredPaymentRows = showAdvance ? paymentRows : payments.filter(p => p.payment_type !== 'advance').map(p => `
      <tr>
        <td class="cap">${p.payment_type}</td>
        <td class="right">${fmtNum(p.amount)}</td>
        <td>${new Date(p.created_at).toLocaleDateString('en-IN')}</td>
        <td>${p.notes ?? ''}</td>
      </tr>`).join('');

    const html = `<!DOCTYPE html>
<html><head><meta charset="utf-8"/>
<title>IP Bill – ${patient.name}</title>
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{font-family:Arial,sans-serif;font-size:13px;color:#1e293b;padding:28px 36px}
  .hdr{text-align:center;border-bottom:2px solid #1e293b;padding-bottom:12px;margin-bottom:16px}
  .hdr h1{font-size:20px;font-weight:700}
  .hdr p{font-size:12px;color:#64748b;margin-top:2px}
  .bill-title{font-size:14px;font-weight:700;text-align:center;text-transform:uppercase;letter-spacing:1px;margin-bottom:16px}
  .pinfo{display:grid;grid-template-columns:1fr 1fr;gap:4px 24px;border:1px solid #e2e8f0;border-radius:6px;padding:10px 14px;margin-bottom:20px;font-size:12px}
  .pinfo .lbl{color:#64748b}
  .pinfo .val{font-weight:600}
  .sec{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.5px;color:#475569;margin:16px 0 6px}
  table{width:100%;border-collapse:collapse;margin-bottom:8px}
  th{background:#f8fafc;padding:7px 8px;text-align:left;font-size:12px;font-weight:600;color:#475569;border-bottom:2px solid #cbd5e1}
  td{padding:6px 8px;border-bottom:1px solid #f1f5f9}
  .right{text-align:right}
  .cap{text-transform:capitalize}
  tfoot td{font-weight:700;border-top:2px solid #1e293b;padding:8px}
  .summary{width:300px;margin-left:auto;margin-top:8px}
  .summary td{padding:5px 8px}
  .summary .grand td{font-weight:700;font-size:14px;border-top:2px solid #1e293b;color:#dc2626}
  .green{color:#16a34a;font-weight:600}
  .purple{color:#7c3aed;font-weight:600}
  .note{font-size:11px;color:#7c3aed;font-style:italic}
  .footnote{font-size:11px;color:#7c3aed;font-style:italic;margin-top:10px}
  .footer{margin-top:28px;border-top:1px solid #e2e8f0;padding-top:10px;font-size:11px;color:#94a3b8;display:flex;justify-content:space-between}
  @media print{body{padding:12px 20px}@page{margin:12mm}}
</style>
</head><body>
<div class="hdr"><h1>GKF Hospital</h1><p>Inpatient Bill</p></div>
<div class="bill-title">${showAdvance ? 'Final Bill' : 'Daily Bill'}</div>
<div class="pinfo">
  <div><span class="lbl">Patient Name: </span><span class="val">${patient.name}</span></div>
  <div><span class="lbl">Bill Date: </span><span class="val">${billDate}</span></div>
  <div><span class="lbl">Patient ID: </span><span class="val">${patient.patient_id}</span></div>
  <div><span class="lbl">Status: </span><span class="val cap">${patient.status}</span></div>
  <div><span class="lbl">Age / Gender: </span><span class="val">${patient.age} yrs / ${patient.gender}</span></div>
  <div><span class="lbl">Admitted: </span><span class="val">${new Date(patient.created_at).toLocaleDateString('en-IN')}</span></div>
</div>
<div class="sec">Charges</div>
<table>
  <thead><tr><th>Charge Name</th><th class="right">Amount</th></tr></thead>
  <tbody>${charges.length ? chargeRows : '<tr><td colspan="2" style="color:#94a3b8;text-align:center;padding:10px">No charges recorded.</td></tr>'}</tbody>
  <tfoot><tr><td>Total Charges</td><td class="right">${fmtNum(totalCharges)}</td></tr></tfoot>
</table>
<div class="sec">Payments</div>
<table>
  <thead><tr><th>Type</th><th class="right">Amount</th><th>Date</th><th>Notes</th></tr></thead>
  <tbody>${filteredPaymentRows || '<tr><td colspan="4" style="color:#94a3b8;text-align:center;padding:10px">No payments recorded.</td></tr>'}</tbody>
</table>
<div class="sec">Summary</div>
<table class="summary">
  <tbody>
    <tr><td>Total Charges</td><td class="right" style="font-weight:600">${fmtNum(totalCharges)}</td></tr>
    ${advanceSummaryRow}
    <tr><td>Paid (Additional)</td><td class="right green">${fmtNum(additionalPaid)}</td></tr>
    <tr class="grand"><td>Outstanding</td><td class="right">${fmtNum(outstanding)}</td></tr>
  </tbody>
</table>
<div class="footer">
  <span>GKF Hospital — Inpatient Bill Book</span>
  <span>Printed: ${billDate}, ${billTime}</span>
</div>
</body></html>`;

    const w = window.open('', '_blank', 'width=820,height=700');
    if (!w) return;
    w.document.write(html);
    w.document.close();
    w.focus();
    w.onafterprint = () => w.close();
    w.print();
  }

  if (pLoading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="w-7 h-7 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  if (!patient) {
    return <div className="p-6 text-slate-500">Patient not found.</div>;
  }

  const isActive = patient.status === 'active';

  return (
    <div className="p-6 max-w-4xl">
      {showDischargeModal && (
        <DischargeModal
          totalCharges={totalCharges}
          advanceAmount={advanceAmount}
          additionalPaid={additionalPaid}
          confirming={discharging}
          onConfirm={confirmDischarge}
          onCancel={() => setShowDischargeModal(false)}
          onPrint={() => handlePrintBill(true)}
        />
      )}

      {/* Header */}
      <button
        onClick={() => navigate('/ip-bill/patients')}
        className="flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 mb-5 transition-colors"
      >
        <ArrowLeft size={15} />
        Back to patients
      </button>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-xl font-semibold text-slate-900">{patient.name}</h1>
          <p className="text-sm text-slate-400 mt-0.5">
            {patient.patient_id} · {patient.age} yrs · <span className="capitalize">{patient.gender}</span>
          </p>
        </div>
        <div className="flex items-center gap-3">
          <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
            isActive ? 'bg-green-50 text-green-700' : 'bg-slate-100 text-slate-500'
          }`}>
            {patient.status}
          </span>
          <button
            onClick={() => handlePrintBill()}
            className="flex items-center gap-1.5 px-3 py-1.5 border border-slate-300 text-slate-600 hover:bg-slate-100 rounded-lg text-sm font-medium transition-colors"
          >
            <Printer size={14} />
            Print Bill
          </button>
          {isActive && perms.canDischarge && (
            <button
              onClick={() => setShowDischargeModal(true)}
              className="px-3 py-1.5 border border-red-300 text-red-600 hover:bg-red-50 rounded-lg text-sm font-medium transition-colors"
            >
              Discharge
            </button>
          )}
        </div>
      </div>
      {dischargeErr && <p className="text-sm text-red-600 mb-4">{dischargeErr}</p>}

      {/* Summary cards */}
      <div className="grid grid-cols-2 gap-3 mb-6 sm:grid-cols-4">
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-xs text-slate-400 mb-1">Total Charges</p>
          <p className="text-xl font-semibold text-slate-900">{fmt(totalCharges)}</p>
        </div>
        <div className="bg-white rounded-xl border border-purple-200 p-4">
          <p className="text-xs text-purple-400 mb-1">Advance Held</p>
          <p className="text-xl font-semibold text-purple-700">{fmt(advanceAmount)}</p>
          <p className="text-xs text-slate-400 mt-0.5">not yet applied</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-xs text-slate-400 mb-1">Paid (Additional)</p>
          <p className="text-xl font-semibold text-green-700">{fmt(additionalPaid)}</p>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-4">
          <p className="text-xs text-slate-400 mb-1">Outstanding</p>
          <p className={`text-xl font-semibold ${outstanding > 0 ? 'text-red-600' : 'text-slate-900'}`}>
            {fmt(Math.max(0, outstanding))}
          </p>
        </div>
      </div>

      {/* Charges */}
      <div className="bg-white rounded-xl border border-slate-200 mb-4">
        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-800">Charges</h2>
          {isActive && perms.canAddCharges && !addingCharge && (
            <button
              onClick={() => setAddingCharge(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              <Plus size={13} />
              Add Charge
            </button>
          )}
        </div>

        {cLoading ? (
          <div className="flex justify-center py-8">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Charge Name</th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Amount</th>
                  <th className="px-4 py-2.5 w-16" />
                </tr>
              </thead>
              <tbody>
                {charges.map(c => (
                  <ChargeRow
                    key={c.id}
                    charge={c}
                    canEdit={isActive && perms.canEditCharges}
                    canDelete={isActive && perms.canDeleteCharges}
                    userId={userId}
                    chargeTypes={chargeTypes}
                    onUpdate={updateCharge}
                    onDelete={deleteCharge}
                  />
                ))}
                {addingCharge && (
                  <AddChargeForm
                    patientId={id!}
                    userId={userId}
                    chargeTypes={chargeTypes}
                    onAdd={addCharge}
                    onClose={() => setAddingCharge(false)}
                  />
                )}
                {charges.length === 0 && !addingCharge && (
                  <tr>
                    <td colSpan={3} className="text-center text-slate-400 py-8 text-sm">
                      No charges recorded yet.
                    </td>
                  </tr>
                )}
              </tbody>
              {charges.length > 0 && (
                <tfoot>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-semibold text-slate-800">Total</td>
                    <td className="px-4 py-3 font-semibold text-slate-900">{fmt(totalCharges)}</td>
                    <td />
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        )}
      </div>

      {/* Payments */}
      <div className="bg-white rounded-xl border border-slate-200">
        <div className="px-4 py-3 border-b border-slate-100 flex items-center justify-between">
          <h2 className="text-sm font-semibold text-slate-800">Payments</h2>
          {isActive && perms.canRecordPayments && !showPayForm && (
            <button
              onClick={() => setShowPayForm(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              <Plus size={13} />
              Record Payment
            </button>
          )}
        </div>

        {showPayForm && (
          <form onSubmit={handleAddPayment} className="p-4 border-b border-slate-100 bg-green-50">
            <div className="flex flex-wrap gap-3 items-end">
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Type</label>
                <select
                  value={payForm.type}
                  onChange={e => setPayForm(f => ({ ...f, type: e.target.value as typeof f.type }))}
                  className="px-2 py-1.5 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                >
                  <option value="additional">Additional</option>
                  {!hasAdvance && <option value="advance">Advance (max ₹20,000)</option>}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium text-slate-600 mb-1">Amount (₹)</label>
                <input
                  type="number"
                  min={1}
                  step="0.01"
                  value={payForm.amount}
                  onChange={e => setPayForm(f => ({ ...f, amount: e.target.value }))}
                  required
                  className="w-32 px-2 py-1.5 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex-1 min-w-40">
                <label className="block text-xs font-medium text-slate-600 mb-1">Notes (optional)</label>
                <input
                  type="text"
                  value={payForm.notes}
                  onChange={e => setPayForm(f => ({ ...f, notes: e.target.value }))}
                  className="w-full px-2 py-1.5 border border-slate-300 rounded text-sm focus:outline-none focus:ring-1 focus:ring-green-500"
                />
              </div>
              <div className="flex gap-2">
                <button type="submit" disabled={payLoading} className="px-3 py-1.5 bg-green-600 hover:bg-green-700 text-white rounded text-sm font-medium transition-colors">
                  {payLoading ? 'Saving…' : 'Save'}
                </button>
                <button type="button" onClick={() => { setShowPayForm(false); setPayError(''); }} className="px-3 py-1.5 bg-white border border-slate-300 text-slate-600 rounded text-sm transition-colors hover:bg-slate-50">
                  Cancel
                </button>
              </div>
            </div>
            {payError && <p className="text-xs text-red-600 mt-2">{payError}</p>}
          </form>
        )}

        {pyLoading ? (
          <div className="flex justify-center py-8">
            <div className="w-6 h-6 border-4 border-green-500 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-100">
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Type</th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Amount</th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Notes</th>
                  <th className="text-left px-4 py-2.5 font-medium text-slate-500">Date</th>
                </tr>
              </thead>
              <tbody>
                {payments.map(p => (
                  <tr key={p.id} className="border-b border-slate-50">
                    <td className="px-4 py-3">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium capitalize ${
                        p.payment_type === 'advance'
                          ? 'bg-purple-50 text-purple-700'
                          : 'bg-blue-50 text-blue-700'
                      }`}>
                        {p.payment_type}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-medium text-slate-800">{fmt(p.amount)}</td>
                    <td className="px-4 py-3 text-slate-500">{p.notes ?? '—'}</td>
                    <td className="px-4 py-3 text-slate-400">
                      {new Date(p.created_at).toLocaleDateString('en-IN')}
                    </td>
                  </tr>
                ))}
                {payments.length === 0 && (
                  <tr>
                    <td colSpan={4} className="text-center text-slate-400 py-8 text-sm">
                      No payments recorded.
                    </td>
                  </tr>
                )}
              </tbody>
              {payments.length > 0 && (
                <tfoot>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-semibold text-slate-800">Total Paid</td>
                    <td className="px-4 py-3 font-semibold text-green-700">{fmt(additionalPaid)}</td>
                    <td colSpan={2} />
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
