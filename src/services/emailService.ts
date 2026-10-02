/**
 * Centralized Email Service for Narasimha Skill Sphere
 * Handles form submissions and dispatches formatted emails to the designated inbox.
 */

export type FormType =
  | "partner_inquiry"
  | "center_trial_booking"
  | "newsletter_subscription"
  | "course_inquiry";

export interface PartnerInquiryData {
  formType: "partner_inquiry";
  schoolName: string;
  contactPerson: string;
  email: string;
  phone: string;
  city: string;
  interest: string;
  message?: string;
}

export interface CenterTrialBookingData {
  formType: "center_trial_booking";
  parentName: string;
  studentName: string;
  studentGrade: string;
  phone: string;
  interestedTrack: string;
  centerLocation?: string;
  notes?: string;
}

export interface NewsletterSubscriptionData {
  formType: "newsletter_subscription";
  email: string;
}

export interface CourseInquiryData {
  formType: "course_inquiry";
  courseTitle: string;
  parentOrStudentName: string;
  email: string;
  phone: string;
  notes?: string;
}

export type EmailSubmissionPayload =
  | PartnerInquiryData
  | CenterTrialBookingData
  | NewsletterSubscriptionData
  | CourseInquiryData;

export interface EmailResponse {
  success: boolean;
  message: string;
  details?: unknown;
}

/**
 * Sends a structured email request to the backend API endpoint.
 */
export async function sendEmailNotification(
  payload: EmailSubmissionPayload
): Promise<EmailResponse> {
  try {
    const timestamp = new Date().toISOString();
    const fullPayload = {
      ...payload,
      submittedAt: timestamp,
      pageUrl: typeof window !== "undefined" ? window.location.href : "",
    };

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(fullPayload),
    });

    const result = await response.json().catch(() => null);

    if (!response.ok) {
      const errorMsg =
        result?.error ||
        result?.message ||
        `Failed to send email (Status ${response.status})`;
      console.error("[EmailService] Submission error:", errorMsg);
      return {
        success: false,
        message: errorMsg,
      };
    }

    return {
      success: true,
      message:
        result?.message ||
        "Inquiry received successfully! Our team will contact you shortly.",
      details: result,
    };
  } catch (error: any) {
    console.error("[EmailService] Network or system error:", error);
    return {
      success: false,
      message:
        error?.message ||
        "Unable to connect to email server. Please verify your connection or reach out via WhatsApp/Phone.",
    };
  }
}
