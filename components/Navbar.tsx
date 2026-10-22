"use client";

import React, { useState } from "react";
import { Icon } from "./Icon";

export const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Main Navigation">
      <a className="site-logo" href="#home" aria-label="Abanoub Refaat Home">
        Abanoub Refaat<span>++</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-label="Toggle navigation"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <i />
        <i />
      </button>

      <div className={menuOpen ? "nav-links open" : "nav-links"}>
        <a href="#home" onClick={closeMenu}>
          Home
        </a>
        <a href="#projects" onClick={closeMenu}>
          Projects
        </a>
        <a href="#experience" onClick={closeMenu}>
          Experience
        </a>
        <a href="#design" onClick={closeMenu}>
          Design
        </a>
        <a href="#skills" onClick={closeMenu}>
          Skills
        </a>
        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>
      </div>

      <a className="nav-cta" href="#contact">
        Get to Know <Icon name="arrow" />
      </a>
    </nav>
  );
};
