/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import Select from "./Select";
import Select2 from "./Select2";
import Calender from "./Calender";
import Guest from "./Guest";
import Search from "./Search";
import Card from "./Card";
import Expereience from "./Expereience";
import Destination from "./Destination";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/tour">TOURS</Link></li>
              <li><Link href="/destination">DESTINATION</Link></li>
              <li><Link href="/blog">BLOG</Link></li>
              <li><Link href="/pages">PAGES</Link></li>
              <li><Link href="/contract">CONTRACT</Link></li>
             
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 fw-fw-bold text-md">
          <li><Link href="/">HOME</Link></li>
              <li><Link href="/tour">TOURS</Link></li>
              <li><Link href="/destination">DESTINATION</Link></li>
              <li><Link href="/blog">BLOG</Link></li>
              <li><Link href="/pages">PAGES</Link></li>
              <li><Link href="/contract">CONTRACT</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
