import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { aboutPrinciples, aboutProcess, aboutStory, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.legalName}.`,
}

export default function AboutPage() {
  return (
    <div>
      <section className="relative isolate min-h-[320px] overflow-hidden bg-navy lg:min-h-[360px]">
        <Image
          src="/images/about.png"
          alt="Legal advisory workspace with statutes and Lady Justice"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-navy/70" />

        <div className="relative mx-auto grid min-h-[320px] max-w-6xl items-center gap-8 px-4 py-10 sm:px-6 lg:min-h-[360px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
          <div>
            <p className="flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              <span aria-hidden className="h-px w-8 bg-gold" />
              About GACS
            </p>
            <h1 className="mt-5 max-w-xl font-display text-[1.85rem] font-extrabold leading-[1.12] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Founded on
              <span className="mt-0 block font-script text-[2.6rem] font-normal leading-[1.05] text-gold sm:text-6xl lg:text-[5.25rem]">
                Trust.
              </span>
              Built on Results.
            </h1>
          </div>

          <div className="lg:border-l lg:border-white/25 lg:pl-12">
            <p className="max-w-md font-sans text-[15px] leading-7 text-warm sm:text-base">
              Gupta Associate Consultancy Service was established to give
              individuals and businesses access to integrated, expert advisory
              across law, taxation, finance and corporate matters — under one
              roof, with one unified relationship.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto grid max-w-[1400px] items-start gap-10 px-4 py-14 sm:px-6 md:gap-12 md:py-20 lg:grid-cols-[minmax(0,1fr)_13.5rem] lg:gap-x-24 lg:px-8 lg:py-28 xl:gap-x-32 xl:px-12">
          <div>
            <p className="font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-neutral-400">
              {aboutStory.kicker}
            </p>
            <h2 className="mt-4 max-w-2xl font-display text-[1.65rem] font-bold leading-[1.18] text-navy sm:text-3xl md:text-4xl lg:text-[2.65rem]">
              {aboutStory.heading}
            </h2>
            <div className="mt-8 grid gap-6 border-t border-neutral-200/90 pt-8 sm:grid-cols-2 sm:gap-10 lg:gap-16">
              {aboutStory.columns.map((copy) => (
                <p
                  key={copy.slice(0, 32)}
                  className="font-sans text-[15px] leading-7 text-neutral-500"
                >
                  {copy}
                </p>
              ))}
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-x-6 border-t border-neutral-200/90 pt-8 lg:block lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {aboutStory.stats.map((stat) => (
              <div
                key={stat.label}
                className="border-b border-neutral-200/90 py-5 last:border-b-0 lg:py-7 lg:first:pt-0 lg:last:pb-0"
              >
                <dd className="font-display text-4xl font-bold leading-none text-navy sm:text-[2.75rem]">
                  {stat.value}
                </dd>
                <dt className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-400">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-navy">
        <div className="mx-auto max-w-[1400px] px-4 py-12 sm:px-6 lg:px-8 lg:py-14 xl:px-12">
          <div className="grid gap-1.5 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPrinciples.map((item) => (
              <article
                key={item.title}
                className="bg-primary-700 px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8 lg:px-12 lg:py-9"
              >
                <h3 className="font-sans text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
                  {item.title}
                </h3>
                <p className="mt-4 font-sans text-[15px] font-normal leading-7 text-warm">
                  {item.copy}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-warm">
        <div className="mx-auto max-w-[1400px] px-4 py-14 sm:px-6 lg:px-8 lg:py-24 xl:px-12">
          <span aria-hidden className="block h-px w-10 bg-gold" />
          <h2 className="mt-5 font-display text-[1.75rem] font-bold leading-[1.15] text-navy sm:text-4xl lg:text-[2.65rem]">
            How We Work With You
          </h2>

          <ol className="mt-10 border-t border-neutral-200/90">
            {aboutProcess.map((step) => (
              <li
                key={step.number}
                className="grid grid-cols-[2rem_minmax(0,1fr)] items-start gap-x-4 gap-y-2 border-b border-neutral-200/90 py-6 lg:grid-cols-[2rem_9rem_1fr] lg:items-center lg:gap-x-8 lg:py-7"
              >
                <span className="font-sans text-[11px] font-medium tracking-wide text-gold">
                  {step.number}
                </span>
                <h3 className="font-display text-xl font-semibold text-navy sm:text-[22px]">
                  {step.title}
                </h3>
                <p className="col-span-2 font-sans text-[15px] font-normal leading-7 text-neutral-500 lg:col-span-1">
                  {step.copy}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-t border-warm/30 bg-navy">
        <div className="mx-auto flex max-w-[1400px] flex-col gap-6 px-4 py-8 sm:px-6 sm:py-10 lg:flex-row lg:items-center lg:justify-between lg:px-8 lg:py-12 xl:px-12">
          <h2 className="font-display text-[1.5rem] font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Meet the GACS Team
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/leadership"
              className="inline-flex w-full items-center justify-center bg-gold px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-navy transition-colors hover:bg-gold/85 sm:w-auto"
            >
              Leadership
            </Link>
            <Link
              href="/book"
              className="inline-flex w-full items-center justify-center border border-white px-6 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy sm:w-auto"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
