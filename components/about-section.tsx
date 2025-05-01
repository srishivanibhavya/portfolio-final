"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Brain, Code, Settings, Bot, Server, Database } from "lucide-react";
import { cn } from "@/lib/utils";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const iconClasses = "w-8 h-8 text-primary";

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            About Me
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Computer Science undergraduate with a strong foundation in object-oriented programming, data structures, and algorithms. 
            Proficient in Java and Python, with hands-on experience in developing scalable web applications. 
            Passionate about building scalable technical solutions, optimizing software performance, and solving real-world challenges through technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className={cn(
            "bg-card rounded-lg p-6 shadow-sm border transition-all duration-700 transform hover:shadow-md hover:-translate-y-1",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Code className={iconClasses} />
            <h3 className="text-xl font-bold mt-4 mb-2">Full-Stack Development</h3>
            <p className="text-muted-foreground">
              Building responsive web applications with modern technologies like React, Node.js, and TypeScript.
            </p>
          </div>
          
          <div className={cn(
            "bg-card rounded-lg p-6 shadow-sm border transition-all duration-700 delay-100 transform hover:shadow-md hover:-translate-y-1",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Brain className={iconClasses} />
            <h3 className="text-xl font-bold mt-4 mb-2">AI & Machine Learning</h3>
            <p className="text-muted-foreground">
              Developing AI-powered solutions and applying machine learning techniques to solve real-world problems.
            </p>
          </div>
          
          <div className={cn(
            "bg-card rounded-lg p-6 shadow-sm border transition-all duration-700 delay-200 transform hover:shadow-md hover:-translate-y-1",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Settings className={iconClasses} />
            <h3 className="text-xl font-bold mt-4 mb-2">System Optimization</h3>
            <p className="text-muted-foreground">
              Improving software performance and building efficient, scalable systems.
            </p>
          </div>
          
          <div className={cn(
            "bg-card rounded-lg p-6 shadow-sm border transition-all duration-700 delay-300 transform hover:shadow-md hover:-translate-y-1",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Bot className={iconClasses} />
            <h3 className="text-xl font-bold mt-4 mb-2">Accessibility Focused</h3>
            <p className="text-muted-foreground">
              Committed to creating inclusive technology that works for everyone.
            </p>
          </div>
          
          <div className={cn(
            "bg-card rounded-lg p-6 shadow-sm border transition-all duration-700 delay-400 transform hover:shadow-md hover:-translate-y-1",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Server className={iconClasses} />
            <h3 className="text-xl font-bold mt-4 mb-2">Backend Development</h3>
            <p className="text-muted-foreground">
              Building robust APIs and server-side applications with Node.js, Express, and databases.
            </p>
          </div>
          
          <div className={cn(
            "bg-card rounded-lg p-6 shadow-sm border transition-all duration-700 delay-500 transform hover:shadow-md hover:-translate-y-1",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            <Database className={iconClasses} />
            <h3 className="text-xl font-bold mt-4 mb-2">Database Management</h3>
            <p className="text-muted-foreground">
              Designing and optimizing database structures using SQL and NoSQL solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}