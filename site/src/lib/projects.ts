import type { ProjectVisualConfig } from "@/components/project-phone-visual";

export interface Project {
  slug: string;
  category: string;
  title: string;
  description: string;
  /** which side the illustration sits on in the alternating layout */
  imageSide: "left" | "right";
  accent: string;
  visual: ProjectVisualConfig;
  /** override the default /work/[slug] link on the homepage card */
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    slug: "gold-loan-origination-system",
    category: "Enterprise SaaS · Fintech",
    title: "Gold Loan Origination System",
    description:
      "Redesigned a 47-step origination flow for a leading NBFC, reducing loan disbursal time by 62% and enabling ₹500Cr+ in disbursals. Built on a custom design system shared across 6 internal products.",
    imageSide: "left",
    accent: "#AD6800",
    visual: {
      panelTint: "#F6F1E6",
      accent: "#B9790E",
      screenTint: "#FBF0D6",
      screens: ["form", "list", "chart"],
    },
  },
  {
    slug: "easy-pay-parking-app",
    category: "Mobile Application · Parking & Payments",
    title: "Easy Pay — Smart Parking App",
    description:
      "Designed a seamless parking payment experience letting drivers find, reserve, and pay for spots in seconds. Real-time spot availability, contactless payment, and automatic session tracking cut average check-in time to under 15 seconds.",
    imageSide: "right",
    accent: "#64B986",
    visual: {
      panelTint: "#EFF7F2",
      accent: "#64B986",
      screenTint: "#D4EDDF",
      screens: ["list", "form", "chart"],
    },
  },
  {
    slug: "banking-analytics-dashboard",
    category: "Data Visualization · Analytics",
    title: "Banking Analytics Dashboard",
    description:
      "A real-time analytics platform for banking executives covering portfolio health, NPA monitoring, regional performance, and predictive risk scoring. First AI-augmented dashboard in the product suite.",
    imageSide: "left",
    accent: "#1A75B7",
    visual: {
      panelTint: "#E9E7E3",
      accent: "#3E9BE0",
      screenTint: "rgba(255,255,255,0.08)",
      screens: ["chart", "chart", "chart"],
      darkScreen: true,
    },
  },
  {
    slug: "mobile-banking-app",
    category: "Mobile Application",
    title: "Mobile Banking App",
    description:
      "End-to-end redesign of a mobile banking app for 500K+ users across iOS and Android. Accessibility-first approach, the first WCAG AA-compliant product in the portfolio. Redesigned onboarding cut drop-off by 38%.",
    imageSide: "right",
    accent: "#006060",
    visual: {
      panelTint: "#EAF5F3",
      accent: "#0F8A7E",
      screenTint: "#D9EFEC",
      screens: ["form", "list", "chart"],
    },
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
