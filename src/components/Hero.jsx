import { Check } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <div className="mx-5 md:mx-20 flex flex-col  md:flex-row md:justify-between justify-center items-center h-svh">
      <div className="">
        <h1 className="md:text-5xl text-3xl leading-normal font-bold">
          Start Building Powerful <br /> Websites & Applications.
        </h1>
        <p className="mt-4 text-sm text-gray-600 ">
          With our ready to launch apps, you can start your business now.
        </p>
        <div className="my-10">
          <h2 className="flex items-center gap-4 text-md font-semibold text-gray-700">
            <span>
              <Check size={32} className="text-violet-600 font-bold" />
            </span>
            Secure platform with Tech Supports{" "}
          </h2>
          <h2 className="flex items-center gap-4 text-md font-semibold text-gray-700">
            <span>
              <Check size={32} className="text-violet-600 font-bold" />
            </span>
            Lifetime Updates{" "}
          </h2>
          <h2 className="flex items-center gap-4 text-md font-semibold text-gray-700">
            <span>
              <Check size={32} className="text-violet-600 font-bold" />
            </span>
            100% Code Access
          </h2>
        </div>
      </div>
      <div className="">
        <h1>Image section</h1>
      </div>
    </div>
  );
}
