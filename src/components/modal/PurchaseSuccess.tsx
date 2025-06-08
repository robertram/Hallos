"use client";

import Image from "next/image";
import Button from "@/components/common/Button/Button";
import { Check } from "lucide-react";

export const PurchaseSuccess = () => {
  return (
    <article className="w-full flex flex-col items-center text-white px-4 py-6 gap-6 sm:px-8 sm:py-10">
      {/* Ícono Check */}
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center">
        <Check strokeWidth={3} className="text-white w-8 h-8 sm:w-10 sm:h-10" />
      </div>

      {/* Título y subtítulo */}
      <section className="w-full max-w-[500px] flex flex-col gap-2 text-center px-2">
        <h3 className="text-xl sm:text-2xl font-bold leading-snug">
          You have purchased your ticket to Ethereum Pura Vida!
        </h3>
        <p className="text-sm sm:text-base text-[#A4A7AE]">
          Withs your ticket you receive a collectible
        </p>
      </section>

      {/* Imagen del ticket */}
      <figure className="w-[160px] sm:w-[214px]">
        <Image
          src="/nightParty2.png"
          alt="Ticket"
          width={214}
          height={307}
          className="rounded-xl object-cover w-full h-auto"
        />
      </figure>

      {/* Botón */}
      <div className="w-full max-w-[320px] sm:max-w-[214px]">
        <Button type="primary" className="w-full">
          View Collectable
        </Button>
      </div>
    </article>
  );
};
