"use client";
import React from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 bg-white shadow-md ">
      <div className="flex items-center justify-between px-10 py-6 max-w-screen-xl mx-auto">
        <div className="flex items-center space-x-10">
          <a href="/" className="w-32">
            <img
              src="https://spedathome.com/images/logo.svg"
              onError={(e) =>
                (e.target.src = "https://spedathome.com/images/logo.png")
              }
              alt="Logo"
              className="w-full h-auto"
            />
          </a>
          {["Assessment", "Coaching", "Blog"].map((item) => (
            <div
              key={item}
              className="flex items-center space-x-1 text-sm font-medium text-[#322E6B] hover:text-[#EC227C] cursor-pointer"
            >
              <span>{item}</span>
              <ChevronDown size={16} />
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-6">
          <div className="flex items-center text-sm font-medium text-[#322E6B] space-x-4 pr-6 border-r border-yellow-400">
            <a href="/about" className="hover:text-[#EC227C]">
              About
            </a>
            <a href="/contact" className="hover:text-[#EC227C]">
              Contact
            </a>
          </div>
          <a
            href="/login"
            className="text-sm font-medium text-[#322E6B] hover:text-[#EC227C]"
          >
            Login
          </a>
          <a
            href="/signup"
            className="bg-[#F9BA15] text-white rounded-full px-5 py-2 text-sm font-medium hover:bg-[#e89f00] transition"
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
}
