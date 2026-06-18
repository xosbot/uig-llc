import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  Building2,
  Cpu,
  Users,
  TrendingUp,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const portfolio = [
  {
    vertical: "Real Estate",
    icon: Building2,
    color: "#3B82F6",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    items: [
      {
        name: "ICP3A",
        desc: "India's first satellite-grade property certification platform. 28 airport zones, 330M+ land parcels mapped.",
        tag: "Live Platform",
      },
      {
        name: "Airport Zone Portfolio",
        desc: "Strategic acquisitions within 5km of major Indian airports. Delhi, Mumbai, Bengaluru, Hyderabad.",
        tag: "Active",
      },
    ],
  },
  {
    vertical: "Technology",
    icon: Cpu,
    color: "#8B5CF6",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    items: [
      {
        name: "RecruitGPT",
        desc: "AI-powered recruitment platform connecting Indian talent with global remote opportunities.",
        tag: "Live Platform",
      },
      {
        name: "IVA Platform",
        desc: "Intelligent Virtual Assistant for enterprise automation and customer engagement.",
        tag: "In Development",
      },
    ],
  },
  {
    vertical: "Human Resources",
    icon: Users,
    color: "#06B6D4",
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800&q=80",
    items: [
      {
        name: "Global Talent Network",
        desc: "2,000+ candidates matched across 40+ countries. AI screening and matching.",
        tag: "Active",
      },
      {
        name: "Remote Work Solutions",
        desc: "End-to-end remote workforce management for international companies.",
        tag: "Active",
      },
    ],
  },
  {
    vertical: "Investment",
    icon: TrendingUp,
    color: "#10B981",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=800&q=80",
    items: [
      {
        name: "Real Estate Fund",
        desc: "Active management of airport zone properties with 18-24 month hold periods.",
        tag: "Fund I",
      },
      {
        name: "Technology Ventures",
        desc: "Early-stage investments in PropTech, HR Tech, and Trade Tech startups.",
        tag: "Active",
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 72 }}>
        {/* Hero */}
        <section className="gradient-hero relative" style={{ padding: "100px 0", minHeight: 500 }}>
          <div className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80"
              alt=""
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.12 }}
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(165deg, rgba(10,15,30,0.95), rgba(17,24,39,0.8))" }} />
          </div>
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <span className="section-label mb-4 inline-block">Our Portfolio</span>
            <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
              What We&apos;ve Built
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              Active platforms and investments across our business verticals.
            </p>
          </div>
        </section>

        {/* Portfolio */}
        <section style={{ padding: "100px 0", background: "white" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col gap-20">
              {portfolio.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.vertical}>
                    {/* Vertical header */}
                    <div className="flex items-center gap-4 mb-10">
                      <div
                        style={{
                          width: 52,
                          height: 52,
                          borderRadius: 14,
                          background: `${p.color}10`,
                          border: `1px solid ${p.color}25`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={24} style={{ color: p.color }} />
                      </div>
                      <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F172A", fontFamily: "Space Grotesk" }}>
                        {p.vertical}
                      </h2>
                    </div>

                    {/* Items grid */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {p.items.map((item) => (
                        <div key={item.name} className="card-white overflow-hidden group">
                          <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                            <img
                              src={p.image}
                              alt={item.name}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                transition: "transform 0.6s",
                              }}
                              className="group-hover:scale-105"
                            />
                            <div
                              className="absolute top-4 left-4"
                              style={{
                                background: p.color,
                                color: "white",
                                padding: "4px 12px",
                                borderRadius: 100,
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.05em",
                                textTransform: "uppercase",
                              }}
                            >
                              {item.tag}
                            </div>
                          </div>
                          <div style={{ padding: "24px 28px" }}>
                            <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 8, fontSize: "1.1rem", fontFamily: "Space Grotesk" }}>
                              {item.name}
                            </h3>
                            <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      ))}
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
            <span className="section-label mb-6 inline-block">Interested?</span>
            <h2 style={{ color: "white", fontSize: "clamp(1.6rem,3.5vw,2.4rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 16 }}>
              Invest in Our Vision
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", lineHeight: 1.75, marginBottom: 40 }}>
              We partner with investors who share our vision for technology-driven global growth.
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
