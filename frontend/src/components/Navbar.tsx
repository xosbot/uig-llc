"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(10,15,30,0.95)"
          : "rgba(10,15,30,0.6)",
        backdropFilter: "blur(20px) saturate(180%)",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline group" aria-label="United Investing Group — Home">
          <div
            className="transition-transform duration-300 group-hover:scale-105"
            style={{
              width: 40,
              height: 40,
              borderRadius: 12,
              background: "linear-gradient(135deg,#1E40AF,#3B82F6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 4px 12px rgba(30,64,175,0.3)",
            }}
          >
            <span
              style={{
                color: "white",
                fontWeight: 800,
                fontSize: "0.85rem",
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              UIG
            </span>
          </div>
          <div className="hidden sm:block">
            <span
              style={{
                color: "white",
                fontWeight: 700,
                fontSize: "1rem",
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "-0.02em",
              }}
            >
              United Investing Group
            </span>
            <div
              style={{
                color: "rgba(255,255,255,0.35)",
                fontSize: "0.65rem",
                fontWeight: 500,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginTop: -2,
              }}
            >
              Global Investment & Technology
            </div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/contact"
            className="btn-gold"
            style={{ padding: "10px 24px", fontSize: "0.85rem" }}
          >
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "white",
            padding: 8,
          }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav
          className="md:hidden px-6 pb-6 pt-4 flex flex-col gap-1"
          aria-label="Mobile navigation"
          role="menu"
          style={{
            background: "rgba(10,15,30,0.98)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link text-base block py-3"
              onClick={() => setOpen(false)}
              style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-gold mt-4 justify-center"
            onClick={() => setOpen(false)}
          >
            Get in Touch
            <ArrowRight size={14} />
          </Link>
        </nav>
      )}
    </nav>
  );
}
