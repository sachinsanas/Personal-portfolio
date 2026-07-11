const items = [
  { text: "Product Design" },
  { text: "Design Systems" },
  { text: "AI Workflows" },
  { text: "Claude · Cursor · v0", color: "#16A197" },
  { text: "UX Strategy" },
  { text: "Enterprise SaaS" },
  { text: "Team Leadership" },
  { text: "Fintech" },
  { text: "Mobile UX" },
  { text: "Accessibility" },
  { text: "Design Tokens" },
  { text: "Figma · ProtoPie · Miro", color: "#1A75B7" },
];

function MarqueeGroup({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <span
      aria-hidden={ariaHidden}
      style={{
        display: "flex",
        alignItems: "center",
        gap: 0,
        whiteSpace: "nowrap",
        fontSize: 12,
        fontFamily: "var(--font-body)",
        letterSpacing: "0.09em",
        textTransform: "uppercase",
        color: "rgba(26,22,20,0.45)",
      }}
    >
      {items.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span style={{ padding: "0 28px", color: item.color }}>
            {item.text}
          </span>
          <span style={{ color: "rgba(26,22,20,0.18)" }}>{"·"}</span>
        </span>
      ))}
    </span>
  );
}

export function Marquee() {
  return (
    <div
      style={{
        background: "#EDE8E0",
        padding: "16px 0",
        overflow: "hidden",
        borderTop: "1px solid rgba(26,22,20,0.08)",
        borderBottom: "1px solid rgba(26,22,20,0.08)",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "max-content",
          animation: "marq 32s linear infinite",
        }}
      >
        <MarqueeGroup />
        <MarqueeGroup ariaHidden />
      </div>
    </div>
  );
}
