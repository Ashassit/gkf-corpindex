import { lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { HeroSection } from '../burnsCenter/HeroSection';
import { FeatureCards } from '../burnsCenter/FeatureCards';

// Lazy load all below-fold sections so they don't block the initial chunk
const MagnitudeSection = lazy(() => import('../burnsCenter/MagnitudeSection').then(m => ({ default: m.MagnitudeSection })));
const HistorySection = lazy(() => import('../burnsCenter/HistorySection').then(m => ({ default: m.HistorySection })));
const FirstAidSection = lazy(() => import('../burnsCenter/FirstAidSection').then(m => ({ default: m.FirstAidSection })));
const RiskFactorsSection = lazy(() => import('../burnsCenter/RiskFactorsSection').then(m => ({ default: m.RiskFactorsSection })));
const PreventionSection = lazy(() => import('../burnsCenter/PreventionSection').then(m => ({ default: m.PreventionSection })));
const ChildPreventionSection = lazy(() => import('../burnsCenter/ChildPreventionSection').then(m => ({ default: m.ChildPreventionSection })));
const PathophysiologySection = lazy(() => import('../burnsCenter/PathophysiologySection').then(m => ({ default: m.PathophysiologySection })));
const ReferralGuidelinesSection = lazy(() => import('../burnsCenter/ReferralGuidelinesSection').then(m => ({ default: m.ReferralGuidelinesSection })));
const OnArrivalSection = lazy(() => import('../burnsCenter/OnArrivalSection').then(m => ({ default: m.OnArrivalSection })));
const OutpatientCareSection = lazy(() => import('../burnsCenter/OutpatientCareSection').then(m => ({ default: m.OutpatientCareSection })));
const InpatientManagementSection = lazy(() => import('../burnsCenter/InpatientManagementSection').then(m => ({ default: m.InpatientManagementSection })));
const RespiratorySection = lazy(() => import('../burnsCenter/RespiratorySection').then(m => ({ default: m.RespiratorySection })));
const PlateletSection = lazy(() => import('../burnsCenter/PlateletSection').then(m => ({ default: m.PlateletSection })));
const BurnsBathSection = lazy(() => import('../burnsCenter/BurnsBathSection').then(m => ({ default: m.BurnsBathSection })));
const PhysiotherapySection = lazy(() => import('../burnsCenter/PhysiotherapySection').then(m => ({ default: m.PhysiotherapySection })));
const NutritionSection = lazy(() => import('../burnsCenter/NutritionSection').then(m => ({ default: m.NutritionSection })));
const ScarManagementSection = lazy(() => import('../burnsCenter/ScarManagementSection').then(m => ({ default: m.ScarManagementSection })));
const RehabilitationSection = lazy(() => import('../burnsCenter/RehabilitationSection').then(m => ({ default: m.RehabilitationSection })));
const TrainingProgramsSection = lazy(() => import('../burnsCenter/TrainingProgramsSection').then(m => ({ default: m.TrainingProgramsSection })));
const SkinBankSection = lazy(() => import('../burnsCenter/SkinBankSection').then(m => ({ default: m.SkinBankSection })));
const FAQSection = lazy(() => import('../burnsCenter/FAQSection').then(m => ({ default: m.FAQSection })));
const MythsSection = lazy(() => import('../burnsCenter/MythsSection').then(m => ({ default: m.MythsSection })));
const RequirementSection = lazy(() => import('../burnsCenter/RequirementSection').then(m => ({ default: m.RequirementSection })));
const TamilSection = lazy(() => import('../burnsCenter/TamilSection').then(m => ({ default: m.TamilSection })));

const SectionSkeleton = () => (
  <div className="bg-[#080808] py-16">
    <div className="container mx-auto px-6 max-w-6xl space-y-6 animate-pulse">
      <div className="h-8 bg-white/[0.05] rounded-full w-48 mx-auto" />
      <div className="h-48 bg-white/[0.03] rounded-2xl border border-white/[0.05]" />
    </div>
  </div>
);

export function BurnsCenter() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Helmet>
        <title>Burns Treatment Hospital in Madurai | ABLS Centre | Grace Kennett Foundation</title>
        <meta name="description" content="Specialist burns care in Madurai — 24/7 emergency, skin grafting, reconstruction & rehabilitation. Advanced Burns Life Support Centre (ABLS). Call +91 4522601767." />
        <link rel="canonical" href="https://gkfmadurai.in/burns-center" />
        <meta property="og:title" content="Burns Treatment Hospital in Madurai | Grace Kennett Foundation" />
        <meta property="og:description" content="Specialist burns care in Madurai — 24/7 emergency, skin grafting, reconstruction & rehabilitation. ABLS Centre." />
        <meta property="og:url" content="https://gkfmadurai.in/burns-center" />
      </Helmet>
      {/* Above fold — load immediately */}
      <HeroSection />
      <FeatureCards />

      {/* Below fold — each section loads independently */}
      <Suspense fallback={<SectionSkeleton />}><MagnitudeSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><HistorySection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><FirstAidSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><RiskFactorsSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><PreventionSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><ChildPreventionSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><PathophysiologySection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><ReferralGuidelinesSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><OnArrivalSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><OutpatientCareSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><InpatientManagementSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><RespiratorySection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><PlateletSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><BurnsBathSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><PhysiotherapySection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><NutritionSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><ScarManagementSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><RehabilitationSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><TrainingProgramsSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><SkinBankSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><FAQSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><MythsSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><RequirementSection /></Suspense>
      <Suspense fallback={<SectionSkeleton />}><TamilSection /></Suspense>
    </div>
  );
}
