import { Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { OptimizedImage } from "@/components/OptimizedImage";
import React, { useEffect, useState } from 'react';
import api from '../api';



const Blog = () => {

  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const response = await api.get('/api/v1/posts');
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts", error);
    }
  };

  useEffect(() => {
      fetchPosts();
    }, []);



  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-6">
          <div className="container mx-auto max-w-6xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-center">Blog</h1>
            <p className="text-xl text-muted-foreground text-center max-w-3xl mx-auto">
              Latest updates, tutorials, and insights from the world of music production and sound design
            </p>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-6">
          <div className="container mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <Link  to={`/blog/${post.slug}`} className="w-full">
                    <CardHeader className="p-0">
                      <OptimizedImage
                        src={post.picture}
                        alt={post.title}
                        className="w-full h-64 object-cover"
                      />
                      
                    </CardHeader>
                  </Link>
                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-3">
                      {post.author} • {post.published_date}
                    </p>
                    <h2 className="text-xl font-bold mb-3 line-clamp-2">
                      {post.title}
                    </h2>
                    {post.text && (
                      <p className="text-muted-foreground line-clamp-3">
                        {post.text}
                      </p>
                    )}
                  </CardContent>
                  <CardFooter className="px-6 pb-6">
                    <Link to={`/blog/${post.slug}`} className="w-full">
                      <Button variant="outline" className="w-full">
                        Read More
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
              
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
