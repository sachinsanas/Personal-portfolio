import { Reveal } from "../reveal";
import { MagneticLink } from "../magnetic-link";
import { NextProjectTeaser } from "./shared";
import type { Project } from "@/lib/projects";

const BEHANCE_URL = "https://www.behance.net/gallery/193217593/Easy-Pay-App";

const ACCENT = "#64B986";
const BG = "#F8F5EF";
const CARD = "#FFFFFF";
const BORDER = "rgba(19,15,38,0.08)";
const TEXT = "#130F26";
const TEXT_MUTED = "#59556C";
const NAV_BG = "#EFF7F2";

const heroStats = [
  { value: "80%", label: "Users Own a Car" },
  { value: "66%", label: "Would Pre-Book Parking" },
  { value: "60%", label: "Prefer UPI Payment" },
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
  "Results",
];

const objectives = [
  {
    title: "Frictionless Discovery",
    body: "Give drivers real-time visibility into nearby available spots so they never waste time hunting for parking.",
  },
  {
    title: "Instant Reservation",
    body: "Let users reserve a spot in advance directly from the app — eliminating the anxiety of arriving without a space.",
  },
  {
    title: "Contactless Payment",
    body: "Handle the full payment cycle in-app: no physical tickets, no queues at payment kiosks, no hunting for change.",
  },
  {
    title: "Operator Dashboard",
    body: "Equip parking lot owners with occupancy tracking, revenue analytics, and pricing controls from a single view.",
  },
];

const research = [
  {
    stat: "80%",
    body: "of surveyed users own a car — confirming a large, addressable base actively looking for smarter parking",
  },
  {
    stat: "60%",
    body: "prefer UPI over cash for payments, with 40% still using cash — highlighting the need for multiple payment options",
  },
  {
    stat: "66%",
    body: "said they would pre-book a parking spot if the app made it easy, validating the advance-reservation feature",
  },
];

const personas = [
  {
    name: "Sarah Parkington",
    age: 32,
    location: "Urban area",
    bio: "Sarah is a busy professional working in the city. Her job requires her to commute daily, and she often struggles to find convenient parking spaces near her workplace. She has a moderate level of tech-savviness and relies heavily on her smartphone for various tasks.",
    frustrations: ["Spend a lot of time searching for parking.", "Lack of parking Slots"],
    goals: ["Quick solutions for finding parking spaces, saving her time and reducing stress.", "To be able to pay via card or UPI"],
    personality: [
      { label: "Mobile Apps", value: 80 },
      { label: "Softwares", value: 55 },
      { label: "Social Network", value: 65 },
      { label: "Internet", value: 80 },
    ],
    accentColor: ACCENT,
    bgColor: "#EFF7F2",
    imageAlign: "left" as const,
  },
  {
    name: "Mark Thompson",
    age: 35,
    location: "Urban area",
    bio: "Mark is a busy professional who works in a downtown office. He owns a car and commutes to work every day, facing the challenge of finding convenient and affordable parking spaces near his workplace. Mark values his time and often has tight schedules, requiring him to efficiently locate parking spaces without wasting time searching.",
    frustrations: ["Available parking apps have poor user experience", "Wants to make payments cashless mostly"],
    goals: ["To get a hassle free parking experience", "To be able to pay via card or UPI"],
    personality: [
      { label: "Mobile Apps", value: 35 },
      { label: "Softwares", value: 50 },
      { label: "Social Network", value: 65 },
      { label: "Internet", value: 55 },
    ],
    accentColor: "#130F26",
    bgColor: "#EFF7F2",
    imageAlign: "right" as const,
  },
];

const solutions = [
  {
    title: "Live Spot Availability Map",
    body: "Real-time pins on a map show open spots nearby, updated live so drivers always see accurate availability before committing to a route.",
  },
  {
    title: "One-Tap Reservation",
    body: "Select a spot, pick a time slot, confirm — the space is held instantly. No upfront charge until you actually park.",
  },
  {
    title: "Auto Session Tracking",
    body: "Entry scan starts the session automatically. The timer and running cost stay visible throughout so there are no surprises.",
  },
  {
    title: "Smart Payment",
    body: "Session ends with a single tap: UPI, card, or wallet debited immediately. A digital receipt is generated without queuing at a kiosk.",
  },
];

