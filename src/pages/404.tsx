import Link from "next/link";

export default function Custom404() {
  return (
    <main className="grow grid place-items-center bg-defgray py-24 px-6 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-mono font-semibold text-gold">404</p>
        <h1 className="uppercase mt-4 text-3xl font-condensed font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base font-mono leading-7 text-white">Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="bg-gold px-3.5 py-2.5 text-sm font-mono font-semibold text-black shadow-sm hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
          Go back home
          </Link>
          <Link href="/" className="text-sm font-mono font-semibold text-white">
            Contact support <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </main>
  )
}
