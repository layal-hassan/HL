"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const navLinks = ["Home", "Work", "Services", "Contact"];

const services = [
  {
    title: "UI/UX Design",
    icon: "design",
    description:
      "We craft user experiences that are not just beautiful - but built to convert, retain, and scale.",
  },
  {
    title: "Frontend Development",
    icon: "frontend",
    description:
      "Fast, responsive, and pixel-perfect interfaces that feel smooth, modern, and reliable on every device.",
  },
  {
    title: "Backend (Django)",
    icon: "backend",
    featured: true,
    description:
      "Scalable backend systems, APIs, and workflows built to support real business growth - not just demos.",
  },
];

const projects = [
  {
    title: "Hembla Experten Platform",
    description:
      "A real booking system built to help service businesses manage appointments, customer flows, and operations in one place.",
    href: "https://hembla-experten.se/",
    accent: "from-fuchsia-500/60 via-violet-500/35 to-sky-400/20",
    meta: "Real System",
    stack: "UI/UX + Frontend + Backend",
    images: [
      {
        src: "/images/projects/service-booking-mobile.jpg",
        alt: "Service Booking Platform mobile product mockup",
        type: "mobile",
      },
      {
        src: "/images/projects/laptop-land-desktop.jpg",
        alt: "Service Booking Platform desktop product mockup",
        type: "desktop",
      },
    ],
    glow: "bg-[radial-gradient(circle_at_left_center,rgba(123,97,255,0.22),transparent_34%)]",
    features: ["Booking workflows", "Provider dashboards", "Customer management"],
  },
  {
    title: "Laptop Land E-commerce Platform",
    description:
      "A real online store built to increase sales and simplify product management.",
    href: "https://laptopland.pythonanywhere.com/",
    accent: "from-violet-500/50 via-purple-500/30 to-cyan-400/20",
    meta: "Featured Real System",
    stack: "UI/UX + Frontend + Backend",
    featured: true,
    images: [
      {
        src: "/images/projects/laptop-land-mobile.jpg",
        alt: "Laptop Land mobile UI mockup",
        type: "mobile",
      },
      {
        src: "/images/projects/laptop-land-desktop-2.jpg",
        alt: "Laptop Land desktop UI mockup",
        type: "desktop",
      },
    ],
    glow: "bg-[radial-gradient(circle_at_top_center,rgba(123,97,255,0.26),transparent_36%)]",
    features: [
      "Improved product browsing experience",
      "Faster checkout flow",
      "Admin system for inventory control",
      "Built end-to-end (UI/UX + Frontend + Backend)",
    ],
  },
];

const whyHL = [
  {
    title: "From Idea to Launch",
    description:
      "I take products from rough concepts to shipped systems with a clear process across UI/UX, frontend, backend, and launch.",
    icon: "01",
  },
  {
    title: "Built for Real Use",
    description:
      "The work is shaped around real users, real business needs, and systems that need to perform beyond presentation screens.",
    icon: "02",
  },
  {
    title: "Full-Stack Execution",
    description:
      "From interface design to product logic, backend workflows, and deployment, everything is built to work as one complete system.",
    icon: "03",
  },
];

const currentlyBuilding = [
  {
    title: "NitroSync Platform",
    description:
      "A live operational platform focused on syncing workflows, reducing manual steps, and improving visibility across teams.",
    points: [
      "Unified dashboard architecture",
      "Workflow automation in progress",
      "Performance-focused product foundation",
    ],
  },
  {
    title: "Service Platform",
    description:
      "An active service product being shaped into a smoother customer journey with stronger backend operations and cleaner product flow.",
    points: [
      "Service booking experience refinement",
      "Provider-side management tools",
      "Backend workflows under active build",
    ],
  },
];

const teamMembers = [
  {
    name: "Layal Hassan",
    role: "UI/UX Designer & Product Specialist",
    description:
      "Shapes product direction through interface design, user experience thinking, and clearer journeys that support business goals.",
    image: "/images/team/layal-hassan.png",
  },
  {
    name: "Haidar Alhamoud",
    role: "Full Stack Developer (Django)",
    description:
      "Builds the product from backend logic to frontend delivery, turning concepts into systems that are ready for real-world use.",
    image: "/images/team/haidar-alhamoud.png",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.12,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/75">
        {eyebrow}
      </p>
      <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-300">
        {description}
      </p>
    </div>
  );
}

