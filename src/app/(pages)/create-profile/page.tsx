import CvUploadForm from '@/components/cv-upload-form';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Resume Analyzer | Sidar Erener Portfolio',
  description: 'Automatically generate a professional profile from your CV and certificates using AI.',
};

const demoDocuments = [
    { name: 'cv.pdf', path: '/documents/cv.pdf', type: 'application/pdf' },
    { name: 'certificate.pdf', path: '/documents/certificate.pdf', type: 'application/pdf' }
]


export default function CreateProfilePage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          AI Resume Analyzer
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
          Upload your CV (and optional certificates) to let our AI generate a professional profile. You can also drag and drop my sample documents below to try it out!
        </p>
      </div>

      <CvUploadForm demoDocuments={demoDocuments} />
    </div>
  );
}
