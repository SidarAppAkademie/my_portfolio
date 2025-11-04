'use server';

/**
 * @fileOverview A profile creation AI agent that extracts information from a CV and certificates.
 *
 * - createProfileFromCv - A function that handles the profile creation process.
 * - CreateProfileFromCvInput - The input type for the createProfileFromCv function.
 * - CreateProfileFromCvOutput - The return type for the createProfileFromCv function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CreateProfileFromCvInputSchema = z.object({
  cvDataUri: z
    .string()
    .describe(
      'The CV file content as a data URI that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
    ),
  certificatesDataUris: z
    .array(z.string())
    .describe(
      'An array of certificate file contents as data URIs that must include a MIME type and use Base64 encoding. Expected format: \'data:<mimetype>;base64,<encoded_data>\'.' // Corrected typo here
    )
    .optional(),
});
export type CreateProfileFromCvInput = z.infer<typeof CreateProfileFromCvInputSchema>;

const CreateProfileFromCvOutputSchema = z.object({
  name: z.string().describe('The name of the person.'),
  email: z.string().email().describe('The email address of the person.'),
  skills: z.array(z.string()).describe('A list of skills extracted from the CV and certificates.'),
  experience: z
    .array(z.string())
    .describe('A list of work experiences extracted from the CV.'),
  certifications: z
    .array(z.string())
    .describe('A list of certifications extracted from the certificates.'),
  summary: z.string().describe('A summary of the person.'),
});
export type CreateProfileFromCvOutput = z.infer<typeof CreateProfileFromCvOutputSchema>;

export async function createProfileFromCv(
  input: CreateProfileFromCvInput
): Promise<CreateProfileFromCvOutput> {
  return createProfileFromCvFlow(input);
}

const prompt = ai.definePrompt({
  name: 'createProfileFromCvPrompt',
  input: {schema: CreateProfileFromCvInputSchema},
  output: {schema: CreateProfileFromCvOutputSchema},
  prompt: `You are an expert profile creator. You will receive a CV and a list of certificates. Extract all relevant information to create a professional profile.

CV: {{media url=cvDataUri}}

Certificates:
{{#each certificatesDataUris}}
  {{media url=this}}
{{/each}}

Output the profile in the following JSON format:
`,
});

const createProfileFromCvFlow = ai.defineFlow(
  {
    name: 'createProfileFromCvFlow',
    inputSchema: CreateProfileFromCvInputSchema,
    outputSchema: CreateProfileFromCvOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
