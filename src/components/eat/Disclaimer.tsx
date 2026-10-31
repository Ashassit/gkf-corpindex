import { AlertCircle, Heart } from "lucide-react";

export function Disclaimer() {
  return (
    <section className="bg-[#0c0c0c] py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/[0.03] border border-white/[0.08] rounded-3xl overflow-hidden">

          {/* Amber gradient header */}
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-orange-600 px-6 py-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm flex-shrink-0">
                <AlertCircle className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-white text-xl md:text-2xl font-bold">Important Notice</h2>
            </div>
          </div>

          {/* Content */}
          <div className="p-7 md:p-10">
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-orange-500/[0.15] flex items-center justify-center mt-0.5">
                <Heart className="w-4 h-4 text-orange-400" />
              </div>
              <div className="space-y-4 text-white/55 text-sm md:text-base leading-relaxed">

                <p>
                  At{" "}
                  <span className="text-orange-400 font-medium">Eat &amp; Heal (GKF Eatery)</span>,
                  every meal is thoughtfully crafted by our hospital dietitians and prepared in a
                  clean, hospital-grade kitchen. Our goal is to support healing and recovery through
                  safe and nutritious food.
                </p>

                <div className="bg-amber-500/[0.08] border-l-4 border-amber-500 pl-4 pr-4 py-3 rounded-r-xl">
                  <p>
                    Our meals are part of{" "}
                    <span className="text-amber-400 font-medium">dietary support</span> and not a
                    replacement for medical advice or treatment. Individuals with serious health
                    conditions should consult their doctor or a licensed healthcare provider before
                    relying solely on diet-based interventions.
                  </p>
                </div>

                <p>
                  <span className="text-orange-400 font-medium">Food allergies can happen</span>{" "}
                  inspite of avoiding known allergens. We take every precaution, but individual
                  reactions may vary.
                </p>

                <p>
                  We are here to support your health journey, but{" "}
                  <span className="text-orange-400 font-medium">
                    always alongside your medical team
                  </span>
                  .
                </p>

                <div className="pt-4 border-t border-white/[0.08]">
                  <p className="text-xs text-white/30 italic">
                    <span className="text-orange-400/70">Disclaimer:</span> Actual product
                    appearance may differ from the images shown. Figma Make is not meant for
                    collecting PII or securing sensitive data.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
