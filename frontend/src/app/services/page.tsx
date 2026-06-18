import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

const services = [
  {
    icon: "🏗️",
    title: "Real Estate Acquisition",
    desc: "Strategic property acquisition across India's airport zones and commercial hubs. AI-powered lead scoring, automated outreach, and satellite-grade LPI certification.",
    features: ["Airport zone geofencing (28 airports)", "AI lead scoring & outreach", "LPI satellite certification", "11-stage CRM pipeline"],
    link: "/contact",
  },
  {
    icon: "💻",
    title: "Technology Solutions",
    desc: "Custom AI platforms, enterprise SaaS, and digital transformation services. From property tech to recruitment automation.",
    features: ["AI/ML platform development", "Enterprise SaaS products", "Digital transformation consulting", "Custom automation workflows"],
    link: "/contact",
  },
  {
    icon: "👥",
    title: "Human Resources",
    desc: "Global talent acquisition connecting Indian professionals with remote opportunities worldwide. AI-powered matching and screening.",
    features: ["AI candidate screening", "Global remote matching", "RecruitGPT platform", "40+ country coverage"],
    link: "/contact",
  },
  {
    icon: "📊",
    title: "Investment Advisory",
    desc: "Data-driven investment strategies across real estate, equities, and alternative assets. Portfolio management and market intelligence.",
    features: ["Portfolio management", "Market intelligence", "Risk assessment", "Due diligence support"],
    link: "/contact",
  },
  {
    icon: "🌐",
    title: "International Trade",
    desc: "Cross-border commerce facilitation, supply chain optimization, and trade finance solutions across 40+ countries.",
    features: ["Trade finance facilitation", "Supply chain optimization", "Cross-border payments", "Compliance management"],
    link: "/contact",
  },
  {
    icon: "⚡",
    title: "Energy & Infrastructure",
    desc: "Renewable energy projects, smart infrastructure development, and sustainable technology investments.",
    features: ["Renewable energy projects", "Smart infrastructure", "Sustainable tech investments", "ESG compliance"],
    link: "/contact",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 100, minHeight: "100vh" }}>
        <section className="gradient-hero" style={{ padding: "80px 0" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="section-label mb-3">OUR SERVICES</p>
            <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Six Verticals. One Vision.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              Comprehensive investment and technology solutions across real estate, HR, trade, and digital platforms.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-12">
              {services.map((s, i) => (
                <div key={s.title} className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`} style={i % 2 === 1 ? { direction: "rtl" } : {}}>
                  <div style={{ direction: "ltr" }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{s.icon}</div>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 12 }}>{s.title}</h2>
                    <p style={{ color: "#64748B", lineHeight: 1.8, marginBottom: 20 }}>{s.desc}</p>
                    <Link href={s.link} className="btn-gold" style={{ padding: "10px 24px", fontSize: "0.875rem" }}>
                      Learn More →
                    </Link>
                  </div>
                  <div style={{ direction: "ltr" }}>
                    <div className="card-glow" style={{ borderRadius: 16, padding: 28, border: "1px solid #E2E8F0" }}>
                      <div className="flex flex-col gap-4">
                        {s.features.map(f => (
                          <div key={f} className="flex items-center gap-3">
                            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#F59E0B", flexShrink: 0 }} />
                            <span style={{ color: "#334155", fontSize: "0.9rem" }}>{f}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
