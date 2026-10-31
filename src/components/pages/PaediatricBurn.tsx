import { Hero } from '../PaediatricBurn/Hero';
import { Features } from '../PaediatricBurn/Features';
import { Goal } from '../PaediatricBurn/Goal';

export default function PaediatricBurn() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <Hero />
      <Features />
      <Goal />
    </div>
  );
}
