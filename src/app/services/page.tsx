import type { Metadata } from "next"
import Image from "next/image"

import { PracticeCatalogue } from "@/components/services/practice-catalogue"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Services",
  description: `Practice areas at ${siteConfig.legalName} — law, taxation, business and finance.`,
}

export default function ServicesPage() {
  return (
    <div>
      <section className="relative isolate min-h-[280px] overflow-hidden border-y border-gold bg-navy sm:min-h-[320px] lg:min-h-[360px]">
        <Image
          src="/images/service.png"
          alt="Legal, taxation, business and finance volumes on a consultancy desk"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-navy/65" />

        <div className="relative mx-auto grid min-h-[280px] max-w-6xl items-center gap-6 px-4 py-8 sm:min-h-[320px] sm:gap-8 sm:px-6 sm:py-10 lg:min-h-[360px] lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-12">
          <div>
            <span aria-hidden className="block h-px w-10 bg-gold" />
            <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Practice Areas
            </p>
            <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Four Integrated
              <span className="mt-1 block italic text-gold">Practice Areas</span>
            </h1>
          </div>

          <p className="max-w-md pb-1 font-sans text-[15px] font-normal leading-7 text-white sm:text-base lg:justify-self-start">
            Expert advisory across law, taxation, business and finance — each
            practice deep, each connected to the others, all available through a
            single firm.
          </p>
        </div>
      </section>

      <PracticeCatalogue />
    </div>
  )
}
