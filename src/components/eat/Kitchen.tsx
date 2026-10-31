import { CheckCircle, ChefHat, Leaf, Award, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Kitchen() {
  const features = [
    {
      icon: ChefHat,
      text: "Our kitchen is clean, safe, and well-organized.",
    },
    {
      icon: Award,
      text: "Chefs follow hygiene and cook with care.",
    },
    {
      icon: Leaf,
      text: "We use fresh, local ingredients in every meal.",
    },
    {
      icon: Sparkles,
      text: "We combine science, nutrition, and taste in every meal we serve.",
    },
  ];

  return (
    <section className="bg-[#0c0c0c] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="text-amber-400 text-xs uppercase tracking-widest font-medium">
                  Our Facility
                </span>
                <div className="flex items-center gap-1.5 bg-orange-500/[0.15] border border-orange-500/[0.25] text-orange-400 px-3 py-1.5 rounded-lg text-xs font-semibold">
                  <Award className="w-3.5 h-3.5" />
                  FSSAI Certified
                </div>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Kitchen &amp; Chef<br />Excellence
              </h2>
              <div className="w-16 h-px bg-gradient-to-r from-orange-500/70 to-transparent mt-5" />
            </div>

            {/* Feature list */}
            <div className="space-y-2">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="group flex items-start gap-4 p-4 rounded-xl border-l-2 border-l-transparent hover:border-l-orange-500 bg-transparent hover:bg-white/[0.03] transition-all duration-200"
                >
                  <div className="w-10 h-10 flex-shrink-0 rounded-xl bg-orange-500/[0.12] flex items-center justify-center group-hover:bg-orange-500 transition-colors">
                    <feat.icon className="w-5 h-5 text-orange-400 group-hover:text-white transition-colors" />
                  </div>
                  <div className="flex-1 flex items-center justify-between gap-3">
                    <p className="text-white/60 text-sm leading-relaxed">{feat.text}</p>
                    <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              ))}
            </div>

            {/* Standards callout */}
            <div className="p-5 rounded-2xl bg-orange-500/[0.06] border border-orange-500/[0.18]">
              <p className="text-white/60 text-sm leading-relaxed">
                <span className="text-orange-400 font-medium">Hospital-grade standards:</span> Our
                kitchen follows the same stringent protocols as hospital kitchens, ensuring every
                meal meets the highest safety and quality standards.
              </p>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative order-first lg:order-last">
            <div className="absolute -inset-6 bg-orange-500/[0.04] rounded-3xl blur-3xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1512149519538-136d1b8c574a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBraXRjaGVuJTIwY29va2luZ3xlbnwxfHx8fDE3NjQ3NjcyNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Professional hospital-grade kitchen"
                className="w-full h-72 sm:h-80 md:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 bg-black/75 backdrop-blur-md border border-white/[0.1] rounded-2xl p-4">
                <p className="text-white/70 text-sm leading-relaxed">
                  Every meal is prepared with care, following clinical nutrition guidelines while
                  maintaining exceptional taste.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
