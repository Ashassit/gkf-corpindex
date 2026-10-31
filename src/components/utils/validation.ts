/**
 * Validation Utilities for Donation System
 * 
 * Contains reusable validation functions for PAN, email, and other inputs.
 */

/**
 * Validates Indian PAN (Permanent Account Number)
 * Format: 5 letters + 4 digits + 1 letter
 * Example: ABCDE1234F
 */
export function validatePAN(pan: string): boolean {
  const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
  return panRegex.test(pan);
}

/**
 * Masks PAN for display purposes
 * Example: ABCDE1234F -> ABCDE****F
 */
export function maskPAN(pan: string): string {
  if (pan.length !== 10) return '**********';
  return `${pan.substring(0, 5)}****${pan.charAt(9)}`;
}

/**
 * Validates email address
 */
export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates donation amount
 */
export function validateAmount(amount: number): boolean {
  return typeof amount === 'number' && amount > 0 && Number.isFinite(amount);
}

/**
 * Formats currency for Indian Rupees
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Sanitizes string input
 */
export function sanitizeString(input: string): string {
  return input.trim().replace(/[<>]/g, '');
}

/**
 * Validates Razorpay payment ID format
 */
export function validatePaymentId(paymentId: string): boolean {
  // Razorpay payment IDs typically start with 'pay_'
  return /^pay_[a-zA-Z0-9]{14,}$/.test(paymentId);
}

/**
 * Checks if a string contains only alphabets and spaces
 */
export function isAlphabetic(str: string): boolean {
  return /^[A-Za-z\s]+$/.test(str);
}

/**
 * Converts PAN to uppercase and removes invalid characters
 */
export function normalizePAN(pan: string): string {
  return pan.toUpperCase().replace(/[^A-Z0-9]/g, '').substring(0, 10);
}

/**
 * Validates Indian mobile number
 */
export function validateMobileNumber(mobile: string): boolean {
  // Indian mobile numbers: 10 digits, starting with 6-9
  return /^[6-9]\d{9}$/.test(mobile);
}

/**
 * Formats date to DD/MM/YYYY
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN').format(date);
}

/**
 * Validates form data for 80G submission
 */
export interface FormData80G {
  name: string;
  pan: string;
  email: string;
  consent: boolean;
}

export interface ValidationErrors {
  name: string;
  pan: string;
  email: string;
  consent: string;
}

export function validate80GForm(data: FormData80G): ValidationErrors {
  const errors: ValidationErrors = {
    name: '',
    pan: '',
    email: '',
    consent: '',
  };

  // Validate name
  if (!data.name.trim()) {
    errors.name = 'Full name is required';
  } else if (data.name.trim().length < 3) {
    errors.name = 'Name must be at least 3 characters';
  } else if (!isAlphabetic(data.name.trim())) {
    errors.name = 'Name should contain only letters';
  }

  // Validate PAN
  if (!data.pan) {
    errors.pan = 'PAN number is required';
  } else if (!validatePAN(data.pan)) {
    errors.pan = 'Invalid PAN format (e.g., ABCDE1234F)';
  }

  // Validate email
  if (!data.email) {
    errors.email = 'Email address is required';
  } else if (!validateEmail(data.email)) {
    errors.email = 'Invalid email format';
  }

  // Validate consent
  if (!data.consent) {
    errors.consent = 'You must provide consent to proceed';
  }

  return errors;
}

/**
 * Checks if validation errors object has any errors
 */
export function hasErrors(errors: ValidationErrors): boolean {
  return Object.values(errors).some(error => error !== '');
}
