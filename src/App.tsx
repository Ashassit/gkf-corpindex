import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { ScrollToTop } from "./components/ScrollToTop";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { FloatingActions } from "./components/FloatingActions";
import { useVisitTracker } from "./components/hooks/useVisitTracker";
import AnalyticsTracker from "./components/AnalyticsTracker";
import { lazy, Suspense, useEffect, Component } from "react";
import type { ReactNode } from "react";
import { CartProvider } from "./eatery/lib/CartContext";

class ChunkErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean }> {
  constructor(props: { children: ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() { return { hasError: true }; }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#0d0d0d] p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff6a00]/8 rounded-full blur-3xl pointer-events-none" />
          <div className="relative flex flex-col items-center gap-5">
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-2"
              style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)", boxShadow: "0 0 40px rgba(255,106,0,0.3)" }}
            >
              <span className="text-white text-xl font-bold tracking-tight">GKF</span>
            </div>
            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center mb-1">
              <span className="text-white/50 text-lg">!</span>
            </div>
            <h2 className="text-lg font-semibold text-white">Page failed to load</h2>
            <p className="text-white/40 text-sm max-w-xs font-light leading-relaxed">
              A required file could not be found. This usually means the site needs to be updated.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-2 px-6 py-2.5 rounded-full text-sm font-medium text-white transition-all duration-300 hover:opacity-90 active:scale-95"
              style={{ background: "linear-gradient(135deg, #ff6a00, #ff8c3a)", boxShadow: "0 4px 20px rgba(255,106,0,0.3)" }}
            >
              Reload page
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

// — Lazy-loaded pages (each gets its own JS chunk) —
const Login = lazy(() => import("./components/pages/Login").then(m => ({ default: m.Login })));
const Home = lazy(() => import("./components/pages/Home").then(m => ({ default: m.Home })));
const About = lazy(() => import("./components/pages/About").then(m => ({ default: m.About })));
const Hospital = lazy(() => import("./components/pages/Hospital").then(m => ({ default: m.Hospital })));
const BurnsCenter = lazy(() => import("./components/pages/BurnsCenter").then(m => ({ default: m.BurnsCenter })));
const BurnsLibrary = lazy(() => import("./components/pages/BurnsLibrary").then(m => ({ default: m.BurnsLibrary })));
const Adoption = lazy(() => import("./components/pages/Adoption").then(m => ({ default: m.Adoption })));
const Volunteering = lazy(() => import("./components/pages/Volunteering").then(m => ({ default: m.Volunteering })));
const SaveAChild = lazy(() => import("./components/pages/SaveAChild").then(m => ({ default: m.SaveAChild })));
const ContactUs = lazy(() => import("./components/pages/ContactUs").then(m => ({ default: m.ContactUs })));
const WhyUnique = lazy(() => import("./components/pages/NetZeroDetail").then(m => ({ default: m.WhyUnique })));
const ABLSPage = lazy(() => import("./components/pages/ABLSPage").then(m => ({ default: m.ABLSPage })));
const MilkBankPage = lazy(() => import("./components/pages/MilkBankPage").then(m => ({ default: m.MilkBankPage })));
const PALSPage = lazy(() => import("./components/pages/PALSPage").then(m => ({ default: m.PALSPage })));
const SkinBankPage = lazy(() => import("./components/pages/SkinBankPage").then(m => ({ default: m.SkinBankPage })));
const CommunityCollege = lazy(() => import("./components/pages/CommunityCollege").then(m => ({ default: m.CommunityCollege })));
const CastleArena = lazy(() => import("./components/pages/CastleArena").then(m => ({ default: m.CastleArena })));
const Tranquil = lazy(() => import("./components/pages/Tranquil").then(m => ({ default: m.Tranquil })));
const Eatery = lazy(() => import("./components/pages/Eatery").then(m => ({ default: m.Eatery })));
const UPshop = lazy(() => import("./components/pages/UPshop").then(m => ({ default: m.UPshop })));
const EmergencyCarePage = lazy(() => import("./components/pages/EmergencyCarePage").then(m => ({ default: m.EmergencyCarePage })));
const MultiMedia = lazy(() => import("./components/pages/MultiMedia"));
const UpdatedIvy = lazy(() => import("./components/pages/updatedIvy").then(m => ({ default: m.UpdatedIvy })));
const PaediatricBurn = lazy(() => import("./components/pages/PaediatricBurn"));
const Enh = lazy(() => import("./components/pages/Enh"));
const PatientAppointmentForm = lazy(() => import("./components/bookAnAppointment/components/PatientAppointmentForm").then(m => ({ default: m.PatientAppointmentForm })));
const AdoptionEnquiryForm = lazy(() => import("./components/bookAnAppointment/components/AdoptionEnquiryForm").then(m => ({ default: m.AdoptionEnquiryForm })));
const InternshipApplicationForm = lazy(() => import("./components/bookAnAppointment/components/InternshipApplicationForm").then(m => ({ default: m.InternshipApplicationForm })));
const AdminLogin = lazy(() => import("./components/bookAnAppointment/components/AdminLogin").then(m => ({ default: m.AdminLogin })));
const AdminDashboard = lazy(() => import("./components/bookAnAppointment/components/AdminDashboard").then(m => ({ default: m.AdminDashboard })));
const PrivacyPolicy = lazy(() => import("./components/PrivacyPolicy").then(m => ({ default: m.PrivacyPolicy })));
const TermsConditions = lazy(() => import("./components/TermsConditions").then(m => ({ default: m.TermsConditions })));
const FeedbackForm = lazy(() => import("./components/bookAnAppointment/components/FeedbackForm").then(m => ({ default: m.FeedbackForm })));
const DialysisUnitForm = lazy(() => import("./components/bookAnAppointment/components/DialysisUnitForm").then(m => ({ default: m.DialysisUnitForm })));
const CareersForm = lazy(() => import("./components/bookAnAppointment/components/CareersForm"));
const SupportHospital = lazy(() => import("./components/pages/SupportHospital"));
const ApplyPage = lazy(() => import("./components/updateIvyDesign/ApplyPage").then(m => ({ default: m.ApplyPage })));
const ThankYou = lazy(() => import("./components/save/ThankYou"));
const PatientFeedbackPage = lazy(() => import("./pages/FeedbackPage").then(m => ({ default: m.FeedbackPage })));
const FeedbackDashboardPage = lazy(() => import("./pages/DashboardPage").then(m => ({ default: m.DashboardPage })));
const PatientFeedbackQR = lazy(() => import("./pages/PatientFeedbackQR").then(m => ({ default: m.PatientFeedbackQR })))
const MedRepBookingPage = lazy(() => import("./pages/MedRepBookingPage").then(m => ({ default: m.MedRepBookingPage })))
const MedRepAdminPage   = lazy(() => import("./pages/MedRepAdminPage").then(m => ({ default: m.MedRepAdminPage })));
const HBOTBookingPage   = lazy(() => import("./components/hbot/HBOTBookingPage").then(m => ({ default: m.HBOTBookingPage })));
const HBOTAdminDashboard = lazy(() => import("./components/hbot/HBOTAdminDashboard").then(m => ({ default: m.HBOTAdminDashboard })));

// — IP Bill Book —
const IPLogin        = lazy(() => import("./ip-bill-book/pages/IPLogin"));
const IPLayout       = lazy(() => import("./ip-bill-book/components/IPLayout"));
const PatientList    = lazy(() => import("./ip-bill-book/pages/PatientList"));
const CreatePatient  = lazy(() => import("./ip-bill-book/pages/CreatePatient"));
const PatientDetail  = lazy(() => import("./ip-bill-book/pages/PatientDetail"));
const IPUsers        = lazy(() => import("./ip-bill-book/pages/UserManagement"));
const IPAuditLog     = lazy(() => import("./ip-bill-book/pages/AuditLog"));
const IPChargeTypes  = lazy(() => import("./ip-bill-book/pages/ChargeTypes"));

// — Eatery ordering system —
const KitchenLogin   = lazy(() => import("./eatery/admin/pages/KitchenLogin").then(m => ({ default: m.KitchenLogin })));
const MenuManager    = lazy(() => import("./eatery/admin/pages/MenuManager").then(m => ({ default: m.MenuManager })));
const LiveOrders     = lazy(() => import("./eatery/admin/pages/LiveOrders").then(m => ({ default: m.LiveOrders })));
const KitchenTables  = lazy(() => import("./eatery/admin/pages/Tables").then(m => ({ default: m.Tables })));
const OrderLanding   = lazy(() => import("./eatery/customer/pages/Landing").then(m => ({ default: m.Landing })));
const OrderMenu      = lazy(() => import("./eatery/customer/pages/Menu").then(m => ({ default: m.Menu })));
const OrderCart      = lazy(() => import("./eatery/customer/pages/Cart").then(m => ({ default: m.Cart })));
const OrderConfirm   = lazy(() => import("./eatery/customer/pages/Confirmation").then(m => ({ default: m.Confirmation })));



// import InstallPWA from "./components/InstallPWA";

function AdminLoginPageWrapper() {
  const navigate = useNavigate();
  return <AdminLogin onLoginSuccess={() => navigate("/admin/dashboard")} />;
}

function AppShell({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();
  const isStandalone = pathname.startsWith('/kitchen') || pathname.startsWith('/order') || pathname.startsWith('/medrep-admin') || pathname.startsWith('/ip-bill') || pathname.startsWith('/hbot-admin');
  if (isStandalone) return <>{children}</>;
  return (
    <div className="min-h-screen bg-[#080808]">
      <Header />
{children}
      <Footer />
      <FloatingActions />
    </div>
  );
}

function AdminDashboardWrapper() {
  const navigate = useNavigate();
  return (
    <AdminDashboard
      onLogout={() => {
        localStorage.removeItem("admin_token");
        navigate("/admin/login");
      }}
    />
  );
}

export default function App() {

  useEffect(() => {
    const KEY = "gkf-visit-recorded";

    if (!sessionStorage.getItem(KEY)) {
      fetch("https://chatbot2025gkf.onrender.com/api/stats/visit", {
        method: "POST",
      }).catch(() => { });
      sessionStorage.setItem(KEY, "true");
    }
  }, []);


  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: "smooth", block: "start" });
          }, 50);
        }
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  // useEffect(() =>{
  //   const testSupaBase = async () => {
  //     console.log(import.meta.env.VITE_SUPABASE_URL)
  //     console.log("logged")
  //     const {data , error} = await supabase
  //       .from("")
  //       .select('*')
      
  //     console.log("data" , data);
  //     console.log("error",error)

  //     testSupaBase()
  //   }
  // },[])

  useVisitTracker();

  return (
    <CartProvider>
    <Router>
       <AnalyticsTracker />
      <ScrollToTop />
      <AppShell>
        <main className="pt-0">
          <ChunkErrorBoundary>
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center">
              <div className="w-10 h-10 border-4 border-orange-500 border-t-transparent rounded-full animate-spin" />
            </div>
          }>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/hospital" element={<Hospital />} />
            <Route path="/burns-center" element={<BurnsCenter />} />
            <Route path="/Paediatric Burns" element={<BurnsLibrary />} />
            <Route path="/adoption" element={<Adoption />} />
            <Route path="/volunteering" element={<Volunteering />} />
            <Route path="/save-child" element={<SaveAChild />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/a-e" element={<WhyUnique />} />
            <Route path="/abls" element={<ABLSPage />} />
            <Route path="/milk-bank" element={<MilkBankPage />} />
            <Route path="/Quantum" element={<PALSPage />} />
            <Route path="/skin-bank" element={<SkinBankPage />} />
            <Route path="/media" element={<MultiMedia />} />
            <Route path="/enh" element={<Enh />} />
            <Route path="/ivy" element={<UpdatedIvy />} />
            <Route path="/donation-success" element={<ThankYou />} />
            <Route path="/patient-appointments" element={<PatientAppointmentForm />} />
            <Route path="/adoption-enquiry" element={<AdoptionEnquiryForm />} />
            <Route path="/medrep-visits" element={<MedRepBookingPage />} />
            <Route path="/internship-application" element={<InternshipApplicationForm />} />
            <Route path="/paediatric-burn" element={<PaediatricBurn />} />
            <Route path="/community-college" element={<CommunityCollege />} />
            <Route path="/castle-arena" element={<CastleArena />} />
            <Route path="/tranquil" element={<Tranquil />} />
            <Route path="/eatery" element={<Eatery />} />
            <Route path="/upshop" element={<UPshop />} />
            <Route path="/emergency-care" element={<EmergencyCarePage />} />
            <Route path="/admin/login" element={<AdminLoginPageWrapper />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/termsconditions" element={<TermsConditions />} />
            <Route path="/admin/dashboard" element={<AdminDashboardWrapper />} />
            <Route path="/feedback" element={<FeedbackForm />} />
            <Route path="/dialysis-unit" element={<DialysisUnitForm />} />
            <Route path="/careers" element={<CareersForm />} />
            <Route path="/support-hospital" element={<SupportHospital />} />
            <Route path="/ivy/apply/:institutionName" element={<ApplyPage />} />
            <Route path="/patient-feedback" element={<PatientFeedbackPage />} />
            <Route path="/feedback-dashboard" element={<FeedbackDashboardPage />} />
            <Route path="/qr/feedback" element={<PatientFeedbackQR />} />
            {/* Medical rep appointment system */}
            <Route path="/medrep-book"  element={<MedRepBookingPage />} />
            <Route path="/medrep-admin" element={<MedRepAdminPage />} />
            {/* HBOT appointment system */}
            <Route path="/hbot-booking" element={<HBOTBookingPage />} />
            <Route path="/hbot-admin"   element={<HBOTAdminDashboard />} />
            {/* Kitchen admin */}
            <Route path="/kitchen/login"   element={<KitchenLogin />} />
            <Route path="/kitchen/orders"  element={<LiveOrders />} />
            <Route path="/kitchen/menu"    element={<MenuManager />} />
            <Route path="/kitchen/tables"  element={<KitchenTables />} />
            {/* Customer ordering */}
            <Route path="/order"         element={<OrderLanding />} />
            <Route path="/order/menu"    element={<OrderMenu />} />
            <Route path="/order/cart"    element={<OrderCart />} />
            <Route path="/order/confirm" element={<OrderConfirm />} />
            {/* IP Bill Book */}
            <Route path="/ip-bill/login" element={<IPLogin />} />
            <Route path="/ip-bill" element={<IPLayout />}>
              <Route path="patients"     element={<PatientList />} />
              <Route path="patients/new" element={<CreatePatient />} />
              <Route path="patients/:id" element={<PatientDetail />} />
              <Route path="charge-types"  element={<IPChargeTypes />} />
              <Route path="users"        element={<IPUsers />} />
              <Route path="audit"        element={<IPAuditLog />} />
            </Route>
          </Routes>
          </Suspense>
          </ChunkErrorBoundary>
        </main>
      </AppShell>
    </Router>
    </CartProvider>
  );
}
