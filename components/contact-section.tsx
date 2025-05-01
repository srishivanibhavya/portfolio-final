"use client";

import { useState, useRef } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Send } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

export function ContactSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  // const { toast } = useToast();
  
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormState({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactItems = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "shivanibhavya73@gmail.com",
      href: "mailto:shivanibhavya73@gmail.com"
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91 9030914103",
      href: "tel:+919030914103"
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Hyderabad, India",
      href: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container px-4 md:px-6 mx-auto">
        <div ref={ref} className="max-w-3xl mx-auto text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight mb-4 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Get In Touch
          </h2>
          <p className={cn(
            "text-lg text-muted-foreground transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          )}>
            Have a project in mind or just want to chat? Feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 mt-12">
          <div className={cn(
            "lg:col-span-2 space-y-4 lg:mt-10",
            "transition-all duration-700",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
          )}>
            {contactItems.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  {item.href ? (
                    <a href={item.href} className="text-muted-foreground hover:text-primary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <Card className={cn(
            "lg:col-span-3",
            "transition-all duration-700",
            isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
          )}>
            <CardHeader>
              <CardTitle>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your message"
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <span className="mr-2">Sending...</span>
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}