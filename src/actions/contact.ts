"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type ContactFormState = {
  success: boolean;
  error?: string;
};

// Simple HTML template for notification email
const notificationEmailTemplate = (name: string, email: string, message: string) => `
  <h1>New Message from Portfolio!</h1>
  <p>You have received a new message from your portfolio's contact form.</p>
  <hr>
  <h3>Sender Information</h3>
  <ul>
    <li><strong>Name:</strong> ${name}</li>
    <li><strong>Email:</strong> ${email}</li>
  </ul>
  <h3>Message</h3>
  <p>${message}</p>
`;

// Simple HTML template for confirmation email
const confirmationEmailTemplate = (name: string, siteUrl: string) => `
  <h1>Thank You, ${name}!</h1>
  <p>Your message has been successfully received. I appreciate you taking the time to reach out.</p>
  <p>I will review your message and get back to you as soon as possible.</p>
  <br>
  <a href="${siteUrl}">Return to Portfolio</a>
  <br>
  <p>Best regards,<br>Sidar Erener</p>
`;


export async function handleContactForm(
  data: z.infer<typeof contactSchema>
): Promise<ContactFormState> {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM } = process.env;

  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS || !SMTP_FROM) {
    console.error("Missing SMTP environment variables.");
    return {
      success: false,
      error: "Server is not configured to send emails. Please contact the site administrator.",
    };
  }

  const parsed = contactSchema.safeParse(data);

  if (!parsed.success) {
    return { success: false, error: "Invalid form data." };
  }

  const { name, email, message } = parsed.data;

  try {
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: parseInt(SMTP_PORT),
      secure: parseInt(SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:9002";

    // Send notification email to yourself
    await transporter.sendMail({
      from: `"Portfolio Contact Form" <${SMTP_FROM}>`,
      to: SMTP_FROM, // Notifications are sent to the from address
      subject: "New Message from your Portfolio!",
      html: notificationEmailTemplate(name, email, message),
    });

    // Send confirmation email to the user
    await transporter.sendMail({
      from: `"Sidar Erener" <${SMTP_FROM}>`,
      to: email,
      subject: "Thank you for your message!",
      html: confirmationEmailTemplate(name, siteUrl),
    });

    return { success: true };
  } catch (error) {
    console.error("Email sending error:", error);
    return {
      success: false,
      error: "There was a problem sending your message. Please try again later.",
    };
  }
}
