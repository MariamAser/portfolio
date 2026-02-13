// src/App.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Experience from "./pages/Experience.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Personal from "./pages/Personal.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="relative isolate min-h-screen overflow-x-hidden bg-[#07060D] text-white">
      {/* Global ethereal background */}
      <div className="pointer-events-none fixed inset-0 -z-20">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#5227FF]/25 blur-[120px]" />
        <div className="absolute top-20 right-[-140px] h-[520px] w-[520px] rounded-full bg-[#FF9FFC]/18 blur-[140px]" />
        <div className="absolute bottom-[-180px] left-[-180px] h-[520px] w-[520px] rounded-full bg-[#7C3AED]/14 blur-[140px]" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <Navbar />

      {/* Keep your normal container for ALL pages */}
      <main className="mx-auto w-full max-w-6xl px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/personal" element={<Personal />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
