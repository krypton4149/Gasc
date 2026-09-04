"use server"

import { appointmentSchema, contactSchema } from "@/lib/validations"

export type ActionState = {
  ok: boolean
  message: string
  errors?: Record<string, string[]>
}

function fieldErrorsFromZod(error: { flatten: () => { fieldErrors: Record<string, string[] | undefined> } }) {
  const flattened = error.flatten().fieldErrors
  const errors: Record<string, string[]> = {}

  for (const [key, value] of Object.entries(flattened)) {
    if (value?.length) {
      errors[key] = value
    }
  }

  return errors
}

export async function bookAppointment(
  _prev: ActionState | undefined,
  formData: FormData,
): Promise<ActionState> {
  const parsed = appointmentSchema.safeParse({
    language: formData.get("language"),
    clientType: formData.get("clientType"),
    service: formData.get("service"),
    appointmentType: formData.get("appointmentType"),
    date: formData.get("date"),
    time: formData.get("time"),
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    company: formData.get("company") || undefined,
    notes: formData.get("notes") || undefined,
    referralSource: formData.get("referralSource") || undefined,
    referredBySomeone: formData.get("referredBySomeone") === "true",
    referralName: formData.get("referralName") || undefined,
    consent: formData.get("consent") === "true",
  })

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the highlighted fields.",
      errors: fieldErrorsFromZod(parsed.error),
    }
  }

  console.info("[gasc] appointment booked", parsed.data)

  return {
    ok: true,
    message: `Thanks ${parsed.data.name}. Your ${parsed.data.time} visit on ${parsed.data.date} is requested.`,
  }
}

export async function submitContact(
  _prev: ActionState | undefined,
  formData: FormData,
): Promise<ActionState> {
  const parsed = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  if (!parsed.success) {
    return {
      ok: false,
      message: "Please check the highlighted fields.",
      errors: fieldErrorsFromZod(parsed.error),
    }
  }

  console.info("[gasc] contact message", parsed.data)

  return {
    ok: true,
    message: "Message received. A GASC advisor will reply within one business day.",
  }
}
