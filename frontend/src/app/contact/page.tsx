"use client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MapPin, Phone, ArrowRight, Send } from "lucide-react";

export default function Contact() {
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
            <span className="section-label mb-4 inline-block">Contact Us</span>
            <h1 style={{ color: "white", fontSize: "clamp(2rem,5vw,3.5rem)", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: 20 }}>
              Let&apos;s Connect
            </h1>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "1.1rem", lineHeight: 1.8, maxWidth: 600, margin: "0 auto" }}>
              Whether you&apos;re an investor, partner, or client — we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section style={{ padding: "100px 0", background: "white" }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Contact Form — 3 cols */}
              <div className="lg:col-span-3">
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F172A", marginBottom: 8, fontFamily: "Space Grotesk" }}>
                  Send us a Message
                </h2>
                <p style={{ color: "#64748B", marginBottom: 32, fontSize: "0.95rem" }}>
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <form
                  className="flex flex-col gap-5"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label style={{ color: "#334155", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, display: "block" }}>
                        First Name
                      </label>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "14px 16px",
                          borderRadius: 12,
                          border: "1px solid #E2E8F0",
                          fontSize: "0.9rem",
                          outline: "none",
                          transition: "border-color 0.2s",
                          background: "#F8FAFC",
                        }}
                        placeholder="John"
                        className="focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label style={{ color: "#334155", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, display: "block" }}>
                        Last Name
                      </label>
                      <input
                        type="text"
                        style={{
                          width: "100%",
                          padding: "14px 16px",
                          borderRadius: 12,
                          border: "1px solid #E2E8F0",
                          fontSize: "0.9rem",
                          outline: "none",
                          background: "#F8FAFC",
                        }}
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  <div>
                    <label style={{ color: "#334155", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, display: "block" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 12,
                        border: "1px solid #E2E8F0",
                        fontSize: "0.9rem",
                        outline: "none",
                        background: "#F8FAFC",
                      }}
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label style={{ color: "#334155", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, display: "block" }}>
                      Interest
                    </label>
                    <select
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 12,
                        border: "1px solid #E2E8F0",
                        fontSize: "0.9rem",
                        outline: "none",
                        background: "#F8FAFC",
                      }}
                    >
                      <option>Investment Partnership</option>
                      <option>Technology Solutions</option>
                      <option>Real Estate</option>
                      <option>HR & Recruitment</option>
                      <option>International Trade</option>
                      <option>General Inquiry</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ color: "#334155", fontSize: "0.8rem", fontWeight: 600, marginBottom: 8, display: "block" }}>
                      Message
                    </label>
                    <textarea
                      rows={5}
                      style={{
                        width: "100%",
                        padding: "14px 16px",
                        borderRadius: 12,
                        border: "1px solid #E2E8F0",
                        fontSize: "0.9rem",
                        outline: "none",
                        resize: "vertical",
                        background: "#F8FAFC",
                      }}
                      placeholder="Tell us about your interest..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn-gold justify-center"
                    style={{ padding: "16px 36px", fontSize: "0.95rem", marginTop: 8 }}
                  >
                    Send Message
                    <Send size={16} />
                  </button>
                </form>
              </div>

              {/* Contact Info — 2 cols */}
              <div className="lg:col-span-2">
                <h2 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#0F172A", marginBottom: 8, fontFamily: "Space Grotesk" }}>
                  Get in Touch
                </h2>
                <p style={{ color: "#64748B", marginBottom: 32, fontSize: "0.95rem" }}>
                  Reach out through any of the channels below.
                </p>

                <div className="flex flex-col gap-8">
                  {/* HQ */}
                  <div className="flex gap-4 items-start">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "rgba(59,130,246,0.08)",
                        border: "1px solid rgba(59,130,246,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={20} style={{ color: "#3B82F6" }} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>
                        Headquarters
                      </h3>
                      <p style={{ color: "#64748B", fontSize: "0.87rem", lineHeight: 1.7 }}>
                        United Investing Group LLC<br />
                        Wyoming, United States
                      </p>
                    </div>
                  </div>

                  {/* India */}
                  <div className="flex gap-4 items-start">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "rgba(217,119,6,0.08)",
                        border: "1px solid rgba(217,119,6,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <MapPin size={20} style={{ color: "#D97706" }} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>
                        India Operations
                      </h3>
                      <p style={{ color: "#64748B", fontSize: "0.87rem", lineHeight: 1.7 }}>
                        Delhi NCR &middot; Mumbai &middot; Bengaluru<br />
                        India
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex gap-4 items-start">
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        borderRadius: 12,
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={20} style={{ color: "#10B981" }} />
                    </div>
                    <div>
                      <h3 style={{ fontWeight: 700, color: "#0F172A", marginBottom: 4, fontSize: "0.95rem" }}>
                        Email
                      </h3>
                      <p style={{ color: "#64748B", fontSize: "0.87rem" }}>
                        contact@uigllc.org
                      </p>
                    </div>
                  </div>
                </div>

                {/* Office image */}
                <div
                  style={{
                    marginTop: 40,
                    borderRadius: 20,
                    overflow: "hidden",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
                  }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80"
                    alt="UIG Office"
                    style={{ width: "100%", height: 220, objectFit: "cover" }}
                  />
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
