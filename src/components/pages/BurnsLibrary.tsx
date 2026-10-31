// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Search, Filter, BookOpen, Video, Download, 
//   FileText, Play, Clock, Users, Star, Activity, Heart, Shield
// } from 'lucide-react';
// import { Button } from '../ui/button';
// import { Input } from '../ui/input';
// import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
// import { ImageWithFallback } from '../figma/ImageWithFallback';

// const categories = ["All", "Articles", "Videos", "Case Studies", "E-Books", "Guidelines"];

// const resources = [
//   {
//     id: 1,
//     title: "Advanced Burn Care Protocols",
//     type: "Article",
//     author: "Dr. Michael Chen",
//     date: "2024-01-15",
//     category: "Articles",
//     description: "Comprehensive guide to modern burn treatment protocols and best practices in acute care management.",
//     downloadUrl: "#",
//     rating: 4.8,
//     downloads: 1250
//   },
//   {
//     id: 2,
//     title: "Pediatric Burns Management",
//     type: "Video",
//     author: "Dr. Sarah Williams",
//     date: "2024-01-10",
//     category: "Videos",
//     description: "Essential techniques and considerations for treating burn injuries in children and adolescents.",
//     thumbnail: "https://images.unsplash.com/photo-1723031840495-57a7154b191b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGhvc3BpdGFsJTIwY2FyZSUyMG1lZGljYWx8ZW58MXx8fHwxNzU5NTU0MjY2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     duration: "25:30",
//     views: 2850
//   },
//   {
//     id: 3,
//     title: "Burn Prevention in Communities",
//     type: "E-Book",
//     author: "Grace Kennett Foundation",
//     date: "2023-12-20",
//     category: "E-Books",
//     description: "Community education resource focusing on burn prevention strategies and safety measures.",
//     coverImage: "https://images.unsplash.com/photo-1644809649466-348b9234068b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXJucyUyMHRyZWF0bWVudCUyMG1lZGljYWwlMjBjZW50ZXJ8ZW58MXx8fHwxNzU5NTU0MjcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     pages: 85,
//     downloads: 3200
//   },
//   {
//     id: 4,
//     title: "Psychological Support for Burn Patients",
//     type: "Case Study",
//     author: "Dr. Lisa Rodriguez",
//     date: "2024-01-05",
//     category: "Case Studies",
//     description: "Detailed analysis of psychological interventions and their effectiveness in burn recovery.",
//     downloadUrl: "#",
//     rating: 4.9,
//     citations: 45
//   },
//   {
//     id: 5,
//     title: "Wound Care and Dressing Techniques",
//     type: "Video",
//     author: "Nursing Team",
//     date: "2023-12-15",
//     category: "Videos",
//     description: "Step-by-step demonstration of proper wound care and dressing techniques for burn injuries.",
//     thumbnail: "https://images.unsplash.com/photo-1587557983735-f05198060b52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMGRvY3RvcnMlMjBudXJzZXMlMjBob3NwaXRhbHxlbnwxfHx8fDE3NTk1NTQyNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
//     duration: "18:45",
//     views: 4200
//   },
//   {
//     id: 6,
//     title: "Rehabilitation and Recovery Guidelines",
//     type: "Article",
//     author: "Dr. James Kumar",
//     date: "2023-12-01",
//     category: "Guidelines",
//     description: "Evidence-based guidelines for post-burn rehabilitation and long-term recovery planning.",
//     downloadUrl: "#",
//     rating: 4.7,
//     downloads: 890
//   }
// ];

// export function BurnsLibrary() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [filteredResources, setFilteredResources] = useState(resources);

//   const handleSearch = (value: string) => {
//     setSearchTerm(value);
//     filterResources(value, selectedCategory);
//   };

//   const handleCategoryChange = (category: string) => {
//     setSelectedCategory(category);
//     filterResources(searchTerm, category);
//   };

//   const filterResources = (search: string, category: string) => {
//     let filtered = resources;

//     if (category !== "All") {
//       filtered = filtered.filter(resource => resource.category === category);
//     }

//     if (search) {
//       filtered = filtered.filter(resource =>
//         resource.title.toLowerCase().includes(search.toLowerCase()) ||
//         resource.author.toLowerCase().includes(search.toLowerCase()) ||
//         resource.description.toLowerCase().includes(search.toLowerCase())
//       );
//     }

//     setFilteredResources(filtered);
//   };

