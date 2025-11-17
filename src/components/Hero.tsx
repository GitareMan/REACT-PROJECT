import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-hero-start to-hero-end pt-24 pb-16 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-16">
          <div className="space-y-8 animate-fade-in">
            <p className="text-sm font-medium text-muted-foreground tracking-wider uppercase">
              Latest Pianobook Release
            </p>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              PROJECT AMALGAM: ANALOGUE - A NEW FREE LIBRARY!
            </h1>
            
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-base font-semibold rounded-full transition-all hover:scale-105"
            >
              DOWNLOAD FOR FREE
            </Button>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-video rounded-lg overflow-hidden bg-secondary border border-border shadow-2xl">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/4JqhlATilDs"
                title="Project Amalgam Demo"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
