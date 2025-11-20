import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from 'react';
import api from '../api';


const Post = () => {
  
  const { id } = useParams();

        const [post, setPost] = useState(null);

        useEffect(() => {
          const fetchPost = async () => {
            try {
              const response = await api.get(`/api/v1/post/${id}`);
              setPost(response.data);
            } catch (error) {
              console.error('Error fetching post:', error);
            }
          };
          fetchPost();
        }, [id]);
  

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col bg-background">
        <Header />
        <main className="flex-1 pt-20 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <Link to="/blog">
              <Button>Back to Blog</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 pt-20">
        <article className="py-12 px-6">
          <div className="container mx-auto max-w-4xl">
            <Link to="/blog">
              <Button variant="ghost" className="mb-8">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Button>
            </Link>


            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">
                {post.author} • {post.published_date}
              </p>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                {post.title}
              </h1>
            </div>

            <div className="prose prose-lg max-w-none">
              {post.text.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {post.youtube_link && (
              <div className="mt-8">
                <div className="aspect-video rounded-lg overflow-hidden">
                  <iframe
                    src={post.youtube_link}
                    title={post.title}
                    className="w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Post;
