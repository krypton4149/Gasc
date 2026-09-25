import Image from "next/image"
import Link from "next/link"
import { Clock, Mail } from "lucide-react"

import { SocialLinks } from "@/components/layout/social-links"
import { practiceAreas, siteConfig } from "@/lib/site"

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/leadership", label: "Leadership" },
  { href: "/book", label: "Book Appointment" },
  { href: "/contact", label: "Contact" },
] as const

const practiceLinks = [
  { href: "/services#legal", label: "Legal Advisory" },
  { href: "/services#taxation", label: "Tax Consultancy" },
  { href: "/services#business", label: "Business Consultancy" },
  { href: "/services#finance", label: "Finance & Accounting" },
] as const

const phoneHref = `https://wa.me/${siteConfig.phone.replace(/\D/g, "")}`
const phoneSecondaryHref = `https://wa.me/${siteConfig.phoneSecondary.replace(/\D/g, "")}`

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-4 fill-current"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

function FooterHeading({ children }: { children: string }) {
  return (
    <p className="font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
      {children}
    </p>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="font-sans text-sm text-warm/85 transition-all hover:font-semibold hover:text-gold"
    >
      {label}
    </Link>
  )
}

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-auto bg-navy text-warm">
      <div
        aria-hidden
        className="h-px w-full bg-[linear-gradient(to_right,transparent_0%,#c79a32_50%,transparent_100%)]"
      />
      <div className="grid min-w-0 gap-10 py-12 pl-4 pr-4 sm:gap-12 sm:py-16 sm:pl-5 sm:pr-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 lg:pl-8 xl:pl-10">
        <div className="min-w-0 max-w-xs">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={siteConfig.logo}
              alt={`${siteConfig.brandName} logo`}
              width={siteConfig.logoWidth}
              height={siteConfig.logoHeight}
              className="size-11 shrink-0 object-contain"
              unoptimized
            />
            <span className="flex min-w-0 flex-col items-start justify-center text-left">
              <span className="font-sans text-[15px] font-bold uppercase leading-none tracking-[0.08em] text-white">
                {siteConfig.brandName}
              </span>
              <span className="mt-1.5 flex items-center gap-2 font-sans text-[8px] font-medium uppercase leading-none tracking-[0.18em] text-white">
                <span aria-hidden className="h-px w-4 bg-gold" />
                {siteConfig.brandService}
                <span aria-hidden className="h-px w-4 bg-gold" />
              </span>
              <span className="mt-1.5 flex w-full flex-col gap-1">
                {siteConfig.brandRoleLines.map((line) => (
                  <span
                    key={line}
                    className="font-sans text-[8px] font-extrabold uppercase leading-snug tracking-[0.06em] text-gold [text-shadow:0.35px_0_0_currentColor]"
                  >
                    {line}
                  </span>
                ))}
              </span>
            </span>
          </Link>
          <div className="mt-4 h-px w-full bg-gold" />
          <p className="mt-5 max-w-xs font-sans text-sm leading-6 text-warm/80">
            {siteConfig.footerBlurb}
          </p>
          <p className="mt-4 max-w-xs font-serif text-sm italic text-gold">
            Your Concern. Our Expertise. Your Confidence.
          </p>
          <SocialLinks className="mt-5" />
        </div>

        <div>
          <FooterHeading>Quick Links</FooterHeading>
          <ul className="mt-5 space-y-3">
            {quickLinks.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Practice Areas</FooterHeading>
          <ul className="mt-5 space-y-3">
            {practiceLinks.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href} label={item.label} />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <FooterHeading>Contact</FooterHeading>
          <ul className="mt-5 space-y-4">
            <li>
              <a
                href={phoneHref}
                className="inline-flex items-center gap-3 font-sans text-sm text-warm/85 transition-all hover:font-semibold hover:text-gold"
              >
                <span className="text-gold">
                  <WhatsAppIcon />
                </span>
                {siteConfig.phone}
              </a>
            </li>
            <li>
              <a
                href={phoneSecondaryHref}
                className="inline-flex items-center gap-3 font-sans text-sm text-warm/85 transition-all hover:font-semibold hover:text-gold"
              >
                <span className="text-gold">
                  <WhatsAppIcon />
                </span>
                {siteConfig.phoneSecondary}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex max-w-full items-center gap-3 break-all font-sans text-sm text-warm/85 transition-all hover:font-semibold hover:text-gold"
              >
                <Mail className="size-4 text-gold" />
                {siteConfig.email}
              </a>
            </li>
            <li>
              <p className="inline-flex items-start gap-3 font-sans text-sm text-warm/85">
                <Clock className="mt-0.5 size-4 shrink-0 text-gold" />
                <span>
                  {siteConfig.hours}
                  <span className="mt-1 block">{siteConfig.hoursSunday}</span>
                </span>
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="flex flex-col gap-3 py-5 pl-4 pr-4 sm:flex-row sm:items-center sm:justify-between sm:pl-5 sm:pr-6 lg:pl-8 xl:pl-10">
          <p className="font-sans text-xs leading-5 text-warm/70">
            © {year} {siteConfig.registeredName}. All Rights Reserved.
            <span className="mt-1 block break-all">CIN: {siteConfig.cin}</span>
          </p>
          <div className="flex flex-col gap-2 sm:items-end sm:text-right">
            <p className="font-sans text-xs leading-5 text-warm/70">
              {practiceAreas.map((area, index) => (
                <span key={area.slug}>
                  {index > 0 ? " · " : null}
                  <Link
                    href={`/services#${area.slug}`}
                    className="transition-colors hover:text-gold"
                  >
                    {area.slug === "legal"
                      ? "Legal Advisory"
                      : area.slug === "taxation"
                        ? "Tax"
                        : area.slug === "finance"
                          ? "Finance"
                          : "Business"}
                  </Link>
                </span>
              ))}
            </p>
            <p className="font-sans text-xs leading-5 text-warm/60">
              Website developed by{" "}
              <a
                href="https://shikohabadcreativeco.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-gold/90 transition-colors hover:text-gold"
              >
                Shikohabad Creative Co.
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
