"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Navber = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="flex items-center justify-between bg-white p-5 border-b">
        

        {/* Left Menu - Desktop */}
        <ul className="hidden md:flex gap-5 text-black">
          <li>
            <Link href="/">Home</Link>
          </li>

          <li>
            <Link href="/destinations">Destinations</Link>
          </li>

          <li>
            <Link href="/mybooking">My Booking</Link>
          </li>

          <li>
            <Link href="/admin">Admin</Link>
          </li>
        </ul>

        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/assets/Wanderlast.png"
              alt="Wanderlast"
              width={150}
              height={150}
            />
          </Link>
        </div>

        {/* Right Menu - Desktop */}
        <ul className="hidden md:flex gap-3  text-black">
          <li>
            <Link href="/profile">Profile</Link>
          </li>

          <li>
            <Link href="/login">Login</Link>
          </li>

          <li>
            <Link href="/signup">Sign Up</Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-3xl cursor-pointer text-black"
        >
          {isOpen ? "✕" : "☰"}
        </button>

      </nav>


      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-sky-50 shadow-md p-5 border ">
          <ul className="flex flex-col gap-2 text-black">
            <li className="hover:bg-sky-300 p-1 rounded-sm">
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>

            <li className="hover:bg-sky-300 p-1 rounded-sm">
              <Link href="/destinations" onClick={() => setIsOpen(false)}>
                Destinations
              </Link>
            </li>

            <li className="hover:bg-sky-300 p-1 rounded-sm">
              <Link href="/mybooking" onClick={() => setIsOpen(false)}>
                My Booking
              </Link>
            </li>

            <li className="hover:bg-sky-300 p-1 rounded-sm">
              <Link href="/admin" onClick={() => setIsOpen(false)}>
                Admin
              </Link>
            </li>
            <li className="hover:bg-sky-300 p-1 rounded-sm">
              <Link href="/profile" onClick={() => setIsOpen(false)}>
                Profile
              </Link>
            </li>
            <li className="hover:bg-sky-300 p-1 rounded-sm">
              <Link href="/login" onClick={() => setIsOpen(false)}>
                Login
              </Link>
            </li>
            <li className="hover:bg-sky-300 p-1 rounded-sm">
              <Link href="/singup" onClick={() => setIsOpen(false)}>
                Sign Up
              </Link>
            </li>

          </ul>
        </div>
      )}

    </div>
  );
};

export default Navber;
