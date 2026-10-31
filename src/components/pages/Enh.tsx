// import { Hero } from '../eat/Hero';
// import { About } from '../eat/About';
// import { DietCategories } from '../eat/DietCategories';
// import { HowToOrder } from '../eat/HowToOrder';
// import { WhyChoose } from '../eat/WhyChoose';
// import { Kitchen } from '../eat/Kitchen';
// import { Testimonials } from '../eat/Testimonials';

// import { Disclaimer } from '../eat/Disclaimer';

// export default function Enh() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Hero />
//       <About />
//       <DietCategories />
//       <HowToOrder />
//       <WhyChoose />
//       <Kitchen />
//       <Testimonials />
//       <Disclaimer />
//     </div>
//   );
// }
import Hero from "../eat/Hero";
import WhoWeAre from "../eat/WhoWeAre";
import DietCategories from "../eat/DietCategories";
import HowToOrder from "../eat/HowToOrder";
import WhyChoose from "../eat/WhyChoose";
import {Kitchen} from "../eat/Kitchen";
import {Testimonials} from "../eat/Testimonials";
import {Disclaimer} from "../eat/Disclaimer";

export default function Enh() {
  return (
    <div className="pt-8 w-full overflow-hidden">
      <Hero />
      <WhoWeAre />
      <DietCategories />
      <HowToOrder />
      <WhyChoose />
      <Kitchen />
      <Testimonials />
      <Disclaimer />
    </div>
  );
}
