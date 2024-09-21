import { Popover, PopoverButton, PopoverPanel } from "@headlessui/react";
import { ChevronDown, Sparkles } from "lucide-react";
import React from "react";

export default function Header() {
  return (
    <div className="flex justify-between items-center py-4 px-8 shadow-md">
      <div className="">
        <h1 className="flex items-center gap-2 text-3xl font-bold text-violet-500 font-mono">
          <span>
            <Sparkles size={20} className="" />
          </span>
          Momentry
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
                <p className="text-gray-800">Measure actions your users take</p>
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
        <h2>Catalog</h2>
        <h2>Services</h2>
        <h2>Pricing</h2>
        <h2>Blogs</h2>
      </div>
      <div className="flex gap-4">
        <button className="px-5 py-1 text-center border border-gray-400 rounded-md text-md font-semibold hover:text-violet-500">
          Login
        </button>
        <button
          className="px-5 py-2 text-center border rounded-md bg-violet-600 text-white text-md font-semibold
        hover:bg-violet-800"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}
