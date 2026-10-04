
"use client";

import Link from "next/link";
import { AlertTriangle, ArrowLeft, Home, RefreshCw } from "lucide-react";

const ErrorPage = () => {
  return (
    <main className="relative flex min-h-2 items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 px-6">

      {/* Background Glow */}
      <div className="absolute -left-32 -top-32 h-96 w-96 animate-pulse rounded-full bg-blue-500/20 blur-3xl" />
      <div className="absolute -bottom-32 -right-32 h-96 w-96 animate-pulse rounded-full bg-purple-500/20 blur-3xl" />

      {/* Floating Shapes */}
      <div className="absolute left-[10%] top-[20%] h-3 w-3 animate-bounce rounded-full bg-blue-400" />
      <div className="absolute right-[15%] top-[30%] h-2 w-2 animate-ping rounded-full bg-purple-400" />
      <div className="absolute bottom-[20%] left-[20%] h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

      {/* Error Card */}
      <section className="relative w-full max-w-xl">

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-8 text-center shadow-2xl backdrop-blur-2xl sm:p-12">

          {/* Icon */}
          <div className="mx-auto mb-7 flex h-24 w-24 animate-[bounce_3s_ease-in-out_infinite] items-center justify-center rounded-full border border-red-400/20 bg-red-500/10">
            <AlertTriangle className="h-12 w-12 text-red-400" />
          </div>

          {/* Error Code */}
          <p className="text-sm font-semibold uppercase tracking-[0.35em] text-blue-400">
            Something went wrong
          </p>

          <h1 className="mt-4 bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-6xl font-black text-transparent sm:text-7xl">
            Oops!
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
            Something went wrong
          </h2>

          <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-slate-300 sm:text-base">
            We couldn't load this page right now. Don't worry, your journey
            isn't over. Let's get you back to exploring amazing destinations.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row ">

            <button
              onClick={() => window.location.reload()}
              className="group flex  items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl "
            >
              <RefreshCw className="h-4 w-4 transition-transform duration-500 group-hover:rotate-180 " />
              Try Again
            </button>

            <Link
              href="/"
              className="group flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl"
            >
              <Home className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Back Home
            </Link>
          </div>

          {/* Bottom Message */}
          <div className="mt-8 flex items-center justify-center gap-2 text-xs text-slate-400">
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Continue your journey with Wanderlust</span>
          </div>

        </div>
      </section>
    </main>
  );
};

export default ErrorPage;
