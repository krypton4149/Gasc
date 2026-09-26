import { z } from "zod"
import {
  bookingAppointmentTypes,
  bookingClientTypes,
  bookingLanguages,
} from "@/lib/site"

export const serviceSlugs = [
  "taxation",
  "legal",
  "business",
  "finance",
] as const

export type ServiceSlug = (typeof serviceSlugs)[number]

export function isServiceSlug(
  value: string | null | undefined,
): value is ServiceSlug {
  return !!value && (serviceSlugs as readonly string[]).includes(value)
}

const phoneField = z
  .string()
  .trim()
  .transform((value) => {
    const digits = value.replace(/\D/g, "")
    return digits.length === 12 && digits.startsWith("91")
      ? digits.slice(2)
      : digits
  })
  .refine((value) => /^[6-9]\d{9}$/.test(value), {
    message: "Enter a valid 10-digit Indian mobile number.",
  })

export const appointmentSchema = z
  .object({
    language: z.enum(bookingLanguages, "Select a language."),
    clientType: z.enum(bookingClientTypes, "Select a client type."),
    service: z.enum(serviceSlugs, "Select a service."),
    appointmentType: z.enum(
      bookingAppointmentTypes,
      "Select an appointment type.",
    ),
    date: z.string().min(1, "Choose a preferred date."),
    time: z.string().min(1, "Choose a preferred time."),
    name: z.string().trim().min(2, "Please enter your full name."),
    email: z.string().trim().email("Enter a valid email address."),
    phone: phoneField,
    company: z.string().trim().max(120, "Company name is too long.").optional(),
    notes: z
      .string()
      .trim()
      .max(1000, "Notes must be under 1000 characters.")
      .optional(),
    referralSource: z.string().optional(),
    referredBySomeone: z.boolean(),
    referralName: z.string().trim().max(80).optional(),
    consent: z.boolean().refine((value) => value === true, {
      message: "Please confirm we may contact you.",
    }),
  })
  .superRefine((data, ctx) => {
    if (data.referredBySomeone && !data.referralName?.trim()) {
      ctx.addIssue({
        code: "custom",
        path: ["referralName"],
        message: "Enter the name of the person who referred you.",
      })
    }
  })

export type AppointmentInput = z.infer<typeof appointmentSchema>

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your name."),
  email: z.string().trim().email("Enter a valid email address."),
  phone: z
    .string()
    .trim()
    .transform((value) => {
      const digits = value.replace(/\D/g, "")
      return digits.length === 12 && digits.startsWith("91")
        ? digits.slice(2)
        : digits
    })
    .refine((value) => /^[6-9]\d{9}$/.test(value), {
      message: "Enter a valid 10-digit Indian mobile number.",
    }),
  subject: z.string().trim().min(3, "Add a short subject."),
  message: z
    .string()
    .trim()
    .min(10, "Please share a little more detail.")
    .max(1000, "Message must be under 1000 characters."),
})

export type ContactInput = z.infer<typeof contactSchema>
