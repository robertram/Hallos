"use client";

import { useState } from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa6";

const PaymentMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <div className="min-h-screen bg-[#0A0B0F] p-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold mb-6 text-white">
          Select a payment method
        </h2>

        <div className="space-y-4">
          {/* Bank Card Option */}
          <div
            className={`flex items-start justify-between p-6 rounded-2xl ${
              selectedMethod === "card"
                ? "bg-[#1A1B23] border-[#3B82F6]"
                : "bg-[#131318] border-transparent"
            } border cursor-pointer transition-colors`}
            onClick={() => setSelectedMethod("card")}
          >
            <div className="flex gap-4">
              <input
                type="radio"
                checked={selectedMethod === "card"}
                className="mt-1.5 h-4 w-4 border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                readOnly
              />
              <div>
                <div className="flex items-center gap-4 mb-2">
                  <div className="flex gap-1">
                    <FaCcVisa className="text-3xl text-[#1434CB]" />
                    <FaCcMastercard className="text-3xl text-[#FF5F00]" />
                  </div>
                  <span className="font-medium text-white">Bank Card</span>
                </div>
                <p className="text-sm text-gray-400">
                  Payment by credit or debit card VISA, MASTERCARD Credit card,
                  debit card and bank transfers.
                </p>
              </div>
            </div>
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
              <div className="flex gap-4">
                <input
                  type="radio"
                  checked={selectedMethod === "crypto"}
                  className="mt-1.5 h-4 w-4 border-gray-600 text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-900"
                  readOnly
                />
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="bg-[#3B82F6] p-2 rounded-full">
                      <FaEthereum className="text-xl text-white" />
                    </div>
                    <span className="font-medium text-white">Crypto</span>
                  </div>
                  <p className="text-sm text-gray-400">
                    Payment with cryptocurrencies
                  </p>
                </div>
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
                    <div>
                      <p className="text-sm text-gray-400">Price to pay</p>
                      <p className="text-xl font-bold text-white">73.5 USDC</p>
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
