import { resumeData } from "@/app/data";
import { Button } from "./ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";

type HeroSectionProps = {
  summary: string;
};

export default function HeroSection({ summary }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full h-dvh flex items-center justify-center text-center overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4">
          <p className="text-lg md:text-xl text-foreground/80 font-headline">
            {resumeData.title}
          </p>
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
            {resumeData.name}
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-lg">
            {summary}
          </p>
          <div className="flex items-center gap-4 pt-4">
            <Button asChild variant="outline">
              <a href={`mailto:${resumeData.contact.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Email Me
              </a>
            </Button>
            <div className="flex items-center gap-1">
              <Button asChild variant="ghost" size="icon">
                <a
                  href={`https://${resumeData.contact.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild variant="ghost" size="icon">
                <a href={`tel:${resumeData.contact.phone}`} aria-label="Phone">
                  <Phone className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
