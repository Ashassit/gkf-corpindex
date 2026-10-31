import { useState } from 'react';
import { motion } from 'framer-motion';
import { FloatingElements } from './FloatingElements';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { Utensils, Sparkles, Bell } from 'lucide-react';
import { toast } from 'sonner';

export default function EatAndHeal() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNotifyMe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      toast.success('Thank you! We\'ll notify you when we launch! 🎉');
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="pl-30 pr-30 min-h-screen relative overflow-hidden bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-green-400/30 to-emerald-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/30 to-cyan-400/30 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <FloatingElements />

      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="max-w-5xl w-full">
          <div className="text-center space-y-8">
            {/* Logo/Brand Animation */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center justify-center gap-3 mb-6"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Utensils className="w-12 h-12 text-emerald-600" />
              </motion.div>
              <motion.h1
                className="text-6xl md:text-8xl text-emerald-800 tracking-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Eat <span className="text-teal-600">&</span> Heal
              </motion.h1>
            </motion.div>

            {/* Coming Soon with staggered animation */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="space-y-4"
            >
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-emerald-200/50 shadow-lg"
              >
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <span className="text-emerald-800 tracking-widest uppercase">Coming Soon</span>
                <Sparkles className="w-5 h-5 text-yellow-500" />
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl text-emerald-700/80 max-w-2xl mx-auto"
              >
                Nourish your body, feed your soul, and discover the healing power of mindful eating
              </motion.p>
            </motion.div>

            {/* Email Notification Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="max-w-md mx-auto"
            >
              <form onSubmit={handleNotifyMe} className="space-y-4">
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="bg-white/80 backdrop-blur-sm border-emerald-200 focus:border-emerald-400 h-12 px-4"
                    />
                  </div>
                  <Button
                    type="submit"
                    className="bg-emerald-600 hover:bg-emerald-700 h-12 px-6"
                    disabled={isSubmitted}
                  >
                    <Bell className="w-4 h-4 mr-2" />
                    {isSubmitted ? 'Subscribed!' : 'Notify Me'}
                  </Button>
                </div>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }} viewport={{ once: true }}
                  transition={{ delay: 2 }}
                  className="text-sm text-emerald-600/60"
                >
                  Be the first to know when we launch our transformative wellness journey
                </motion.p>
              </form>
            </motion.div>

            {/* Feature Pills */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1.8 }}
              className="flex flex-wrap justify-center gap-3 mt-8"
            >
              {['Nutrition Plans', 'Healing Recipes', 'Mindful Eating', 'Wellness Coaching'].map((feature, idx) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 2 + idx * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full border border-teal-200/50 text-teal-700 text-sm"
                >
                  {feature}
                </motion.div>
              ))}
            </motion.div>

            {/* Footer Text */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }} viewport={{ once: true }}
              transition={{ duration: 1, delay: 2.5 }}
              className="mt-16 text-emerald-600/50 text-sm"
            >
              <p>Preparing something special for your wellness journey</p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
