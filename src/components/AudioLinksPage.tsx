import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Headphones, Play, Download, ExternalLink } from "lucide-react";

interface AudioLink {
  id: number;
  title: string;
  speaker: string;
  date: string;
  duration: string;
  category: string;
  description: string;
}

const audioLinks: AudioLink[] = [
 
];

export function AudioLinksPage() {
  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <div className="p-3 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl">
          <Headphones className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1>Audio Resources</h1>
          <p className="text-muted-foreground">Listen to our latest talks, workshops, and community stories</p>
        </div>
      </div>

      <div className="grid gap-4">
        {audioLinks.map((audio) => (
          <Card key={audio.id} className="p-6 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row md:items-center gap-4">
              <div className="flex-shrink-0">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center">
                  <Play className="w-8 h-8 text-purple-600" />
                </div>
              </div>
              
              <div className="flex-1 space-y-2">
                <div className="flex flex-wrap items-center gap-2">
                  <h3>{audio.title}</h3>
                  <Badge variant="secondary">{audio.category}</Badge>
                </div>
                <p className="text-muted-foreground">{audio.description}</p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span>{audio.speaker}</span>
                  <span>•</span>
                  <span>{audio.date}</span>
                  <span>•</span>
                  <span>{audio.duration}</span>
                </div>
              </div>

              <div className="flex gap-2">
                <Button variant="default" size="sm">
                  <Play className="w-4 h-4 mr-2" />
                  Play
                </Button>
                <Button variant="outline" size="sm">
                  <Download className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm">
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
