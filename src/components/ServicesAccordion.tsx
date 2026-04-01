"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { easing } from "@/lib/easing";

interface Service {
  number: string;
  title: string;
  description: string;
  includes: string[];
}

const services: Service[] = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Strategy-first brand systems that define your position, differentiate you from competitors, and hold together across every touchpoint -- from signage to social.",
    includes: [
      "Brand strategy and positioning",
      "Visual identity development",
      "Logo and mark systems",
      "Typography, color, and design language",
      "Brand guidelines and toolkit",
    ],
  },
  {
    number: "02",
    title: "Creative Direction",
    description:
      "The strategic eye guiding every visual decision. We ensure campaigns, launches, and brand touchpoints speak with one voice and one level of quality.",
    includes: [
      "Art direction and visual strategy",
      "Photography direction",
      "Campaign concepting",
      "Cross-touchpoint creative alignment",
    ],
  },
  {
    number: "03",
    title: "Packaging Design",
    description:
      "Shelf presence that earns the price point. Structural design, label systems, and brand-aligned packaging for products that compete in premium categories.",
    includes: [
      "Structural packaging design",
      "Label and wrap systems",
      "Production-ready files",
      "Material and finish specification",
    ],
  },
  {
    number: "04",
    title: "Environmental Graphics & Signage",
    description:
      "Branded environments that reinforce the experience from the moment guests arrive. Wayfinding, facade signage, interior graphics -- designed within code and fabrication realities.",
    includes: [
      "Wayfinding systems",
      "Facade and monument signage",
      "Interior environmental graphics",
      "Fabrication-ready specifications",
    ],
  },
  {
    number: "05",
    title: "Web Design & Digital Experiences",
    description:
      "Brand-driven websites and digital platforms built for performance and lasting impression. Not template work -- custom experiences engineered around your brand system.",
    includes: [
      "Custom website design",
      "UI/UX and interaction design",
      "Responsive implementation",
      "Performance optimization",
    ],
  },
  {
    number: "06",
    title: "Print & Collateral Systems",
    description:
      "Menus, stationery, event materials, sales collateral, style guides -- the tangible brand materials that keep your identity consistent across every interaction.",
    includes: [
      "Menu and stationery design",
      "Event and marketing materials",
      "Sales collateral and presentations",
      "Brand standards documentation",
    ],
  },
  {
    number: "07",
    title: "Strategic Consulting",
    description:
      "Brand audits, competitive positioning, creative operations guidance. For businesses that need strategic clarity before -- or alongside -- design execution.",
    includes: [
      "Brand audits and assessments",
      "Competitive positioning analysis",
      "Creative operations guidance",
      "Strategic roadmap development",
    ],
  },
];

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {services.map((service, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={service.number}
            className="border-b border-border last:border-b-0"
          >
            {/* Accordion Header */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between py-5 md:py-6 text-left group cursor-pointer"
            >
              <div className="flex items-center gap-4 md:gap-6">
                <span className="text-accent text-xs tracking-widest font-medium min-w-[24px]">
                  {service.number}
                </span>
                <h3 className="font-display text-lg md:text-xl text-text-primary group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
              </div>
              <motion.span
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.3, ease: easing.snap }}
                className="text-text-muted text-xl md:text-2xl leading-none flex-shrink-0 ml-4"
              >
                +
              </motion.span>
            </button>

            {/* Accordion Body */}
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: easing.smooth },
                    opacity: { duration: 0.3, delay: 0.05 },
                  }}
                  className="overflow-hidden"
                >
                  <div className="pb-6 md:pb-8 pl-[40px] md:pl-[48px]">
                    <div className="grid md:grid-cols-[1fr_240px] gap-6 md:gap-10">
                      {/* Description */}
                      <div>
                        <p className="text-text-secondary leading-relaxed mb-5">
                          {service.description}
                        </p>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-2 text-accent text-sm font-medium tracking-wide hover:text-accent-hover transition-colors duration-300"
                        >
                          Learn More
                          <span className="text-xs">&rarr;</span>
                        </Link>
                      </div>

                      {/* What's Included */}
                      <div className="md:border-l md:border-border md:pl-6">
                        <p className="text-text-muted text-xs tracking-widest uppercase mb-3">
                          What&apos;s Included
                        </p>
                        <ul className="space-y-2">
                          {service.includes.map((item) => (
                            <li
                              key={item}
                              className="text-text-secondary text-sm flex items-start gap-2"
                            >
                              <span className="text-accent mt-1.5 text-[6px]">
                                &#9679;
                              </span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
