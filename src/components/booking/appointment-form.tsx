"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { format } from "date-fns"
import { CalendarIcon, Check, Loader2, Mail } from "lucide-react"
import { useSearchParams } from "next/navigation"
import { useEffect, useMemo, useState } from "react"
import { useForm, useWatch } from "react-hook-form"
import { z } from "zod"

import { Calendar } from "@/components/ui/calendar"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  bookingAppointmentTypes,
  bookingClientTypes,
  bookingLanguages,
  bookingReferralSources,
  practiceAreas,
  siteConfig,
  timeSlots,
} from "@/lib/site"
import { appointmentSchema, isServiceSlug } from "@/lib/validations"
import { cn } from "@/lib/utils"

const gacsWhatsAppNumber = siteConfig.phone.replace(/\D/g, "")
const whatsappHref = `https://wa.me/${gacsWhatsAppNumber}`

const navyUnderline =
  "h-11 rounded-none border-0 border-b border-white/25 bg-transparent px-0 text-base text-white shadow-none placeholder:text-white/40 focus:ring-0 focus-visible:border-gold focus-visible:ring-0 data-[placeholder]:text-white/40 md:h-10 md:text-sm"
const lightUnderline =
  "h-11 rounded-none border-0 border-b border-[#E8E4DC] bg-transparent px-0 text-base text-navy shadow-none placeholder:text-[#B0AAA0] focus-visible:border-gold focus-visible:ring-0 md:h-10 md:text-sm"

const labelNavy =
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold"
const labelLight =
  "font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#8E8E8E]"

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className={cn("fill-current", className)}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479s1.065 2.875 1.213 3.074c.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413" />
    </svg>
  )
}

function RequiredMark() {
  return (
    <span aria-hidden className="text-gold">
      *
    </span>
  )
}

function GoldRadio({
  checked,
  label,
  onSelect,
  dark,
}: {
  checked: boolean
  label: string
  onSelect: () => void
  dark?: boolean
}) {
  return (
    <button
      type="button"
      role="radio"
      aria-checked={checked}
      onClick={onSelect}
      className="inline-flex items-center gap-2.5 text-left"
    >
      <span
        className={cn(
          "flex size-4 shrink-0 items-center justify-center rounded-full border",
          checked
            ? "border-gold"
            : dark
              ? "border-white/35"
              : "border-[#C5C0B8]",
        )}
      >
        {checked ? <span className="size-2 rounded-full bg-gold" /> : null}
      </span>
      <span
        className={cn(
          "font-sans text-sm",
          checked
            ? dark
              ? "text-white"
              : "text-navy"
            : dark
              ? "text-white/45"
              : "text-[#8E8E8E]",
        )}
      >
        {label}
      </span>
    </button>
  )
}

