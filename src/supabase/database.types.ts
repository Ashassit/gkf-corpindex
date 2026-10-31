export type Database = {
  public: {
    Tables: {
      ip_user_roles: {
        Row: {
          id: string;
          user_id: string;
          role: 'super_admin' | 'admin' | 'medical' | 'finance';
          email: string;
          created_at: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          role: 'super_admin' | 'admin' | 'medical' | 'finance';
          email: string;
          created_at?: string;
          created_by?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          role?: 'super_admin' | 'admin' | 'medical' | 'finance';
          email?: string;
          created_at?: string;
          created_by?: string | null;
        };
        Relationships: [];
      };
      ip_patients: {
        Row: {
          id: string;
          name: string;
          patient_id: string;
          age: number;
          gender: 'male' | 'female' | 'other';
          status: 'active' | 'discharged';
          created_at: string;
          created_by: string | null;
          discharged_at: string | null;
          discharged_by: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          patient_id: string;
          age: number;
          gender: 'male' | 'female' | 'other';
          status?: 'active' | 'discharged';
          created_at?: string;
          created_by?: string | null;
          discharged_at?: string | null;
          discharged_by?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          patient_id?: string;
          age?: number;
          gender?: 'male' | 'female' | 'other';
          status?: 'active' | 'discharged';
          created_at?: string;
          created_by?: string | null;
          discharged_at?: string | null;
          discharged_by?: string | null;
        };
        Relationships: [];
      };
      ip_charges: {
        Row: {
          id: string;
          patient_id: string;
          charge_name: string;
          amount: number;
          created_at: string;
          created_by: string | null;
          updated_at: string;
          updated_by: string | null;
        };
        Insert: {
          id?: string;
          patient_id: string;
          charge_name: string;
          amount: number;
          created_at?: string;
          created_by?: string | null;
          updated_at?: string;
          updated_by?: string | null;
        };
        Update: {
          id?: string;
          patient_id?: string;
          charge_name?: string;
          amount?: number;
          created_at?: string;
          created_by?: string | null;
          updated_at?: string;
          updated_by?: string | null;
        };
        Relationships: [];
      };
      ip_payments: {
        Row: {
          id: string;
          patient_id: string;
          amount: number;
          payment_type: 'advance' | 'additional';
          notes: string | null;
          created_at: string;
          created_by: string | null;
        };
        Insert: {
          id?: string;
          patient_id: string;
          amount: number;
          payment_type: 'advance' | 'additional';
          notes?: string | null;
          created_at?: string;
          created_by?: string | null;
        };
        Update: {
          id?: string;
          patient_id?: string;
          amount?: number;
          payment_type?: 'advance' | 'additional';
          notes?: string | null;
          created_at?: string;
          created_by?: string | null;
        };
        Relationships: [];
      };
      ip_charge_types: {
        Row: {
          id: string;
          name: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      ip_audit_log: {
        Row: {
          id: string;
          table_name: string;
          record_id: string;
          action: 'INSERT' | 'UPDATE';
          user_id: string | null;
          user_role: 'super_admin' | 'admin' | 'medical' | 'finance' | null;
          changed_fields: Record<string, { old: unknown; new: unknown }> | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          table_name: string;
          record_id: string;
          action: 'INSERT' | 'UPDATE';
          user_id?: string | null;
          user_role?: 'super_admin' | 'admin' | 'medical' | 'finance' | null;
          changed_fields?: Record<string, { old: unknown; new: unknown }> | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          table_name?: string;
          record_id?: string;
          action?: 'INSERT' | 'UPDATE';
          user_id?: string | null;
          user_role?: 'super_admin' | 'admin' | 'medical' | 'finance' | null;
          changed_fields?: Record<string, { old: unknown; new: unknown }> | null;
          created_at?: string;
        };
        Relationships: [];
      };
      eatery_dishes: {
        Row: {
          id: string;
          name: string;
          price: number;
          is_available: boolean;
          prep_time_mins: number;
          display_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          price: number;
          is_available?: boolean;
          prep_time_mins?: number;
          display_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          price?: number;
          is_available?: boolean;
          prep_time_mins?: number;
          display_order?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      eatery_tables: {
        Row: {
          id: string;
          table_number: number;
          qr_token: string;
          created_at: string;
        };
        Insert: {
          id?: string;
          table_number: number;
          qr_token?: string;
          created_at?: string;
        };
        Update: {
          id?: string;
          table_number?: number;
          qr_token?: string;
          created_at?: string;
        };
        Relationships: [];
      };
      eatery_orders: {
        Row: {
          id: string;
          table_id: string;
          table_number: number;
          items: { id: string; name: string; price: number; qty: number }[];
          total: number;
          special_instructions: string | null;
          status: string;
          estimated_mins: number | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          table_id: string;
          table_number: number;
          items: { id: string; name: string; price: number; qty: number }[];
          total: number;
          special_instructions?: string | null;
          status?: string;
          estimated_mins?: number | null;
          created_at?: string;
        };
        Update: {
          id?: string;
          table_id?: string;
          table_number?: number;
          items?: { id: string; name: string; price: number; qty: number }[];
          total?: number;
          special_instructions?: string | null;
          status?: string;
          estimated_mins?: number | null;
          created_at?: string;
        };
        Relationships: [];
      };
      medrep_appointments: {
        Row: {
          id: string;
          created_at: string;
          serial_no: number;
          rep_name: string;
          company_name: string;
          mobile_no: string;
          appointment_date: string;
          booked_at: string;
        };
        Insert: {
          id?: string;
          created_at?: string;
          serial_no?: number;
          rep_name: string;
          company_name: string;
          mobile_no: string;
          appointment_date: string;
          booked_at?: string;
        };
        Update: {
          id?: string;
          created_at?: string;
          serial_no?: number;
          rep_name?: string;
          company_name?: string;
          mobile_no?: string;
          appointment_date?: string;
          booked_at?: string;
        };
        Relationships: [];
      };
      hbot_appointments: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          booking_for: 'self' | 'family_member' | 'other';
          patient_name: string | null;
          reason: string;
          doctor_referral: string | null;
          preferred_date: string;
          preferred_time: string;
          status: 'pending' | 'confirmed' | 'rejected' | 'cancelled';
          admin_note: string | null;
          created_at: string;
          reviewed_at: string | null;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone: string;
          booking_for?: 'self' | 'family_member' | 'other';
          patient_name?: string | null;
          reason: string;
          doctor_referral?: string | null;
          preferred_date: string;
          preferred_time: string;
          status?: 'pending' | 'confirmed' | 'rejected' | 'cancelled';
          admin_note?: string | null;
          created_at?: string;
          reviewed_at?: string | null;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          phone?: string;
          booking_for?: 'self' | 'family_member' | 'other';
          patient_name?: string | null;
          reason?: string;
          doctor_referral?: string | null;
          preferred_date?: string;
          preferred_time?: string;
          status?: 'pending' | 'confirmed' | 'rejected' | 'cancelled';
          admin_note?: string | null;
          created_at?: string;
          reviewed_at?: string | null;
        };
        Relationships: [];
      };
      feedback_submissions: {
        Row: {
          id: string;
          created_at: string;
          patient_name: string | null;
          age: number | null;
          bed_no: string | null;
          mobile: string | null;
          email: string | null;
          date: string | null;
          signature_url: string | null;
          suggestions: string | null;
          sentiment_score: number | null;
          sentiment_label: 'positive' | 'mixed' | 'poor' | null;
          review_prompt_shown: boolean;
          review_clicked: boolean;
          ratings: Record<string, 'Excellent' | 'Fair' | 'Poor'>;
        };
        Insert: {
          id?: string;
          created_at?: string;
          patient_name?: string | null;
          age?: number | null;
          bed_no?: string | null;
          mobile?: string | null;
          email?: string | null;
          date?: string | null;
          signature_url?: string | null;
          suggestions?: string | null;
          sentiment_score?: number | null;
          sentiment_label?: 'positive' | 'mixed' | 'poor' | null;
          review_prompt_shown?: boolean;
          review_clicked?: boolean;
          ratings?: Record<string, 'Excellent' | 'Fair' | 'Poor'>;
        };
        Update: {
          id?: string;
          created_at?: string;
          patient_name?: string | null;
          age?: number | null;
          bed_no?: string | null;
          mobile?: string | null;
          email?: string | null;
          date?: string | null;
          signature_url?: string | null;
          suggestions?: string | null;
          sentiment_score?: number | null;
          sentiment_label?: 'positive' | 'mixed' | 'poor' | null;
          review_prompt_shown?: boolean;
          review_clicked?: boolean;
          ratings?: Record<string, 'Excellent' | 'Fair' | 'Poor'>;
        };
        Relationships: [];
      };
    };
    Views: {
      feedback_section_averages: {
        Row: {
          total_submissions: number;
          avg_score: number;
          positive_count: number;
          mixed_count: number;
          poor_count: number;
          google_review_clicks: number;
          month: string;
        };
        Relationships: [];
      };
    };
    Functions: {
      get_available_slots: {
        Args: { target_date: string };
        Returns: number;
      };
      book_appointment: {
        Args: {
          p_rep_name: string;
          p_company_name: string;
          p_mobile_no: string;
          p_appointment_date: string;
        };
        Returns: {
          status: 'success' | 'slot_full' | 'duplicate';
          serial_no?: number;
          rep_name?: string;
          company_name?: string;
          mobile_no?: string;
          appointment_date?: string;
        };
      };
    };
  };
};
