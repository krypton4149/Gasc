import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { siteConfig, testimonials, whyAdvantages, whyStats } from "@/lib/site"

export const metadata: Metadata = {
  title: "Why GACS",
  description: `Why clients choose ${siteConfig.legalName}.`,
}

export default function WhyPage() {
  return (
    <div>
      <section className="relative isolate min-h-[280px] overflow-hidden border-y border-gold bg-navy sm:min-h-[320px] lg:min-h-[360px]">
        <Image
          src="/images/gasc.png"
          alt="Strategy, compliance, growth and trust — the GACS advantage"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-navy/55" />

        <div className="relative mx-auto grid min-h-[280px] max-w-6xl items-center gap-6 px-4 py-8 sm:min-h-[320px] sm:gap-8 sm:px-6 sm:py-10 lg:min-h-[360px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
          <div>
            <span aria-hidden className="block h-px w-10 bg-gold" />
            <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Why GACS
            </p>
            <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              The GACS
              <span className="mt-1 block italic text-gold">Advantage</span>
            </h1>
          </div>

          <p className="max-w-md pb-1 font-sans text-[15px] font-normal leading-7 text-white sm:text-base lg:justify-self-start">
            Clear advice, dependable delivery, and a team that treats every
            engagement with care. One firm. All answers. That is the{" "}
            {siteConfig.name} standard.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F5F1]">
        <div className="mx-auto max-w-[1400px] px-5 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-12">
          <ol className="border-t border-[#E8E4DC]">
            {whyAdvantages.map((item) => (
              <li
                key={item.number}
                className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3 border-b border-[#E8E4DC] py-6 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-x-5 sm:py-7 lg:grid-cols-[2.5rem_minmax(14rem,20rem)_minmax(0,1fr)] lg:items-center lg:gap-x-10 lg:py-8"
              >
                <span className="pt-0.5 font-sans text-[11px] font-normal tracking-wide text-gold sm:text-[12px]">
                  {item.number}
                </span>
                <div className="min-w-0 lg:contents">
                  <h3 className="font-display text-[1.15rem] font-bold leading-snug text-navy sm:text-[1.35rem] lg:text-[1.5rem]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 font-sans text-[13px] font-normal leading-6 text-[#8E8E8E] sm:mt-2 sm:text-[15px] sm:leading-7 lg:mt-0">
                    {item.copy}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto grid max-w-[1400px] grid-cols-2 lg:grid-cols-4">
          {whyStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-4 py-10 text-center sm:py-12 lg:py-14 ${
                index % 2 === 0 ? "border-r border-white/15" : ""
              } ${index < 2 ? "border-b border-white/15 lg:border-b-0" : ""} lg:border-r lg:last:border-r-0`}
            >
              <p className="font-display text-4xl font-bold leading-none text-gold sm:text-5xl lg:text-[3.25rem]">
                {stat.value}
              </p>
              <p className="mt-3 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-white/55 sm:text-[11px]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy">
        <div className="mx-auto max-w-[1680px] px-4 py-14 sm:px-5 sm:py-16 lg:px-6 lg:py-20 xl:px-8">
          <span aria-hidden className="block h-px w-10 bg-gold" />
          <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
            Client Voices
          </p>
          <h2 className="mt-4 font-display text-[1.75rem] font-bold text-white sm:text-4xl lg:text-[2.65rem]">
            What Our Clients Say
          </h2>

          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-3 xl:grid-cols-5 xl:gap-0">
            {testimonials.map((item, index) => (
              <article
                key={item.name}
                className={`flex flex-col bg-primary-700 p-6 sm:p-7 lg:p-8 ${
                  index < testimonials.length - 1
                    ? "xl:border-r xl:border-white/10"
                    : ""
                }`}
              >
                <span
                  aria-hidden
                  className="font-display text-4xl leading-none text-gold"
                >
                  “
                </span>
                <p className="mt-4 flex-1 font-serif text-[15px] italic leading-7 text-white">
                  {item.quote}
                </p>
                <div className="mt-8 border-t border-white/15 pt-5">
                  <p className="font-sans text-sm font-semibold text-white">
                    {item.name}
                  </p>
                  <p className="mt-1 font-mono text-[11px] tracking-wide text-gold">
                    {item.role}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#F9F5F1]">
        <div className="mx-auto flex max-w-3xl flex-col items-center px-5 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
          <span aria-hidden className="block h-px w-10 bg-gold" />
          <h2 className="mt-6 font-display text-[1.85rem] font-bold leading-tight text-navy sm:text-4xl lg:text-[2.75rem]">
            Experience the Difference
          </h2>
          <p className="mt-4 max-w-lg font-sans text-[15px] font-normal leading-7 text-[#8E8E8E] sm:text-base">
            Schedule a confidential consultation and discover what integrated
            advisory feels like.
          </p>
          <Link
            href="/book"
            className="mt-8 inline-flex w-full items-center justify-center bg-navy px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-gold hover:font-bold hover:text-navy sm:w-auto"
          >
            Book an Appointment
          </Link>
        </div>
      </section>
    </div>
  )
}
