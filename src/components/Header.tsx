import { useEffect, useRef, useState, type JSX } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { debounce } from "./PerformanceOptimizer";
import {
  Menu,
  Search,
  Heart,
  X,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import { Button } from "./ui/button";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
  SheetTitle,
  SheetFooter,
} from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import logo1 from "../assets/gkf-logo-fin.webp";
import logo2 from "../assets/logo2.png";
import giflogo from "../assets/header-giffile.gif";
import logo1M from "../assets/logo/logo1.png";
import logo2M from "../assets/logo/gkf-logo-fin-name.png";
import logo3M from "../assets/logo/gkf-logo-fin-sc.png";
import { Input } from "./ui/input";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";
import { trackCallClick, trackCTAClick } from "./utils/analytics";

type SearchItem = {
  title: string;
  path: string;
  keywords: string[];
  description: string;
};  



type ScrollProps = { isScrolled: boolean };

const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Who We Are", path: "/about" },
  {
    label: "Choose Health",
    path: "/services",
    children: [
      { label: "Hospital", path: "/hospital" },
      { label: "Burn Center", path: "/burns-center" },
      { label: "Paediatric Burns", path: "/paediatric-burn" },
      { label: "Skin Bank", path: "/skin-bank" },
    ],
  },
  {
    label: "Adopt A Child",
    path: "/save-child",
    children: [
      { label: "Save a Child", path: "/save-child" },
      { label: "Adoption", path: "/adoption" },
      { label: "Adoption Enquiry", path: "/adoption-enquiry" },
    ],
  },
  {
    label: "Be An Intern",
    path: "/volunteering",
    children: [
      { label: "IVY Program", path: "/ivy" },
      { label: "Become A Volunteer", path: "/volunteering" },
      { label: "Internship Application", path: "/internship-application" },
    ],
  },
  { label: "Eat & Heal", path: "/enh" },
 {
  label: "Book an Appointment",
  path: "/contact",
  children: [
    { label: "Patient Appointments", path: "/patient-appointments" },
    { label: "Medical Rep Visits", path: "/medrep-visits" },
    { label: "Careers", path: "/careers" },
  ],
},
];

// --- Synonyms for Intelligent Search ---
const SYNONYMS: Record<string, string[]> = {
  hospital: ["clinic", "medical", "healthcare", "treatment", "multispeciality"],
  burn: ["burns", "burn care", "burn treatment", "burn center", "fire injury"],
  paediatric: ["pediatric", "children", "kids", "child"],
  emergency: ["a & e", "trauma", "urgent care", "24/7 emergency"],
  adoption: ["adopt", "child care", "orphanage", "mazhalai illam"],
  team: ["staff", "members", "departments"],
  food: ["eat", "nutrition", "meals", "eat & heal"],
  college: ["education", "training", "courses", "community college"],
  appointment: ["booking", "schedule", "patient", "visit"],
  medrep: ["medical representative", "pharmaceutical", "pharma rep"],
  internship: ["intern", "volunteer", "training program", "student"],
};

// Expand Query with Synonyms
function expandQuery(query: string): string[] {
  const words = query.toLowerCase().split(" ");
  let expanded = [...words];

  words.forEach(word => {
    if (SYNONYMS[word]) {
      expanded = [...expanded, ...SYNONYMS[word]];
    }
  });

  return expanded;
}

// --- Smart Search Algorithm with Ranking ---
function smartSearch(data: SearchItem[], query: string): SearchItem[] {
  if (!query.trim()) return data;

  const terms = expandQuery(query);

  return data
    .map((item) => {
      const text = (
        item.title +
        " " +
        item.description +
        " " +
        item.keywords.join(" ")
      ).toLowerCase();

      let score = 0;

      terms.forEach((term) => {
        if (item.title.toLowerCase().includes(term)) score += 5;
        if (item.keywords.some((k) => k.includes(term))) score += 3;
        if (item.description.toLowerCase().includes(term)) score += 2;

        // fuzzy search
        if (text.includes(term.slice(0, 3))) score += 1;
      });

      return { ...item, score };
    })
    .filter((i) => i.score > 0)
    .sort((a, b) => b.score - a.score);
}


