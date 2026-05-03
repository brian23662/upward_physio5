import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  company: z.string().optional(),
  inquiryType: z.enum(["individual", "corporate"], {
    errorMap: () => ({ message: "Please select an inquiry type" }),
  }),
  message: z.string().min(10, "Please tell us a little more (10+ chars)"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
