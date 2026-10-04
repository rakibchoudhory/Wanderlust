import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Link from "next/link";
import { CalendarDays, Eye, MapPin, Ticket, XCircle } from "lucide-react";
import CencelBookig from "@/component/CencelBookig";

const MyBookingPage = async () => {

   const { token } = await auth.api.getToken({
      headers: await headers(),
    });

  const session = await auth.api.getSession({
    headers: await headers(),
  });
  const userId = session?.user?.id;

  if (!userId) {
    return (
      <main className="min-h-screen bg-slate-50 px-4 py-12">
        <div className="mx-auto max-w-6xl rounded-2xl bg-white p-10 text-center shadow-sm">
          <h1 className="text-2xl font-bold text-slate-800">
            Please login first
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            You need to login to view your bookings.
          </p>

          <Link
            href="/login"
            className="mt-6 inline-flex rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg"
          >
            Go to Login
          </Link>
        </div>
      </main>
    );
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userId}`, {
    cache: "no-store",
    headers: {
          authorization: `Bearer ${token}`,
        },
  });

  if (!res.ok) {
    throw new Error("Failed to fetch bookings");
  }

  const bookingBook = await res.json();

  return (
    <main className="min-h-screen bg-slate-50 px-4 py-10">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-medium text-cyan-600">Your Travel</p>

          <h1 className="text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
            My Bookings
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Manage and view your upcoming travel plans
          </p>
        </div>

        {/* Empty State */}
        {bookingBook.length === 0 ? (
          <div className="rounded-3xl border border-slate-200 bg-white px-6 py-16 text-center shadow-sm">
            <Ticket className="mx-auto h-12 w-12 text-slate-300" />

            <h2 className="mt-4 text-xl font-semibold text-slate-800">
              No bookings yet
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Your upcoming trips will appear here.
            </p>

            <Link
              href="/destinations"
              className="mt-6 inline-flex rounded-xl bg-cyan-500 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-600 hover:shadow-lg"
            >
              Explore Destinations
            </Link>
          </div>
        ) : (
          <div className="space-y-5">
            {bookingBook.map((booking, index) => (
              <div
                key={booking._id || index}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="relative h-60 w-full overflow-hidden md:h-auto md:w-72">
                    <img
                      src={booking.imageUrl}
                      alt={booking.destinationName}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                    {/* Booking number */}
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-700 shadow backdrop-blur">
                      Booking #{index + 1}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-1 flex-col justify-between p-6">
                    <div>
                      {/* Status */}
                      <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-600">
                        <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                        Confirmed
                      </div>

                      {/* Destination */}
                      <h2 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-cyan-600">
                        {booking.destinationName}
                      </h2>

                      {/* Details */}
                      <div className="mt-4 grid gap-3 text-sm text-slate-500 sm:grid-cols-2">
                        <div className="flex items-center gap-2">
                          <CalendarDays className="h-4 w-4 text-cyan-500" />
                          <span>Departure: {booking.departureDate}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <Ticket className="h-4 w-4 text-cyan-500" />
                          <span>Booking ID: {booking._id}</span>
                        </div>
                      </div>
                    </div>

                    {/* Bottom */}
                    <div className="mt-6 flex flex-col gap-5 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">
                      {/* Price */}
                      <div>
                        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
                          Total Price
                        </p>

                        <p className="mt-1 text-2xl font-bold text-cyan-600">
                          ${booking.price}
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="flex gap-3">
                        <CencelBookig booking={booking}/>

                        <Link
                          href={`/destinations/${booking.destinationId}`}
                          className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-cyan-600 hover:shadow-lg"
                        >
                          <Eye className="h-4 w-4" />
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default MyBookingPage;
