import type { Metadata } from "next"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata: Metadata = {
  title: "Appointment requested",
}

type SuccessPageProps = {
  searchParams: Promise<{ name?: string; date?: string; time?: string }>
}

export default async function BookingSuccessPage({ searchParams }: SuccessPageProps) {
  const { name, date, time } = await searchParams

  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-20 text-center sm:px-6">
      <Card className="w-full bg-white">
        <CardHeader>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Confirmed request
          </p>
          <CardTitle className="text-3xl">
            {name ? `Thank you, ${name}.` : "Your visit is requested."}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-5">
          <p className="text-muted-foreground leading-7">
            {date && time
              ? `We have your ${time} window on ${date}. A coordinator will confirm by SMS shortly.`
              : "A coordinator will confirm your window by SMS shortly."}
          </p>
          <div className="flex justify-center gap-3">
            <Button asChild>
              <Link href="/">Back home</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">Need to change it?</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
