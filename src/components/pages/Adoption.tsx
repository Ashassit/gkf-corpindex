import { Helmet } from 'react-helmet-async';
import { Hero } from "../adoption/Hero";
import { Introduction } from "../adoption/Introduction";
import { RightsSection } from "../adoption/RightsSection";
import { AdoptionServices } from "../adoption/AdoptionServices";
import { AdoptionProcess } from "../adoption/AdoptionProcess";
import { SocialWorkers } from "../adoption/SocialWorkers";
import { ShortFilm } from "../adoption/ShortFilm";
import { ContactSection } from "../adoption/ContactSection";

export function Adoption() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Helmet>
        <title>Child Adoption Services in Madurai | Grace Kennett Foundation</title>
        <meta name="description" content="Grace Kennett Foundation supports child adoption in Madurai. Learn about the adoption process, children's rights, and how to begin your adoption journey with us." />
        <link rel="canonical" href="https://gkfmadurai.in/adoption" />
        <meta property="og:title" content="Child Adoption in Madurai | Grace Kennett Foundation" />
        <meta property="og:description" content="GKF supports child adoption in Madurai. Learn about the process and how to begin your adoption journey." />
        <meta property="og:url" content="https://gkfmadurai.in/adoption" />
      </Helmet>
      <Hero />
      <Introduction />
      <RightsSection />
      <AdoptionServices />
      <AdoptionProcess />
      <SocialWorkers />
      <ShortFilm />
      <ContactSection />
    </div>
  );
}
