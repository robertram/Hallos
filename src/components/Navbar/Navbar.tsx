import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <header
      className="flex flex-wrap justify-between items-center px-4 py-4 h-auto md:h-16"
      style={{
        background: "linear-gradient(90deg, #1e1f3a 0%, #17182c 100%)", 
        width: "100%", 
      }}
    >
      {/* Logo */}
      <div className="flex items-center ml-4 mt-2 md:ml-12 md:mt-0">
        <Image
          src="/LogoHallos.svg"
          alt="Hallos Logo"
          width={88}
          height={47}
          priority
        />
      </div>

      {/* Right Section */}
      <div className="flex items-center space-x-6 mt-4 md:mt-0">
        {/* Links */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/events"
            className="text-white font-medium hover:text-gray-400 transition"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0px",
            }}
          >
            Events
          </a>
          <a
            href="/prices"
            className="text-white font-medium hover:text-gray-400 transition"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
              lineHeight: "20px",
              letterSpacing: "0px",
            }}
          >
            Prices
          </a>
        </nav>

        {/* Language Switcher */}
        <div
          className="flex items-center justify-between w-[62px] h-[34px] rounded-[17px] bg-[rgba(217,217,217,0.12)] opacity-70"
          style={{
            padding: "3px 4px 3px 3px",
          }}
        >
          {/* Flag */}
          <div className="flex items-center justify-center w-[28px] h-[28px] rounded-full overflow-hidden">
            <Image
              src="/Spain.svg"
              alt="Spanish Flag"
              width={28}
              height={28}
            />
          </div>

          {/* Frame */}
          <div
            className="flex items-center justify-center"
            style={{
              width: "16px",
              height: "16px",
              margin: "9px",
              opacity: 0.5,
            }}
          >
            <Image
              src="/Frame.svg"
              alt="Dropdown Icon"
              width={16}
              height={16}
            />
          </div>
        </div>

        {/* Login Button */}
        <button
          className="flex justify-center items-center h-[48px] px-[30px] rounded-[24.314px] border border-white text-white font-semibold transition hover:opacity-80"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: "24px",
            letterSpacing: "-0.5px",
            textAlign: "center",
            background: "transparent", 
            cursor: "pointer", 
          }}
        >
          login
        </button>

        {/* Create Event Button */}
        <button
          className="flex justify-center items-center h-[48px] px-[30px] rounded-[110px] text-white font-semibold transition hover:opacity-90"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "16px",
            lineHeight: "19px",
            fontWeight: 600,
            letterSpacing: "-0.5px",
            background: "linear-gradient(90deg, #1A82FE 0%, #A14BFC 100%)",
            borderRadius: "110px",
            border: "none",
            padding: "14px 30px",
            cursor: "pointer",
            transition: "opacity 0.3s",
          }}
        >
          Create event
        </button>
      </div>
    </header>
  );
};