// Search data structure with keywords
const SEARCH_DATA = [
  {
    title: "Home",
    path: "/",
    keywords: ["home", "main", "welcome", "foundation", "gkf", "grace kennett foundation"],
    description: "Welcome to Grace Kennett Foundation – A community dedicated to healthcare, child welfare, and service.",
  },
  {
    title: "About Us",
    path: "/about",
    keywords: ["about", "who we are", "history", "mission", "vision", "foundation", "gkf"],
    description: "Discover Grace Kennett Foundation – our mission, values, and journey in community service.",
  },
  {
    title: "Hospital",
    path: "/hospital",
    keywords: ["hospital", "medical care", "healthcare services", "treatment facility", "multispeciality", "gkf hospital"],
    description: "Explore our multispeciality hospital providing advanced medical and surgical care.",
  },
  {
    title: "Burn Center",
    path: "/burns-center",
    keywords: ["burn center", "burn treatment", "burn care india", "burn unit", "emergency burn care", "specialized burn hospital"],
    description: "India's Leading Burns Center offering world-class burn treatment and recovery services.",
  },
  {
    title: "Paediatric Burns",
    path: "/Paediatric Burns",
    keywords: ["paediatric burns", "child burn care", "pediatric burn treatment", "kids burn care", "burns library"],
    description: "Specialized paediatric burn care with advanced treatment and rehabilitation for children.",
  },
  {
    title: "Skin Bank",
    path: "/skin-bank",
    keywords: ["skin bank", "skin donation", "skin retrieval", "skin transplant", "tissue donation", "donor bank"],
    description: "Skin Bank with over 100 successful skin retrievals supporting critical burn care.",
  },
  {
    title: "Save a Child",
    path: "/save-child",
    keywords: ["save a child", "child rescue", "child support", "donate for child", "help children"],
    description: "Support our Save A Child initiative and help transform a child's life.",
  },
  {
    title: "Adoption",
    path: "/adoption",
    keywords: ["adoption", "child adoption", "mazhalai illam", "family care", "orphanage", "adopt a child"],
    description: "Mazhalai Illam – Creating families through love, care, and adoption.",
  },
  {
    title: "Become A Volunteer",
    path: "/volunteering",
    keywords: ["volunteer", "volunteering", "community support", "helping hands", "join us"],
    description: "Join our dedicated volunteer community and make a real difference.",
  },
  {
    title: "Eat & Heal",
    path: "/eatery",
    keywords: ["eat & heal", "community eatery", "healthy meals", "food program", "nutrition"],
    description: "Eat & Heal – Our community eatery promoting nutrition, wellness, and access to healthy food.",
  },
  {
    title: "Contact Us",
    path: "/contact",
    keywords: ["contact", "reach us", "location", "email", "phone", "team up"],
    description: "Connect with us for services, support, collaborations, or enquiries.",
  },
  {
    title: "Patient Appointments",
    path: "/patient-appointments",
    keywords: ["patient appointments", "book appointment", "doctor appointment", "medical consultation", "schedule appointment"],
    description: "Book appointments with our specialists. Schedule your medical consultation today.",
  },
  {
    title: "Medical Rep Visits",
    path: "/medrep-visits",
    keywords: ["medical rep", "pharmaceutical rep", "medrep visits", "pharma representative", "drug representative"],
    description: "Schedule pharmaceutical representative visits with our medical team.",
  },
  {
    title: "Adoption Enquiry",
    path: "/adoption-enquiry",
    keywords: ["adoption enquiry", "adopt child", "adoption application", "child adoption form", "adoption process"],
    description: "Inquire about child adoption. Submit your adoption enquiry and start the journey.",
  },
  {
    title: "Internship Application",
    path: "/internship-application",
    keywords: ["internship", "intern application", "student program", "medical internship", "volunteer program", "training opportunity"],
    description: "Apply for internship and volunteering opportunities at our foundation.",
  },
  {
    title: "A & E",
    path: "/a-e",
    keywords: ["a & e", "accident & emergency", "trauma care", "24/7 emergency", "critical care unit"],
    description: "Accident & Emergency Department providing 24/7 emergency and trauma care.",
  },
  {
    title: "ABLS",
    path: "/abls",
    keywords: ["abls", "advanced burn life support", "burn training", "medical certification"],
    description: "Advanced Burn Life Support (ABLS) training program for medical professionals.",
  },
  {
    title: "Milk Bank",
    path: "/milk-bank",
    keywords: ["milk bank", "human milk bank", "breast milk donation", "infant nutrition"],
    description: "Human Milk Bank providing life-saving nutrition for premature and critically ill babies.",
  },
  {
    title: "Quantum",
    path: "/Quantum",
    keywords: ["quantum", "pals", "paediatric advanced life support", "medical training", "pediatric emergency"],
    description: "Quantum – Paediatric Advanced Life Support (PALS) Training Program.",
  },
  {
    title: "Team",
    path: "/#team",
    keywords: ["team", "our team", "gkf team", "staff", "departments", "medical team", "support team", "foundation team"],
    description: "Meet all our dedicated teams across departments who drive the mission of Grace Kennett Foundation.",
  },
  {
    title: "Paediatric Burn Care",
    path: "/paediatric-burn",
    keywords: ["paediatric burn care", "child burn treatment", "kids burn unit", "specialized child care"],
    description: "Comprehensive paediatric burn treatment with expert care and rehabilitation.",
  },
  {
    title: "Community College",
    path: "/community-college",
    keywords: ["gkf community college", "education", "training", "skill development", "courses"],
    description: "GKF Community College – Empowering youth with vocational education and skill training.",
  },
  {
    title: "Castle Arena",
    path: "/castle-arena",
    keywords: ["castle arena", "event venue", "activity space", "hall rental"],
    description: "Castle Arena – A versatile venue for events, activities, and community gatherings.",
  },
  {
    title: "Tranquil",
    path: "/tranquil",
    keywords: ["tranquil", "wellness", "therapy", "relaxation", "healing space"],
    description: "Tranquil – Your space for wellness, peace, therapy, and emotional healing.",
  },
  {
    title: "UP Shop",
    path: "/upshop",
    keywords: ["up shop", "gift shop", "merchandise", "buy products", "support foundation"],
    description: "UP Shop – Purchase items to support our foundation's initiatives.",
  },
  {
    title: "Emergency Care",
    path: "/emergency-care",
    keywords: ["emergency care", "urgent care", "critical help", "24/7 emergency services"],
    description: "24/7 Emergency Care Services providing immediate medical support and trauma response.",
  },
  {
    title: "Media Gallery",
    path: "/media",
    keywords: ["media", "gallery", "photos", "videos", "events", "news"],
    description: "Explore our Media Gallery showcasing photos, videos, and foundation updates.",
  },
  {
    title: "Eat & Heal Program",
    path: "/enh",
    keywords: ["eat & heal program", "nutrition", "wellness", "food program"],
    description: "Eat & Heal Program promoting health, nutrition, and community wellness.",
  },
  {
    title: "Ivy Center",
    path: "/ivy",
    keywords: ["ivy center", "treatment center", "special care facility"],
    description: "Ivy Center – Dedicated facility offering specialized medical and rehabilitative care.",
  },
  {
    title: "Home for Every Child",
    path: "/save-child#donate",
    keywords: ["donate", "donation", "child home", "orphanage support", "help children", "home for every child"],
    description: "Help us provide a home for every child. Support our mission to give children a loving home.",
  },
  {
    title: "Support Hospital",
    path: "/support-hospital",
    keywords: ["donate", "donation", "hospital support", "medical equipment", "patient support", "help patients"],
    description: "Support our hospital by helping patients or donating medical equipment.",
  },
];


// --- Enhanced Scroll Hook ---
function useScrollY(threshold = 50) {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);
  return isScrolled;
}

// Hook to detect screen size
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    const debouncedCheck = debounce(checkMobile, 150);
    window.addEventListener("resize", debouncedCheck);
    return () => window.removeEventListener("resize", debouncedCheck);
  }, []);
  return isMobile;
}

