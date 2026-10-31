import { ImageWithFallback } from "../figma/ImageWithFallback";
import swiggy from "../../assets/eat/idmj05ptAq_1764854459042.jpeg";
import zomato from "../../assets/eat/Icon.png";

const platforms = [
  {
    step: "01",
    title: "Order via WhatsApp",
    img: "https://images.unsplash.com/photo-1661862649743-2799867c32b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGF0c2FwcCUyMGxvZ28lMjBncmVlbnxlbnwxfHx8fDE3NjQ4NTM3Mjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#25D366",
    accent: "border-[#25D366]/20 bg-[#25D366]/10",
  },
  {
    step: "02",
    title: "Buy on Swiggy",
    img: swiggy,
    color: "#FC8019",
    accent: "border-[#FC8019]/20 bg-[#FC8019]/10",
  },
  {
    step: "03",
    title: "Get on Zomato",
    img: zomato,
    color: "#FF2C2C",
    accent: "border-[#FF2C2C]/20 bg-[#FF2C2C]/10",
  },
  {
    step: "04",
    title: "Checkout on Website",
    img: "https://images.unsplash.com/photo-1669950200208-c8a60cd1d8de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwZ2xvYmUlMjBpY29ufGVufDF8fHx8MTc2NDg1MzcyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "#2563EB",
    accent: "border-[#2563EB]/20 bg-[#2563EB]/10",
  },
];

export default function HowToOrder() {
  return (
    <section className="bg-[#0c0c0c] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-amber-400 text-xs uppercase tracking-widest font-medium">
            Order Anywhere
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">How to Order?</h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((p) => (
            <div
              key={p.title}
              className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-white/[0.15] rounded-2xl p-6 flex flex-col items-center text-center gap-5 transition-all duration-300 hover:shadow-xl hover:shadow-black/40"
            >
              {/* Step number */}
              <span className="text-xs font-mono text-white/20 self-start">{p.step}</span>

              {/* Platform icon */}
              <div
                className={`w-16 h-16 rounded-2xl border ${p.accent} flex items-center justify-center overflow-hidden`}
              >
                <ImageWithFallback
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <h3 className="text-white font-semibold text-base leading-snug">{p.title}</h3>

              <div className="w-full pt-4 border-t border-white/[0.06]">
                <button
                  className="w-full py-2.5 rounded-xl text-white text-sm font-semibold hover:opacity-80 active:opacity-60 transition-opacity"
                  style={{ backgroundColor: p.color }}
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
