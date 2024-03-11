/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import logo from "@/assets/footer-logo.svg";
import Image from "next/image";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaSearch, FaRegUser } from "react-icons/fa";

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
      <div className="navbar-bg-section max-w-7xl mx-auto text-black">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52  "
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
            <Image
              src={logo}
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 fw-fw-bold text-md">
              <li>
                <Link
                  href="/"
                  className={
                    backgroundColor
                      ? "background-color-nav-section font-medium subHeaderTitle"
                      : "text-white nav-lg-section font-medium subHeaderTitle "
                  }
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/tour"
                  className={
                    backgroundColor
                      ? "background-color-nav-section font-medium subHeaderTitle"
                      : "text-white nav-lg-section font-medium subHeaderTitle "
                  }
                >
                  TOURS
                </Link>
              </li>
              <li>
                <Link
                  href="/destination"
                  className={
                    backgroundColor
                      ? "background-color-nav-section font-medium subHeaderTitle"
                      : "text-white nav-lg-section font-medium subHeaderTitle "
                  }
                >
                  DESTINATION
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={
                    backgroundColor
                      ? "background-color-nav-section font-medium subHeaderTitle"
                      : "text-white nav-lg-section font-medium subHeaderTitle "
                  }
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className={
                    backgroundColor
                      ? "background-color-nav-section font-medium subHeaderTitle"
                      : "text-white nav-lg-section font-medium subHeaderTitle "
                  }
                >
                  ABOUT US
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className={
                    backgroundColor
                      ? "background-color-nav-section font-medium subHeaderTitle"
                      : "text-white nav-lg-section font-medium subHeaderTitle "
                  }
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex items-center">
              <FaSearch
                className={
                  backgroundColor
                    ? "background-color-nav-section font-medium subHeaderTitle text-xl mr-3 "
                    : "text-white nav-lg-section font-medium subHeaderTitle text-xl mr-3"
                }
              ></FaSearch>
              <FaRegUser
                className={
                  backgroundColor
                    ? "background-color-nav-section font-medium subHeaderTitle text-2xl"
                    : "text-white nav-lg-section font-medium subHeaderTitle text-2xl"
                }
              ></FaRegUser>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
