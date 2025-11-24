"use client";

import React, { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Package, Calendar, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ProjectTimeLineEntry = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  items?: string[];
  image?: string;
  button?: {
    url: string;
    text: string;
  };
};

export interface ProjectsTimeLineProps {
  title?: string;
  description?: string;
  entries?: ProjectTimeLineEntry[];
  className?: string;
}

export const defaultProjectEntries: ProjectTimeLineEntry[] = [
  {
    icon: Package,
    title: "CRM for Retail Chain",
    subtitle: "Q1 2025 • Live",
    description:
      "Full-cycle CRM that cut order-processing time by 40 % and boosted repeat sales through automated loyalty flows.",
    items: [
      "Multi-store inventory sync",
      "One-click repeat purchase",
      "Real-time analytics dashboard",
      "Headless POS integration",
    ],
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
    button: {
      url: "#",
      text: "View Case Study",
    },
  },
  {
    icon: Sparkles,
    title: "Brand Identity & E-com Site",
    subtitle: "Q4 2024 • Live",
    description:
      "New visual language and Shopify-based store that raised conversion rate from 1.8 % to 4.1 % in eight weeks.",
    items: [
      "UI kit & design tokens",
      "Mobile-first storefront",
      "Story-driven landing pages",
      "Performance 95 Lighthouse",
    ],
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Zap,
    title: "SaaS Dashboard Redesign",
    subtitle: "Q3 2024 • Live",
    description:
      "Complete UX overhaul for a fintech start-up: cut onboarding time from 18 to 6 minutes and reduced churn by 22 %.",
    items: [
      "Friction-less KYC flow",
      "Dark / light theme toggle",
      "Interactive charts (Recharts)",
      "Keyboard-only navigation",
    ],
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Calendar,
    title: "Delivery Scheduler Portal",
    subtitle: "Q2 2024 • Live",
    description:
      "B2B portal that lets wholesalers book delivery slots in real time, saving 120 manager hours per month.",
    items: [
      "Live calendar sync",
      "Driver GPS tracking",
      "Auto-invoice generation",
      "SLA alerts & chat",
    ],
    image:
      "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
    button: {
      url: "#",
      text: "Explore Portal",
    },
  },
];

/**
 * Behaviour: only the card centered in viewport is "open".
 * Scroll to switch active project.
 */
export default function ProjectsTimeLine({
  title = "Our Projects",
  description = "How we turn ideas into live products — on time and on budget.",
  entries = defaultProjectEntries,
}: ProjectsTimeLineProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sentinelRefs = useRef<(HTMLDivElement | null)[]>([]);

  const setItemRef = (el: HTMLDivElement | null, i: number) => {
    itemRefs.current[i] = el;
  };
  const setSentinelRef = (el: HTMLDivElement | null, i: number) => {
    sentinelRefs.current[i] = el;
  };

  useEffect(() => {
    if (!sentinelRefs.current.length) return;
    let frame = 0;
    const updateActiveByProximity = () => {
      frame = requestAnimationFrame(updateActiveByProximity);
      const centerY = window.innerHeight / 3;
      let bestIndex = 0;
      let bestDist = Infinity;
      sentinelRefs.current.forEach((node, i) => {
        if (!node) return;
        const rect = node.getBoundingClientRect();
        const mid = rect.top + rect.height / 2;
        const dist = Math.abs(mid - centerY);
        if (dist < bestDist) {
          bestDist = dist;
          bestIndex = i;
        }
      });
      if (bestIndex !== activeIndex) setActiveIndex(bestIndex);
    };
    frame = requestAnimationFrame(updateActiveByProximity);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex]);

  useEffect(() => {
    setActiveIndex(0);
  }, []);

  return (
    <section className="py-32">
      <div className="container px-4">
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-4 text-6xl font-bold tracking-tight md:text-5xl">
            {title}
          </h1>
          <p className="mb-6 text-base text-muted-foreground md:text-lg">
            {description}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-3xl space-y-16 md:mt-24 md:space-y-24">
          {entries.map((entry, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={index}
                className="relative flex flex-col gap-4 md:flex-row md:gap-16"
                ref={(el) => setItemRef(el, index)}
                aria-current={isActive ? "true" : "false"}
              >
                {/* Sticky meta */}
                <div className="top-8 flex h-min w-64 shrink-0 items-center gap-4 md:sticky">
                  <div
                    className={`p-2 rounded-lg ${
                      isActive
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <entry.icon className="h-4 w-4" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{entry.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {entry.subtitle}
                    </span>
                  </div>
                </div>

                {/* Sentinel for proximity check */}
                <div
                  ref={(el) => setSentinelRef(el, index)}
                  aria-hidden
                  className="absolute -top-24 left-0 h-12 w-12 opacity-0"
                />

                {/* Content card */}
                <article
                  className={
                    "flex flex-col rounded-2xl border p-3 transition-all duration-300 " +
                    (isActive
                      ? "border-gray-50 dark:border-gray-800 bg-gray-50 dark:bg-black shadow-lg"
                      : "border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black")
                  }
                >
                  {entry.image && (
                    <img
                      src={entry.image}
                      alt={entry.title}
                      className="mb-4 w-full h-72 rounded-lg object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h2
                        className={
                          "text-md font-medium leading-tight tracking-tight md:text-lg transition-colors duration-200 " +
                          (isActive ? "text-foreground" : "text-foreground/70")
                        }
                      >
                        {entry.title}
                      </h2>
                      <p
                        className={
                          "text-xs leading-relaxed md:text-sm transition-all duration-300 " +
                          (isActive
                            ? "text-muted-foreground line-clamp-none"
                            : "text-muted-foreground/80 line-clamp-2")
                        }
                      >
                        {entry.description}
                      </p>
                    </div>

                    {/* Expandable details */}
                    <div
                      aria-hidden={!isActive}
                      className={
                        "grid transition-all duration-500 ease-out " +
                        (isActive
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0")
                      }
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 pt-2">
                          {entry.items && entry.items.length > 0 && (
                            <div className="rounded-lg border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-black p-4">
                              <ul className="space-y-2">
                                {entry.items.map((item, idx) => (
                                  <li
                                    key={idx}
                                    className="flex items-start gap-2 text-sm text-muted-foreground"
                                  >
                                    <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 shrink-0" />
                                    <span className="leading-relaxed">
                                      {item}
                                    </span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {entry.button && (
                            <div className="flex justify-end">
                              <Button
                                variant="default"
                                size="sm"
                                className="group hover:bg-primary hover:text-primary-foreground font-normal transition-all duration-200"
                                asChild
                              >
                                <a
                                  href={entry.button.url}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  {entry.button.text}
                                  <ArrowUpRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </a>
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}