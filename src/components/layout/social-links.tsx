import { siteConfig } from "@/lib/site"
import { cn } from "@/lib/utils"

const socialIcons = {
  Instagram: InstagramIcon,
  Facebook: FacebookIcon,
  LinkedIn: LinkedInIcon,
} as const

type SocialLinksProps = {
  className?: string
  variant?: "navy" | "light"
}

export function SocialLinks({ className, variant = "navy" }: SocialLinksProps) {
  return (
    <ul className={cn("flex items-center gap-2.5", className)}>
      {siteConfig.socials.map((social) => {
        const Icon = socialIcons[social.name]

        return (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className={cn(
                "grid size-9 place-items-center border transition-colors",
                variant === "navy"
                  ? "border-gold/50 text-gold hover:bg-gold hover:text-navy"
                  : "border-navy/15 text-navy hover:border-gold hover:bg-gold hover:text-navy",
              )}
            >
              <Icon />
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function InstagramIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-4 fill-none stroke-current"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-4 fill-current"
    >
      <path d="M14 9h3.5V5.5H14c-2.5 0-4.5 2-4.5 4.5V13H6.5v3.5H9.5V22h3.5v-5.5h3L17 13h-4V10c0-.55.45-1 1-1Z" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden
      className="size-4 fill-current"
    >
      <path d="M6.5 9H3v12h3.5V9ZM4.75 3C3.78 3 3 3.78 3 4.75S3.78 6.5 4.75 6.5 6.5 5.72 6.5 4.75 5.72 3 4.75 3ZM21 13.5c0-2.76-1.79-4.5-4.18-4.5-1.69 0-2.74.86-3.22 1.68h-.08V9H10.2v12h3.5v-6.3c0-1.66.31-3.27 2.37-3.27 2.03 0 2.06 1.9 2.06 3.38V21H21v-7.5Z" />
    </svg>
  )
}
