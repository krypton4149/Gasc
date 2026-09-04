import * as React from "react"

import { cn } from "@/lib/utils"

function Badge({
  className,
  variant = "default",
  ...props
}: React.ComponentProps<"span"> & {
  variant?: "default" | "secondary" | "gold" | "royal" | "outline"
}) {
  return (
    <span
      data-slot="badge"
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium font-sans",
        variant === "default" && "bg-primary text-primary-foreground",
        variant === "secondary" && "bg-secondary text-secondary-foreground",
        variant === "gold" && "bg-gold-100 text-gold-800",
        variant === "royal" && "bg-royal-50 text-royal-800",
        variant === "outline" && "border border-border text-foreground",
        className,
      )}
      {...props}
    />
  )
}

export { Badge }
