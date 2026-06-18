import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const portfolio = [
  {
    vertical: "Real Estate",
    icon: "🏗️",
    items: [
      { name: "ICP3A", desc: "India's first satellite-grade property certification platform. 28 airport zones, 330M+ land parcels mapped." },
      { name: "Airport Zone Portfolio", desc: "Strategic acquisitions within 5km of major Indian airports. Delhi, Mumbai, Bengaluru, Hyderabad." },
    ],
  },
  {
    vertical: "Technology",
    icon: "💻",
    items: [
      { name: "RecruitGPT", desc: "AI-powered recruitment platform connecting Indian talent with global remote opportunities." },
      { name: "IVA Platform", desc: "Intelligent Virtual Assistant for enterprise automation and customer engagement." },
    ],
  },
  {
    vertical: "Human Resources",
    icon: "👥",
    items: [
      { name: "Global Talent Network", desc: "2,000+ candidates matched across 40+ countries. AI screening and matching." },
      { name: "Remote Work Solutions", desc: "End-to-end remote workforce management for international companies." },
    ],
  },
  {
    vertical: "Investment",
    icon: "📊",
    items: [
      { name: "Real Estate Fund", desc: "Active management of airport zone properties with 18-24 month hold periods." },
      { name: "Technology Ventures", desc: "Early-stage investments in PropTech, HR Tech, and Trade Tech startups." },
    ],
  },
];

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 100, minHeight: "100vh" }}>
        <section className="gradient-hero" style={{ padding: "80px 0" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="section-label mb-3">OUR PORTFOLIO</p>
            <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
              What We&apos;ve Built
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              Active platforms and investments across our six business verticals.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col gap-16">
              {portfolio.map(p => (
                <div key={p.vertical}>
                  <div className="flex items-center gap-3 mb-8">
                    <span style={{ fontSize: "1.5rem" }}>{p.icon}</span>
                    <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A" }}>{p.vertical}</h2>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    {p.items.map(item => (
                      <div key={item.name} className="card-glow" style={{ borderRadius: 16, padding: 28, border: "1px solid #E2E8F0" }}>
                        <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 8, fontSize: "1.1rem" }}>{item.name}</h3>
                        <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
                      </div>
                    ))}
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
