"use server";

import { createProfileFromCv, type CreateProfileFromCvInput, type CreateProfileFromCvOutput } from '@/ai/flows/profile-creation-from-cv';

export async function handleCreateProfile(input: CreateProfileFromCvInput): Promise<{ data?: CreateProfileFromCvOutput, error?: string }> {
  try {
    const result = await createProfileFromCv(input);
    return { data: result };
  } catch (e: any) {
    console.error("AI Profile Creation Error:", e);
    // In a real app, you might want to log this error to a monitoring service.
    return { error: e.message || "An unexpected error occurred while generating the profile." };
  }
}
