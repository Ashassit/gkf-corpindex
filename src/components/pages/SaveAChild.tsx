import { Suspense, lazy } from "react";
import { useInView } from "react-intersection-observer";
import { Helmet } from 'react-helmet-async';

const Hero = lazy(() => import("../save/Hero").then(m => ({ default: m.Hero })));
const WhoIsHelped = lazy(() => import("../save/WhoIsHelped").then(m => ({ default: m.WhoIsHelped })));
const WhatDifference = lazy(() => import("../save/WhatDifference").then(m => ({ default: m.WhatDifference })));
const HowToHelp = lazy(() => import("../save/HowToHelp").then(m => ({ default: m.HowToHelp })));
const SupportOptions = lazy(() => import("../save/SupportOptions").then(m => ({ default: m.SupportOptions })));
const DonationSection = lazy(() => import("../save/DonationSection").then(m => ({ default: m.DonationSection })));
const Footer = lazy(() => import("../save/Footer").then(m => ({ default: m.Footer })));

export function SaveAChild() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "400px", // loads a bit before scrolling into view
  });

  return (
    <div className="size-full bg-[#080808]">
      <Helmet>
        <title>Save a Child | Donate & Support Abandoned Children in Madurai | GKF</title>
        <meta name="description" content="Support GKF's Save a Child program — providing shelter, nutrition, healthcare, education, and adoption services for abandoned children in Madurai, Tamil Nadu. Donate today." />
        <link rel="canonical" href="https://gkfmadurai.in/save-child" />
        <meta property="og:title" content="Save a Child | Grace Kennett Foundation" />
        <meta property="og:description" content="Support abandoned children in Madurai through GKF's Save a Child program — shelter, nutrition, healthcare, and adoption." />
        <meta property="og:url" content="https://gkfmadurai.in/save-child" />
      </Helmet>
      {/* Hero always loads immediately */}
      <Hero />

      {/* Invisible trigger element right after Hero */}
      <div ref={ref}></div>

      {/* Other sections only render when user scrolls near */}
      {inView && (
        <Suspense fallback={<div className="text-center text-white p-10">Loading...</div>}>
          <WhoIsHelped />
          <WhatDifference />
          <HowToHelp />
          <SupportOptions />
          <DonationSection />
          <Footer />
        </Suspense>
      )}
    </div>
  );
}