//   const getResourceIcon = (type: string) => {
//     switch (type) {
//       case "Video": return Video;
//       case "E-Book": return BookOpen;
//       case "Case Study": return FileText;
//       default: return FileText;
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative py-20 bg-gradient-to-br from-orange-50 to-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center max-w-4xl mx-auto"
//           >
//             <h1 className="text-4xl md:text-6xl font-bold mb-6">
//               <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
//                 Knowledge to Empower
//               </span>
//             </h1>
//             <p className="text-xl text-gray-600 mb-8">
//               Extensive resources on burn care, prevention, and treatment for medical professionals and the community
//             </p>
//             <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg inline-block">
//               <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//                 <div>
//                   <div className="text-2xl font-bold text-orange-600">50+</div>
//                   <div className="text-sm text-gray-600">Research Articles</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-orange-600">25+</div>
//                   <div className="text-sm text-gray-600">Educational Videos</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-orange-600">15+</div>
//                   <div className="text-sm text-gray-600">E-Books</div>
//                 </div>
//                 <div>
//                   <div className="text-2xl font-bold text-orange-600">10K+</div>
//                   <div className="text-sm text-gray-600">Downloads</div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Search & Filter Section */}
//       <section className="py-12 bg-white border-b">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="max-w-4xl mx-auto"
//           >
//             <div className="flex flex-col md:flex-row gap-4 items-center">
//               <div className="flex-1 relative">
//                 <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
//                 <Input
//                   placeholder="Search articles, videos, case studies..."
//                   value={searchTerm}
//                   onChange={(e) => handleSearch(e.target.value)}
//                   className="pl-10 h-12"
//                 />
//               </div>
              
//               <div className="flex items-center space-x-2">
//                 <Filter className="w-5 h-5 text-gray-500" />
//                 <Select value={selectedCategory} onValueChange={handleCategoryChange}>
//                   <SelectTrigger className="w-48 h-12">
//                     <SelectValue placeholder="Filter by category" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {categories.map((category) => (
//                       <SelectItem key={category} value={category}>
//                         {category}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//             </div>

//             <div className="mt-6 text-center text-gray-600">
//               Showing {filteredResources.length} of {resources.length} resources
//               {selectedCategory !== "All" && ` in ${selectedCategory}`}
//             </div>
//           </motion.div>
//         </div>
//       </section>

//       {/* Resources Grid */}
//       <section className="py-16 bg-gray-50">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredResources.map((resource, index) => {
//               const IconComponent = getResourceIcon(resource.type);
              
//               return (
//                 <motion.div
//                   key={resource.id}
//                   initial={{ opacity: 0, y: 30 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.6, delay: index * 0.1 }}
//                   whileHover={{ y: -5 }}
//                 >
//                   <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
//                     {/* Media Section */}
//                     {resource.type === "Video" && resource.thumbnail && (
//                       <div className="relative h-48 bg-gray-200">
//                         <ImageWithFallback
//                           src={resource.thumbnail}
//                           alt={resource.title}
//                           className="w-full h-full object-cover"
//                         />
//                         <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
//                           <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                             <Play className="w-8 h-8 text-white ml-1" />
//                           </div>
//                         </div>
//                         <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
//                           <Clock className="w-3 h-3 inline mr-1" />
//                           {resource.duration}
//                         </div>
//                       </div>
//                     )}

//                     {resource.type === "E-Book" && resource.coverImage && (
//                       <div className="h-48 bg-gray-200 flex items-center justify-center p-4">
//                         <ImageWithFallback
//                           src={resource.coverImage}
//                           alt={resource.title}
//                           className="h-full w-auto object-cover rounded shadow-lg"
//                         />
//                       </div>
//                     )}

//                     <CardHeader className="pb-3">
//                       <div className="flex items-start justify-between">
//                         <div className="flex items-center space-x-2">
//                           <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
//                             <IconComponent className="w-4 h-4 text-white" />
//                           </div>
//                           <span className="text-xs font-medium text-orange-600 bg-orange-50 px-2 py-1 rounded">
//                             {resource.type}
//                           </span>
//                         </div>
//                         {resource.rating && (
//                           <div className="flex items-center space-x-1 text-xs text-gray-500">
//                             <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
//                             <span>{resource.rating}</span>
//                           </div>
//                         )}
//                       </div>
//                       <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
//                     </CardHeader>

//                     <CardContent className="pt-0">
//                       <p className="text-gray-600 text-sm mb-4 line-clamp-3">
//                         {resource.description}
//                       </p>

