import type { FeedbackSection } from '../types/feedback';

export const FEEDBACK_SECTIONS: FeedbackSection[] = [
  {
    id: 'arrival',
    title: 'Facilities & Arrival',
    titleTa: 'வசதி / சேவைகள் — வருகையின் போது',
    icon: '🏥',
    questions: [
      {
        key: 'arrival_gates',
        label: 'Entry/Exit gates and cleanliness',
        labelTa: 'உள்ளே வெளியே செல்லும் வாயில்கள் மற்றும் அந்த பகுதியின் தூய்மை',
      },
      {
        key: 'arrival_signage',
        label: 'Signage in and around the Hospital',
        labelTa: 'அறிவிப்பு பலகைகள்',
      },
      {
        key: 'arrival_parking',
        label: 'Vehicle parking facilities',
        labelTa: 'வாகனம் நிறுத்தும் வசதி',
      },
      {
        key: 'arrival_wheelchair',
        label: 'Availability of wheel chairs and stretchers',
        labelTa: 'சக்கர நாற்காலி மற்றும் ஸ்டெச்சர் வசதி',
      },
    ],
  },
  {
    id: 'reception',
    title: 'Reception',
    titleTa: 'வரவேற்பறை',
    icon: '🪪',
    questions: [
      {
        key: 'reception_clarity',
        label: 'Clarity of information from staff including consent & cost of treatment',
        labelTa: 'நீங்கள் மேற்கொள்ளவிருக்கும் சிகிச்சை, அதற்கான ஒப்புதல் பற்றி வரவேற்பு அலுவலர் விளக்கும் விதம்',
      },
      {
        key: 'reception_registration',
        label: 'Registration procedure',
        labelTa: 'பதிவு செய்யும் முறை',
      },
      {
        key: 'reception_waiting',
        label: 'Waiting time',
        labelTa: 'வரவேற்பறையில் நீங்கள் காத்திருக்கும் நேரம்',
      },
    ],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    titleTa: 'மருத்துவ ஆலோசனை',
    subtitle: 'Clarity of information provided by consultant',
    subtitleTa: 'கீழ்க்கண்டவற்றிற்கு மருத்துவர் தரும் விளக்கம்',
    icon: '🩺',
    questions: [
      {
        key: 'consulting_medicine',
        label: 'Medicine',
        labelTa: 'மருத்துவர்',
      },
      {
        key: 'consulting_investigation',
        label: 'Investigation',
        labelTa: 'பரிசோதனைகள்',
      },
      {
        key: 'consulting_diet',
        label: 'Diet',
        labelTa: 'உணவு முறை',
      },
      {
        key: 'consulting_activity',
        label: 'Activity',
        labelTa: 'செயல்பாடுகள்',
      },
    ],
  },
  {
    id: 'admission',
    title: 'Admission',
    titleTa: 'அட்மிஷன்',
    icon: '🛏',
    questions: [
      {
        key: 'admission_room',
        label: 'Clarity of information provided regarding room availability',
        labelTa: 'நீங்கள் தேர்வு செய்யப்போகும் அறைகள் பற்றிய விளக்கம்',
      },
      {
        key: 'admission_cost',
        label: 'Cost of care',
        labelTa: 'உங்களுக்கு வழங்கப்படும் சேவைக்கான கட்டணம்',
      },
      {
        key: 'admission_waiting',
        label: 'Waiting time for admission',
        labelTa: 'நீங்கள் அனுமதிக்கப்பட காத்திருக்கும் நேரம்',
      },
    ],
  },
  {
    id: 'ipcare',
    title: 'IP Care',
    titleTa: 'உள்நோயாளி சேவை',
    icon: '❤️',
    questions: [
      {
        key: 'ipcare_cleanliness',
        label: "Room's cleanliness & facilities",
        labelTa: 'தங்கும் அறைகளின் வசதி மற்றும் தூய்மை',
      },
      {
        key: 'ipcare_staff',
        label: 'Service provided by Staff & Doctors',
        labelTa: 'மருத்துவர் மற்றும் செவிலியரின் சேவைகள்',
      },
    ],
  },
  {
    id: 'discharge',
    title: 'Discharge',
    titleTa: 'டிஸ்சார்ஜ்',
    icon: '🚪',
    questions: [
      {
        key: 'discharge_timing',
        label: 'Clarity of information regarding the timing of discharge',
        labelTa: 'உங்களுக்கான டிஸ்சார்ஜ் எப்பொழுது வழங்கப்படும் என்பதை பற்றி விளக்கம்',
      },
      {
        key: 'discharge_info',
        label: 'Information provided — medicine, diet, activity & revisit',
        labelTa: 'நீங்கள் உட்கொள்ளும் உணவு முறை செயல்பாடு மறுபரிசோதனைகள் பற்றி விளக்கம்',
      },
    ],
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    titleTa: 'மருந்தகம்',
    icon: '💊',
    questions: [
      {
        key: 'pharmacy_time',
        label: 'Time taken to get the medicines',
        labelTa: 'மருந்து வாங்குவதற்கு ஆகும் நேரம்',
      },
      {
        key: 'pharmacy_space',
        label: 'Space & cleanliness',
        labelTa: 'இடவசதி மற்றும் தூய்மை',
      },
    ],
  },
  {
    id: 'investigation',
    title: 'Investigation',
    titleTa: 'பரிசோதனை',
    icon: '🔬',
    questions: [
      {
        key: 'investigation_waiting',
        label: 'Waiting time to get the investigation done',
        labelTa: 'பரிசோதனை செய்ய காத்திருக்கும் நேரம்',
      },
      {
        key: 'investigation_cost',
        label: 'Clarity of information regarding the cost & time taken for investigations',
        labelTa: 'பரிசோதனைக்காக ஆகும் செலவு மற்றும் நேரம் ஆகியவற்றை பற்றி விளக்கம்',
      },
      {
        key: 'investigation_reports',
        label: 'Time taken to provide the reports on investigations',
        labelTa: 'பரிசோதனைகளின் முடிவுகளை வாங்க ஆகும் நேரம்',
      },
    ],
  },
  {
    id: 'eatery',
    title: 'Eatery',
    titleTa: 'உணவகம்',
    icon: '🍽',
    questions: [
      {
        key: 'eatery_cleanliness',
        label: 'Cleanliness',
        labelTa: 'தூய்மை',
      },
      {
        key: 'eatery_attitude',
        label: 'Attitude of Staff',
        labelTa: 'பணியாளர்களின் அணுகுமுறை',
      },
      {
        key: 'eatery_choice',
        label: 'Choice of food',
        labelTa: 'உணவு வகைகள்',
      },
      {
        key: 'eatery_cost',
        label: 'Cost of food',
        labelTa: 'உணவு பொருட்களின் விலை',
      },
      {
        key: 'eatery_waiting',
        label: 'Waiting time',
        labelTa: 'காத்திருக்கும் நேரம்',
      },
    ],
  },
];

export const GOOGLE_REVIEW_URL =
  'https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID';

export const SENTIMENT_THRESHOLD = 70;
