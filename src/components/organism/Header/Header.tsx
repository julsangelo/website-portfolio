'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Button from '@/components/atom/Button';
import { Menu } from '@mui/icons-material';

export const Header = () => {
  return (
    <div className="fixed w-full top-0 backdrop-blur-sm z-500 bg-background/80">
      <div className="h-[80px] flex max-w-[1320px] m-auto  justify-between items-center">
        <Link href="/" className="flex items-end pl-[20px]">
            <div className="bg-foreground flex justify-center items-center p-[10px] h-fit aspect-square rounded-lg">
                <span className="text-[40px]/3 font-extrabold text-text">J</span>
                <div className="aspect-square h-[10px] font-extrabold bg-primary-100 rounded-full self-end"/>
            </div>
        </Link>
        <DesktopHeader />
        <MobileHeader />
        <div className="hidden md:flex">
          <Button label="Resume" href="/files/Resume_Paano, Julius Angelo.pdf" target="_blank"/>
        </div>
      </div>
    </div>
  );
};

const DesktopHeader = () => {
  return (
    <div className="hidden md:flex gap-[30px]">
      <Link
        href="#about"
        className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
      >
        About
      </Link>
      <Link
        href="#tech-stack"
        className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
      >
        Tech Stack
      </Link>
      <Link
        href="#project"
        className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
      >
        Projects
      </Link>
      <Link
        href="#experience"
        className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
      >
        Experience
      </Link>
      <Link
        href="#contact"
        className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
      >
        Contact
      </Link>
    </div>
  );
};

const MobileHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="block md:hidden">
      <div className='pr-[20px]'>
        <button onClick={() => setIsOpen((prev) => !prev)} className="cursor-pointer">
          <Menu fontSize="large" />
        </button>
      </div>
      <div
        className={`fixed top-[80px] right-0 h-dvh w-[250px] bg-background/70 backdrop-blur-sm pt-[25px] px-[25px] flex flex-col transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col gap-[20px] mb-[20px]">
          <Link
            href="#about"
            className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
          >
            About
          </Link>
          <Link
            href="#tech-stack"
            className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
          >
            Tech Stack
          </Link>
          <Link
            href="#project"
            className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
          >
            Projects
          </Link>
          <Link
            href="#experience"
            className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
          >
            Experience
          </Link>
          <Link
            href="#contact"
            className="text-[16px]/4.5 text-dark font-bold opacity-70 hover:opacity-100"
          >
            Contact
          </Link>
        </div>
        <Button label="Resume" href="/files/Resume_Paano, Julius Angelo.pdf" target="_blank"/>
      </div>
    </div>
  );
};
