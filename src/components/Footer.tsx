import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Globe,
  Calendar,
  Watch,
  FileText,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

import { Separator } from "./ui/separator";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";

import logo3M from "../assets/logo2.png";
import { VisitCounter } from "./VisitCounter";

// Custom X (Twitter) Icon Component
const XIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5 text-white relative z-10"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export function Footer() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Care", href: "/hospital" },
    { name: "Our Team", href: "#team" },
    { name: "Volunteer", href: "/volunteering" },
    { name: "Contact", href: "/contact" },
    { name: "Audio Links", href: "/media" },
    { name: "Videos", href: "/media" },
    { name: "Gallery", href: "/media" },
  ];

  const services = [
    { name: "Emergency Care", href: "#emergency" },
    { name: "Burn Center", href: "/burns-center" },
    { name: "Pediatrics", href: "#pediatrics" },
    { name: "Child Adoption", href: "/adoption" },
    { name: "Community College", href: "/community-college" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/gkfindia",
      label: "Facebook",
      color: "from-blue-600 to-blue-700",
      isCustom: false,
    },
    {
      icon: XIcon,
      href: "https://x.com/GKFMadurai?t=-aEe0_Rtm2Q2uDvuGwPOVA&s=09",
      label: "X (Twitter)",
      color: "from-gray-800 to-black",
      isCustom: true,
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/gkfmadurai?igsh=MW1leG96OWRibDkyOQ==",
      label: "Instagram",
      color: "from-pink-500 to-purple-600",
      isCustom: false,
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@GraceKennettFoundation",
      label: "YouTube",
      color: "from-red-500 to-red-600",
      isCustom: false,
    },
  ];

  const worldClocks = [
    { city: "Madurai", timezone: "Asia/Kolkata", offset: "+05:30" },
    { city: "London", timezone: "Europe/London", offset: "+00:00" },
    { city: "New York", timezone: "America/New_York", offset: "-05:00" },
    { city: "Dubai", timezone: "Asia/Dubai", offset: "+04:00" },
  ];

  // Newsletter data - removed dates
  const basePath = import.meta.env.BASE_URL || "/";

  const newsletters = [
    {
      title: "Volume 1",
      file: "newsletters/volume-1.pdf",
    },
    {
      title: "Volume 2",
      file: "newsletters/volume-2.pdf",
    },
    {
      title: "Volume 3",
      file: "newsletters/volume-3.pdf",
    },
    {
      title: "Volume 4",
      file: "newsletters/volume-4.pdf",
    },
    {
      title: "Volume 5",
      file: "newsletters/volume-5.pdf",
    },
    {
      title: "Volume 6",
      file: "newsletters/volume-6.pdf",
    },
    {
      title: "Volume 7",
      file: "newsletters/volume-7.pdf",
    },
    {
      title: "Volume 8",
      file: "newsletters/volume-8.pdf",
    },
    {
      title: "Volume 9",
      file: "newsletters/volume-9.pdf",
    },
    {
      title: "Volume 10",
      file: "newsletters/volume-10.pdf",
    },
    {
      title: "Volume 11",
      file: "newsletters/volume-11.pdf",
    },
    {
      title: "Volume 12",
      file: "newsletters/volume-12.pdf",
    },
    {
      title: "Volume 13",
      file: "newsletters/volume-13.pdf",
    },
    {
      title: "Volume 14",
      file: "newsletters/volume-14.pdf",
    },
    {
      title: "Volume 15",
      file: "newsletters/volume-15.pdf",
    },
    {
      title: "Volume 16",
      file: "newsletters/volume-16.pdf",
    },
    {
      title: "Volume 17",
      file: "newsletters/volume17.pdf",
    },
    {
      title: "Volume 18",
      file: "newsletters/Newsletter-volume-18.pdf",
    },
    {
      title: "Volume 19",
      file: "newsletters/News-letter-vol-19-F.pdf",
    },
    {
      title: "Volume 21",
      file: "newsletters/volume21.pdf",
    },
    {
      title: "Volume 22",
      file: "newsletters/volume22.pdf",
    },
  ];

  const getTimeForTimezone = (timezone: string) => {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: timezone,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(currentTime);
  };

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const generateCalendar = () => {
    const daysInMonth = getDaysInMonth(selectedDate);
    const firstDay = getFirstDayOfMonth(selectedDate);
    const days = [];

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-1"></div>);
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isToday =
        day === currentTime.getDate() &&
        selectedDate.getMonth() === currentTime.getMonth() &&
        selectedDate.getFullYear() === currentTime.getFullYear();

      days.push(
        <motion.div
          key={day}
          className={`p-1 text-center text-xs cursor-pointer rounded-lg transition-all duration-200 ${
            isToday
              ? "bg-gradient-to-r from-orange-500 to-red-500 text-white"
              : "text-gray-300 hover:bg-white/10 hover:text-white"
          }`}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {day}
        </motion.div>,
      );
    }

    return days;
  };

  const getAssetUrl = (file: string) => {
    const normalizedBase = basePath.endsWith("/")
      ? basePath.slice(0, -1)
      : basePath;
    const normalizedFile = file.startsWith("/") ? file.slice(1) : file;
    return `${normalizedBase}/${normalizedFile}`;
  };

  const handleNewsletterOpen = (file: string) => {
    const url = getAssetUrl(file);
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* Compact Top Section - Calendar, Clock & Newsletter */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {/* Compact Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Calendar className="w-5 h-5 text-orange-400" />
              <h3 className="text-white">Calendar</h3>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <motion.button
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() - 1,
                      ),
                    )
                  }
                  className="text-white hover:text-orange-400 transition-colors p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Previous month"
                >
                  ‹
                </motion.button>
                <h4 className="text-sm text-white">
                  {selectedDate.toLocaleDateString("en-US", {
                    month: "long",
                    year: "numeric",
                  })}
                </h4>
                <motion.button
                  onClick={() =>
                    setSelectedDate(
                      new Date(
                        selectedDate.getFullYear(),
                        selectedDate.getMonth() + 1,
                      ),
                    )
                  }
                  className="text-white hover:text-orange-400 transition-colors p-1"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label="Next month"
                >
                  ›
                </motion.button>
              </div>

              <div className="grid grid-cols-7 gap-0.5 mb-1">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                  (day) => (
                    <div
                      key={day}
                      className="p-1 text-center text-xs text-gray-400"
                    >
                      {day.substring(0, 1)}
                    </div>
                  ),
                )}
              </div>

              <div className="grid grid-cols-7 gap-0.5">
                {generateCalendar()}
              </div>
            </div>
          </motion.div>

          {/* Compact World Clock */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20"
          >
            <div className="flex items-center space-x-2 mb-4">
              <Watch className="w-5 h-5 text-orange-400" />
              <h3 className="text-white">World Clock</h3>
            </div>

            <div className="space-y-2">
              {worldClocks.map((clock, index) => (
                <motion.div
                  key={clock.city}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-2 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div>
                    <h4 className="text-white text-sm">{clock.city}</h4>
                    <p className="text-gray-400 text-xs">{clock.offset}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-orange-400 font-mono text-sm">
                      {getTimeForTimezone(clock.timezone)}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Prominent Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-orange-500/20 via-red-500/20 to-pink-500/20 backdrop-blur-xl rounded-2xl p-4 border border-orange-500/30 shadow-xl"
          >
            <div className="flex items-center space-x-2 mb-4">
              <FileText className="w-5 h-5 text-orange-400" />
              <h3 className="text-white">Whitecoat - Newsletters</h3>
            </div>

            <p className="text-gray-300 text-sm mb-4">
              Stay updated with our latest news, stories, and community impact
              through our newsletter archives.
            </p>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full bg-gradient-to-r from-orange-500 to-red-500 border-0 text-white hover:from-orange-600 hover:to-red-600 hover:text-white flex items-center justify-between shadow-lg"
                >
                  <div className="flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    <span>Browse All Volumes</span>
                  </div>
                  <ChevronDown className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-72 max-h-96 overflow-y-auto bg-gray-900 border-gray-700"
              >
                {newsletters.map((newsletter, index) => (
                  <DropdownMenuItem
                    key={index}
                    onClick={() => handleNewsletterOpen(newsletter.file)}
                    className="flex items-center justify-between p-3 cursor-pointer hover:bg-orange-500/20 text-gray-200 focus:bg-orange-500/20 focus:text-white"
                  >
                    <div className="flex items-center gap-3">
                      <FileText className="w-4 h-4 text-orange-400" />
                      <p className="text-sm">{newsletter.title}</p>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <motion.div
              className="mt-4 p-3 bg-white/10 rounded-lg border border-white/20"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <p className="text-xs text-gray-300 text-center">
                📰 {newsletters.length} volumes available
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="flex items-center space-x-4 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-lg bg-white"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8 }}
              >
                <img
                  src={logo3M}
                  alt="Logo"
                  className="w-7 h-7 object-contain"
                />
              </motion.div>

              <div>
                <h3 className="text-xl bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Grace Kennett Foundation
                </h3>
                <p className="text-sm bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent">
                  Hospital & Healthcare
                </p>
              </div>
            </motion.div>
            <p className="text-gray-300 text-sm mb-6 leading-relaxed">
              Dedicated to providing comprehensive healthcare and community
              services with compassion, excellence, and hope for all. Building
              healthier communities through innovative care.
            </p>

            {/* Enhanced Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center hover:shadow-lg transition-all duration-300 group relative overflow-hidden`}
                    aria-label={social.label}
                    whileHover={{
                      scale: 1.1,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {social.isCustom ? (
                      <Icon />
                    ) : (
                      <Icon className="w-5 h-5 text-white relative z-10" />
                    )}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links & Services Combined */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            {/* Quick Links */}
            <div>
              <h4 className="text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <motion.li key={link.name}>
                    <motion.a
                      href={link.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span className="w-0 h-0.5 bg-orange-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Our Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <motion.li key={service.name}>
                    <motion.a
                      href={service.href}
                      className="text-gray-300 hover:text-orange-400 transition-all duration-300 text-sm flex items-center group"
                      whileHover={{ x: 5 }}
                    >
                      <motion.span className="w-0 h-0.5 bg-orange-400 mr-0 group-hover:w-4 group-hover:mr-2 transition-all duration-300" />
                      {service.name}
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Contact Info
            </h4>
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  text1: "8, Kennett Road",
                  text2: "Madurai, Tamil Nadu, India - 625016",
                },
                {
                  icon: Phone,
                  text1: "+91 4522601767",
                  text2: "+91 9585440401",
                },
                { icon: Mail, text1: "info@gracekennett.org", text2: null },
                {
                  icon: Clock,
                  text1: "Emergency: 24/7",
                  text2: "OPD: 8 AM - 8 PM",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl flex items-center justify-center mt-0.5 flex-shrink-0">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">{item.text1}</p>
                    {item.text2 && (
                      <p className="text-gray-300 text-sm">{item.text2}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Current Local Time Display */}
            <motion.div
              className="mt-6 p-3 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-xl border border-orange-500/30"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="flex items-center justify-between">
                <span className="text-white text-sm">Local Time</span>
                <span className="text-orange-400 font-mono">
                  {currentTime.toLocaleTimeString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                    hour12: true,
                  })}
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-gray-700/50" />
        <div className="mt-4 text-center">
          <VisitCounter />
        </div>

        {/* Bottom Section */}
        <motion.div
          className="flex flex-col lg:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center lg:text-left">
            <p className="text-gray-400 text-sm mb-2">
              © 2025 Grace Kennett Foundation. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs">
              A registered healthcare institution serving the community with
              excellence since inception.
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-6">
            {/* Privacy Policy and Terms Links */}
            <div className="flex items-center space-x-4 text-gray-400 text-sm">
              <a
                href="/privacy-policy"
                className="hover:text-orange-400 transition-colors"
              >
                Privacy Policy
              </a>
              <span>|</span>
              <a
                href="/termsconditions"
                className="hover:text-orange-400 transition-colors"
              >
                Terms & Conditions
              </a>
            </div>

            <motion.div
              className="flex items-center space-x-2 text-gray-400 text-xs"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="w-4 h-4" />
              <span>Serving Tamil Nadu & Beyond</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Emergency Notice */}
        <motion.div
          className="mt-8 p-4 md:p-6 bg-gradient-to-r from-red-900/40 via-red-800/40 to-red-900/40 border border-red-700/30 rounded-2xl backdrop-blur-sm relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-pink-500/10"
            animate={{ opacity: [0.1, 0.3, 0.1] }}
            transition={{ duration: 3, repeat: Infinity }}
          />
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-3 relative z-10">
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Phone className="w-6 h-6 text-red-400" />
            </motion.div>
            <p className="text-red-100 text-center sm:text-left text-sm md:text-base">
              For Medical Emergency: Call +91 4522601767 - Available 24/7
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
