import Image from "next/image";
import { Reveal } from "../reveal";
import { MagneticLink } from "../magnetic-link";
import { NextProjectTeaser } from "./shared";
import type { Project } from "@/lib/projects";

const PROTOTYPE_URL =
  "https://www.figma.com/proto/ONbwSYpK1pl9BVdGLaezzn/Loan-Origination-System?page-id=4690%3A45693&node-id=11336-70446&viewport=-10116%2C-23611%2C0.24&t=Wwt8IAuiFGy22F0F-1&scaling=scale-down-width&content-scaling=fixed&starting-point-node-id=11336%3A70446";

const ACCENT = "#1A75B7";
const BG = "#F8F5EF";
const CARD = "#FFFFFF";
const BORDER = "rgba(26,22,20,0.08)";
const TEXT = "#1A1614";
const TEXT_MUTED = "#726B6C";

const heroStats = [
  { value: "15 min", label: "Average Application Time" },
  { value: "94%", label: "Customer Satisfaction" },
  { value: "3x", label: "Faster Processing" },
];

const toc = [
  "Overview",
  "Objectives",
  "Design Process",
  "Research",
  "Problem",
  "Audience",
  "User Flow",
  "IA",
  "Solutions",
  "Design System",
  "Final Designs",
];

const objectives = [
  {
    title: "Digital Transformation",
    body: "Move gold loan origination off paper entirely, into a single guided digital flow branch staff can run start to finish.",
  },
  {
    title: "Operational Efficiency",
    body: "Cut the time loan officers spend per application so branches can serve more customers without adding headcount.",
  },
  {
    title: "Customer Experience",
    body: "Make the process transparent — customers should always know their rate, their timeline, and where their gold is.",
  },
  {
    title: "Regulatory Compliance",
    body: "Preserve every RBI-mandated KYC, consent, and disclosure step exactly, with a clean audit trail behind the scenes.",
  },
];

const research = [
  { stat: "68%", body: "of applicants dropped off or paused midway through the legacy paper-based process" },
  { stat: "72%", body: "of loan officers named manual, repeated data entry as their single biggest frustration" },
  { stat: "3+ hrs", body: "average time a customer spent in-branch from application to disbursement" },
];

const personas = [
  {
    name: "Rajesh Kumar",
    age: 42,
    occupation: "Small Business Owner, Textile Shop",
    location: "Mumbai, Maharashtra",
    family: "Married, two children",
    quote:
      "I just want my gold valued fairly and my loan approved the same day — I don't have hours to spend at the branch during festival season.",
    photo: "/personas/rajesh.jpg",
    gradient: "linear-gradient(150deg,#8a5a2b 0%,#c98a3f 45%,#e8b869 100%)",
    background:
      "Rajesh runs a textile shop in Mumbai and relies on short-term gold loans to manage seasonal cash flow around festival season. He's pledged gold at his local branch for years, but every visit means re-explaining his details, waiting on a manual valuation, and hoping the paperwork doesn't get held up. He wants a process he can trust and finish quickly enough to get back to his shop.",
    goals: ["Same-day approval", "Transparent rates and charges", "Minimal paperwork per visit", "Confidence his gold is stored safely"],
    pains: ["Long approval times during peak season", "Hidden charges discovered only at disbursement", "Long branch wait times", "Uncertainty over how his gold is valued"],
    needs: ["A guided digital form with fewer repeated fields", "Clear upfront visibility into rate and rebate schedule", "A pledge receipt he can understand at a glance"],
    techNote: "Comfortable with smartphone apps and WhatsApp for business orders, but prefers simple, guided steps over free-form paperwork.",
  },
  {
    name: "Priya Sharma",
    age: 29,
    occupation: "Loan Officer, RAHI-Powered Branch",
    location: "Pune, Maharashtra",
    family: "Single, lives with parents",
    quote:
      "I want to help ten customers a day without re-typing the same KYC details ten times — every minute I save is a shorter queue at my counter.",
    photo: "/personas/priya.jpg",
    gradient: "linear-gradient(150deg,#12507a 0%,#1a75b7 45%,#5fa8d8 100%)",
    background:
      "Priya processes 10–15 gold loan applications a day at a busy branch in Pune. Her biggest frustration isn't the customers — it's the system: disconnected screens, manual valuation calculations, and no single view of where an application actually stands. She wants tools that keep pace with her, not slow her down.",
    goals: ["Process applications faster without cutting corners", "Fewer manual entry errors", "Meet daily disbursement targets", "Stay fully compliant without extra effort"],
    pains: ["Manual, repeated data entry across screens", "Verification delays waiting on other departments", "Calculation errors under time pressure", "Juggling multiple disconnected systems"],
    needs: ["A single guided flow instead of scattered screens", "Automatic gold valuation instead of manual math", "A persistent view of every application's status"],
    techNote: "Highly proficient across multiple internal banking systems and picks up new interfaces quickly, but has little patience for redundant steps.",
  },
];

