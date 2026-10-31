import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      text: "Managing my sugar levels felt like a daily struggle. These healing meals didn't just support my medical needs — they brought joy back to eating. My HbA1c improved within months!",
      author: "Karthik.S",
      role: "Diabetes Wellness journey",
      condition: "Diabetic Diet",
    },
    {
      text: "After my gallbladder surgery, I was overwhelmed with diet restrictions. Eat&Heal made it effortless — their meals were soothing, safe, and tasty. My recovery was smoother than expected. Grateful for their expertise and care!",
      author: "Anjali R",
      role: "Post-Surgery Recovery",
      condition: "Healing Diet",
    },
    {
      text: "As a new mom with my baby in the NICU, I had no strength to think about meals. Eat&Heal took care of everything. Their postpartum diet plan gave me energy and peace of mind when I needed it most.",
      author: "Sneha V",
      role: "NICU Mom Care",
      condition: "Postpartum Nutrition",
    },
    {
      text: "Living with PCOS for years, I never thought food could heal. But these scientifically designed diets helped regulate my cycles and reduce inflammation. It's not just food — it's medicine on a plate.",
      author: "Divya M",
      role: "Chronic Condition Support",
      condition: "PCOS Management",
    },
    {
      text: "Healing diets used to mean boring food — until I discovered this service. Each meal is balanced, wholesome, and full of flavour. You can feel the science behind every bite!",
      author: "Dr. A. Thomas",
      role: "Taste + Science = Relief",
      condition: "Medical Professional",
    },
  ];

  const [current, setCurrent] = useState(0);
  const prev = () => setCurrent((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () => setCurrent((i) => (i === testimonials.length - 1 ? 0 : i + 1));
  const t = testimonials[current];

  return (
    <section className="bg-[#080808] py-20 md:py-28 relative overflow-hidden">
      {/* Ambient glows */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-amber-400 text-xs uppercase tracking-widest font-medium">
            Success Stories
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">Healing Journeys</h2>
          <p className="text-white/40 mt-3 text-base">Real people, real results, real healing</p>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mx-auto mt-6" />
        </div>

        {/* Main card */}
        <div className="bg-white/[0.03] border border-white/[0.1] rounded-3xl overflow-hidden">
          <div className="grid md:grid-cols-5">

            {/* Left accent panel */}
            <div className="hidden md:flex md:col-span-2 bg-gradient-to-br from-orange-500 to-amber-600 p-8 lg:p-10 flex-col justify-between relative overflow-hidden">
              <div className="absolute inset-0 bg-black/20" />
              <Quote className="relative w-20 h-20 text-white/15" />
              <div className="relative space-y-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-white text-lg">★</span>
                  ))}
                </div>
                <p className="text-white/80 text-xs uppercase tracking-widest">Featured Story</p>
                <h3 className="text-white text-xl font-semibold">{t.condition}</h3>
                <div className="w-10 h-0.5 bg-white/40 rounded-full" />
              </div>
            </div>

            {/* Right content */}
            <div className="md:col-span-3 p-7 md:p-10 flex flex-col justify-between gap-6">
              {/* Mobile stars */}
              <div className="flex gap-0.5 md:hidden">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-orange-400 text-sm">★</span>
                ))}
              </div>

              <blockquote className="text-white/65 text-base md:text-lg leading-relaxed italic flex-grow">
                "{t.text}"
              </blockquote>

              <div className="flex items-center justify-between flex-wrap gap-4 pt-5 border-t border-white/[0.08]">
                <div>
                  <p className="text-white font-semibold text-sm">{t.author}</p>
                  <p className="text-white/40 text-xs mt-0.5">{t.role}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-orange-500 text-white/50 hover:text-white flex items-center justify-center transition-all"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next testimonial"
                    className="w-9 h-9 rounded-xl bg-white/[0.06] hover:bg-orange-500 text-white/50 hover:text-white flex items-center justify-center transition-all"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Dot indicators */}
              <div className="flex items-center gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                    className={`h-1 rounded-full transition-all ${
                      i === current ? "w-7 bg-orange-500" : "w-1.5 bg-white/20"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Author tabs */}
        <div className="flex gap-2.5 mt-6 overflow-x-auto pb-1 scrollbar-none">
          {testimonials.map((tes, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl border text-xs transition-all ${
                i === current
                  ? "bg-orange-500/20 border-orange-500/40 text-orange-400"
                  : "bg-white/[0.03] border-white/[0.08] text-white/40 hover:text-white/60 hover:border-white/[0.15]"
              }`}
            >
              {tes.author}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
