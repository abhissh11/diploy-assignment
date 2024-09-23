import React from "react";
import startupImg from "../assets/startups.gif";

export default function Cta() {
  return (
    <div className="mx-5 md:mx-20 my-20 md:my-5 flex flex-col md:flex-row gap-10 items-center justify-center">
      <div className="flex gap-12 flex-col">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl md:text-5xl font-bold text-center md:text-start leading-normal">
            Build your own Startup <br /> with momentry.
          </h1>
          <p className="text-md text-center font-semibold text-gray-700">
            It is an era of technology & we are here to become your partner.
          </p>
        </div>
        <div className="flex flex-row gap-5 items-center justify-center">
          <h2 className="text-4xl font-bold text-violet-600 text-center md:text-start">
            50+{" "}
            <span className="text-2xl font-bold text-gray-700">Team Size</span>
          </h2>
          <h2 className="text-4xl font-bold text-violet-600 text-start">
            10+{" "}
            <span className="text-2xl text-gray-700">Years of Experience</span>
          </h2>
        </div>
      </div>
      <div className="">
        <img src={startupImg} alt="start-up Img" />
      </div>
    </div>
  );
}
