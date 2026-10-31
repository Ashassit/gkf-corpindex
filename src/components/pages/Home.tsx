import { lazy, Suspense } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import { HeroSection } from "../home/HeroSection";

// interface Testimonial {
//   name: string;
//   role: string;
//   image: string;
//   quote: string;
//   rating: number;
// }

// const hospitalTestimonials: Testimonial[] = [
//   {
//     name: "John D.",
//     role: "------------------",
//     image: "https://picsum.photos/200/200?random=3",
//     quote: "------------------------------------------------------",
//     rating: 5,
//   },
//   {
//     name: "Sarah L.",
//     role: "Family of a Patient",
//     image: "https://picsum.photos/200/200?random=4",
//     quote: "---------------------------------------------------------------",
//     rating: 5,
//   },
//   {
//     name: "Michael B.",
//     role: "Maternity Ward Visitor",
//     image: "https://picsum.photos/200/200?random=5",
//     quote: "----------------------------------------------------",
//     rating: 5,
//   }
// ];

// const hospitalTheme = {
//     from: 'from-cyan-400',
//     to: 'to-blue-500',
//   };


// Lazy load sections for better performance
const DashboardSection = lazy(() =>
  import("../home/DashboardSection").then((module) => ({
    default: module.DashboardSection,
  }))
);

const UnitsSection = lazy(() =>
  import("../home/UnitsSection").then((module) => ({
    default: module.UnitsSection,
  }))
);

const TeamSection = lazy(() =>
  import("../home/TeamSection")
);

const TestimonialsSection = lazy(() =>
  import("../home/TestimonialsSection").then((module) => ({
    default: module.TestimonialsSection,
  }))
);

// const TestimonialCarousel = lazy(() =>
//   import("../home/HospitalTestimonialsSection").then((module) => ({
//     default: module.TestimonialCarousel,
//   }))
// );

const ContactSection = lazy(() =>
  import("../home/ContactSection").then((module) => ({
    default: module.ContactSection,
  }))
);

// Loading component
function SectionLoader() {
  return (
    <div className="py-32 flex items-center justify-center">
      <div className="flex flex-col items-center space-y-4">
        <div className="w-12 h-12 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
        <p className="text-white/60">Loading...</p>
      </div>
    </div>
  );
}

 

export function Home() {
  const navigate = useNavigate();

  const onNavigate = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <div className="min-h-screen pt-16 overflow-hidden" id="home">
      <Helmet>
        <title>Grace Kennett Foundation | Burns Hospital & Healthcare Madurai</title>
        <meta name="description" content="Grace Kennett Foundation — Madurai's specialist burns care hospital. Burns unit, HBOT, skin bank, dialysis, multi-specialty care. Charity programs & 24/7 emergency. Call +91 4522601767." />
        <link rel="canonical" href="https://gkfmadurai.in/" />
        <meta property="og:title" content="Grace Kennett Foundation | Burns Hospital Madurai" />
        <meta property="og:description" content="Specialist burns care hospital in Madurai. Burns unit, HBOT, skin bank, dialysis & multi-specialty services." />
        <meta property="og:url" content="https://gkfmadurai.in/" />
      </Helmet>
      {/* Hero Section - Load immediately */}
      <HeroSection />

      {/* Dashboard Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <DashboardSection onNavigate={onNavigate} />
      </Suspense>

      {/* Units Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <UnitsSection onNavigate={onNavigate} />
      </Suspense>

      {/* Team Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <TeamSection />
      </Suspense>

      {/* Testimonials Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <TestimonialsSection />
      </Suspense>

      {/* Hospital Testimonials Carousel - Lazy loaded */}
      {/* <Suspense fallback={<SectionLoader />}>
        <TestimonialCarousel 
          title="Hospital Patient Stories"
          subtitle="Experiences from those we've cared for"
          testimonials={hospitalTestimonials}
          themeGradient={hospitalTheme}
       />
      </Suspense> */}

      {/* Contact Section - Lazy loaded */}
      <Suspense fallback={<SectionLoader />}>
        <ContactSection />
      </Suspense>
    </div>
  );
}
