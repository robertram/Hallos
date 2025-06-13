"use client"

import { useState } from 'react';
import { Checkbox } from './checkbox';
import Input from '@/components/input/Input';

export const CustomCheckbox = () => {
  const [isTermsChecked, setIsTermsChecked] = useState<boolean>(false);
  return (
    <div className="items-top flex items-center space-x-2 !mt-[20px] ">
      <Checkbox
        id="terms1"
        checked={isTermsChecked}
        onClick={() => {
          setIsTermsChecked(!isTermsChecked)
        }}
      />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-base font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-white"
        >
         I accept the Terms and Conditions and Privacy Policy
        </label>
      </div>
    </div>
  )
}