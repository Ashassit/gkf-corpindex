import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  return (
    <section className="bg-[#0d0d0d] px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-4 md:space-y-6">
          <div>
            <h2 className="text-white mb-2 text-2xl sm:text-3xl md:text-4xl">Who We Are</h2>
            <h3 className="text-orange-400 text-xl sm:text-2xl md:text-3xl">
              From Hospital Healing<br />
              To Public Health
            </h3>
          </div>
          
          <p className="text-white/60 text-sm md:text-base">
            GKF Eatery is the food and beverages wing of Grace Kennett Foundation, 
            a trusted NGO and Hospital in Madurai with 80+ years of health service.
          </p>

          <div className="space-y-3">
            <p className="text-white/80 text-sm md:text-base">
              We provide:
            </p>
            <p className="text-white/60 text-sm md:text-base">
              At Eat and Heal, we apply the science of clinical nutrition to promote 
              healing and recovery. Our diet plans are evidence-based and designed to 
              support the body's natural healing process. With expert guidance, food 
              becomes a key part of therapeutic care.
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1666251214795-a1296307d29c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjByaWNlJTIwbWVhbCUyMHBsYXRlfGVufDF8fHx8MTc2NDg0OTQ4M3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Traditional meal with rice and roti on orange plate" 
            className="w-full h-64 sm:h-80 md:h-96 lg:h-auto lg:max-h-[500px] rounded-2xl shadow-lg object-cover"
          />
        </div>
      </div>
    </section>
  );
}