function SectionHeading({
  number,
  title,
  subtitle,
  dark,
}: {
  number: string
  title: string
  subtitle: string
  dark?: boolean
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="pt-1 font-sans text-[11px] font-medium text-gold">
        {number}
      </span>
      <div>
        <h2
          className={cn(
            "font-sans text-xl font-semibold sm:text-[1.35rem]",
            dark ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>
        <p
          className={cn(
            "mt-1 font-sans text-[13px] text-[#8E8E8E]",
            !subtitle && "hidden",
          )}
        >
          {subtitle}
        </p>
      </div>
    </div>
  )
}

function formatPhone(digits: string) {
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
}

function formatDate(value: string) {
  return format(new Date(`${value}T00:00:00`), "d MMMM yyyy")
}

function whatsappUrl(values: z.infer<typeof appointmentSchema>) {
  const serviceTitle =
    practiceAreas.find((area) => area.slug === values.service)?.title ??
    values.service
  const company = values.company?.trim()
  const notes = values.notes?.trim()
  const referralName = values.referralName?.trim()
  const referralSource = values.referralSource?.trim()

  let referral = ""
  if (values.referredBySomeone && referralName) {
    referral = referralSource
      ? `${referralSource} — ${referralName}`
      : `Client Referral — ${referralName}`
  } else if (referralSource) {
    referral = referralSource
  }

  const lines = [
    "Dear GACS Team,",
    "",
    `I wish to request a confidential consultation with *${siteConfig.legalName}*. Kindly find my details below.`,
    "",
    
    "*CLIENT*",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${formatPhone(values.phone)}`,
    company ? `Organisation: ${company}` : null,
    "",
    "*CONSULTATION*",
    `Service: ${serviceTitle}`,
    `Client type: ${values.clientType}`,
    `Language: ${values.language}`,
    "",
    "*PREFERRED APPOINTMENT*",
    `Type: ${values.appointmentType}`,
    `Date: ${formatDate(values.date)}`,
    `Time: ${values.time}`,
    referral ? "" : null,
    referral ? "*REFERRAL*" : null,
    referral ? referral : null,
    notes ? "" : null,
    notes ? "*MATTER FOR DISCUSSION*" : null,
    notes ? notes : null,
    "",
  
    "",
    "I would be grateful if a member of your team could confirm a suitable time at your earliest convenience.",
    "",
    "Kind regards,",
    values.name,
  ].filter((line) => line !== null)

  return `https://wa.me/${gacsWhatsAppNumber}?text=${encodeURIComponent(lines.join("\n"))}`
}

export function AppointmentForm() {
  const searchParams = useSearchParams()
  const presetService = searchParams.get("service")
  const [pending, setPending] = useState(false)

  const form = useForm({
    resolver: zodResolver(appointmentSchema),
    defaultValues: {
      language: "English" as const,
      clientType: "Individual" as const,
      service: isServiceSlug(presetService) ? presetService : undefined,
      appointmentType: "In-Person Consultation" as const,
      date: "",
      time: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      notes: "",
      referralSource: "",
      referredBySomeone: false,
      referralName: "",
      consent: false,
    },
  })

  const watched = useWatch({ control: form.control })

  useEffect(() => {
    if (isServiceSlug(presetService)) {
      form.setValue("service", presetService)
    }
  }, [form, presetService])

  const progress = useMemo(() => {
    const step1 = Boolean(
      watched.language && watched.clientType && watched.service,
    )
    const step2 = Boolean(
      watched.appointmentType && watched.date && watched.time,
    )
    const step3 = Boolean(watched.name && watched.email && watched.phone)
    const steps = [
      { id: "booking-01", number: "1", label: "Consultation", done: step1 },
      { id: "booking-02", number: "2", label: "Appointment", done: step2 },
      { id: "booking-03", number: "3", label: "Your Details", done: step3 },
      {
        id: "booking-submit",
        number: "4",
        label: "Submit",
        done: Boolean(watched.consent && step1 && step2 && step3),
      },
    ]
    const activeIndex = steps.findIndex((step) => !step.done)
    return { steps, activeIndex: activeIndex === -1 ? 3 : activeIndex }
  }, [watched])

  function redirectToWhatsApp(values: z.infer<typeof appointmentSchema>) {
    setPending(true)
    window.location.assign(whatsappUrl(values))
  }

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          event.stopPropagation()
          void form.handleSubmit(redirectToWhatsApp)(event)
        }}
        className="grid gap-6 md:grid-cols-[minmax(14rem,17rem)_minmax(0,1fr)] md:gap-8 lg:grid-cols-[minmax(15rem,18rem)_minmax(0,1fr)] lg:gap-10 xl:gap-14"
      >
        <aside className="space-y-4 md:sticky md:top-24 md:self-start lg:top-28">
          <div className="bg-navy px-4 py-5 sm:px-6 sm:py-7">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
              Form Progress
            </p>
            <ol className="mt-4 flex gap-3 overflow-x-auto pb-1 [scrollbar-width:none] md:mt-6 md:flex-col md:gap-4 md:overflow-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
              {progress.steps.map((step, index) => {
                const active = index === progress.activeIndex
                return (
                  <li key={step.label} className="shrink-0">
                    <button
                      type="button"
                      onClick={() =>
                        document
                          .getElementById(step.id)
                          ?.scrollIntoView({ behavior: "smooth", block: "start" })
                      }
                      className="flex min-h-11 items-center gap-2 text-left md:w-full md:gap-3"
                    >
                      <span
                        className={cn(
                          "flex size-7 items-center justify-center border font-sans text-[11px] md:size-6",
                          active
                            ? "border-white text-white"
                            : "border-white/20 text-white/35",
                        )}
                      >
                        {step.number}
                      </span>
                      <span
                        className={cn(
                          "font-sans text-[12px] md:text-sm",
                          active ? "text-white" : "text-white/40",
                        )}
                      >
                        {step.label}
                      </span>
                    </button>
                  </li>
                )
              })}
            </ol>
          </div>

          <div className="border border-[#E8E4DC] bg-[#F9F5F1] px-4 py-5 sm:px-6 sm:py-7">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-[#B0AAA0]">
              Need Assistance?
            </p>
            <a
              href={whatsappHref}
              className="mt-5 flex items-start gap-3"
            >
              <span className="mt-0.5 text-gold">
                <WhatsAppIcon className="size-4" />
              </span>
              <span>
                <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                  WhatsApp
                </span>
                <span className="mt-1 block font-sans text-sm font-semibold text-navy">
                  {siteConfig.phone}
                </span>
              </span>
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-5 flex items-start gap-3"
            >
              <Mail className="mt-0.5 size-4 text-gold" />
              <span>
                <span className="block font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-gold">
                  Email
                </span>
                <span className="mt-1 block break-all font-sans text-sm font-semibold text-navy">
                  {siteConfig.email}
                </span>
              </span>
            </a>
          </div>
        </aside>

        <div className="min-w-0 space-y-0">
          <div className="bg-navy px-4 py-8 sm:px-8 sm:py-12 lg:px-10">
            <div id="booking-01" className="scroll-mt-28">
              <SectionHeading
                number="01"
                title="Consultation Details"
                subtitle="Service, language and client category"
                dark
              />

              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel className={labelNavy}>
                      Select Language <RequiredMark />
                    </FormLabel>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6" role="radiogroup">
                      {bookingLanguages.map((option) => (
                        <GoldRadio
                          key={option}
                          dark
                          label={option}
                          checked={field.value === option}
                          onSelect={() => field.onChange(option)}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="clientType"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel className={labelNavy}>
                      Client Type <RequiredMark />
                    </FormLabel>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6" role="radiogroup">
                      {bookingClientTypes.map((option) => (
                        <GoldRadio
                          key={option}
                          dark
                          label={option}
                          checked={field.value === option}
                          onSelect={() => field.onChange(option)}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="service"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel className={labelNavy}>
                      Select Service <RequiredMark />
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className={navyUnderline}>
                          <SelectValue placeholder="Choose a service..." />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {practiceAreas.map((area) => (
                          <SelectItem key={area.slug} value={area.slug}>
                            {area.title}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="my-10 h-px bg-white/15" />

            <div id="booking-02" className="scroll-mt-28">
              <SectionHeading
                number="02"
                title="Choose Your Appointment"
                subtitle="Type, date and time preference"
                dark
              />

              <FormField
                control={form.control}
                name="appointmentType"
                render={({ field }) => (
                  <FormItem className="mt-8">
                    <FormLabel className={labelNavy}>
                      Appointment Type <RequiredMark />
                    </FormLabel>
                    <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6" role="radiogroup">
                      {bookingAppointmentTypes.map((option) => (
                        <GoldRadio
                          key={option}
                          dark
                          label={option}
                          checked={field.value === option}
                          onSelect={() => field.onChange(option)}
                        />
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="mt-8 grid gap-8 sm:grid-cols-2">
                <FormField
                  control={form.control}
                  name="date"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelNavy}>
                        Preferred Date <RequiredMark />
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <button
                              type="button"
                              className={cn(
                                "flex w-full items-center justify-between pt-2 font-sans text-sm",
                                navyUnderline,
                                !field.value && "text-white/40",
                              )}
                            >
                              {field.value
                                ? format(
                                    new Date(`${field.value}T00:00:00`),
                                    "dd/MM/yyyy",
                                  )
                                : "dd/mm/yyyy"}
                              <CalendarIcon className="size-4 text-white/50" />
                            </button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-2" align="start">
                          <Calendar
                            mode="single"
                            selected={
                              field.value
                                ? new Date(`${field.value}T00:00:00`)
                                : undefined
                            }
                            onSelect={(date) =>
                              field.onChange(
                                date ? format(date, "yyyy-MM-dd") : "",
                              )
                            }
                            disabled={{ before: new Date() }}
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="time"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelNavy}>
                        Preferred Time <RequiredMark />
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className={navyUnderline}>
                            <SelectValue placeholder="-- : -- --" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {timeSlots.map((slot) => (
                            <SelectItem key={slot} value={slot}>
                              {slot}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <p className="mt-8 font-sans text-[12px] text-white/45">
                Appointment confirmation will be shared after reviewing your
                request.
              </p>
            </div>
          </div>

          <div
            id="booking-03"
            className="scroll-mt-28 bg-white px-4 py-8 sm:px-8 sm:py-12 lg:px-10"
          >
            <SectionHeading
              number="03"
              title="Tell Us About Yourself"
              subtitle="Contact details and consultation notes"
            />

            <div className="mt-10 grid gap-8 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelLight}>
                      Full Name <RequiredMark />
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className={lightUnderline}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelLight}>
                      Email Address <RequiredMark />
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="Enter your email address"
                        autoComplete="email"
                        className={lightUnderline}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelLight}>
                      Phone Number <RequiredMark />
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter your phone number"
                        inputMode="numeric"
                        autoComplete="tel"
                        className={lightUnderline}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelLight}>
                      Company / Business Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Optional"
                        className={lightUnderline}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormItem className="mt-8">
                  <FormLabel className={labelLight}>
                    Notes / Consultation Requirement
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Briefly describe your requirement or how we can help you..."
                      className="min-h-36 rounded-none border border-[#E8E4DC] bg-transparent px-3.5 py-3 shadow-none placeholder:text-[#B0AAA0] focus-visible:border-gold focus-visible:ring-0"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div
            id="booking-04"
            className="scroll-mt-28 border border-[#E8E4DC] bg-[#F9F5F1] px-4 py-8 sm:px-8 lg:px-10"
          >
            <SectionHeading
              number="04"
              title="How Did You Hear About GACS?"
              subtitle=""
            />

            <div className="mt-8 grid gap-8 sm:grid-cols-2">
              <div>
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelLight}>
                        Referral Source
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        value={field.value || undefined}
                      >
                        <FormControl>
                          <SelectTrigger className={lightUnderline}>
                            <SelectValue placeholder="Select an option" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {bookingReferralSources.map((source) => (
                            <SelectItem key={source} value={source}>
                              {source}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="referredBySomeone"
                  render={({ field }) => (
                    <label className="mt-4 flex cursor-pointer items-center gap-2.5">
                      <button
                        type="button"
                        role="checkbox"
                        aria-checked={field.value}
                        onClick={() => {
                          const next = !field.value
                          field.onChange(next)
                          if (!next) {
                            form.setValue("referralName", "")
                          }
                        }}
                        className={cn(
                          "flex size-4 shrink-0 items-center justify-center border",
                          field.value
                            ? "border-navy bg-navy"
                            : "border-[#C5C0B8] bg-transparent",
                        )}
                      >
                        {field.value ? (
                          <Check className="size-3 text-white" />
                        ) : null}
                      </button>
                      <span className="font-sans text-sm text-navy">
                        I was referred by someone
                      </span>
                    </label>
                  )}
                />
              </div>

              {watched.referredBySomeone ? (
                <FormField
                  control={form.control}
                  name="referralName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className={labelLight}>
                        Referral Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Name of the person who referred you"
                          className={lightUnderline}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              ) : null}
            </div>
          </div>

          <div
            id="booking-submit"
            className="scroll-mt-28 bg-white px-4 py-8 sm:px-8 lg:px-10"
          >
            <FormField
              control={form.control}
              name="consent"
              render={({ field }) => (
                <FormItem>
                  <label className="flex cursor-pointer items-start gap-3">
                    <button
                      type="button"
                      role="checkbox"
                      aria-checked={field.value}
                      onClick={() => field.onChange(!field.value)}
                      className={cn(
                        "mt-0.5 flex size-4 shrink-0 items-center justify-center border",
                        field.value
                          ? "border-navy bg-navy"
                          : "border-[#C5C0B8] bg-transparent",
                      )}
                    >
                      {field.value ? (
                        <Check className="size-3 text-white" />
                      ) : null}
                    </button>
                    <span>
                      <span className="block font-sans text-sm text-navy">
                        I agree that GACS may contact me regarding my appointment
                        request.
                      </span>
                      <span className="mt-2 block font-mono text-[11px] leading-5 text-[#8E8E8E]">
                        Your information is kept confidential and used only for
                        consultation and appointment purposes.
                      </span>
                    </span>
                  </label>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="mt-8 border-t border-[#E8E4DC] pt-8">
              <button
                type="submit"
                disabled={!watched.consent || pending}
                className={cn(
                  "group inline-flex w-full items-center justify-center gap-3 bg-navy px-8 py-4 font-sans text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-all",
                  watched.consent && !pending
                    ? "hover:bg-gold hover:font-bold hover:text-navy"
                    : "cursor-not-allowed bg-navy/35 text-white/70",
                  pending && "opacity-70",
                )}
              >
                {pending ? (
                  <Loader2 className="size-4 animate-spin" />
                ) : (
                  <WhatsAppIcon className="size-4 text-gold group-hover:text-navy" />
                )}
                Submit & Request Appointment
              </button>
              <p className="mt-4 text-center font-mono text-[11px] leading-5 text-[#8E8E8E]">
                Prefer WhatsApp? Your appointment details will be sent directly
                to our WhatsApp team.
              </p>
            </div>
          </div>
        </div>
      </form>
    </Form>
  )
}
