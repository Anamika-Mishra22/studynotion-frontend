import React, { useRef, useEffect } from "react";

import img1 from "../assets/TimeLineLogo/Logo1.svg";
import img2 from "../assets/TimeLineLogo/Logo2.svg";
import img3 from "../assets/TimeLineLogo/Logo3.svg";
import img4 from "../assets/TimeLineLogo/Logo4.svg";

import timeline from "../assets/Images/TimelineImage.png";
import compareImg from "../assets/Images/Compare_with_others.png";
import planImg from "../assets/Images/Plan_your_lessons.png";
import knowImg from "../assets/Images/Know_your_progress.png";

const Skills = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-hidden");
          } else {
            entry.target.classList.add("scroll-hidden");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (leftRef.current) observer.observe(leftRef.current);
    if (rightRef.current) observer.observe(rightRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-white pb-20 px-4 md:px-20">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mt-20">

        <div className="md:w-1/2">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Get the Skills you need for a{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
              Job that is in demand
            </span>
          </h1>
        </div>

        <div className="md:w-1/2">
          <p className="text-gray-700 mb-6 text-sm md:text-base">
            The modern StudyNotion dictates its own terms. Today, to be competitive requires more than skills.
          </p>

          <button className="bg-yellow-500 px-6 py-2 rounded-xl text-black text-sm font-semibold">
            Learn More
          </button>
        </div>

      </div>

      {/* MIDDLE SECTION */}
      <div className="flex flex-col md:flex-row gap-10 mt-16 items-center">

        {/* LEFT */}
        <div ref={leftRef} className="w-full md:w-1/2 space-y-6">

          {[img1, img2, img3, img4].map((img, i) => {
            const titles = [
              "Leadership",
              "Responsibility",
              "Flexibility",
              "Problem Solving",
            ];

            const desc = [
              "Fully committed to success",
              "Students are our priority",
              "Ability to adapt quickly",
              "Code your way to solution",
            ];

            return (
              <div key={i} className="flex items-center gap-4">

                <img
                  src={img}
                  className="bg-cyan-950 rounded-full w-12 h-12 p-2"
                  alt=""
                />

                <div>
                  <h1 className="text-black font-bold">{titles[i]}</h1>
                  <p className="text-gray-600 text-sm">{desc[i]}</p>
                </div>

              </div>
            );
          })}

        </div>

        {/* RIGHT */}
        <div ref={rightRef} className="w-full md:w-1/2 flex justify-center">
          <img src={timeline} className="w-full max-w-md" alt="" />
        </div>

      </div>

      {/* BOTTOM SECTION */}
      <div className="mt-20 text-center">

        <h1 className="text-2xl md:text-4xl font-bold">
          Your Swiss Knife for{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
            learning any language
          </span>
        </h1>

        <p className="mt-3 text-gray-700 text-sm md:text-base max-w-2xl mx-auto">
          Using StudyNotion makes learning multiple languages easy with 20+ languages,
          voice-over, progress tracking and more.
        </p>

      </div>

      {/* IMAGE STACK (FIXED RESPONSIVE) */}
      <div className="relative flex justify-center items-center mt-16 h-[300px] md:h-[400px]">

        <img
          src={knowImg}
          className="absolute w-40 md:w-64 left-2 md:left-20 top-10"
          alt=""
        />

        <img
          src={compareImg}
          className="absolute w-44 md:w-72 z-10"
          alt=""
        />

        <img
          src={planImg}
          className="absolute w-40 md:w-64 right-2 md:right-20 top-10"
          alt=""
        />

      </div>

      <div className="text-center mt-10">
        <button className="bg-yellow-500 px-6 py-2 rounded-xl text-black text-sm font-semibold">
          Learn More
        </button>
      </div>

    </div>
  );
};

export default Skills;