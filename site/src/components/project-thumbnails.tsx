export function GoldLoanThumb() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          top: -80,
          right: -80,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(250,173,20,0.2)",
        }}
      />
      <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
        <div
          style={{
            background: "white",
            borderRadius: 12,
            padding: "20px 22px",
            boxShadow: "0 12px 40px rgba(180,130,0,0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 14,
              alignItems: "center",
            }}
          >
            <div style={{ fontSize: 11, fontFamily: "var(--font-body)", fontWeight: 600, color: "#1A1614" }}>
              Gold Loan Application
            </div>
            <div
              style={{
                fontSize: 10,
                padding: "2px 8px",
                background: "#FFFBE6",
                borderRadius: 100,
                color: "#AD6800",
                fontFamily: "var(--font-body)",
              }}
            >
              Step 2 of 5
            </div>
          </div>
          <div
            style={{
              height: 28,
              background: "#F8F5EF",
              border: "1px solid #E8E4DC",
              borderRadius: 6,
              marginBottom: 8,
              padding: "7px 12px",
            }}
          >
            <div style={{ height: 5, background: "#DDD", borderRadius: 3, width: "55%" }} />
          </div>
          <div style={{ height: 28, background: "#F8F5EF", border: "1px solid #E8E4DC", borderRadius: 6, marginBottom: 10 }} />
          <div style={{ display: "flex", gap: 8 }}>
            <div
              style={{
                flex: 1,
                height: 30,
                background: "#FAAD14",
                borderRadius: 6,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <div style={{ height: 5, background: "rgba(255,255,255,0.8)", borderRadius: 3, width: "60%" }} />
            </div>
            <div style={{ height: 30, width: 40, background: "#F0ECED", borderRadius: 6 }} />
          </div>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          left: 20,
          padding: "4px 12px",
          background: "rgba(250,173,20,0.18)",
          border: "1px solid rgba(250,173,20,0.4)",
          borderRadius: 100,
          fontSize: 10,
          fontFamily: "var(--font-body)",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#875800",
        }}
      >
        Fintech
      </div>
    </div>
  );
}

export function EasyPayThumb() {
  const rows = [
    { iconBg: "#EFEAFD", barBg: "#D8CCFA", tagBg: "#F2EEFE", tagColor: "#5B3DF5", tag: "Available" },
    { iconBg: "#F2EEFE", barBg: "#C9B8F7", tagBg: "#F2EEFE", tagColor: "#5B3DF5", tag: "Available" },
    { iconBg: "#FFF1B8", barBg: "#FFE58F", tagBg: "#FFFBE6", tagColor: "#AD6800", tag: "Reserved" },
    { iconBg: "#F0ECED", barBg: "#CCC5C6", tagBg: "#FFF1F0", tagColor: "#E2483D", tag: "Full" },
  ];
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          top: -60,
          left: -60,
          width: 220,
          height: 220,
          borderRadius: "50%",
          background: "rgba(91,61,245,0.15)",
        }}
      />
      <div
        style={{
          position: "absolute",
          inset: 24,
          background: "white",
          borderRadius: 12,
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(91,61,245,0.14)",
        }}
      >
        <div
          style={{
            padding: "14px 16px",
            background: "#F8F6FE",
            borderBottom: "1px solid #E6E6E6",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: 11, fontFamily: "var(--font-body)", fontWeight: 600, color: "#1A1614" }}>
            Nearby Parking
          </div>
          <div
            style={{
              padding: "3px 10px",
              background: "#F2EEFE",
              borderRadius: 100,
              fontSize: 10,
              fontFamily: "var(--font-body)",
              color: "#5B3DF5",
              fontWeight: 500,
            }}
          >
            12 Spots
          </div>
        </div>
        <div style={{ padding: "0 16px" }}>
          {rows.map((row, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                padding: "10px 0",
                borderBottom: i < rows.length - 1 ? "1px solid #F2F2F2" : undefined,
                gap: 12,
                alignItems: "center",
              }}
            >
              <div style={{ width: 24, height: 24, borderRadius: 6, background: row.iconBg }} />
              <div style={{ flex: 2, height: 5, background: "#E6E6E6", borderRadius: 3 }} />
              <div style={{ flex: 1, height: 5, background: row.barBg, borderRadius: 3 }} />
              <div
                style={{
                  padding: "2px 8px",
                  background: row.tagBg,
                  borderRadius: 100,
                  fontSize: 10,
                  fontFamily: "var(--font-body)",
                  color: row.tagColor,
                }}
              >
                {row.tag}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "4px 12px",
          background: "rgba(91,61,245,0.15)",
          border: "1px solid rgba(91,61,245,0.3)",
          borderRadius: 100,
          fontSize: 10,
          fontFamily: "var(--font-body)",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#5B3DF5",
        }}
      >
        Mobile
      </div>
    </div>
  );
}

