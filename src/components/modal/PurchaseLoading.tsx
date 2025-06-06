"use client";
import Image from "next/image";
export const PurchaseLoading = () => {
  return (
    <div className="text-center space-y-6 px-6 py-4">

      <figure className="flex justify-center">
        <img
          src="/loading.png"
          alt="Processing status"
          width={240}
          height={20}
          className="mx-auto"
        />

      </figure>

      <h3 className="text-white text-xl font-semibold leading-snug">
        Your purchase is being<br />processed Ethereum Pura Vida
      </h3>

      <p className="text-sm text-gray-400 font-medium max-w-xs mx-auto">
        Please wait for your purchase to complete. Do not close this page.
      </p>
    </div>
  );
};
