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
  ArrowUpRight,
  CheckCircle2,
  Play,
} from "lucide-react";

const verticals = [
  {
    icon: Building2,
    title: "Real Estate",
    desc: "Strategic property acquisition, development, and management across India's fastest-growing markets.",
    color: "#3B82F6",
    bg: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.15)",
  },
  {
    icon: Cpu,
    title: "Technology",
    desc: "AI-powered platforms, enterprise SaaS, and digital transformation services across industries.",
    color: "#8B5CF6",
    bg: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.15)",
  },
  {
    icon: Users,
    title: "Human Resources",
    desc: "Global talent acquisition and AI-driven recruitment connecting India with the world.",
    color: "#06B6D4",
    bg: "rgba(6,182,212,0.08)",
    border: "rgba(6,182,212,0.15)",
  },
  {
    icon: TrendingUp,
    title: "Investment Advisory",
    desc: "Data-driven strategies, portfolio management, and market intelligence across asset classes.",
    color: "#10B981",
    bg: "rgba(16,185,129,0.08)",
    border: "rgba(16,185,129,0.15)",
  },
  {
    icon: Globe2,
    title: "International Trade",
    desc: "Cross-border commerce facilitation, supply chain optimization, and trade finance.",
    color: "#F59E0B",
    bg: "rgba(245,158,11,0.08)",
    border: "rgba(245,158,11,0.15)",
  },
  {
    icon: Zap,
    title: "Energy & Infrastructure",
    desc: "Renewable energy projects, smart infrastructure, and sustainable technology investments.",
    color: "#EF4444",
    bg: "rgba(239,68,68,0.08)",
    border: "rgba(239,68,68,0.15)",
  },
];

const stats = [
  { value: "6", label: "Business Verticals" },
  { value: "40+", label: "Countries" },
  { value: "$50M+", label: "Assets Under Management" },
  { value: "2,000+", label: "Clients Served" },
];

const processSteps = [
  {
    n: "01",
    title: "Identify",
    desc: "AI-driven market intelligence to spot high-value opportunities across global markets.",
  },
  {
    n: "02",
    title: "Invest",
    desc: "Strategic capital deployment with rigorous due diligence and risk frameworks.",
  },
  {
    n: "03",
    title: "Build",
    desc: "Operational excellence through technology, talent, and proven playbooks.",
  },
  {
    n: "04",
    title: "Scale",
    desc: "Sustainable growth with measurable outcomes for all stakeholders.",
  },
];

