import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
const SMTP_SECURE = process.env.SMTP_SECURE !== "false";
const SMTP_USER = process.env.SMTP_USER || "narasimhasphillsphere@gmail.com";
const SMTP_PASS = process.env.SMTP_PASS || "srqnhsejhzizijnt";
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "narasimhasphillsphere@gmail.com";

// Create reusable Nodemailer transporter
export const mailTransporter = nodemailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: SMTP_SECURE,
  auth: {
    user: SMTP_USER.trim(),
    pass: SMTP_PASS.replace(/\s+/g, ""),
  },
});

export function generateEmailHtml(data: any): { subject: string; html: string; replyTo?: string } {
  const formType = data.formType || "general_inquiry";
  let subject = "New Inquiry - Narasimha Skill Sphere";
  let formTitle = "General Inquiry";
  let replyTo = data.email || undefined;

  let fieldsHtml = "";

  if (formType === "partner_inquiry") {
    subject = `🏫 School / Institutional Inquiry: ${data.schoolName || "Institution"} (${data.contactPerson || "Lead"})`;
    formTitle = "Institutional / School Partnership Inquiry";
    fieldsHtml = `
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600; width: 35%;">School / Institution:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff; font-weight: bold;">${data.schoolName || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Contact Person:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff;">${data.contactPerson || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Official Email:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #FF7711;"><a href="mailto:${data.email}" style="color: #FF7711; text-decoration: none;">${data.email || "N/A"}</a></td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Phone / WhatsApp:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #38BDF8;"><a href="tel:${data.phone}" style="color: #38BDF8; text-decoration: none;">${data.phone || "N/A"}</a></td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">City / State:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff;">${data.city || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Primary Focus:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #4ADE80; font-weight: bold;">${data.interest || "N/A"}</td></tr>
      ${data.message ? `<tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Remarks / Notes:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #e0e0e0; white-space: pre-wrap;">${data.message}</td></tr>` : ""}
    `;
  } else if (formType === "center_trial_booking") {
    subject = `🎯 Free Trial Demo Booking: ${data.studentName || "Student"} (Parent: ${data.parentName || "Parent"})`;
    formTitle = "Center Visit & Free Trial Demo Booking";
    fieldsHtml = `
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600; width: 35%;">Parent / Guardian:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff; font-weight: bold;">${data.parentName || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Student / Child:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #FF7711; font-weight: bold;">${data.studentName || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Grade / Level:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff;">${data.studentGrade || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Contact Phone:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #38BDF8;"><a href="tel:${data.phone}" style="color: #38BDF8; text-decoration: none;">${data.phone || "N/A"}</a></td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Interested Track:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #4ADE80; font-weight: bold;">${data.interestedTrack || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Center Location:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff;">Patna Learning Center (NC/10B, Kankarbagh)</td></tr>
    `;
  } else if (formType === "newsletter_subscription") {
    subject = `📬 New Newsletter Subscriber: ${data.email}`;
    formTitle = "Newsletter & Community Subscription";
    fieldsHtml = `
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600; width: 35%;">Subscriber Email:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #FF7711; font-weight: bold;"><a href="mailto:${data.email}" style="color: #FF7711; text-decoration: none;">${data.email}</a></td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Source:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff;">Website Community Banner</td></tr>
    `;
  } else if (formType === "course_inquiry") {
    subject = `📚 Course Curriculum Inquiry: ${data.courseTitle || "Course"}`;
    formTitle = "Course Curriculum Inquiry";
    fieldsHtml = `
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600; width: 35%;">Selected Course:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #FF7711; font-weight: bold;">${data.courseTitle || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Name:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #ffffff;">${data.parentOrStudentName || "N/A"}</td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Email:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #FF7711;"><a href="mailto:${data.email}" style="color: #FF7711; text-decoration: none;">${data.email || "N/A"}</a></td></tr>
      <tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Phone:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #38BDF8;"><a href="tel:${data.phone}" style="color: #38BDF8; text-decoration: none;">${data.phone || "N/A"}</a></td></tr>
      ${data.notes ? `<tr><td style="padding: 10px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600;">Notes:</td><td style="padding: 10px; border-bottom: 1px solid #282828; color: #e0e0e0; white-space: pre-wrap;">${data.notes}</td></tr>` : ""}
    `;
  }

  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0c; color: #f0f0f0; margin: 0; padding: 24px; }
          .container { max-width: 620px; margin: 0 auto; background-color: #141414; border: 1px solid #262626; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.5); }
          .header { background: linear-gradient(135deg, #1f1f1f 0%, #0d0d0d 100%); border-bottom: 2px solid #FF7711; padding: 24px; text-align: center; }
          .header h1 { margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 1px; color: #ffffff; text-transform: uppercase; }
          .header p { margin: 6px 0 0 0; font-size: 12px; color: #FF7711; font-family: monospace; font-weight: bold; }
          .content { padding: 24px; }
          .badge { display: inline-block; padding: 6px 12px; border-radius: 8px; background-color: #222222; border: 1px solid #FF7711; color: #FF7711; font-size: 12px; font-family: monospace; font-weight: bold; margin-bottom: 18px; }
          table { width: 100%; border-collapse: collapse; font-size: 13px; }
          .footer { background-color: #0e0e0e; border-top: 1px solid #202020; padding: 16px 24px; text-align: center; font-size: 11px; color: #666666; font-family: monospace; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>NARASIMHA SKILL SPHERE</h1>
            <p>LEAD & INQUIRY NOTIFICATION</p>
          </div>
          <div class="content">
            <div class="badge">${formTitle}</div>
            <table>
              ${fieldsHtml}
              <tr>
                <td style="padding: 10px; color: #666666; font-size: 11px; font-family: monospace;">Submitted At:</td>
                <td style="padding: 10px; color: #888888; font-size: 11px; font-family: monospace;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td>
              </tr>
              ${data.pageUrl ? `<tr><td style="padding: 10px; color: #666666; font-size: 11px; font-family: monospace;">Page Origin:</td><td style="padding: 10px; color: #888888; font-size: 11px; font-family: monospace;">${data.pageUrl}</td></tr>` : ""}
            </table>
          </div>
          <div class="footer">
            Delivered directly to ${RECIPIENT_EMAIL} • Narasimha Skill Sphere Web Service
          </div>
        </div>
      </body>
    </html>
  `;

  return { subject, html, replyTo };
}

// Vercel Serverless Function Handler
export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed. Use POST." });
  }

  try {
    const data = req.body || {};
    const { subject, html, replyTo } = generateEmailHtml(data);

    const mailOptions = {
      from: `"NSS Portal" <${SMTP_USER}>`,
      to: RECIPIENT_EMAIL,
      replyTo: replyTo || undefined,
      subject,
      html,
    };

    const info = await mailTransporter.sendMail(mailOptions);
    console.log("[SMTP] Email dispatched successfully:", info.messageId);

    return res.status(200).json({
      success: true,
      message: "Notification email dispatched successfully.",
      messageId: info.messageId,
    });
  } catch (error: any) {
    console.error("[SMTP Error]:", error);
    return res.status(500).json({
      error: error?.message || "Failed to send email via SMTP transporter.",
    });
  }
}
