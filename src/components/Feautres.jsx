import {
  CircleFadingArrowUp,
  Computer,
  Cpu,
  Layers3,
  LockKeyhole,
  Ratio,
} from "lucide-react";
import React from "react";

const features = [
  {
    id: 1,
    feature_name: "Real-time Collaboration",
    description:
      "Work together with team members in real-time on shared documents.",
    icon: <LockKeyhole size={48} />, // Icon component
  },
  {
    id: 2,
    feature_name: "Tech Support",
    description:
      "Dedicated tech support to resolve issues and keep your systems running smoothly.",
    icon: <Cpu size={48} />,
  },
  {
    id: 3,
    feature_name: "100% Code Access",
    description:
      "Full access to the codebase, giving you complete control for customization with no restrictions.",
    icon: <Computer size={48} />,
  },
  {
    id: 4,
    feature_name: "Lifetime Updates",
    description:
      "Enjoy lifetime free updates, ensuring your software stays current and optimized.",
    icon: <CircleFadingArrowUp size={48} />,
  },
  {
    id: 5,
    feature_name: "Responsive Designs",
    description:
      "UI/UX is crucial for success in the app industry, and we ensure it stays up-to-date with current trends.",
    icon: <Ratio size={48} />,
  },
  {
    id: 6,
    feature_name: "No coding Requires",
    description:
      "Empower Your User’s Digital Experience with Our Cross-Platform App Excellence.",
    icon: <Layers3 size={48} />,
  },
];

export default function Features() {
  return (
    <div className="my-10 mx-5">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-normal">
          Next-generation <br />
          applications
        </h1>
        <p className="text-md text-gray-700 font-semibold">
          Design better and spend less time without restricting creative
          freedom. Combine layouts, customize everything.
        </p>
      </div>
      <div className="my-20 flex flex-wrap justify-center gap-10">
        {features.map((feat) => (
          <div
            key={feat.id}
            className="flex flex-col gap-6 bg-gray-100 items-center justify-center w-80 p-10 
            shadow-md rounded-lg cursor-auto hover:shadow-xl hover:translate-y-1 transition-all delay-75"
          >
            <div className=" text-violet-600">{feat.icon}</div>
            <div className="flex flex-col gap-4 items-center">
              <h1 className="text-3xl font-bold text-center">
                {feat.feature_name}
              </h1>
              <p className="text-md font-semibold text-gray-700 text-center">
                {feat.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
