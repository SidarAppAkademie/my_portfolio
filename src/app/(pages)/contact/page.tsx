import ContactForm from "@/components/contact-form";
import type { Metadata } from 'next';
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: 'Contact | Sidar Erener',
  description: 'Get in touch with Sidar Erener.',
};

export default function ContactPage() {
  return (
    <div className="space-y-8">
      <div className="text-center">
        <h1 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Contact Me
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Have a question or want to work together? Drop me a line.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
            <ContactForm />
        </div>
        <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Information</h3>
            <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary"/>
                <span>erener@apply10.com</span>
            </div>
             <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary"/>
                <span>Mülheim an der Ruhr, Germany</span>
            </div>
        </div>
      </div>
    </div>
  );
}
