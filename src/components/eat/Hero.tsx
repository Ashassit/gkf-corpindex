import eat1 from "../../assets/eat/eat (1).jpeg";
import eat2 from "../../assets/eat/eat (2).jpeg";

export default function Hero() {
  return (
    <section className="relative bg-[#080808] min-h-screen flex items-center overflow-hidden py-16">
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-orange-500/[0.06] rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-24 w-96 h-96 bg-amber-500/[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Left: Content */}
          <div className="space-y-8 lg:space-y-10">

            <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-orange-500/[0.1] border border-orange-500/[0.2]">
              <span className="w-1.5 h-1.5 bg-orange-400 rounded-full animate-pulse" />
              <span className="text-orange-400 text-xs uppercase tracking-widest font-medium">
                FSSAI Certified · Hospital-Grade Kitchen
              </span>
            </div>

            <div className="space-y-1">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none text-white">
                Safe Food
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Scientific
              </h1>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-none text-white/25">
                Soulful
              </h1>
            </div>

            <p className="text-white/50 text-base md:text-lg leading-relaxed max-w-sm">
              GKF Eatery is not just about food — it's about healing through food.
              Dietitian recommended, doctor-approved, chef-prepared.
            </p>

            <div className="flex gap-8 py-5 border-y border-white/[0.07]">
              {[
                ["80+", "Years of Trust"],
                ["₹65", "Starting from"],
                ["FSSAI", "Certified"],
              ].map(([val, lbl]) => (
                <div key={lbl}>
                  <p className="text-2xl font-bold text-amber-400">{val}</p>
                  <p className="text-xs text-white/40 mt-0.5">{lbl}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-white text-sm font-semibold shadow-lg shadow-orange-500/25 transition-all">
                Order Now
              </button>
              <button className="px-6 py-3 rounded-xl bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] text-white text-sm font-medium backdrop-blur-sm transition-all">
                WhatsApp Us
              </button>
              <button className="px-6 py-3 rounded-xl border border-white/[0.08] hover:border-white/[0.2] text-white/50 hover:text-white/80 text-sm transition-all">
                Diet Plans
              </button>
            </div>
          </div>

          {/* Right: Images (desktop) */}
          <div className="relative hidden lg:block h-[580px]">
            <div className="absolute right-0 top-0 bottom-16 left-12 rounded-3xl overflow-hidden shadow-2xl">
              <img src={eat1} alt="Healthy meal" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 w-[52%] rounded-2xl overflow-hidden border-[3px] border-[#080808] shadow-2xl">
              <img src={eat2} alt="Nutritious dish" className="w-full h-52 object-cover" />
            </div>
            {/* Floating glass card */}
            <div className="absolute top-8 left-0 bg-[#0c0c0c]/90 backdrop-blur-xl border border-white/[0.1] rounded-2xl p-4 shadow-2xl">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-green-400 text-xs font-medium">Live Menu</span>
              </div>
              <p className="text-white text-sm font-semibold">Diabetic Diet</p>
              <p className="text-white/40 text-xs mt-0.5">+7 healing plans</p>
            </div>
          </div>

          {/* Mobile: stacked images */}
          <div className="grid grid-cols-2 gap-3 lg:hidden">
            <img src={eat1} alt="Healthy meal" className="rounded-2xl w-full h-44 object-cover" />
            <img src={eat2} alt="Nutritious dish" className="rounded-2xl w-full h-44 object-cover mt-6" />
          </div>
        </div>
      </div>
    </section>
  );
}