const milestones = [
  { year: "2023", title: "Founded in Wyoming", desc: "UIG LLC registered with initial focus on real estate and technology development." },
  { year: "2024", title: "Global Expansion", desc: "Expanded to 40+ countries. Launched HR division and international trade vertical." },
  { year: "2025", title: "Platform Launch", desc: "Deployed ICP3A, RecruitGPT, and trade facilitation platforms across 28 airport zones." },
  { year: "2026", title: "Scale & Impact", desc: "Managing $50M+ in assets across 6 verticals with teams on 3 continents." },
];

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        {/* HERO */}
        <section
          className="gradient-hero relative"
          style={{ paddingTop: 160, paddingBottom: 100, minHeight: "100vh", display: "flex", alignItems: "center" }}
        >
          {/* Background image */}
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                opacity: 0.15,
              }}
            />
            <div
              className="absolute inset-0"
              style={{
                background: "linear-gradient(165deg, rgba(10,15,30,0.95) 0%, rgba(17,24,39,0.85) 50%, rgba(30,41,59,0.7) 100%)",
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left — Copy */}
              <div>
                <div className="animate-fadeInUp delay-1">
                  <span className="section-label mb-6 inline-block">
                    Global Investment & Technology Group
                  </span>
                </div>
                <h1
                  className="animate-fadeInUp delay-2"
                  style={{
                    color: "white",
                    fontSize: "clamp(2.5rem,5.5vw,4.2rem)",
                    fontWeight: 800,
                    lineHeight: 1.08,
                    marginBottom: 24,
                    letterSpacing: "-0.03em",
                  }}
                >
                  Building the Future
                  <br />
                  <span className="gradient-text">Across Borders.</span>
                </h1>
                <p
                  className="animate-fadeInUp delay-3"
                  style={{
                    color: "rgba(255,255,255,0.55)",
                    fontSize: "clamp(1rem,2vw,1.15rem)",
                    maxWidth: 520,
                    lineHeight: 1.8,
                    marginBottom: 40,
                  }}
                >
                  United Investing Group is a diversified investment and technology company
                  operating across real estate, HR, trade, and digital solutions — connecting
                  India with the global economy.
                </p>
                <div className="animate-fadeInUp delay-4 flex flex-wrap gap-4">
                  <Link href="/services" className="btn-gold">
                    Explore Our Services
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/about" className="btn-outline">
                    About UIG
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="animate-fadeInUp delay-5 mt-12 flex flex-wrap gap-6">
                  {["Wyoming, USA Registered", "40+ Country Operations", "SOC 2 Compliant"].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <CheckCircle2 size={14} style={{ color: "#10B981" }} />
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.75rem", fontWeight: 500 }}>
                        {t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — Image card */}
              <div className="animate-fadeInUp delay-3 hidden lg:block">
                <div className="relative">
                  <div
                    style={{
                      borderRadius: 24,
                      overflow: "hidden",
                      boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <img
                      src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                      alt="UIG Office"
                      style={{ width: "100%", height: 400, objectFit: "cover" }}
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background: "linear-gradient(180deg, transparent 50%, rgba(10,15,30,0.8) 100%)",
                      }}
                    />
                  </div>
                  {/* Floating card */}
                  <div
                    className="absolute -bottom-6 -left-6"
                    style={{
                      background: "rgba(10,15,30,0.9)",
                      backdropFilter: "blur(20px)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 16,
                      padding: "20px 24px",
                      boxShadow: "0 20px 60px rgba(0,0,0,0.4)",
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        style={{
                          width: 44,
                          height: 44,
                          borderRadius: 12,
                          background: "linear-gradient(135deg,#10B981,#059669)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <TrendingUp size={20} style={{ color: "white" }} />
                      </div>
                      <div>
                        <div style={{ color: "white", fontWeight: 700, fontSize: "1.1rem", fontFamily: "Space Grotesk" }}>
                          $50M+
                        </div>
                        <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.7rem" }}>
                          Assets Under Management
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS BAR */}
        <section style={{ background: "#0A0F1E", padding: "48px 0", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div
                  style={{
                    color: "#F59E0B",
                    fontSize: "clamp(1.8rem,3vw,2.5rem)",
                    fontWeight: 800,
                    fontFamily: "Space Grotesk,sans-serif",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
                <div style={{ color: "rgba(255,255,255,0.5)", fontWeight: 500, marginTop: 8, fontSize: "0.8rem" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VERTICALS */}
        <section style={{ padding: "120px 0", background: "white" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label mb-4 inline-block">Our Verticals</span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  letterSpacing: "-0.02em",
                  marginBottom: 16,
                }}
              >
                Diversified. Global. Results-Driven.
              </h2>
              <p style={{ color: "#64748B", maxWidth: 520, margin: "0 auto", fontSize: "1rem", lineHeight: 1.7 }}>
                Six interconnected business verticals creating value across continents through technology and capital.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {verticals.map((v) => {
                const Icon = v.icon;
                return (
                  <div key={v.title} className="card-white group cursor-pointer">
                    <div
                      className="mb-5 transition-transform duration-300 group-hover:scale-110"
                      style={{
                        width: 56,
                        height: 56,
                        borderRadius: 14,
                        background: v.bg,
                        border: `1px solid ${v.border}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Icon size={24} style={{ color: v.color }} />
                    </div>
                    <h3
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 700,
                        color: "#0F172A",
                        marginBottom: 10,
                        fontFamily: "Space Grotesk",
                      }}
                    >
                      {v.title}
                    </h3>
                    <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                      {v.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* IMAGE FEATURE SECTION */}
        <section style={{ padding: "120px 0", background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Image */}
              <div className="relative">
                <div
                  style={{
                    borderRadius: 24,
                    overflow: "hidden",
                    boxShadow: "0 40px 80px rgba(0,0,0,0.1)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                    alt="Global operations"
                    style={{ width: "100%", height: 480, objectFit: "cover" }}
                  />
                </div>
                {/* Stats overlay */}
                <div
                  className="absolute -bottom-8 -right-8"
                  style={{
                    background: "white",
                    borderRadius: 20,
                    padding: "24px 32px",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
                    border: "1px solid #E2E8F0",
                  }}
                >
                  <div style={{ color: "#F59E0B", fontWeight: 800, fontSize: "2rem", fontFamily: "Space Grotesk" }}>
                    40+
                  </div>
                  <div style={{ color: "#0F172A", fontWeight: 600, fontSize: "0.85rem" }}>Countries</div>
                  <div style={{ color: "#94A3B8", fontSize: "0.75rem" }}>Global operations</div>
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="section-label mb-4 inline-block">Why UIG</span>
                <h2
                  style={{
                    fontSize: "clamp(1.6rem,3.5vw,2.4rem)",
                    fontWeight: 800,
                    color: "#0F172A",
                    letterSpacing: "-0.02em",
                    marginBottom: 20,
                    lineHeight: 1.15,
                  }}
                >
                  A Global Platform Built for the Future
                </h2>
                <p style={{ color: "#64748B", lineHeight: 1.8, marginBottom: 32, fontSize: "1rem" }}>
                  UIG combines deep local expertise in India with a global operational framework spanning 40+ countries.
                  Our technology-first approach means every vertical is powered by AI, automation, and data intelligence.
                </p>
                <div className="flex flex-col gap-5">
                  {[
                    "AI-powered decision making across all verticals",
                    "Direct operations in India's top growth markets",
                    "Transparent reporting and partner dashboards",
                    "Compliance-first approach in every jurisdiction",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} style={{ color: "#10B981", marginTop: 2, flexShrink: 0 }} />
                      <span style={{ color: "#334155", fontSize: "0.9rem", lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Link href="/about" className="btn-primary">
                    Learn More About Us
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW WE WORK */}
        <section style={{ padding: "120px 0", background: "white" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label mb-4 inline-block">Our Approach</span>
              <h2
                style={{
                  fontSize: "clamp(1.8rem,4vw,2.8rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  letterSpacing: "-0.02em",
                }}
              >
                From Vision to Value
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((s) => (
                <div key={s.n} className="relative">
                  <div className="timeline-dot mb-5">{s.n}</div>
                  <h3
                    style={{
                      fontWeight: 700,
                      color: "#0F172A",
                      marginBottom: 8,
                      fontSize: "1.05rem",
                      fontFamily: "Space Grotesk",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* MILESTONES */}
        <section
          className="grid-pattern"
          style={{ padding: "120px 0", background: "#0A0F1E" }}
        >
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label mb-4 inline-block">Our Journey</span>
              <h2 style={{ fontSize: "clamp(1.8rem,4vw,2.8rem)", fontWeight: 800, color: "white", letterSpacing: "-0.02em" }}>
                From Wyoming to the World
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {milestones.map((m) => (
                <div key={m.year} className="stat-card">
                  <div
                    style={{
                      color: "#F59E0B",
                      fontWeight: 800,
                      fontSize: "1.6rem",
                      fontFamily: "Space Grotesk,sans-serif",
                      marginBottom: 10,
                    }}
                  >
                    {m.year}
                  </div>
                  <div style={{ color: "white", fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>
                    {m.title}
                  </div>
                  <div style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.82rem", lineHeight: 1.65 }}>
                    {m.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "120px 0", background: "white" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div
              style={{
                background: "linear-gradient(135deg, #0A0F1E 0%, #1E293B 100%)",
                borderRadius: 32,
                padding: "clamp(48px, 8vw, 80px)",
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Background decoration */}
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: "radial-gradient(circle at 30% 50%, rgba(59,130,246,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 50%, rgba(217,119,6,0.05) 0%, transparent 50%)",
                }}
              />
              <div className="relative z-10">
                <span className="section-label mb-6 inline-block">Partner With Us</span>
                <h2
                  style={{
                    color: "white",
                    fontSize: "clamp(1.8rem,4vw,2.8rem)",
                    fontWeight: 800,
                    letterSpacing: "-0.02em",
                    marginBottom: 16,
                  }}
                >
                  Let&apos;s Build Something Great Together
                </h2>
                <p
                  style={{
                    color: "rgba(255,255,255,0.5)",
                    fontSize: "1rem",
                    lineHeight: 1.75,
                    marginBottom: 40,
                    maxWidth: 480,
                    margin: "0 auto 40px",
                  }}
                >
                  Whether you&apos;re an investor, partner, or client — we&apos;d love
                  to explore how UIG can create value for you.
                </p>
                <div className="flex flex-wrap gap-4 justify-center">
                  <Link href="/contact" className="btn-gold">
                    Get in Touch
                    <ArrowRight size={16} />
                  </Link>
                  <Link href="/portfolio" className="btn-outline">
                    View Our Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
