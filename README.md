# GASC

Professional gas and energy services site for Shikohabad — appointment booking, contact, and service pages built on the GASC design system (navy, royal blue, gold, Source Serif 4, Manrope).

## Stack

| Layer | Choice |
| --- | --- |
| App | Next.js 16 (App Router, Server Actions, Route Handlers) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI | shadcn/ui-style primitives + Lucide |
| Forms | React Hook Form + Zod |
| Calendar | React Day Picker |

## Design tokens

- **Primary** `#162640`
- **Secondary** `#0B168F`
- **Tertiary / gold** `#C79A32`
- **Neutral** `#172033`
- **Headline** Source Serif 4
- **Body / labels** Manrope
- **Radius** `0.75rem` (`rounded-xl`)

## Scripts

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

| Route | Purpose |
| --- | --- |
| `/` | Home |
| `/services` | Service catalogue |
| `/book` | Appointment form (RHF + Zod + server action) |
| `/contact` | Contact form |
| `POST /api/appointments` | JSON booking API |
| `POST /api/contact` | JSON contact API |

Booking and contact payloads are validated twice: on the client with React Hook Form, and again in Next.js server actions / route handlers with the same Zod schemas.
