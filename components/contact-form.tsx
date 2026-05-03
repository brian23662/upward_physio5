"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  defaultInquiryType?: "individual" | "corporate";
  variant?: "default" | "corporate";
}

export function ContactForm({ defaultInquiryType = "individual", variant = "default" }: ContactFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: { inquiryType: defaultInquiryType },
  });

  const inquiryType = watch("inquiryType");

  async function onSubmit(data: ContactFormData) {
    setStatus("submitting");
    setErrorMsg(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error ?? "Something went wrong");
      }
      setStatus("success");
      reset({ inquiryType: defaultInquiryType });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-sage/30 bg-sage/5 p-8 text-center">
        <CheckCircle2 className="mx-auto h-12 w-12 text-sage mb-4" />
        <h3 className="text-xl font-bold text-navy mb-2">Message received.</h3>
        <p className="text-muted-foreground mb-6">
          Thanks for reaching out. We'll get back to you within one business day.
        </p>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      {/* Inquiry type toggle */}
      <div>
        <Label>I'm reaching out as a...</Label>
        <div className="mt-2 grid grid-cols-2 gap-2 p-1 bg-muted rounded-full">
          {(["individual", "corporate"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setValue("inquiryType", type, { shouldValidate: true })}
              className={cn(
                "py-2 px-4 rounded-full text-sm font-semibold transition-all capitalize",
                inquiryType === type ? "bg-white text-navy shadow-sm" : "text-muted-foreground"
              )}
            >
              {type === "corporate" ? "Business / HR" : "Individual"}
            </button>
          ))}
        </div>
        {errors.inquiryType && (
          <p className="text-xs text-red-600 mt-1">{errors.inquiryType.message}</p>
        )}
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" {...register("name")} className="mt-1.5" placeholder="Jane Smith" />
          {errors.name && <p className="text-xs text-red-600 mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" {...register("email")} className="mt-1.5" placeholder="jane@company.com" />
          {errors.email && <p className="text-xs text-red-600 mt-1">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <Label htmlFor="phone">Phone <span className="text-muted-foreground">(optional)</span></Label>
          <Input id="phone" type="tel" {...register("phone")} className="mt-1.5" placeholder="(555) 123-4567" />
        </div>
        <div>
          <Label htmlFor="company">
            Company {inquiryType === "corporate" ? "" : <span className="text-muted-foreground">(optional)</span>}
          </Label>
          <Input id="company" {...register("company")} className="mt-1.5" placeholder="Acme Inc." />
        </div>
      </div>

      <div>
        <Label htmlFor="message">
          {variant === "corporate" ? "Tell us about your team's needs" : "How can we help?"}
        </Label>
        <Textarea
          id="message"
          {...register("message")}
          className="mt-1.5"
          rows={5}
          placeholder={
            variant === "corporate"
              ? "Team size, industry, current pain points, what you're hoping to solve..."
              : "Briefly describe what's going on and what you're hoping for..."
          }
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message.message}</p>}
      </div>

      {errorMsg && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-3 text-sm text-red-800">
          {errorMsg}
        </div>
      )}

      <Button
        type="submit"
        size="lg"
        variant="sage"
        disabled={status === "submitting"}
        className="w-full"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending...
          </>
        ) : variant === "corporate" ? (
          "Request a Proposal"
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  );
}
