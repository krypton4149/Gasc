import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

import { leadershipTeam, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

export const metadata: Metadata = {
  title: "Leadership",
  description: `The professionals behind ${siteConfig.legalName}.`,
}

function MemberPortrait({
  member,
}: {
  member: (typeof leadershipTeam)[number]
}) {
  return (
    <div className="relative size-28 overflow-hidden rounded-full ring-1 ring-gold/80 sm:size-36 lg:size-52">
      <Image
        src={member.photo}
        alt={member.name}
        fill
        unoptimized
        sizes="208px"
        className={cn(
          "object-cover",
          "photoClass" in member && member.photoClass
            ? member.photoClass
            : "scale-[1.06] object-[center_22%]",
        )}
      />
    </div>
  )
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
            <p className="flex items-center gap-3 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-gold">
              <span aria-hidden className="h-px w-8 bg-gold" />
              Our Team
            </p>
            <h1 className="mt-4 font-display text-[1.75rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              The Professionals
              <span className="mt-1 block italic text-gold">Behind GACS</span>
            </h1>
          </div>

          <p className="max-w-md pb-1 font-sans text-[15px] font-normal leading-7 text-white sm:text-base lg:justify-self-start">
            Decades of combined expertise across law, taxation and corporate
            practice — a total of 20+ team employees, including CAs & CSs, each
            professional bringing depth, each working in concert.
          </p>
        </div>
      </section>

      <section className="bg-[#F9F5F1]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
          <span aria-hidden className="block h-px w-10 bg-gold" />
          <p className="mt-5 font-sans text-[11px] font-medium uppercase tracking-[0.22em] text-[#B0AAA0]">
            Meet the Team
          </p>
          <h2 className="mt-3 max-w-xl font-display text-[1.65rem] font-bold leading-[1.18] text-navy sm:text-4xl lg:text-[2.65rem]">
            Leadership with
            <span className="mt-1 block italic text-gold">Proven Practice</span>
          </h2>
          <p className="mt-5 max-w-2xl font-sans text-[15px] leading-7 text-[#8E8E8E]">
            Founders, counsel and a Company Secretary who combine legal,
            secretarial and specialised fields — taxation, investment,
            intellectual property, litigation and corporate compliance — under
            one roof.
          </p>

          <div className="mt-10 space-y-6 lg:mt-14 lg:space-y-8">
            {leadershipTeam.map((member, index) => {
              const reverse = index % 2 === 1
              const number = String(index + 1).padStart(2, "0")

              return (
                <article
                  key={member.name}
                  className="bg-white px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
                >
                  <div
                    className={cn(
                      "flex flex-col gap-5 sm:flex-row sm:items-start sm:gap-8 lg:items-center lg:gap-14",
                      reverse && "lg:flex-row-reverse",
                    )}
                  >
                    <div className="flex items-center gap-4 sm:w-36 sm:shrink-0 sm:flex-col sm:items-start sm:gap-3 lg:w-52">
                      <span className="font-sans text-[11px] font-medium tracking-[0.2em] text-gold">
                        {number}
                      </span>
                      <MemberPortrait member={member} />
                    </div>

                    <div className="min-w-0 flex-1 lg:pt-0">
                      <h3 className="font-display text-[1.45rem] font-bold leading-tight text-navy sm:text-[1.95rem] lg:text-[2.15rem]">
                        {member.name}
                      </h3>
                      <p className="mt-2 font-sans text-[10px] font-medium uppercase tracking-[0.16em] text-gold sm:text-[11px] sm:tracking-[0.2em]">
                        {member.role}
                      </p>
                      <p className="mt-3 font-serif text-[13px] leading-6 text-[#8E8E8E] sm:text-[15px]">
                        {member.focus}
                      </p>

                      <p className="mt-5 font-sans text-[15px] font-normal leading-7 text-navy/80 sm:mt-6 sm:text-base sm:leading-8">
                        {member.bio}
                      </p>

                      <div className="mt-8 grid gap-8 border-t border-[#E8E4DC] pt-6 sm:grid-cols-2 sm:gap-10">
                        <div>
                          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                            Qualifications
                          </p>
                          <ul className="mt-3 space-y-2">
                            {member.qualifications.map((item) => (
                              <li
                                key={item}
                                className="flex gap-2.5 font-sans text-[13px] leading-6 text-navy/75"
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

                        {"specialFields" in member && member.specialFields ? (
                          <div>
                            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
                              Special Field
                            </p>
                            <ul className="mt-3 flex flex-wrap gap-2">
                              {member.specialFields.map((item) => (
                                <li
                                  key={item}
                                  className="border border-[#E8E4DC] px-3 py-1.5 font-sans text-[12px] leading-5 text-navy/80"
                                >
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-gold bg-navy">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 py-14 sm:px-6 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:gap-16 lg:py-20">
          <div>
            <span aria-hidden className="block h-px w-10 bg-gold" />
            <h2 className="mt-5 font-display text-[1.85rem] font-bold leading-[1.15] text-white sm:text-4xl lg:text-[2.75rem]">
              Dedicated to Your
              <span className="mt-1 block italic text-gold">Success</span>
            </h2>
            <p className="mt-5 max-w-xl font-sans text-[15px] font-normal leading-7 text-white/75 sm:leading-8">
              Every member of the GACS team — 20+ team employees, including
              CAs & CSs — brings deep domain expertise, a client-first mindset
              and an unwavering commitment to professional excellence.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-gold px-6 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.16em] text-navy transition-colors hover:bg-gold/85"
            >
              Speak With Our Team
            </Link>
            <Link
              href="/book"
              className="inline-flex items-center justify-center border border-white/40 px-6 py-3.5 font-sans text-[11px] font-medium uppercase tracking-[0.16em] text-white transition-colors hover:border-gold hover:bg-gold hover:text-navy"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
