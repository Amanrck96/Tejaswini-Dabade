import { resumeData } from "@/app/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import {
  GraduationCap,
  Award,
  BrainCircuit,
  Heart,
  Languages,
  Star,
  PersonStanding,
  Music,
  CookingPot,
  Dumbbell,
} from "lucide-react";
import React from "react";

const iconMap: { [key: string]: React.ReactNode } = {
  Sports: <Dumbbell className="h-4 w-4" />,
  Dance: <PersonStanding className="h-4 w-4" />,
  Music: <Music className="h-4 w-4" />,
  Cooking: <CookingPot className="h-4 w-4" />,
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-card">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold font-headline tracking-tighter sm:text-5xl text-primary">
            About Me
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            {resumeData.objective}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-background">
            <CardHeader className="flex-row items-center gap-4">
              <BrainCircuit className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Core Competencies</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {resumeData.coreCompetencies.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader className="flex-row items-center gap-4">
              <Star className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {resumeData.skills.map((skill) => (
                <Badge key={skill} variant="secondary">
                  {skill}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader className="flex-row items-center gap-4">
              <GraduationCap className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {resumeData.education.map((edu, i) => (
                <div key={i}>
                  <h3 className="font-semibold">{edu.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {edu.location} | {edu.period}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader className="flex-row items-center gap-4">
              <Award className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Extra-Curricular</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
                {resumeData.extraCurricular.map((activity, i) => (
                  <li key={i}>{activity}</li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader className="flex-row items-center gap-4">
              <Heart className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Interests</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {resumeData.interests.map((interest) => (
                <Badge
                  key={interest}
                  variant="secondary"
                  className="flex items-center gap-2"
                >
                  {iconMap[interest]} {interest}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-background">
            <CardHeader className="flex-row items-center gap-4">
              <Languages className="w-8 h-8 text-primary" />
              <CardTitle className="font-headline">Languages</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              {resumeData.languages.map((lang) => (
                <Badge key={lang} variant="secondary">
                  {lang}
                </Badge>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
