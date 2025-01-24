'use client'

import React, { InputHTMLAttributes, useState } from 'react';
import Image from 'next/image';
import { countries } from '@/constants/countries';

interface Country {
  code: string;
  flag: string;
  dialCode: string;
}

interface PhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  value?: string;
  placeholder?: string;
  className?: string;
  onChangePhone?: (fullNumber: string) => void;
}

const PhoneInput: React.FC<PhoneInputProps> = ({
  label,
  value = '',
  onChangePhone,
  placeholder = 'Type here...',
  className,
  ...rest
}) => {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [isOpen, setIsOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState(value);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
    setIsOpen(false);
    const fullNumber = `${country.dialCode}${phoneNumber}`;
    onChangePhone?.(fullNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    const numbersOnly = newValue.replace(/[^\d]/g, '').slice(0, 10);
    setPhoneNumber(numbersOnly);
    const fullNumber = `${selectedCountry.dialCode}${numbersOnly}`;
    onChangePhone?.(fullNumber);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!/[\d]/.test(e.key) && e.key !== 'Backspace' && e.key !== 'Delete' && e.key !== 'ArrowLeft' && e.key !== 'ArrowRight' && e.key !== 'Tab' && e.key !== 'Enter') {
      e.preventDefault();
    }
    if (e.key === 'Enter') {
      setIsOpen(false);
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-sm">{label}</label>
      <div className="relative flex items-center bg-[#1C1C27] rounded-lg gap-3 h-[45px]">
        <div className="relative">
          <button
            type="button"
            className="w-16 flex items-center gap-3 text-white hover:opacity-80 px-3 py-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image 
              src={selectedCountry.flag}
              alt={`${selectedCountry.code} flag`}
              width={30}
              height={16}
              className='rounded-sm'
            />
            <span className='rotate-90 text-[15px]'>{isOpen ? '<' : '>'}</span>
          </button>
          
          {isOpen && (
            <div className="absolute left-0 top-full mt-1 w-24 bg-[#1C1C27] rounded-lg shadow-lg py-1 z-[1000] max-h-60 overflow-y-auto hide-scrollbar" onMouseLeave={() => setIsOpen(false)}>
              {countries.map((country) => (
                <button
                  key={country.code}
                  className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-700 text-white"
                  onClick={() => handleCountrySelect(country)}
                >
                  <Image 
                    src={country.flag}
                    alt={`${country.code} flag`}
                    width={20}
                    height={13}
                    className="rounded-sm w-auto h-auto"
                  />
                  <span className='text-[15px]'>{country.dialCode}</span>
                </button>
              ))}
            </div>
          )}
        </div>

        <div className='border-r border-white h-[50%] w-[2px] bg-white/10'></div>

        <div className="flex items-center gap-2">
          <input
            type="tel"
            value={phoneNumber}
            onChange={handlePhoneChange}
            onKeyDown={handleKeyPress}
            placeholder={placeholder}
            maxLength={10}
            className={`w-full bg-transparent text-white py-3 pr-3 placeholder-gray-500 focus:outline-none ${className}`}
            {...rest}
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneInput;