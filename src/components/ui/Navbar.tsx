/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [backgroundColor, setBackgroundColor] = useState(false);

  useEffect(() => {
    const allScroolId = () => {
      if (typeof window !== "undefined") {
        if (window.scrollY >= 8) {
          setBackgroundColor(true);
        } else {
          setBackgroundColor(false);
        }
      }
    };

    window?.addEventListener("scroll", allScroolId);

    return () => {
      window?.removeEventListener("scroll", allScroolId);
    };
  }, []);

  return (
    <div
      className={`${
        backgroundColor ? "navbar-section  background-color " : "navbar-section"
      }`}
    >
      <div className="navbar-bg-section max-w-7xl mx-auto">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link href="/">HOME</Link>
                </li>
                <li>
                  <Link href="/tour">TOURS</Link>
                </li>
                <li>
                  <Link href="/destination">DESTINATION</Link>
                </li>
                <li>
                  <Link href="/blog">BLOG</Link>
                </li>
                <li>
                  <Link href="/about-us">About Us</Link>
                </li>
                <li>
                  <Link href="/contact">CONTRACT</Link>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">daisyUI</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 fw-fw-bold text-md">
              <li>
                <Link href="/">HOME</Link>
              </li>
              <li>
                <Link href="/tour">TOURS</Link>
              </li>
              <li>
                <Link href="/destination">DESTINATION</Link>
              </li>
              <li>
                <Link href="/blog">BLOG</Link>
              </li>
              <li>
                <Link href="/about-us">About Us</Link>
              </li>
              <li>
                <Link href="/contact">CONTACT</Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
