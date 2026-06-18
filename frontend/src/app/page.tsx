import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const verticals = [
  { icon: "🏗️", title: "Real Estate", desc: "Strategic property acquisition, development, and management across India's fastest-growing markets. Airport zones, commercial hubs, and emerging corridors." },
  { icon: "💻", title: "Technology Solutions", desc: "AI-powered platforms, enterprise SaaS, and digital transformation services. From property tech to recruitment automation." },
  { icon: "👥", title: "Human Resources", desc: "Global talent acquisition, remote workforce solutions, and AI-driven recruitment platforms connecting India with the world." },
  { icon: "📊", title: "Investment Advisory", desc: "Data-driven investment strategies, portfolio management, and market intelligence across real estate, equities, and alternative assets." },
  { icon: "🌐", title: "International Trade", desc: "Cross-border commerce facilitation, supply chain optimization, and trade finance solutions across 40+ countries." },
  { icon: "⚡", title: "Energy & Infrastructure", desc: "Renewable energy projects, smart infrastructure development, and sustainable technology investments." },
];

const stats = [
  { value: "6", label: "Business Verticals", sub: "Diversified portfolio" },
  { value: "40+", label: "Countries", sub: "Global operations" },
  { value: "$50M+", label: "Assets Managed", sub: "Growing portfolio" },
  { value: "2023", label: "Founded", sub: "Wyoming, USA" },
];

const milestones = [
  { year: "2023", title: "UIG Founded", desc: "United Investing Group LLC registered in Wyoming, USA. Initial focus on real estate and technology." },
  { year: "2024", title: "Global Expansion", desc: "Expanded operations to 40+ countries. Launched HR division and international trade vertical." },
  { year: "2025", title: "ICP3A Launch", desc: "Introduced India's first satellite-grade property certification platform. 28 airport zones mapped." },
  { year: "2026", title: "Scale & Impact", desc: "Managing $50M+ in assets. 6 active verticals. 2,000+ clients served globally." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section className="gradient-hero" style={{ paddingTop: 136, paddingBottom: 96 }}>
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="lpi-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8">
              GLOBAL INVESTMENT & TECHNOLOGY GROUP
            </div>
            <h1 style={{ color: "white", fontSize: "clamp(2.6rem,6vw,4.75rem)", fontWeight: 800, lineHeight: 1.08, marginBottom: 24, letterSpacing: "-0.03em" }}>
              Building the Future<br />
              <span className="gradient-text">Across Borders.</span>
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "clamp(1rem,2.2vw,1.2rem)", maxWidth: 640, margin: "0 auto 44px", lineHeight: 1.75 }}>
              United Investing Group is a diversified investment and technology company operating across real estate, HR, trade, and digital solutions — connecting India with the global economy.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center", marginBottom: 56 }}>
              <Link href="/services" className="btn-gold" style={{ fontSize: "1rem", padding: "14px 34px" }}>Explore Our Services →</Link>
              <Link href="/about" className="btn-outline" style={{ fontSize: "1rem", padding: "14px 34px" }}>About UIG</Link>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section style={{ background: "#07101F", padding: "56px 0" }}>
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-5">
            {stats.map(s => (
              <div key={s.label} className="stat-card text-center">
                <div style={{ color: "#F59E0B", fontSize: "2.4rem", fontWeight: 800, fontFamily: "Space Grotesk,sans-serif", lineHeight: 1 }}>{s.value}</div>
                <div style={{ color: "white", fontWeight: 600, marginTop: 8, fontSize: "0.92rem" }}>{s.label}</div>
                <div style={{ color: "rgba(255,255,255,0.38)", fontSize: "0.76rem", marginTop: 3 }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </section>

        {/* VERTICALS */}
        <section style={{ padding: "96px 0", background: "white" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-label mb-3">OUR VERTICALS</p>
              <h2 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "#060D1F", letterSpacing: "-0.02em" }}>
                Diversified. Global. Results-Driven.
              </h2>
              <p style={{ color: "#64748B", maxWidth: 520, margin: "14px auto 0", fontSize: "1rem", lineHeight: 1.7 }}>
                Six interconnected business verticals creating value across continents.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verticals.map(v => (
                <div key={v.title} className="card-glow" style={{ borderRadius: 16, padding: 30, border: "1px solid #E2E8F0" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{v.icon}</div>
                  <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#0F172A", marginBottom: 8 }}>{v.title}</h3>
                  <p style={{ color: "#64748B", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section style={{ padding: "96px 0", background: "#F8FAFC" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="section-label mb-3">OUR APPROACH</p>
              <h2 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "#060D1F", letterSpacing: "-0.02em" }}>
                From Vision to Value
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { n: "01", title: "Identify", desc: "Market intelligence and AI-driven analysis to spot high-value opportunities across global markets." },
                { n: "02", title: "Invest", desc: "Strategic capital deployment with rigorous due diligence and risk management frameworks." },
                { n: "03", title: "Build", desc: "Operational excellence through technology, talent, and proven playbooks for each vertical." },
                { n: "04", title: "Scale", desc: "Sustainable growth with measurable outcomes, generating returns for stakeholders." },
              ].map(s => (
                <div key={s.n} style={{ display: "flex", gap: 16 }}>
                  <div className="timeline-dot">{s.n}</div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 6, fontSize: "1rem" }}>{s.title}</h3>
                    <p style={{ color: "#64748B", fontSize: "0.86rem", lineHeight: 1.7, margin: 0 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONES */}
        <section style={{ padding: "96px 0", background: "#060D1F" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-14">
              <p className="section-label mb-3" style={{ color: "#F59E0B" }}>OUR JOURNEY</p>
              <h2 style={{ fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 700, color: "white", letterSpacing: "-0.02em" }}>From Wyoming to the World</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map(m => (
                <div key={m.year} className="stat-card" style={{ padding: 24 }}>
                  <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: "1.5rem", fontFamily: "Space Grotesk,sans-serif", marginBottom: 8 }}>{m.year}</div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "0.95rem", marginBottom: 6 }}>{m.title}</div>
                  <div style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.8rem", lineHeight: 1.6 }}>{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "linear-gradient(135deg,#060D1F 0%,#0C1A3A 100%)", padding: "80px 0" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <div className="lpi-badge inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6">PARTNER WITH US</div>
            <h2 style={{ color: "white", fontSize: "clamp(1.75rem,4vw,2.75rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 14 }}>
              Let&apos;s Build Something Great Together
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 40 }}>
              Whether you&apos;re an investor, partner, or client — we&apos;d love to explore how UIG can create value for you.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12, justifyContent: "center" }}>
              <Link href="/contact" className="btn-gold" style={{ fontSize: "1rem", padding: "14px 36px" }}>Get in Touch →</Link>
              <Link href="/about" className="btn-outline" style={{ fontSize: "1rem", padding: "14px 36px" }}>Learn More</Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
