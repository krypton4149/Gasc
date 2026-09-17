"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Award,
  Briefcase,
  ChevronLeft,
  Home,
  Landmark,
  Mail,
  Menu,
  Users,
} from "lucide-react"
import { useEffect, useState } from "react"

import { SocialLinks } from "@/components/layout/social-links"
import { navItems, siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const drawerIcons = {
  "/": Home,
  "/about": Landmark,
  "/services": Briefcase,
  "/why": Award,
  "/leadership": Users,
  "/contact": Mail,
} as const

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3">
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.brandName} logo`}
        width={siteConfig.logoWidth}
        height={siteConfig.logoHeight}
        className="size-12 shrink-0 object-contain sm:size-[58px]"
        preload
        unoptimized
      />
      <span
        className={cn(
          "flex min-w-0 flex-col items-start justify-center text-left",
          inverted ? "text-navy" : "text-white",
        )}
      >
        <span
          className={cn(
            "whitespace-nowrap font-bold uppercase leading-none",
            inverted
              ? "text-[13px] tracking-[0.08em]"
              : "text-[14px] tracking-[0.08em] sm:text-[17px] sm:tracking-[0.1em]",
          )}
        >
          {siteConfig.brandName}
        </span>
        <span
          className={cn(
            "mt-1.5 flex items-center gap-1.5 font-medium uppercase leading-none",
            inverted
              ? "text-[8px] tracking-[0.16em]"
              : "text-[8.5px] tracking-[0.14em] sm:gap-2 sm:text-[9px] sm:tracking-[0.2em]",
          )}
        >
          <span aria-hidden className="h-px w-3.5 shrink-0 bg-gold sm:w-5" />
          <span className="whitespace-nowrap">{siteConfig.brandService}</span>
          <span aria-hidden className="h-px w-3.5 shrink-0 bg-gold sm:w-5" />
        </span>
        <span className="mt-1.5 flex flex-col gap-1">
          {siteConfig.brandRoleLines.map((line) => (
            <span
              key={line}
              className={cn(
                "whitespace-nowrap font-extrabold uppercase leading-none tracking-[0.08em] text-gold [text-shadow:0.35px_0_0_currentColor]",
                inverted
                  ? "text-[8px]"
                  : "text-[8px] sm:text-[9.5px] sm:tracking-[0.1em]",
              )}
            >
              {line}
            </span>
          ))}
        </span>
      </span>
    </Link>
  )
}

function NavLinks() {
  const pathname = usePathname()

  return (
    <nav className="hidden w-full items-center justify-center lg:flex">
      {navItems.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-3 py-2 font-medium uppercase tracking-[0.18em] transition-colors xl:px-4",
              "text-[11px]",
              active ? "text-gold" : "text-white/90 hover:text-gold",
            )}
          >
            {item.label}
            {active ? (
              <span className="absolute inset-x-3 bottom-1 h-px bg-gold" />
            ) : null}
          </Link>
        )
      })}
    </nav>
  )
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  return (
    <>
      <header className="sticky top-0 z-40 border-y border-gold/80 bg-navy">
        <div className="mx-auto grid min-h-[88px] max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-2.5 sm:gap-4 sm:px-6 lg:grid-cols-[auto_minmax(0,1fr)_auto] lg:px-8">
          <Logo />

          <NavLinks />

          <div className="flex items-center justify-end gap-2 sm:gap-3">
            <Link
              href="/book"
              className="hidden border border-gold px-5 py-2.5 text-[11px] font-medium uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-navy lg:inline-flex"
            >
              Book Appointment
            </Link>

            <button
              type="button"
              className="grid size-11 place-items-center text-white lg:hidden"
              aria-label="Open menu"
              aria-expanded={open}
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <button
          type="button"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-navy/55 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />

        <aside
          className={cn(
            "absolute inset-y-0 left-0 flex w-[min(22.5rem,88vw)] flex-col overflow-visible bg-white pb-[env(safe-area-inset-bottom)] shadow-2xl transition-transform duration-300 ease-out",
            "rounded-br-[2.75rem]",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center gap-3 px-4 pb-6 pt-[max(1rem,env(safe-area-inset-top))] sm:px-5">
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid size-11 shrink-0 place-items-center rounded-full bg-[#F1EEE8] text-navy"
            >
              <ChevronLeft className="size-5" />
            </button>
            <Logo inverted />
          </div>

          <nav className="min-h-0 flex-1 overflow-y-auto px-2 pb-8">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)
              const Icon = drawerIcons[item.href]

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center gap-4 border-b border-[#E8E4DC] px-4 py-4"
                >
                  <span
                    className={cn(
                      "grid size-11 shrink-0 place-items-center rounded-full",
                      active ? "bg-gold text-navy" : "bg-[#F1EEE8] text-navy",
                    )}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span
                    className={cn(
                      "font-sans text-[13px] font-bold uppercase tracking-[0.14em]",
                      active ? "text-gold" : "text-navy",
                    )}
                  >
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </nav>

          <div className="px-5 pb-8">
            <SocialLinks variant="light" className="mb-5" />
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center bg-navy px-5 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white"
            >
              Book Appointment
            </Link>
          </div>

          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute top-1/2 right-0 z-10 grid size-10 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-navy text-gold shadow-lg"
          >
            <ChevronLeft className="size-4" />
          </button>
        </aside>
      </div>
    </>
  )
}
