"use client";

import React from "react";
import Link from "next/link";
import { useEffect, useState } from "react";

import ButtonSolidLight from "@/components/UI/ButtonSolidLight";

const Navbar = () => {
  const [background, setBackground] = useState(false);
  useEffect(() => {
    if (window && window.scrollY > 200) {
      setBackground(true);
    } else {
      setBackground(false);
    }
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setBackground(true);
      } else {
        setBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` md:fixed w-full flex flex-col lg:flex-row justify-between transition-colors duration-300 items-center px-4 md:px-8 py-3 lg:rounded-bl-3xl lg:rounded-br-3xl ${
        background
          ? "bg-[#DFD4D8] md:bg-[#7B3B4b]"
          : "bg-[#DFD4D8] md:bg-transparent"
      }`}
    >
      <div className="name-section">
        <Link href="/">
          <p
            className={`uppercase font-bold tracking-wider text-2xl ${
              background ? "text-[#DFD4D8]" : "text-[#7B3B4b]"
            }`}
          >
            Abanoub Refaat
          </p>
        </Link>
      </div>
      <div
        className={`links flex gap-3 md:gap-5 text-sm md:text-lg font-bold md:tracking-wide uppercase ${
          background ? "text-[#DFD4D8]" : "text-[#7B3B4b]"
        } `}
      >
        <Link href="/" className="hover:text-[#7b3b4bd3]">
          Home
        </Link>
        <Link href="/Projects" className="hover:text-[#7b3b4bd3]">
          Projects
        </Link>
        <Link href="/About" className="hover:text-[#7b3b4bd3]">
          About
        </Link>
      </div>
      <div className="action-section flex gap-3">
        <Link
          href="https://flowcv.com/resume/6lks5ts7d9vm"
          download={true}
          target="_blank"
        >
          <ButtonSolidLight
            title="Download CV"
            styles={`hidden lg:block ${
              background ? "bg-[#DFD4D8] text-[#7B3B4b] hover:bg-[#c4babe]" : ""
            }`}
          />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
