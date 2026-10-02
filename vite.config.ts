import react from "@vitejs/plugin-react";
import { defineConfig, type Plugin } from "vite";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

function emailApiDevPlugin(): Plugin {
  return {
    name: "email-api-dev-server",
    configureServer(server) {
      server.middlewares.use("/api/send-email", async (req, res) => {
        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ error: "Method not allowed" }));
          return;
        }

        let body = "";
        req.on("data", (chunk: any) => {
          body += chunk;
        });

        req.on("end", async () => {
          try {
            const data = JSON.parse(body || "{}");
            const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
            const SMTP_PORT = parseInt(process.env.SMTP_PORT || "465", 10);
            const SMTP_SECURE = process.env.SMTP_SECURE !== "false";
            const SMTP_USER = process.env.SMTP_USER || "narasimhasphillsphere@gmail.com";
            const SMTP_PASS = process.env.SMTP_PASS || "srqnhsejhzizijnt";
            const RECIPIENT_EMAIL =
              process.env.RECIPIENT_EMAIL || "narasimhasphillsphere@gmail.com";

            const transporter = nodemailer.createTransport({
              host: SMTP_HOST,
              port: SMTP_PORT,
              secure: SMTP_SECURE,
              auth: {
                user: SMTP_USER.trim(),
                pass: SMTP_PASS.replace(/\s+/g, ""),
              },
            });

            const formType = data.formType || "general_inquiry";
            let subject = "New Inquiry - Narasimha Skill Sphere";
            let formTitle = "General Inquiry";

            if (formType === "partner_inquiry") {
              subject = `🏫 School Inquiry: ${data.schoolName || "Institution"} (${data.contactPerson || "Lead"})`;
              formTitle = "Institutional / School Partnership Inquiry";
            } else if (formType === "center_trial_booking") {
              subject = `🎯 Free Trial Booking: ${data.studentName || "Student"} (Parent: ${data.parentName || "Parent"})`;
              formTitle = "Center Visit & Free Trial Demo Booking";
            } else if (formType === "newsletter_subscription") {
              subject = `📬 Newsletter Subscriber: ${data.email}`;
              formTitle = "Newsletter & Community Subscription";
            } else if (formType === "course_inquiry") {
              subject = `📚 Course Inquiry: ${data.courseTitle || "Course"}`;
              formTitle = "Course Curriculum Inquiry";
            }

            let fieldsHtml = "";
            for (const [key, value] of Object.entries(data)) {
              if (
                key === "formType" ||
                key === "submittedAt" ||
                key === "pageUrl"
              )
                continue;
              const formattedKey = key
                .replace(/([A-Z])/g, " $1")
                .replace(/^./, (str) => str.toUpperCase());
              fieldsHtml += `<tr><td style="padding: 9px 12px; border-bottom: 1px solid #282828; color: #888888; font-weight: 600; width: 35%;">${formattedKey}:</td><td style="padding: 9px 12px; border-bottom: 1px solid #282828; color: #ffffff; font-weight: 500;">${value}</td></tr>`;
            }

            const html = `
              <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #0c0c0c; color: #f0f0f0; padding: 24px;">
                <div style="max-width: 600px; margin: 0 auto; background-color: #141414; border: 1px solid #282828; border-radius: 14px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.6);">
                  <div style="background: linear-gradient(135deg, #1c1c1c 0%, #0e0e0e 100%); border-bottom: 2px solid #FF7711; padding: 22px; text-align: center;">
                    <h2 style="margin: 0; color: #ffffff; text-transform: uppercase; letter-spacing: 1.5px; font-size: 18px;">NARASIMHA SKILL SPHERE</h2>
                    <p style="margin: 6px 0 0; color: #FF7711; font-family: monospace; font-size: 12px; font-weight: bold; letter-spacing: 0.5px;">${formTitle}</p>
                  </div>
                  <div style="padding: 24px;">
                    <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                      ${fieldsHtml}
                      <tr><td style="padding: 9px 12px; color: #666666; font-size: 11px; font-family: monospace;">Timestamp:</td><td style="padding: 9px 12px; color: #888888; font-size: 11px; font-family: monospace;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })} IST</td></tr>
                      ${data.pageUrl ? `<tr><td style="padding: 9px 12px; color: #666666; font-size: 11px; font-family: monospace;">Origin:</td><td style="padding: 9px 12px; color: #888888; font-size: 11px; font-family: monospace;">${data.pageUrl}</td></tr>` : ""}
                    </table>
                  </div>
                  <div style="background: #0d0d0d; border-top: 1px solid #1f1f1f; padding: 14px; text-align: center; font-size: 11px; color: #666666; font-family: monospace;">
                    Delivered to ${RECIPIENT_EMAIL} • NSS Web Service
                  </div>
                </div>
              </div>
            `;

            const info = await transporter.sendMail({
              from: `"NSS Portal" <${SMTP_USER}>`,
              to: RECIPIENT_EMAIL,
              replyTo: data.email || undefined,
              subject,
              html,
            });

            console.log("[Dev Email Plugin] Sent message:", info.messageId);
            res.statusCode = 200;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                success: true,
                message: "Email sent successfully",
                messageId: info.messageId,
              })
            );
          } catch (err: any) {
            console.error("[Dev Email Plugin Error]:", err);
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                error: err.message || "Failed to send email in dev server",
              })
            );
          }
        });
      });
    },
  };
}

export default defineConfig({
  plugins: [react(), emailApiDevPlugin()],
});
