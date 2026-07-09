"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MagneticLink } from "./magnetic-link";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#projects", label: "Work" },
  { href: "/#experience", label: "Experience" },
  { href: "/#writing", label: "Writing" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: scrolled ? "11px 72px" : "20px 72px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        background: scrolled
          ? "rgba(248,245,239,0.97)"
          : "rgba(248,245,239,0.88)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        borderBottom: "1px solid rgba(26,22,20,0.07)",
        boxShadow: scrolled ? "0 2px 24px rgba(26,22,20,0.07)" : "none",
        transition: "padding 0.3s ease, background 0.3s ease, box-shadow 0.3s ease",
      }}
    >
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: 11 }}>
        <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
          <rect width="34" height="34" rx="7" fill="#1A1614" />
          <path
            d="M23 9C23 6 11 6 11 12C11 18 23 16 23 22C23 28 11 28 11 25"
            stroke="white"
            strokeWidth="1.9"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
        <div>
          <div
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              fontSize: 13.5,
              letterSpacing: "-0.01em",
              color: "#1A1614",
              lineHeight: 1.15,
            }}
          >
            SACHIN SANAS
          </div>
          <div
            style={{
              fontSize: 9,
              letterSpacing: "0.13em",
              textTransform: "uppercase",
              color: "#908A8A",
              fontFamily: "var(--font-body)",
              lineHeight: 1,
            }}
          >
            UX/UI Designer
          </div>
        </div>
      </Link>

      <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="nav-link"
            style={{
              fontSize: 13.5,
              fontFamily: "var(--font-body)",
  color: "#726B6C",
            }}
          >
            {link.label}
          </a>
        ))}
        <MagneticLink
          href="/#contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 7,
            padding: "9px 22px",
            background: "#1A1614",
            color: "white",
            borderRadius: 100,
            fontSize: 13,
            fontFamily: "var(--font-body)",
            fontWeight: 500,
            transition: "opacity 0.2s ease",
          }}
        >
          Let&apos;s Talk
          <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
            <path
              d="M1.5 5.5H9.5M6 2L9.5 5.5L6 9"
              stroke="white"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </MagneticLink>


                
      </div>
    </nav>
  );
}
