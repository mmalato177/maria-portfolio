"use client";

import { useState } from "react";

const links = [
  { name: "home", id: "home" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
  
];

const Nav = () => {
  const [active, setActive] = useState("home");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <nav className="flex gap-8">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => handleScroll(link.id)}
          className={`capitalize font-medium transition-all ${
            active === link.id ? "text-accent border-b-2 border-accent" : "hover:text-accent"
          }`}
        >
          {link.name}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
