"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      
      const x = (clientX - left) / width;
      const y = (clientY - top) / height;
      
      heroRef.current.style.setProperty("--x", `${x}`);
      heroRef.current.style.setProperty("--y", `${y}`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="min-h-screen pt-24 pb-10 relative flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "radial-gradient(circle at calc(var(--x, 0.5) * 100%) calc(var(--y, 0.5) * 100%), rgba(var(--chart-1), 0.15), transparent 25rem)"
      }}
    >
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center relative z-10">
        <div className="max-w-3xl mx-auto">
          <h1 className="animate-in fade-in slide-in-from-bottom-8 duration-700 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6">
            Hi, I'm Sri Shivani Bhavya
            <span className="inline-block">
              <span className="text-primary">.</span>
            </span>
          </h1>
          <p className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            CS undergrad | Full-stack dev | Passionate about accessible tech, scalable systems, and AI-driven solutions.
          </p>
          
          {/* Social Links */}
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300 flex justify-center gap-4 mb-10">
            <Link href="https://github.com/srishivanibhavya" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link href="https://www.linkedin.com/in/srishivanibhavya" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link href="https://twitter.com/shiv1sri_" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="icon" className="rounded-full">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </Link>
            <Link href="mailto:shivanibhavya73@gmail.com">
              <Button variant="outline" size="icon" className="rounded-full">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
          
          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="#projects">
              <Button className="w-full sm:w-auto">View My Projects</Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" className="w-full sm:w-auto">Contact Me</Button>
            </Link>
          </div>
        </div>
        
        <div className="animate-in fade-in duration-1000 delay-700 absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <Link href="#about" className={cn(
            "flex items-center justify-center h-10 w-10 rounded-full",
            "text-muted-foreground hover:text-foreground transition-colors",
            "animate-bounce"
          )}>
            <ChevronDown className="h-6 w-6" />
            <span className="sr-only">Scroll down</span>
          </Link>
        </div>
      </div>
    </section>
  );
}