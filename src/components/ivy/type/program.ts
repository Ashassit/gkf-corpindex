export interface Institution {
  id: string;
  name: string;
  category: string;
  type: string;
  address: string;
  contacts: {
    name: string;
    phone: string;
  }[];
  recognition: string;
  activities: string[];
  staff: number;
  beneficiaries: number | string;
  accommodation: boolean;
  maxVolunteers: number;
  volunteerActivities: string[];
  description: string;
  tagline: string;
  location: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  count: number;
  color: string;
}

export interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  preferredStartDate?: string;
  notes: string;
  category: string;
  organization: string;
  location: string;
}
