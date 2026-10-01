import BookingCard from "@/component/BookingCard";
import { DeleteAlert } from "@/component/DeleteAlert";
import EditModal from "@/component/EditModal";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import { CiCalendarDate } from "react-icons/ci";
import { LuMapPin } from "react-icons/lu";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  // console.log(token, "token");

  const res = await fetch(`${process.env.Next_Public_Server_URL}/destinations/${id}`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  const destination = await res.json();
console.log(destination,'destination');
  const {
    destinationName,
    country,
    price,
    duration,
    imageUrl,
    description,
    departureDate,
  } = destination;
  console.log(imageUrl , 'image');

  return (
    <main className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex justify-end gap-2">
          <EditModal destination={destination} />
          <DeleteAlert destination={destination} />
        </div>

        {/* Main Card */}
        <div className="overflow-hidden rounded-3xl bg-white shadow-[0_5px_30px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_15px_45px_rgba(0,0,0,0.12)]">
          {/* Hero Image */}
          <div className="group relative h-75 w-full overflow-hidden md:h-[450px]">
            
            {
              imageUrl  && (
                <Image
              src={imageUrl}
              alt={destinationName}
              fill
              priority
              className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
            />
              )
            }

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

            {/* Top Badge */}
            <div className="absolute right-5 top-5 rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
              ✈️ Popular Destination
            </div>

            {/* Destination Info */}
            <div className="absolute bottom-7 left-6 text-white md:bottom-10 md:left-10">
              <div className="mb-3 flex translate-y-2 items-center gap-2 opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100">
                <LuMapPin className="text-sky-300" />
                <span className="text-sm font-medium">{country}</span>
              </div>

              <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
                {destinationName}
              </h1>

              <p className="mt-2 max-w-xl text-sm text-white/80 md:text-base">
                Discover beautiful places, unforgettable experiences and amazing
                adventures.
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 md:p-10">
            {/* Info Cards */}
            <div className="grid gap-5 md:grid-cols-3">
              {/* Location */}
              <div className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-sky-100 bg-sky-50 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:bg-white hover:shadow-lg">
                <div className="rounded-full bg-sky-100 p-3 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <LuMapPin className="text-xl text-sky-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Location</p>

                  <p className="font-semibold text-gray-900">{country}</p>
                </div>
              </div>

              {/* Duration */}
              <div className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-sky-100 bg-sky-50 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:bg-white hover:shadow-lg">
                <div className="rounded-full bg-sky-100 p-3 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <CiCalendarDate className="text-2xl text-sky-600" />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Duration</p>

                  <p className="font-semibold text-gray-900">{duration}</p>
                </div>
              </div>

              {/* Price */}
              <div className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-sky-100 bg-sky-50 p-5 transition-all duration-300 hover:-translate-y-2 hover:border-sky-200 hover:bg-white hover:shadow-lg">
                <div className="rounded-full bg-sky-100 px-3 py-2 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                  <span className="text-xl font-bold text-sky-600">$</span>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Starting From</p>

                  <p className="text-xl font-bold text-sky-600">
                    ${price}
                    <span className="ml-1 text-sm font-normal text-gray-500">
                      / person
                    </span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex justify-between gap-3">
              {/* Overview */}
              <div className="mt-5  w-full shadow-[0_0_20px_rgba(0,0,0,0.15)] rounded-2xl  p-6">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-8 w-1 rounded-full bg-sky-500" />

                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                </div>

                <p className="max-w-4xl leading-8 text-gray-600">
                  {description}
                </p>
              </div>
              {/*Booking Card */}
              <BookingCard destination={destination} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DestinationDetailsPage;
