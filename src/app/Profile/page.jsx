
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import Link from "next/link";
import {
  CalendarDays,
  CheckCircle2,
  Edit3,
  Heart,
  Mail,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  const name = user?.name || "User";
  const email = user?.email || "No email available";
  const image = user?.image;

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 px-4 py-10 sm:py-14">
      <div className="mx-auto max-w-5xl">

        {/* Main Profile Card */}
        <section className="group relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/80 shadow-[0_20px_70px_rgba(15,23,42,0.10)] backdrop-blur-xl transition-all duration-500 hover:shadow-[0_25px_90px_rgba(15,23,42,0.15)]">

          {/* Decorative Background */}
          <div className="absolute -right-28 -top-28 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />
          <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl transition-transform duration-700 group-hover:scale-125" />

          {/* Profile Header */}
          <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 px-6 py-12 sm:px-10">

            {/* Header Decoration */}
            <div className="absolute -right-10 top-5 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -right-20 top-16 h-56 w-56 rounded-full border border-white/10" />

            <div className="relative flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left">

              {/* Avatar */}
              <div className="relative">
                <div className="h-28 w-28 overflow-hidden rounded-full border-4 border-white/80 bg-white shadow-2xl transition-transform duration-500 hover:scale-110 sm:h-32 sm:w-32">
                  {image ? (
                    <Image
                      src={image}
                      alt={name}
                      width={128}
                      height={128}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-white text-4xl font-bold text-indigo-600">
                      {name.charAt(0).toUpperCase()}
                    </div>
                  )}
                </div>

                {/* Online Dot */}
                <span className="absolute bottom-2 right-2 h-5 w-5 animate-pulse rounded-full border-4 border-white bg-emerald-500" />
              </div>

              {/* User Info */}
              <div className="mt-6 sm:ml-7 sm:mt-0">
                <p className="mb-1 text-sm font-medium text-white/70">
                  Welcome back 👋
                </p>

                <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {name}
                </h1>

                <div className="mt-2 flex items-center justify-center gap-2 text-sm text-white/80 sm:justify-start">
                  <Mail className="h-4 w-4" />
                  {email}
                </div>

                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                  <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                  Active Account
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="relative p-6 sm:p-10">

            {/* Stats */}
            <div className="grid gap-4 sm:grid-cols-3">

              {/* Bookings */}
              <div className="group/stat rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                    <CalendarDays className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Travel
                  </span>
                </div>

                <p className="mt-4 text-3xl font-bold text-slate-800">
                  —
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Total Bookings
                </p>
              </div>

              {/* Favorites */}
              <div className="group/stat rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-rose-100 p-3 text-rose-500">
                    <Heart className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Saved
                  </span>
                </div>

                <p className="mt-4 text-3xl font-bold text-slate-800">
                  —
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Favorite Places
                </p>
              </div>

              {/* Location */}
              <div className="group/stat rounded-2xl border border-slate-100 bg-slate-50 p-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg">
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-emerald-100 p-3 text-emerald-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-medium text-slate-400">
                    Explore
                  </span>
                </div>

                <p className="mt-4 text-3xl font-bold text-slate-800">
                  —
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  Places Visited
                </p>
              </div>
            </div>

            {/* Personal Information */}
            <div className="mt-10">
              <div className="mb-5 flex items-center gap-3">
                <div className="rounded-xl bg-indigo-100 p-2.5 text-indigo-600">
                  <UserRound className="h-5 w-5" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-slate-800">
                    Personal Information
                  </h2>
                  <p className="text-sm text-slate-500">
                    Your account details
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">

                {/* Name */}
                <div className="rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Full Name
                  </p>

                  <p className="mt-2 text-lg font-semibold text-slate-800">
                    {name}
                  </p>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-slate-100 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Email Address
                  </p>

                  <p className="mt-2 truncate text-lg font-semibold text-slate-800">
                    {email}
                  </p>
                </div>
              </div>
            </div>

            {/* Security */}
            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-emerald-100 bg-emerald-50 p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="rounded-xl bg-white p-3 text-emerald-600 shadow-sm">
                  <ShieldCheck className="h-5 w-5" />
                </div>

                <div>
                  <p className="font-semibold text-slate-800">
                    Account Security
                  </p>

                  <p className="text-sm text-slate-500">
                    Your authentication is protected by Better Auth.
                  </p>
                </div>
              </div>

              <span className="rounded-full bg-white px-3 py-1.5 text-xs font-semibold text-emerald-600 shadow-sm">
                Secured
              </span>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">

              {/* <Link
                href="/profile/edit"
                className="group flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-800 hover:shadow-lg"
              >
                <Edit3 className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                Edit Profile
              </Link> */}

              <Link
                href="/mybooking"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-3 font-semibold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600 hover:shadow-md"
              >
                <CalendarDays className="h-4 w-4" />
                My Bookings
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-slate-400">
            Explore more places. Create more memories. ✈️
          </p>
        </div>
      </div>
    </main>
  );
};

export default ProfilePage;

