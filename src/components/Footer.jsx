// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-white/10 bg-black/60 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl px-6 py-10 text-center text-sm text-white/50">
        © {new Date().getFullYear()} Mariam Aser
        <div className="mt-2 text-white/30">
          Built with React + Tailwind + Three.js
        </div>
      </div>
    </footer>
  );
}
