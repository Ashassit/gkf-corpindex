import eat3 from "../../assets/eat/eat (4).jpeg";

export default function WhoWeAre() {
  return (
    <section className="relative bg-[#0c0c0c] py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Watermark */}
      <div className="absolute top-0 right-8 text-[200px] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        01
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Image left */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-orange-500/[0.05] rounded-3xl blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={eat3}
                alt="Who we are"
                className="w-full h-72 sm:h-80 md:h-96 lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent" />
              {/* Stats overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                {[
                  ["80+", "Years"],
                  ["NGO", "Trusted"],
                  ["GKF", "Madurai"],
                ].map(([val, lbl]) => (
                  <div
                    key={lbl}
                    className="flex-1 bg-black/70 backdrop-blur-sm border border-white/[0.1] rounded-xl p-3 text-center"
                  >
                    <p className="text-amber-400 font-bold text-base">{val}</p>
                    <p className="text-white/50 text-xs">{lbl}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Text right */}
          <div className="order-1 lg:order-2 space-y-6 lg:space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/[0.1] border border-amber-500/[0.2]">
              <span className="text-amber-400 text-xs uppercase tracking-widest font-medium">Our Story</span>
            </div>

            <div>
              <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
                Who We Are
              </h2>
              <h3 className="text-2xl sm:text-3xl mt-3 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent font-semibold leading-snug">
                From Hospital Healing<br />To Public Health
              </h3>
            </div>

            <div className="h-px bg-gradient-to-r from-orange-500/50 via-orange-500/20 to-transparent" />

            <p className="text-white/60 text-base md:text-lg leading-relaxed">
              GKF Eatery is the food and beverages wing of Grace Kennett Foundation,
              a trusted NGO & Hospital in Madurai with 80+ years of health service.
            </p>

            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              At Eat and Heal, we apply the science of clinical nutrition to promote healing
              and recovery. Our diet plans support your body's natural healing process.
            </p>

            <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
              <p className="text-orange-400 text-sm font-medium mb-1">Grace Kennett Foundation</p>
              <p className="text-white/50 text-sm leading-relaxed">
                A trusted NGO & Hospital serving Madurai for over 80 years.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
