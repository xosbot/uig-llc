import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 100, minHeight: "100vh" }}>
        {/* Hero */}
        <section className="gradient-hero" style={{ padding: "80px 0" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="section-label mb-3">ABOUT US</p>
            <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
              United Investing Group LLC
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              A Wyoming-registered, globally-operating investment and technology company building value across six interconnected business verticals.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <p className="section-label mb-3">OUR MISSION</p>
                <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#060D1F", marginBottom: 16 }}>
                  Bridging Markets, Building Value
                </h2>
                <p style={{ color: "#64748B", lineHeight: 1.8, marginBottom: 16 }}>
                  UIG was founded with a simple thesis: the most valuable opportunities exist at the intersection of emerging markets and global capital. We build technology, acquire assets, and create connections that bridge these worlds.
                </p>
                <p style={{ color: "#64748B", lineHeight: 1.8 }}>
                  From real estate in India&apos;s airport zones to AI-powered recruitment platforms, we deploy capital and technology where they create the most impact.
                </p>
              </div>
              <div>
                <p className="section-label mb-3">OUR VALUES</p>
                <div className="flex flex-col gap-6">
                  {[
                    { title: "Global First", desc: "Every decision is made with a global perspective. Geography should never limit ambition." },
                    { title: "Technology Driven", desc: "AI and automation are not buzzwords for us — they are the foundation of every vertical." },
                    { title: "Transparent Operations", desc: "We show our partners exactly how value is created. No black boxes." },
                    { title: "Sustainable Growth", desc: "We build for the long term, prioritizing sustainable returns over quick exits." },
                  ].map(v => (
                    <div key={v.title}>
                      <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>{v.title}</h3>
                      <p style={{ color: "#64748B", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{v.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section style={{ padding: "80px 0", background: "#F8FAFC" }}>
          <div className="max-w-4xl mx-auto px-6">
            <p className="section-label mb-3 text-center">OUR JOURNEY</p>
            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "#060D1F", textAlign: "center", marginBottom: 48 }}>
              From Wyoming to the World
            </h2>
            <div className="flex flex-col gap-8">
              {[
                { year: "2023", title: "Founded in Wyoming, USA", desc: "UIG LLC registered with initial focus on real estate acquisition and technology development." },
                { year: "2024", title: "Global Expansion", desc: "Expanded to 40+ countries. Launched HR division, international trade vertical, and ICP3A property platform." },
                { year: "2025", title: "Platform Launch", desc: "Deployed AI-powered recruitment (RecruitGPT), property certification (ICP3A), and trade facilitation platforms." },
                { year: "2026", title: "Scale & Impact", desc: "Managing $50M+ in assets across 6 verticals. 2,000+ clients served. Team across 3 continents." },
              ].map(m => (
                <div key={m.year} className="flex gap-6">
                  <div style={{ minWidth: 80, color: "#F59E0B", fontWeight: 800, fontSize: "1.1rem", fontFamily: "Space Grotesk,sans-serif" }}>{m.year}</div>
                  <div style={{ borderLeft: "2px solid #E2E8F0", paddingLeft: 24 }}>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4 }}>{m.title}</h3>
                    <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7, margin: 0 }}>{m.desc}</p>
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
