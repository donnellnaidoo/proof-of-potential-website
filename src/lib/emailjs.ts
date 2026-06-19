import emailjs from "@emailjs/browser";

export const EJS_SERVICE = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
export const EJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;

export const EJS_TEMPLATES = {
  notify: import.meta.env.VITE_EMAILJS_TEMPLATE_NOTIFY as string,
  reply: import.meta.env.VITE_EMAILJS_TEMPLATE_REPLY as string,
};

const enquiryEmailMap: Record<string, string> = {
  "General Enquiry": "hello@proofofpotential.co.za",
  Partnership: "partners@proofofpotential.co.za",
  Media: "media@proofofpotential.co.za",
  "Research Participation": "research@proofofpotential.co.za",
};

export function getEnquiryEmail(type: string): string {
  return enquiryEmailMap[type] ?? "hello@proofofpotential.co.za";
}

export function initEmailJS() {
  emailjs.init({ publicKey: EJS_PUBLIC_KEY });
}

export { emailjs };
