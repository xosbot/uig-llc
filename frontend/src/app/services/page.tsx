import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Building2,
  Cpu,
  Users,
  TrendingUp,
  Globe2,
  Zap,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Real Estate Acquisition",
    desc: "Strategic property acquisition across India's airport zones and commercial hubs. AI-powered lead scoring, automated outreach, and satellite-grade LPI certification.",
    features: ["Airport zone geofencing (28 airports)", "AI lead scoring & outreach", "LPI satellite certification", "11-stage CRM pipeline"],
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    color: "#3B82F6",
    link: "/contact",
  },
  {
    icon: Cpu,
    title: "Technology Solutions",
    desc: "Custom AI platforms, enterprise SaaS, and digital transformation services. From property tech to recruitment automation.",
    features: ["AI/ML platform development", "Enterprise SaaS products", "Digital transformation consulting", "Custom automation workflows"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    color: "#8B5CF6",
    link: "/contact",
  },
  {
    icon: Users,
    title: "Human Resources",
    desc: "Global talent acquisition connecting Indian professionals with remote opportunities worldwide. AI-powered matching and screening.",
    features: ["AI candidate screening", "Global remote matching", "RecruitGPT platform", "40+ country coverage"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    color: "#06B6D4",
    link: "/contact",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Data-driven investment strategies across real estate, equities, and alternative assets. Portfolio management and market intelligence.",
    features: ["Portfolio management", "Market intelligence", "Risk assessment", "Due diligence support"],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    color: "#10B981",
    link: "/contact",
  },
  {
    icon: Globe2,
    title: "International Trade",
    desc: "Cross-border commerce facilitation, supply chain optimization, and trade finance solutions across 40+ countries.",
    features: ["Trade finance facilitation", "Supply chain optimization", "Cross-border payments", "Compliance management"],
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80",
    color: "#F59E0B",
    link: "/contact",
  },
  {
    icon: Zap,
    title: "Energy & Infrastructure",
    desc: "Renewable energy projects, smart infrastructure development, and sustainable technology investments.",
    features: ["Renewable energy projects", "Smart infrastructure", "Sustainable tech investments", "ESG compliance"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80",
    color: "#EF4444",
    link: "/contact",
  },
];

export default function Services() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Hero */}
        <section className="gradient-hero relative" style={{ padding: "100px 0", minHeight: 500 }}>
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.12 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(165deg, rgba(10,15,30,0.95), rgba(17,24,39,0.8))" }} />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <span className="section-label mb-4 inline-block">Our Services</span>
            <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Six Verticals. One Vision.
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              Comprehensive investment and technology solutions across real estate, HR, trade, and digital platforms.
            </p>
          </div>
        </section>

        {/* Services */}
        <section style={{ padding: "100px 0", background: "white" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-20">
              {services.map((s, i) => {
                const Icon = s.icon;
                const isReversed = i % 2 === 1;
                return (
                  <div
                    key={s.title}
                    className={`grid lg:grid-cols-2 gap-16 items-center ${isReversed ? "lg:direction-rtl" : ""}`}
                    style={isReversed ? { direction: "rtl" } : {}}
                  >
                    {/* Image */}
                    <div style={{ direction: "ltr" }} className="relative group">
                      <div
                        style={{
                          borderRadius: 24,
                          overflow: "hidden",
                          boxShadow: "0 30px 80px rgba(0,0,0,0.1)",
                        }}
                      >
                        <img
                          src={s.image}
                          alt={s.title}
                          style={{
                            width: "100%",
                            height: 400,
                            objectFit: "cover",
                            transition: "transform 0.6s",
                          }}
                          className="group-hover:scale-105"
                        />
                      </div>
                      {/* Icon badge */}
                      <div
                        className="absolute -top-4 -right-4"
                        style={{
                          width: 64,
                          height: 64,
                          borderRadius: 16,
                          background: s.color,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 8px 24px ${s.color}40`,
                        }}
                      >
                        <Icon size={28} style={{ color: "white" }} />
                      </div>
                    </div>

                    {/* Content */}
                    <div style={{ direction: "ltr" }}>
                      <h2
                        style={{
                          fontSize: "clamp(1.4rem,3vw,1.8rem)",
                          fontWeight: 800,
                          color: "#0F172A",
                          marginBottom: 16,
                          letterSpacing: "-0.02em",
                          fontFamily: "Space Grotesk",
                        }}
                      >
                        {s.title}
                      </h2>
                      <p style={{ color: "#64748B", lineHeight: 1.8, marginBottom: 28, fontSize: "1rem" }}>
                        {s.desc}
                      </p>
                      <div
                        style={{
                          background: "#F8FAFC",
                          borderRadius: 16,
                          padding: "24px 28px",
                          marginBottom: 28,
                          border: "1px solid #E2E8F0",
                        }}
                      >
                        <div className="flex flex-col gap-3">
                          {s.features.map((f) => (
                            <div key={f} className="flex items-center gap-3">
                              <CheckCircle2 size={16} style={{ color: s.color, flexShrink: 0 }} />
                              <span style={{ color: "#334155", fontSize: "0.9rem" }}>{f}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <Link href={s.link} className="btn-primary" style={{ padding: "12px 28px" }}>
                        Get Started
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 0", background: "#0A0F1E" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="section-label mb-6 inline-block">Ready to Start?</span>
            <h2 style={{ color: "white", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Let&apos;s Discuss Your Needs
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 40 }}>
              Our team is ready to explore how UIG can create value for your organization.
            </p>
            <Link href="/contact" className="btn-gold">
              Contact Us
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