//                       <div className="space-y-2 text-xs text-gray-500 mb-4">
//                         <div>By {resource.author}</div>
//                         <div>Published: {new Date(resource.date).toLocaleDateString()}</div>
                        
//                         {resource.downloads && (
//                           <div className="flex items-center space-x-1">
//                             <Download className="w-3 h-3" />
//                             <span>{resource.downloads.toLocaleString()} downloads</span>
//                           </div>
//                         )}
                        
//                         {resource.views && (
//                           <div className="flex items-center space-x-1">
//                             <Users className="w-3 h-3" />
//                             <span>{resource.views.toLocaleString()} views</span>
//                           </div>
//                         )}
                        
//                         {resource.pages && (
//                           <div>{resource.pages} pages</div>
//                         )}
                        
//                         {resource.citations && (
//                           <div>{resource.citations} citations</div>
//                         )}
//                       </div>

//                       <div className="flex space-x-2">
//                         {resource.type === "Video" ? (
//                           <Button size="sm" className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
//                             <Play className="w-4 h-4 mr-1" />
//                             Watch
//                           </Button>
//                         ) : (
//                           <Button size="sm" className="flex-1 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700">
//                             <Download className="w-4 h-4 mr-1" />
//                             Download
//                           </Button>
//                         )}
//                         <Button size="sm" variant="outline" className="border-orange-500 text-orange-600 hover:bg-orange-500 hover:text-white">
//                           Details
//                         </Button>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </motion.div>
//               );
//             })}
//           </div>

//           {filteredResources.length === 0 && (
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }} viewport={{ once: true }}
//               className="text-center py-12"
//             >
//               <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
//               <h3 className="text-lg font-semibold text-gray-600 mb-2">No resources found</h3>
//               <p className="text-gray-500">Try adjusting your search terms or filters</p>
//             </motion.div>
//           )}
//         </div>
//       </section>

//       {/* Featured Collections */}
//       <section className="py-16 bg-white">
//         <div className="container mx-auto px-4">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-bold mb-4">Featured Collections</h2>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Curated resource collections covering essential topics in burn care and prevention.
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             {[
//               {
//                 title: "Emergency Burn Care",
//                 description: "Essential resources for immediate burn treatment and emergency protocols",
//                 resourceCount: 15,
//                 icon: Activity,
//                 color: "from-red-500 to-red-600"
//               },
//               {
//                 title: "Pediatric Burns",
//                 description: "Specialized care guidelines and resources for treating burns in children",
//                 resourceCount: 12,
//                 icon: Heart,
//                 color: "from-pink-500 to-pink-600"
//               },
//               {
//                 title: "Prevention & Education",
//                 description: "Community education materials and burn prevention strategies",
//                 resourceCount: 20,
//                 icon: Shield,
//                 color: "from-green-500 to-green-600"
//               }
//             ].map((collection, index) => (
//               <motion.div
//                 key={collection.title}
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer">
//                   <CardContent className="p-6 text-center">
//                     <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${collection.color} flex items-center justify-center`}>
//                       <collection.icon className="w-8 h-8 text-white" />
//                     </div>
//                     <h3 className="text-lg font-semibold mb-2">{collection.title}</h3>
//                     <p className="text-gray-600 text-sm mb-4">{collection.description}</p>
//                     <div className="text-orange-600 font-medium text-sm">
//                       {collection.resourceCount} resources
//                     </div>
//                   </CardContent>
//                 </Card>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="py-16 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//           >
//             <h2 className="text-3xl font-bold mb-6">Contribute to Our Library</h2>
//             <p className="text-xl mb-8 max-w-2xl mx-auto text-orange-100">
//               Share your knowledge and research to help improve burn care worldwide. Submit your articles, case studies, or educational materials.
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Button 
//                 size="lg" 
//                 variant="outline" 
//                 className="border-white text-white hover:bg-white hover:text-orange-600"
//               >
//                 Submit Resource
//               </Button>
//               <Button 
//                 size="lg" 
//                 className="bg-white text-orange-600 hover:bg-gray-100"
//               >
//                 Contact Library Team
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { motion } from "framer-motion";

export function BurnsLibrary() {
  return (
    <div className="flex items-center justify-center h-screen bg-white overflow-hidden p-0 m-0">
      <motion.div
        className="whitespace-nowrap text-4xl md:text-6xl font-bold text-red-600"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 8,
          ease: "linear",
        }}
      >
        🚧 Under Production 🚧
      </motion.div>
    </div>
  );
}
