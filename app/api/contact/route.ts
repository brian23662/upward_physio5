import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/contact-schema";
import { siteConfig } from "@/lib/site-config";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Invalid form data", details: parsed.error.flatten() },
        { status: 400 }
      );
    }

    const { name, email, phone, company, inquiryType, message } = parsed.data;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.warn("[contact] RESEND_API_KEY not set — logging instead.");
      console.log("[contact] submission:", parsed.data);
      // Return success so dev/preview without keys still works.
      return NextResponse.json({ ok: true, dev: true });
    }

    const resend = new Resend(apiKey);
    const fromAddr = process.env.CONTACT_FROM_EMAIL ?? "onboarding@resend.dev";
    const toAddr = process.env.CONTACT_TO_EMAIL ?? siteConfig.email;

    const subject =
      inquiryType === "corporate"
        ? `Corporate inquiry from ${company ?? name}`
        : `New consult request from ${name}`;

    const html = renderEmail({ name, email, phone, company, inquiryType, message });

    const { error } = await resend.emails.send({
      from: `Upward Physio Website <${fromAddr}>`,
      to: [toAddr],
      replyTo: email,
      subject,
      html,
    });

    if (error) {
      console.error("[contact] resend error:", error);
      return NextResponse.json({ error: "Email service failed" }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] unexpected:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

function renderEmail(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  inquiryType: "individual" | "corporate";
  message: string;
}) {
  const { name, email, phone, company, inquiryType, message } = data;
  const accent = inquiryType === "corporate" ? "#5F7A56" : "#0A2540";
  return `
  <!doctype html>
  <html>
    <body style="margin:0;padding:0;background:#F8F9FA;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;color:#0A2540;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background:#F8F9FA;padding:40px 20px;">
        <tr><td align="center">
          <table width="600" cellpadding="0" cellspacing="0" style="background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 2px 12px rgba(10,37,64,0.06);">
            <tr><td style="background:${accent};padding:24px 32px;color:#fff;">
              <div style="font-size:11px;text-transform:uppercase;letter-spacing:2px;opacity:0.75;">Upward Physio</div>
              <div style="font-size:22px;font-weight:700;margin-top:4px;">
                ${inquiryType === "corporate" ? "Corporate Inquiry" : "New Consult Request"}
              </div>
            </td></tr>
            <tr><td style="padding:32px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;line-height:1.6;">
                <tr><td style="padding:8px 0;color:#64748b;width:120px;">Name</td><td><strong>${escapeHtml(name)}</strong></td></tr>
                <tr><td style="padding:8px 0;color:#64748b;">Email</td><td><a href="mailto:${escapeHtml(email)}" style="color:${accent};">${escapeHtml(email)}</a></td></tr>
                ${phone ? `<tr><td style="padding:8px 0;color:#64748b;">Phone</td><td>${escapeHtml(phone)}</td></tr>` : ""}
                ${company ? `<tr><td style="padding:8px 0;color:#64748b;">Company</td><td>${escapeHtml(company)}</td></tr>` : ""}
                <tr><td style="padding:8px 0;color:#64748b;">Type</td><td style="text-transform:capitalize;">${inquiryType}</td></tr>
              </table>
              <hr style="border:none;border-top:1px solid #e5e7eb;margin:24px 0;" />
              <div style="font-size:12px;text-transform:uppercase;letter-spacing:1.5px;color:#64748b;margin-bottom:8px;">Message</div>
              <div style="font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(message)}</div>
            </td></tr>
            <tr><td style="background:#F8F9FA;padding:16px 32px;font-size:12px;color:#64748b;">
              Reply directly to this email to respond to ${escapeHtml(name)}.
            </td></tr>
          </table>
        </td></tr>
      </table>
    </body>
  </html>`;
}

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
