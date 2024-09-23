import { CircleUserRound, Sparkles } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <div className="mx-5 my-20 flex flex-col gap-14">
      <div className="flex gap-20 flex-col items-center">
        <h1 className="flex items-center gap-1 text-4xl font-bold text-violet-600 text-center">
          <span>
            <Sparkles size={20} className="" />
          </span>
          Momentry
        </h1>
        <h2 className="text-4xl font-bold text-gray-600 ">Ready to launch?</h2>
      </div>
      <div className="flex flex-col gap-8 items-center">
        <p className="text-lg font-semibold text-center text-gray-500">
          It is the best time to start your business. <br /> With our ready to
          deployable solution, you can save upto 90% cost & time.
        </p>
        <Link to="https://www.linkedin.com/in/abhishekkr-dev/" target="_blank">
          <button className="max-w-[20rem] md:max-w-xl justify-center  text-xl font-semibold px-5 py-2 bg-violet-600 hover:bg-violet-800 rounded-md flex flex-row  gap-2 text-white items-center">
            <span>
              <CircleUserRound size={20} />
            </span>
            contact us now, don't hesitate
          </button>
        </Link>
      </div>
    </div>
  );
}