// --- Search Dialog Component ---
function SearchDialog({ open, onOpenChange }: { open: boolean; onOpenChange: (open: boolean) => void }) {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(SEARCH_DATA);

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults(SEARCH_DATA);
      return;
    }

    const query = searchQuery.toLowerCase().trim();


    const results = smartSearch(SEARCH_DATA, query);
    setSearchResults(results);

  }, [searchQuery]);

  const handleResultClick = (path: string) => {
    navigate(path);
    onOpenChange(false);
    setSearchQuery("");
  };

  // Reset search when dialog closes
  useEffect(() => {
    if (!open) {
      setSearchQuery("");
      setSearchResults(SEARCH_DATA);
    }
  }, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[80vh] p-0 gap-0 rounded-2xl bg-[#0d0d0d] border border-white/10">
        <DialogHeader className="p-6 pb-4 border-b border-white/8">
          <DialogTitle className="text-2xl text-white">Search</DialogTitle>
        </DialogHeader>

        <div className="p-6 pt-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-white/35" />
            <Input
              type="text"
              placeholder="Search for services, programs, information..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-6 text-lg rounded-xl border-2 border-white/10 bg-white/[0.04] text-white placeholder:text-white/25 focus:border-[#ff6a00]/60 transition-colors"
              autoFocus
            />
          </div>
        </div>

        <div className="px-6 pb-6 overflow-y-auto max-h-[50vh]">
          {searchResults.length === 0 ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-white/15 mx-auto mb-4" />
              <p className="text-white/40 text-lg">No results found for &quot;{searchQuery}&quot;</p>
              <p className="text-white/25 text-sm mt-2">Try different keywords or browse our menu</p>
            </div>
          ) : (
            <div className="space-y-2">
              {searchQuery && (
                <p className="text-sm text-white/35 mb-4">
                  Found {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
                </p>
              )}
              {searchResults.map((result, index) => (
                <motion.button
                  key={result.path + index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => handleResultClick(result.path)}
                  className="w-full text-left p-4 rounded-xl hover:bg-white/[0.05] transition-all duration-300 group border border-transparent hover:border-[#ff6a00]/25"
                >
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-400 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <Search className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white/80 group-hover:text-orange-400 transition-colors mb-1">
                        {result.title}
                      </h3>
                      <p className="text-sm text-white/40 line-clamp-2">
                        {result.description}
                      </p>
                      <p className="text-xs text-white/20 mt-1">{result.path}</p>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}

// --- Creative News Ticker ---
const NEWS_ITEMS = [
  { tag: "NEW", text: "Madurai's First Hyperbaric Oxygen Therapy Unit — Now at Grace Kennett Foundation Hospital!" },
  { tag: "HBOT", text: "Faster Healing for Burns — Hyperbaric Oxygen Therapy at GKFH" },
  { tag: "HBOT", text: "Diabetic Foot Ulcer? Don't Lose Hope — or Your Limb. Ask Us About HBOT" },
  { tag: "HBOT", text: "For Cancer Survivors Living with Radiation Injury — GKFH Now Offers HBOT" },
];

const DOUBLED = [...NEWS_ITEMS, ...NEWS_ITEMS];
const PX_PER_FRAME = 2.8; // ~168 px/s at 60 fps

function TickerScroll({ pausedRef }: { pausedRef: React.RefObject<boolean> }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const rafRef   = useRef<number>(0);
  const posRef   = useRef(0);
  const halfRef  = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function step() {
      // Read width lazily — wait until parent has expanded from height animation
      if (!halfRef.current) {
        const sw = track!.scrollWidth;
        if (sw > 100) halfRef.current = sw / 2; // 100 guards against collapsed state
      }
      if (halfRef.current > 0 && !pausedRef.current) {
        posRef.current -= PX_PER_FRAME;
        if (-posRef.current >= halfRef.current) {
          posRef.current += halfRef.current; // seamless reset: exact pixel, no rounding
        }
        track!.style.transform = `translateX(${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(step);
    }

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [pausedRef]);

  return (
    <div
      ref={trackRef}
      style={{ display: "inline-block", whiteSpace: "nowrap", willChange: "transform" }}
    >
      {DOUBLED.map((item, i) => (
        <span key={i} style={{ whiteSpace: "nowrap" }}>
          <span style={{
            display: "inline-block",
            fontSize: 9, fontWeight: 800, letterSpacing: "0.15em",
            textTransform: "uppercase", padding: "2px 7px",
            borderRadius: 3, marginRight: 9,
            verticalAlign: "middle", whiteSpace: "nowrap",
            ...(item.tag === "NEW"
              ? { background: "linear-gradient(90deg,#ff4500,#ff8c00)", color: "white", boxShadow: "0 0 6px rgba(255,100,0,0.45)" }
              : { background: "rgba(255,106,0,0.18)", border: "1px solid rgba(255,106,0,0.55)", color: "#ffaa55", boxShadow: "0 0 4px rgba(255,106,0,0.2)" }),
          }}>
            {item.tag}
          </span>
          <span style={{
            color: "#ffffff",
            fontSize: 13, fontWeight: 700, letterSpacing: "0.03em",
            verticalAlign: "middle", whiteSpace: "nowrap",
          }}>
            {item.text}
          </span>
          <span style={{
            display: "inline-block", margin: "0 38px",
            color: "rgba(255,106,0,0.7)", fontSize: 7, verticalAlign: "middle",
          }}>
            ◆
          </span>
        </span>
      ))}
    </div>
  );
}

export function NewsTicker({ isScrolled }: ScrollProps) {
  const pausedRef = useRef(false);

  return (
    <AnimatePresence>
      {!isScrolled && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 46, opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
          style={{
            overflow: "hidden",
            position: "relative",
            width: "100%",
            background: "linear-gradient(to right, #120400, #0a0a0a 40%, #0a0a0a 60%, #120400)",
            borderBottom: "1px solid rgba(255,106,0,0.55)",
            borderTop: "1px solid rgba(255,106,0,0.25)",
            boxShadow: "0 1px 12px rgba(255,106,0,0.12)",
            cursor: "default",
          }}
        >
          {/* Mobile badge */}
          <div
            className="sm:hidden"
            style={{
              position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 20,
              width: 52, display: "flex", alignItems: "center", paddingLeft: 12,
              background: "linear-gradient(to right, #0a0a0a 55%, transparent)",
            }}
          >
            <span style={{ position: "relative", display: "inline-flex", height: 8, width: 8, flexShrink: 0 }}>
              <span className="animate-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#ff5500", opacity: 0.9 }} />
              <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", height: 8, width: 8, background: "#ff6a00", boxShadow: "0 0 6px 2px rgba(255,106,0,0.7)" }} />
            </span>
          </div>

          {/* Desktop badge */}
          <div
            className="hidden sm:flex"
            style={{
              position: "absolute", left: 0, top: 0, bottom: 0, zIndex: 20,
              width: 134, alignItems: "center", gap: 8, paddingLeft: 14,
              background: "linear-gradient(to right, #0a0a0a 62%, transparent)",
            }}
          >
            <span style={{ position: "relative", display: "inline-flex", height: 8, width: 8, flexShrink: 0 }}>
              <span className="animate-ping" style={{ position: "absolute", inset: 0, borderRadius: "50%", background: "#ff5500", opacity: 0.9 }} />
              <span style={{ position: "relative", display: "inline-flex", borderRadius: "50%", height: 8, width: 8, background: "#ff6a00", boxShadow: "0 0 6px 2px rgba(255,106,0,0.7)" }} />
            </span>
            <span style={{
              color: "white", fontSize: 9, fontWeight: 900, letterSpacing: "0.2em",
              textTransform: "uppercase", padding: "3px 9px", borderRadius: 3,
              background: "linear-gradient(90deg,#ff4500,#ff8c00)",
              boxShadow: "0 0 8px rgba(255,100,0,0.5)",
              whiteSpace: "nowrap",
            }}>
              LIVE
            </span>
            <div style={{ width: 1, height: 16, background: "rgba(255,255,255,0.3)", flexShrink: 0 }} />
          </div>

          {/* Right fade */}
          <div style={{
            position: "absolute", right: 0, top: 0, bottom: 0, width: 64, zIndex: 20,
            pointerEvents: "none",
            background: "linear-gradient(to left, #0a0a0a 25%, transparent)",
          }} />

          {/* Track wrapper */}
          <div
            className="pl-[56px] sm:pl-[138px]"
            style={{ paddingTop: 13, paddingBottom: 13 }}
          >
            <TickerScroll pausedRef={pausedRef} />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// --- Revolutionary Split Logo Section ---
function LogoSection({ isScrolled }: ScrollProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`relative overflow-hidden transition-all duration-600 ${
        // Responsive heights for all breakpoints
        isScrolled
          ? "h-[60px] sm:h-[70px] md:h-[90px] lg:h-[110px] xl:h-[110px]"
          : "h-[85px] sm:h-[100px] md:h-[120px] lg:h-[140px] xl:h-[140px]"
        }`}
    >
      {/* Split Background Design */}
      <div className="absolute inset-0 flex">
        {/* Left Orange Section */}
        <div className="w-1/2 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 relative overflow-hidden">
          {/* Orange side decorative elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 h-8 sm:h-12 md:h-16 lg:h-24 xl:h-32 bg-white rounded-full transform translate-x-4 sm:translate-x-6 md:translate-x-8 lg:translate-x-12 xl:translate-x-16 -translate-y-4 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-12 xl:-translate-y-16" />
            <div className="absolute bottom-0 left-0 w-6 sm:w-10 md:w-12 lg:w-20 xl:w-24 h-6 sm:h-10 md:h-12 lg:h-20 xl:h-24 bg-white rounded-full transform -translate-x-3 sm:-translate-x-5 md:-translate-x-6 lg:-translate-x-10 xl:-translate-x-12 translate-y-3 sm:translate-y-5 md:translate-y-6 lg:translate-y-10 xl:translate-y-12" />
          </div>

          {/* Animated pattern */}
          <motion.div
            animate={{
              backgroundPosition: ["0% 0%", "100% 100%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10 bg-gradient-to-br from-white via-transparent to-white bg-[length:200%_200%]"
          />
        </div>

        {/* Right Black Section */}
        <div className="w-1/2 bg-gradient-to-bl from-gray-900 via-black to-gray-800 relative overflow-hidden">
          {/* Black side decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-8 sm:w-12 md:w-16 lg:w-24 xl:w-32 h-8 sm:h-12 md:h-16 lg:h-24 xl:h-32 bg-orange-500 rounded-full transform -translate-x-4 sm:-translate-x-6 md:-translate-x-8 lg:-translate-x-12 xl:-translate-x-16 -translate-y-4 sm:-translate-y-6 md:-translate-y-8 lg:-translate-y-12 xl:-translate-y-16" />
            <div className="absolute bottom-0 right-0 w-6 sm:w-10 md:w-12 lg:w-20 xl:w-24 h-6 sm:h-10 md:h-12 lg:h-20 xl:h-24 bg-orange-500 rounded-full transform translate-x-3 sm:translate-x-5 md:translate-x-6 lg:translate-x-10 xl:translate-x-12 translate-y-3 sm:translate-y-5 md:translate-y-6 lg:translate-y-10 xl:translate-y-12" />
          </div>

          {/* Animated pattern */}
          <motion.div
            animate={{
              backgroundPosition: ["100% 100%", "0% 0%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute inset-0 opacity-10 bg-gradient-to-bl from-orange-500 via-transparent to-orange-500 bg-[length:200%_200%]"
          />
        </div>
      </div>

      {/* Content Container - Split into two halves */}
      <div className="absolute inset-0 z-10 flex">
        {/* LEFT HALF - Orange Section Content */}
        <div className="w-1/2 overflow-hidden flex items-center">
          <div className="container site-header-padding mx-auto px-2 sm:px-4 md:px-6 max-w-7xl w-full">
            {/* ========== MOBILE VIEW (< lg) - LEFT CONTENT ========== */}
            <div className="lg:hidden flex items-center justify-start">
              <div className="flex-shrink-0 max-w-[90%]">
                <ImageWithFallback
                  src={logo1}
                  alt="Grace Kennett Foundation"
                  className={`object-contain drop-shadow-2xl filter hover:brightness-110 transition-all duration-300 w-full ${isScrolled
                      ? "h-[50px] sm:h-[60px] md:h-[70px]"
                      : "h-[70px] sm:h-[85px] md:h-[100px]"
                    }`}
                />
              </div>
            </div>

            {/* ========== DESKTOP VIEW (>= lg) - LEFT CONTENT ========== */}
            <div className="hidden lg:flex items-center justify-start">
              <div className="flex items-center gap-3 lg:gap-4 xl:gap-6 flex-shrink-0 max-w-[95%]">
                {/* Logo Group 1 & 2 (closer together) */}
                <div className="flex items-center gap-2 lg:gap-3 flex-shrink min-w-0">
                  {/* First logo - circular */}
                  <ImageWithFallback
                    src={logo1M}
                    alt="Grace Kennett Foundation"
                    className={`object-cover rounded-full drop-shadow-2xl filter hover:brightness-110 transition-all duration-300 flex-shrink-0 ${isScrolled
                        ? "w-[70px] h-[70px] lg:w-[80px] lg:h-[80px]"
                        : "w-[90px] h-[90px] lg:w-[100px] lg:h-[100px]"
                      }`}
                  />

                  {/* Second logo - rectangular */}
                  <ImageWithFallback
                    src={logo2M}
                    alt="Partner Logo 1"
                    className={`object-contain drop-shadow-2xl filter hover:brightness-110 transition-all duration-300 flex-shrink min-w-0 ${isScrolled
                        ? "h-[70px] lg:h-[80px]"
                        : "h-[90px] lg:h-[100px]"
                      } w-auto max-w-full`}
                  />
                </div>

                {/* Third logo - separate */}
                <ImageWithFallback
                  src={logo3M}
                  alt="Partner Logo 2"
                  className={`object-contain drop-shadow-2xl filter hover:brightness-110 transition-all duration-300 flex-shrink-0 ${isScrolled
                      ? "h-[70px] lg:h-[80px]"
                      : "h-[90px] lg:h-[100px]"
                    } w-auto`}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT HALF - Black Section Content */}
        <div className="w-1/2 overflow-hidden flex items-center justify-end">
          <div className="container site-header-padding mx-auto px-2 sm:px-4 md:px-6 max-w-7xl w-full">
            {/* ========== MOBILE VIEW (< lg) - RIGHT CONTENT ========== */}
            <div className="lg:hidden flex items-center justify-end gap-1 sm:gap-2 md:gap-3">
              {/* BURN CENTER TEXT */}
              <a href="/burns-center" className="flex flex-col items-end text-right min-w-0 mr-1 sm:mr-2 flex-shrink cursor-pointer hover:opacity-80 transition-opacity">
                <div className="flex flex-wrap items-center justify-end gap-x-1">
                  <motion.h1
                    className={`uppercase tracking-wide inline-flex leading-none ${isScrolled
                        ? "text-xs sm:text-sm md:text-base"
                        : "text-sm sm:text-base md:text-lg"
                      }`}
                    initial={{ x: -200, opacity: 0, rotateY: -90 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.2,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    style={{
                      fontWeight: 100,
                      color: "#FFFFFF",
                      textShadow:
                        "0 3px 10px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)",
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                  >
                    {"BURN".split("").map((letter, i) => (
                      <motion.span
                        key={`burn-${i}`}
                        className="inline-block"
                        initial={{
                          opacity: 0,
                          y: 20,
                          rotateX: -90,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.3 + i * 0.1,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.h1
                    className={`uppercase tracking-wide inline-flex leading-none ${isScrolled
                        ? "text-xs sm:text-sm md:text-base"
                        : "text-sm sm:text-base md:text-lg"
                      }`}
                    initial={{ x: 200, opacity: 0, rotateY: 90 }}
                    animate={{ x: 0, opacity: 1, rotateY: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4,
                      ease: [0.34, 1.56, 0.64, 1],
                    }}
                    style={{
                      fontWeight: 100,
                      color: "#FFFFFF",
                      textShadow:
                        "0 3px 10px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)",
                      fontFamily: "'Georgia', 'Times New Roman', serif",
                    }}
                  >
                    {"CENTER".split("").map((letter, i) => (
                      <motion.span
                        key={`center-${i}`}
                        className="inline-block"
                        initial={{
                          opacity: 0,
                          y: 20,
                          rotateX: -90,
                          filter: "blur(10px)",
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                          rotateX: 0,
                          filter: "blur(0px)",
                        }}
                        transition={{
                          duration: 0.5,
                          delay: 0.7 + i * 0.1,
                          ease: [0.34, 1.56, 0.64, 1],
                        }}
                      >
                        {letter}
                      </motion.span>
                    ))}
                  </motion.h1>
                </div>
              </a>

              {/* Right Logo */}
              <ImageWithFallback
                src={logo2}
                alt="Partner Organization"
                className={`object-contain rounded-lg drop-shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0 ${isScrolled
                    ? "h-[30px] w-auto max-w-[40px] sm:h-[40px] sm:max-w-[50px] md:h-[50px] md:max-w-[65px]"
                    : "h-[40px] w-auto max-w-[50px] sm:h-[50px] sm:max-w-[65px] md:h-[65px] md:max-w-[80px]"
                  }`}
              />
            </div>

            {/* ========== DESKTOP VIEW (>= lg) - RIGHT CONTENT ========== */}
            <div className="hidden lg:flex items-center justify-end gap-3 lg:gap-4 xl:gap-6 max-w-[95%] ml-auto">
              <div onClick={() => navigate("/burns-center")} className="flex flex-col items-end text-right min-w-0 overflow-hidden flex-shrink cursor-pointer hover:opacity-80 transition-opacity">
                {/* BURN CENTER TEXT */}
                <div className="relative overflow-visible py-1 lg:py-2">
                  <div className="relative flex flex-wrap items-center justify-end gap-x-2">
                    <motion.h1
                      className={`uppercase tracking-wide lg:tracking-wider inline-flex leading-none ${isScrolled
                          ? "text-lg lg:text-xl"
                          : "text-xl lg:text-2xl xl:text-2xl"
                        }`}
                      initial={{ x: -200, opacity: 0, rotateY: -90 }}
                      animate={{ x: 0, opacity: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      style={{
                        fontWeight: 100,
                        color: "#FFFFFF",
                        textShadow:
                          "0 3px 10px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)",
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                      }}
                    >
                      {"BURN".split("").map((letter, i) => (
                        <motion.span
                          key={`burn-${i}`}
                          className="inline-block"
                          initial={{
                            opacity: 0,
                            y: 20,
                            rotateX: -90,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.3 + i * 0.1,
                            ease: [0.34, 1.56, 0.64, 1],
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.h1>

                    <motion.h1
                      className={`uppercase tracking-wide lg:tracking-wider inline-flex leading-none ${isScrolled
                          ? "text-lg lg:text-xl"
                          : "text-xl lg:text-2xl xl:text-2xl"
                        }`}
                      initial={{ x: 200, opacity: 0, rotateY: 90 }}
                      animate={{ x: 0, opacity: 1, rotateY: 0 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      style={{
                        fontWeight: 100,
                        color: "#FFFFFF",
                        textShadow:
                          "0 3px 10px rgba(0,0,0,0.4), 0 2px 4px rgba(0,0,0,0.3)",
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                      }}
                    >
                      {"CENTER".split("").map((letter, i) => (
                        <motion.span
                          key={`center-${i}`}
                          className="inline-block"
                          initial={{
                            opacity: 0,
                            y: 20,
                            rotateX: -90,
                            filter: "blur(10px)",
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            filter: "blur(0px)",
                          }}
                          transition={{
                            duration: 0.5,
                            delay: 0.7 + i * 0.1,
                            ease: [0.34, 1.56, 0.64, 1],
                          }}
                        >
                          {letter}
                        </motion.span>
                      ))}
                    </motion.h1>
                  </div>
                </div>

                {/* Contact Info - visible only when not scrolled */}
                <AnimatePresence>
                  {!isScrolled && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center gap-3 xl:gap-4 text-white/90 text-xs xl:text-sm mt-2 xl:mt-3"
                    >
                      <a
                        href="tel:+914522601767"
                        onClick={() => trackCallClick("header_call")}
                        className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap"
                      >
                        <Phone className="w-3 h-3 xl:w-4 xl:h-4 animate-pulse flex-shrink-0" />
                        <span>+91 452 2601767</span>
                      </a>
                      <a
                        href="https://www.google.com/maps/place/Grace+Kennett+Foundation/@9.9174446,78.1083307,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00cf7e6317643b:0xa837db1fc71ebad5!8m2!3d9.9174446!4d78.1083307!16s%2Fg%2F1tdqfxd1?entry=ttu"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-white transition-colors whitespace-nowrap"
                      >
                        <MapPin className="w-3 h-3 xl:w-4 xl:h-4 animate-pulse flex-shrink-0" />
                        <span>Madurai, Tamil Nadu</span>
                      </a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Right-side Logo */}
              <ImageWithFallback
                src={logo2}
                alt="Partner Organization"
                className={`object-contain rounded-lg drop-shadow-2xl hover:scale-105 transition-transform duration-300 flex-shrink-0 ${isScrolled
                    ? "h-[60px] lg:h-[70px]"
                    : "h-[80px] lg:h-[90px]"
                  } w-auto`}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Center GIF Logo - Connection Point - Positioned absolutely on top */}
      <div
        className={`absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 hidden lg:block ${isScrolled
            ? "w-[80px] h-[80px] lg:w-[90px] lg:h-[90px]"
            : "w-[100px] h-[100px] lg:w-[110px] lg:h-[110px]"
          }`}
      >
        <a href="/" className="block group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="relative rounded-full bg-white shadow-2xl border-2 lg:border-4 border-white/50 overflow-hidden flex items-center justify-center w-full h-full"
          >
            <ImageWithFallback
              src={giflogo}
              alt="Grace Kennett Foundation"
              className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300 w-full h-full"
            />
          </motion.div>
        </a>
      </div>
    </div>
  );
}

// --- Innovative Navigation Bar ---
function NavBar({ isScrolled }: ScrollProps) {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();

  const navPadding = isMobile
    ? isScrolled
      ? "0.5rem 0"
      : "0.75rem 0"
    : isScrolled
      ? "0.375rem 0"
      : "0.75rem 0";

  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav
      className="backdrop-blur-xl border-b border-white/[0.06] relative transition-all duration-500"
      style={{
        background: isScrolled
          ? "rgba(8, 8, 8, 0.99)"
          : "rgba(10, 10, 10, 0.96)",
        boxShadow: isScrolled ? "0 8px 40px rgba(0,0,0,0.5)" : "0 4px 20px rgba(0,0,0,0.25)",
      }}
    >
      {/* Subtle orange left-edge glow */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-[#ff6a00]/12 via-transparent to-transparent pointer-events-none transition-opacity duration-500"
        style={{ opacity: isScrolled ? 1 : 0.7 }}
      />

      <div className="container site-header-padding mx-auto px-3 md:px-6 max-w-7xl relative z-10">
        <div
          className="flex items-center justify-between transition-all duration-600"
          style={{ padding: navPadding }}
        >
          <div className="flex lg:hidden items-center justify-between w-full">
            {/* Mobile Actions - Left Side */}
            <MobileMenu />

            {/* Mobile Logo - Right Side - Only visible on mobile */}
            <div className="flex justify-end flex-1">
              <a href="/" className="block group">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="relative rounded-full bg-white shadow-xl border-2 border-white/50 overflow-hidden flex items-center justify-center"
                  style={{
                    width: isScrolled ? "36px" : "50px",
                    height: isScrolled ? "36px" : "50px",
                  }}
                >
                  <ImageWithFallback
                    src={giflogo}
                    alt="Grace Kennett Foundation"
                    className="object-cover rounded-full group-hover:scale-105 transition-transform duration-300 w-full h-full"
                  />
                </motion.div>
              </a>
            </div>
          </div>

          {/* Desktop Menu Items */}
          <div className="hidden lg:flex items-center space-x-1 flex-nowrap overflow-x-auto no-scrollbar">
            {MENU_ITEMS.map((item, index) => {
              const active = pathname === item.path;

              if (item.children) {
                return (
                  <DropdownMenu key={item.label}>
                    <DropdownMenuTrigger asChild>
                      <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`flex items-center gap-2 px-3 xl:px-5 py-2 xl:py-3 rounded-xl transition-all duration-300 group relative overflow-hidden text-sm xl:text-base ${active
                            ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg"
                            : "text-white/65 hover:text-orange-400 hover:bg-white/[0.06]"
                          }`}
                      >
                        <span className="relative z-10">{item.label}</span>
                        {/* <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 relative z-10" /> */}

                        {/* Hover effect */}
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100"
                          initial={false}
                          animate={{ scale: active ? 1 : 0 }}
                          whileHover={{ scale: 1 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56 mt-2 border border-white/8 shadow-2xl bg-[#111111]/98 backdrop-blur-xl rounded-2xl overflow-hidden">
                      {item.children.map((child) => (
                        <DropdownMenuItem key={child.path} asChild>
                          <a
                            href={child.path}
                            className="flex items-center px-6 py-4 text-white/65 hover:bg-white/[0.06] hover:text-orange-400 transition-all duration-300"
                          >
                            {child.label}
                          </a>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.path}
                    className={`relative px-3 xl:px-5 py-2 xl:py-3 rounded-xl transition-all duration-300 group overflow-hidden text-sm xl:text-base ${active
                        ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg"
                        : "text-white/65 hover:text-orange-400 hover:bg-white/[0.06]"
                      }`}
                  >
                    <span className="relative z-10">{item.label}</span>

                    {/* Active indicator */}
                    <motion.div
                      className="absolute bottom-1 left-3 right-3 h-0.5 bg-orange-400"
                      initial={false}
                      animate={{ scaleX: active ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-orange-400/10 opacity-0 group-hover:opacity-100"
                      initial={false}
                      whileHover={{ scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </a>
                </motion.div>
              );
            })}
          </div>

          {/* Right Actions */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center gap-2 md:gap-4"
          >
            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.05, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSearchOpen(true)}
                aria-label="Search"
                className="w-10 h-10 xl:w-12 xl:h-12 rounded-xl bg-white/[0.05] hover:bg-[#ff6a00]/10 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#ff6a00]/30 group"
              >
                <Search className="w-4 h-4 xl:w-5 xl:h-5 text-white/45 group-hover:text-orange-400 transition-colors" />
              </motion.button>

              {/* Donate Dropdown Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      className="flex items-center gap-2 xl:gap-3 px-4 xl:px-6 py-2 xl:py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group relative overflow-hidden text-sm xl:text-base"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                      <Heart className="w-4 h-4 xl:w-5 xl:h-5 group-hover:animate-pulse relative z-10" />
                      <span className="relative z-10 hidden xl:inline">
                        Donate
                      </span>
                      <span className="relative z-10 xl:hidden">Donate</span>
                      <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180 relative z-10" />
                    </Button>
                  </motion.div>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-2 border border-white/8 shadow-2xl bg-[#111111]/98 backdrop-blur-xl rounded-2xl overflow-hidden">
                  <DropdownMenuItem asChild>
                    <a
                      href="/save-child#donate"
                      onClick={() => trackCTAClick("Home for Every Child", "header_dropdown")}
                      className="flex items-center px-6 py-4 text-white/65 hover:bg-white/[0.06] hover:text-orange-400 transition-all duration-300"
                    >
                      Home for Every Child
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a
                      href="/support-hospital"
                      onClick={() => trackCTAClick("Support Hospital", "header_dropdown")}
                      className="flex items-center px-6 py-4 text-white/65 hover:bg-white/[0.06] hover:text-orange-400 transition-all duration-300"
                    >
                      Support Hospital
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Search Modal */}
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </nav>
  );
}

// --- Enhanced Mobile Menu ---
function MobileMenu() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <motion.button
          whileHover={{ scale: 1.05, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Menu"
          className="w-10 h-10 rounded-xl bg-white/[0.05] hover:bg-[#ff6a00]/10 flex items-center justify-center transition-all duration-300 border border-white/10 hover:border-[#ff6a00]/30 group"
        >
          <Menu className="w-5 h-5 text-white/65 group-hover:text-orange-400 transition-colors" />
        </motion.button>
      </SheetTrigger>

      <SheetContent
        side="left"
        className="w-[88vw] sm:w-[380px] p-0 backdrop-blur-2xl bg-[#080808] border-r border-white/[0.05]"
      >
        {/* Enhanced Header with Split Design */}
        <SheetHeader className="p-0 relative overflow-hidden">
          {/* Single Orange Header Section */}
          <div className="h-32 bg-gradient-to-br from-orange-500 to-orange-600 relative">
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-16 h-16 bg-white rounded-full transform translate-x-8 -translate-y-8" />
            </div>
          </div>

          {/* Content overlay */}
          <div className="absolute inset-0 flex items-center justify-between px-6 z-10">
            <SheetTitle className="flex items-center gap-4 flex-shrink-0">
              <ImageWithFallback
                src={logo1}
                alt="Grace Kennett Foundation"
                className="w-48 h-16 sm:w-56 sm:h-18 object-contain drop-shadow-lg"
              />
            </SheetTitle>

            <motion.button
              whileHover={{ rotate: 90, scale: 1.1 }}
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-all duration-300 border border-white/30 flex-shrink-0"
            >
              <X className="w-5 h-5 text-white" />
            </motion.button>
          </div>
        </SheetHeader>

        {/* Body with enhanced styling */}
        <div className="flex flex-col justify-between h-[calc(100%-128px)] p-4 sm:p-6">
          {/* Menu Links */}
          <div className="space-y-2 overflow-y-auto max-h-[calc(100vh-300px)] scrollbar-themed pr-1">
            {MENU_ITEMS.map((item, index) => {
              const active = pathname === item.path;

              if (item.children) {
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-1"
                  >
                    <div className="px-4 py-3 rounded-xl bg-[#ff6a00]/10 text-orange-400 border border-[#ff6a00]/20 text-sm">
                      {item.label}
                    </div>
                    {item.children.map((child, childIndex) => (
                      <motion.div
                        key={child.path}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 + childIndex * 0.05 }}
                      >
                        <a
                          href={child.path}
                          onClick={() => setOpen(false)}
                          className={`block ml-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm ${pathname === child.path
                              ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg"
                              : "text-white/55 hover:bg-white/[0.05] hover:text-orange-400 hover:translate-x-1"
                            }`}
                        >
                          {child.label}
                        </a>
                      </motion.div>
                    ))}
                  </motion.div>
                );
              }

              return (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <a
                    href={item.path}
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-xl transition-all duration-300 text-sm ${active
                        ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg"
                        : "text-white/55 hover:bg-white/[0.05] hover:text-orange-400 hover:translate-x-1"
                      }`}
                  >
                    {item.label}
                  </a>
                </motion.div>
              );
            })}
            
            {/* Add Donate Section in Mobile Menu */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: MENU_ITEMS.length * 0.1 }}
              className="space-y-1"
            >
              <div className="px-4 py-3 rounded-xl bg-[#ff6a00]/10 text-orange-400 border border-[#ff6a00]/20 text-sm">
                Donate
              </div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: MENU_ITEMS.length * 0.1 + 0.05 }}
              >
                <a
                  href="/save-child#donate"
                  onClick={() => {
                    trackCTAClick("Home for Every Child", "mobile_menu");
                    setOpen(false);
                  }}
                  className={`block ml-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm ${pathname === "/save-child#donate"
                      ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg"
                      : "text-white/55 hover:bg-white/[0.05] hover:text-orange-400 hover:translate-x-1"
                    }`}
                >
                  Home for Every Child
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: MENU_ITEMS.length * 0.1 + 0.1 }}
              >
                <a
                  href="/support-hospital"
                  onClick={() => {
                    trackCTAClick("Support Hospital", "mobile_menu");
                    setOpen(false);
                  }}
                  className={`block ml-4 px-4 py-3 rounded-xl transition-all duration-300 text-sm ${pathname === "/support-hospital"
                      ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-lg"
                      : "text-white/55 hover:bg-white/[0.05] hover:text-orange-400 hover:translate-x-1"
                    }`}
                >
                  Support Hospital
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* Compact Contact Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-3 flex gap-2"
          >
            <a
              href="tel:+914522601767"
              className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/8 hover:border-[#ff6a00]/25 transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }}>
                <Phone className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white/40 text-[9px] uppercase tracking-wider">Emergency</p>
                <p className="text-white/70 text-[11px] truncate">+91 452 2601767</p>
              </div>
            </a>

            <a
              href="https://www.google.com/maps/place/Grace+Kennett+Foundation/@9.9174446,78.1083307,17z/data=!3m1!4b1!4m6!3m5!1s0x3b00cf7e6317643b:0xa837db1fc71ebad5!8m2!3d9.9174446!4d78.1083307!16s%2Fg%2F1tdqfxd1?entry=ttu"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.04] border border-white/8 hover:border-[#ff6a00]/25 transition-all duration-300"
            >
              <div className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0" style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)" }}>
                <MapPin className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-white/40 text-[9px] uppercase tracking-wider">Visit Us</p>
                <p className="text-white/70 text-[11px] truncate">8, Kennett Road, Madurai</p>
              </div>
            </a>
          </motion.div>

          {/* Enhanced Donate Button */}
          <SheetFooter className="p-0 mt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="w-full space-y-2"
            >
              <a href="/save-child#donate" className="block">
                <Button
                  onClick={() => trackCTAClick("Home for Every Child", "mobile_footer")}
                  className="w-full py-3 sm:py-4 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-white shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-300 rounded-2xl border-0 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                    <span className="text-sm sm:text-base">
                      Home for Every Child
                    </span>
                  </div>
                </Button>
              </a>
              <a href="/support-hospital" className="block">
                <Button
                  onClick={() => trackCTAClick("Support Hospital", "mobile_footer")}
                  className="w-full py-3 sm:py-4 bg-transparent border border-[#ff6a00]/40 text-[#ff6a00] hover:bg-[#ff6a00]/10 hover:border-[#ff6a00]/70 hover:scale-105 transition-all duration-300 rounded-2xl relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <div className="flex items-center justify-center gap-3 relative z-10">
                    <Heart className="w-4 h-4 sm:w-5 sm:h-5 group-hover:animate-pulse" />
                    <span className="text-sm sm:text-base">
                      Support Hospital
                    </span>
                  </div>
                </Button>
              </a>
            </motion.div>
          </SheetFooter>
        </div>
      </SheetContent>
    </Sheet>
  );
}

// --- Final Revolutionary Header ---
export default function Header(): JSX.Element {
  const isScrolled = useScrollY(50);

  // Responsive spacer heights for all breakpoints
  const spacerClasses = isScrolled
    ? "h-[78px] sm:h-[88px] md:h-[108px] lg:h-[140px] xl:h-[140px]"
    : "h-[110px] sm:h-[125px] md:h-[145px] lg:h-[180px] xl:h-[180px]";

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-shadow duration-600"
        style={{
          boxShadow: isScrolled
            ? "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
            : "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        }}
      >
        <NewsTicker isScrolled={isScrolled} />
        <div className="bg-[#080808] backdrop-blur-xl transition-all duration-500">
          <LogoSection isScrolled={isScrolled} />
          <NavBar isScrolled={isScrolled} />
        </div>
      </header>

      {/* Dynamic Spacer */}
      <div className={`transition-all duration-600 ${spacerClasses}`} />
    </>
  );
}
