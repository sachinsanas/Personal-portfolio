"use client";

import { useEffect, useRef } from "react";

export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const spot = ref.current;
    if (!spot) return;
    let raf = 0;
    const move = (e: MouseEvent) => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        spot.style.left = `${e.clientX}px`;
        spot.style.top = `${e.clientY}px`;
      });
    };
    document.addEventListener("mousemove", move, { passive: true });
    return () => document.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      style={{
        position: "fixed",
        width: 480,
        height: 480,
        borderRadius: "50%",
        background:
          "radial-gradient(circle, rgba(26,117,183,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
        transform: "translate(-50%,-50%)",
        zIndex: 1,
        top: -999,
        left: -999,
        transition: "left 0.08s ease, top 0.08s ease",
      }}
    />
  );
}
