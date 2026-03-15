"use client";

import { useState } from "react";

const projectTypes = [
  "Brand Identity",
  "Creative Direction",
  "Environmental Graphics",
  "Packaging Design",
  "Web Design",
  "Print + Digital Collateral",
  "Multiple Services",
  "Not Sure Yet",
];

const budgetRanges = [
  "Under $10K",
  "$10K -- $25K",
  "$25K -- $50K",
  "$50K -- $100K",
  "$100K+",
  "Let's Discuss",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-[1fr_400px] gap-12 md:gap-20">
            {/* Form */}
            <div className="animate-fade-in-up">
              <p className="text-accent text-xs tracking-widest uppercase mb-4">Contact</p>
              <h1 className="text-4xl md:text-5xl font-semibold leading-tight tracking-tight mb-4">
                Start a conversation.
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed mb-10 max-w-lg">
                Tell us about your brand and what you&apos;re looking to build. We&apos;ll get back to you within one business day.
              </p>

              {submitted ? (
                <div className="p-8 bg-bg-card border border-border rounded-sm text-center">
                  <p className="text-accent text-sm tracking-widest uppercase mb-2">
                    Thank You
                  </p>
                  <p className="text-text-primary text-lg font-medium mb-2">
                    We&apos;ve received your message.
                  </p>
                  <p className="text-text-secondary text-sm">
                    This is a prototype -- no message was actually sent. In the live site, this form will connect to your intake workflow.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-muted text-xs tracking-widest uppercase mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-text-muted text-xs tracking-widest uppercase mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-muted text-xs tracking-widest uppercase mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors"
                      placeholder="Your company or brand"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-text-muted text-xs tracking-widest uppercase mb-2">
                        Project Type
                      </label>
                      <select className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-text-secondary text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                        <option value="">Select a service</option>
                        {projectTypes.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-text-muted text-xs tracking-widest uppercase mb-2">
                        Budget Range
                      </label>
                      <select className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-text-secondary text-sm focus:outline-none focus:border-accent transition-colors appearance-none cursor-pointer">
                        <option value="">Select a range</option>
                        {budgetRanges.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-text-muted text-xs tracking-widest uppercase mb-2">
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      className="w-full bg-bg-card border border-border rounded-sm px-4 py-3 text-text-primary text-sm focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Tell us about your project, your goals, and your timeline."
                    />
                  </div>

                  <button
                    type="submit"
                    className="px-8 py-3.5 bg-text-primary text-bg text-sm font-medium tracking-wide rounded-sm hover:bg-accent transition-colors duration-200"
                  >
                    Send Message
                  </button>
                </form>
              )}
            </div>

            {/* Sidebar */}
            <div className="animate-fade-in-up animation-delay-200">
              <div className="sticky top-28">
                <div className="p-6 bg-bg-card border border-border rounded-sm mb-6">
                  <h3 className="text-text-muted text-xs tracking-widest uppercase mb-4">
                    Studio Info
                  </h3>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="text-text-muted mb-1">Email</p>
                      <a
                        href="mailto:denver@madebyplume.com"
                        className="text-text-primary hover:text-accent transition-colors"
                      >
                        denver@madebyplume.com
                      </a>
                    </div>
                    <div>
                      <p className="text-text-muted mb-1">Phone</p>
                      <p className="text-text-primary">775.338.9358</p>
                    </div>
                    <div>
                      <p className="text-text-muted mb-1">Location</p>
                      <p className="text-text-primary">Reno, Nevada</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-bg-card border border-border rounded-sm">
                  <h3 className="text-text-muted text-xs tracking-widest uppercase mb-3">
                    Response Time
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    We respond to all inquiries within one business day. For urgent project needs, call the studio directly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
