import { Youtube, Instagram, Music } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider">IHOR DROZD</h1>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#music" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              MUSIC
            </a>
            <a href="#instruments" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              SAMPLE INSTRUMENTS
            </a>
            <a href="#cmd-shift-new" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              CMD SHIFT NEW
            </a>
            <a href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              ABOUT
            </a>
            <a href="#blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              BLOG
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Youtube className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
              <Music className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
