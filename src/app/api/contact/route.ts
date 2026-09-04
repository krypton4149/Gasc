import { NextResponse } from "next/server"

import { contactSchema } from "@/lib/validations"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = contactSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  return NextResponse.json({
    ok: true,
    message: "Message received.",
  })
}
