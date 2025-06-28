"use client";
import React from "react";

export default function Footer() {
  return (
    <div className="bg-[#EC227C] w-full rounded-t-2xl mt-[80px] px-6 md:px-12 py-10 footer-wrap">
      <div className="flex flex-wrap justify-between gap-y-5 gap-x-10">
        <div className="w-full md:w-auto">
          <div className="bg-white rounded-md w-[175px]">
            <img
              src="https://spedathome.com/images/logo.svg"
              onError={(e) =>
                (e.currentTarget.src = "https://spedathome.com/images/logo.png")
              }
              alt="Logo"
              className="w-full h-auto p-1"
            />
          </div>
          <p className="text-white text-base mt-3 max-w-sm hidden lg:block">
            Stay in the know by subscribing to our newsletter below.
          </p>
          <div className="relative mt-5 hidden lg:block border-2 border-white/20 rounded-xl">
            <input
              type="text"
              placeholder="Enter your email address"
              className="h-[54px] w-[330px] px-4 text-white  bg-transparent placeholder-white focus:outline-none focus:border-[#F9BA15]"
            />
            <div className="absolute top-1/2 right-1 -translate-y-1/2 bg-white h-[43px] w-[43px] rounded-xl flex items-center justify-center cursor-pointer">
              <img
                src="https://spedathome.com/images/icons/right-green-arrow.svg"
                onError={(e) =>
                  (e.currentTarget.src =
                    "https://spedathome.com/images/icons/right-green-arrow.png")
                }
                alt="submit"
              />
            </div>
          </div>
        </div>

        <div className="min-w-[150px]">
          <h3 className="text-white font-bold text-lg mb-5">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-white hover:text-[#F9BA15]">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-white hover:text-[#F9BA15]">
                About
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-[150px]">
          <h3 className="text-white font-bold text-lg mb-5">Contact</h3>
          <ul className="space-y-2">
            <li>
              <a href="/contact" className="text-white hover:text-[#F9BA15]">
                Contact
              </a>
            </li>
            <li>
              <a
                href="/privacy-policy"
                className="text-white hover:text-[#F9BA15]"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/refund-policy"
                className="text-white hover:text-[#F9BA15]"
              >
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        <div className="min-w-[150px]">
          <h3 className="text-white font-bold text-lg mb-5">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                target="_blank"
                href="https://www.facebook.com/spedathome/"
                className="text-white hover:text-[#F9BA15]"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCI3Dina2RfQfnmp0anxrWTA"
                className="text-white hover:text-[#F9BA15]"
              >
                YouTube
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://in.linkedin.com/company/spedathome"
                className="text-white hover:text-[#F9BA15]"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/20 mt-10 pt-5 flex flex-col lg:flex-row items-center justify-between text-white text-sm gap-3">
        <div>© SpEd@home. All Rights Reserved 2025</div>
        <div>
          <a href="/terms" className="hover:text-[#F9BA15]">
            Terms & Conditions
          </a>
        </div>
      </div>
    </div>
  );
}
