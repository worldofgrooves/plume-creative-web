import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16">
          {/* Brand */}
          <div>
            <h3 className="text-text-primary font-semibold text-lg mb-3">
              Plume Creative
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed max-w-xs">
              Strategic brand identity and creative direction for brands that take themselves seriously.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h4 className="text-text-muted text-xs tracking-widest uppercase mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/services", label: "Services" },
                { href: "/work", label: "Work" },
                { href: "/about", label: "About" },
                { href: "/contact", label: "Contact" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-secondary text-sm hover:text-text-primary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-text-muted text-xs tracking-widest uppercase mb-4">
              Get in Touch
            </h4>
            <div className="flex flex-col gap-2 text-sm text-text-secondary">
              <a
                href="mailto:denver@madebyplume.com"
                className="hover:text-text-primary transition-colors"
              >
                denver@madebyplume.com
              </a>
              <span>Reno, Nevada</span>
            </div>
            {/* Social placeholder */}
            <div className="flex gap-4 mt-4">
              {["Instagram", "LinkedIn", "Behance"].map((s) => (
                <span
                  key={s}
                  className="text-xs text-text-muted hover:text-text-secondary transition-colors cursor-pointer"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-text-muted text-xs">
            &copy; {new Date().getFullYear()} Plume Creative. All rights reserved.
          </p>
          <p className="text-text-muted text-xs">
            Reno, NV
          </p>
        </div>
      </div>
    </footer>
  );
}
