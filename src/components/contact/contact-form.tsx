"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2 } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { siteConfig } from "@/lib/site"
import { contactSchema } from "@/lib/validations"
import { cn } from "@/lib/utils"

const underlineInput =
  "h-11 rounded-none border-0 border-b border-[#E8E4DC] bg-transparent px-0 text-base shadow-none placeholder:text-[#B0AAA0] focus-visible:border-gold focus-visible:ring-0 md:h-10 md:text-sm"

const gacsWhatsAppNumber = siteConfig.phone.replace(/\D/g, "")

function RequiredLabel({ children }: { children: string }) {
  return (
    <>
      {children}{" "}
      <span aria-hidden className="text-gold">
        *
      </span>
    </>
  )
}

function formatPhone(digits: string) {
  return `+91 ${digits.slice(0, 5)} ${digits.slice(5)}`
}

function whatsappUrl(values: z.infer<typeof contactSchema>) {
  const lines = [
    "Dear GACS Team,",
    "",
    `I wish to get in touch with *${siteConfig.legalName}*. Kindly find my enquiry below.`,
    "",
    "━━━━━━━━━━━━━━━━",
    "*ENQUIRY*",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Phone: ${formatPhone(values.phone)}`,
    `Subject: ${values.subject}`,
    "",
    "*MESSAGE*",
    values.message,
    "",
    "",
    "",
    "I look forward to hearing from you.",
    "",
    "Kind regards,",
    values.name,
  ]

  return `https://wa.me/${gacsWhatsAppNumber}?text=${encodeURIComponent(lines.join("\n"))}`
}

export function ContactForm() {
  const [pending, setPending] = useState(false)

  const form = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  })

  function redirectToWhatsApp(values: z.infer<typeof contactSchema>) {
    setPending(true)
    window.location.assign(whatsappUrl(values))
  }

  const labelClass =
    "font-sans text-[10px] font-medium uppercase tracking-[0.18em] text-[#8E8E8E]"

  return (
    <Form {...form}>
      <form
        noValidate
        onSubmit={(event) => {
          event.preventDefault()
          event.stopPropagation()
          void form.handleSubmit(redirectToWhatsApp)(event)
        }}
        className="grid gap-8"
      >
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-x-10">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>
                  <RequiredLabel>Full Name</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Your name"
                    autoComplete="name"
                    className={underlineInput}
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
                <FormLabel className={labelClass}>
                  <RequiredLabel>Email Address</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    autoComplete="email"
                    className={underlineInput}
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
                <FormLabel className={labelClass}>
                  <RequiredLabel>Phone Number</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="9876543210"
                    inputMode="numeric"
                    autoComplete="tel"
                    className={underlineInput}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel className={labelClass}>
                  <RequiredLabel>Subject</RequiredLabel>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="How can we help?"
                    className={underlineInput}
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
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className={labelClass}>
                <RequiredLabel>Message</RequiredLabel>
              </FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us about your matter…"
                  className="min-h-32 rounded-none border border-[#E8E4DC] bg-transparent px-3.5 py-3 text-base shadow-none placeholder:text-[#B0AAA0] focus-visible:border-gold focus-visible:ring-0 md:min-h-36 md:text-sm"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <button
          type="submit"
          disabled={pending}
          className={cn(
            "inline-flex w-full items-center justify-center bg-navy px-8 py-3.5 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-white transition-all hover:bg-gold hover:font-bold hover:text-navy sm:w-auto",
            pending && "opacity-70",
          )}
        >
          {pending ? <Loader2 className="mr-2 size-4 animate-spin" /> : null}
          Send via WhatsApp
        </button>
      </form>
    </Form>
  )
}
