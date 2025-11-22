import { Music, Menu } from "lucide-react";
import { BsYoutube, BsInstagram } from "react-icons/bs";
import { Button } from "@/components/ui/button";
import React, { useEffect, useState } from 'react';
import api from '../api';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-bold tracking-wider">
            <a href="/" className="text-xl">
              {globals.map((global) => (global.site_name))}
            </a>
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="/music" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              MUSIC
            </a>
            <a href="/samples" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              SAMPLE INSTRUMENTS
            </a>
            <a href="/tutorials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              TUTORIALS
            </a>
            <a href="/about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              ABOUT
            </a>
            <a href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              BLOG
            </a>
          </nav>

          <div className="flex items-center gap-3">
            {/* Social Icons (Hidden on very small screens if needed, currently visible) */}
            <div className="hidden sm:flex items-center gap-3">
              <Button  size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <a href="https://www.youtube.com/@FRETLESS-MUSIC" target="_blank" rel="noopener noreferrer">
                  <BsYoutube className="h-5 w-5" />
                </a>
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <BsInstagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all">
                <Music className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Dropdown Menu */}
            <div className="md:hidden">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <a href="/music" className="w-full cursor-pointer">MUSIC</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/samples" className="w-full cursor-pointer">SAMPLE INSTRUMENTS</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/tutorials" className="w-full cursor-pointer">CMD SHIFT NEW</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/about" className="w-full cursor-pointer">ABOUT</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href="/blog" className="w-full cursor-pointer">BLOG</a>
                  </DropdownMenuItem>
                  {/* Optional: Add Socials to mobile menu if you hide them in the main bar */}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};