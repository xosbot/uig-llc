"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ background: "#060D1F", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div style={{ width: 32, height: 32, borderRadius: 8, background: "linear-gradient(135deg,#1D4ED8,#3B82F6)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: "white", fontWeight: 800, fontSize: "0.75rem", fontFamily: "Space Grotesk, sans-serif" }}>UIG</span>
              </div>
              <span style={{ color: "white", fontWeight: 800, fontSize: "1rem", fontFamily: "Space Grotesk, sans-serif" }}>United Investing Group</span>
            </div>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", lineHeight: 1.7, maxWidth: 320, marginBottom: 20 }}>
              A global investment and technology company building value across real estate, technology, human resources, and international trade.
            </p>
            <p style={{ color: "rgba(255,255,255,0.25)", fontSize: "0.75rem" }}>
              Registered in Wyoming, USA
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", marginBottom: 16, letterSpacing: "0.05em" }}>COMPANY</h4>
            <div className="flex flex-col gap-3">
              <Link href="/about" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>About Us</Link>
              <Link href="/services" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>Services</Link>
              <Link href="/portfolio" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>Portfolio</Link>
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>Contact</Link>
            </div>
          </div>

          {/* Verticals */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", marginBottom: 16, letterSpacing: "0.05em" }}>VERTICALS</h4>
            <div className="flex flex-col gap-3">
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>Real Estate</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>Technology</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>Human Resources</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>Investment Advisory</span>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem" }}>International Trade</span>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: "white", fontWeight: 700, fontSize: "0.85rem", marginBottom: 16, letterSpacing: "0.05em" }}>LEGAL</h4>
            <div className="flex flex-col gap-3">
              <Link href="/privacy" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="/terms" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>Terms of Service</Link>
              <Link href="/contact" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.85rem", textDecoration: "none" }}>Contact Us</Link>
            </div>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", marginTop: 48, paddingTop: 24, display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: 16 }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "0.8rem" }}>
            © {new Date().getFullYear()} United Investing Group LLC. All rights reserved.
          </p>
          <p style={{ color: "rgba(255,255,255,0.2)", fontSize: "0.75rem" }}>
            Registered in Wyoming, USA · Operating Globally
          </p>
        </div>
      </div>
    </footer>
  );
}
