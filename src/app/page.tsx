import Link from "next/link";
import PlaceholderImage from "@/components/PlaceholderImage";
import SectionCTA from "@/components/SectionCTA";
import { projects } from "@/data/projects";

const services = [
  { title: "Brand Identity Systems", desc: "Strategic foundations that scale across every touchpoint." },
  { title: "Creative Direction", desc: "The creative leadership your project deserves." },
  { title: "Environmental Graphics", desc: "Your space should speak before anyone says a word." },
  { title: "Packaging Design", desc: "Packaging that earns its place on the shelf and in the hand." },
  { title: "Web Design", desc: "A digital presence that matches what you've built in person." },
  { title: "Print + Digital", desc: "Every touchpoint is a brand moment. We treat it like one." },
];

const credentials = [
  "20 Years in Design",
  "Luxury Hospitality Portfolio",
  "2025 Burning Man Honoraria Grant",
  "Wynn Las Vegas Featured Artist",
  "Fabrication Expertise",
  "Strategy-First Methodology",
];

export default function HomePage() {
  const featured = projects.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="min-h-[90vh] flex items-center px-6 md:px-12 py-20 md:py-32">
        <div className="max-w-7xl mx-auto w-full">
          <div className="max-w-3xl animate-fade-in-up">
            <p className="text-accent text-sm tracking-widest uppercase mb-6">
              Brand Identity & Creative Direction
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-[1.08] tracking-tight mb-6">
              Brands built with
              <br />
              strategy and soul.
            </h1>
            <p className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Plume Creative is a boutique studio for brands that refuse to blend in. We combine 20 years of creative direction with a fine artist&apos;s instinct to build identities that work as hard as you do.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/work"
                className="inline-block px-8 py-3.5 bg-text-primary text-bg text-sm font-medium tracking-wide rounded-sm hover:bg-accent transition-colors duration-200"
              >
                View Work
              </Link>
              <Link
                href="/contact"
                className="inline-block px-8 py-3.5 border border-border text-text-primary text-sm font-medium tracking-wide rounded-sm hover:border-text-secondary transition-colors duration-200"
              >
                Start a Conversation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="px-6 md:px-12 py-20 md:py-28">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <p className="text-accent text-xs tracking-widest uppercase mb-3">Selected Projects</p>
              <h2 className="text-3xl md:text-4xl font-semibold">Featured Work</h2>
            </div>
            <Link
              href="/work"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors hidden md:block"
            >
              View All Projects &rarr;
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((project, i) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group block animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                <div className="bg-bg-card rounded-sm overflow-hidden border border-border hover:border-border-light transition-all duration-300">
                  <PlaceholderImage
                    label={project.thumbnailLabel}
                    aspectRatio="3/2"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-medium text-text-primary group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-text-muted text-xs">{project.year}</span>
                    </div>
                    <p className="text-text-secondary text-sm">{project.client}</p>
                    <div className="flex gap-2 mt-3 flex-wrap">
                      <span className="text-xs text-text-muted bg-bg-elevated px-2 py-1 rounded-sm">
                        {project.industry}
                      </span>
                      {project.services.slice(0, 2).map((s) => (
                        <span
                          key={s}
                          className="text-xs text-text-muted bg-bg-elevated px-2 py-1 rounded-sm"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link
              href="/work"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors"
            >
              View All Projects &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="px-6 md:px-12 py-20 md:py-28 bg-bg-elevated">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-accent text-xs tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-semibold">Services</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <Link
                key={service.title}
                href="/services"
                className={`group block p-6 bg-bg-card border border-border rounded-sm hover:border-border-light transition-all duration-300 animate-fade-in-up animation-delay-${(i + 1) * 100}`}
              >
                <h3 className="text-base font-medium text-text-primary mb-2 group-hover:text-accent transition-colors">
                  {service.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="text-text-secondary text-sm hover:text-text-primary transition-colors"
            >
              Learn More About Our Services &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="px-6 md:px-12 py-16 md:py-20 border-y border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {credentials.map((c) => (
              <span
                key={c}
                className="text-text-muted text-xs tracking-widest uppercase whitespace-nowrap"
              >
                {c}
              </span>
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
