export type HBOTBookingFor = 'self' | 'family_member' | 'other';
export type HBOTAppointmentStatus = 'pending' | 'confirmed' | 'rejected' | 'cancelled';

export interface HBOTAppointment {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  booking_for: HBOTBookingFor;
  patient_name: string | null;
  reason: string;
  doctor_referral: string | null;
  preferred_date: string;
  preferred_time: string;
  status: HBOTAppointmentStatus;
  admin_note: string | null;
  created_at: string;
  reviewed_at: string | null;
}

export interface HBOTAppointmentInsert {
  full_name: string;
  email: string;
  phone: string;
  booking_for: HBOTBookingFor;
  patient_name?: string | null;
  reason: string;
  doctor_referral?: string | null;
  preferred_date: string;
  preferred_time: string;
}

export const HBOT_TIME_SLOTS: readonly string[] = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00',
];

export function formatTimeSlot(t: string): string {
  const [hStr, mStr] = t.split(':');
  const h = parseInt(hStr, 10);
  const m = parseInt(mStr, 10);
  const period = h >= 12 ? 'PM' : 'AM';
  const hour = h > 12 ? h - 12 : h === 0 ? 12 : h;
  return `${hour}:${m.toString().padStart(2, '0')} ${period}`;
}

export function formatDate(dateStr: string): string {
  const [y, mo, d] = dateStr.split('-');
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${parseInt(d, 10)} ${months[parseInt(mo, 10) - 1]} ${y}`;
}

export const BOOKING_FOR_LABELS: Record<HBOTBookingFor, string> = {
  self: 'Myself',
  family_member: 'A family member',
  other: 'Someone else',
};

export const STATUS_LABELS: Record<HBOTAppointmentStatus, string> = {
  pending: 'Pending',
  confirmed: 'Confirmed',
  rejected: 'Rejected',
  cancelled: 'Cancelled',
};
