"use client";

import { useState } from "react";
import Image from "next/image";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("crypto");

  return (
    <div className="min-h-screen">
      <div className=" mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Select a payment method
        </h2>

        <div className="space-y-4">
          {/* Bank Card Option */}
          <div
            className={`flex p-6 rounded-2xl ${
              selectedMethod === "card"
                ? "bg-[#1A1B23] border-[#3B82F6]"
                : "bg-[#131318] border-transparent"
            } border cursor-pointer transition-colors`}
            onClick={() => setSelectedMethod("card")}
          >
            <div className="flex items-center gap-6">
              <div className="flex flex-col items-center">
                <div className="relative w-12 h-8">
                  <Image
                    src="/images/VISA.png"
                    alt="Visa"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <div className="relative w-12 h-8 mt-2">
                  <Image
                    src="/images/hallos.png"
                    alt="Mastercard"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-medium text-white text-lg">
                  Bank Card
                </span>
                <p className="text-sm text-gray-400">
                  Payment by credit or debit card VISA, MASTERCARD Credit card,
                  debit card and bank transfers.
                </p>
              </div>
            </div>
            <input
              type="radio"
              checked={selectedMethod === "card"}
              className="ml-auto h-5 w-5 accent-blue-500"
              readOnly
            />
          </div>

          {/* Crypto Option */}
          <div
            className={`rounded-2xl ${
              selectedMethod === "crypto"
                ? "bg-[#1A1B23] border-[#3B82F6]"
                : "bg-[#131318] border-transparent"
            } border cursor-pointer transition-colors`}
            onClick={() => setSelectedMethod("crypto")}
          >
            <div className="p-6">
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 bg-[#3B82F6] p-2 rounded-full flex items-center justify-center">
                  <Image
                    src="/images/eth.png"
                    alt="Ethereum"
                    layout="fill"
                    objectFit="contain"
                  />
                </div>
                <span className="font-medium text-white text-lg">Crypto</span>
                <input
                  type="radio"
                  checked={selectedMethod === "crypto"}
                  className="ml-auto h-5 w-5 accent-blue-500"
                  readOnly
                />
              </div>

              {selectedMethod === "crypto" && (
                <div className="mt-6 space-y-6">
                  <ol className="list-decimal ml-5 space-y-2 text-gray-400 text-sm">
                    <li>
                      Check the amount to be paid and click on CHOOSE PAYMENT
                      METHOD
                    </li>
                    <li>
                      The wallets you see initially are your wallets when you
                      create an account on Hallos to store your NFT tickets
                    </li>
                    <li>
                      If you want to pay with an external wallet click on
                      ANOTHER WALLET
                    </li>
                    <li>Choose the wallet of your preference</li>
                    <li>Make the payment with your personal wallet</li>
                    <li>
                      You will receive an email and your NFT ticket will arrive
                      in your profile
                    </li>
                  </ol>

                  <div className="bg-[#131318] p-4 rounded-xl flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="relative w-8 h-8">
                        <Image
                          src="/images/dollar.png"
                          alt="Dollar"
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Price to pay</p>
                        <p className="text-xl font-bold text-white">
                          73.5 USDC
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <button className="px-4 py-2 bg-[#1A1B23] text-white rounded-lg text-sm hover:bg-[#22232C] transition-colors">
                        Another Wallet
                      </button>
                      <button className="px-4 py-2 bg-[#3B82F6] text-white rounded-lg text-sm hover:bg-blue-600 transition-colors">
                        Choose payment method
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
