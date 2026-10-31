import { useState } from 'react';
import { supabase } from '../../supabase/client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Loader2, CheckCircle2, Wind, AlertCircle } from 'lucide-react';
import type { HBOTBookingFor, HBOTAppointmentInsert } from '../../types/hbot';
import { HBOT_TIME_SLOTS, formatTimeSlot, formatDate } from '../../types/hbot';

interface FormState {
  full_name: string;
  email: string;
  phone: string;
  booking_for: HBOTBookingFor;
  patient_name: string;
  reason: string;
  doctor_referral: string;
  preferred_date: string;
  preferred_time: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const INITIAL_FORM: FormState = {
  full_name: '',
  email: '',
  phone: '',
  booking_for: 'self',
  patient_name: '',
  reason: '',
  doctor_referral: '',
  preferred_date: '',
  preferred_time: '',
};

interface SuccessInfo {
  date: string;
  time: string;
  email: string;
}

const inputCls =
  'bg-white/5 border-white/10 text-white placeholder:text-white/30 focus:border-teal-500/50 focus-visible:ring-0 focus-visible:ring-offset-0';

const errorCls = 'text-red-400 text-xs mt-1 flex items-center gap-1';

function FieldError({ msg }: { msg?: string }) {
  if (!msg) return null;
  return (
    <p className={errorCls}>
      <AlertCircle className="w-3 h-3 shrink-0" />
      {msg}
    </p>
  );
}

export function HBOTBookingPage() {
  const [form, setForm] = useState<FormState>(INITIAL_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [success, setSuccess] = useState<SuccessInfo | null>(null);

  const today = new Date().toISOString().split('T')[0];

  function setField(field: keyof FormState, value: string) {
    setForm(prev => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors(prev => ({ ...prev, [field]: undefined }));
    if (submitError) setSubmitError(null);
  }

  function validate(): boolean {
    const e: FormErrors = {};
    if (!form.full_name.trim()) e.full_name = 'Full name is required.';
    if (!form.email.trim()) {
      e.email = 'Email is required.';
    } else if (!EMAIL_RE.test(form.email.trim())) {
      e.email = 'Enter a valid email address.';
    }
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    if (form.booking_for !== 'self' && !form.patient_name.trim()) {
      e.patient_name = 'Patient name is required when booking for someone else.';
    }
    if (!form.reason.trim()) e.reason = 'Please describe the reason or medical condition.';
    if (!form.preferred_date) e.preferred_date = 'Please select a preferred date.';
    if (!form.preferred_time) e.preferred_time = 'Please select a preferred time slot.';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError(null);

    try {
      const payload: HBOTAppointmentInsert = {
        full_name: form.full_name.trim(),
        email: form.email.trim(),
        phone: form.phone.trim(),
        booking_for: form.booking_for,
        patient_name: form.booking_for !== 'self' ? form.patient_name.trim() : null,
        reason: form.reason.trim(),
        doctor_referral: form.doctor_referral.trim() || null,
        preferred_date: form.preferred_date,
        preferred_time: form.preferred_time,
      };

      const { error } = await supabase.from('hbot_appointments').insert(payload);
      if (error) throw new Error(error.message);

      setSuccess({
        date: form.preferred_date,
        time: form.preferred_time,
        email: form.email.trim(),
      });
    } catch (err: unknown) {
      setSubmitError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.',
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4 py-20">
        <Card className="max-w-lg w-full bg-[#111111] border-white/10">
          <CardContent className="pt-10 pb-10">
            <div className="text-center space-y-6">
              <CheckCircle2 className="w-16 h-16 text-teal-400 mx-auto" />
              <div>
                <h3 className="text-2xl font-semibold text-white mb-2">
                  Request Received
                </h3>
                <p className="text-white/60 leading-relaxed">
                  Your HBOT appointment request for{' '}
                  <span className="text-white font-medium">
                    {formatDate(success.date)}
                  </span>{' '}
                  at{' '}
                  <span className="text-white font-medium">
                    {formatTimeSlot(success.time)}
                  </span>{' '}
                  has been submitted.
                </p>
              </div>

              <div className="bg-teal-500/10 border border-teal-500/20 rounded-lg p-4 text-sm text-teal-300 leading-relaxed text-left">
                <strong className="block mb-1">
                  This slot is NOT booked yet.
                </strong>
                Our staff will review your request and send a confirmation to{' '}
                <span className="text-white font-medium">{success.email}</span>.
                Please do not visit the clinic until you receive our confirmation
                email.
              </div>

              <Button
                onClick={() => {
                  setSuccess(null);
                  setForm(INITIAL_FORM);
                  setErrors({});
                }}
                className="bg-teal-600 hover:bg-teal-700 text-white w-full"
              >
                Book Another Appointment
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#080808] flex items-start justify-center pt-32 pb-16 px-4">
      <Card className="max-w-2xl w-full bg-[#111111] border-white/10">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-2.5 mb-1">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 flex items-center justify-center">
              <Wind className="w-4 h-4 text-teal-400" />
            </div>
            <CardTitle className="text-white text-xl">
              HBOT Appointment Request
            </CardTitle>
          </div>
          <CardDescription className="text-white/50">
            Hyperbaric Oxygen Therapy — GKF Hospital, Madurai.
            Fill in the form below; our team will review and confirm your slot.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} noValidate className="space-y-5">

            {/* ── Contact details ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="full_name" className="text-white/70">
                  Full Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="full_name"
                  value={form.full_name}
                  onChange={e => setField('full_name', e.target.value)}
                  placeholder="Your full name"
                  className={inputCls}
                />
                <FieldError msg={errors.full_name} />
              </div>

              <div className="space-y-1.5">
                <Label htmlFor="phone" className="text-white/70">
                  Phone Number <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={form.phone}
                  onChange={e => setField('phone', e.target.value)}
                  placeholder="+91 98765 43210"
                  className={inputCls}
                />
                <FieldError msg={errors.phone} />
              </div>
            </div>

            <div className="space-y-1.5">
              <Label htmlFor="email" className="text-white/70">
                Email Address <span className="text-red-400">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={e => setField('email', e.target.value)}
                placeholder="you@example.com"
                className={inputCls}
              />
              <FieldError msg={errors.email} />
            </div>

            {/* ── Who is this for ── */}
            <div className="space-y-1.5">
              <Label className="text-white/70">
                Who is this appointment for?{' '}
                <span className="text-red-400">*</span>
              </Label>
              <Select
                value={form.booking_for}
                onValueChange={v => setField('booking_for', v as HBOTBookingFor)}
              >
                <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-0 focus:ring-offset-0">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-[#1a1a1a] border-white/10">
                  <SelectItem
                    value="self"
                    className="text-white focus:bg-white/10 focus:text-white"
                  >
                    Myself
                  </SelectItem>
                  <SelectItem
                    value="family_member"
                    className="text-white focus:bg-white/10 focus:text-white"
                  >
                    A family member
                  </SelectItem>
                  <SelectItem
                    value="other"
                    className="text-white focus:bg-white/10 focus:text-white"
                  >
                    Someone else
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ── Patient name — shown when not 'self' ── */}
            {form.booking_for !== 'self' && (
              <div className="space-y-1.5">
                <Label htmlFor="patient_name" className="text-white/70">
                  Patient's Full Name <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="patient_name"
                  value={form.patient_name}
                  onChange={e => setField('patient_name', e.target.value)}
                  placeholder="Name of the person receiving treatment"
                  className={inputCls}
                />
                <FieldError msg={errors.patient_name} />
              </div>
            )}

            {/* ── Reason / condition ── */}
            <div className="space-y-1.5">
              <Label htmlFor="reason" className="text-white/70">
                Medical Condition / Reason for Treatment{' '}
                <span className="text-red-400">*</span>
              </Label>
              <textarea
                id="reason"
                value={form.reason}
                onChange={e => setField('reason', e.target.value)}
                rows={4}
                placeholder="Describe the medical condition or reason for seeking HBOT…"
                className="w-full rounded-md border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal-500/50 resize-none"
              />
              <FieldError msg={errors.reason} />
            </div>

            {/* ── Doctor referral (optional) ── */}
            <div className="space-y-1.5">
              <Label htmlFor="doctor_referral" className="text-white/70">
                Referring Doctor{' '}
                <span className="text-white/30 font-normal text-xs">(optional)</span>
              </Label>
              <Input
                id="doctor_referral"
                value={form.doctor_referral}
                onChange={e => setField('doctor_referral', e.target.value)}
                placeholder="Dr. Name, Hospital / Clinic"
                className={inputCls}
              />
            </div>

            {/* ── Date & time ── */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label htmlFor="preferred_date" className="text-white/70">
                  Preferred Date <span className="text-red-400">*</span>
                </Label>
                <Input
                  id="preferred_date"
                  type="date"
                  min={today}
                  value={form.preferred_date}
                  onChange={e => setField('preferred_date', e.target.value)}
                  className={`${inputCls} [color-scheme:dark]`}
                />
                <FieldError msg={errors.preferred_date} />
              </div>

              <div className="space-y-1.5">
                <Label className="text-white/70">
                  Preferred Time <span className="text-red-400">*</span>
                </Label>
                <Select
                  value={form.preferred_time}
                  onValueChange={v => setField('preferred_time', v)}
                >
                  <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-0 focus:ring-offset-0">
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#1a1a1a] border-white/10">
                    <p className="px-2 py-1 text-xs text-white/30 font-medium uppercase tracking-wide">
                      Morning
                    </p>
                    {HBOT_TIME_SLOTS.filter(t => parseInt(t, 10) < 12).map(t => (
                      <SelectItem
                        key={t}
                        value={t}
                        className="text-white focus:bg-white/10 focus:text-white"
                      >
                        {formatTimeSlot(t)}
                      </SelectItem>
                    ))}
                    <p className="px-2 py-1 text-xs text-white/30 font-medium uppercase tracking-wide mt-1">
                      Afternoon
                    </p>
                    {HBOT_TIME_SLOTS.filter(t => parseInt(t, 10) >= 12).map(t => (
                      <SelectItem
                        key={t}
                        value={t}
                        className="text-white focus:bg-white/10 focus:text-white"
                      >
                        {formatTimeSlot(t)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FieldError msg={errors.preferred_time} />
              </div>
            </div>

            {/* ── Submit error ── */}
            {submitError && (
              <div className="flex items-start gap-2 rounded-lg border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-400">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                {submitError}
              </div>
            )}

            <div className="pt-1">
              <Button
                type="submit"
                disabled={submitting}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    Submitting…
                  </>
                ) : (
                  'Submit Appointment Request'
                )}
              </Button>
              <p className="text-center text-white/30 text-xs mt-3">
                Submitting does not guarantee a slot. You will receive a
                confirmation email once staff approve your request.
              </p>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
