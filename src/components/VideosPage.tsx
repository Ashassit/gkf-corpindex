import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Video, Play, Clock, Eye, Maximize2 } from "lucide-react";

interface VideoItem {
  id: number;
  videoUrl: string;        // embed url, e.g. "https://www.youtube.com/embed/VIDEO_ID"
  youtubeId: string;       // the raw YouTube video ID
  title: string;
  description: string;
  durationFormatted: string; // e.g. "10:30"
  views: string;           // stringed number, e.g: "1,234"
  date: string;
  category: string;
}

const initialVideos: Omit<VideoItem, "title"|"description"|"durationFormatted"|"views">[] = [
  {
    id: 6,
    youtubeId: "Iyk1Ikk7Ldw",
    videoUrl: "https://www.youtube.com/embed/Iyk1Ikk7Ldw",
    date: "Dec 19, 2022",
    category: "Documentary",
  },{
    id: 5,
    youtubeId: "LorNLN9n39I",
    videoUrl:"https://www.youtube.com/embed/LorNLN9n39I",
    date: "Nov 20, 2020",
    category: "Documentary",
  },
  {
    id:4,
    youtubeId:"QJAqabvGjck",
    videoUrl:"https://www.youtube.com/watch?v=QJAqabvGjck",
    date:"Oct 10, 2025",
    category:"Presentation"
    }
  // … add more
];

export function VideosPage() {
  const [videos, setVideos] = useState<VideoItem[]>([]);
  const [playingVideoId, setPlayingVideoId] = useState<number | null>(null);

  useEffect(() => {
    async function fetchMetadata() {
      const API_KEY = "AIzaSyBtkLlirNHFjZGTzzXggzE6yYLQlfVwMo0";
      const ids = initialVideos.map(v => v.youtubeId).join(",");
      const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&id=${ids}&key=${API_KEY}`;
      const resp = await fetch(url);
      const data = await resp.json();
      const mapped: VideoItem[] = initialVideos.map(v0 => {
        const item = data.items.find((i: any) => i.id === v0.youtubeId);
        const title = item.snippet.title;
        const description = item.snippet.description;
        const views = parseInt(item.statistics.viewCount).toLocaleString();
        // parse duration e.g. "PT10M30S" to "10:30"
        const dur = item.contentDetails.duration;
        const match = dur.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
        let hours=0, minutes=0, seconds=0;  
        if(match) {
          if(match[1]) hours = parseInt(match[1].slice(0,-1));
          if(match[2]) minutes = parseInt(match[2].slice(0,-1));
          if(match[3]) seconds = parseInt(match[3].slice(0,-1));
        }
        const durationFormatted =
          (hours > 0 ? hours + ":" : "") +
          String(minutes).padStart(hours>0?2:1, "0") + ":" +
          String(seconds).padStart(2, "0");
        return {
          ...v0,
          title,
          description,
          views,
          durationFormatted,
        };
      });
      setVideos(mapped);
    }

    fetchMetadata().catch(console.error);
  }, []);

  const handleFullscreen = (url: string) => {
    window.open(url + "?autoplay=1", "_blank", "fullscreen=yes");
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl">
          <Video className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="site-heading">Video Library</h1>
          <p className="text-muted-foreground">
            Watch our events, programs, and community impact stories
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {videos.map((video) => (
          <Card key={video.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="relative aspect-video overflow-hidden bg-black">
              <iframe
                src={playingVideoId === video.id ? `${video.videoUrl}?autoplay=1` : video.videoUrl}
                className="w-full h-full pointer-events-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>

              {playingVideoId !== video.id && (
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="lg" className="rounded-full w-16 h-16 p-0" onClick={() => setPlayingVideoId(video.id)}>
                    <Play className="w-6 h-6 ml-1" />
                  </Button>
                </div>
              )}

              <div className="absolute bottom-2 right-2 bg-black/80 px-2 py-1 rounded text-xs text-white flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {video.durationFormatted}
              </div>

              <button
                className="absolute top-2 right-2 text-white bg-black/60 p-1 rounded-full hover:bg-black/80"
                onClick={() => handleFullscreen(video.videoUrl)}
              >
                <Maximize2 className="w-4 h-4" />
              </button>
            </div>

            <div className="p-4 space-y-2">
              <div className="flex items-start justify-between gap-2">
                <h3 className="line-clamp-2">{video.title}</h3>
                <Badge variant="secondary" className="flex-shrink-0">{video.category}</Badge>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">{video.description}</p>

              <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3" />
                  {video.views} views
                </div>
                <span>•</span>
                <span>{video.date}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
