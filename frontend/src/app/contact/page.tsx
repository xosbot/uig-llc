import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: 100, minHeight: "100vh" }}>
        <section className="gradient-hero" style={{ padding: "80px 0" }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="section-label mb-3">CONTACT US</p>
            <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Let&apos;s Connect
            </h1>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              Whether you&apos;re an investor, partner, or client — we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        <section style={{ padding: "80px 0", background: "white" }}>
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Contact Form */}
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 24 }}>Send us a Message</h2>
                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600, marginBottom: 6, display: "block" }}>First Name</label>
                      <input type="text" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: "0.9rem", outline: "none" }} placeholder="John" />
                    </div>
                    <div>
                      <label style={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600, marginBottom: 6, display: "block" }}>Last Name</label>
                      <input type="text" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: "0.9rem", outline: "none" }} placeholder="Doe" />
                    </div>
                  </div>
                  <div>
                    <label style={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600, marginBottom: 6, display: "block" }}>Email</label>
                    <input type="email" style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: "0.9rem", outline: "none" }} placeholder="john@company.com" />
                  </div>
                  <div>
                    <label style={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600, marginBottom: 6, display: "block" }}>Interest</label>
                    <select style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: "0.9rem", outline: "none", background: "white" }}>
                      <option>Investment Partnership</option>
                      <option>Technology Solutions</option>
                      <option>Real Estate</option>
                      <option>HR & Recruitment</option>
                      <option>International Trade</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: "#64748B", fontSize: "0.8rem", fontWeight: 600, marginBottom: 6, display: "block" }}>Message</label>
                    <textarea rows={4} style={{ width: "100%", padding: "12px 16px", borderRadius: 8, border: "1px solid #E2E8F0", fontSize: "0.9rem", outline: "none", resize: "vertical" }} placeholder="Tell us about your interest..." />
                  </div>
                  <button type="submit" className="btn-gold" style={{ padding: "14px 32px", fontSize: "0.95rem", border: "none", cursor: "pointer", textAlign: "center" }}>
                    Send Message →
                  </button>
                </form>
              </div>

              {/* Contact Info */}
              <div>
                <h2 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#0F172A", marginBottom: 24 }}>Get in Touch</h2>
                <div className="flex flex-col gap-8">
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>Headquarters</h3>
                    <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      United Investing Group LLC<br />
                      Wyoming, United States
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>India Operations</h3>
                    <p style={{ color: "#64748B", fontSize: "0.9rem", lineHeight: 1.7 }}>
                      Delhi NCR · Mumbai · Bengaluru<br />
                      India
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>Email</h3>
                    <p style={{ color: "#64748B", fontSize: "0.9rem" }}>
                      contact@uigllc.org
                    </p>
                  </div>
                  <div>
                    <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>Follow Us</h3>
                    <div className="flex gap-4">
                      <a href="#" style={{ color: "#64748B", fontSize: "0.9rem", textDecoration: "none" }}>LinkedIn</a>
                      <a href="#" style={{ color: "#64748B", fontSize: "0.9rem", textDecoration: "none" }}>Twitter</a>
                    </div>
                  </div>
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
