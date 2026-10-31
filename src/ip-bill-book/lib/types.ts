export type IPRole = 'super_admin' | 'admin' | 'medical' | 'finance';

export interface IPChargeType {
  id: string;
  name: string;
  created_at: string;
}
export type PatientStatus = 'active' | 'discharged';

export interface IPUserRole {
  id: string;
  user_id: string;
  role: IPRole;
  email: string;
  created_at: string;
  created_by: string | null;
}

export interface IPPatient {
  id: string;
  name: string;
  patient_id: string;
  age: number;
  gender: 'male' | 'female' | 'other';
  status: PatientStatus;
  created_at: string;
  created_by: string | null;
  discharged_at: string | null;
  discharged_by: string | null;
}

export interface IPCharge {
  id: string;
  patient_id: string;
  charge_name: string;
  amount: number;
  created_at: string;
  created_by: string | null;
  updated_at: string;
  updated_by: string | null;
}

export interface IPPayment {
  id: string;
  patient_id: string;
  amount: number;
  payment_type: 'advance' | 'additional';
  notes: string | null;
  created_at: string;
  created_by: string | null;
}

export interface IPAuditLog {
  id: string;
  table_name: string;
  record_id: string;
  action: 'INSERT' | 'UPDATE';
  user_id: string | null;
  user_role: IPRole | null;
  changed_fields: Record<string, { old: unknown; new: unknown }> | null;
  created_at: string;
}

export const ROLE_PERMISSIONS: Record<IPRole, {
  canCreatePatient: boolean;
  canDischarge: boolean;
  canAddCharges: boolean;
  canEditCharges: boolean;
  canDeleteCharges: boolean;
  canRecordPayments: boolean;
  canViewAuditLog: boolean;
  canManageUsers: boolean;
  canManageChargeTypes: boolean;
}> = {
  super_admin: {
    canCreatePatient: false,
    canDischarge: false,
    canAddCharges: false,
    canEditCharges: false,
    canDeleteCharges: false,
    canRecordPayments: false,
    canViewAuditLog: true,
    canManageUsers: true,
    canManageChargeTypes: true,
  },
  admin: {
    canCreatePatient: true,
    canDischarge: true,
    canAddCharges: true,
    canEditCharges: true,
    canDeleteCharges: true,
    canRecordPayments: true,
    canViewAuditLog: false,
    canManageUsers: false,
    canManageChargeTypes: true,
  },
  medical: {
    canCreatePatient: false,
    canDischarge: false,
    canAddCharges: true,
    canEditCharges: false,
    canDeleteCharges: false,
    canRecordPayments: false,
    canViewAuditLog: false,
    canManageUsers: false,
    canManageChargeTypes: false,
  },
  finance: {
    canCreatePatient: true,
    canDischarge: true,
    canAddCharges: true,
    canEditCharges: true,
    canDeleteCharges: true,
    canRecordPayments: true,
    canViewAuditLog: false,
    canManageUsers: false,
    canManageChargeTypes: false,
  },
};

export const ROLE_LABELS: Record<IPRole, string> = {
  super_admin: 'Super Admin',
  admin: 'Admin',
  medical: 'Medical',
  finance: 'Finance',
};

export interface IPOutletContext {
  role: IPRole;
  userId: string;
  email: string;
}
