import { Shield, DollarSign, Sliders, Calendar } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Hospital-Grade Safety",
    text: "From procurement to plating, every step meets the same clinical standards as our hospital kitchen.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: DollarSign,
    title: "Affordability",
    text: "Healing meals starting at just ₹65 — making clinical nutrition accessible to everyone.",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    icon: Sliders,
    title: "Tailored Options",
    text: "Low salt, no spice, soft food — every meal customized for your specific health condition.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Calendar,
    title: "Subscription Plans",
    text: "Flexible weekly and monthly plans that keep healing consistent and effortless.",
    gradient: "from-purple-500 to-violet-600",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#080808] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-amber-400 text-xs uppercase tracking-widest font-medium">
            Our Promise
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Eat&amp;Heal
            </span>
            ?
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f) => (
            <div
              key={f.title}
              className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-orange-500/20 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/[0.06]"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <f.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-semibold text-base mb-2">{f.title}</h3>
              <p className="text-white/45 text-sm leading-relaxed">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