export function BankingDashboardThumb() {
  const metrics = [
    { label: "Total AUM", value: "₹2.4Cr", delta: "↑ 12.4%", deltaColor: "#16A197", highlight: false },
    { label: "Active Loans", value: "3,412", delta: "↑ 4.2%", deltaColor: "#FAAD14", highlight: false },
    { label: "NPA Ratio", value: "0.84%", delta: "↓ 0.3%", deltaColor: "#16A197", highlight: true },
  ];
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.08 }} preserveAspectRatio="none">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <svg
        style={{ position: "absolute", bottom: 80, left: 28, right: 28, height: 140 }}
        viewBox="0 0 560 140"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#1A75B7" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#1A75B7" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 110 C40 110 60 80 100 75 C140 70 180 90 220 60 C260 30 300 40 340 25 C380 10 420 35 460 20 C500 5 530 15 560 10"
          stroke="#1A75B7"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 110 C40 110 60 80 100 75 C140 70 180 90 220 60 C260 30 300 40 340 25 C380 10 420 35 460 20 C500 5 530 15 560 10 L560 140 L0 140Z"
          fill="url(#chartGrad)"
        />
        <path
          d="M0 120 C60 120 100 100 160 95 C220 90 260 110 320 100 C380 90 440 105 560 98"
          stroke="#16A197"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 4"
          opacity="0.6"
        />
      </svg>
      <div style={{ position: "absolute", top: 20, left: 20, right: 20, display: "flex", gap: 10 }}>
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              flex: 1,
              background: m.highlight ? "rgba(26,117,183,0.2)" : "rgba(255,255,255,0.06)",
              border: m.highlight ? "1px solid rgba(26,117,183,0.35)" : "1px solid rgba(255,255,255,0.1)",
              borderRadius: 8,
              padding: 12,
            }}
          >
            <div style={{ fontSize: 9.5, fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.45)", marginBottom: 4 }}>
              {m.label}
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 16, color: "white" }}>
              {m.value}
            </div>
            <div style={{ fontSize: 9, fontFamily: "var(--font-body)", color: m.deltaColor, marginTop: 2 }}>
              {m.delta}
            </div>
          </div>
        ))}
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "4px 12px",
          background: "rgba(26,117,183,0.25)",
          border: "1px solid rgba(26,117,183,0.4)",
          borderRadius: 100,
          fontSize: 10,
          fontFamily: "var(--font-body)",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#77ACD7",
        }}
      >
        Dashboard
      </div>
    </div>
  );
}

export function MobileBankingThumb() {
  return (
    <div style={{ position: "absolute", inset: 0 }}>
      <div
        style={{
          position: "absolute",
          bottom: -60,
          right: -60,
          width: 280,
          height: 280,
          borderRadius: "50%",
          background: "rgba(22,161,151,0.18)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: -40,
          left: -40,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: "rgba(22,161,151,0.1)",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 130,
          height: 240,
          borderRadius: 28,
          border: "2px solid rgba(255,255,255,0.8)",
          background: "rgba(255,255,255,0.3)",
          backdropFilter: "blur(6px)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 38,
            height: 4,
            background: "rgba(255,255,255,0.8)",
            borderRadius: 2,
          }}
        />
        <div style={{ position: "absolute", top: 24, left: 8, right: 8, display: "flex", flexDirection: "column", gap: 7 }}>
          <div
            style={{
              height: 30,
              background: "rgba(22,161,151,0.35)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              padding: "0 10px",
            }}
          >
            <div style={{ height: 5, background: "rgba(255,255,255,0.6)", borderRadius: 3, width: "50%" }} />
          </div>
          <div style={{ height: 44, background: "rgba(255,255,255,0.5)", borderRadius: 8 }} />
          <div style={{ height: 18, background: "rgba(255,255,255,0.4)", borderRadius: 6 }} />
          <div style={{ height: 18, background: "rgba(255,255,255,0.4)", borderRadius: 6, width: "70%" }} />
          <div style={{ height: 30, background: "rgba(22,161,151,0.5)", borderRadius: 8, marginTop: 4 }} />
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          top: 20,
          right: 20,
          padding: "4px 12px",
          background: "rgba(22,161,151,0.18)",
          border: "1px solid rgba(22,161,151,0.4)",
          borderRadius: 100,
          fontSize: 10,
          fontFamily: "var(--font-body)",
          letterSpacing: "0.07em",
          textTransform: "uppercase",
          color: "#006060",
        }}
      >
        Mobile
      </div>
    </div>
  );
}

const thumbnailBg: Record<string, string> = {
  "gold-loan-origination-system": "linear-gradient(145deg,#FEF0C5,#F5D88A)",
  "easy-pay-parking-app": "linear-gradient(145deg,#EFEAFD,#D2C2FA)",
  "banking-analytics-dashboard": "#0F0D0C",
  "mobile-banking-app": "linear-gradient(145deg,#DFF5F4,#A4DCD9)",
};

const thumbnailComponents: Record<string, React.ComponentType> = {
  "gold-loan-origination-system": GoldLoanThumb,
  "easy-pay-parking-app": EasyPayThumb,
  "banking-analytics-dashboard": BankingDashboardThumb,
  "mobile-banking-app": MobileBankingThumb,
};

export function ProjectThumbnail({
  slug,
  className,
  height = 360,
}: {
  slug: string;
  className?: string;
  height?: number | string;
}) {
  const Thumb = thumbnailComponents[slug];
  return (
    <div
      style={{
        borderRadius: 16,
        overflow: "hidden",
        background: thumbnailBg[slug] ?? "#0F0D0C",
        position: "relative",
        height,
      }}
    >
      <div className={className} style={{ position: "absolute", inset: 0, transition: "transform 0.6s cubic-bezier(0.2,0,0,1)" }}>
        {Thumb ? <Thumb /> : null}
      </div>
    </div>
  );
}
