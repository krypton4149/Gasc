import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Page not found",
}

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-royal">404</p>
      <h1 className="mt-3 text-4xl">This page is not on the map</h1>
      <p className="mt-3 text-muted-foreground">
        The link may be out of date. Head home or book a visit instead.
      </p>
      <div className="mt-8 flex gap-3">
        <Button asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/book">Book a visit</Link>
        </Button>
      </div>
    </div>
  )
}
