export interface Appointment {
  id: string
  serial_no: number
  rep_name: string
  company_name: string
  mobile_no: string
  appointment_date: string
  booked_at: string
}

export interface BookingFormData {
  rep_name: string
  company_name: string
  mobile_no: string
  appointment_date: string
}
