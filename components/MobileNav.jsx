"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CiMenuFries } from "react-icons/ci";

const links = [
  { name: "home", id: "home" },
  { name: "resume", id: "resume" },
  { name: "work", id: "work" },
  { name: "contact", id: "contact" },
];

const MobileNav = () => {
  const [active, setActive] = useState("home");

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActive(id);
    }
  };

  return (
    <Sheet>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <h1 className="text-4xl font-semibold">
            Maria<span className="text-accent">.</span>
          </h1>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              className={`text-xl capitalize transition-all ${
                active === link.id
                  ? "text-accent border-b-2 border-accent"
                  : "hover:text-accent"
              }`}
            >
              {link.name}
            </button>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
