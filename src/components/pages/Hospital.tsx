import { useState, lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { HeroSection } from "../hospital/HeroSection";
import { ServicesSection } from "../hospital/ServicesSection";
import { HealthCheckupModal } from "../HealthCheckupModal";

// Lazy load heavy sections for better performance

const FacilitiesSection = lazy(() => import("../hospital/sections/FacilitiesSection"));
const ConsultantsSection = lazy(() => import("../hospital/sections/ConsultantsSection"));
const OPDGuidelinesSection = lazy(() => import("../hospital/sections/OPDGuidelinesSection"));
const AdmissionProcessSection = lazy(() => import("../hospital/sections/AdmissionProcessSection"));
const PatientRightsSection = lazy(() => import("../hospital/sections/PatientRightsSection"));
const QualityManagementSection = lazy(() => import("../hospital/sections/QualityManagementSection"));
const HospitalGallerySection = lazy(() => import("../hospital/sections/HospitalGallerySection"));
const InsuranceSection = lazy(() => import("../hospital/sections/InsuranceSection"));
const LicensesSection = lazy(() => import("../hospital/sections/LicensesSection"));

// Loading component
const SectionLoader = () => (
  <div className="py-20 flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-600"></div>
  </div>
);

export function Hospital() {
  const [showHealthModal, setShowHealthModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#080808]">
      <Helmet>
        <title>Hospital Services in Madurai | Consultants & Facilities | Grace Kennett Foundation</title>
        <meta name="description" content="Explore GKF Hospital's full range of medical services, specialist consultants, OPD timings, facilities, and insurance coverage in Madurai. Book an appointment today." />
        <link rel="canonical" href="https://gkfmadurai.in/hospital" />
        <meta property="og:title" content="GKF Hospital Services & Consultants | Madurai" />
        <meta property="og:description" content="Full range of medical services, specialist consultants, and facilities at GKF Hospital, Madurai." />
        <meta property="og:url" content="https://gkfmadurai.in/hospital" />
      </Helmet>
      <HeroSection onHealthCheckupClick={() => setShowHealthModal(true)} />

      <ServicesSection />

      <Suspense fallback={<SectionLoader />}>
        <FacilitiesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <ConsultantsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <OPDGuidelinesSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <AdmissionProcessSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <PatientRightsSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <QualityManagementSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <HospitalGallerySection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <InsuranceSection />
      </Suspense>

      <Suspense fallback={<SectionLoader />}>
        <LicensesSection />
      </Suspense>

      <HealthCheckupModal
        isOpen={showHealthModal}
        onClose={() => setShowHealthModal(false)}
      />
    </div>
  );
}
