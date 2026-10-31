import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { AudioLinksPage } from "../AudioLinksPage";
import { VideosPage } from "../VideosPage";
import GalleryPage from "../GalleryPage";
import { Headphones, Video, Images } from "lucide-react";

export default function MultiMedia() {
  return (
    <div className="min-h-screen pt-20 bg-[#080808]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 md:py-12">
        {/* Navigation Tabs */}
        <Tabs defaultValue="gallery" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 gap-2 sm:gap-3 mb-6 sm:mb-8 p-1 sm:p-1.5 bg-[#111111]">
            <TabsTrigger
              value="audio"
              className="
                flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-3 py-2.5 sm:py-2
                transition-colors duration-150
                hover:bg-white/[0.07]
                data-[state=active]:bg-orange-500
                data-[state=active]:text-white
                data-[state=active]:shadow-md
                text-xs sm:text-sm text-white/70
              "
            >
              <Headphones className="w-4 h-4 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Audio Links</span>
              <span className="sm:hidden">Audio</span>
            </TabsTrigger>

            <TabsTrigger
              value="videos"
              className="
                flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-3 py-2.5 sm:py-2
                transition-colors duration-150
                hover:bg-white/[0.07]
                data-[state=active]:bg-orange-500
                data-[state=active]:text-white
                data-[state=active]:shadow-md
                text-xs sm:text-sm text-white/70
              "
            >
              <Video className="w-4 h-4 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Videos</span>
              <span className="sm:hidden">Videos</span>
            </TabsTrigger>

            <TabsTrigger
              value="gallery"
              className="
                flex items-center justify-center gap-1.5 sm:gap-2 rounded-lg px-2 sm:px-3 py-2.5 sm:py-2
                transition-colors duration-150
                hover:bg-white/[0.07]
                data-[state=active]:bg-orange-500
                data-[state=active]:text-white
                data-[state=active]:shadow-md
                text-xs sm:text-sm text-white/70
              "
            >
              <Images className="w-4 h-4 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Gallery</span>
              <span className="sm:hidden">Gallery</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="audio" className="mt-4 sm:mt-6">
            <AudioLinksPage />
          </TabsContent>

          <TabsContent value="videos" className="mt-4 sm:mt-6">
            <VideosPage />
          </TabsContent>

          <TabsContent value="gallery" className="mt-4 sm:mt-6">
            <GalleryPage />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
