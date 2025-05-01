"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import Link from "next/link";
import { Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
}

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const projects: Project[] = [
    {
      title: "Drowsiness Detection",
      description: "A real-time driver drowsiness detection system using neural networks and Arduino-based sensor inputs to enhance road safety.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Arduino"],
      githubUrl: "https://github.com/srishivanibhavya/DrowsinessDetection",
      imageUrl: "https://images.pexels.com/photos/3807319/pexels-photo-3807319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "ReviewSense",
      description: "🧠 An AI-powered app that predicts the helpfulness of product reviews using BERT embeddings, metadata features, and machine learning models like LightGBM and Random Forest.",
      technologies: ["TypeScript", "React", "Node.js", "BERT", "LightGBM"],
      githubUrl: "https://github.com/srishivanibhavya/ReviewSense",
      imageUrl: "https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Urban Metro Transit Guide",
      description: "A comprehensive tool for navigating metro in the city of Hyderabad, Telangana.",
      technologies: ["Java", "Android", "Google Maps API"],
      githubUrl: "https://github.com/srishivanibhavya/urbanMetro-transit-guide",
      imageUrl: "https://images.pexels.com/photos/2506358/pexels-photo-2506358.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Accessibility Analyzer",
      description: "A full-stack web tool using React.js, Node.js, and MongoDB to scan websites for WCAG compliance using the Lighthouse API.",
      technologies: ["React.js", "Node.js", "MongoDB", "Lighthouse API", "Machine Learning"],
      githubUrl: "#",
      demoUrl: "#",
      imageUrl: "https://images.pexels.com/photos/3182834/pexels-photo-3182834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "CookMate (Voice-Controlled Cooking Assistant)",
      description: "A React Native mobile app integrating Node.js backend and Firebase Firestore for real-time, voice-controlled recipe guidance.",
      technologies: ["React Native", "Node.js", "Firebase", "OpenAI Whisper API"],
      githubUrl: "#",
      imageUrl: "https://images.pexels.com/photos/4226119/pexels-photo-4226119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      title: "Customer Sentiment Classifier",
      description: "A sentiment classification system using Python, NLP techniques, and logistic regression to analyze product reviews.",
      technologies: ["Python", "NLP", "Logistic Regression", "TF-IDF"],
      githubUrl: "#",
      imageUrl: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Featured Projects
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            A selection of my recent work and ongoing projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <Card key={project.title} className={cn(
              "overflow-hidden group h-full flex flex-col",
              "transition-all duration-700 transform hover:shadow-lg",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className="relative aspect-video overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                  style={{ backgroundImage: `url(${project.imageUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              </div>
              <CardHeader className="flex-grow">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="mt-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 my-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 justify-end">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="rounded-full flex gap-1">
                    <Github className="h-4 w-4" />
                    <span>Code</span>
                  </Button>
                </Link>
                {project.demoUrl && (
                  <Link href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="default" size="sm" className="rounded-full flex gap-1">
                      <Eye className="h-4 w-4" />
                      <span>Demo</span>
                    </Button>
                  </Link>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}