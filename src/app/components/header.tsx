import React from "react";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { Home, HardDrive, List, Map, Tool, Mail } from "react-feather";

export default function Header() {
  return (
    <>
      <Head>
        <title>Next.js Page with Tailwind CSS Navigation Bar</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className="bg-[#f13232] text-right bg-opacity-90 text-white px-8 sticky top-0 left-0 right-0 shadow-lg flex items-center justify-between h-40">
        <div className="text-lg font-bold">
          <Image
            src="/Images/logo.svg"
            alt="Pic2"
            width={0}
            height={0}
            className="logo-image"
          />
        </div>
        <nav className="flex items-center  h-full">
          <ul className="flex">
            <li className="group">
              <Link
                href="/"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-60 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-black"
              >
                <Home />
                <span>Home</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/about"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-60 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-black"
              >
                <HardDrive />
                <span>About us</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/services"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-60 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-black"
              >
                <List />
                <span>Services & MOT</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/projects"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-60 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-black"
              >
                <Map />
                <span>Garage Locator</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/prices"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-60 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-black"
              >
                <Tool />
                <span>Breakdown cover</span>
              </Link>
            </li>
            <li className="group">
              <Link
                href="/contact"
                className="flex flex-col gap-1.5 items-center justify-center h-14 w-60 text-white uppercase transition-all duration-500 ease-in-out no-underline hover:text-black"
              >
                <Mail />
                <span>News & Advice</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
