'use client';

import React from 'react';

interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  target?: string;
}

export const Button = ({ label, href, onClick, target }: ButtonProps) => {
  return (
    <a
      href={href}
      onClick={onClick}
      target={target}
      className="relative inline-block text-[15px]/4.5 md:text-[17px] xl:text-[18px]/4.5 font-bold rounded-[8px] px-[20px] md:px-[25px] xl:px-[30px] py-[12px] md:py-[13px] xl:py-[15px] cursor-pointer border overflow-hidden group text-center bg-primary-100 text-background border-primary-100 hover:border-background-alt">
      <span className="absolute inset-0 w-0 transition-all duration-300 ease-out bg-background-alt group-hover:w-full"></span>
      <span className="relative z-10 transition-colors duration-300 group-hover:text-text-alt">
        {label}
      </span>
    </a>
  );
};
