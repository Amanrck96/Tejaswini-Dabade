'use server';

/**
 * @fileOverview This file defines a Genkit flow to generate a concise summary of a resume.
 *
 * - generateResumeSummary - A function that generates the resume summary.
 * - GenerateResumeSummaryInput - The input type for the generateResumeSummary function.
 * - GenerateResumeSummaryOutput - The return type for the generateResumeSummary function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateResumeSummaryInputSchema = z.object({
  resumeText: z
    .string()
    .describe('The text content of the resume to summarize.'),
});

export type GenerateResumeSummaryInput = z.infer<
  typeof GenerateResumeSummaryInputSchema
>;

const GenerateResumeSummaryOutputSchema = z.object({
  summary: z
    .string()
    .describe('A concise summary of the resume, highlighting key skills and experience.'),
});

export type GenerateResumeSummaryOutput = z.infer<
  typeof GenerateResumeSummaryOutputSchema
>;

export async function generateResumeSummary(
  input: GenerateResumeSummaryInput
): Promise<GenerateResumeSummaryOutput> {
  return generateResumeSummaryFlow(input);
}

const resumeSummaryPrompt = ai.definePrompt({
  name: 'resumeSummaryPrompt',
  input: {schema: GenerateResumeSummaryInputSchema},
  output: {schema: GenerateResumeSummaryOutputSchema},
  prompt: `You are an expert HR professional specializing in summarizing resumes.

  Given the following resume text, create a concise and engaging summary (1-2 sentences) that highlights the candidate's key skills, experience, and career goals. Focus on what would be most appealing to a potential employer.

  Resume Text: {{{resumeText}}}`,
});

const generateResumeSummaryFlow = ai.defineFlow(
  {
    name: 'generateResumeSummaryFlow',
    inputSchema: GenerateResumeSummaryInputSchema,
    outputSchema: GenerateResumeSummaryOutputSchema,
  },
  async input => {
    const {output} = await resumeSummaryPrompt(input);
    return output!;
  }
);
