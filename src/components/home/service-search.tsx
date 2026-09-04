"use client"

import { Search } from "lucide-react"
import { useRouter } from "next/navigation"
import { FormEvent, useMemo, useState } from "react"

import { Input } from "@/components/ui/input"
import { services } from "@/lib/site"

export function ServiceSearch() {
  const router = useRouter()
  const [query, setQuery] = useState("")

  const matches = useMemo(() => {
    const value = query.trim().toLowerCase()
    if (!value) return services.slice(0, 3)
    return services.filter(
      (service) =>
        service.title.toLowerCase().includes(value) ||
        service.description.toLowerCase().includes(value),
    )
  }, [query])

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const first = matches[0]
    if (first) {
      router.push(`/book?service=${first.slug}`)
    }
  }

  return (
    <div className="space-y-4">
      <form onSubmit={onSubmit} className="relative">
        <Search className="pointer-events-none absolute top-1/2 left-3.5 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="pl-10"
          placeholder="Search"
          aria-label="Search services"
        />
      </form>

      <div className="grid gap-3">
        {matches.length === 0 ? (
          <p className="rounded-xl bg-muted px-4 py-3 text-sm text-muted-foreground">
            No matching service. Try delivery, PNG, or inspection.
          </p>
        ) : (
          matches.map((service, index) => (
            <button
              key={service.slug}
              type="button"
              onClick={() => router.push(`/book?service=${service.slug}`)}
              className="flex items-center justify-between rounded-xl bg-muted px-4 py-3 text-left transition-colors hover:bg-primary-100"
            >
              <div>
                <p className="text-sm font-medium">{service.title}</p>
                <p className="text-xs text-muted-foreground">{service.duration}</p>
              </div>
              <div
                className="h-2 w-24 rounded-full"
                style={{
                  background:
                    index === 0 ? "#162640" : index === 1 ? "#0B168F" : "#172033",
                }}
              />
            </button>
          ))
        )}
      </div>
    </div>
  )
}
