import { generateResumeSummary } from "@/ai/flows/generate-resume-summary";
import { fullResumeText } from "@/app/data";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ExperienceSection from "@/components/experience-section";
import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default async function Home() {
  const { summary } = await generateResumeSummary({ resumeText: fullResumeText });

  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <HeroSection summary={summary} />
        <ExperienceSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
