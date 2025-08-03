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
      className={` fixed w-full flex justify-between items-center px-8 py-3 ${
        background ? "bg-[#7B3B4b]" : "bg-transparent"
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
        className={`links flex gap-5 text-lg font-bold tracking-wide uppercase ${
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
        <ButtonSolidLight
          title="Download CV"
          styles={`${
            background ? "bg-[#DFD4D8] text-[#7B3B4b] hover:bg-[#c4babe]" : ""
          }`}
        />
      </div>
    </nav>
  );
};

export default Navbar;