function ServiceIcon({ type }: { type: "design" | "frontend" | "backend" }) {
  const baseProps = {
    className: "h-6 w-6",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "design") {
    return (
      <svg {...baseProps}>
        <path d="M4.5 16.5 16 5a2.121 2.121 0 1 1 3 3L7.5 19.5 3 21l1.5-4.5Z" />
        <path d="m13.5 7.5 3 3" />
      </svg>
    );
  }

  if (type === "frontend") {
    return (
      <svg {...baseProps}>
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path d="M7.5 9.5 5.5 12l2 2.5" />
        <path d="M16.5 9.5 18.5 12l-2 2.5" />
        <path d="M10.5 15.5 13.5 8.5" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <rect x="4.5" y="4.5" width="15" height="6" rx="2" />
      <rect x="4.5" y="13.5" width="15" height="6" rx="2" />
      <path d="M8 7.5h.01" />
      <path d="M8 16.5h.01" />
      <path d="M11 7.5h5.5" />
      <path d="M11 16.5h5.5" />
    </svg>
  );
}

function ContactIcon({ type }: { type: "email" | "phone" | "whatsapp" }) {
  const baseProps = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.7",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  if (type === "email") {
    return (
      <svg {...baseProps}>
        <rect x="3.5" y="5.5" width="17" height="13" rx="2.5" />
        <path d="m5.5 8 6.5 5 6.5-5" />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg {...baseProps}>
        <path d="M8.2 4.8c.6-.6 1.6-.7 2.3-.2l1.7 1.2c.6.4.8 1.2.5 1.9l-.8 1.8a1.5 1.5 0 0 0 .3 1.7l.6.6a1.5 1.5 0 0 0 1.7.3l1.8-.8c.7-.3 1.5-.1 1.9.5l1.2 1.7c.5.7.4 1.7-.2 2.3l-1.2 1.2c-.9.9-2.2 1.2-3.4.8-2.3-.8-4.4-2.2-6.2-4S6.1 10 5.3 7.7c-.4-1.2-.1-2.5.8-3.4l2.1-1.5Z" />
      </svg>
    );
  }

  return (
    <svg {...baseProps}>
      <path d="M16.7 13.6 16 13a5.2 5.2 0 1 0-2 2l.6.7 3.8.9-.9-3.8Z" />
      <path d="M9.5 8.8c.2-.5.5-.5.7-.5h.6c.2 0 .4.1.5.4l.5 1.2c.1.2.1.4 0 .6l-.4.5c-.1.1-.1.3 0 .4.3.6.8 1.1 1.4 1.4.1.1.3.1.4 0l.5-.4c.2-.1.4-.1.6 0l1.2.5c.3.1.4.3.4.5v.6c0 .2 0 .5-.5.7-.3.1-.9.2-1.8-.1a7.2 7.2 0 0 1-4.3-4.3c-.3-.9-.2-1.5-.1-1.8Z" />
    </svg>
  );
}

