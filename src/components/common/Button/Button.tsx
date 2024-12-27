import React from 'react';

export interface ButtonProps {
  type?: 'primary' | 'outline' | 'neutral' | 'light';
  children: React.ReactNode;
  onClick?: () => void;
}

const typeClasses: Record<string, string> = {
  primary: "bg-light-primary text-white",
  outline: "border-1 border-gray-300 bg-transparent text-gray-700 text-white",
  neutral: "bg-light-neutral text-light",
  light: "bg-white text-black"
};

export const Button: React.FC<ButtonProps> = ({
  type,
  children,
  onClick,
}) => {

  const baseClasses = "cursor-pointer text-center rounded-full font-bold text-center w-[180px] h-[23] py-[15px] px-[30px]";
  const appliedClasses = `${baseClasses} ${type ? typeClasses[type] : ''}`;

  return (
    <button className={appliedClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
