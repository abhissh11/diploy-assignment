import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDown, Hand, Menu, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const hanndleMenuClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <div className=" flex justify-between items-center py-4 px-4 md:px-8 shadow-md fixed w-screen bg-white">
        <div className="flex gap-2 items-center">
          <Menu
            size={26}
            onClick={hanndleMenuClick}
            className="md:hidden cursor-pointer"
          />
          <h1 className="flex items-center gap-2 text-xl md:text-3xl font-bold text-violet-500 font-sans">
            <span>
              <Sparkles size={20} className="" />
            </span>
            <Link to="/">Momentry</Link>
          </h1>
        </div>
        <div className="md:flex gap-8 text-md font-medium text-gray-700 hidden ">
          <Popover>
            <PopoverButton className="flex items-start text-md font-semibold  focus:outline-none data-[active]:text-violet-600 data-[hover]:text-violet-600 data-[focus]:outline-1 data-[focus]:outline-violet-500">
              Solutions{" "}
              <span>
                <ChevronDown className="pt-1" />
              </span>
            </PopoverButton>
            <PopoverPanel
              transition
              anchor="bottom"
              className="bg-violet-200 divide-y divide-white/5 rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
            >
              <div className="p-3">
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                  href="#"
                >
                  <p className="font-semibold ">Insights</p>
                  <p className="text-gray-800">
                    Measure actions your users take
                  </p>
                </a>
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                  href="#"
                >
                  <p className="font-semibold ">Automations</p>
                  <p className="text-gray-800">
                    Create your own targeted content
                  </p>
                </a>
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                  href="#"
                >
                  <p className="font-semibold">Reports</p>
                  <p className="text-gray-800">Keep track of your growth</p>
                </a>
              </div>
              <div className="p-3">
                <a
                  className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                  href="#"
                >
                  <p className="font-semibold">Documentation</p>
                  <p className="text-gray-800">
                    Start integrating products and tools
                  </p>
                </a>
              </div>
            </PopoverPanel>
          </Popover>
          <Link to="/upcoming" className="hover:text-violet-600 cursor-pointer">
            Catalog
          </Link>
          <Link to="/upcoming" className="hover:text-violet-600 cursor-pointer">
            Services
          </Link>
          <Link to="/upcoming" className="hover:text-violet-600 cursor-pointer">
            Pricing
          </Link>
          <Link to="/upcoming" className="hover:text-violet-600 cursor-pointer">
            Blogs
          </Link>
        </div>
        <div className="flex gap-4">
          <button className="px-3 md:px-5 py-1 text-center border border-gray-400 rounded-md text-md font-semibold hover:text-violet-500">
            Login
          </button>
          <button
            className="px-2 md:px-5 py-2 text-center border rounded-md bg-violet-600 text-white text-md font-semibold
        hover:bg-violet-800"
          >
            Sign Up
          </button>
        </div>
      </div>
      {showMenu && (
        <>
          <div className="flex flex-col gap-8 text-md font-medium text-gray-700 absolute top-20 bg-violet-100  w-[80%] p-8 rounded-sm h-svh">
            <Popover>
              <PopoverButton className="flex items-start text-md font-semibold  focus:outline-none data-[active]:text-violet-600 data-[hover]:text-violet-600 data-[focus]:outline-1 data-[focus]:outline-violet-500">
                Solutions{" "}
                <span>
                  <ChevronDown className="pt-1" />
                </span>
              </PopoverButton>
              <PopoverPanel
                transition
                anchor="bottom"
                className="bg-violet-200 divide-y divide-white/5 rounded-xl text-sm/6 transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0"
              >
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                    href="#"
                  >
                    <p className="font-semibold ">Insights</p>
                    <p className="text-gray-800">
                      Measure actions your users take
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                    href="#"
                  >
                    <p className="font-semibold ">Automations</p>
                    <p className="text-gray-800">
                      Create your own targeted content
                    </p>
                  </a>
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                    href="#"
                  >
                    <p className="font-semibold">Reports</p>
                    <p className="text-gray-800">Keep track of your growth</p>
                  </a>
                </div>
                <div className="p-3">
                  <a
                    className="block rounded-lg py-2 px-3 transition hover:bg-violet-400"
                    href="#"
                  >
                    <p className="font-semibold">Documentation</p>
                    <p className="text-gray-800">
                      Start integrating products and tools
                    </p>
                  </a>
                </div>
              </PopoverPanel>
            </Popover>
            <Link
              to="/upcoming"
              className="hover:text-violet-600 cursor-pointer"
            >
              Catalog
            </Link>
            <Link
              to="/upcoming"
              className="hover:text-violet-600 cursor-pointer"
            >
              Services
            </Link>
            <Link
              to="/upcoming"
              className="hover:text-violet-600 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              to="/upcoming"
              className="hover:text-violet-600 cursor-pointer"
            >
              Blogs
            </Link>
          </div>
        </>
      )}
    </>
  );
}
