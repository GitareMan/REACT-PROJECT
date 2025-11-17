import { OptimizedImage } from "@/components/OptimizedImage";

export const ListenSection = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold">Listen up.</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore a collection of sample instruments, sound design projects, and musical compositions. 
              Each creation is crafted with attention to detail and a passion for sonic exploration.
            </p>
            <div className="pt-4">
              <iframe
                className="w-full rounded-lg"
                height="166"
                scrolling="no"
                frameBorder="no"
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/YOUR_TRACK_ID&color=%23ef4444&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
              />
            </div>
          </div>

          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <OptimizedImage
              src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop"
              alt="Music production workspace"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              wrapperClassName="aspect-[4/3] rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
