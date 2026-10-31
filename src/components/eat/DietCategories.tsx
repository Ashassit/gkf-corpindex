import eat4 from "../../assets/eat/eat (4).jpeg";
import eat5 from "../../assets/eat/eat (5).jpeg";
import eat6 from "../../assets/eat/eat (6).jpeg";

const categories = [
  {
    title: "All Healing Diets",
    image: eat6,
    items: [
      "Pulmo Care Diet",
      "Liver Care Diet",
      "Renal Diet",
      "Gout Diet",
      "Burns Diet",
      "Gluten Free Diet",
      "Lactose Free Diet",
    ],
  },
  {
    title: "Diabetic Diet",
    image: eat4,
    items: ["Breakfast", "Lunch", "Dinner"],
  },
  {
    title: "WSL (Weigh - Stress Less)",
    image: eat5,
    items: ["Intermittent Fasting (IF)", "Time Restricted Eating (TRE)"],
  },
  {
    title: "Everyday Health Diet",
    image: eat6,
    items: ["Breakfast", "Lunch", "Dinner"],
  },
];

export default function DietCategories() {
  return (
    <section className="bg-[#080808] py-20 md:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-amber-400 text-xs uppercase tracking-widest font-medium">
            What We Offer
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mt-3">
            Our Diet{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              Categories
            </span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-orange-500/60 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {categories.map((cat, i) => (
            <div
              key={cat.title}
              className="group bg-white/[0.03] hover:bg-white/[0.05] border border-white/[0.08] hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/[0.07] flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                {/* Number badge */}
                <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center">
                  <span className="text-white text-xs font-bold">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-white font-semibold text-sm md:text-base leading-snug">
                  {cat.title}
                </h3>
                <ul className="mt-3 space-y-1.5 flex-grow">
                  {cat.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-white/45 text-xs">
                      <span className="w-1 h-1 bg-orange-500/60 rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <button className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-amber-500/90 to-orange-500/90 hover:from-amber-400 hover:to-orange-400 text-white text-xs font-semibold transition-all">
                  Talk to Dietitian
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
