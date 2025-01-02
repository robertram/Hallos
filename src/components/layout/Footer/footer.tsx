import React from "react";
import { GitHub, Facebook, Instagram, Twitter } from "../../../icons";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 bg-gradient-to-b from-[rgba(217,217,217,0.0588)] to-transparent text-gray-400 py-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <Image src="/hallos.png" alt="Logo" width={33} height={27} className="w-32 mb-4" />
          <p className="text-sm">
            Hallos is an NFT ticketing platform where you can safely and easily buy
            and resell your event tickets. Enjoy your favorite events and receive
            an NFT for your ticket.
          </p>
        </div>

        <div>
          <h3 className="text-gray-400 font-bold mb-4">Links</h3>
          <ul>
            <li><a href="#explore" className="text-sm text-white hover:text-white">Explore events</a></li>
            <li><a href="#contact" className="text-sm text-white hover:text-white">Contact us</a></li>
            <li>
              <a href="#terms" className="text-sm text-white hover:text-white">Terms and conditions</a>
            </li>
            <li><a href="#privacy" className="text-sm text-white hover:text-white">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-gray-400 font-bold mb-4">Contact</h3>
          <p className="text-sm text-white">info@hallos.io</p>
          <div className="flex space-x-4 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white"
            >
              <GitHub className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
