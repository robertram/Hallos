'use client'

import React from 'react';

interface InputProps {
  label: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  type = 'text',
  value,
  onChange,
  className,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-button2">{label}</label>
      <div className="relative bg-glass-gradient2">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`w-full bg-transparent border border-white-10 text-white rounded-lg p-3 placeholder-white/50 focus:outline-none focus:ring-2 placeholder-text2 focus:ring-blue-500 ${className} text-text2`}
        />
      </div>
    </div>
  );
};

export default Input; 