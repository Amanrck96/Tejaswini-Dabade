import { resumeData } from "@/app/data";
import { Linkedin, Mail, Phone, Briefcase } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-card text-card-foreground">
      <div className="container mx-auto py-6 px-4 md:px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <Briefcase className="h-5 w-5 text-primary" />
          <p className="text-sm">
            &copy; {currentYear} {resumeData.name}. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={`https://${resumeData.contact.linkedin}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href={`mailto:${resumeData.contact.email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href={`tel:${resumeData.contact.phone}`}
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Phone"
          >
            <Phone className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
