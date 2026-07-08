"use client";

import Link from "next/link";
import { useRef } from "react";
import type { CSSProperties, MouseEvent, ReactNode } from "react";

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  target?: string;
  rel?: string;
}

export function MagneticLink({
  href,
  children,
  className,
  style,
  target,
  rel,
}: MagneticLinkProps) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const handleMouseMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = ((e.clientX - r.left) / r.width - 0.5) * 15;
    const y = ((e.clientY - r.top) / r.height - 0.5) * 15;
    el.style.transform = `translate(${x}px,${y}px)`;
    el.style.transition = "transform 0.15s ease";
  };

  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "translate(0,0)";
    el.style.transition = "transform 0.55s cubic-bezier(0.2,0,0,1)";
  };

  const isExternal = href.startsWith("http://") || href.startsWith("https://");

  if (isExternal) {
    return (
      <a
        ref={ref}
        href={href}
        className={className}
        style={style}
        target={target ?? "_blank"}
        rel={rel ?? "noopener noreferrer"}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={className}
      style={style}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </Link>
  );
}
