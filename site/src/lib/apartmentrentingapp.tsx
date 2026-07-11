import { Reveal } from "../reveal";

import { MagneticLink } from "../magnetic-link";

import { NextProjectTeaser } from "./shared";

import type { Project } from "@/lib/projects";

const BEHANCE_URL =
    "https://www.behance.net/gallery/194274825/Apartment-Renting-App-(SaaS-Platform)";

const ACCENT = "#3D72B4";

const BG = "#F8F5EF";

const CARD = "#FFFFFF";

const BORDER = "rgba(26,22,20,0.08)";

const TEXT = "#1A1614";

const TEXT_MUTED = "#726B6C";

const NAV_BG = "#EDF2FA";

const heroStats = [
  { value: "38%", label: "Faster Search to Booking" },
  { value: "4.8★", label: "Usability Test Score" },
  { value: "3×", label: "Filter Utilization" },
  ];

const toc = [
    "Overview",
    "Problem",
    "Objectives",
    "Research",
    "Renter Journey",
    "Key Screens",
    "Desktop Views",
    "Design System",
    "Outcomes",
  ];

const objectives = [
  {
        title: "Unified Discovery",
        body: "Give renters a single place to search, filter, and shortlist apartments — removing the fragmented experience of jumping between listings portals.",
  },
  {
        title: "Informed Decisions",
        body: "Surface the right details (floor plan, virtual tour, neighbourhood score) up front so renters can decide with confidence, not callbacks.",
  },
  {
        title: "Operator Efficiency",
        body: "Equip landlords and property managers with an occupancy dashboard and inquiry pipeline so no lead goes cold.",
  },
  {
        title: "End-to-End Booking",
        body: "Handle scheduling, agreements, and payments in-app — letting both sides close a deal without leaving the platform.",
  },
  ];

const problems = [
  {
        stat: "74%",
        body: "of renters abandon a listing because they can't find enough information without contacting the agent",
  },
  {
        stat: "3–5",
        body: "separate apps or websites the average renter uses to shortlist a single apartment",
  },
  {
        stat: "60%",
        body: "of landlords say they lose interested tenants because scheduling a viewing takes too long",
  },
  ];

const solutions = [
  {
        title: "Map-First Discovery",
        body: "Live map pins with price labels let renters orient by neighbourhood before drilling into a listing — removing location ambiguity from the search.",
  },
  {
        title: "Power Filters",
        body: "Filter by price range, BHK, pet-friendly, furnished status, and move-in date simultaneously. Results update instantly, no page reload.",
  },
  {
        title: "Rich Listing Detail",
        body: "Floor plans, 360° virtual tours, neighbourhood walkability scores, and verified reviews consolidated on a single scroll.",
  },
  {
        title: "Instant Schedule & Sign",
        body: "Book a viewing, get confirmed in real time, then sign the rental agreement digitally — all from the same screen.",
  },
  ];

const designTokens = [
  { label: "Primary", hex: "#3D72B4", swatch: "#3D72B4" },
  { label: "Surface", hex: "#F8F5EF", swatch: "#F8F5EF" },
  { label: "Text", hex: "#1A1614", swatch: "#1A1614" },
  { label: "Muted", hex: "#726B6C", swatch: "#726B6C" },
  { label: "Success", hex: "#4CAF7D", swatch: "#4CAF7D" },
  { label: "Border", hex: "rgba(26,22,20,0.08)", swatch: "#E8E4DC" },
  ];

const outcomes = [
  { value: "38%", label: "Reduction in time from search to booking confirmation in usability tests" },
  { value: "3×", label: "Increase in filter utilisation compared to the baseline competitor audit" },
  { value: "4.8★", label: "Average usability score across 12 test participants (SUS scale)" },
  { value: "91%", label: "Task completion rate for first-time users on the booking flow" },
  ];

function SectionEyebrow({ number, label }: { number: string; label: string }) {
    return (
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: ACCENT }}>{number}</span>
                  <span style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: TEXT_MUTED }}>
                    {label}
                  </span>
                  <div style={{ flex: 1, height: 1, background: BORDER }} />
          </div>
        );
}

