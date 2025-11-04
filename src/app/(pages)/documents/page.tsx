import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, Eye, FileText, Award } from "lucide-react";
import type { Metadata } from 'next';
import Link from "next/link";

export const metadata: Metadata = {
  title: 'My Documents | Sidar Erener Portfolio',
  description: 'View the CV and certificates of Sidar Erener.',
};

const documents = [
    {
        title: "Curriculum Vitae (CV)",
        description: "My up-to-date resume containing my professional experience, skills, and educational background.",
        icon: FileText,
        fileUrl: "/documents/cv.pdf"
    },
    {
        title: "Certificate",
        description: "My certificate showing the training I have attended and the competencies I have gained.",
        icon: Award,
        fileUrl: "/documents/certificate.pdf"
    }
]

export default function DocumentsPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          My Documents
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Learn more about my professional background and skills.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {documents.map((doc) => (
             <Card key={doc.title} className="flex flex-col">
                <CardHeader>
                    <div className="flex items-center gap-4">
                        <doc.icon className="w-8 h-8 text-primary" />
                        <div>
                            <CardTitle>{doc.title}</CardTitle>
                            <CardDescription>{doc.description}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="flex-grow flex items-end justify-end">
                    <div className="flex gap-2">
                        <Button variant="outline" asChild>
                            <Link href={doc.fileUrl} target="_blank" rel="noopener noreferrer">
                                <Eye className="mr-2 h-4 w-4" />
                                View
                            </Link>
                        </Button>
                        <Button asChild>
                            <Link href={doc.fileUrl} download>
                                <Download className="mr-2 h-4 w-4" />
                                Download
                            </Link>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        ))}
      </div>
    </div>
  );
}
