"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: "rgba(6,13,31,0.92)", backdropFilter: "blur(16px)", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div style={{ width: 36, height: 36, borderRadius: 10, background: "linear-gradient(135deg,#1D4ED8,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "white", fontWeight: 800, fontSize: "0.85rem", fontFamily: "Space Grotesk, sans-serif" }}>UIG</span>
          </div>
          <div>
            <span style={{ color: "white", fontWeight: 800, fontSize: "1.1rem", fontFamily: "Space Grotesk, sans-serif", letterSpacing: "-0.02em" }}>
              United Investing Group
            </span>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/about" className="nav-link">About</Link>
          <Link href="/services" className="nav-link">Services</Link>
          <Link href="/portfolio" className="nav-link">Portfolio</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Link href="/contact" className="btn-gold" style={{ padding: "8px 20px", fontSize: "0.875rem" }}>
            Get in Touch
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)} style={{ background: "none", border: "none", cursor: "pointer", color: "white", padding: 4 }}>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {open ? <path d="M18 6L6 18M6 6l12 12" /> : <><path d="M3 12h18" /><path d="M3 6h18" /><path d="M3 18h18" /></>}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ background: "#060D1F", borderTop: "1px solid rgba(255,255,255,0.07)" }} className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-4">
          {["About", "Services", "Portfolio", "Contact"].map(item => (
            <Link key={item} href={`/${item.toLowerCase()}`} className="nav-link text-base" onClick={() => setOpen(false)}>{item}</Link>
          ))}
          <Link href="/contact" className="btn-gold mt-2 justify-center" onClick={() => setOpen(false)}>Get in Touch</Link>
        </div>
      )}
    </nav>
  );
}
