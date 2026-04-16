import React from 'react'
import { useSelector } from "react-redux";
const Stepper = () => {
    const step = useSelector((state) => state.courses.step);

  const steps = [
    "Course Info",
      "Publish",
  ];
  return (
    <div className="flex gap-8 mb-6 border-b border-gray-700 pb-4">
      {steps.map((label, index) => (
        <div
          key={index}
          className={`font-semibold ${
            step === index + 1
              ? "text-teal-400"
              : "text-gray-400"
          }`}
        >
          {index + 1}. {label}
        </div>
      ))}
    </div>
  )
}

export default Stepper