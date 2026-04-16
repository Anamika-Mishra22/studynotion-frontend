import React, { useState, useEffect } from "react";
import bghome from "../assets/Images/bghome.svg";

const Details = () => {
  const lines = [
    "<!DOCTYPE html>",
    "<html>",
    "  <head>",
    "    <title>My Page</title>",
    "  </head>",
    "  <body>",
    "   <h1>Welcome to My Page</h1>",
    "    <h1>Hello World</h1>",
    "    <p>This is a sample HTML code .</p>",
    "  </body>",
    "</html>",
  ];

  const speed = 50;
  const delay = 800;

  const [currentChar, setCurrentChar] = useState("");
  const [lineIndex, setLineIndex] = useState(0);
  const [visibleLines, setVisibleLines] = useState([]);

  useEffect(() => {
    let charIndex = 0;

    if (lineIndex >= lines.length) {
      setTimeout(() => {
        setVisibleLines([]);
        setLineIndex(0);
        setCurrentChar("");
      }, 1500);
      return;
    }

    const interval = setInterval(() => {
      if (charIndex < lines[lineIndex].length) {
        setCurrentChar((prev) => prev + lines[lineIndex].charAt(charIndex));
        charIndex++;
      } else {
        clearInterval(interval);

        setVisibleLines((prev) => [...prev, lines[lineIndex]]);
        setCurrentChar("");

        setTimeout(() => {
          setLineIndex((prev) => prev + 1);
        }, delay);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-8 mt-10 text-white px-4 md:px-20 pb-20">

      {/* LEFT SECTION */}
      <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
        <h1 className="text-2xl md:text-4xl font-bold">
          Unlock Your{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
            coding potential
          </span>{" "}
          with our online courses
        </h1>

        <p className="mt-3 text-gray-400 text-sm md:text-base">
          Our courses are designed and taught by industry experts who have years
          of experience in coding and are passionate about sharing their knowledge.
        </p>

        <div className="flex flex-col md:flex-row gap-4 mt-8">
          <button className="bg-yellow-500 px-6 py-2 rounded-xl text-black text-sm font-semibold">
            Try it yourself
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded-xl text-white text-sm font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="w-full md:w-1/2 relative border border-white/10 rounded-2xl p-4 overflow-hidden font-mono">

        {/* background glow */}
        <div
          className="absolute inset-0 opacity-10 blur-2xl"
          style={{
            background:
              "radial-gradient(circle at top left, purple, brown, orange, black)",
          }}
        />

        {/* code box */}
        <pre className="relative z-10 text-white whitespace-pre-wrap text-sm">

          {lines.map((line, index) => (
            <div key={index} className="flex">
              <span className="w-6 text-gray-500 select-none">
                {index + 1}.
              </span>

              <span>
                {visibleLines[index] ||
                  (index === lineIndex ? currentChar : "")}
              </span>
            </div>
          ))}

        </pre>
      </div>
    </div>
  );
};

export default Details;