const journeyPhases = ["Discover", "Apply", "Verify", "Approve", "Receive"];

const flowSteps = [
  { num: "01", label: "Entry Point", type: "start" },
  { num: "02", label: "Application Start", type: "process" },
  { num: "03", label: "Personal Details", type: "process" },
  { num: "04", label: "Nominee Info", type: "process" },
  { num: "05", label: "Gold Details", type: "process" },
  { num: "06", label: "Asset Entry", type: "process" },
  { num: "07", label: "Consents", type: "process" },
  { num: "08", label: "Documents", type: "process" },
  { num: "09", label: "System Decision", type: "decision" },
  { num: "10", label: "Approval", type: "start" },
  { num: "11", label: "Disbursement", type: "start" },
];

const screens = [
  { src: "/gold-loan/screen-applicant-details.jpg", title: "Personal Information Capture", desc: "Applicant details, KYC identifiers, and address in one guided form." },
  { src: "/gold-loan/screen-nominee-details.jpg", title: "Nominee Details", desc: "Nominee identity and contact information for the pledge." },
  { src: "/gold-loan/screen-gold-ownership.jpg", title: "Gold Ownership Verification", desc: "Ownership declarations and provenance checks before valuation." },
  { src: "/gold-loan/screen-asset-details.jpg", title: "Asset Details — Ornaments", desc: "Per-ornament weight, carat, and deduction capture for accurate valuation." },
  { src: "/gold-loan/screen-vaulting.jpg", title: "Vault & Packet Management", desc: "Unassigned ornaments grouped into sealed, trackable vault packets." },
  { src: "/gold-loan/screen-sourcing.jpg", title: "Consents & Legal Compliance", desc: "Mandatory RBI-compliant consents, presented plainly and tracked individually." },
  { src: "/gold-loan/screen-documents.jpg", title: "Document Management", desc: "Pre-sanction KYC and income document checklist with live status." },
  { src: "/gold-loan/screen-pledge-receipt.jpg", title: "Loan Approval & Pledge Receipt", desc: "Final loan amount, rebate schedule, and charges in a single receipt." },
];

const wireframeSteps = [
  "Sourcing",
  "Applicant Details",
  "Nominee Details",
  "Gold Ownership",
  "Asset Details",
  "Vaulting",
  "Documents",
  "Offer Acceptance",
];

const solutions = [
  { title: "Intelligent Gold Valuation", body: "Live IBJA-rate calculations update loan eligibility the moment weight and carat are entered." },
  { title: "Smart Document Verification", body: "A single Pre-Sanction / Pre-Disbursement / Post-Disbursement checklist replaces scattered paper folders." },
  { title: "Real-Time Progress Tracking", body: "A persistent stage rail shows loan officers exactly where every application stands." },
  { title: "Transparent Pricing", body: "Rate, rebate schedule, and every charge are shown up front on the pledge receipt, not buried in fine print." },
];

const principles = [
  { title: "Trust", body: "Every number is shown, never hidden — customers see the same figures the system uses." },
  { title: "Speed", body: "No screen asks for data the system already has. Fewer fields, fewer repeats." },
  { title: "Clarity", body: "One task per screen, one obvious next action, always." },
];

const designProcessStages = [
  { key: "Empathize", color: "#2F9E68" },
  { key: "Define", color: "#2E76A8" },
  { key: "Ideate", color: "#8B5CF6" },
  { key: "Prototype", color: "#D89A1D" },
  { key: "Test", color: "#C0392B" },
] as const;

