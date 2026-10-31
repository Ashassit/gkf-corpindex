import { Heart, Home, Mail, MapPin, Wifi, Wind, Waves, Utensils, ExternalLink, Users, Building2, Globe } from "lucide-react";
import { VolunteerCard } from "../volunteer/VolunteerCard";
import { AccommodationGallery } from "../volunteer/AccommodationGallery";
import { VolunteerGallery } from "../volunteer/VolunteerGallery";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { motion } from "framer-motion";
import volunteers1 from "../../assets/volunteer/volunteers-hunger.webp";
import volunteers2 from "../../assets/volunteer/volunteers-jasne1.webp";
import volunteers3 from "../../assets/volunteer/volunteers-joanne.webp";
import volunteers4 from "../../assets/volunteer/volunteers-nathalie.webp";

import accomodation1 from '../../assets/volunteer/accomodation-room-1.webp';
import accomodation2 from '../../assets/volunteer/accomodation-room-2.webp';
import accomodation3 from '../../assets/volunteer/accomodation-room-3.webp';
import accomodation4 from '../../assets/volunteer/accomodation-room-4.webp';
import accomodation5 from '../../assets/volunteer/accomodation-room-5.webp';

import vol1 from '../../assets/volunteer/volunteering1.webp';
import vol2 from '../../assets/volunteer/volunteering2.webp';
import vol3 from '../../assets/volunteer/volunteering3.webp';
import vol4 from '../../assets/volunteer/volunteering4.webp';
import vol5 from '../../assets/volunteer/volunteering5.webp';
import vol6 from '../../assets/volunteer/volunteering6.webp';