export function LandingPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [dragLimit, setDragLimit] = useState(0);

  useEffect(() => {
    const updateDragLimit = () => {
      if (!carouselRef.current) return;
      const { scrollWidth, offsetWidth } = carouselRef.current;
      setDragLimit(Math.max(scrollWidth - offsetWidth, 0));
    };

    updateDragLimit();
    window.addEventListener("resize", updateDragLimit);
    return () => window.removeEventListener("resize", updateDragLimit);
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,97,255,0.16),transparent_28%),radial-gradient(circle_at_80%_20%,rgba(170,130,255,0.12),transparent_22%),linear-gradient(180deg,rgba(255,255,255,0.04),transparent_14%)]" />
      <div className="noise-layer pointer-events-none absolute inset-0 opacity-40" />
      <div className="stars pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute inset-0 bg-grid bg-[length:72px_72px] opacity-[0.04]" />

      <motion.div
        className="relative z-10"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <motion.header
          variants={item}
          className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-6 lg:px-10"
        >
          <a
            href="#home"
            className="inline-flex items-center"
          >
            <div className="relative flex h-[72px] w-[92px] items-center justify-center overflow-hidden rounded-2xl">
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-[radial-gradient(circle,rgba(123,97,255,0.18),transparent_65%)] blur-xl" />
              <Image
                src="/images/hl-logo.png"
                alt="HL logo"
                width={88}
                height={52}
                className="relative h-auto w-[88px] object-contain mix-blend-screen brightness-110 contrast-125"
                priority
              />
            </div>
          </a>

          <nav className="hidden items-center gap-8 rounded-full border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-xl md:flex">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-slate-300 transition hover:text-white"
              >
                {link}
              </a>
            ))}
          </nav>

          <a href="#contact" className="button-glow hidden md:inline-flex">
            Book a Call
          </a>
        </motion.header>

        <section
          id="home"
          className="relative mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:px-10 lg:pt-16"
        >
          <div className="pointer-events-none absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(123,97,255,0.42),rgba(123,97,255,0.12)_40%,transparent_72%)] blur-3xl animate-[pulseGlow_8s_ease-in-out_infinite]" />
          <div className="pointer-events-none absolute left-[14%] top-24 h-28 w-28 rounded-full bg-violet-500/20 blur-3xl animate-float" />
          <div className="pointer-events-none absolute right-[12%] top-40 h-24 w-24 rounded-full bg-fuchsia-400/10 blur-3xl animate-drift" />

          <motion.div
            variants={container}
            className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.2fr_0.8fr]"
          >
            <div className="max-w-4xl">
              <motion.p
                variants={item}
                className="mb-6 inline-flex rounded-full border border-violet-400/25 bg-violet-500/10 px-4 py-2 text-sm uppercase tracking-[0.28em] text-violet-200"
              >
                Trusted by growing businesses
              </motion.p>
              <motion.h1
                variants={item}
                className="font-[family-name:var(--font-display)] text-5xl font-bold leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl lg:text-[5.7rem]"
              >
                From Idea to Scalable Digital Product
              </motion.h1>
              <motion.p
                variants={item}
                className="mt-8 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
              >
                We design, build, and launch modern digital experiences that
                actually convert.
              </motion.p>
              <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="button-glow">
                  Book a Call
                </a>
                <a href="#work" className="button-outline">
                  View Case Studies
                </a>
              </motion.div>
              <motion.p
                variants={item}
                className="mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base"
              >
                UI/UX + Frontend + Backend - all in one place.
              </motion.p>
            </div>

            <motion.div variants={item} className="relative">
              <div className="glass-panel relative overflow-hidden rounded-[32px] p-6 shadow-card">
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-200/60 to-transparent" />
                <div className="grid gap-4">
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <div className="mb-4 flex items-center justify-between">
                      <span className="text-xs uppercase tracking-[0.28em] text-violet-200/70">
                        Conversion Metrics
                      </span>
                      <span className="rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs text-emerald-200">
                        +38%
                      </span>
                    </div>
                    <div className="h-36 rounded-[20px] bg-[radial-gradient(circle_at_20%_20%,rgba(123,97,255,0.45),transparent_38%),linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))] p-4">
                      <div className="flex h-full items-end gap-3">
                        {[44, 58, 65, 76, 88, 96].map((height, index) => (
                          <div
                            key={height}
                            className="flex-1 rounded-t-full bg-gradient-to-t from-violet-500 to-violet-300 shadow-[0_0_24px_rgba(123,97,255,0.35)]"
                            style={{
                              height: `${height}%`,
                              opacity: 0.55 + index * 0.07,
                            }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Growth Result
                      </p>
                      <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                        +35%
                      </p>
                      <p className="mt-2 text-sm text-slate-300">
                        Conversion Rate
                      </p>
                      <p className="mt-3 text-sm text-slate-400">Real impact on user engagement.</p>
                    </div>
                    <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                      <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                        Delivery Speed
                      </p>
                      <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                        4-6 Weeks
                      </p>
                      <p className="mt-2 text-sm text-slate-300">
                        Launch in 4-6 Weeks
                      </p>
                      <p className="mt-3 text-sm text-slate-400">Fast, efficient execution.</p>
                    </div>
                  </div>
                  <div className="rounded-[24px] border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">
                      Product Scope
                    </p>
                    <p className="mt-4 font-[family-name:var(--font-display)] text-4xl font-bold text-white">
                      Full Delivery
                    </p>
                    <p className="mt-2 text-sm text-slate-300">Design + Development</p>
                    <p className="mt-3 text-sm text-slate-400">One team from concept to launch.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        <motion.section
          id="services"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Services"
            title="Full Product Development - From Idea to Launch"
            description="We design, build, and deliver high-performing digital products that drive real business results."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                animate={{ y: [0, -4, 0] }}
                transition={{
                  opacity: { duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] },
                  y: {
                    duration: 6 + index * 0.4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.12,
                  },
                }}
                whileHover={{
                  y: -5,
                  scale: service.featured ? 1.05 : 1.01,
                }}
                className={`glass-panel group relative overflow-hidden rounded-[28px] p-8 transition-shadow duration-300 ${
                  service.featured
                    ? "scale-[1.03] border-violet-400/45 bg-[linear-gradient(180deg,rgba(123,97,255,0.16),rgba(255,255,255,0.05)),rgba(255,255,255,0.04)] shadow-[0_34px_110px_rgba(8,8,14,0.72),0_0_0_1px_rgba(123,97,255,0.26)_inset,0_0_58px_rgba(123,97,255,0.24)] hover:border-violet-300/70 hover:shadow-[0_40px_130px_rgba(8,8,14,0.82),0_0_0_1px_rgba(123,97,255,0.38)_inset,0_0_80px_rgba(123,97,255,0.36)]"
                    : "shadow-card hover:border-violet-400/35 hover:shadow-[0_30px_90px_rgba(8,8,14,0.55),0_0_0_1px_rgba(123,97,255,0.22)_inset,0_0_44px_rgba(123,97,255,0.16)]"
                }`}
              >
                <div
                  className={`pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 ${
                    service.featured
                      ? "bg-[radial-gradient(circle_at_50%_0%,rgba(123,97,255,0.3),transparent_50%)]"
                      : "bg-[radial-gradient(circle_at_50%_0%,rgba(123,97,255,0.22),transparent_48%)]"
                  }`}
                />
                <div className="service-sweep pointer-events-none absolute inset-x-0 bottom-[-55%] h-[85%] bg-gradient-to-t from-violet-400/0 via-violet-300/16 to-white/0 opacity-0 transition duration-500 group-hover:opacity-100" />
                <div
                  className={`relative mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border bg-violet-500/10 text-violet-100 transition ${
                    service.featured
                      ? "border-violet-300/40 shadow-[0_0_34px_rgba(123,97,255,0.3)] group-hover:animate-pulse"
                      : "border-violet-300/20 shadow-glow"
                  }`}
                >
                  <ServiceIcon type={service.icon as "design" | "frontend" | "backend"} />
                </div>
                <h3 className="relative font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="relative mt-4 leading-7 text-slate-300">{service.description}</p>
                <div className="relative mt-10 h-px bg-gradient-to-r from-violet-400/40 to-transparent transition group-hover:from-violet-300/70" />
                <p className="relative mt-5 text-sm uppercase tracking-[0.28em] text-violet-200/75 transition group-hover:text-violet-100">
                  End-to-End Solution
                </p>
              </motion.article>
            ))}
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center text-sm leading-7 text-slate-400 sm:text-base">
            One team. One process. No gaps between design and development.
          </p>
        </motion.section>

        <motion.section
          id="work"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Projects"
            title="Real systems built for real business use"
            description="These are production-focused systems, not concept designs - each one combines UI/UX, frontend, and backend delivery in a single product workflow."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <motion.article
                key={project.title}
                whileHover={{ y: -8, scale: project.featured ? 1.04 : 1.01 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className={`group relative flex min-h-[41rem] flex-col overflow-hidden rounded-[30px] border bg-white/[0.03] shadow-card transition ${
                  project.featured
                    ? "scale-[1.02] border-violet-400/35 hover:shadow-[0_36px_110px_rgba(8,8,14,0.72),0_0_0_1px_rgba(123,97,255,0.24)_inset,0_0_60px_rgba(123,97,255,0.26)]"
                    : "border-white/10 hover:border-violet-400/25 hover:shadow-[0_28px_90px_rgba(8,8,14,0.55),0_0_44px_rgba(123,97,255,0.14)]"
                }`}
              >
                <div className={`pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 ${project.glow}`} />
                <div
                  className={`relative h-72 overflow-hidden bg-gradient-to-br ${project.accent} ${
                    project.featured ? "border-b border-violet-300/10" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25),transparent_26%),linear-gradient(180deg,rgba(11,11,15,0.1),rgba(11,11,15,0.7))]" />
                  <div className="absolute inset-x-6 bottom-6 rounded-[22px] border border-white/15 bg-black/25 p-5 backdrop-blur-md">
                    <p className="text-xs uppercase tracking-[0.3em] text-violet-100/75">
                      {project.meta}
                    </p>
                    {project.images ? (
                      <div className="mt-4 grid grid-cols-2 gap-3">
                        {project.images.map((image, imageIndex) => (
                          <motion.div
                            key={image.src}
                            animate={{ y: [0, imageIndex === 0 ? -5 : -7, 0] }}
                            transition={{
                              duration: 6 + imageIndex,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            className={`relative overflow-hidden rounded-[22px] border border-white/10 bg-black/20 p-3 shadow-[0_18px_50px_rgba(4,4,10,0.35)] ${
                              image.type === "desktop" ? "h-36" : "h-36"
                            }`}
                          >
                            <motion.div
                              whileHover={{ scale: 1.02 }}
                              transition={{ duration: 0.3, ease: "easeOut" }}
                              className="relative h-full w-full"
                            >
                              <Image
                                src={image.src}
                                alt={image.alt}
                                fill
                                className="rounded-[18px] object-contain transition duration-300 group-hover:scale-[1.02] group-hover:brightness-110"
                                sizes="(max-width: 768px) 40vw, 18vw"
                              />
                              <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-violet-500/0 opacity-0 transition duration-300 group-hover:bg-violet-500/10 group-hover:opacity-100" />
                            </motion.div>
                          </motion.div>
                        ))}
                      </div>
                    ) : project.image ? (
                      <motion.div
                        animate={{ y: [0, -6, 0] }}
                        transition={{
                          duration: project.featured ? 7 : 6,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                        className={`relative mt-4 flex items-center justify-center overflow-hidden rounded-[22px] border border-white/10 bg-black/20 p-4 shadow-[0_18px_50px_rgba(4,4,10,0.35)] ${
                          project.imageType === "desktop" ? "h-40" : "h-44"
                        }`}
                      >
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src={project.image}
                            alt={project.imageAlt}
                            fill
                            className="rounded-[18px] object-contain transition duration-300 group-hover:scale-[1.02] group-hover:brightness-110"
                            sizes="(max-width: 768px) 80vw, 30vw"
                          />
                          <div className="pointer-events-none absolute inset-0 rounded-[18px] bg-violet-500/0 opacity-0 transition duration-300 group-hover:bg-violet-500/10 group-hover:opacity-100" />
                        </motion.div>
                      </motion.div>
                    ) : (
                      <div className="mt-4 rounded-[22px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-4 shadow-[0_18px_50px_rgba(4,4,10,0.35)]">
                        <div className="rounded-[18px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(123,97,255,0.14),transparent_45%),linear-gradient(180deg,rgba(255,255,255,0.04),rgba(255,255,255,0.02))] p-4">
                          <div className="mb-4 flex items-center gap-2">
                            <div className="h-2.5 w-2.5 rounded-full bg-violet-300/70" />
                            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                            <div className="h-2.5 w-2.5 rounded-full bg-white/20" />
                          </div>
                          <div className="grid gap-3">
                            <div className="h-28 rounded-2xl bg-white/8" />
                            <div className="grid grid-cols-3 gap-3">
                              <div className="h-14 rounded-2xl bg-white/8" />
                              <div className="h-14 rounded-2xl bg-white/8" />
                              <div className="h-14 rounded-2xl bg-white/8" />
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="relative flex flex-1 flex-col p-8">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-xl leading-7 text-slate-300">
                    {project.description}
                  </p>
                  <p className="mt-5 text-xs uppercase tracking-[0.28em] text-violet-200/80">
                    {project.stack}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-slate-300">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3">
                        <span className="h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(123,97,255,0.6)]" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-auto pt-8">
                    <a
                      href={project.href ?? "#"}
                      target={project.href ? "_blank" : undefined}
                      rel={project.href ? "noreferrer" : undefined}
                      className="inline-flex items-center gap-2 rounded-full border border-violet-300/0 bg-violet-500/0 px-4 py-2 text-sm font-semibold text-white opacity-0 transition duration-300 group-hover:border-violet-300/25 group-hover:bg-violet-500/10 group-hover:opacity-100 group-hover:shadow-[0_0_28px_rgba(123,97,255,0.2)]"
                    >
                      <span>View Case Study</span>
                      <span className="text-violet-300 transition duration-300 group-hover:translate-x-1">
                        -&gt;
                      </span>
                    </a>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-violet-500/15 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Currently Building"
            title="Active systems moving from execution to launch"
            description="A focused view into the products currently in development, presented with the same care and clarity as shipped work."
          />

          <div className="relative">
            <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />
            <div className="pointer-events-none absolute -right-10 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-fuchsia-400/10 blur-3xl" />

            <div ref={carouselRef} className="overflow-hidden">
              <motion.div
                drag="x"
                dragConstraints={{ left: -dragLimit, right: 0 }}
                dragElastic={0.08}
                whileTap={{ cursor: "grabbing" }}
                className="flex cursor-grab gap-6 pb-4"
              >
                {currentlyBuilding.map((project, index) => (
                  <motion.article
                    key={project.title}
                    whileHover={{ y: -6, scale: 1.015 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="glass-panel group relative min-h-[29rem] w-[22rem] shrink-0 overflow-hidden rounded-[30px] p-8 shadow-card sm:w-[25rem] lg:w-[28rem]"
                  >
                    <div
                      className={`pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100 ${
                        index % 2 === 0
                          ? "bg-[radial-gradient(circle_at_left_top,rgba(123,97,255,0.22),transparent_38%)]"
                          : "bg-[radial-gradient(circle_at_right_top,rgba(123,97,255,0.22),transparent_38%)]"
                      }`}
                    />
                    <div className="relative flex items-center justify-between">
                      <span className="rounded-full border border-violet-300/20 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.28em] text-violet-100">
                        In Development
                      </span>
                      <span className="h-2.5 w-2.5 rounded-full bg-violet-300 shadow-[0_0_16px_rgba(123,97,255,0.9)]" />
                    </div>

                    <div className="relative mt-8 rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-5">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 rounded-2xl bg-white/10" />
                        <div className="h-16 rounded-2xl bg-white/10" />
                        <div className="h-16 rounded-2xl bg-white/10" />
                      </div>
                    </div>

                    <h3 className="relative mt-8 font-[family-name:var(--font-display)] text-3xl font-semibold tracking-[-0.04em] text-white">
                      {project.title}
                    </h3>
                    <p className="relative mt-4 leading-7 text-slate-300">
                      {project.description}
                    </p>

                    <ul className="relative mt-8 space-y-4 text-sm text-slate-300">
                      {project.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(123,97,255,0.7)]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Why HL"
            title="I Don't Just Design - I Build Real Systems"
            description="This is end-to-end product development: UI/UX, frontend, backend, and deployment brought together to create digital products that are ready for real business use."
          />

          <div className="grid gap-6 lg:grid-cols-3">
            {whyHL.map((point) => (
              <div key={point.title} className="glass-panel rounded-[28px] p-8 shadow-card">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-300/20 bg-violet-500/10 font-[family-name:var(--font-display)] text-lg font-bold text-violet-100 shadow-glow">
                  {point.icon}
                </div>
                <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  {point.title}
                </h3>
                <p className="mt-4 leading-7 text-slate-300">{point.description}</p>
              </div>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-6 py-24 lg:px-10"
        >
          <SectionHeading
            eyebrow="Team"
            title="The people behind the product work"
            description="A focused team combining product thinking, interface design, and full-stack execution in one streamlined workflow."
          />

          <div className="grid gap-6 md:grid-cols-2">
            {teamMembers.map((member) => (
              <motion.article
                key={member.name}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass-panel group relative overflow-hidden rounded-[30px] p-8 text-center shadow-card hover:border-violet-300/25 hover:shadow-[0_28px_90px_rgba(8,8,14,0.52),0_0_44px_rgba(123,97,255,0.16)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(123,97,255,0.18),transparent_42%)] opacity-0 transition duration-300 group-hover:opacity-100" />
                <div className="relative mx-auto mb-8 h-80 w-full max-w-[18rem]">
                  <div className="pointer-events-none absolute inset-x-6 bottom-4 h-24 rounded-full bg-violet-500/20 blur-3xl opacity-70 transition duration-300 group-hover:opacity-100" />
                  <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-violet-300/18 bg-white/5 p-1 shadow-[0_0_28px_rgba(123,97,255,0.14)]">
                    <div className="relative h-full w-full overflow-hidden rounded-[24px]">
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(11,11,15,0.02))]" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover object-top transition duration-300 group-hover:scale-[1.03]"
                      sizes="(max-width: 768px) 70vw, 288px"
                    />
                    </div>
                  </div>
                </div>
                <h3 className="relative font-[family-name:var(--font-display)] text-2xl font-semibold text-white">
                  {member.name}
                </h3>
                <p className="relative mt-3 text-sm font-medium uppercase tracking-[0.22em] text-violet-200/80">
                  {member.role}
                </p>
                <p className="relative mx-auto mt-6 max-w-md leading-7 text-slate-300">
                  {member.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="contact"
          variants={sectionVariant}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-5xl px-6 py-24 lg:px-10"
        >
            <div className="glass-panel relative overflow-hidden rounded-[36px] px-8 py-16 text-center shadow-card sm:px-14">
              <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-violet-500/20 blur-3xl" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-300/75">
                Start Now
              </p>
              <h2 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-bold tracking-[-0.05em] text-white sm:text-5xl">
                Ready to Turn Your Idea Into a Real Product?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                I handle everything - UI/UX, frontend, backend, and deployment.
              </p>
              <div className="mt-10">
                <a
                  href="https://wa.me/963939240923"
                  target="_blank"
                  rel="noreferrer"
                  className="button-glow animate-[pulseGlow_5s_ease-in-out_infinite]"
                >
                  Book a Call
                </a>
                <p className="mt-4 text-sm text-slate-400">
                  Let's discuss your project - no commitment
                </p>
                <div className="mx-auto mt-8 max-w-md rounded-[28px] border border-violet-300/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))] p-5 shadow-[0_22px_70px_rgba(8,8,14,0.4),0_0_0_1px_rgba(123,97,255,0.08)_inset] backdrop-blur-xl">
                  <div className="space-y-3">
                    <a
                      href="mailto:hlinfo19992000@gmail.com"
                      className="group flex items-center justify-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 text-center transition duration-300 hover:border-violet-300/25 hover:bg-violet-500/[0.04] hover:shadow-[0_0_26px_rgba(123,97,255,0.12)]"
                    >
                      <div className="rounded-xl border border-violet-300/18 bg-violet-500/10 p-2 text-violet-200 transition group-hover:text-violet-100">
                        <ContactIcon type="email" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">Email</p>
                        <p className="mt-1 text-sm text-white transition group-hover:text-violet-200">
                          hlinfo19992000@gmail.com
                        </p>
                      </div>
                    </a>
                    <a
                      href="tel:+963939240923"
                      className="group flex items-center justify-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 text-center transition duration-300 hover:border-violet-300/25 hover:bg-violet-500/[0.04] hover:shadow-[0_0_26px_rgba(123,97,255,0.12)]"
                    >
                      <div className="rounded-xl border border-violet-300/18 bg-violet-500/10 p-2 text-violet-200 transition group-hover:text-violet-100">
                        <ContactIcon type="phone" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">Phone</p>
                        <p className="mt-1 text-sm text-white transition group-hover:text-violet-200">
                          +963 939 240 923
                        </p>
                      </div>
                    </a>
                    <a
                      href="https://wa.me/963939240923"
                      target="_blank"
                      rel="noreferrer"
                      className="group flex items-center justify-center gap-4 rounded-2xl border border-white/8 bg-white/[0.02] px-4 py-4 text-center transition duration-300 hover:border-violet-300/25 hover:bg-violet-500/[0.04] hover:shadow-[0_0_26px_rgba(123,97,255,0.12)]"
                    >
                      <div className="rounded-xl border border-violet-300/18 bg-violet-500/10 p-2 text-violet-200 transition group-hover:text-violet-100">
                        <ContactIcon type="whatsapp" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.24em] text-[#A1A1AA]">WhatsApp</p>
                        <p className="mt-1 text-sm text-white transition group-hover:text-violet-200">
                          Chat on WhatsApp -&gt;
                        </p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>
      </motion.div>
    </main>
  );
}
