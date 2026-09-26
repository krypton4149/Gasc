import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { ContactForm } from "@/components/contact/contact-form"
import { SocialLinks } from "@/components/layout/social-links"
import { siteConfig } from "@/lib/site"

const whatsappHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.legalName}. WhatsApp, email, or the form — we respond within one business day.`,
}

export default function ContactPage() {
  return (
    <div>
      <section className="relative isolate min-h-[280px] overflow-hidden border-y border-gold bg-navy sm:min-h-[320px] lg:min-h-[360px]">
        <Image
          src="/images/contact.png"
          alt="Get in touch with GACS — confidential consultation"
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
              Contact
            </p>
            <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Get in Touch
              <span className="mt-1 block italic text-gold">with GACS</span>
            </h1>
          </div>

          <p className="max-w-md pb-1 font-sans text-[15px] font-normal leading-7 text-white sm:text-base lg:justify-self-start">
            Reach us by WhatsApp, email or by using the form below. We respond
            to all enquiries within one business day.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F5F1]">
        <div className="mx-auto grid min-w-0 max-w-[1400px] gap-10 px-4 py-10 sm:px-6 sm:py-16 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-0 lg:px-8 lg:py-20 xl:px-12">
          <div className="min-w-0 lg:border-r lg:border-[#E8E4DC] lg:pr-12">
            <div className="border-t border-[#E8E4DC] py-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                Direct Contact
              </p>
              <p className="mt-5 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                WhatsApp
              </p>
              <a
                href={whatsappHref}
                className="mt-1.5 block font-sans text-[15px] font-semibold text-navy transition-colors hover:text-gold"
              >
                {siteConfig.phone}
              </a>
              <p className="mt-5 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                Email
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1.5 block break-all font-sans text-[15px] font-semibold text-navy transition-colors hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </div>

            <div className="border-t border-[#E8E4DC] py-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                Address
              </p>
              <p className="mt-4 max-w-xs font-sans text-[15px] font-semibold leading-7 text-navy">
                {siteConfig.address}
              </p>
            </div>

            <div className="border-t border-[#E8E4DC] py-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                Company
              </p>
              <p className="mt-4 max-w-xs font-sans text-[15px] font-semibold leading-7 text-navy">
                {siteConfig.registeredName}
              </p>
              <p className="mt-5 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                CIN
              </p>
              <p className="mt-1.5 break-all font-sans text-[15px] font-semibold tracking-wide text-navy">
                {siteConfig.cin}
              </p>
              <p className="mt-5 font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                Established
              </p>
              <p className="mt-1.5 font-sans text-[15px] font-semibold text-navy">
                {siteConfig.establishedOn}
              </p>
            </div>

            <div className="border-t border-[#E8E4DC] py-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                Office Hours
              </p>
              <p className="mt-4 font-sans text-[14px] text-[#8E8E8E]">
                {siteConfig.hoursDays}
              </p>
              <p className="mt-1 font-sans text-[15px] font-semibold text-navy">
                {siteConfig.hoursTime}
              </p>
              <p className="mt-2 font-sans text-[14px] text-[#8E8E8E]">
                {siteConfig.hoursSunday}
              </p>
            </div>

            <div className="border-t border-[#E8E4DC] py-8">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                Follow Us
              </p>
              <SocialLinks variant="light" className="mt-5" />
            </div>

            <div className="bg-navy p-6 sm:p-7">
              <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                Book a Meeting
              </p>
              <p className="mt-3 font-sans text-[14px] leading-6 text-white/75">
                For a structured, confidential consultation, use our appointment
                system.
              </p>
              <Link
                href="/book"
                className="mt-5 inline-flex w-full items-center justify-center bg-gold px-5 py-3 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-navy transition-colors hover:bg-gold/85"
              >
                Book Appointment
              </Link>
            </div>
          </div>

          <div className="min-w-0 lg:pl-12 xl:pl-16">
            <div className="border-t border-[#E8E4DC] pt-8">
              <h2 className="font-display text-[1.85rem] font-bold text-navy sm:text-[2.15rem]">
                Send a Message
              </h2>
              <p className="mt-2 font-sans text-[15px] text-[#8E8E8E]">
                We will respond within one business day.
              </p>
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
