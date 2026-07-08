export function Footer() {
  return (
    <footer
      style={{
        background: "#1A1614",
        padding: "20px 72px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <span style={{ fontSize: 12, fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.25)" }}>
        © 2025 Sachin Sanas. All rights reserved.
      </span>
      <div style={{ display: "flex", gap: 24 }}>
        <a
          href="https://www.linkedin.com/in/sachin-sanas-79793018/"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
          style={{ fontSize: 12, fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}
        >
          LinkedIn
        </a>
        <a href="#" className="footer-link" style={{ fontSize: 12, fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}>
          Dribbble
        </a>
        <a href="#" className="footer-link" style={{ fontSize: 12, fontFamily: "var(--font-body)", color: "rgba(255,255,255,0.3)" }}>
          Behance
        </a>
      </div>
    </footer>
  );
}
