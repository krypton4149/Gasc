import type { Metadata } from "next"
import Image from "next/image"
import { Suspense } from "react"

import { AppointmentForm } from "@/components/booking/appointment-form"
import { siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Book an Appointment",
  description: `Book a confidential consultation with ${siteConfig.legalName}. ${siteConfig.hours}.`,
}

export default function BookPage() {
  return (
    <div>
      <section className="relative isolate min-h-[280px] overflow-hidden border-y border-gold bg-navy sm:min-h-[320px] lg:min-h-[360px]">
        <Image
          src="/images/book.png"
          alt="Book a confidential professional consultation with GACS"
          fill
          preload
          unoptimized
          sizes="100vw"
          className="object-cover object-[80%_center]"
        />
        <div className="absolute inset-0 bg-navy/55" />

        <div className="relative mx-auto flex min-h-[280px] max-w-6xl flex-col justify-between px-4 py-8 sm:min-h-[320px] sm:px-6 sm:py-10 lg:min-h-[360px] lg:py-12">
          <div>
            <span aria-hidden className="block h-px w-10 bg-gold" />
            <p className="mt-4 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              Professional Consultation
            </p>
            <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Book an Appointment
            </h1>
            <p className="mt-5 max-w-lg font-sans text-[15px] font-normal leading-7 text-white/85 sm:text-base">
              Tell us how we can assist you. Choose your service, preferred
              appointment type and convenient time.
            </p>
          </div>

          <p className="mt-8 flex flex-wrap gap-x-3 gap-y-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-white/50 sm:text-[11px] sm:tracking-[0.22em]">
            Confidential
            <span className="mx-3 text-white/25">—</span>
            Professional
            <span className="mx-3 text-white/25">—</span>
            Client-Focused
          </p>
        </div>
      </section>

      <section className="bg-[#F9F5F1]">
        <div className="mx-auto max-w-[1400px] px-4 py-8 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
          <Suspense
            fallback={
              <p className="font-sans text-sm text-[#8E8E8E]">Loading form…</p>
            }
          >
            <AppointmentForm />
          </Suspense>
        </div>
      </section>
    </div>
  )
}
