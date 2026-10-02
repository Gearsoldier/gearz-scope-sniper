# Next.js starter scaffold

This directory contains a separate [Next.js](https://nextjs.org) starter bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It is retained inside the GEARZ Scope Sniper repository, but its `app/page.tsx` is the default starter page; it does not contain the scope-analysis interface or Ollama API route.

## Looking for Scope Sniper?

Follow the [main project README](../README.md) and run the application from the repository root. The root and this nested directory have separate `package.json` and `package-lock.json` files. Installing or starting this starter does not install or start the root application.

## Run the starter on its own

If you specifically want to inspect this scaffold, run the following from the repository root:

```bash
cd gearz-scope-sniper
npm ci
npm run dev -- --hostname 127.0.0.1
```

Open the local URL printed by Next.js, normally [http://localhost:3000](http://localhost:3000). Stop any other development server using that port first. Ollama is not required for this starter page.

## Contents

- [`app/page.tsx`](app/page.tsx): default Next.js starter page
- [`app/layout.tsx`](app/layout.tsx): layout and Geist fonts loaded through `next/font`
- [`package.json`](package.json): independent starter dependencies and development scripts

This scaffold uses Next.js 15.4.4, React 19.1.0, and Tailwind CSS 4, as declared in its package manifest. These versions differ from the root application. Its scripts include `dev`, `build`, `start`, and `lint`; build and lint results are not verified by this documentation update.

## Framework resources

- [Next.js documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js source repository](https://github.com/vercel/next.js)

For Scope Sniper's model setup, data handling, and deployment limitations, use the [main project README](../README.md).
