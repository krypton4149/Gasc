import Image from "next/image"
import Link from "next/link"

import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

type BrandLogoProps = {
  compact?: boolean
  className?: string
  /** Skip Next.js preload — use outside the sticky header. */
  preload?: boolean
}

export function BrandLogo({
  compact = false,
  className,
  preload = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex min-w-0 shrink-0 items-center gap-2.5 overflow-visible sm:gap-3.5",
        compact && "flex-1",
        className,
      )}
    >
      <Image
        src="/images/logo1.png"
        alt=""
        width={1313}
        height={1198}
        className={cn(
          "shrink-0 object-contain",
          compact
            ? "size-12 sm:size-14"
            : "size-14 sm:size-16 lg:size-[4.75rem]",
        )}
        preload={preload}
        unoptimized
      />
      <span
        className={cn(
          "flex min-w-0 flex-col",
          compact ? "pr-1" : "max-w-[12rem] sm:max-w-none",
        )}
      >
        <span
          className={cn(
            "font-sans font-bold uppercase leading-none tracking-[0.04em] text-white",
            compact
              ? "text-[13px] sm:text-[15px]"
              : "text-[13px] sm:text-[15px] lg:text-[17px]",
          )}
        >
          Gupta Associate
        </span>
        <span className="mt-1.5 flex items-center gap-1.5 sm:gap-2">
          <span aria-hidden className="h-px w-3 shrink-0 bg-gold sm:w-4" />
          <span
            className={cn(
              "font-sans font-medium uppercase leading-none tracking-[0.14em] text-white",
              compact
                ? "text-[7px] sm:text-[8px]"
                : "text-[7px] sm:text-[8px] lg:text-[9px]",
            )}
          >
            Consultancy Service
          </span>
          <span aria-hidden className="h-px w-3 shrink-0 bg-gold sm:w-4" />
        </span>
        <span
          className={cn(
            "mt-1.5 font-sans font-semibold uppercase leading-[1.35] tracking-[0.06em] text-gold",
            compact
              ? "text-[6.5px] sm:text-[7.5px]"
              : "text-[6px] sm:mt-2 sm:text-[7.5px] lg:text-[8px]",
          )}
        >
          Tax Consultant || Legal Advisor
        </span>
        <span
          className={cn(
            "font-sans font-semibold uppercase leading-[1.35] tracking-[0.06em] text-gold",
            compact
              ? "text-[6.5px] sm:text-[7.5px]"
              : "text-[6px] sm:text-[7.5px] lg:text-[8px]",
          )}
        >
          Corporate Consultant || Finance Professional
        </span>
      </span>
      <span className="sr-only">{siteConfig.legalName}</span>
    </Link>
  )
}
