import React from "react";

export default function Footer() {
  return (
    <div className="mx-5 my-6 flex gap-10 flex-col bg-violet-100 p-2 rounded-lg bg-gradient-to-tr from-white to-violet-400">
      <div className="flex items-center gap-10 justify-center text-lg font-semibold text-gray-500">
        <h3>terms of use</h3>
        <h3>privacy</h3>
        <h3>support</h3>
      </div>
      <div>
        <h1 className="flex flex-wrap items-center gap-1 text-xl font-thin justify-center text-gray-600">
          Copyright ©{" "}
          <span className="text-violet-600 font-semibold border-b-2 border-yellow-500">
            momentry
          </span>{" "}
          All rights reserved.
        </h1>
      </div>
    </div>
  );
}
