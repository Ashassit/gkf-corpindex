/**
 * Google Ads Conversion Tracking Utility
 * Tracks donation, appointment, and inquiry conversions for Google Ads
 */

// Track donation conversion
export const trackDonationConversion = (
  amount: number,
  program: 'save-child' | 'support-hospital' | 'little-drops'
) => {
  if (window.gtag) {
    window.gtag('event', 'purchase', {
      value: amount,
      currency: 'INR',
      transaction_id: `donation_${Date.now()}`,
      items: [
        {
          item_id: program,
          item_name: program === 'save-child' 
            ? 'Save a Child Program' 
            : program === 'support-hospital'
            ? 'Support Hospital Campaign'
            : 'Little Drops Program',
          item_category: 'donation',
          price: amount,
          quantity: 1,
        },
      ],
    });
  }
};

// Track appointment booking
export const trackAppointmentConversion = (
  appointmentType: 'patient' | 'medrep' | 'other',
  department?: string
) => {
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      value: 500, // Lead value in currency
      currency: 'INR',
      lead_type: appointmentType,
      appointment_type: appointmentType,
      department: department || 'general',
    });
  }
};

// Track adoption enquiry
export const trackAdoptionConversion = () => {
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      value: 1000,
      currency: 'INR',
      lead_type: 'adoption_enquiry',
    });
  }
};

// Track career/internship application
export const trackApplicationConversion = (type: 'internship' | 'career' | 'volunteering') => {
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      value: 300,
      currency: 'INR',
      lead_type: type,
    });
  }
};

// Track phone call (use with Google forwarding number)
export const trackPhoneCall = (campaignName?: string) => {
  if (window.gtag) {
    window.gtag('event', 'phone_call', {
      phone_number: '+91-4522601767',
      campaign_name: campaignName || 'Direct Call',
    });
  }
};

// Track page visit (donation pages, critical paths)
export const trackPageConversion = (pageName: string, pageCategory: string) => {
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_title: pageName,
      page_category: pageCategory,
      timestamp: new Date().toISOString(),
    });
  }
};

// Track WhatsApp booking initiation
export const trackWhatsAppBooking = (type: 'appointment' | 'medrep' | 'adoption' | 'internship') => {
  if (window.gtag) {
    window.gtag('event', 'generate_lead', {
      value: 250,
      currency: 'INR',
      lead_type: `whatsapp_${type}`,
      method: 'whatsapp',
    });
  }
};

// Track PDF map download/view
export const trackMapView = () => {
  if (window.gtag) {
    window.gtag('event', 'view_item', {
      items: [
        {
          item_id: 'hospital_map',
          item_name: 'Hospital Map PDF',
          item_category: 'navigation',
        },
      ],
    });
  }
};