function stageIcon(key: string) {
  switch (key) {
    case "Empathize":
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <circle cx="15" cy="15" r="9" stroke="white" strokeWidth="2" />
          <path d="M21.5 21.5L27 27" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Define":
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M9 5H21L25 9V29H9V5Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M13 13H21M13 18H21M13 23H18" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Ideate":
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M17 5C12 5 9 8.5 9 13C9 16 10.5 18 12.5 19.5V23H21.5V19.5C23.5 18 25 16 25 13C25 8.5 22 5 17 5Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <path d="M13.5 27H20.5M14.5 29.5H19.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case "Prototype":
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M13 6C13 4.5 14.5 3.5 16 4L24 8.5C25.5 9.3 25.5 11.5 24 12.3L21 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M13 6V20C13 22.5 15 24.5 17 26.5L19 28.5C20 29.5 21.5 28.7 21.3 27.3L20 20" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "Test":
      return (
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <path d="M4 17C7 11 12 8 17 8C22 8 27 11 30 17C27 23 22 26 17 26C12 26 7 23 4 17Z" stroke="white" strokeWidth="2" strokeLinejoin="round" />
          <circle cx="17" cy="17" r="4" stroke="white" strokeWidth="2" />
        </svg>
      );
    default:
      return null;
  }
}

function DesignProcessDiagram() {
  // Fixed layout: 5 circles of 120px, 70px gaps -> total 880px, centers at 60/250/440/630/820, y=60.
  return (
    <div style={{ position: "relative", maxWidth: 880, margin: "0 auto 8px" }}>
      <svg
        width="880"
        height="130"
        viewBox="0 0 880 130"
        style={{ position: "absolute", top: -56, left: 0, width: "100%", height: 130, pointerEvents: "none" }}
      >
        <path d="M120,60 H190" stroke="#8A8580" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#arrowFwd)" />
        <path d="M310,60 H380" stroke="#8A8580" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#arrowFwd)" />
        <path d="M500,60 H570" stroke="#8A8580" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#arrowFwd)" />
        <path d="M690,60 H760" stroke="#8A8580" strokeWidth="1.4" strokeDasharray="3 3" markerEnd="url(#arrowFwd)" />
        <path d="M630,60 Q535,4 440,60" stroke="#8A8580" strokeWidth="1.4" strokeDasharray="4 4" fill="none" markerEnd="url(#arrowIterate)" />
        <path d="M820,60 Q725,4 630,60" stroke="#8A8580" strokeWidth="1.4" strokeDasharray="4 4" fill="none" markerEnd="url(#arrowIterate)" />
        <defs>
          <marker id="arrowFwd" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#8A8580" />
          </marker>
          <marker id="arrowIterate" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto">
            <path d="M0,0 L7,3.5 L0,7 Z" fill="#8A8580" />
          </marker>
        </defs>
        <text x="535" y="14" textAnchor="middle" fontSize="10" fontWeight={700} letterSpacing="0.06em" fill="#726B6C">ITERATE</text>
        <text x="725" y="14" textAnchor="middle" fontSize="10" fontWeight={700} letterSpacing="0.06em" fill="#726B6C">ITERATE</text>
      </svg>
      <div style={{ display: "flex", justifyContent: "flex-start", gap: 70 }}>
        {designProcessStages.map((stage) => (
          <div key={stage.key} style={{ width: 120, textAlign: "center" }}>
            <div
              style={{
                width: 120,
                height: 120,
                borderRadius: "50%",
                background: stage.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              {stageIcon(stage.key)}
            </div>
            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 17, color: stage.color }}>{stage.key}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonaSectionHeader({ label }: { label: string }) {
  return (
    <div style={{ background: "#F2EDE4", padding: "8px 20px", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 700, color: TEXT }}>
      {label}
    </div>
  );
}

function PersonaProfileCard({ persona }: { persona: (typeof personas)[number] }) {
  return (
    <div style={{ borderRadius: 16, overflow: "hidden", border: `1px solid ${BORDER}`, background: CARD }}>
      <div
        style={{
          position: "relative",
          minHeight: 300,
          padding: 28,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          overflow: "hidden",
        }}
      >
        <Image src={persona.photo} alt={persona.name} fill style={{ objectFit: "cover", zIndex: 0 }} sizes="(max-width: 768px) 100vw, 900px" />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.15) 45%, rgba(0,0,0,0.75) 100%), ${persona.gradient}`,
            backgroundBlendMode: "multiply",
            opacity: 0.55,
            zIndex: 1,
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, transparent 40%, rgba(0,0,0,0.65) 100%)", zIndex: 1, pointerEvents: "none" }} />
        <div
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            maxWidth: 230,
            background: "rgba(255,255,255,0.9)",
            borderRadius: 10,
            padding: "14px 16px",
            zIndex: 2,
          }}
        >
          <div style={{ fontFamily: "var(--font-serif)", fontSize: 30, lineHeight: 0.5, color: ACCENT, marginBottom: 6 }}>&ldquo;</div>
          <p style={{ fontSize: 12, fontStyle: "italic", color: TEXT, lineHeight: 1.5 }}>{persona.quote}</p>
        </div>
        <h3 style={{ position: "relative", zIndex: 2, fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, color: "white", marginBottom: 10, textShadow: "0 1px 8px rgba(0,0,0,0.4)" }}>{persona.name}</h3>
        <div style={{ position: "relative", zIndex: 2, fontSize: 12.5, color: "rgba(255,255,255,0.95)", lineHeight: 1.7, textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}>
          <div><b>Age:</b> {persona.age}</div>
          <div><b>Occupation:</b> {persona.occupation}</div>
          <div><b>Location:</b> {persona.location}</div>
          <div><b>Family:</b> {persona.family}</div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}>
        <div>
          <PersonaSectionHeader label="Background" />
          <div style={{ padding: 20 }}>
            <p style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.65 }}>{persona.background}</p>
          </div>
          <PersonaSectionHeader label="Needs" />
          <div style={{ padding: 20 }}>
            {persona.needs.map((n) => (
              <div key={n} style={{ display: "flex", gap: 8, fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5, marginBottom: 10 }}>
                <span style={{ color: ACCENT }}>•</span> {n}
              </div>
            ))}
          </div>
        </div>
        <div style={{ borderLeft: `1px solid ${BORDER}` }}>
          <PersonaSectionHeader label="Goals" />
          <div style={{ padding: 20 }}>
            {persona.goals.map((g) => (
              <div key={g} style={{ display: "flex", gap: 8, fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5, marginBottom: 10 }}>
                <span style={{ color: ACCENT }}>•</span> {g}
              </div>
            ))}
          </div>
          <PersonaSectionHeader label="Challenges" />
          <div style={{ padding: 20 }}>
            {persona.pains.map((p) => (
              <div key={p} style={{ display: "flex", gap: 8, fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5, marginBottom: 10 }}>
                <span style={{ color: "#C1502E" }}>•</span> {p}
              </div>
            ))}
          </div>
          <PersonaSectionHeader label="Technological Proficiencies" />
          <div style={{ padding: "20px 20px 24px" }}>
            <p style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.65 }}>{persona.techNote}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionEyebrow({ number, label }: { number: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: ACCENT }}>{number}</span>
      <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: TEXT_MUTED }}>{label}</span>
      <div style={{ flex: 1, height: 1, background: BORDER }} />
    </div>
  );
}

function LaptopMockup({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ padding: "0 24px" }}>
      <div
        style={{
          borderRadius: "14px 14px 4px 4px",
          background: "linear-gradient(145deg,#2A2D42,#15172400)",
          border: "1px solid rgba(255,255,255,0.12)",
          padding: "10px 10px 0",
          boxShadow: "0 30px 60px rgba(26,22,20,0.16)",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 6 }}>
          <div style={{ width: 50, height: 4, borderRadius: 2, background: "rgba(255,255,255,0.15)" }} />
        </div>
        <div style={{ borderRadius: "6px 6px 0 0", overflow: "hidden", position: "relative", aspectRatio: "16/10", background: "#000" }}>
          <Image src={src} alt={alt} fill style={{ objectFit: "cover", objectPosition: "top" }} sizes="(max-width: 768px) 100vw, 640px" />
        </div>
      </div>
      <div style={{ height: 10, background: "linear-gradient(#2A2D42,#0F1120)", borderRadius: "0 0 10px 10px", margin: "0 -4px" }} />
    </div>
  );
}

function WireframeCard({ step, index, active }: { step: string; index: number; active: boolean }) {
  return (
    <div style={{ flex: "0 0 auto", width: 168 }}>
      <div
        style={{
          background: "white",
          borderRadius: 20,
          border: "1px solid rgba(0,0,0,0.1)",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
        }}
      >
        <div style={{ padding: "14px 14px 0", display: "flex", justifyContent: "space-between", fontSize: 9, color: "#8A8A8A", fontFamily: "var(--font-mono)" }}>
          <span>9:41</span>
          <span>●●●</span>
        </div>
        <div style={{ padding: 14 }}>
          <div
            style={{
              background: "#ECECEA",
              borderRadius: 10,
              height: 96,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 12,
            }}
          >
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
              <circle cx="12" cy="11" r="3.4" stroke="#B7B4AC" strokeWidth="1.6" />
              <path d="M4 27L13 17L19 22.5L24 17L30 25" stroke="#B7B4AC" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              <rect x="2.5" y="2.5" width="29" height="29" rx="4" stroke="#B7B4AC" strokeWidth="1.4" />
            </svg>
          </div>
          <div style={{ height: 8, width: "70%", borderRadius: 4, background: "#1A1614", marginBottom: 8 }} />
          <div style={{ height: 5, width: "90%", borderRadius: 3, background: "#DCD9D3", marginBottom: 4 }} />
          <div style={{ height: 5, width: "60%", borderRadius: 3, background: "#DCD9D3", marginBottom: 14 }} />
          <div style={{ height: 24, borderRadius: 6, background: ACCENT }} />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 10 }}>
        <span style={{ fontFamily: "var(--font-mono)", fontSize: 10, color: ACCENT, fontWeight: 600 }}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: "#1A1614" }}>{step}</span>
        {active && <span style={{ width: 5, height: 5, borderRadius: "50%", background: ACCENT }} />}
      </div>
    </div>
  );
}

export function GoldLoanCaseStudy({ next }: { project: Project; next: Project }) {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section style={{ position: "relative", minHeight: 640, background: BG, overflow: "hidden" }}>
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 680,
            height: 680,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,110,74,0.24) 0%, rgba(255,150,100,0.1) 50%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 40,
            right: 160,
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(26,117,183,0.18) 0%, rgba(26,117,183,0.06) 50%, transparent 70%)",
            filter: "blur(70px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -160,
            left: -120,
            width: 480,
            height: 480,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(250,180,20,0.18) 0%, rgba(250,210,80,0.06) 50%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div style={{ position: "relative", zIndex: 1, padding: "160px 72px 80px", maxWidth: 1200, margin: "0 auto" }}>
          <MagneticLink
            href="/#projects"
            style={{ display: "flex", width: "fit-content", alignItems: "center", gap: 8, fontSize: 13, color: TEXT_MUTED, marginBottom: 32 }}
          >
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M10 6H2M5.5 2.5L2 6L5.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Back to Work
          </MagneticLink>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 24, marginBottom: 24 }}>
            <Reveal
              as="h1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(40px,6vw,72px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: TEXT,
                maxWidth: 700,
              }}
            >
              Gold Loan Origination System
            </Reveal>
            <div style={{ background: TEXT, color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", padding: "10px 18px", borderRadius: 8, whiteSpace: "nowrap" }}>
              CASE STUDY
            </div>
          </div>
          <Reveal as="p" delay={80} style={{ fontSize: "clamp(16px,1.6vw,19px)", color: TEXT_MUTED, maxWidth: 620, marginBottom: 56, lineHeight: 1.6 }}>
            Transforming traditional gold loan processes into a seamless digital experience.
          </Reveal>
          <Reveal delay={140} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 640 }}>
            {heroStats.map((s) => (
              <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 18px" }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 28, color: ACCENT, marginBottom: 8 }}>{s.value}</div>
                <div style={{ fontSize: 12.5, color: TEXT_MUTED, lineHeight: 1.4 }}>{s.label}</div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ── Table of contents ───────────────────────────────────── */}
      <section style={{ background: "#F2EDE4", borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "20px 72px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10 }}>
          {toc.map((item) => (
            <span
              key={item}
              style={{
                fontSize: 12.5,
                padding: "7px 14px",
                borderRadius: 100,
                border: `1px solid rgba(26,22,20,0.15)`,
                color: TEXT_MUTED,
                background: CARD,
              }}
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <div style={{ background: BG }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "96px 72px" }}>
          {/* 01 Overview */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="01" label="Project Overview" />
            <p style={{ fontSize: "clamp(18px,2vw,24px)", color: TEXT, lineHeight: 1.6, maxWidth: 780, fontFamily: "var(--font-heading)", fontWeight: 400 }}>
              RAHI Platform Technologies runs the gold loan origination flow behind hundreds of NBFC branch counters. This
              case study covers the redesign: from a paper-first process re-typed into disconnected screens, to one
              guided digital journey loan officers can complete in minutes, not hours.
            </p>
          </Reveal>

          {/* 02 Objectives */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="02" label="Business Objectives" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {objectives.map((o) => (
                <div key={o.title} className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: ACCENT, marginBottom: 8 }}>{o.title}</div>
                  <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{o.body}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 03 Design Process */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="03" label="My Design Process" />
            <div style={{ padding: "56px 0 8px" }}>
              <DesignProcessDiagram />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, marginTop: 40 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "#2F9E68", marginBottom: 6 }}>
                  Empathize
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 24, color: TEXT }}>Research</h3>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, marginBottom: 8 }}>
                  Competitive Market Analysis
                </div>
                <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.7 }}>
                  The project began with an audit of how four other NBFC and bank platforms handled digital gold loan
                  origination. All four had digitized parts of the flow, but none offered real-time valuation
                  transparency, and every one still forced customers back to a branch counter for physical gold
                  verification — the exact friction point loan officers named most often in interviews.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 04 Research */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="04" label="User Research & Insights" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {research.map((r) => (
                <div key={r.stat} style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 18 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 32, color: TEXT, marginBottom: 8 }}>{r.stat}</div>
                  <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{r.body}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 04 Problem statement */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="05" label="Problem Statement" />
            <p style={{ fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: "clamp(22px,2.6vw,32px)", color: TEXT, lineHeight: 1.45, maxWidth: 820 }}>
              How might we redesign gold loan origination so loan officers can process applications faster and with
              full confidence, without compromising RBI compliance or the trust customers place in us?
            </p>
          </Reveal>

          {/* 05 Target audience */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="06" label="Target Audience" />
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {personas.map((p) => (
                <PersonaProfileCard key={p.name} persona={p} />
              ))}
            </div>
          </Reveal>

          {/* 06 User Flow & Journey */}
          <Reveal style={{ marginBottom: 56 }}>
            <SectionEyebrow number="07" label="User Flow & Journey" />
            <div style={{ display: "flex", justifyContent: "space-between", gap: 8, marginBottom: 48 }}>
              {journeyPhases.map((phase, i) => (
                <div key={phase} style={{ flex: 1, textAlign: "center", position: "relative" }}>
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: ACCENT,
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: 14,
                      margin: "0 auto 10px",
                    }}
                  >
                    {i + 1}
                  </div>
                  <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{phase}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Flow diagram (b&w) */}
          <Reveal style={{ marginBottom: 56, background: "white", border: `1px solid ${BORDER}`, borderRadius: 16, padding: 32 }}>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 10, justifyContent: "center" }}>
              {flowSteps.map((step, i) => (
                <div key={step.num} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  {step.type === "decision" ? (
                    <div style={{ width: 90, height: 90, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <div
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: 4,
                          transform: "rotate(45deg)",
                          background: "#4B4B4B",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <span
                          style={{
                            display: "inline-block",
                            transform: "rotate(-45deg)",
                            color: "white",
                            fontSize: 10,
                            fontWeight: 600,
                            textAlign: "center",
                            width: 60,
                          }}
                        >
                          {step.label}
                        </span>
                      </div>
                    </div>
                  ) : (
                    <div
                      style={{
                        padding: "10px 16px",
                        borderRadius: 8,
                        background: step.type === "process" ? "#111111" : "white",
                        border: step.type === "start" ? "1.5px solid #111111" : "1.5px solid transparent",
                        color: step.type === "process" ? "white" : "#111111",
                        fontSize: 11,
                        fontWeight: 600,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {step.label}
                    </div>
                  )}
                  {i < flowSteps.length - 1 && (
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M1 4H13M9 1L13 4L9 7" stroke="#111111" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* 8-step flow with screenshots */}
          <div style={{ display: "flex", flexDirection: "column", gap: 64, marginBottom: 96 }}>
            {screens.map((screen, i) => (
              <Reveal
                key={screen.title}
                style={{
                  display: "flex",
                  flexDirection: i % 2 === 0 ? "row" : "row-reverse",
                  gap: 48,
                  alignItems: "center",
                }}
              >
                <div style={{ flex: "0 0 55%" }}>
                  <LaptopMockup src={screen.src} alt={screen.title} />
                </div>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: TEXT, marginBottom: 12 }}>
                    {screen.title}
                  </h3>
                  <p style={{ fontSize: 14.5, color: TEXT_MUTED, lineHeight: 1.7 }}>{screen.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 07 Information Architecture */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="08" label="Information Architecture" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                { title: "Home & Dashboard", items: ["Branch overview", "Pending applications", "Gold rate master", "Alerts & tasks"] },
                { title: "Application Flow", items: ["Sourcing → Disbursement", "Applicant & nominee", "Gold ownership & assets", "Offer acceptance"] },
                { title: "Account & Support", items: ["Loan servicing", "Collections", "Vault management", "Reports & calculators"] },
              ].map((col) => (
                <div key={col.title} className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: TEXT, marginBottom: 14 }}>{col.title}</div>
                  {col.items.map((it) => (
                    <div key={it} style={{ fontSize: 13, color: TEXT_MUTED, padding: "6px 0", borderTop: `1px solid ${BORDER}` }}>
                      {it}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          {/* 08 Design Solutions */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="09" label="Design Solutions" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {solutions.map((s) => (
                <div key={s.title} className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: ACCENT, marginBottom: 8 }}>{s.title}</div>
                  <div style={{ fontSize: 13.5, color: TEXT_MUTED, lineHeight: 1.6 }}>{s.body}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 09 Design System */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="10" label="Design System" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 24 }}>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 14 }}>Colour</div>
                <div style={{ display: "flex", gap: 8 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: TEXT }} />
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: ACCENT }} />
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "#F2EDE4", border: `1px solid ${BORDER}` }} />
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "white", border: `1px solid ${BORDER}` }} />
                </div>
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 14 }}>Typography</div>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, color: TEXT }}>Sora</div>
                <div style={{ fontSize: 13, color: TEXT_MUTED }}>Inter — body text</div>
              </div>
              <div style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 14 }}>Components</div>
                <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <div style={{ padding: "6px 14px", borderRadius: 6, background: ACCENT, color: "white", fontSize: 11, fontWeight: 700 }}>Button</div>
                  <div style={{ padding: "6px 14px", borderRadius: 6, border: `1px solid ${BORDER}`, color: TEXT, fontSize: 11 }}>Input</div>
                </div>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {principles.map((p) => (
                <div key={p.title} style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 16 }}>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 6 }}>{p.title}</div>
                  <div style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.55 }}>{p.body}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 10 Final Designs */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="11" label="Final Designs" />

            <div
              style={{
                background: "#ECECEA",
                border: `1px solid ${BORDER}`,
                borderRadius: 20,
                padding: "36px 32px",
                marginBottom: 48,
              }}
            >
              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: "#1A1614", marginBottom: 6 }}>
                Low-Fidelity Wireframes
              </div>
              <p style={{ fontSize: 13.5, color: "#5A5550", lineHeight: 1.6, maxWidth: 640, marginBottom: 28 }}>
                Early structural passes for the eight-step flow — placeholder imagery, greyscale hierarchy, and rough
                button placement, before visual design and real content were layered on.
              </p>
              <div style={{ display: "flex", gap: 20, overflowX: "auto", paddingBottom: 8 }}>
                {wireframeSteps.map((step, i) => (
                  <WireframeCard key={step} step={step} index={i} active={i === 0} />
                ))}
              </div>
            </div>

            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: TEXT, marginBottom: 24 }}>
              Final High-Fidelity Designs
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px 0" }}>
              {screens.map((screen) => (
                <div key={screen.title}>
                  <LaptopMockup src={screen.src} alt={screen.title} />
                  <div style={{ padding: "16px 24px 0" }}>
                    <div style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 14, color: TEXT, marginBottom: 4 }}>{screen.title}</div>
                    <div style={{ fontSize: 12.5, color: TEXT_MUTED }}>{screen.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Usability testing */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="12" label="Usability Testing Results" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 24 }}>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 36, color: ACCENT }}>25</div>
                  <div style={{ fontSize: 12.5, color: TEXT_MUTED }}>Participants tested</div>
                </div>
                <div>
                  <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 36, color: ACCENT }}>96%</div>
                  <div style={{ fontSize: 12.5, color: TEXT_MUTED }}>Task success rate</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.7 }}>
                Moderated and unmoderated sessions in Maze, run across urban and semi-urban branches, surfaced 15+
                critical usability blockers before development handoff — most concentrated around the underwriting
                handoff and gold valuation screens, both resolved before launch.
              </p>
            </div>
          </Reveal>

          {/* Results & Impact */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="13" label="Results & Impact" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              <div className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 30, color: ACCENT, marginBottom: 8 }}>85%</div>
                <div style={{ fontSize: 13.5, color: TEXT_MUTED }}>Reduction in application time</div>
              </div>
              <div className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 30, color: ACCENT, marginBottom: 8 }}>92%</div>
                <div style={{ fontSize: 13.5, color: TEXT_MUTED }}>Application completion rate</div>
              </div>
              <div className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 28 }}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 30, color: ACCENT, marginBottom: 8 }}>4.8/5</div>
                <div style={{ fontSize: 13.5, color: TEXT_MUTED }}>Average branch officer rating</div>
              </div>
            </div>
          </Reveal>

          {/* Interactive prototype CTA */}
          <Reveal
            style={{
              marginBottom: 96,
              background: "linear-gradient(135deg,#E4EEF6,#C9DFEE)",
              borderRadius: 20,
              padding: "48px 40px",
              textAlign: "center",
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: "50%",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                fontSize: 22,
                boxShadow: "0 8px 20px rgba(26,22,20,0.1)",
              }}
            >
              🎨
            </div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 26, color: TEXT, marginBottom: 10 }}>
              View Interactive Prototype
            </h3>
            <p style={{ fontSize: 14, color: "rgba(26,22,20,0.7)", maxWidth: 460, margin: "0 auto 24px" }}>
              Walk through the full application-to-disbursement journey exactly as loan officers experience it.
            </p>
            <MagneticLink
              href={PROTOTYPE_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: TEXT,
                color: "white",
                fontSize: 14,
                fontWeight: 600,
                padding: "13px 26px",
                borderRadius: 100,
              }}
            >
              Open Prototype
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 6.5H11M7.5 3L11 6.5L7.5 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </MagneticLink>
            <div style={{ fontSize: 11.5, color: "rgba(26,22,20,0.55)", marginTop: 14 }}>Opens in a new tab · No account required</div>
          </Reveal>

          {/* Project details */}
          <Reveal>
            <SectionEyebrow number="14" label="Project Details" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24, marginBottom: 32 }}>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: 6 }}>Role</div>
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>UX/UI Designer, End-to-End</div>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: 6 }}>Duration</div>
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>4 months</div>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: 6 }}>Team</div>
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>1 Designer, 10 Developers</div>
              </div>
              <div>
                <div style={{ fontSize: 11, letterSpacing: "0.08em", textTransform: "uppercase", color: TEXT_MUTED, marginBottom: 6 }}>Tools</div>
                <div style={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>Figma, Figma AI, Galileo AI, Maze</div>
              </div>
            </div>
            <p style={{ fontSize: 14.5, color: TEXT_MUTED, lineHeight: 1.75, maxWidth: 780 }}>
              The biggest lesson from this project: in a regulated, high-stakes flow, speed doesn&apos;t come from
              deleting steps, it comes from removing repetition and giving people visibility. Every RBI-mandated
              consent and disclosure stayed in the final design, restructured around how loan officers actually work
              instead of how the legacy system happened to be built.
            </p>
          </Reveal>
        </div>
      </div>

      <NextProjectTeaser next={next} />
    </div>
  );
}
