import { NextResponse } from "next/server"

import { appointmentSchema } from "@/lib/validations"

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = appointmentSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, errors: parsed.error.flatten().fieldErrors },
      { status: 400 },
    )
  }

  return NextResponse.json({
    ok: true,
    reference: `GASC-${Date.now().toString(36).toUpperCase()}`,
    appointment: parsed.data,
  })
}
