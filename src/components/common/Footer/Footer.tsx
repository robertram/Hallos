import React from "react";
import { GitHub, Facebook, Instagram, Twitter } from "../../../icons";
import Image from "next/image";

const Footer = () => {
  const linkClassName = "text-white font-geist text-[14px] normal-case font-normal leading-[28px] hover:opacity-60";

  return (
    <footer 
      className="text-gray-400 py-10" 
      style={{ background: 'linear-gradient(180deg, rgba(217, 217, 217, 0.06) 0%, rgba(217, 217, 217, 0.00) 100%)' }}
    >
      <div className=" flex flex-col md:flex-row gap-6 md:gap-0 justify-between mx-6">
        <div>
          <Image src="/HallosLetters.svg" alt="Logo" width={33} height={27} className="w-32 mb-4" />
          <p className="text-sm text-white font-geist text-[14px] normal-case font-normal leading-[28px] opacity-60 max-w-[412px]">
            Hallos is an NFT ticketing platform where you can safely and easily buy
            and resell your event tickets. Enjoy your favorite events and receive
            an NFT for your ticket.
          </p>
        </div>

        <div>
          <h3 className="text-gray-400 text-text1 md:mb-4 mb-1">Links</h3>
          <ul>
            <li><a href="#explore" className={linkClassName}>Explore events</a></li>
            <li><a href="#contact" className={linkClassName}>Contact us</a></li>
            <li><a href="#terms" className={linkClassName}>Terms and conditions</a></li>
            <li><a href="#privacy" className={linkClassName}>Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400 text-text1 md:mb-4 mb-1">Contact</h3>
          <a href="mailto:info@hallos.io" className={linkClassName}>info@hallos.io</a>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://x.com/Hallos_io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <Twitter className="w-6 h-6 hover:fill-white" />
            </a>
            {/* <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <Facebook className="w-6 h-6 hover:fill-white" />
            </a> */}
            <a
              href="https://www.instagram.com/hallos_io/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <Instagram className="w-6 h-6 hover:fill-white" />
            </a>
            {/* <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <GitHub className="w-6 h-6 hover:fill-white" />
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
