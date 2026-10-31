import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Heart } from 'lucide-react';
import logo2 from "../../assets/logo2.png";
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function SkinBankSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section className="section-container py-10 bg-[#0d0d0d]" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-12">
          <h2 className="mb-4 text-white">Skin Bank</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <h3 className="text-white/80 mb-4">Devi Cropscience – Rotary Community Skin Bank GG 2012692</h3>
          <p className="text-white/80">Run by Grace Kennett Foundation Hospital</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={inView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="max-w-4xl mx-auto mb-12">
          <div className="bg-[#111111] border border-white/[0.07] p-12 rounded-3xl shadow-2xl text-center">
            <div className="flex justify-center mb-8">
                    <div className="w-24 h-24 rounded-full flex items-center justify-center bg-gradient-to-br from-orange-100 to-orange-50 shadow-lg border-2 border-orange-200">
                      <motion.div
                        animate={{ rotateY: [0, 360] }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-16 h-16"
                      >
                        <ImageWithFallback
                          src={logo2}
                          alt="Grace Kennett Foundation"
                          className="object-contain"
                        />
                      </motion.div>
                    </div>
                  </div>

            <div className="space-y-4">
              <h3 className="text-3xl text-orange-400">Gift Skin - Gift Life</h3>
              <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
                The butterfly represents organ donation as a symbol of change and is also well established as representing new life and hope. The butterfly is one symbol most associated with The Gift Of Life – organ donation.
              </p>
              <p className="text-white/80 italic">
                Here you see an orange butterfly with a broken wing repaired. The yellow area denotes the gift of life – the donated skin.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6, delay: 0.4 }} className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow-lg">
              <h4 className="text-blue-400 mb-4 flex items-center">
                <Heart className="w-5 h-5 mr-2" />
                What is Skin Donation?
              </h4>
              <p className="text-white/80 text-sm">
                Life is skin deep. Loss of skin can lead to loss of life. Cover provided with the donated skin in the first three weeks of injury can reduce the number of burns victims dying by almost 50%.
              </p>
            </div>

            <div className="bg-[#111111] border border-white/[0.07] p-6 rounded-xl shadow-lg">
              <h4 className="text-blue-400 mb-4">What is a Skin Bank?</h4>
              <p className="text-white/80 text-sm">
                Skin banking is a facility where the skin is collected from eligible deceased donor and processed as per international protocols. Skin can be stored in the skin bank at 4-8° Celsius up to 5 years. The stored skin can be used for burns patients who have deep burns.
              </p>
            </div>
          </div>

          <div className="bg-[#0d0d0d] border border-white/[0.07] p-8 rounded-2xl">
            <h3 className="mb-6 text-white">Functions of the Skin Bank</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🔍</div>
                <h5 className="mb-2 text-white">Retrieval</h5>
                <p className="text-xs text-white/80">Skin procurement from eligible donors</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">⚗️</div>
                <h5 className="mb-2 text-white">Processing</h5>
                <p className="text-xs text-white/80">Quality check and preservation</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">❄️</div>
                <h5 className="mb-2 text-white">Storage</h5>
                <p className="text-xs text-white/80">Preserved at 4-8°C for up to 5 years</p>
              </div>
              <div className="bg-[#111111] border border-white/[0.07] p-4 rounded-lg text-center">
                <div className="text-2xl mb-2">🚚</div>
                <h5 className="mb-2 text-white">Distribution</h5>
                <p className="text-xs text-white/80">Supply to burns surgeons</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
