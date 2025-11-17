import { Button } from "@/components/ui/button";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center space-y-8 animate-fade-in">
        <h2 className="text-4xl md:text-5xl font-bold">Composer & Sound Designer</h2>
        <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
          Stephen O'Connell is a composer and sound designer specializing in creating unique sample instruments 
          and crafting immersive sonic experiences. With a focus on analogue synthesis and experimental sound design, 
          each project pushes the boundaries of what's possible in digital music production.
        </p>
        <div className="flex flex-wrap gap-4 justify-center pt-4">
          <Button 
            size="lg"
            variant="outline"
            className="border-primary text-foreground hover:bg-primary hover:text-primary-foreground rounded-full px-8"
          >
            View Portfolio
          </Button>
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8"
          >
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};
