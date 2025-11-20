import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";

const Music = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative min-h-[600px] flex items-center">
          <div className="absolute inset-0 bg-gradient-to-b from-background/50 to-background z-10" />
          <OptimizedImage
            src="https://images.squarespace-cdn.com/content/v1/63897fd9091d716b97aff997/cb3f6498-bb5d-4b17-89ba-8cd083d9192d/2019-11-06.jpg"
            alt="Music production studio setup"
            className="absolute inset-0 w-full h-full object-cover"
            priority
          />
          
          <div className="container mx-auto px-6 relative z-20">
            <div className="max-w-3xl">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
                The Composer and Producer with Many Faces
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                One of Stephen's strengths is his vast experience across many styles and projects, which allows him to create unique, creative tracks, whether as a media composer, producer or artist. He has worked in media composition, creating film scores and library music, produced demo tracks for sample library developers, and been active in a number of rock/pop bands as a songwriter, guitarist and singer. This has given him a wide appreciation of music and a unique combination of sounds applied to any project.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a href="https://soundcloud.com/stephen-oconnell-composer" target="_blank" rel="noopener noreferrer">
                  Visit SoundCloud
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Film Scores Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Film Scores</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Stephen is passionate about providing the best story experience in film by supporting it with emotive music that enhances the visuals. Whether it's a short film, TV episode or feature film, Stephen will make the most of every cue, bringing his unique sonic signature to every score.
            </p>
            <p className="text-lg font-semibold mb-8 text-foreground italic">
              Check out this playlist of featured film score examples!
            </p>
            
            {/* YouTube Embed */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MdYlHlW_9MY"
                title="Film Score Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>

        {/* Media Composer Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-4xl font-bold mb-6 text-foreground">Media Composer</h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              Whether it's a soft, alluring and mesmerising sound, or an intense, dramatic and epic score, Stephen has a wide range as a composer and producer to create some of the most emotive and captivating music for media. Film score, library production music, adaptive game music or trailers, no matter the purpose, Stephen has a sound just perfect for your score.
            </p>
            
            {/* YouTube Embed */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/yNq7C24sZlA"
                title="Film Score Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <br></br>
            {/* YouTube Embed */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/MMhfE4JsK8w"
                title="Film Score Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
            <br></br>
            {/* YouTube Embed */}
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-muted">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/nS7IqY9H62M"
                title="Film Score Playlist"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Music;