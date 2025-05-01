"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Award, Lightbulb, CodeSquare } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export function AchievementsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const achievements: Achievement[] = [
    {
      title: "Amazon ML Summer School 2024",
      description: "Selected from 85,000+ applicants, gaining exposure to large-scale machine learning systems.",
      icon: <CodeSquare className="h-8 w-8 text-primary" />
    },
    {
      title: "Harvard WeCode 2025 Scholar",
      description: "Received a full scholarship to attend Harvard WeCode 2025, a prestigious global tech conference for women in STEM.",
      icon: <Award className="h-8 w-8 text-primary" />
    },
    {
      title: "TEDx Event Organizer",
      description: "Organized the first TEDx event at ACE Engineering College, leading a 30-member team and managing full-scale logistics and execution.",
      icon: <Lightbulb className="h-8 w-8 text-primary" />
    }
  ];

  return (
    <section id="achievements" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Achievements
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Recognition and accomplishments from my journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {achievements.map((achievement, index) => (
            <Card key={achievement.title} className={cn(
              "overflow-hidden h-full transition-all duration-700 transform hover:shadow-md hover:-translate-y-1",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
            )} style={{ transitionDelay: `${index * 200}ms` }}>
              <CardHeader className="pb-2">
                <div className="mb-4">
                  {achievement.icon}
                </div>
                <CardTitle>{achievement.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{achievement.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}