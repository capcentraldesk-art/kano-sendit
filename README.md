# Kano SendIt

A Bolt-style delivery platform for Kano, designed to help customers request local deliveries and connect them to nearby drivers.

## Stack

- Web app: Next.js
- Mobile app: React Native + Expo
- API: NestJS
- Database: PostgreSQL
- Real-time: Socket.IO
- Maps: Mapbox
- Payments: Flutterwave / Paystack
- Notifications: Firebase

## Monorepo layout

- apps/api - backend service
- apps/web - customer dashboard and landing page
- packages/shared - shared domain types and constants

## MVP features

- Sign up / login
- Place delivery order
- Driver assignment
- Route tracking
- Order lifecycle updates
- Payment flow
- Admin dashboard

## Run locally

```bash
npm install
npm run dev
```

This launches:

- API: http://localhost:3001
- Web app: http://localhost:3000

## Project status

This is the initial MVP scaffold for the Kano delivery platform.
