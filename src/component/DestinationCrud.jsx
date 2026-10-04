
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { FaAngleRight } from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

const DestinationCrud = ({ destination }) => {
  const {
    _id,
    destinationName,
    country,
    price,
    duration,
    imageUrl,
  } = destination;

  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          src={imageUrl}
          alt={destinationName}
          width={600}
          height={400}
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-90" />

        {/* Country Badge */}
        <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-semibold text-slate-700 shadow-lg backdrop-blur-md">
          <LuMapPin className="text-amber-500" />
          {country}
        </div>

        {/* Price Badge */}
        <div className="absolute bottom-4 right-4 rounded-xl bg-white/95 px-4 py-2 shadow-lg backdrop-blur-md">
          <p className="text-xs font-medium text-slate-400">From</p>
          <p className="text-lg font-bold text-slate-900">
            ${price}
            <span className="ml-1 text-xs font-medium text-slate-400">
              /person
            </span>
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-blue-600">
          {destinationName}
        </h2>

        {/* Duration */}
        <div className="mt-3 flex items-center gap-2 text-sm text-slate-500">
          <div className="rounded-lg bg-blue-50 p-2 text-blue-600">
            <CiCalendarDate className="text-lg" />
          </div>

          <span>{duration}</span>
        </div>

        {/* Divider */}
        <div className="my-4 h-px bg-slate-100" />

        {/* Book Button */}
        <Link
          href={`/destinations/${_id}`}
          className="group/link flex w-full items-center justify-between rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-blue-600 hover:shadow-lg"
        >
          <span>Book Now</span>

          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 transition-all duration-300 group-hover/link:translate-x-1 group-hover/link:bg-white/20">
            <FaAngleRight className="text-xs" />
          </span>
        </Link>
      </div>

      {/* Bottom Hover Glow */}
      <div className="pointer-events-none absolute -bottom-16 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-blue-500/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
    </article>
  );
};

export default DestinationCrud;

