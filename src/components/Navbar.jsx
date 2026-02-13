// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/experience", label: "Experience" },
    { to: "/personal", label: "Personal" },
    { to: "/resume", label: "Resume" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-6 z-50 flex justify-center px-4">
      {/* Glass Pill Container */}
      <div className="w-full max-w-5xl">
        <div
          className="
            relative flex items-center justify-between
            rounded-full
            border border-white/15
            bg-white/5
            backdrop-blur-xl
            px-6 py-3
            shadow-[0_0_40px_rgba(82,39,255,0.15)]
          "
        >
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white/10 text-lg font-bold backdrop-blur-md">
              ✦
            </div>
            <span className="text-sm font-semibold tracking-wide text-white/90">
              Mariam Aser
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `
                  rounded-full px-4 py-2 text-sm font-medium transition
                  ${
                    isActive
                      ? "bg-white/15 text-white"
                      : "text-white/70 hover:bg-white/10 hover:text-white"
                  }
                  `
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div
            className="
              mt-3 rounded-3xl border border-white/15 bg-white/5
              backdrop-blur-xl p-4 shadow-[0_0_40px_rgba(82,39,255,0.15)]
              md:hidden
            "
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `
                    rounded-xl px-4 py-3 text-sm font-medium transition
                    ${
                      isActive
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white"
                    }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
