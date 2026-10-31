import { lazy, Suspense } from "react";
import { Helmet } from 'react-helmet-async';
import { CEOMessageSection } from "../about/CEOMessageSection";


// Lazy load sections that are below the fold
const IntroductionSection = lazy(() =>
  import("../about/IntroductionSection").then((module) => ({
    default: module.IntroductionSection,
  }))
);

const OriginSection = lazy(() =>
  import("../about/OriginSection").then((module) => ({
    default: module.OriginSection,
  }))
);

const VisionMissionSection = lazy(() =>
  import("../about/VisionMissionSection").then((module) => ({
    default: module.VisionMissionSection,
  }))
);

const WhyUniqueSection = lazy(() =>
  import("../hospital/sections/WhyUniqueSection").then((module) => ({
    default: (module as any).WhyUniqueSection ?? module.default,
  }))
);

// Loading fallback component
const SectionSkeleton = () => (
  <div className="bg-[#080808] py-24">
    <div className="max-w-7xl mx-auto px-6">
      <div className="space-y-6 animate-pulse">
        <div className="h-3 bg-white/[0.05] rounded-full w-24" />
        <div className="h-10 bg-white/[0.05] rounded-xl w-64" />
        <div className="h-[300px] bg-white/[0.03] rounded-3xl border border-white/[0.07]" />
      </div>
    </div>
  </div>
);

export function About() {
  return (
    <div className="min-h-screen bg-[#080808] relative overflow-hidden">
      <Helmet>
        <title>About Grace Kennett Foundation | Burns Hospital Madurai</title>
        <meta name="description" content="Learn about Grace Kennett Foundation — a leading burns care hospital in Madurai dedicated to providing specialist medical care, charity programs, and community health services." />
        <link rel="canonical" href="https://gkfmadurai.in/about" />
        <meta property="og:title" content="About Grace Kennett Foundation | GKF Hospital" />
        <meta property="og:description" content="Learn about GKF — Madurai's specialist burns care hospital and charitable foundation." />
        <meta property="og:url" content="https://gkfmadurai.in/about" />
      </Helmet>
      {/* CEO MESSAGE SECTION - Loaded immediately (above the fold) */}
      <CEOMessageSection />

      {/* Lazy loaded sections with Suspense boundaries */}
      <Suspense fallback={<SectionSkeleton />}>
        <IntroductionSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <OriginSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <VisionMissionSection />
      </Suspense>

      <Suspense fallback={<SectionSkeleton />}>
        <WhyUniqueSection />
      </Suspense>
    </div>
  );
}
