import SectionCTA from "@/components/SectionCTA";

const services = [
  {
    title: "Brand Identity Systems",
    tagline: "Brands that work as hard as you do.",
    body: "Your brand isn't a logo. It's the strategic foundation everything else is built on -- your guest experience, your signage, your menus, your reputation. We build identity systems grounded in strategy and designed to scale across every touchpoint your audience encounters.",
    deliverables: [
      "Brand strategy and positioning",
      "Visual identity development",
      "Logo and mark systems",
      "Typography, color, and design language",
      "Brand guidelines and toolkit",
    ],
  },
  {
    title: "Creative Direction",
    tagline: "The creative leadership your project deserves.",
    body: "Great brands don't happen by committee. They happen when someone with taste, experience, and strategic clarity takes the reins. We provide creative direction that keeps every element -- from photography to packaging to physical space -- telling one cohesive story.",
    deliverables: [
      "Art direction and visual strategy",
      "Photography direction",
      "Campaign concepting",
      "Cross-touchpoint creative alignment",
    ],
  },
  {
    title: "Environmental Graphics + Signage",
    tagline: "Your space should speak before anyone says a word.",
    body: "The physical environment is your brand's most immersive expression. We design signage, environmental graphics, and spatial brand elements that transform venues into experiences -- informed by fabrication knowledge and a deep understanding of how people move through space.",
    deliverables: [
      "Signage systems and wayfinding",
      "Environmental graphic design",
      "Fabrication-ready production files",
      "Vendor coordination and material specification",
    ],
  },
  {
    title: "Packaging Design",
    tagline: "Packaging that earns its place on the shelf and in the hand.",
    body: "In a crowded market, your packaging is your first and sometimes only pitch. We create packaging systems that communicate quality, tell your story, and give people a reason to reach for yours instead of the one next to it.",
    deliverables: [
      "Packaging concept and structure",
      "Label and surface design",
      "Production-ready artwork",
      "Material and finish specification",
    ],
  },
  {
    title: "Web Design",
    tagline: "A digital presence that matches what you've built in person.",
    body: "Your website is the front door most people walk through first. We design clean, intentional web experiences on Webflow -- built to reflect the quality of your brand and convert the visitors who matter.",
    deliverables: [
      "Website strategy and structure",
      "Visual design and UX",
      "Webflow development",
      "Responsive, performance-optimized builds",
    ],
  },
  {
    title: "Print + Digital Collateral",
    tagline: "Every touchpoint is a brand moment. We treat it like one.",
    body: "Menus, business cards, social templates, investor decks, event collateral -- these aren't afterthoughts. They're opportunities to reinforce who you are. We design collateral systems that stay consistent and look sharp across every format.",
    deliverables: [
      "Menu and in-venue print design",
      "Business collateral",
      "Social media templates and digital assets",
      "Presentation and pitch design",
      "Motion graphics",
    ],
  },
];

const phases = [
  {
    number: "01",
    title: "Discovery",
    body: "We learn your business, your market, your goals, and your audience. This is the foundation. Skip it and everything downstream suffers.",
  },
  {
    number: "02",
    title: "Visual Exploration",
    body: "Armed with strategy, we develop distinct creative directions -- not variations of one idea, but genuinely different approaches with clear rationale behind each.",
  },
  {
    number: "03",
    title: "Refinement",
    body: "We hone the chosen direction into a complete, production-ready brand system. Every detail is intentional.",
  },
  {
    number: "04",
    title: "Delivery + Toolkit",
    body: "You receive a comprehensive brand toolkit -- files, guidelines, and the knowledge to deploy your brand consistently without us in the room.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-accent text-xs tracking-widest uppercase mb-4">Services</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
              Your brand is your most valuable asset. We make sure it performs like one.
            </h1>
            <p className="text-text-secondary text-lg leading-relaxed max-w-xl">
              Plume Creative is a brand identity and creative direction studio for hospitality, entertainment, and lifestyle brands that refuse to blend in.
            </p>
          </div>
        </div>
      </section>

      {/* Service Blocks */}
      <section className="px-6 md:px-12 pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-6">
            {services.map((service, i) => (
              <div
                key={service.title}
                className={`bg-bg-card border border-border rounded-sm p-8 md:p-10 hover:border-border-light transition-all duration-300 animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                <div className="grid md:grid-cols-[1fr_300px] gap-6 md:gap-10">
                  <div>
                    <h3 className="text-sm text-accent tracking-widest uppercase mb-3">
                      {service.title}
                    </h3>
                    <p className="text-xl md:text-2xl font-medium text-text-primary mb-4">
                      {service.tagline}
                    </p>
                    <p className="text-text-secondary leading-relaxed">
                      {service.body}
                    </p>
                  </div>
                  <div className="md:border-l md:border-border md:pl-8">
                    <p className="text-text-muted text-xs tracking-widest uppercase mb-3">
                      What this includes
                    </p>
                    <ul className="space-y-2">
                      {service.deliverables.map((d) => (
                        <li
                          key={d}
                          className="text-text-secondary text-sm flex items-start gap-2"
                        >
                          <span className="text-accent mt-1.5 text-[6px]">&#9679;</span>
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-bg-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-accent text-xs tracking-widest uppercase mb-3">Process</p>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">How we work.</h2>
            <p className="text-text-secondary leading-relaxed">
              Every engagement follows a strategic sequence. We don&apos;t start designing until we understand what the design needs to accomplish.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((phase) => (
              <div key={phase.number} className="p-6 bg-bg-card border border-border rounded-sm">
                <span className="text-accent text-xs tracking-widest font-medium">
                  Phase {phase.number}
                </span>
                <h3 className="text-lg font-medium text-text-primary mt-2 mb-3">
                  {phase.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {phase.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        headline="Ready to elevate?"
        body="We take on a limited number of projects each year to ensure every client gets our full attention. If you're building something worth branding properly, let's talk."
        buttonText="Start a Conversation"
      />
    </>
  );
}
