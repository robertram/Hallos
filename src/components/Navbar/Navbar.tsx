import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 bg-gradient-to-r from-[#1e1f3a] to-[#17182c] text-white">
      {/* Logo */}
      <div>
        <Image src="/hallos-logo.svg" alt="Hallos Logo" width={120} height={40} />
      </div>

      {/* Links */}
      <nav className="hidden md:flex space-x-8">
        <a href="/events" className="hover:text-gray-400">Events</a>
        <a href="/prices" className="hover:text-gray-400">Prices</a>
      </nav>

      {/* Buttons */}
      <div className="flex items-center space-x-4">
        <button className="px-4 py-2 bg-[#292a40] rounded-full">
          <Image src="/spanish-flag.svg" alt="ES" width={20} height={15} />
          ES
        </button>
        <button className="px-6 py-2 border border-gray-500 rounded-full hover:bg-gray-700">Login</button>
        <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-full hover:opacity-90">Create Event</button>
      </div>
    </header>
  );
};
