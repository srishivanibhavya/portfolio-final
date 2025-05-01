"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { 
  Layers, 
  Database, 
  Code2, 
  GitBranch, 
  Server, 
  Workflow 
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface SkillCategory {
  name: string;
  icon: React.ReactNode;
  skills: Skill[];
}

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const skillCategories: SkillCategory[] = [
    {
      name: "Languages",
      icon: <Code2 className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Java", level: 90, category: "Languages" },
        { name: "Python", level: 85, category: "Languages" },
        { name: "JavaScript", level: 85, category: "Languages" },
        { name: "TypeScript", level: 80, category: "Languages" },
        { name: "C++", level: 70, category: "Languages" },
        { name: "SQL", level: 75, category: "Languages" },
      ]
    },
    {
      name: "Frameworks & Libraries",
      icon: <Layers className="h-6 w-6 text-primary" />,
      skills: [
        { name: "React.js", level: 85, category: "Frameworks" },
        { name: "Node.js", level: 80, category: "Frameworks" },
        { name: "Express.js", level: 75, category: "Frameworks" },
        { name: "React Native", level: 70, category: "Frameworks" },
        { name: "Tailwind CSS", level: 85, category: "Frameworks" },
      ]
    },
    {
      name: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: [
        { name: "MySQL", level: 80, category: "Databases" },
        { name: "MongoDB", level: 75, category: "Databases" },
        { name: "Firebase Firestore", level: 70, category: "Databases" },
      ]
    },
    {
      name: "Tools & Platforms",
      icon: <Workflow className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git & GitHub", level: 85, category: "Tools" },
        { name: "CI/CD Pipelines", level: 70, category: "Tools" },
        { name: "Postman", level: 80, category: "Tools" },
        { name: "Jupyter Notebooks", level: 75, category: "Tools" },
        { name: "VS Code", level: 90, category: "Tools" },
      ]
    },
    {
      name: "DevOps & Deployment",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Linux CLI", level: 75, category: "DevOps" },
        { name: "Docker", level: 65, category: "DevOps" },
        { name: "Cloud Platforms", level: 70, category: "DevOps" },
      ]
    },
    {
      name: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      skills: [
        { name: "Git", level: 85, category: "Version Control" },
        { name: "GitHub", level: 85, category: "Version Control" },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Technical Skills
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            The tools and technologies I've worked with to build compelling solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.name}
              className={cn(
                "bg-card rounded-lg p-6 shadow-sm border",
                "transition-all duration-700 transform",
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
              )}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                {category.icon}
                <h3 className="text-xl font-bold ml-2">{category.name}</h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}