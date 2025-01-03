import React from 'react';
import * as Icons from '../../../icons';

export interface ButtonProps {
  type?: 'primary' | 'outline' | 'neutral' | 'light' | 'glass';
  children: React.ReactNode;
  onClick?: () => void;
  icon?: string;
}

const typeClasses: Record<string, string> = {
  primary: "bg-primary-gradient text-white",
  outline: "border border-gray-300 bg-transparent text-gray-700 text-white w-min",
  neutral: "bg-light-neutral text-light",
  light: "bg-white text-black",
  glass: "bg-custom-gradient text-white !rounded-[12px] !px-[12px] !px-[14px] !w-min border border-white border-opacity-10"
};

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
  icon,
}) => {

  const IconComponent = icon && icon in Icons ? Icons[icon.charAt(0).toUpperCase() + icon.slice(1) as keyof typeof Icons] : null;
  const baseClasses = "text-button1 cursor-pointer text-center rounded-full w-[180px] min-h-[23] py-[15px] px-[30px] whitespace-nowrap";
  const appliedClasses = `${baseClasses} ${type ? typeClasses[type] : ''} ${IconComponent ? 'flex' : ''}`;

  return (
    <button className={appliedClasses} onClick={onClick}>
      {IconComponent && <IconComponent />}
      <span className={`${IconComponent ? 'ml-2 my-auto' : ''}`}>
        {children}
      </span>
    </button>
  );
};

export default Button;
