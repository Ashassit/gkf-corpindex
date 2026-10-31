import React, { useEffect, useRef, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "./ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Calendar, MapPin, Images, Play, Pause, Maximize, Minimize, ZoomIn, ZoomOut, X, Info, Activity, Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

import A2 from "../assets/imageGallery/A2.jpg";
import A3 from "../assets/imageGallery/A3.jpg";
import A4 from "../assets/imageGallery/A4.jpg";
import A5 from "../assets/imageGallery/A5.jpg";
import A6 from "../assets/imageGallery/A6.jpg";
import A7 from "../assets/imageGallery/A7.jpg";

import nm1 from "../assets/newImages/functions/nm1.jpg";
import nm2 from "../assets/newImages/functions/nm2.jpg";
import nm5 from "../assets/newImages/functions/nm5.jpg";
import nm6 from "../assets/newImages/functions/nm6.jpg";
import nm7 from "../assets/newImages/functions/nm7.jpg";
import nm8 from "../assets/newImages/functions/nm8.jpg";
import nm9 from "../assets/newImages/functions/nm9.jpg";
import nm10 from "../assets/newImages/functions/nm10.jpg";
import nm11 from "../assets/newImages/functions/nm11.jpg";
import nm12 from "../assets/newImages/functions/nm12.jpg";
import nm13 from "../assets/newImages/functions/nm13.jpg";

import set5 from "../assets/imageGallery/setOne/set1 (5).jpg";
import set6 from "../assets/imageGallery/setOne/set1 (6).jpg";
import set10 from "../assets/imageGallery/setOne/set1 (10).jpg";
import set11 from "../assets/imageGallery/setOne/set1 (11).jpg";
import set12 from "../assets/imageGallery/setOne/set1 (12).jpg";
import set13 from "../assets/imageGallery/setOne/set1 (13).jpg";
import set14 from "../assets/imageGallery/setOne/set1 (14).jpg";
import set15 from "../assets/imageGallery/setOne/set1 (15).jpg";
import set16 from "../assets/imageGallery/setOne/set1 (16).jpg";
import set17 from "../assets/imageGallery/setOne/set1 (17).jpg";
import set18 from "../assets/imageGallery/setOne/set1 (18).jpg";
import set19 from "../assets/imageGallery/setOne/set1 (19).jpg";
import set20 from "../assets/imageGallery/setOne/set1 (20).jpg";
import set21 from "../assets/imageGallery/setOne/set1 (21).jpg";

import m1 from "../assets/imageGallery/setTwo/IMG-20251209-WA0003.jpg";
import m2 from "../assets/imageGallery/setTwo/IMG-20251209-WA0004.jpg";
import m3 from "../assets/imageGallery/setTwo/IMG-20251209-WA0005.jpg";
import m4 from "../assets/imageGallery/setTwo/IMG-20251209-WA0006.jpg";
import m5 from "../assets/imageGallery/setTwo/IMG-20251209-WA0011.jpg";
import m6 from "../assets/imageGallery/setTwo/IMG-20251209-WA0012.jpg";
import m7 from "../assets/imageGallery/setTwo/IMG-20251209-WA0013.jpg";
import m8 from "../assets/imageGallery/setTwo/IMG-20251209-WA0015.jpg";
import m9 from "../assets/imageGallery/setTwo/IMG-20251209-WA0016.jpg";
import m10 from "../assets/imageGallery/setTwo/IMG-20251209-WA0017.jpg";

interface GalleryEvent {
  id: number;
  title: string;
  date: string;
  location: string;
  status: string;
  images: string[];
  description: string;
  type: 'event' | 'medical' | 'mazhalai';
}

const initialEvents: GalleryEvent[] = [
  {
    id: 1,
    title: "Reunion With Former Mazhalai Illam Children",
    date: "October 25-07-2025",
    location: "United States",
    status: "completed",
    images: [A2, A3, A4, A5, A6, A7],
    description: "",
    type: 'mazhalai',
  },{
    id: 2,
    title: "",
    date: "",
    location: "",
    status: "",
    images: [m7,m9],
    description: "",
    type: 'mazhalai',
  },
  {
    id: 3,
    title: "Nutrition Month Competition",
    date: "September 20-09-2025",
    location: "Grace Kennett Foundation Hospital",
    status: "completed",
    images: [nm1, nm2, nm5, nm6, nm7, nm8, nm9, nm10, nm11, nm12, nm13],
    description: "Eat Right For A Better Life",
    type: 'event',
  },
  {
    id: 4,
    title: "Captured Memories",
    date: "",
    location: "",
    status: "",
    images: [ set5, set6, set10, set11, set12, set13, set14, set15, set16, set17, set18, set19, set20, set21,],
    description: "",
    type: 'event',
  },
  {
    id:5,
    title:"",
    date:"",
    location:"",
    status:"",
    images:[m1, m2, m3, m4, m5, m6, m7, m8, m9, m10],
    description:"",
    type: 'event',
  }
];

const sorters: Record<string, (a: GalleryEvent, b: GalleryEvent) => number> = {
  newest: (a, b) => b.id - a.id,
  mostPhotos: (a, b) => b.images.length - a.images.length,
};

function GallerySection({ 
  events, 
  query, 
  statusFilter, 
  sortBy,
  
  openModal 
}: {
  events: GalleryEvent[];
  query: string;
  statusFilter: string | "all";
  sortBy: string;
  intervalMs: number;
  openModal: (ev: GalleryEvent, idx?: number) => void;
}) {
  const filtered = events
    .filter((e) => {
      if (statusFilter !== "all" && e.status !== statusFilter) return false;
      if (!query) return true;
      const q = query.toLowerCase();
      return (
        e.title.toLowerCase().includes(q) ||
        e.location.toLowerCase().includes(q) ||
        e.description.toLowerCase().includes(q)
      );
    })
    .sort(sorters[sortBy]);

  if (filtered.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <Images className="w-16 h-16 mx-auto mb-4 opacity-50" />
        <p>No galleries found matching your criteria</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {filtered.map((event) => (
        <Card key={event.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-md">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 md:p-5">
            <div className="md:col-span-5">
              <div
                className="rounded-xl overflow-hidden cursor-pointer group shadow-md relative"
                onClick={() => openModal(event, 0)}
              >
                <ImageWithFallback
                  src={event.images[0] || "https://via.placeholder.com/400x300?text=No+Image"}
                  alt={event.title}
                  className="w-full h-48 md:h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white text-sm backdrop-blur-sm bg-white/10 px-4 py-2 rounded-full border border-white/20">
                    View Gallery
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 mt-2">
                {event.images.slice(1, 4).map((img, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-lg overflow-hidden cursor-pointer group shadow-sm relative"
                    onClick={() => openModal(event, i + 1)}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`${event.title} ${i + 2}`}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                  </div>
                ))}
              </div>
            </div>

            <div className="md:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row items-start justify-between gap-2">
                  <h3 className="flex-1">{event.title}</h3>
                  <Badge
                    className={
                      event.status === "ongoing"
                        ? "bg-green-500 hover:bg-green-600 whitespace-nowrap"
                        : event.status === "upcoming"
                        ? "bg-blue-500 hover:bg-blue-600 whitespace-nowrap"
                        : "bg-gray-200 text-gray-700 hover:bg-gray-300 whitespace-nowrap"
                    }
                  >
                    {event.status === "ongoing" ? "Happening Now" : event.status === "upcoming" ? "Upcoming" : "Past Event"}
                  </Badge>
                </div>
                <p className="mt-2 text-muted-foreground">{event.description}</p>

                <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mt-4">
                  {event.date && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">{event.date}</span>
                    </div>
                  )}
                  {event.location && (
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4 flex-shrink-0" />
                      <span className="break-words">{event.location}</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Images className="w-4 h-4 flex-shrink-0" />
                    <span>{event.images.length} photos</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-4">
                <Button
                  onClick={() => openModal(event, 0)}
                  className={event.type === 'medical' 
                    ? "bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 w-full sm:w-auto"
                    : event.type === 'mazhalai'
                    ? "bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 w-full sm:w-auto"
                    : "bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 w-full sm:w-auto"
                  }
                >
                  View Gallery
                </Button>
                <Button variant="outline" className="w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default function Gallery() {
  const [events] = useState<GalleryEvent[]>(initialEvents);
  const [query, setQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<string | "all">("all");
  const [sortBy, setSortBy] = useState<string>("newest");

  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [intervalMs, setIntervalMs] = useState(3000);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [showInfo, setShowInfo] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const controlsTimeout = useRef<number | null>(null);

  // zoom/pan state
  const [scale, setScale] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });
  const startPan = useRef<{ x: number; y: number } | null>(null);
  const lastTranslate = useRef({ x: 0, y: 0 });

  const slideshowRef = useRef<number | null>(null);
  const viewerRef = useRef<HTMLDivElement | null>(null);
  const thumbnailsRef = useRef<HTMLDivElement | null>(null);

  const eventGalleries = events.filter(e => e.type === 'event');
  const medicalGalleries = events.filter(e => e.type === 'medical');
  const mazhalaiGalleries = events.filter(e => e.type === 'mazhalai');

  // Auto-hide controls after inactivity
  const resetControlsTimeout = () => {
    setShowControls(true);
    if (controlsTimeout.current) clearTimeout(controlsTimeout.current);
    controlsTimeout.current = window.setTimeout(() => {
      if (!isPlaying) return;
      setShowControls(false);
    }, 3000);
  };

  useEffect(() => {
    // slideshow interval
    if (isPlaying && selectedEvent) {
      slideshowRef.current = window.setInterval(() => {
        setIndex((prev) => (prev + 1) % selectedEvent.images.length);
        setImageLoaded(false);
      }, intervalMs);
    }
    return () => {
      if (slideshowRef.current) {
        clearInterval(slideshowRef.current);
        slideshowRef.current = null;
      }
    };
  }, [isPlaying, intervalMs, selectedEvent]);

  useEffect(() => {
    // Scroll thumbnail into view
    if (thumbnailsRef.current && selectedEvent) {
      const thumbnail = thumbnailsRef.current.children[index] as HTMLElement;
      if (thumbnail) {
        thumbnail.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      }
    }
    setImageLoaded(false);
  }, [index, selectedEvent]);

  useEffect(() => {
    // keyboard shortcuts
    function onKey(e: KeyboardEvent) {
      if (!selectedEvent) return;
      if (e.key === "ArrowRight") {
        setIndex((p) => Math.min(selectedEvent!.images.length - 1, p + 1));
        e.preventDefault();
      }
      if (e.key === "ArrowLeft") {
        setIndex((p) => Math.max(0, p - 1));
        e.preventDefault();
      }
      if (e.key === "Escape") {
        closeModal();
      }
      if (e.key.toLowerCase() === "f") {
        toggleFullscreen();
      }
      if (e.key === " ") {
        setIsPlaying((p) => !p);
        e.preventDefault();
      }
      if (e.key === "+") {
        zoomIn();
        e.preventDefault();
      }
      if (e.key === "-") {
        zoomOut();
        e.preventDefault();
      }
      if (e.key.toLowerCase() === "i") {
        setShowInfo((p) => !p);
        e.preventDefault();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selectedEvent]);

  useEffect(() => {
    // fullscreen change listener
    function onFS() {
      const fs = document.fullscreenElement != null;
      setIsFullscreen(fs);
    }
    document.addEventListener("fullscreenchange", onFS);
    return () => document.removeEventListener("fullscreenchange", onFS);
  }, []);

  useEffect(() => {
    const el = viewerRef.current;
    if (!el || !selectedEvent) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      const delta = -e.deltaY / 500;
      setScale((s) => Math.max(1, Math.min(4, +(s + delta).toFixed(2))));
    };

    el.addEventListener("wheel", handleWheel, { passive: false });

    return () => el.removeEventListener("wheel", handleWheel);
  }, [selectedEvent]);

  const openModal = (ev: GalleryEvent, idx = 0) => {
    setSelectedEvent(ev);
    setIndex(idx);
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    lastTranslate.current = { x: 0, y: 0 };
    setShowControls(true);
    setShowInfo(false);
    setImageLoaded(false);
  };

  const closeModal = () => {
    setSelectedEvent(null);
    setIsPlaying(false);
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    setShowInfo(false);
    if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
  };

  const toggleFullscreen = () => {
    if (!viewerRef.current) return;
    if (!document.fullscreenElement) {
      viewerRef.current.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  };

  const zoomIn = () => {
    setScale((s) => Math.min(4, +(s + 0.5).toFixed(2)));
  };

  const zoomOut = () => {
    setScale((s) => Math.max(1, +(s - 0.5).toFixed(2)));
  };

  const resetZoom = () => {
    setScale(1);
    setTranslate({ x: 0, y: 0 });
    lastTranslate.current = { x: 0, y: 0 };
  };

  const onPointerDown = (e: React.PointerEvent) => {
    if (scale <= 1) return;
    (e.target as Element).setPointerCapture(e.pointerId);
    startPan.current = { x: e.clientX, y: e.clientY };
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!startPan.current) return;
    const dx = e.clientX - startPan.current.x;
    const dy = e.clientY - startPan.current.y;
    setTranslate({ x: lastTranslate.current.x + dx, y: lastTranslate.current.y + dy });
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!startPan.current) return;
    lastTranslate.current = { ...translate };
    startPan.current = null;
    try {
      (e.target as Element).releasePointerCapture(e.pointerId);
    } catch {}
  };

  // Double-click to zoom
  const handleDoubleClick = (e: React.MouseEvent) => {
    if (scale > 1) {
      resetZoom();
    } else {
      setScale(2);
      // Calculate zoom position based on click location
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * -rect.width * 0.5;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * -rect.height * 0.5;
      setTranslate({ x, y });
      lastTranslate.current = { x, y };
    }
  };

  // touch swipe for mobile
  const touchStart = useRef<number | null>(null);
  const touchEnd = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (scale > 1) return;
    touchStart.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (scale > 1) return;
    touchEnd.current = e.changedTouches[0].clientX;
    if (touchStart.current == null || touchEnd.current == null) return;
    const dx = touchEnd.current - touchStart.current;
    if (Math.abs(dx) < 50) return;
    if (dx < 0) {
      setIndex((p) => Math.min((selectedEvent?.images.length ?? 1) - 1, p + 1));
    } else {
      setIndex((p) => Math.max(0, p - 1));
    }
    touchStart.current = null;
    touchEnd.current = null;
  };

  return (
    <div className="space-y-6 p-4 md:p-6">
      <header className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="p-3 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg">
          <Images className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1>Gallery</h1>
          <p className="text-muted-foreground">Explore our events and medical facilities</p>
        </div>
      </header>

      {/* Filters */}
      <div className="flex flex-col lg:flex-row lg:flex-wrap gap-3 items-stretch lg:items-center bg-[#111111] p-4 rounded-lg border border-white/10">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search galleries..."
          className="px-4 py-2 border rounded-lg w-full lg:w-60 focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as any)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
        >
          <option value="all">All Status</option>
          <option value="ongoing">Ongoing</option>
          <option value="upcoming">Upcoming</option>
          <option value="completed">Completed</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
        >
          <option value="newest">Newest First</option>
          <option value="mostPhotos">Most Photos</option>
        </select>

        <div className="lg:ml-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          <label className="text-sm text-muted-foreground whitespace-nowrap">Slideshow Speed:</label>
          <select
            value={String(intervalMs)}
            onChange={(e) => setIntervalMs(Number(e.target.value))}
            className="px-3 py-2 border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all"
          >
            <option value={2000}>2 seconds</option>
            <option value={3000}>3 seconds</option>
            <option value={5000}>5 seconds</option>
          </select>
        </div>
      </div>

      {/* Tabs for Event, Medical, and Mazhalai Illam Galleries */}
      <Tabs defaultValue="events" className="w-full">
        <TabsList className="grid w-full max-w-2xl grid-cols-3">
          <TabsTrigger value="events" className="flex items-center gap-2">
            <Images className="w-4 h-4" />
            Event Gallery
          </TabsTrigger>
          <TabsTrigger value="mazhalai" className="flex items-center gap-2">
            <Heart className="w-4 h-4" />
            Mazhalai Illam
          </TabsTrigger>
          <TabsTrigger value="medical" className="flex items-center gap-2">
            <Activity className="w-4 h-4" />
            Medical Gallery
          </TabsTrigger>
        </TabsList>

        <TabsContent value="events" className="mt-6">
          <GallerySection
            events={eventGalleries}
            query={query}
            statusFilter={statusFilter}
            sortBy={sortBy}
            intervalMs={intervalMs}
            openModal={openModal}
          />
        </TabsContent>

        <TabsContent value="medical" className="mt-6">
          <GallerySection
            events={medicalGalleries}
            query={query}
            statusFilter={statusFilter}
            sortBy={sortBy}
            intervalMs={intervalMs}
            openModal={openModal}
          />
        </TabsContent>

        <TabsContent value="mazhalai" className="mt-6">
          <GallerySection
            events={mazhalaiGalleries}
            query={query}
            statusFilter={statusFilter}
            sortBy={sortBy}
            intervalMs={intervalMs}
            openModal={openModal}
          />
        </TabsContent>
      </Tabs>

      {/* Enhanced Professional Gallery Viewer */}
      <Dialog open={!!selectedEvent} onOpenChange={() => closeModal()}>
        <DialogContent className="max-w-[100vw] w-full h-[100vh] p-0 bg-black border-none">
          <VisuallyHidden>
            <DialogTitle>{selectedEvent?.title || "Gallery Viewer"}</DialogTitle>
            <DialogDescription>
              Viewing photos for accessibility compliance.
            </DialogDescription>
          </VisuallyHidden>

          <AnimatePresence mode="wait">
            {selectedEvent && (
              <motion.div
                key={selectedEvent.id}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} viewport={{ once: true }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full h-full flex flex-col"
                onMouseMove={resetControlsTimeout}
              >
                {/* Ambient Background Glow */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <motion.div
                    key={`glow-${index}`}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 0.15, scale: 1.2 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 blur-3xl"
                    style={{
                      background: selectedEvent.type === 'medical'
                        ? `radial-gradient(circle at center, rgba(59, 130, 246, 0.3), transparent 70%)`
                        : selectedEvent.type === 'mazhalai'
                        ? `radial-gradient(circle at center, rgba(168, 85, 247, 0.3), transparent 70%)`
                        : `radial-gradient(circle at center, rgba(236, 72, 153, 0.3), transparent 70%)`,
                    }}
                  />
                </div>

                {/* Header with Event Info */}
                <motion.div
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: showControls ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-0 left-0 right-0 z-20 bg-gradient-to-b from-black/90 via-black/60 to-transparent p-3 md:p-6"
                  style={{ pointerEvents: showControls ? "auto" : "none" }}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="text-white space-y-2 flex-1 min-w-0">
                      <motion.h2 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl md:text-3xl break-words"
                      >
                        {selectedEvent.title}
                      </motion.h2>
                      <motion.div 
                        initial={{ x: -20, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-6 text-white/80 text-sm"
                      >
                        {selectedEvent.date && (
                          <span className="flex items-center gap-2">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span className="break-words">{selectedEvent.date}</span>
                          </span>
                        )}
                        {selectedEvent.location && (
                          <span className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span className="break-words">{selectedEvent.location}</span>
                          </span>
                        )}
                      </motion.div>
                    </div>
                    <div className="flex gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setShowInfo(!showInfo)}
                        className="text-white hover:bg-white/20 rounded-full w-10 h-10 p-0 flex-shrink-0"
                        title="Toggle Info (I)"
                      >
                        <Info className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={closeModal}
                        className="text-white hover:bg-white/20 rounded-full w-10 h-10 p-0 flex-shrink-0"
                      >
                        <X className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </motion.div>

                {/* Image Info Overlay */}
                <AnimatePresence>
                  {showInfo && (
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="absolute top-24 left-4 md:left-6 z-20 bg-black/80 backdrop-blur-xl border border-white/20 rounded-xl p-4 md:p-6 text-white max-w-sm shadow-2xl"
                    >
                      <h3 className="mb-3">Photo Details</h3>
                      <div className="space-y-2 text-sm text-white/80">
                        <p>Photo {index + 1} of {selectedEvent.images.length}</p>
                        <p>{selectedEvent.description}</p>
                        <div className="pt-3 border-t border-white/10 text-xs text-white/60">
                          <p>Tip: Use arrow keys to navigate, space to play/pause</p>
                          <p>Double-click image to zoom, F for fullscreen</p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Main Image Viewer */}
                <div
                  ref={viewerRef}
                  onPointerDown={onPointerDown}
                  onPointerMove={onPointerMove}
                  onPointerUp={onPointerUp}
                  onDoubleClick={handleDoubleClick}
                  onTouchStart={handleTouchStart}
                  onTouchEnd={handleTouchEnd}
                  className="flex-1 relative flex items-center justify-center overflow-hidden select-none"
                  style={{ cursor: scale > 1 ? "grab" : "default" }}
                >
                  {/* Loading State */}
                  {!imageLoaded && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }} viewport={{ once: true }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex items-center justify-center z-10"
                    >
                      <div className={`w-12 h-12 border-4 ${
                        selectedEvent.type === 'medical' 
                          ? 'border-blue-500/30 border-t-blue-500' 
                          : selectedEvent.type === 'mazhalai'
                          ? 'border-purple-500/30 border-t-purple-500'
                          : 'border-pink-500/30 border-t-pink-500'
                      } rounded-full animate-spin`} />
                    </motion.div>
                  )}

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }} viewport={{ once: true }}
                      exit={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                      transition={{ 
                        duration: 0.5, 
                        ease: [0.25, 0.1, 0.25, 1.0],
                        opacity: { duration: 0.3 }
                      }}
                      className="w-full h-full flex items-center justify-center relative"
                      style={{
                        transform: `scale(${scale}) translate(${translate.x / scale}px, ${translate.y / scale}px)`,
                        transformOrigin: "center center",
                        transition: startPan.current ? "none" : "transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1.0)",
                      }}
                    >
                      {/* Image Shadow/Depth Effect */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div 
                          className="absolute w-[90%] h-[90%] bg-black/30 blur-2xl rounded-lg"
                          style={{
                            transform: 'translateY(20px)',
                          }}
                        />
                      </div>

                      {/* Fixed size container for consistent dimensions */}
                      <div className="relative flex items-center justify-center w-full h-full max-w-[90vw] max-h-[calc(100vh-280px)] md:max-h-[calc(100vh-240px)]">
                        <ImageWithFallback
                          src={selectedEvent.images[index] || "https://via.placeholder.com/800x600?text=No+Image"}
                          alt={`${selectedEvent.title} ${index + 1}`}
                          className="max-w-full max-h-full w-auto h-auto object-contain relative z-10 rounded-lg shadow-2xl"
                          style={{ 
                            userSelect: "none", 
                            pointerEvents: "none",
                            filter: imageLoaded ? 'none' : 'blur(20px)',
                          }}
                          draggable={false}
                          onLoad={() => setImageLoaded(true)}
                        />
                      </div>
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows with Enhanced Design */}
                  <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ 
                      opacity: showControls && index > 0 ? 1 : 0,
                      x: showControls && index > 0 ? 0 : -20
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIndex((p) => Math.max(0, p - 1))}
                    disabled={index === 0}
                    className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-2xl group"
                    aria-label="Previous image"
                    style={{ pointerEvents: showControls && index > 0 ? "auto" : "none" }}
                  >
                    <motion.svg 
                      className="w-6 h-6 md:w-8 md:h-8" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                      whileHover={{ x: -2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </motion.svg>
                  </motion.button>

                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ 
                      opacity: showControls && index < selectedEvent.images.length - 1 ? 1 : 0,
                      x: showControls && index < selectedEvent.images.length - 1 ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                    onClick={() => setIndex((p) => Math.min(selectedEvent.images.length - 1, p + 1))}
                    disabled={index === selectedEvent.images.length - 1}
                    className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 w-12 h-12 md:w-16 md:h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/25 hover:scale-110 transition-all disabled:opacity-0 disabled:pointer-events-none shadow-2xl group"
                    aria-label="Next image"
                    style={{ pointerEvents: showControls && index < selectedEvent.images.length - 1 ? "auto" : "none" }}
                  >
                    <motion.svg 
                      className="w-6 h-6 md:w-8 md:h-8" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth={2.5}
                      whileHover={{ x: 2 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.button>

                  {/* Enhanced Image Counter Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: showControls ? 1 : 0, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-3 md:top-6 right-3 md:right-6 z-10"
                    style={{ pointerEvents: "none" }}
                  >
                    <div className="flex flex-col items-end gap-2">
                      <div className="px-4 py-2 rounded-full bg-black/70 backdrop-blur-md border border-white/20 text-white shadow-xl">
                        {index + 1} / {selectedEvent.images.length}
                      </div>
                      {/* Progress Bar for Slideshow */}
                      {isPlaying && (
                        <motion.div 
                          className="w-32 h-1 bg-white/20 rounded-full overflow-hidden"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }} viewport={{ once: true }}
                        >
                          <motion.div
                            className={selectedEvent.type === 'medical' ? 'h-full bg-blue-500' : selectedEvent.type === 'mazhalai' ? 'h-full bg-purple-500' : 'h-full bg-pink-500'}
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ 
                              duration: intervalMs / 1000, 
                              ease: "linear",
                              repeat: Infinity 
                            }}
                            key={index}
                          />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* Bottom Controls & Thumbnails */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: showControls ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 md:p-6 space-y-3 md:space-y-4"
                  style={{ pointerEvents: showControls ? "auto" : "none" }}
                >
                  {/* Enhanced Thumbnail Strip */}
                  <div className="relative">
                    <div
                      ref={thumbnailsRef}
                      className="flex gap-2 md:gap-3 overflow-x-auto pb-2 md:pb-3 scrollbar-hide scroll-smooth px-1"
                      style={{
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      {selectedEvent.images.map((img, i) => (
                        <motion.div
                          key={i}
                          whileHover={{ scale: 1.1, y: -8 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                          transition={{ delay: i * 0.02 }}
                          onClick={() => {
                            setIndex(i);
                            resetZoom();
                          }}
                          className={`flex-shrink-0 w-16 h-16 md:w-24 md:h-24 rounded-xl overflow-hidden cursor-pointer border-2 transition-all shadow-lg relative ${
                            i === index
                              ? selectedEvent.type === 'medical'
                                ? "border-blue-500 shadow-blue-500/50 ring-2 ring-blue-500/30 scale-110"
                                : selectedEvent.type === 'mazhalai'
                                ? "border-purple-500 shadow-purple-500/50 ring-2 ring-purple-500/30 scale-110"
                                : "border-pink-500 shadow-pink-500/50 ring-2 ring-pink-500/30 scale-110"
                              : "border-white/20 opacity-60 hover:opacity-100 hover:border-white/60"
                          }`}
                        >
                          <ImageWithFallback 
                            src={img} 
                            alt={`Thumbnail ${i + 1}`} 
                            className="w-full h-full object-cover"
                          />
                          {i === index && (
                            <motion.div
                              layoutId="thumbnail-indicator"
                              className={`absolute inset-0 border-2 rounded-xl ${
                                selectedEvent.type === 'medical' 
                                  ? 'border-blue-500' 
                                  : selectedEvent.type === 'mazhalai'
                                  ? 'border-purple-500'
                                  : 'border-pink-500'
                              }`}
                              transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            />
                          )}
                        </motion.div>
                      ))}
                    </div>
                    {/* Gradient Fades on edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-black/70 to-transparent pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-black/70 to-transparent pointer-events-none" />
                  </div>

                  {/* Enhanced Control Buttons */}
                  <div className="flex items-center justify-center">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                      className="flex items-center gap-2 md:gap-3 bg-black/60 backdrop-blur-xl rounded-full px-3 md:px-5 py-2.5 md:py-3.5 border border-white/20 overflow-x-auto max-w-full shadow-2xl"
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setIsPlaying((p) => !p)}
                        className="text-white hover:bg-white/20 rounded-full px-3 md:px-4 text-xs md:text-sm flex-shrink-0 h-9"
                      >
                        {isPlaying ? (
                          <>
                            <Pause className="w-3.5 h-3.5 md:w-4 md:h-4 md:mr-2" />
                            <span className="hidden md:inline">Pause</span>
                          </>
                        ) : (
                          <>
                            <Play className="w-3.5 h-3.5 md:w-4 md:h-4 md:mr-2" />
                            <span className="hidden md:inline">Play</span>
                          </>
                        )}
                      </Button>

                      <div className="h-5 md:h-7 w-px bg-white/30" />

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={zoomOut}
                        disabled={scale <= 1}
                        className="text-white hover:bg-white/20 disabled:opacity-30 rounded-full p-2 flex-shrink-0 h-9"
                      >
                        <ZoomOut className="w-4 h-4 md:w-4.5 md:h-4.5" />
                      </Button>

                      <span className="text-white min-w-12 md:min-w-16 text-center px-2 text-xs md:text-sm flex-shrink-0">
                        {Math.round(scale * 100)}%
                      </span>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={zoomIn}
                        disabled={scale >= 4}
                        className="text-white hover:bg-white/20 disabled:opacity-30 rounded-full p-2 flex-shrink-0 h-9"
                      >
                        <ZoomIn className="w-4 h-4 md:w-4.5 md:h-4.5" />
                      </Button>

                      {scale > 1 && (
                        <>
                          <div className="h-5 md:h-7 w-px bg-white/30" />
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={resetZoom}
                            className="text-white hover:bg-white/20 rounded-full px-3 md:px-4 text-xs md:text-sm whitespace-nowrap flex-shrink-0 h-9"
                          >
                            Reset
                          </Button>
                        </>
                      )}

                      <div className="h-5 md:h-7 w-px bg-white/30" />

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleFullscreen}
                        className="text-white hover:bg-white/20 rounded-full p-2 flex-shrink-0 h-9"
                        title={isFullscreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
                      >
                        {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        @keyframes pulse-glow {
          0%, 100% { opacity: 0.1; }
          50% { opacity: 0.2; }
        }
      `}</style>
    </div>
  );
}
