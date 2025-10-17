import { resumeData } from "@/app/data";
import { Button } from "./ui/button";
import { Linkedin, Mail, Phone } from "lucide-react";
import Image from "next/image";

type HeroSectionProps = {
  summary: string;
};

export default function HeroSection({ summary }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative w-full h-dvh flex items-center justify-center text-center md:text-left overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute -bottom-1/3 -right-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-1/4 -left-1/4 w-2/3 h-2/3 bg-accent/10 rounded-full blur-3xl animate-pulse-slower"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="flex flex-col items-center md:items-start order-2 md:order-1">
            <p className="text-lg md:text-xl text-foreground/80 font-headline">
              {resumeData.title}
            </p>
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-primary">
              {resumeData.name}
            </h1>
            <p className="max-w-[700px] text-muted-foreground md:text-lg mt-4">
              {summary}
            </p>
            <div className="flex items-center gap-4 pt-4 mt-4">
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
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/50 shadow-lg justify-self-center order-1 md:order-2">
            <Image
              src="https://media.licdn.com/dms/image/v2/D4D35AQGjincfAP3vaA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1733424242818?e=1761303600&v=beta&t=JS24vtLWbgNCEVRsQVP-nIBHAaQXVbd3R4Ixtl0UrzE"
              alt={resumeData.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