export function ApartmentRentingCaseStudy({ next }: { project: Project; next: Project }) {
    return (
          <div style={{ fontFamily: "var(--font-body)" }}>
            {/* Hero */}
                  <section style={{ position: "relative", minHeight: 640, background: BG, overflow: "hidden" }}>
                            <div
                                        style={{
                                                      position: "absolute", top: -140, right: -140, width: 680, height: 680,
                                                      borderRadius: "50%",
                                                      background: "radial-gradient(circle, rgba(61,114,180,0.2) 0%, rgba(61,114,180,0.07) 50%, transparent 70%)",
                                                      filter: "blur(60px)", pointerEvents: "none",
                                        }}
                                      />
                            <div
                                        style={{
                                                      position: "relative", zIndex: 1, padding: "160px 72px 80px",
                                                      maxWidth: 1200, margin: "0 auto", display: "flex", gap: 64, alignItems: "center",
                                        }}
                                      >
                                      <div style={{ flex: 1, minWidth: 0 }}>
                                                  <MagneticLink
                                                                  href="/#projects"
                                                                  style={{ display: "flex", width: "fit-content", alignItems: "center", gap: 8, fontSize: 13, color: TEXT_MUTED, marginBottom: 32 }}
                                                                >
                                                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                                                <path d="M10 6H2M5.5 2.5L2 6L5.5 9.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                                                                </svg>
                                                                Back to Work
                                                  </MagneticLink>
                                                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
                                                                <div style={{ background: TEXT, color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 12, letterSpacing: "0.08em", padding: "10px 18px", borderRadius: 8 }}>
                                                                                CASE STUDY
                                                                </div>
                                                                <div style={{ background: ACCENT, color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 12, letterSpacing: "0.06em", padding: "10px 18px", borderRadius: 8 }}>
                                                                                MOBILE APP
                                                                </div>
                                                  </div>
                                                  <Reveal as="h1" style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(40px,5vw,68px)", lineHeight: 1.05, letterSpacing: "-0.03em", color: TEXT, marginBottom: 20 }}>
                                                                Apartment Renting App
                                                  </Reveal>
                                                  <Reveal as="p" delay={80} style={{ fontSize: "clamp(16px,1.6vw,19px)", color: TEXT_MUTED, maxWidth: 560, marginBottom: 48, lineHeight: 1.6 }}>
                                                                End-to-end design of a rental marketplace connecting renters and landlords — from map-first
                                                                discovery to digital lease signing, in a single seamless flow.
                                                  </Reveal>
                                                  <Reveal delay={140} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 560 }}>
                                                    {heroStats.map((s) => (
                                                        <div key={s.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "20px 18px" }}>
                                                                          <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 28, color: ACCENT, marginBottom: 8 }}>{s.value}</div>
                                                                          <div style={{ fontSize: 12.5, color: TEXT_MUTED, lineHeight: 1.4 }}>{s.label}</div>
                                                        </div>
                                                      ))}
                                                  </Reveal>
                                      </div>
                                      <Reveal delay={200} style={{ flex: "0 0 auto", width: "clamp(260px, 34vw, 420px)", display: "flex", gap: 16, alignItems: "flex-end" }}>
                                                  <div style={{ flex: 1, borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(26,22,20,0.18)", transform: "translateY(-20px)" }}>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img src="/apartment-renting/Log-in.png" alt="Login screen" style={{ width: "100%", display: "block" }} />
                                                  </div>
                                                  <div style={{ flex: 1, borderRadius: 24, overflow: "hidden", boxShadow: "0 32px 80px rgba(26,22,20,0.14)" }}>
                                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                                                <img src="/apartment-renting/Discover%20out%20affordable%20houses.png" alt="Discover homes" style={{ width: "100%", display: "block" }} />
                                                  </div>
                                      </Reveal>
                            </div>
                  </section>
            {/* TOC */}
                <section style={{ background: NAV_BG, borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, padding: "20px 72px" }}>
                        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", gap: 10 }}>
                          {toc.map((item) => (
                        <span key={item} style={{ fontSize: 12.5, padding: "7px 14px", borderRadius: 100, border: "1px solid rgba(26,22,20,0.15)", color: TEXT_MUTED, background: CARD }}>
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
                                              <div style={{ display: "grid", gridTemplateColumns: "3fr 2fr", gap: 48, alignItems: "center" }}>
                                                            <p style={{ fontSize: "clamp(17px,1.8vw,22px)", color: TEXT, lineHeight: 1.65, fontFamily: "var(--font-heading)", fontWeight: 400 }}>
                                                                            The apartment rental market is fragmented — renters jump between multiple apps, contact
                                                                            agents for basic information, and still cannot compare options side by side. This project
                                                                            tackles all three pain points: a map-first search, rich listing detail, and an integrated
                                                                            booking and agreement flow, all in one mobile-first SaaS platform.
                                                            </p>
                                                            <div style={{ display: "grid", gap: 12 }}>
                                                              {[
            { label: "Role", value: "UX Designer — Research, IA, Visual Design" },
            { label: "Platform", value: "iOS & Android · Web Dashboard" },
            { label: "Timeline", value: "10 weeks" },
            { label: "Tools", value: "Figma · ProtoPie · FigJam" },
                            ].map((d) => (
                                                <div key={d.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "14px 18px" }}>
                                                                    <div style={{ fontSize: 11, color: TEXT_MUTED, marginBottom: 4, letterSpacing: "0.1em", textTransform: "uppercase" }}>{d.label}</div>
                                                                    <div style={{ fontSize: 14, color: TEXT, fontWeight: 500 }}>{d.value}</div>
                                                </div>
                                              ))}
                                                            </div>
                                              </div>
                                  </Reveal>
                          {/* 02 Problem */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="02" label="The Problem" />
                                              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 48 }}>
                                                {problems.map((p) => (
                            <div key={p.stat} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: "28px 24px" }}>
                                              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 40, color: ACCENT, marginBottom: 12, lineHeight: 1 }}>{p.stat}</div>
                                              <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{p.body}</div>
                            </div>
                          ))}
                                              </div>
                                              <div style={{ background: "rgba(61,114,180,0.06)", border: "1.5px solid rgba(61,114,180,0.2)", borderRadius: 16, padding: "28px 32px" }}>
                                                            <p style={{ fontSize: 17, color: TEXT, lineHeight: 1.7, margin: 0 }}>
                                                                            <strong style={{ color: ACCENT }}>How might we</strong> design a rental marketplace that
                                                                            reduces discovery-to-booking friction for renters while giving landlords the tools they
                                                                            need to manage listings and close leases faster?
                                                            </p>
                                              </div>
                                  </Reveal>
                          {/* 03 Objectives */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="03" label="Design Objectives" />
                                              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
                                                {objectives.map((o) => (
                            <div key={o.title} className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                                              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: ACCENT, marginBottom: 8 }}>{o.title}</div>
                                              <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{o.body}</div>
                            </div>
                          ))}
                                              </div>
                                  </Reveal>
                          {/* 04 Research */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="04" label="Research Insights" />
                                              <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 48, alignItems: "start" }}>
                                                            <div>
                                                                            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 22, color: TEXT, marginBottom: 12 }}>Methods</h3>
                                                                            <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.7, marginBottom: 20 }}>
                                                                                              Conducted 14 user interviews with active renters and 6 landlords. Ran a competitor
                                                                                              audit across 5 leading rental platforms. Synthesised findings in a FigJam affinity map.
                                                                            </p>
                                                                            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                                                                              {["User Interviews", "Competitor Audit", "Affinity Mapping", "User Journey Mapping"].map((m) => (
                                <div key={m} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13.5, color: TEXT_MUTED }}>
                                                      <div style={{ width: 6, height: 6, borderRadius: "50%", background: ACCENT, flexShrink: 0 }} />
                                  {m}
                                </div>
                              ))}
                                                                            </div>
                                                            </div>
                                                            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                                                              {[
            { insight: "\"I end up calling the agent just to find out if the apartment has parking.\"", theme: "Information gaps drive unnecessary back-and-forth" },
            { insight: "\"I'm comparing five WhatsApp chats and three browser tabs at the same time.\"", theme: "No central workspace for shortlisting and comparing" },
            { insight: "\"By the time I call back, someone else has already taken it.\"", theme: "Scheduling lag causes renter drop-off and lost landlord revenue" },
                            ].map((q) => (
                                                <div key={q.theme} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24, borderLeft: `4px solid ${ACCENT}` }}>
                                                                    <p style={{ fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: 15, color: TEXT, marginBottom: 10, lineHeight: 1.5 }}>{q.insight}</p>
                                                                    <p style={{ fontSize: 12, color: TEXT_MUTED, margin: 0, letterSpacing: "0.04em" }}>→ {q.theme}</p>
                                                </div>
                                              ))}
                                                            </div>
                                              </div>
                                  </Reveal>
                          {/* 05 Renter Journey */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="05" label="Renter Journey" />
                                              <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 0, border: `1px solid ${BORDER}`, borderRadius: 16, overflow: "hidden" }}>
                                                {[
            { phase: "Discover", icon: "🗺", steps: ["Open map view", "Set location pin", "Apply budget filter"], pain: "Too many irrelevant results" },
            { phase: "Explore", icon: "🔍", steps: ["View listing detail", "Check photos & floor plan", "Read reviews"], pain: "Missing info forces agent calls" },
            { phase: "Compare", icon: "⚖️", steps: ["Shortlist 2–3 options", "Side-by-side compare", "Share with partner"], pain: "No native compare tool" },
            { phase: "Book", icon: "✅", steps: ["Schedule viewing", "Sign agreement", "Pay deposit"], pain: "Multi-step handoffs cause drop-off" },
                          ].map((p, i) => (
                                            <div key={p.phase} style={{ padding: 24, background: i % 2 === 0 ? CARD : NAV_BG, borderRight: i < 3 ? `1px solid ${BORDER}` : undefined }}>
                                                              <div style={{ fontSize: 28, marginBottom: 12 }}>{p.icon}</div>
                                                              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 16, color: ACCENT, marginBottom: 14 }}>{p.phase}</div>
                                                              <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 16 }}>
                                                                {p.steps.map((s) => <div key={s} style={{ fontSize: 13, color: TEXT, lineHeight: 1.4 }}>{s}</div>)}
                                                              </div>
                                                              <div style={{ fontSize: 12, color: "#C0392B", background: "rgba(192,57,43,0.08)", borderRadius: 8, padding: "8px 10px", lineHeight: 1.4 }}>
                                                                                  Pain: {p.pain}
                                                              </div>
                                            </div>
                                          ))}
                                              </div>
                                  </Reveal>
                          {/* 06 Key Screens */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="06" label="Key Screens" />
                                              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 24, marginBottom: 32 }}>
                                                {solutions.map((s) => (
                            <div key={s.title} className="hover-card" style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 14, padding: 24 }}>
                                              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: ACCENT, marginBottom: 8 }}>{s.title}</div>
                                              <div style={{ fontSize: 13.5, color: TEXT_MUTED, lineHeight: 1.6 }}>{s.body}</div>
                            </div>
                          ))}
                                              </div>
                                              <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
                                                {[
            { src: "/apartment-renting/Sign-in.png", alt: "Sign-in screen" },
            { src: "/apartment-renting/Discover%20out%20affordable%20houses.png", alt: "Discover affordable houses" },
            { src: "/apartment-renting/Filter%20view.png", alt: "Advanced filter view" },
                          ].map((img) => (
                                            <div key={img.src} style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 48px rgba(26,22,20,0.12)", border: `1px solid ${BORDER}` }}>
                                              {/* eslint-disable-next-line @next/next/no-img-element */}
                                                              <img src={img.src} alt={img.alt} style={{ width: "100%", display: "block" }} />
                                            </div>
                                          ))}
                                              </div>
                                  </Reveal>
                          {/* 07 Desktop Views */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="07" label="Desktop / Web Views" />
                                              <p style={{ fontSize: 16, color: TEXT_MUTED, lineHeight: 1.65, maxWidth: 640, marginBottom: 40 }}>
                                                            The platform also ships a responsive web experience for landlords and property managers,
                                                            with a full operator dashboard for managing listings, reviewing applicants, and tracking revenue.
                                              </p>
                                              <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                                                {[
            { src: "/apartment-renting/MacBook%20Pro%2016_%20-%202.png", alt: "Listings — desktop browse" },
            { src: "/apartment-renting/MacBook%20Pro%2016_%20-%203.png", alt: "Listing detail — desktop" },
            { src: "/apartment-renting/Dashboard.png", alt: "Operator dashboard" },
            { src: "/apartment-renting/MacBook%20Pro%2016_%20-%204.png", alt: "Booking confirmation — desktop" },
            { src: "/apartment-renting/MacBook%20Pro%2016_%20-%207.png", alt: "Rental agreement — digital signing" },
                          ].map((img) => (
                                            <div key={img.src} style={{ borderRadius: 20, overflow: "hidden", boxShadow: "0 16px 64px rgba(26,22,20,0.12)", border: `1px solid ${BORDER}` }}>
                                              {/* eslint-disable-next-line @next/next/no-img-element */}
                                                              <img src={img.src} alt={img.alt} style={{ width: "100%", display: "block" }} />
                                            </div>
                                          ))}
                                              </div>
                                  </Reveal>
                          {/* 08 Design System */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="08" label="Design System" />
                                              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
                                                            <div>
                                                                            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: TEXT, marginBottom: 20 }}>Colour Tokens</h3>
                                                                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                                                              {designTokens.map((t) => (
                                <div key={t.label} style={{ display: "flex", alignItems: "center", gap: 14, background: CARD, border: `1px solid ${BORDER}`, borderRadius: 10, padding: "12px 16px" }}>
                                                      <div style={{ width: 32, height: 32, borderRadius: 8, background: t.swatch, border: `1px solid ${BORDER}`, flexShrink: 0 }} />
                                                      <div>
                                                                              <div style={{ fontSize: 13, fontWeight: 600, color: TEXT }}>{t.label}</div>
                                                                              <div style={{ fontSize: 11, color: TEXT_MUTED, fontFamily: "var(--font-mono)" }}>{t.hex}</div>
                                                      </div>
                                </div>
                              ))}
                                                                            </div>
                                                            </div>
                                                            <div>
                                                                            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 20, color: TEXT, marginBottom: 20 }}>Typography Scale</h3>
                                                                            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                                                                              {[
            { name: "Display", size: "40–68px", weight: "800", sample: "Apartment Renting" },
            { name: "Heading", size: "22–32px", weight: "700", sample: "Find your home" },
            { name: "Body", size: "14–17px", weight: "400", sample: "Browse thousands of verified listings" },
            { name: "Label", size: "11–12px", weight: "500", sample: "MOVE-IN DATE · 3 BHK · FURNISHED" },
                              ].map((t) => (
                                                    <div key={t.name} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 12, padding: "16px 20px" }}>
                                                                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
                                                                                                  <span style={{ fontSize: 11, color: TEXT_MUTED, letterSpacing: "0.1em", textTransform: "uppercase" }}>{t.name}</span>
                                                                                                  <span style={{ fontSize: 11, color: TEXT_MUTED, fontFamily: "var(--font-mono)" }}>{t.size} / {t.weight}</span>
                                                                          </div>
                                                                          <div style={{
                                                                              fontFamily: "var(--font-heading)",
                                                                              fontSize: t.name === "Display" ? 22 : t.name === "Heading" ? 18 : t.name === "Body" ? 14 : 11,
                                                                              fontWeight: parseInt(t.weight),
                                                                              color: TEXT,
                                                                              letterSpacing: t.name === "Label" ? "0.12em" : undefined,
                                                                              textTransform: t.name === "Label" ? "uppercase" : undefined,
                                                                              lineHeight: 1.3,
                                                    }}>
                                                                            {t.sample}
                                                                          </div>
                                                    </div>
                                                  ))}
                                                                            </div>
                                                            </div>
                                              </div>
                                  </Reveal>
                          {/* 09 Outcomes */}
                                  <Reveal style={{ marginBottom: 96 }}>
                                              <SectionEyebrow number="09" label="Outcomes" />
                                              <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20, marginBottom: 48 }}>
                                                {outcomes.map((o) => (
                            <div key={o.label} style={{ background: CARD, border: `1px solid ${BORDER}`, borderRadius: 16, padding: "28px 28px" }}>
                                              <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 48, color: ACCENT, marginBottom: 12, lineHeight: 1 }}>{o.value}</div>
                                              <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{o.label}</div>
                            </div>
                          ))}
                                              </div>
                                              <div style={{ background: TEXT, borderRadius: 20, padding: "48px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 32 }}>
                                                            <div>
                                                                            <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: 28, color: "white", marginBottom: 10 }}>See the full case study</div>
                                                                            <div style={{ fontSize: 15, color: "rgba(255,255,255,0.55)", lineHeight: 1.5 }}>
                                                                                              All research artefacts, high-fidelity screens, and the interactive prototype live on Behance.
                                                                            </div>
                                                            </div>
                                                            <MagneticLink
                                                                              href={BEHANCE_URL}
                                                                              target="_blank"
                                                                              rel="noopener noreferrer"
                                                                              style={{
                                                                                                  flexShrink: 0, display: "inline-flex", alignItems: "center", gap: 12,
                                                                                                  background: ACCENT, color: "white", fontFamily: "var(--font-heading)", fontWeight: 700,
                                                                                                  fontSize: 14, padding: "16px 28px", borderRadius: 12, letterSpacing: "0.03em", whiteSpace: "nowrap",
                                                                              }}
                                                                            >
                                                                            Open on Behance
                                                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                                                                              <path d="M2.5 7h9M7.5 3L11 7l-3.5 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                                                            </svg>
                                                            </MagneticLink>
                                              </div>
                                  </Reveal>
                        </div>
                </div>
                <NextProjectTeaser next={next} />
          </div>
        );
}
