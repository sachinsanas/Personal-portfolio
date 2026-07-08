import type { CSSProperties, ReactNode } from "react";

interface PhoneProps {
  style?: CSSProperties;
  children: ReactNode;
}

function Phone({ style, children }: PhoneProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: 112,
        height: 228,
        borderRadius: 24,
        border: "3px solid #1A1614",
        background: "#fff",
        overflow: "hidden",
        boxShadow: "0 28px 50px rgba(26,22,20,0.2), 0 6px 14px rgba(26,22,20,0.09)",
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 8,
          left: "50%",
          transform: "translateX(-50%)",
          width: 34,
          height: 5,
          borderRadius: 3,
          background: "#1A1614",
          zIndex: 2,
        }}
      />
      {children}
    </div>
  );
}

function FormScreen({ accent, tint }: { accent: string; tint: string }) {
  return (
    <div style={{ position: "absolute", inset: 0, padding: "26px 10px 10px" }}>
      <div style={{ height: 6, width: "60%", background: "#E4DFDA", borderRadius: 3, marginBottom: 6 }} />
      <div style={{ height: 6, width: "40%", background: "#EDE9E4", borderRadius: 3, marginBottom: 16 }} />
      <div style={{ height: 22, background: tint, border: `1px solid ${accent}33`, borderRadius: 6, marginBottom: 8 }} />
      <div style={{ height: 22, background: tint, border: `1px solid ${accent}33`, borderRadius: 6, marginBottom: 14 }} />
      <div
        style={{
          height: 24,
          background: accent,
          borderRadius: 6,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ height: 4, width: "44%", background: "rgba(255,255,255,0.85)", borderRadius: 2 }} />
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 4, marginTop: 10 }}>
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: accent }} />
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#E4DFDA" }} />
        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#E4DFDA" }} />
      </div>
    </div>
  );
}

function ListScreen({ accent, tint }: { accent: string; tint: string }) {
  const rows = [0, 1, 2];
  return (
    <div style={{ position: "absolute", inset: 0, padding: "26px 10px 10px" }}>
      <div style={{ height: 7, width: "50%", background: "#332C2A", borderRadius: 3, marginBottom: 12 }} />
      {rows.map((r) => (
        <div key={r} style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10 }}>
          <div style={{ width: 18, height: 18, borderRadius: 5, background: tint, flexShrink: 0 }} />
          <div style={{ flex: 1, height: 5, background: "#EDE9E4", borderRadius: 3 }} />
          <div style={{ width: 14, height: 8, borderRadius: 4, background: r === 1 ? accent : "#E4DFDA", flexShrink: 0 }} />
        </div>
      ))}
    </div>
  );
}

function ChartScreen({ accent, tint, dark }: { accent: string; tint: string; dark?: boolean }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: "26px 10px 10px",
        background: dark ? "#15120F" : "transparent",
      }}
    >
      <div style={{ height: 6, width: "38%", background: dark ? "rgba(255,255,255,0.35)" : "#EDE9E4", borderRadius: 3, marginBottom: 8 }} />
      <div style={{ height: 16, width: "58%", background: dark ? "#fff" : "#1A1614", borderRadius: 3, marginBottom: 14 }} />
      <svg width="100%" height="46" viewBox="0 0 92 46" preserveAspectRatio="none">
        <path
          d="M0 38 C14 38 18 24 30 22 C42 20 48 30 60 18 C70 8 78 14 92 6"
          stroke={accent}
          strokeWidth="2.5"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      <div style={{ display: "flex", gap: 5, marginTop: 12 }}>
        <div style={{ flex: 1, height: 16, borderRadius: 4, background: tint }} />
        <div style={{ flex: 1, height: 16, borderRadius: 4, background: tint }} />
      </div>
    </div>
  );
}

function Screen({
  variant,
  accent,
  tint,
  dark,
}: {
  variant: "form" | "list" | "chart";
  accent: string;
  tint: string;
  dark?: boolean;
}) {
  if (variant === "form") return <FormScreen accent={accent} tint={tint} />;
  if (variant === "list") return <ListScreen accent={accent} tint={tint} />;
  return <ChartScreen accent={accent} tint={tint} dark={dark} />;
}

export interface ProjectVisualConfig {
  panelTint: string;
  accent: string;
  screenTint: string;
  screens: ("form" | "list" | "chart")[];
  darkScreen?: boolean;
}

export function ProjectVisual({ config, height = 360 }: { config: ProjectVisualConfig; height?: number }) {
  const { panelTint, accent, screenTint, screens, darkScreen } = config;
  return (
    <div
      style={{
        borderRadius: 16,
        overflow: "hidden",
        background: panelTint,
        border: "1px solid rgba(26,22,20,0.06)",
        position: "relative",
        height,
      }}
    >
      <div style={{ position: "absolute", inset: 0 }}>
        <Phone
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) translate(-92px,-20px) rotate(-13deg)",
            zIndex: 1,
            opacity: 0.94,
          }}
        >
          <Screen variant={screens[0]} accent={accent} tint={screenTint} dark={darkScreen} />
        </Phone>
        <Phone
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) translate(90px,-14px) rotate(12deg)",
            zIndex: 2,
            opacity: 0.96,
          }}
        >
          <Screen variant={screens[2]} accent={accent} tint={screenTint} dark={darkScreen} />
        </Phone>
        <Phone
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%) translate(0px,10px) rotate(-1deg) scale(1.08)",
            zIndex: 3,
          }}
        >
          <Screen variant={screens[1]} accent={accent} tint={screenTint} dark={darkScreen} />
        </Phone>
      </div>
    </div>
  );
}