const principles = [
  { title: "Speed", body: "Every critical action — find, reserve, pay — must complete in under 3 taps from any screen." },
  { title: "Clarity", body: "Parking cost, session time, and spot number are always visible while a session is active." },
  { title: "Trust", body: "No hidden charges. The total, including any surcharge, is confirmed before payment is taken." },
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

export function EasyPayCaseStudy({ next }: { project: Project; next: Project }) {
  return (
    <div style={{ fontFamily: "var(--font-body)" }}>
      {/* Hero */}
      <section
        style={{
          position: "relative",
          minHeight: 640,
          background: BG,
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -140,
            right: -140,
            width: 680,
            height: 680,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(100,185,134,0.22) 0%, rgba(100,185,134,0.08) 50%, transparent 70%)",
            filter: "blur(60px)",
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
            background:
              "radial-gradient(circle, rgba(100,185,134,0.12) 0%, rgba(100,185,134,0.04) 50%, transparent 70%)",
            filter: "blur(60px)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 1,
            padding: "160px 72px 80px",
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            gap: 64,
            alignItems: "center",
          }}
        >
          <div style={{ flex: 1, minWidth: 0 }}>
            <MagneticLink
              href="/#projects"
              style={{
                display: "flex",
                width: "fit-content",
                alignItems: "center",
                gap: 8,
                fontSize: 13,
                color: TEXT_MUTED,
                marginBottom: 32,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path
                  d="M10 6H2M5.5 2.5L2 6L5.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Back to Work
            </MagneticLink>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 12,
                marginBottom: 20,
              }}
            >
              <div
                style={{
                  background: TEXT,
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.08em",
                  padding: "10px 18px",
                  borderRadius: 8,
                }}
              >
                CASE STUDY
              </div>
              <div
                style={{
                  background: ACCENT,
                  color: "white",
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.06em",
                  padding: "10px 18px",
                  borderRadius: 8,
                }}
              >
                MOBILE APP
              </div>
            </div>
            <Reveal
              as="h1"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(40px,5vw,68px)",
                lineHeight: 1.05,
                letterSpacing: "-0.03em",
                color: TEXT,
                marginBottom: 20,
              }}
            >
              Easy Pay — Smart Parking App
            </Reveal>
            <Reveal
              as="p"
              delay={80}
              style={{
                fontSize: "clamp(16px,1.6vw,19px)",
                color: TEXT_MUTED,
                maxWidth: 560,
                marginBottom: 48,
                lineHeight: 1.6,
              }}
            >
              Redesigning urban parking from a frustrating guessing game into a seamless find-reserve-pay
              experience — from first research to high-fidelity handoff.
            </Reveal>
            <Reveal
              delay={140}
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16, maxWidth: 560 }}
            >
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 12,
                    padding: "20px 18px",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: 28,
                      color: ACCENT,
                      marginBottom: 8,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 12.5, color: TEXT_MUTED, lineHeight: 1.4 }}>{s.label}</div>
                </div>
              ))}
            </Reveal>
          </div>

          {/* Hero image */}
          <Reveal
            delay={200}
            style={{
              flex: "0 0 auto",
              width: "clamp(280px, 36vw, 440px)",
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 32px 80px rgba(19,15,38,0.18)",
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/easy-pay/Cover.png"
              alt="Easy Pay app — map view and bookings screen"
              style={{ width: "100%", display: "block" }}
            />
          </Reveal>
        </div>
      </section>

      {/* TOC */}
      <section
        style={{
          background: NAV_BG,
          borderTop: `1px solid ${BORDER}`,
          borderBottom: `1px solid ${BORDER}`,
          padding: "20px 72px",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
          }}
        >
          {toc.map((item) => (
            <span
              key={item}
              style={{
                fontSize: 12.5,
                padding: "7px 14px",
                borderRadius: 100,
                border: `1px solid rgba(19,15,38,0.15)`,
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
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "3fr 2fr",
                gap: 48,
                alignItems: "center",
              }}
            >
              <p
                style={{
                  fontSize: "clamp(17px,1.8vw,22px)",
                  color: TEXT,
                  lineHeight: 1.65,
                  fontFamily: "var(--font-heading)",
                  fontWeight: 400,
                }}
              >
                Easy Pay is a mobile-first parking platform that connects urban drivers with nearby lots,
                lets them reserve spots in advance, and handles payment entirely in-app — no physical tickets,
                no kiosk queues. This case study covers the end-to-end UX design: from discovery research to
                high-fidelity prototype ready for development handoff.
              </p>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 16px 48px rgba(19,15,38,0.12)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/easy-pay/Image 4.png"
                  alt="Parking lot context photo"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </Reveal>

          {/* 02 Objectives */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="02" label="Business Objectives" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {objectives.map((o) => (
                <div
                  key={o.title}
                  className="hover-card"
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: 16,
                      color: ACCENT,
                      marginBottom: 8,
                    }}
                  >
                    {o.title}
                  </div>
                  <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{o.body}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 03 Design Process */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="03" label="My Design Process" />
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                boxShadow: "0 8px 32px rgba(19,15,38,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/Design Process.jpg"
                alt="Design process: Empathize → Define → Ideate → Design → Testing"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 2fr",
                gap: 32,
                marginTop: 40,
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    marginBottom: 6,
                  }}
                >
                  Empathize
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 700,
                    fontSize: 24,
                    color: TEXT,
                  }}
                >
                  Research First
                </h3>
              </div>
              <div>
                <div
                  style={{
                    fontSize: 11,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: ACCENT,
                    marginBottom: 8,
                  }}
                >
                  Competitive Market Analysis
                </div>
                <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.7 }}>
                  The project began with an audit of parking apps across the target market. Most had basic map
                  search but none offered advance reservation with live price preview, and only a fraction
                  supported UPI — the dominant payment method. The research surfaced a clear gap: a seamless
                  single-app flow from discovery to receipt that required zero physical interaction with parking
                  infrastructure.
                </p>
              </div>
            </div>
          </Reveal>

          {/* 04 Research */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="04" label="User Research & Insights" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
                {research.map((r) => (
                  <div key={r.stat} style={{ borderLeft: `3px solid ${ACCENT}`, paddingLeft: 20 }}>
                    <div
                      style={{
                        fontFamily: "var(--font-heading)",
                        fontWeight: 800,
                        fontSize: 40,
                        color: TEXT,
                        marginBottom: 10,
                        lineHeight: 1,
                      }}
                    >
                      {r.stat}
                    </div>
                    <div style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.6 }}>{r.body}</div>
                  </div>
                ))}
              </div>
              <div
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  border: `1px solid ${BORDER}`,
                  boxShadow: "0 8px 32px rgba(19,15,38,0.08)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/easy-pay/User research.png"
                  alt="User research survey results"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>
          </Reveal>

          {/* 05 Problem Statement */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="05" label="Problem Statement" />
            <p
              style={{
                fontFamily: "var(--font-serif)",
                fontStyle: "italic",
                fontSize: "clamp(22px,2.6vw,32px)",
                color: TEXT,
                lineHeight: 1.45,
                maxWidth: 820,
              }}
            >
              How might we design a parking experience so effortless that finding, reserving, and paying for
              a spot feels as natural as ordering a cab — cutting check-in time from 20+ minutes down to
              under 15 seconds?
            </p>
          </Reveal>

          {/* 06 Target Audience */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="06" label="Target Audience" />

            {/* Empathize image */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                marginBottom: 40,
                boxShadow: "0 8px 32px rgba(19,15,38,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/Empathize.png"
                alt="Target audience map: car drivers, frequent travellers, delivery workers, regular commuters"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* User Persona image */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                marginBottom: 40,
                boxShadow: "0 8px 32px rgba(19,15,38,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/User Persona.png"
                alt="User personas: Sarah Parkington and Mark Thompson"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Persona cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
              {personas.map((p) => (
                <div
                  key={p.name}
                  style={{
                    background: p.bgColor,
                    border: `1px solid rgba(100,185,134,0.25)`,
                    borderRadius: 20,
                    overflow: "hidden",
                    display: "grid",
                    gridTemplateColumns: p.imageAlign === "left" ? "220px 1fr" : "1fr 220px",
                  }}
                >
                  {/* Photo placeholder — shown left for Sarah, right for Mark */}
                  {p.imageAlign === "left" && (
                    <div
                      style={{
                        background: p.accentColor === ACCENT ? "#F2E8E0" : "#D6E8E0",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        position: "relative",
                        minHeight: 280,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                          color: "white",
                          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>
                          {p.name},
                        </div>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18 }}>
                          {p.age} {p.location}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div style={{ padding: "28px 28px 24px" }}>
                    {/* Bio */}
                    <div>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 15, color: TEXT, marginBottom: 8 }}>Bio</div>
                      <p style={{ fontSize: 13.5, color: TEXT_MUTED, lineHeight: 1.65, marginBottom: 20 }}>{p.bio}</p>
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
                      {/* Frustration */}
                      <div style={{ background: "white", borderRadius: 12, padding: "16px 18px" }}>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 10 }}>
                          Frustration
                        </div>
                        {p.frustrations.map((f) => (
                          <div key={f} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5, marginBottom: 8 }}>
                            <span style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }}>●</span>
                            {f}
                          </div>
                        ))}
                      </div>

                      {/* Personality */}
                      <div style={{ background: "white", borderRadius: 12, padding: "16px 18px" }}>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 10 }}>
                          Personality
                        </div>
                        {p.personality.map((trait) => (
                          <div key={trait.label} style={{ marginBottom: 10 }}>
                            <div style={{ fontSize: 12, color: TEXT_MUTED, marginBottom: 4 }}>{trait.label}</div>
                            <div style={{ height: 4, background: "rgba(19,15,38,0.08)", borderRadius: 4, position: "relative" }}>
                              <div
                                style={{
                                  position: "absolute",
                                  left: 0,
                                  top: 0,
                                  height: "100%",
                                  width: `${trait.value}%`,
                                  background: "rgba(19,15,38,0.35)",
                                  borderRadius: 4,
                                }}
                              />
                              <div
                                style={{
                                  position: "absolute",
                                  top: "50%",
                                  left: `${trait.value}%`,
                                  transform: "translate(-50%, -50%)",
                                  width: 10,
                                  height: 10,
                                  borderRadius: "50%",
                                  background: "#59556C",
                                }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Goal */}
                    <div style={{ background: "white", borderRadius: 12, padding: "16px 18px", marginTop: 16 }}>
                      <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 14, color: TEXT, marginBottom: 10 }}>
                        Goal
                      </div>
                      {p.goals.map((g) => (
                        <div key={g} style={{ display: "flex", gap: 8, alignItems: "flex-start", fontSize: 13, color: TEXT_MUTED, lineHeight: 1.5, marginBottom: 8 }}>
                          <span style={{ color: ACCENT, flexShrink: 0, marginTop: 2 }}>●</span>
                          {g}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Photo placeholder right side for Mark */}
                  {p.imageAlign === "right" && (
                    <div
                      style={{
                        background: "#C8D8C8",
                        display: "flex",
                        alignItems: "flex-end",
                        justifyContent: "center",
                        position: "relative",
                        minHeight: 280,
                        overflow: "hidden",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          bottom: 16,
                          left: 16,
                          color: "white",
                          textShadow: "0 1px 4px rgba(0,0,0,0.5)",
                        }}
                      >
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18, lineHeight: 1.2 }}>
                          {p.name},
                        </div>
                        <div style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: 18 }}>
                          {p.age} {p.location}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* 07 User Flow */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="07" label="User Flow & Journey" />
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                boxShadow: "0 8px 32px rgba(19,15,38,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/User Flow.png"
                alt="User flow: parking provider and parking seeker flows"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </Reveal>

          {/* 08 IA */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="08" label="Information Architecture" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {[
                {
                  title: "Discovery",
                  items: ["Live map view", "Lot list & filters", "Distance / price sort", "Spot availability count"],
                },
                {
                  title: "Reservation & Payment",
                  items: ["Slot booking flow", "Duration picker", "Price breakdown", "UPI / card / wallet"],
                },
                {
                  title: "Account & History",
                  items: ["Active sessions", "Booking history", "Saved vehicles", "Digital receipts"],
                },
              ].map((col) => (
                <div
                  key={col.title}
                  className="hover-card"
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: TEXT,
                      marginBottom: 14,
                    }}
                  >
                    {col.title}
                  </div>
                  {col.items.map((it) => (
                    <div
                      key={it}
                      style={{
                        fontSize: 13,
                        color: TEXT_MUTED,
                        padding: "6px 0",
                        borderTop: `1px solid ${BORDER}`,
                      }}
                    >
                      {it}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </Reveal>

          {/* 09 Design Solutions */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="09" label="Design Solutions" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }}>
              {solutions.map((s) => (
                <div
                  key={s.title}
                  className="hover-card"
                  style={{
                    background: CARD,
                    border: `1px solid ${BORDER}`,
                    borderRadius: 14,
                    padding: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: 15,
                      color: ACCENT,
                      marginBottom: 8,
                    }}
                  >
                    {s.title}
                  </div>
                  <div style={{ fontSize: 13.5, color: TEXT_MUTED, lineHeight: 1.6 }}>{s.body}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 10 Design System */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="10" label="Design System" />
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                marginBottom: 32,
                boxShadow: "0 8px 32px rgba(19,15,38,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/Style Guide.png"
                alt="Style guide: Satoshi typeface, colour palette #64B986 #130F26 #59556C #A9A5BC"
                style={{ width: "100%", display: "block" }}
              />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              {principles.map((p) => (
                <div key={p.title} style={{ borderLeft: `2px solid ${ACCENT}`, paddingLeft: 16 }}>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 700,
                      fontSize: 14,
                      color: TEXT,
                      marginBottom: 6,
                    }}
                  >
                    {p.title}
                  </div>
                  <div style={{ fontSize: 13, color: TEXT_MUTED, lineHeight: 1.55 }}>{p.body}</div>
                </div>
              ))}
            </div>
          </Reveal>

          {/* 11 Final Designs */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="11" label="Final Designs" />

            {/* Wireframes */}
            <div
              style={{
                background: "#ECECEA",
                border: `1px solid ${BORDER}`,
                borderRadius: 20,
                padding: "36px 32px",
                marginBottom: 48,
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 700,
                  fontSize: 20,
                  color: TEXT,
                  marginBottom: 6,
                }}
              >
                Low-Fidelity Wireframes
              </div>
              <p
                style={{
                  fontSize: 13.5,
                  color: TEXT_MUTED,
                  lineHeight: 1.6,
                  maxWidth: 640,
                  marginBottom: 28,
                }}
              >
                Early structural passes for the key flows — greyscale hierarchy and rough layout before the
                green visual language was layered on.
              </p>
              <div
                style={{
                  borderRadius: 16,
                  overflow: "hidden",
                  boxShadow: "0 8px 24px rgba(19,15,38,0.08)",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/easy-pay/Wireframes.png"
                  alt="Low-fidelity wireframes: home map, my bookings, manage booking, extend booking, parking seeker flow"
                  style={{ width: "100%", display: "block" }}
                />
              </div>
            </div>

            {/* Final high-fidelity screens */}
            <div
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 700,
                fontSize: 20,
                color: TEXT,
                marginBottom: 24,
              }}
            >
              High-Fidelity Final Designs
            </div>
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 32px 80px rgba(19,15,38,0.18)",
                marginBottom: 48,
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/Final Design.png"
                alt="Final high-fidelity screens: map, my bookings, manage booking, extend booking, payment, list vehicle, book a space"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            {/* Dark hero frame */}
            <div
              style={{
                borderRadius: 24,
                overflow: "hidden",
                boxShadow: "0 16px 48px rgba(19,15,38,0.24)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/Frame 48100796.jpg"
                alt="Easy Pay app — car parking app hero shot with map screen"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </Reveal>

          {/* 12 Usability Testing */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="12" label="Usability Testing" />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: 32, alignItems: "center" }}>
              <div style={{ display: "flex", gap: 24 }}>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: 40,
                      color: ACCENT,
                      lineHeight: 1,
                    }}
                  >
                    30
                  </div>
                  <div style={{ fontSize: 12.5, color: TEXT_MUTED, marginTop: 6 }}>Participants</div>
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 800,
                      fontSize: 40,
                      color: ACCENT,
                      lineHeight: 1,
                    }}
                  >
                    93%
                  </div>
                  <div style={{ fontSize: 12.5, color: TEXT_MUTED, marginTop: 6 }}>Task success rate</div>
                </div>
              </div>
              <p style={{ fontSize: 14, color: TEXT_MUTED, lineHeight: 1.7 }}>
                Moderated sessions across daily commuters and occasional drivers. Key blockers identified
                and fixed pre-handoff: the spot-selection tap target was too small on Android, and the
                payment confirmation screen lacked a clear itemised breakdown — both resolved in the final
                iteration.
              </p>
            </div>
          </Reveal>

          {/* 13 Results */}
          <Reveal style={{ marginBottom: 96 }}>
            <SectionEyebrow number="13" label="Results & Impact" />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
              <div
                className="hover-card"
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 34,
                    color: ACCENT,
                    marginBottom: 8,
                  }}
                >
                  14s
                </div>
                <div style={{ fontSize: 13.5, color: TEXT_MUTED }}>
                  Average check-in time — down from 20+ minutes of circling
                </div>
              </div>
              <div
                className="hover-card"
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 34,
                    color: ACCENT,
                    marginBottom: 8,
                  }}
                >
                  91%
                </div>
                <div style={{ fontSize: 13.5, color: TEXT_MUTED }}>
                  Payment completion rate vs 39% at physical kiosks
                </div>
              </div>
              <div
                className="hover-card"
                style={{
                  background: CARD,
                  border: `1px solid ${BORDER}`,
                  borderRadius: 14,
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontWeight: 800,
                    fontSize: 34,
                    color: ACCENT,
                    marginBottom: 8,
                  }}
                >
                  4.7★
                </div>
                <div style={{ fontSize: 13.5, color: TEXT_MUTED }}>App Store rating post-launch pilot</div>
              </div>
            </div>
          </Reveal>

          {/* Behance CTA */}
          <Reveal
            style={{
              marginBottom: 96,
              background: `linear-gradient(135deg, #EFF7F2, #D4EDDF)`,
              borderRadius: 20,
              padding: "48px 40px",
              textAlign: "center",
              border: `1px solid rgba(100,185,134,0.3)`,
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
                boxShadow: "0 8px 20px rgba(100,185,134,0.25)",
              }}
            >
              🎨
            </div>
            <h3
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 800,
                fontSize: 26,
                color: TEXT,
                marginBottom: 10,
              }}
            >
              View Full Case Study on Behance
            </h3>
            <p
              style={{
                fontSize: 14,
                color: TEXT_MUTED,
                maxWidth: 460,
                margin: "0 auto 24px",
              }}
            >
              Explore the complete design file, prototype, and process documentation on Behance.
            </p>
            <MagneticLink
              href={BEHANCE_URL}
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
              Open on Behance
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M2 6.5H11M7.5 3L11 6.5L7.5 10"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </MagneticLink>
            <div style={{ fontSize: 11.5, color: TEXT_MUTED, marginTop: 14 }}>
              Opens in a new tab · No account required
            </div>
          </Reveal>

          {/* 14 Project Details */}
          <Reveal>
            <SectionEyebrow number="14" label="Project Details" />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4,1fr)",
                gap: 24,
                marginBottom: 40,
              }}
            >
              {[
                { label: "Role", value: "UX/UI Designer, End-to-End" },
                { label: "Duration", value: "8 weeks" },
                { label: "Team", value: "1 Designer, 6 Developers" },
                { label: "Tools", value: "Figma, Maze" },
              ].map((d) => (
                <div key={d.label}>
                  <div
                    style={{
                      fontSize: 11,
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      color: TEXT_MUTED,
                      marginBottom: 6,
                    }}
                  >
                    {d.label}
                  </div>
                  <div style={{ fontSize: 14, color: TEXT, fontWeight: 600 }}>{d.value}</div>
                </div>
              ))}
            </div>

            {/* Timeline image */}
            <div
              style={{
                borderRadius: 20,
                overflow: "hidden",
                border: `1px solid ${BORDER}`,
                marginBottom: 36,
                boxShadow: "0 8px 32px rgba(19,15,38,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/easy-pay/Timeline.png"
                alt="Project timeline: Week 1-2 User Reviews, Week 3-6 UX Stage, Week 6-8 UI Stage"
                style={{ width: "100%", display: "block" }}
              />
            </div>

            <p style={{ fontSize: 14.5, color: TEXT_MUTED, lineHeight: 1.75, maxWidth: 780 }}>
              The central insight from this project: parking friction isn&apos;t really about parking — it&apos;s
              about uncertainty. Drivers don&apos;t mind paying; they mind not knowing whether a spot exists
              before they commit to a route. Every design decision flowed from that: live availability before
              navigation starts, cost transparency before payment, and a session timer that removes the anxiety
              of &quot;am I going to get a fine?&quot; from the moment a car is parked.
            </p>
          </Reveal>
        </div>
      </div>

      <NextProjectTeaser next={next} />
    </div>
  );
}
