import SectionCTA from "@/components/SectionCTA";
import PlaceholderImage from "@/components/PlaceholderImage";

const beliefs = [
  {
    title: "Strategy is the starting line, not a separate service.",
    body: "Every project begins with strategic clarity. We don't charge for strategy as an add-on -- we build it into the foundation because work without it is just decoration.",
  },
  {
    title: "Brand identity is a business tool.",
    body: "A great brand doesn't just look good. It attracts the right customers, commands better pricing, earns trust faster, and makes every dollar of marketing spend work harder.",
  },
  {
    title: "Fewer clients, better work.",
    body: "We deliberately limit our project load. You won't be managed by a junior designer or shuffled between account managers. The creative director who leads strategy is the same person refining the kerning.",
  },
  {
    title: "Physical space matters.",
    body: "We have deep experience designing for the built environment -- signage, environmental graphics, spatial brand experiences. Your brand should feel as considered in person as it does on screen.",
  },
];

const credentials = [
  "20 years in design and creative direction",
  "Extensive luxury hospitality portfolio -- resorts, casinos, restaurants, entertainment venues",
  "2025 Burning Man Honoraria Grant recipient (large-scale installation)",
  "Wynn Las Vegas feature gallery artist",
  "Fabrication and production expertise (CNC, laser, 3D printing, metalwork)",
  "Strategy-first methodology informed by The Futur and Blind agency frameworks",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-fade-in-up">
              <p className="text-accent text-xs tracking-widest uppercase mb-4">About</p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight mb-6">
                Strategic design with an artist&apos;s instinct.
              </h1>
              <p className="text-text-secondary text-lg leading-relaxed">
                Plume Creative is the studio of Denver Miller -- creative director, fine artist, and the person who still believes brand identity is one of the most powerful tools a business can invest in.
              </p>
            </div>
            <div className="animate-fade-in-up animation-delay-200">
              <PlaceholderImage
                label="Studio Portrait -- Denver Miller"
                aspectRatio="4/5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* The Studio */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-accent text-xs tracking-widest uppercase mb-6">The Studio</h2>
          <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
            <p>
              Plume Creative exists because too many brands in hospitality, entertainment, and lifestyle settle for design that looks fine but doesn&apos;t do anything.
            </p>
            <p>
              Fine isn&apos;t the standard here.
            </p>
            <p>
              We&apos;re a boutique studio built on a simple conviction: the best brand work happens when strategic thinking and genuine creative craft operate together. Not strategy on one side and a mood board on the other -- but one unified process where every visual decision has a reason behind it and every strategic insight finds its way into the design.
            </p>
            <p>
              We work primarily with restaurants, hotels, bars, venues, resorts, and lifestyle brands. The kinds of businesses where the guest experience matters, where the physical space is part of the story, and where getting the brand right isn&apos;t cosmetic -- it&apos;s commercial.
            </p>
          </div>
        </div>
      </section>

      {/* The Creative Director */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-accent text-xs tracking-widest uppercase mb-6">The Creative Director</h2>
          <div className="space-y-5 text-text-secondary text-lg leading-relaxed">
            <p>
              Denver Miller brings 20 years of creative direction across luxury hospitality, entertainment, and lifestyle brands -- from Las Vegas resorts and casinos to independent restaurants redefining their markets.
            </p>
            <p>
              But what makes his work different isn&apos;t just the experience. It&apos;s the perspective.
            </p>
            <p>
              Denver is also a practicing fine artist. His large-scale sculptures and mixed-media work have been featured at Wynn Las Vegas, shown in solo exhibitions, and recognized with a 2025 Burning Man Honoraria Grant for a monumental installation on the playa.
            </p>
            <p>
              That dual lens -- commercial strategy and artistic sensibility -- runs through everything Plume Creative produces. It means the work isn&apos;t just on-brand and on-strategy. It has a quality that&apos;s harder to name but impossible to miss: taste, restraint, and the confidence to let a strong idea breathe.
            </p>
            <p>
              His fabrication background (CNC routing, laser cutting, 3D printing, metalwork) also means he understands materiality in a way most designers don&apos;t. When we design signage, environmental graphics, or packaging, we&apos;re thinking about how it gets made -- not just how it looks on screen.
            </p>
          </div>
        </div>
      </section>

      {/* What We Believe */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-bg-elevated">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-accent text-xs tracking-widest uppercase mb-10">What We Believe</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {beliefs.map((belief) => (
              <div
                key={belief.title}
                className="p-6 md:p-8 bg-bg-card border border-border rounded-sm"
              >
                <h3 className="text-base font-medium text-text-primary mb-3">
                  {belief.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {belief.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-accent text-xs tracking-widest uppercase mb-8">Credentials</h2>
          <div className="space-y-4">
            {credentials.map((c) => (
              <div
                key={c}
                className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed"
              >
                <span className="text-accent mt-1.5 text-[6px]">&#9679;</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <SectionCTA
        headline="Let's build something that lasts."
        body="If your brand needs more than a refresh -- if it needs real strategic creative direction -- we should talk. We take on a limited number of engagements per year, and the best projects start with a conversation."
        buttonText="Get in Touch"
      />
    </>
  );
}
