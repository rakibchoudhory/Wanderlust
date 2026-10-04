
import Link from "next/link";
import DestinationCrud from "@/component/DestinationCrud";

const Featured = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/featured`
  );

  const destinations = await res.json();

  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 sm:py-20">

      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

      <div className="relative mx-auto w-11/12 max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

          {/* Heading */}
          <div className="max-w-2xl">

            <div
              className="fade-in-up mb-4 flex items-center gap-2"
              style={{ animationDelay: "100ms" }}
            >
              <span className="h-1 w-8 rounded-full bg-blue-600" />

              <span className="text-sm font-semibold uppercase tracking-widest text-blue-600">
                Explore
              </span>
            </div>

            <h2
              className="fade-in-up text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl"
              style={{ animationDelay: "200ms" }}
            >
              Featured{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Destinations
              </span>
            </h2>

            <p
              className="fade-in-up mt-4 max-w-xl text-sm leading-7 text-slate-500 sm:text-base"
              style={{ animationDelay: "300ms" }}
            >
              Discover handpicked destinations and unforgettable experiences
              selected specially for your next adventure.
            </p>
          </div>

          {/* Button */}
          <Link
            href="/destinations"
            className="fade-in-up group inline-flex w-fit items-center gap-3 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:shadow-xl"
            style={{ animationDelay: "400ms" }}
          >
            <span>All Destinations</span>

            <span className="transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination, index) => (
            <div
              key={destination._id}
              className="fade-in-up"
              style={{
                animationDelay: `${500 + index * 150}ms`,
              }}
            >
              <DestinationCrud destination={destination} />
            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div
          className="fade-in-up mt-12 flex flex-col items-center justify-center gap-3 text-center"
          style={{ animationDelay: "1000ms" }}
        >
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
            <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
          </div>

          <p className="text-sm text-slate-400">
            Your next adventure is waiting for you.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Featured;

