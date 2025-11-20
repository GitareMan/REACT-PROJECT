
import React, { useEffect, useState } from 'react';
import api from '../api';

export const Footer = () => {

  const [globals, setGlobals] = useState([]);

    const fetchGlobals = async () => {
      try {
        const response = await api.get('/api/v1/globals');
        setGlobals(response.data);
      } catch (error) {
        console.error("Error fetching posts", error);
      }
    };

    useEffect(() => {
        fetchGlobals();
      }, []);

  return (
    <footer className="py-12 px-6 bg-background border-t border-border">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {globals.map((global) => (global.site_name))}. All rights reserved.
          </div>
          
          <div className="flex gap-8">
            <a href="/music" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Music
            </a>
            <a href="/samples" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Instruments
            </a>
            <a href="/about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Blog
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
