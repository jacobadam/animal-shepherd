"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/Button";
import { LanguageSwitcher } from "../components/LangToggle";

interface NavBarProps {
  links: { label: string; href: string }[];
}

export const NavBar = ({ links }: NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-secondary fixed w-full z-30 top-0 left-0 border-b border-secondary-dark h-16">
      <div className="max-w-7xl grid grid-cols-2 lg:grid-cols-3 items-center h-full mx-auto px-4 xl:px-0">
        <Link
          href="/"
          className="flex items-center justify-start"
          onClick={closeMenu}
        >
          <div className="flex items-center h-full">
            <div className="relative h-10 w-10">
              <Image
                src="/animal-shepherd-logo.jpg"
                fill
                priority
                alt="Logo Nav"
                className="rounded-sm"
              />
            </div>
          </div>
        </Link>

        <nav className="hidden lg:flex justify-center">
          <ul className="flex items-center gap-6 font-medium">
            {links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="text-primary font-semibold whitespace-nowrap hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end md:gap-4">
          <LanguageSwitcher />
          <div className="hidden md:block">
            <Button variant="primary" href="/donate">
              Donate
            </Button>
          </div>

          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-primary rounded-lg lg:hidden hover:bg-secondary-dark focus:outline-none transition-colors"
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`fixed inset-0 top-16 bg-secondary z-20 lg:hidden transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col h-full p-6">
          <ul className="flex flex-col gap-6 text-xl font-semibold text-primary">
            {links.map((link) => (
              <li
                key={link.label}
                className="border-b border-secondary-dark/20 pb-4"
              >
                <Link
                  href={link.href}
                  onClick={closeMenu}
                  className="block w-full"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-auto pb-10 space-y-4">
            <Button
              variant="primary"
              href="/donate"
              className="w-full py-4"
              onClick={closeMenu}
            >
              Donate Now
            </Button>
            <p className="text-primary/60 text-center text-sm italic">
              Every life is precious.
            </p>
          </div>
        </nav>
      </div>
    </header>
  );
};
