import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { heroStats, practiceAreas, whyPillars, whyValues } from "@/lib/site"

export default function HomePage() {
  return (
    <div>
      <section className="relative isolate min-h-[420px] overflow-hidden bg-navy sm:min-h-[520px] lg:min-h-[640px]">
        <Image
          src="/images/hero.png"
          alt="Consultancy workspace with law, taxation, business and finance volumes"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-[70%_center]"
        />
        <div className="absolute inset-0 bg-navy/75 sm:bg-[linear-gradient(to_right,#162640_0%,#162640cc_42%,#16264040_68%,transparent_100%)]" />

        <div className="relative mx-auto grid min-h-[420px] max-w-[1440px] items-center gap-10 px-4 py-12 sm:min-h-[520px] sm:gap-16 sm:px-6 sm:py-20 lg:min-h-[640px] lg:grid-cols-[1fr_auto] lg:gap-20 lg:px-10 lg:py-28 xl:px-16">
          <div>
          <p className="flex max-w-full flex-wrap items-center gap-3 text-[10px] font-medium uppercase tracking-[0.16em] text-gold sm:text-[11px] sm:tracking-[0.22em]">
            <span aria-hidden className="h-px w-8 bg-gold" />
            Gupta Associate Consultancy Service
          </p>
          <h1 className="mt-6 max-w-xl font-serif text-[1.85rem] leading-[1.12] text-white sm:text-5xl lg:text-6xl">
            Your Concern.
            <span className="mt-1 block italic text-gold">Our Expertise.</span>
            Your Confidence.
          </h1>
          <p className="mt-6 max-w-lg text-base leading-7 text-white/70 sm:text-lg">
            A multidisciplinary consultancy serving individuals and businesses
            across law, taxation, finance and corporate advisory — backed by a
            team of 20+ Chartered Accountants and Company Secretaries.
          </p>
          <div className="mt-8 flex w-full flex-col gap-4 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
            <Link
              href="/book"
              className="inline-flex w-full items-center justify-center bg-gold px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:bg-gold-300 sm:w-auto"
            >
              Book Consultation
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 text-sm text-white/75 transition-colors hover:text-gold sm:justify-start"
            >
              Explore Services
              <ArrowRight className="size-4" />
            </Link>
          </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 gap-y-8 sm:gap-x-14 sm:gap-y-10 lg:min-w-[280px] xl:min-w-[320px]">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <dd className="font-display text-4xl font-bold leading-none text-gold sm:text-5xl">
                  {stat.value}
                </dd>
                <dt className="mt-2 font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-white/55 sm:text-[11px]">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:gap-14 sm:px-6 sm:py-20 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20 lg:py-28">
          <div>
            <span aria-hidden className="block h-px w-10 bg-gold" />
            <p className="mt-5 text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">
              Practice Areas
            </p>
            <h2 className="mt-4 max-w-sm font-display text-[1.85rem] leading-[1.15] text-navy sm:text-4xl lg:text-5xl">
              Four Integrated Advisory Practices
            </h2>
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-neutral-500">
              Expert counsel across legal, tax, business and financial matters —
              with in-service, server and other support in every practice.
            </p>
            <Link
              href="/services"
              className="mt-8 inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-navy transition-colors hover:text-gold"
            >
              All Services
              <ArrowRight className="size-3.5" />
            </Link>
          </div>

          <ul className="border-t border-neutral-200/90">
            {practiceAreas.map((area) => (
              <li key={area.slug} className="border-b border-neutral-200/90">
                <Link
                  href={`/services#${area.slug}`}
                  className="group flex items-start gap-4 px-3 py-6 transition-colors duration-200 hover:bg-gold sm:-mx-4 sm:gap-6 sm:px-4 sm:py-7"
                >
                  <span className="w-8 shrink-0 pt-1.5 text-[11px] font-medium tracking-wide text-neutral-400 transition-colors group-hover:font-semibold group-hover:text-navy">
                    {area.number}
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-display text-xl text-navy transition-all group-hover:font-semibold sm:text-[22px]">
                      {area.title}
                    </span>
                    <span className="mt-2 block font-mono text-[11px] leading-5 tracking-wide text-neutral-500 transition-all group-hover:font-medium group-hover:text-ink">
                      {area.topics.join(" · ")}
                    </span>
                  </span>
                  <span className="mt-0.5 grid size-9 shrink-0 place-items-center border border-neutral-300 text-navy transition-colors group-hover:border-navy group-hover:bg-navy group-hover:text-gold">
                    <ArrowRight className="size-3.5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="why" className="bg-navy text-white">
        <div className="border-b border-white/10">
          <div className="mx-auto flex max-w-6xl gap-x-6 gap-y-3 overflow-x-auto px-4 py-4 [scrollbar-width:none] sm:flex-wrap sm:overflow-visible sm:px-6 [&::-webkit-scrollbar]:hidden">
            {whyValues.map((value) => (
              <p
                key={value}
                className="flex shrink-0 items-center gap-2 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-warm/80"
              >
                <span aria-hidden className="size-1.5 bg-gold" />
                {value}
              </p>
            ))}
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl items-start gap-10 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 lg:py-24">
          <div>
            <p className="flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              <span aria-hidden className="h-px w-8 bg-gold" />
              Why GACS
            </p>
            <h2 className="mt-5 font-serif text-4xl leading-[1.12] text-white sm:text-5xl">
              One Roof.
              <span className="mt-1 block italic text-gold">All Answers.</span>
            </h2>
            <p className="mt-6 max-w-md font-sans text-[15px] font-normal leading-7 text-warm">
              We unite legal, tax, finance and business advisory under a single,
              trusted practice. No fragmentation. No conflicting advice. One
              relationship that covers everything.
            </p>
            <Link
              href="/why"
              className="mt-8 inline-flex w-full items-center justify-center border border-white/40 px-6 py-3 font-sans text-[11px] font-medium uppercase tracking-[0.2em] text-white transition-colors hover:border-gold hover:text-gold sm:w-auto"
            >
              Our Approach
            </Link>
          </div>

          <div className="grid border border-white/10 sm:grid-cols-2">
            {whyPillars.map((pillar) => (
              <article
                key={pillar.title}
                className="group border-b border-white/10 bg-primary-700 p-7 transition-colors duration-200 last:border-b-0 hover:bg-gold sm:border-r sm:[&:nth-child(2n)]:border-r-0 sm:[&:nth-child(n+3)]:border-b-0"
              >
                <span
                  aria-hidden
                  className="block h-px w-8 bg-gold transition-colors group-hover:bg-navy"
                />
                <h3 className="mt-5 font-sans text-lg font-semibold tracking-tight text-white transition-all group-hover:font-bold group-hover:text-navy">
                  {pillar.title}
                </h3>
                <p className="mt-3 font-sans text-[15px] font-normal leading-7 text-warm transition-all group-hover:font-medium group-hover:text-navy">
                  {pillar.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t-2 border-navy bg-warm">
        <div className="mx-auto grid max-w-6xl items-end gap-8 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-[1fr_0.95fr] lg:gap-16 lg:py-24">
          <div>
            <span aria-hidden className="block h-px w-10 bg-gold" />
            <h2 className="mt-5 max-w-md font-serif text-4xl leading-[1.15] text-navy sm:text-5xl">
              Ready for Expert
              <span className="mt-1 block italic text-primary-400">Consultation?</span>
            </h2>
          </div>

          <div>
            <p className="max-w-lg font-sans text-[15px] leading-7 text-ink/70">
              Schedule a confidential consultation. Our team will review your
              requirements and respond within one business day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex w-full items-center justify-center bg-navy px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all hover:bg-gold hover:font-bold hover:text-navy sm:w-auto"
              >
                Book Appointment
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center border border-ink/40 px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-ink transition-all hover:border-gold hover:bg-gold hover:font-bold hover:text-navy sm:w-auto"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
