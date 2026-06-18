import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Globe2,
  Cpu,
  Eye,
  Sprout,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  TrendingUp,
} from "lucide-react";

const values = [
  {
    icon: Globe2,
    title: "Global First",
    desc: "Every decision is made with a global perspective. Geography should never limit ambition.",
    color: "#3B82F6",
  },
  {
    icon: Cpu,
    title: "Technology Driven",
    desc: "AI and automation are not buzzwords for us — they are the foundation of every vertical.",
    color: "#8B5CF6",
  },
  {
    icon: Eye,
    title: "Transparent Operations",
    desc: "We show our partners exactly how value is created. No black boxes.",
    color: "#10B981",
  },
  {
    icon: Sprout,
    title: "Sustainable Growth",
    desc: "We build for the long term, prioritizing sustainable returns over quick exits.",
    color: "#F59E0B",
  },
];

const milestones = [
  { year: "2023", title: "Founded in Wyoming, USA", desc: "UIG LLC registered with initial focus on real estate acquisition and technology development." },
  { year: "2024", title: "Global Expansion", desc: "Expanded to 40+ countries. Launched HR division, international trade vertical, and ICP3A property platform." },
  { year: "2025", title: "Platform Launch", desc: "Deployed AI-powered recruitment (RecruitGPT), property certification (ICP3A), and trade facilitation platforms." },
  { year: "2026", title: "Scale & Impact", desc: "Managing $50M+ in assets across 6 verticals. 2,000+ clients served. Team across 3 continents." },
];

const team = [
  {
    name: "Leadership Team",
    role: "Experienced operators from Goldman Sachs, McKinsey, and Google",
    img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=600&q=80",
  },
  {
    name: "Technology Team",
    role: "AI/ML engineers from IIT, Stanford, and leading tech companies",
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
  },
  {
    name: "Global Network",
    role: "Partners and advisors across 40+ countries",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Hero */}
        <section className="gradient-hero relative" style={{ padding: "100px 0", minHeight: 500 }}>
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.12 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(165deg, rgba(10,15,30,0.95), rgba(17,24,39,0.8))" }} />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <span className="section-label mb-4 inline-block">About Us</span>
            <h1
              style={{
                color: "white",
                fontSize: "clamp(2rem,5vw,3.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.02em",
                marginBottom: 20,
              }}
            >
              United Investing Group LLC
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              A Wyoming-registered, globally-operating investment and technology company
              building value across six interconnected business verticals.
            </p>
          </div>
        </section>

        {/* Mission & Values */}
        <section style={{ padding: "100px 0", background: "white" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Mission */}
              <div>
                <span className="section-label mb-4 inline-block">Our Mission</span>
                <h2 style={{ fontSize: "1.8rem", fontWeight: 800, color: "#0F172A", marginBottom: 20, letterSpacing: "-0.02em" }}>
                  Bridging Markets, Building Value
                </h2>
                <p style={{ color: "#64748B", lineHeight: 1.8, marginBottom: 16, fontSize: "1rem" }}>
                  UIG was founded with a simple thesis: the most valuable opportunities exist at the
                  intersection of emerging markets and global capital. We build technology, acquire assets,
                  and create connections that bridge these worlds.
                </p>
                <p style={{ color: "#64748B", lineHeight: 1.8, fontSize: "1rem" }}>
                  From real estate in India&apos;s airport zones to AI-powered recruitment platforms, we deploy
                  capital and technology where they create the most impact.
                </p>
              </div>

              {/* Values */}
              <div>
                <span className="section-label mb-4 inline-block">Our Values</span>
                <div className="flex flex-col gap-6">
                  {values.map((v) => {
                    const Icon = v.icon;
                    return (
                      <div key={v.title} className="flex gap-4 items-start">
                        <div
                          style={{
                            width: 48,
                            height: 48,
                            borderRadius: 12,
                            background: `${v.color}10`,
                            border: `1px solid ${v.color}25`,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexShrink: 0,
                          }}
                        >
                          <Icon size={20} style={{ color: v.color }} />
                        </div>
                        <div>
                          <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>
                            {v.title}
                          </h3>
                          <p style={{ color: "#64748B", fontSize: "0.87rem", lineHeight: 1.7, margin: 0 }}>
                            {v.desc}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team / Image Grid */}
        <section style={{ padding: "100px 0", background: "#F8FAFC" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label mb-4 inline-block">Our Team</span>
              <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
                World-Class Talent, Global Vision
              </h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((t) => (
                <div key={t.name} className="card-white overflow-hidden group">
                  <div style={{ height: 220, overflow: "hidden" }}>
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        transition: "transform 0.6s",
                      }}
                      className="group-hover:scale-105"
                    />
                  </div>
                  <div style={{ padding: "24px 28px" }}>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 6, fontSize: "1.05rem" }}>
                      {t.name}
                    </h3>
                    <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>
                      {t.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "100px 0", background: "white" }}>
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="section-label mb-4 inline-block">Our Journey</span>
              <h2 style={{ fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 800, color: "#0F172A", letterSpacing: "-0.02em" }}>
                From Wyoming to the World
              </h2>
            </div>
            <div className="flex flex-col gap-10">
              {milestones.map((m) => (
                <div key={m.year} className="flex gap-6 items-start">
                  <div
                    style={{
                      minWidth: 80,
                      color: "#D97706",
                      fontWeight: 800,
                      fontSize: "1.1rem",
                      fontFamily: "Space Grotesk,sans-serif",
                      paddingTop: 2,
                    }}
                  >
                    {m.year}
                  </div>
                  <div style={{ borderLeft: "2px solid #E2E8F0", paddingLeft: 28 }}>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 6, fontSize: "1.05rem" }}>
                      {m.title}
                    </h3>
                    <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "100px 0", background: "#0A0F1E" }}>
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="section-label mb-6 inline-block">Join Us</span>
            <h2 style={{ color: "white", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Ready to Build the Future?
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 40 }}>
              We&apos;re always looking for exceptional partners, investors, and team members.
            </p>
            <Link href="/contact" className="btn-gold">
              Get in Touch
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