export function Volunteering() {
  const volunteers = [
  { name: "Ms Nathalie Pierre Bes", image: volunteers4 },
  { name: "Ms Joanne Baldwin", image: volunteers3 },
  { name: "Ms Jasne Krooneman", image: volunteers2 },
  { name: "Ms Yvonne Hunger", image: volunteers1 },
  ];

  const amenities = [
    { icon: Wind, label: "Air Conditioned" },
    { icon: Wifi, label: "Wi-Fi" },
    { icon: Waves, label: "Washing Machine" },
    { icon: Home, label: "Microwave" }
  ];

  const accommodationImages = [
    accomodation1,
    accomodation2,
    accomodation3,
    accomodation4,
    accomodation5,
    ];

  const volunteerGalleryImages = [
    vol1,
    vol2,
    vol3,
    vol4,
    vol5,
    vol6
  ];

  return (
    <div className="min-h-screen bg-[#080808] pt-20">



      {/* Volunteers Section - More Creative Layout */}
      <section className="section-container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="site-heading text-primary">Volunteers</h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {volunteers.map((v, index) => (
             <VolunteerCard key={v.name} name={v.name} image={v.image} index={index} />
          ))}
        </div>

        {/* Decorative Divider */}
        <div className="flex items-center justify-center">
          <div className="h-px w-24 bg-gradient-to-r from-transparent to-border"></div>
          <Heart className="w-6 h-6 text-primary" />
          <div className="h-px w-24 bg-gradient-to-l from-transparent to-border"></div>
        </div>
      </section>

      {/* Get Involved Section - Redesigned */}
      <section className="section-container relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[#0d0d0d]"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZjZhMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDE2djRoNHYtNGgtNHptMCA4djRoNHYtNGgtNHptMCA4djRoNHYtNGgtNHptMCA4djRoNHYtNGgtNHptLTggMHY0aDR2LTRoLTR6bTAgOHY0aDR2LTRoLTR6bTAtMTZ2NGg0di00aC00em0wLThWMTZoNHY0aC00em04IDB2NGg0di00aC00em0wLThWOGg0djRoLTR6bS04IDBWOGg0djRoLTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-60"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Badge className="bg-primary text-white mb-4 px-4 py-2">
              Join Our Mission
            </Badge>
            <h2 className="mb-4 text-white">Get Involved</h2>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-8">
            {/* Intro Content with Image */}
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 border-2 border-primary/20 bg-[#111111]/80 border border-white/[0.07] backdrop-blur-sm">
                  <p className="mb-4 leading-relaxed text-white/80">
                    We welcome you to be a part of our team, a well-wisher, or a volunteer. You could participate in the Health and Child Care Services of Grace Kennett Foundation.
                  </p>
                  <p className="leading-relaxed text-white/80">
                    Contact us if you wish to participate in saving the lives of the abandoned children, the victims of female infanticide, and in Hospital services like Geriatric Care, Surgical and Medical Intensive Care, and Trauma Care.
                  </p>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <ImageWithFallback
                    src="https://images.unsplash.com/photo-1758599668125-e154250f24bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2b2x1bnRlZXIlMjB0ZWFtJTIwaGVscGluZ3xlbnwxfHx8fDE3NjAwMDM2OTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Volunteer team working together"
                    className="w-full h-[400px] lg:h-[300px] object-cover"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Bottom Stats */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                          <Heart className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-white/80 text-xs">Child Care</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                          <Users className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-white/80 text-xs">Medical Care</p>
                      </div>
                      <div className="text-center">
                        <div className="w-10 h-10 rounded-full bg-primary/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-2">
                          <Globe className="w-5 h-5 text-primary" />
                        </div>
                        <p className="text-white/80 text-xs">Community</p>
                      </div>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/20 backdrop-blur-sm transform rotate-45 translate-x-12 -translate-y-12"></div>
                </div>
              </motion.div>
            </div>

            {/* Full Width Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary/30">
                <div className="flex items-start gap-6 max-w-4xl">
                  <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-white">Convenient Location</h3>
                    <p className="text-white/80 text-lg">
                      We are close to the airport. It takes 20 minutes to reach us.
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="p-8 bg-[#111111] border border-white/[0.07]">
                <div className="flex items-start gap-6 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center flex-shrink-0">
                    <Building2 className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-3 text-white">Accommodation Options</h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-3 gap-4 pl-0 md:pl-22">
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    <p className="text-white/80">Accommodation is available for volunteers</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    <p className="text-white/80">Hotel bookings and transportation arrangements</p>
                  </div>
                  <div className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.03] border border-primary/10 hover:border-primary/30 transition-colors">
                    <div className="w-3 h-3 rounded-full bg-primary mt-1.5 flex-shrink-0"></div>
                    <p className="text-white/80">Stay with a local host family option</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="p-10 bg-gradient-to-br from-secondary to-secondary/90 text-white border-0 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

                <div className="relative z-10 max-w-4xl mx-auto text-center">
                  <div className="w-20 h-20 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
                    <Heart className="w-10 h-10 text-primary" />
                  </div>

                  <h3 className="mb-4 text-white">Ready to Make a Difference?</h3>
                  <p className="text-white/90 mb-8 text-lg">
                    For Weekend Tours and further details, please contact us:
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                    <Button className="bg-primary hover:bg-primary/90 text-white group px-8 py-6">
                      <Mail className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                      Contact Us Now
                    </Button>
                    <div className="flex items-center gap-3 text-white/90 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-lg">
                      <Mail className="w-5 h-5" />
                      <span>admin@gkfmaduraistg.wpenginepowered.com</span>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Accommodation Section - Redesigned */}
      <section className="section-container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="bg-secondary text-white mb-4 px-4 py-2">
            Your Stay
          </Badge>
          <h2 className="mb-4 text-white">GKF Volunteer Accommodation</h2>
          <p className="text-white/80 max-w-3xl mx-auto mb-2">
            Cost effective accommodation is available on pre booking. Food is provided from the Eatery, if required.
          </p>
          <p className="text-white/80 max-w-3xl mx-auto">
            Accommodation is air-conditioned. Microwave, washing machine and Wi-Fi facilities are provided.
          </p>
        </motion.div>

        {/* Image Gallery */}
        <div className="mb-12">
          <AccommodationGallery images={accommodationImages} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Amenities */}
          <Card className="p-8 bg-[#111111] border border-white/[0.07] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl"></div>
            <h3 className="mb-8 relative z-10 text-white">Available Amenities</h3>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              {amenities.map((amenity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex flex-col items-center text-center group"
                >
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center mb-3 group-hover:from-primary group-hover:to-primary/80 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/30 transition-all duration-300">
                    <amenity.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-white/80">{amenity.label}</p>
                </motion.div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-white/[0.07] relative z-10">
              <div className="flex items-center gap-3 justify-center bg-white/[0.03] p-4 rounded-lg">
                <Utensils className="w-6 h-6 text-primary flex-shrink-0" />
                <p className="text-center text-white/80">
                  Food is provided from the Eatery if required
                </p>
              </div>
            </div>
          </Card>

          {/* Airbnb Booking */}
          <Card className="p-8 bg-gradient-to-br from-secondary to-secondary/90 text-white border-0 relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-primary/20 backdrop-blur-sm flex items-center justify-center mb-6 mx-auto">
                <ExternalLink className="w-8 h-8 text-primary" />
              </div>

              <h3 className="mb-3 text-white text-center">Book Through Airbnb</h3>
              <p className="text-white/80 mb-8 text-center">
                You can also book our accommodation 'Crown' through the Airbnb link
              </p>

              <div className="space-y-4">
                <Button
                  className="w-full bg-primary hover:bg-primary/90 text-white group py-6"
                  onClick={() => window.open('https://www.airbnb.co.in/rooms/27318036?source_impression_id=p3_1600923439_mk9T53agwxGtarOG', '_blank', 'noopener,noreferrer')}
                >
                  <ExternalLink className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  View Crown on Airbnb
                </Button>

                <div className="grid grid-cols-3 gap-3 pt-4">
                  <div className="text-center">
                    <p className="text-white/80 text-xs mb-1">Rating</p>
                    <p className="text-white">★★★★★</p>
                  </div>
                  <div className="text-center border-l border-r border-white/20">
                    <p className="text-white/80 text-xs mb-1">Reviews</p>
                    <p className="text-white">190+</p>
                  </div>
                  <div className="text-center">
                    <p className="text-white/80 text-xs mb-1">Type</p>
                    <p className="text-white">Entire</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Volunteer Gallery Section - Innovative Design */}
      <section className="section-container relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[#0d0d0d]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >

            <h2 className="mb-4 text-white">Volunteering</h2>
            {/* <p className="text-white/80 max-w-2xl mx-auto">
              ----------------------------------------------------------------------------
            </p> */}
          </motion.div>

          <VolunteerGallery images={volunteerGalleryImages} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-primary/20 rounded-full"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 border-4 border-primary/10 rounded-full"></div>
      </section>

      {/* CTA Section - Final Call to Action */}
      <section className="section-container mx-auto px-4 py-20">
        <Card className="relative overflow-hidden border-0 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/90 to-secondary"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMTZ2NGg0di00aC00em0wIDh2NGg0di00aC00em0wIDh2NGg0di00aC00em0wIDh2NGg0di00aC00em0tOCAwdjRoNHYtNGgtNHptMCA4djRoNHYtNGgtNHptMC0xNnY0aDR2LTRoLTR6bTAtOFYxNmg0djRoLTR6bTggMHY0aDR2LTRoLTR6bTAtOFY4aDR2NGgtNHptLTggMFY4aDR2NGgtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>

          <div className="relative z-10 p-12 md:p-16 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-6">
                <Heart className="w-10 h-10 text-white" />
              </div>

              <h2 className="text-white mb-4">Ready to Make a Difference?</h2>
              <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
                Join us in our mission to provide essential care and support. Contact us today to learn more about volunteering opportunities.
              </p>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button className="bg-[#111111] text-orange-400 border border-orange-500/30 hover:bg-[#111111]/80 px-8 py-6">
                  <Mail className="w-5 h-5 mr-2" />
                  Get in Touch
                </Button>
                <Button variant="outline" className="border-2 border-white text-black hover:bg-white/10 px-8 py-6 backdrop-blur-sm">
                  View Opportunities
                </Button>
              </div>

              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-white/80 mb-2">Have questions?</p>
                <a href="mailto:admin@gkfmaduraistg.wpenginepowered.com" className="text-white hover:text-white/80 transition-colors">
                  admin@gkfmaduraistg.wpenginepowered.com
                </a>
              </div>
            </motion.div>
          </div>
        </Card>
      </section>
    </div>
  );
}
