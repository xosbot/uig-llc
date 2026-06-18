"use client";
import Link from "next/link";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";

const links = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Contact", href: "/contact" },
  ],
  verticals: [
    "Real Estate",
    "Technology Solutions",
    "Human Resources",
    "Investment Advisory",
    "International Trade",
    "Energy & Infrastructure",
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export default function Footer() {
  return (
    <footer
      role="contentinfo"
      aria-label="Site footer"
      style={{
        background: "#0A0F1E",
        borderTop: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Brand — 5 cols */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <div
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
                    fontSize: "0.8rem",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  UIG
                </span>
              </div>
              <div>
                <span
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1rem",
                    fontFamily: "Space Grotesk, sans-serif",
                  }}
                >
                  United Investing Group
                </span>
              </div>
            </div>
            <p
              style={{
                color: "rgba(255,255,255,0.4)",
                fontSize: "0.875rem",
                lineHeight: 1.8,
                maxWidth: 340,
                marginBottom: 24,
              }}
            >
              A diversified investment and technology company building value
              across real estate, technology, human resources, and international
              trade. Connecting India with the global economy.
            </p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
                <MapPin size={14} />
                <span>Wyoming, USA · Delhi NCR · Mumbai · Bengaluru</span>
              </div>
              <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.35)", fontSize: "0.8rem" }}>
                <Mail size={14} />
                <span>contact@uigllc.org</span>
              </div>
            </div>
          </div>

          {/* Company — 2 cols */}
          <div className="lg:col-span-2">
            <h4
              style={{
                color: "rgba(255,255,255,0.5)",
                fontWeight: 700,
                fontSize: "0.7rem",
                marginBottom: 20,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Company
            </h4>
            <div className="flex flex-col gap-3">
              {links.company.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                  className="hover:text-white"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Verticals — 3 cols */}
          <div className="lg:col-span-3">
            <h4
              style={{
                color: "rgba(255,255,255,0.5)",
                fontWeight: 700,
                fontSize: "0.7rem",
                marginBottom: 20,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Verticals
            </h4>
            <div className="flex flex-col gap-3">
              {links.verticals.map((v) => (
                <span
                  key={v}
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.85rem",
                  }}
                >
                  {v}
                </span>
              ))}
            </div>
          </div>

          {/* Connect — 2 cols */}
          <div className="lg:col-span-2">
            <h4
              style={{
                color: "rgba(255,255,255,0.5)",
                fontWeight: 700,
                fontSize: "0.7rem",
                marginBottom: 20,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
              }}
            >
              Connect
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                aria-label="United Investing Group on LinkedIn"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                LinkedIn <ArrowUpRight size={12} />
              </a>
              <a
                href="#"
                aria-label="United Investing Group on Twitter"
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "0.85rem",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: 4,
                }}
              >
                Twitter <ArrowUpRight size={12} />
              </a>
              {links.legal.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "0.85rem",
                    textDecoration: "none",
                  }}
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.04)",
            marginTop: 56,
            paddingTop: 24,
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 16,
          }}
        >
          <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
            &copy; {new Date().getFullYear()} United Investing Group LLC. All
            rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.15)", fontSize: "0.7rem" }}>
            Registered in Wyoming, USA &middot; Operating Globally
          </p>
        </div>
      </div>
    </footer>
  );
}
