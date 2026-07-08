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
                <MagneticLink
                            href="https://www.linkedin.com/in/sachin-sanas-79793018/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                          display: "inline-flex",
                                          alignItems: "center",
                                          justifyContent: "center",
                                          width: 34,
                                          height: 34,
                                          borderRadius: 6,
                                          background: "#1A1614",
                                          color: "white",
                                          flexShrink: 0,
                            }}
                          >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                          </svg>
                </MagneticLink>

                
      </div>
    </nav>
  );
}
