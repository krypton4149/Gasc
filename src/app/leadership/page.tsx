import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { leadershipTeam, siteConfig } from "@/lib/site"

export const metadata: Metadata = {
  title: "Leadership",
  description: `The professionals behind ${siteConfig.legalName}.`,
}

export default function LeadershipPage() {
  return (
    <div>
      <section className="relative isolate min-h-[280px] overflow-hidden border-y border-gold bg-navy sm:min-h-[320px] lg:min-h-[360px]">
        <Image
          src="/images/leader.png"
          alt="Leadership, strategy, people and excellence — the professionals behind GACS"
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
              Our Team
            </p>
            <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              The Professionals
              <span className="mt-1 block italic text-gold">Behind GACS</span>
            </h1>
          </div>

          <p className="max-w-md pb-1 font-sans text-[15px] font-normal leading-7 text-white sm:text-base lg:justify-self-start">
            Decades of combined expertise across law, taxation and corporate
            practice — each professional bringing depth, each working in
            concert.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F5F1]">
        <div className="mx-auto max-w-[1400px] px-5 py-10 sm:px-6 sm:py-14 lg:px-8 lg:py-16 xl:px-12">
          <div className="border-t border-[#E8E4DC]">
            {leadershipTeam.map((member) => (
              <article
                key={member.initials}
                className="grid gap-8 border-b border-[#E8E4DC] py-10 sm:py-12 md:grid-cols-[minmax(14rem,20rem)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(16rem,22rem)_minmax(0,1fr)] lg:gap-0 lg:py-14"
              >
                <div className="lg:pr-12">
                  <div className="flex h-12 w-12 items-center justify-center bg-navy">
                    <span className="font-display text-lg italic leading-none text-gold">
                      {member.initials}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-[1.65rem] font-bold leading-tight text-navy sm:text-[1.85rem]">
                    {member.name}
                  </h2>
                  <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.14em] text-gold sm:text-[11px] sm:tracking-[0.18em]">
                    {member.role}
                  </p>
                  <p className="mt-3 font-serif text-[14px] leading-6 text-[#8E8E8E]">
                    {member.focus}
                  </p>

                  <div className="mt-6 border-t border-[#E8E4DC] pt-5">
                    <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                      Qualifications
                    </p>
                    <ul className="mt-3 space-y-1.5">
                      {member.qualifications.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 font-sans text-[13px] leading-6 text-[#8E8E8E]"
                        >
                          <span
                            aria-hidden
                            className="mt-[0.55em] h-1 w-1 shrink-0 rounded-full bg-gold"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex md:border-l md:border-[#E8E4DC] md:items-center md:pl-8 lg:pl-12 xl:pl-16">
                  <p className="w-full font-serif text-[16px] italic leading-[1.9] text-navy sm:text-[18px] sm:leading-[2.15] lg:text-[19px] lg:leading-[2.25]">
                    {member.bio}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-gold bg-navy">
        <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:px-8 lg:py-24 xl:px-12">
          <div>
            <span aria-hidden className="block h-px w-10 bg-gold" />
            <h2 className="mt-5 font-display text-[1.85rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Dedicated to Your
              <span className="mt-1 block italic text-gold">Success</span>
            </h2>
          </div>

          <div>
            <p className="max-w-xl font-sans text-[15px] font-normal leading-8 text-white/80 sm:text-base sm:leading-8">
              Every member of the GACS team brings deep domain expertise, a
              client-first mindset and an unwavering commitment to professional
              excellence. We combine our respective strengths to serve you
              comprehensively, without gaps.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex w-full items-center justify-center bg-gold px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.16em] text-navy transition-colors hover:bg-gold/85 sm:w-auto"
            >
              Speak With Our Team
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
