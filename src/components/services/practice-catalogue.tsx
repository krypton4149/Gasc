"use client"

import { useEffect, useState } from "react"

import { practiceCatalogue } from "@/lib/site"

type PracticeSlug = (typeof practiceCatalogue)[number]["slug"]

function isPracticeSlug(value: string): value is PracticeSlug {
  return practiceCatalogue.some((area) => area.slug === value)
}

function HeadingTitle({ title }: { title: string }) {
  const [left, right] = title.split(" & ")

  if (!right) return title

  return (
    <>
      {left}{" "}
      <span className="inline-block px-0.5 font-display text-[1.05em] font-bold italic leading-none">
        &
      </span>{" "}
      {right}
    </>
  )
}

export function PracticeCatalogue() {
  const [active, setActive] = useState<PracticeSlug>("legal")
  const area =
    practiceCatalogue.find((item) => item.slug === active) ?? practiceCatalogue[0]

  useEffect(() => {
    const applyHash = () => {
      const slug = window.location.hash.replace("#", "")
      if (isPracticeSlug(slug)) setActive(slug)
    }

    applyHash()
    window.addEventListener("hashchange", applyHash)
    return () => window.removeEventListener("hashchange", applyHash)
  }, [])

  return (
    <section className="border-t border-navy bg-[#F9F5F1]">
      {practiceCatalogue.map((item) => (
        <span key={item.slug} id={item.slug} className="sr-only" />
      ))}

      <div className="mx-auto max-w-[1400px] px-5 py-10 pb-16 sm:px-6 sm:py-16 lg:px-8 lg:py-20 xl:px-12">
        <nav
          aria-label="Practice areas"
          className="-mx-5 flex gap-0 overflow-x-auto border-b border-[#E8E4DC] px-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mx-0 sm:flex-wrap sm:gap-x-10 sm:overflow-visible sm:px-0 lg:gap-x-12"
        >
          {practiceCatalogue.map((item) => {
            const isActive = item.slug === active

            return (
              <a
                key={item.slug}
                href={`#${item.slug}`}
                onClick={() => setActive(item.slug)}
                className={`shrink-0 pb-3 pr-6 font-sans text-[12px] font-medium tracking-wide whitespace-nowrap transition-colors last:pr-0 sm:pr-0 sm:text-[13px] ${
                  isActive
                    ? "-mb-px border-b-2 border-navy text-navy"
                    : "-mb-px border-b-2 border-transparent text-[#949CA5] hover:text-navy"
                }`}
              >
                <span className={isActive ? "font-normal text-gold" : "font-normal text-[#C8C3BB]"}>
                  {item.number}
                </span>
                <span className="ml-1.5 sm:ml-2.5">{item.tab}</span>
              </a>
            )
          })}
        </nav>

        <div className="mt-8 flex flex-col gap-3 sm:mt-12 sm:gap-4 lg:flex-row lg:items-start lg:justify-between lg:gap-16">
          <h2 className="max-w-full font-display text-[1.35rem] font-bold leading-[1.25] text-navy sm:text-[1.85rem] lg:text-[2.5rem] xl:whitespace-nowrap">
            <HeadingTitle title={area.title} />
          </h2>
          <p className="max-w-md font-sans text-[13px] font-normal leading-6 text-[#8E8E8E] sm:text-[15px] sm:leading-7 lg:pt-2 lg:text-right">
            {area.copy}
          </p>
        </div>

        <ol className="mt-8 border-t border-[#E8E4DC] sm:mt-12">
          {area.offerings.map((item) => (
            <li
              key={item.number}
              className="grid grid-cols-[1.5rem_minmax(0,1fr)] items-start gap-x-3 border-b border-[#E8E4DC] py-5 sm:grid-cols-[2rem_minmax(0,1fr)] sm:gap-x-5 sm:py-7 lg:grid-cols-[2.5rem_minmax(14rem,22rem)_minmax(0,1fr)] lg:items-center lg:gap-x-10 lg:py-8"
            >
              <span className="pt-0.5 font-sans text-[11px] font-normal tracking-wide text-gold sm:text-[12px]">
                {item.number}
              </span>
              <div className="min-w-0 lg:contents">
                <h3 className="font-display text-[1.05rem] font-bold leading-snug text-navy sm:text-[1.25rem] lg:text-[1.35rem]">
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
  )
}
