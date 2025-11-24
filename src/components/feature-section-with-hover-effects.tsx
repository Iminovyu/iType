import React from "react";
import { cn } from "@/lib/utils";
import {
  IconBuildingSkyscraper,
  IconPalette,
  IconCode,
  IconRocket,
  IconHeadphones,
  IconChartBar,
  IconShieldLock,
  IconTimeline,
} from "@tabler/icons-react";

export default function AboutiType() {
  const features = [
  {
    title: "CRM out-of-the-box",
    description:
      "We build and deploy CRM systems that save time and boost sales.",
    icon: <IconBuildingSkyscraper />,
  },
  {
    title: "Sales-driven design",
    description:
      "UI/UX, branding and identity — beautiful and human-friendly.",
    icon: <IconPalette />,
  },
  {
    title: "Clean code only",
    description:
      "Modern stack: Next.js, React, Nest, TypeScript — no legacy hacks.",
    icon: <IconCode />,
  },
  {
    title: "Launch in 4 weeks",
    description:
      "From idea to first user — fast, transparent and zero bureaucracy.",
    icon: <IconRocket />,
  },
  {
    title: "24/7 support",
    description:
      "We stay after launch: SLA, updates, hot-fixes and consultations.",
    icon: <IconHeadphones />,
  },
  {
    title: "Marketing analytics",
    description:
      "Metrics, A/B tests and funnels so you know what really works.",
    icon: <IconChartBar />,
  },
  {
    title: "Data protection",
    description:
      "Encryption, backups and audits — your data is locked and safe.",
    icon: <IconShieldLock />,
  },
  {
    title: "Scale without pain",
    description:
      "Micro-services, Docker, CI/CD, cloud — ready for rapid growth.",
    icon: <IconTimeline />,
  },
];

  return (
    <section className="w-full bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-6 py-26">
        {/* можно добавить заголовок секции */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-neutral-900 dark:text-neutral-100">
          About us
        </h2>
        <p className="text-center text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-3xl mx-auto">
          We are the iType team. We craft user-friendly CRMs, design and web
          projects that help businesses grow — without the headache..
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
          {features.map((f, i) => (
            <Feature key={f.title} {...f} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};