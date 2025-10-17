import { resumeData } from "@/app/data";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building2, CalendarDays, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const renderExperienceCard = (
    exp: (typeof resumeData.workExperience)[0],
    index: number
  ) => (
    <Card
      key={index}
      className="w-full transform transition-all duration-300 hover:scale-[1.02] hover:shadow-primary/20 hover:shadow-lg"
    >
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">
          {exp.role}
        </CardTitle>
        <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-foreground/80 pt-1">
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4" /> {exp.company}
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" /> {exp.location}
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4" /> {exp.period}
          </div>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
          {exp.duties.map((duty: string, i: number) => (
            <li key={i}>{duty}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );

  return (
    <section id="experience" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
            Work Experience
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            A timeline of my professional journey and contributions in the field
            of Human Resources.
          </p>
        </div>
        <div className="mx-auto max-w-5xl pt-12">
          <Tabs defaultValue="experience" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="experience">
                Professional Experience
              </TabsTrigger>
              <TabsTrigger value="internships">Internships</TabsTrigger>
            </TabsList>
            <TabsContent value="experience" className="mt-8 space-y-8">
              {resumeData.workExperience.map(renderExperienceCard)}
            </TabsContent>
            <TabsContent value="internships" className="mt-8 space-y-8">
              {resumeData.internships.map(renderExperienceCard)}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
