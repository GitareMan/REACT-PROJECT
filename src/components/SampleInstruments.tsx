
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";
import React, { useEffect, useState } from 'react';
import api from '../api';

const Projects = () => {
  
  const [projects, setPosts] = useState([]);

  const fetchProjects = async () => {
    try {
      const response = await api.get('/api/v1/projects');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
      fetchProjects();
    }, []);


  return (
    <div className="min-h-screen">
     
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&h=1080&fit=crop"
            alt="Synthesizer keys background"
            className="w-full h-full object-cover"
            wrapperClassName="w-full h-full"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="container mx-auto px-6 relative z-10 text-center space-y-8 animate-fade-in">
          <p className="text-lg md:text-xl text-muted-foreground">
            A world of sounds and textures await you…
          </p>
          <h1 className="text-5xl md:text-7xl font-bold">
            The Sample Instrument Libraries
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Created or Collaborated On by Ihor Drozd
          </p>
          <Button 
            size="lg" 
            className="mt-8 text-lg px-8 py-6 bg-primary hover:bg-primary/90"
            asChild
          >
            <a href="https://www.pianobook.co.uk/profile/steveoc/" target="_blank" rel="noopener noreferrer">
              Visit Profile
            </a>
          </Button>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            Pianobook Releases: FREE Libraries for You to Download
          </h2>

          <div className="space-y-32">
            
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="grid lg:grid-cols-2 gap-12 items-start">
                  <div className="space-y-6">
                    <div className="aspect-video rounded-lg overflow-hidden bg-secondary border border-border shadow-2xl">
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${project.video_link}`}
                        title={project.title}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-3xl md:text-4xl font-bold">
                      {project.title}
                    </h3>
                    <p className="text-xl italic text-muted-foreground">
                      {project.description}
                    </p>
                    <p className="text-lg text-muted-foreground leading-relaxed">
                      {project.longDescription}
                    </p>
                    <Button 
                      size="lg" 
                      className="mt-4"
                      asChild
                    >
                      <a href={project.download_link} target="_blank" rel="noopener noreferrer">
                        Download {project.title}
                      </a>
                    </Button>
                  </div>
                </div>

                {index < project.length - 1 && (
                  <div className="mt-16 border-t border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;