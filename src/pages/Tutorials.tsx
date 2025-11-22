import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import React, { useEffect, useState } from 'react';
import api from '../api';

const Tutorials = () => {


const [tutorials, setPosts] = useState([]);

  const fetchTutorials = async () => {
    try {
      const response = await api.get('/api/v1/tutorials');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
      fetchTutorials();
    }, []);



  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1 pt-20">
         {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">NEW Tutorials</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
             Latest tutorials of music production 
            </p>
          </div>
        </section>

        {/* Tutorials Videos Section */}
        <section className="py-20 px-6 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              
              {tutorials.map((tutorial) => (
                /* Video  */
                <div className="space-y-4">
                  <div className="aspect-video">
                    <iframe
                      width="100%"
                      height="100%"
                      src={tutorial.src}
                      title="BBC Orchestra Trick"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="font-semibold text-lg">{tutorial.title}</h3>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="container mx-auto max-w-5xl text-center">
            {/* Logo */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="relative w-20 h-20 border-2 border-foreground rounded-lg flex items-center justify-center transform -rotate-12">
                <div className="text-xs font-bold">
                  <div>FRETLESS</div>
                  <div>MUSIC</div>
                  <div>NEW</div>
                </div>
              </div>
              <h1 className="text-6xl font-bold">
                Fretless<span className="text-destructive">Music</span>New
              </h1>
            </div>

            <h2 className="text-5xl font-bold mb-6">Start Your Project Today!</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              With hundreds of videos and tutorials across a wide range of topics, now is the time to subscribe to the Channel and start learning today.
            </p>
            
            <Button 
              size="lg" 
              className="bg-destructive hover:bg-destructive/90 text-destructive-foreground"
              asChild
            >
              <a href="https://www.youtube.com/@FRETLESS-MUSIC" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-5 w-5" />
                SUBSCRIBE TODAY
              </a>
            </Button>
          </div>
        </section>


      </main>
      <Footer />
    </div>
  );
};

export default Tutorials;
