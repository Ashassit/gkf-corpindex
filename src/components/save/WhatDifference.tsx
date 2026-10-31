import SaveAChild1 from "../../assets/volunteer/newmi1.jpg";
import SaveAChild2 from "../../assets/volunteer/newml2.jpg";
import SaveAChild3 from "../../assets/volunteer/newml4.jpg";
import { TrendingUp, Award, Users, Home, Calendar, Heart, Sparkles, Pin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { ResponsivePicture } from './ResponsivePicture';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function WhatDifference() {
  const stats = [
    {
      icon: Award,
      value: 80,
      suffix: "",
      label: "Years of Legacy",
      sublabel: "Since 1944",
      color: "bg-[#1a1010]",
      accentColor: "text-orange-500",
      rotation: -1,
      description: "Eight decades of unwavering commitment to children"
    },
    {
      icon: Users,
      value: 1000,
      suffix: "+",
      label: "Children Saved",
      sublabel: "Lives Transformed",
      color: "bg-[#141414]",
      accentColor: "text-white",
      rotation: 1,
      description: "Each child's story is a testament to hope"
    },
    {
      icon: Home,
      value: 1000,
      suffix: "+",
      label: "Happy Families",
      sublabel: "Dreams Fulfilled",
      color: "bg-[#1a1010]",
      accentColor: "text-orange-500",
      rotation: -1,
      description: "Building futures, one family at a time"
    }
  ];

  const stories = [
    {
      icon: TrendingUp,
      title: "Our Journey",
      description: "In our 80-year journey, we've saved more than 1000 precious lives and brought joy to over 1000 families.",
      color: "bg-[#1a1010]",
      rotation: 1
    },
    {
      icon: Heart,
      title: "Our Mission",
      description: "Each child represents hope, love, and a brighter future. Every number tells a story of transformation.",
      color: "bg-[#141414]",
      rotation: -0.5
    },
    {
      icon: Sparkles,
      title: "Our Impact",
      description: "Building families, changing lives, and creating endless possibilities for children in need.",
      color: "bg-[#1a1010]",
      rotation: 1
    }
  ];

  const photos = [
    {
      image: SaveAChild1,
      caption: "Our Children, Our Future",
      rotation: -2
    },
    {
      image: SaveAChild2,
      caption: "Building Happy Families",
      rotation: 1
    },
    {
      image: SaveAChild3,
      caption: "Creating Bright Futures",
      rotation: -1.5
    }
  ];

  return (
    <section
      id="difference"
      className="section-container relative py-12 md:py-16 bg-[#0a0a0a]"
    >
      <div className="section-container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block relative"
              initial={{ rotate: -1 }}
              whileHover={{ rotate: 0, y: -3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <Pin className="w-5 h-5 text-orange-500 fill-orange-500" />
              </div>

              <div className="bg-[#141414] p-5 md:p-6 rounded-lg border border-orange-500/30">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <span className="text-sm text-white">Since 1944</span>
                </div>

                <h2 className="site-heading text-2xl md:text-3xl mb-1 text-white">
                  What Difference <br />
                  Has It Made?
                </h2>

                <div className="absolute -top-1 left-8 w-12 h-5 bg-orange-500/10 opacity-50 rotate-[-3deg] shadow-sm" />
                <div className="absolute -top-1 right-8 w-12 h-5 bg-orange-500/10 opacity-50 rotate-[3deg] shadow-sm" />
              </div>
            </motion.div>
          </motion.div>

          <div className="mb-10">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {photos.map((photo, index) => (
                <motion.div
                  key={index}
                  className="mx-auto w-full max-w-[220px]"
                  initial={{ opacity: 0, scale: 0.95, rotate: photo.rotation }}
                  whileInView={{ opacity: 1, scale: 1, rotate: photo.rotation }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <PolaroidCard
                    image={photo.image}
                    caption={photo.caption}
                    useResponsivePicture={index === 0}
                  />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-3 mb-10 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <StatStickyNote key={index} stat={stat} index={index} />
            ))}
          </div>

          <motion.div
            className="mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-3 gap-4">
              {stories.map((story, index) => (
                <StoryCard key={index} story={story} index={index} />
              ))}
            </div>
          </motion.div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-block relative"
              whileHover={{ y: -3, rotate: 0.5 }}
            >
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
                <Pin className="w-5 h-5 text-orange-500 fill-orange-500" />
              </div>

              <div className="bg-[#1a1010] border border-orange-500/30 p-4 md:p-5 rounded-lg">
                <div className="flex items-center justify-center gap-3 flex-wrap">
                  <Heart className="w-6 h-6 text-orange-500 fill-orange-500 animate-pulse" />
                  <p className="text-base md:text-lg text-white">
                    Every number tells a story of hope
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type PolaroidCardProps = {
  image: string;
  caption: string;
  useResponsivePicture?: boolean;
};

export default function PolaroidCard({ image, caption, useResponsivePicture = false }: PolaroidCardProps) {
  return (
    <motion.div className="relative bg-[#1a1a1a] p-2 pb-8 border border-white/10" whileHover={{ rotate: 0, scale: 1.05, y: -4 }} transition={{ type: "spring", stiffness: 300 }}>
      <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
        <Pin className="w-5 h-5 text-orange-500 fill-orange-500" />
      </div>

      <div
        className="w-full h-[260px] overflow-hidden bg-[#222] mb-2 rounded-md relative"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 bg-center bg-cover filter blur-sm scale-105"
          style={{ backgroundImage: `url(${image})`, opacity: 0.35 }}
        />
        <div className="relative w-full h-full flex items-center justify-center">
          {useResponsivePicture ? (
            <ResponsivePicture
              desktopSrc={image}
              alt={caption}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          ) : (
            <ImageWithFallback
              src={image}
              alt={caption}
              className="max-w-full max-h-full object-contain"
              loading="lazy"
            />
          )}
        </div>
      </div>

      <p className="text-center text-white text-sm">{caption}</p>
      <div className="absolute inset-0 bg-black/20 blur-lg -z-10 translate-y-2" />
    </motion.div>
  );
}

function StatStickyNote({ stat, index }: { stat: any; index: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (startCount) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [startCount, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="relative"
      initial={{ opacity: 0, x: 30, rotate: 0 }}
      whileInView={{ opacity: 1, x: 0, rotate: stat.rotation }}
      viewport={{ once: true }}
      onViewportEnter={() => setStartCount(true)}
      transition={{
        type: "spring",
        stiffness: 120,
        delay: index * 0.1
      }}
    >
      <motion.div
        className="relative"
        whileHover={{ rotate: 0, scale: 1.02, y: -2 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute -top-1.5 left-5 z-20">
          <Pin className="w-4 h-4 text-orange-500 fill-orange-500" />
        </div>

        <div className={`${stat.color} border-l-4 border-orange-500/60 p-4`}>
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <stat.icon className={`w-5 h-5 ${stat.accentColor}`} />
            </div>

            <div className="flex-1">
              <div className={`text-2xl md:text-3xl ${stat.accentColor} mb-0.5`}>
                {count}{stat.suffix}
              </div>
              <p className="text-sm text-white mb-0.5">{stat.label}</p>
              <p className="text-xs text-white/80">{stat.sublabel}</p>
            </div>
          </div>

          <p className="text-xs text-white/80 mt-2 pt-2 border-t border-white/10">
            {stat.description}
          </p>
        </div>

        <div className="absolute inset-0 bg-black/20 blur-md -z-10 translate-y-1" />
      </motion.div>
    </motion.div>
  );
}

function StoryCard({ story, index }: { story: any; index: number }) {
  return (
    <motion.div
      className="relative h-full"
      initial={{ opacity: 0, y: 20, rotate: 0 }}
      whileInView={{ opacity: 1, y: 0, rotate: story.rotation }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        delay: index * 0.15
      }}
    >
      <motion.div
        className="relative h-full"
        whileHover={{ rotate: 0, y: -4, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-20">
          <Pin className="w-4 h-4 text-white/30 fill-white/30" />
        </div>

        <div className={`${story.color} p-4 rounded-lg border border-white/10 h-full`}>
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center shadow-sm">
              <story.icon className="w-4 h-4 text-white" />
            </div>
            <h3 className="text-base text-white">{story.title}</h3>
          </div>

          <p className="text-sm text-white leading-relaxed">
            {story.description}
          </p>

          <div className="absolute top-0 right-0 w-5 h-5 bg-white/5 opacity-30"
            style={{
              clipPath: 'polygon(100% 0, 0 0, 100% 100%)',
            }}
          />
        </div>

        <div className="absolute inset-0 bg-black/20 blur-md -z-10 translate-y-1.5" />
      </motion.div>
    </motion.div>
  );
}
