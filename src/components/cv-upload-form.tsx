"use client";

import { useState, useRef, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { handleCreateProfile } from "@/actions/ai-profile";
import type { CreateProfileFromCvOutput } from "@/ai/flows/profile-creation-from-cv";
import { Loader2, UploadCloud, User, GraduationCap, Star, Briefcase, FileText, DownloadCloud } from "lucide-react";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_FILE_TYPES = ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];

const formSchema = z.object({
  cv: z
    .any()
    .refine((files) => files?.length >= 1, "CV is required.")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
    .refine(
      (files) => ACCEPTED_FILE_TYPES.includes(files?.[0]?.type),
      ".pdf, .doc, .docx files are accepted."
    ),
  certificates: z
    .any()
    .optional(),
});

type FormValues = z.infer<typeof formSchema>;

type DemoDoc = {
  name: string;
  path: string;
  type: string;
}

const fileToDataURI = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result as string);
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
};

const urlToBlob = (url: string): Promise<Blob> => fetch(url).then(res => res.blob());

const urlToFile = async (url: string, name: string, type: string): Promise<File> => {
    const blob = await urlToBlob(url);
    return new File([blob], name, { type });
};

export default function CvUploadForm({ demoDocuments }: { demoDocuments: DemoDoc[]}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [profile, setProfile] = useState<CreateProfileFromCvOutput | null>(null);
  const { toast } = useToast();
  const [isDragging, setIsDragging] = useState(false);
  const [cvFileName, setCvFileName] = useState<string | null>(null);
  const [certFileNames, setCertFileNames] = useState<string[]>([]);

  const cvInputRef = useRef<HTMLInputElement>(null);
  const certInputRef = useRef<HTMLInputElement>(null);

  const { register, handleSubmit, formState: { errors }, setValue, trigger } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });
  
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: 'cv' | 'certificates') => {
      const files = e.target.files;
      if (!files) return;

      if (field === 'cv') {
        setValue('cv', files);
        setCvFileName(files[0]?.name || null);
        trigger('cv');
      } else {
        setValue('certificates', files);
        setCertFileNames(Array.from(files).map(f => f.name));
        trigger('certificates');
      }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>, field: 'cv' | 'certificates') => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    
    const files = e.dataTransfer.files;
    const inputRef = field === 'cv' ? cvInputRef : certInputRef;
    
    if (inputRef.current) {
        inputRef.current.files = files;
        const changeEvent = new Event('change', { bubbles: true });
        inputRef.current.dispatchEvent(changeEvent);
    }
  }, [setValue, trigger]);

  const handleDragEvents = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
        setIsDragging(true);
    } else if (e.type === 'dragleave' || e.type === 'drop') {
        setIsDragging(false);
    }
  };

  const handleDemoDocDragStart = (e: React.DragEvent<HTMLDivElement>, doc: DemoDoc) => {
    e.dataTransfer.setData('text/plain', JSON.stringify(doc));
  };

  const handleDemoDocDrop = useCallback(async (e: React.DragEvent<HTMLLabelElement>, field: 'cv' | 'certificates') => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const docData = JSON.parse(e.dataTransfer.getData('text/plain')) as DemoDoc;
    if (!docData) return;
    
    const file = await urlToFile(docData.path, docData.name, docData.type);
    const dataTransfer = new DataTransfer();
    dataTransfer.items.add(file);
    
    const inputRef = field === 'cv' ? cvInputRef : certInputRef;
    if (inputRef.current) {
      inputRef.current.files = dataTransfer.files;
      const changeEvent = new Event('change', { bubbles: true });
      inputRef.current.dispatchEvent(changeEvent);
    }
  }, [setValue, trigger]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsSubmitting(true);
    setProfile(null);

    try {
      const cvDataUri = await fileToDataURI(data.cv[0]);
      
      const certificatesDataUris: string[] = [];
      if (data.certificates && data.certificates.length > 0) {
          for (const file of Array.from(data.certificates as FileList)) {
              certificatesDataUris.push(await fileToDataURI(file));
          }
      }
        
      const result = await handleCreateProfile({ cvDataUri, certificatesDataUris });
      
      if (result.error) {
        throw new Error(result.error);
      }

      setProfile(result.data || null);
      toast({
        title: "Profile Generated Successfully!",
        description: "The AI has created your profile based on the documents provided.",
      });

    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "An error occurred.",
        description: error.message || "Failed to generate profile. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const UploadArea = ({ field, label, multiple, fileName, fileNames }: { field: 'cv' | 'certificates', label: string, multiple: boolean, fileName?: string | null, fileNames?: string[] }) => (
    <div className="space-y-2">
      <Label htmlFor={field}>{label}</Label>
      <label 
        htmlFor={field}
        className={cn(
            "flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-muted/50 transition-colors",
            isDragging ? "border-primary" : "border-border",
            errors[field] ? "border-destructive" : ""
        )}
        onDragEnter={handleDragEvents}
        onDragOver={handleDragEvents}
        onDragLeave={handleDragEvents}
        onDrop={(e) => {
            if (e.dataTransfer.files.length > 0) {
                handleDrop(e, field);
            } else if (e.dataTransfer.getData('text/plain')) {
                handleDemoDocDrop(e, field);
            }
        }}
      >
        <div className="flex flex-col items-center justify-center pt-5 pb-6">
          <DownloadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
          <p className="mb-2 text-sm text-muted-foreground">
            <span className="font-semibold">Click to upload</span> or drag and drop
          </p>
          <p className="text-xs text-muted-foreground">PDF, DOC, DOCX (MAX. 5MB)</p>
        </div>
        <Input 
          id={field} 
          type="file" 
          multiple={multiple}
          className="hidden" 
          {...register(field, { onChange: (e) => handleFileChange(e, field) })}
          ref={field === 'cv' ? cvInputRef : certInputRef}
        />
      </label>
      {fileName && <p className="text-sm text-muted-foreground">Selected: <span className="font-medium text-foreground">{fileName}</span></p>}
      {fileNames && fileNames.length > 0 && <p className="text-sm text-muted-foreground">Selected: <span className="font-medium text-foreground">{fileNames.join(', ')}</span></p>}
      {errors[field] && <p className="text-sm text-destructive">{errors[field]?.message as string}</p>}
    </div>
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        <div className="md:col-span-2">
            <Card>
                <CardHeader>
                <CardTitle>Upload Your Documents</CardTitle>
                <CardDescription>Provide your CV and any relevant certificates.</CardDescription>
                </CardHeader>
                <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <UploadArea field="cv" label="Curriculum Vitae (CV)" multiple={false} fileName={cvFileName} />
                    <UploadArea field="certificates" label="Certificates (optional)" multiple={true} fileNames={certFileNames} />
                    
                    <Button type="submit" disabled={isSubmitting} className="w-full sm:w-auto">
                    {isSubmitting ? (
                        <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Generating...
                        </>
                    ) : (
                        <>
                        <UploadCloud className="mr-2 h-4 w-4" />
                        Generate Profile
                        </>
                    )}
                    </Button>
                </form>
                </CardContent>
            </Card>
        </div>
        <div className="space-y-4">
            <h3 className="font-semibold text-lg text-center md:text-left">Or Try with My Documents</h3>
            <p className="text-sm text-muted-foreground text-center md:text-left">Drag a document into an upload box to test the feature. Double-click to view.</p>
            <div className="flex justify-center md:justify-start gap-4 pt-2">
                {demoDocuments.map(doc => (
                    <Link key={doc.name} href={doc.path} target="_blank" passHref>
                        <div 
                            draggable
                            onDragStart={(e) => handleDemoDocDragStart(e, doc)}
                            onDoubleClick={() => window.open(doc.path, '_blank')}
                            className="flex flex-col items-center gap-2 p-4 rounded-lg bg-card border hover:border-primary hover:shadow-lg transition-all cursor-grab active:cursor-grabbing"
                            title={`Drag to upload, double-click to view ${doc.name}`}
                        >
                            <FileText className="w-10 h-10 text-primary" />
                            <span className="text-xs font-medium text-center">{doc.name}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
      </div>

      {isSubmitting && !profile && (
        <div className="text-center p-8">
            <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto" />
            <p className="mt-4 text-muted-foreground">AI is analyzing your documents... this may take a moment.</p>
        </div>
      )}

      {profile && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2"><User /> {profile.name}</CardTitle>
            <CardDescription>{profile.email}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="font-semibold text-lg mb-2">Summary</h3>
              <p className="text-muted-foreground">{profile.summary}</p>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Star /> Skills</h3>
              <div className="flex flex-wrap gap-2">
                {profile.skills.map(skill => <Badge key={skill} variant="secondary">{skill}</Badge>)}
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><Briefcase /> Experience</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {profile.experience.map(exp => <li key={exp}>{exp}</li>)}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2"><GraduationCap /> Certifications</h3>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                {profile.certifications.map(cert => <li key={cert}>{cert}</li>)}
              </ul>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
