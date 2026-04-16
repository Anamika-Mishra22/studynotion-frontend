import React, { useEffect, useRef } from "react";
import teacher3 from "../assets/Images/teacher3.png";
import { PiNotePencilFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    title: "Software Engineer",
    comment:
      "This platform has transformed my career! The courses are top-notch and the instructors are incredibly knowledgeable.",
    DP: "JD",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Web Developer",
    comment:
      "I love the flexibility of learning at my own pace. The content is engaging and easy to follow.",
    DP: "JS",
  },
  {
    id: 3,
    name: "Mike Johnson",
    title: "Data Scientist",
    comment:
      "The hands-on projects really helped me solidify my understanding. Highly recommend to anyone looking to upskill!",
    DP: "MJ",
  },
  {
    id: 4,
    name: "Emily Davis",
    title: "UI/UX Designer",
    comment:
      "The community support is fantastic. I always feel motivated to keep learning and growing my skills.",
    DP: "ED",
  },
];

const BecomeInstructor = () => {
  const scaleRef = useRef(null);

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

    if (scaleRef.current) observer.observe(scaleRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="text-white px-4 md:px-20">

      {/* TOP SECTION */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 md:gap-20 py-16">

        {/* IMAGE */}
        <div ref={scaleRef} className="w-full md:w-1/2 flex justify-center">
          <img
            src={teacher3}
            alt="teacher"
            className="rounded-xl w-full max-w-sm md:max-w-md"
          />
        </div>

        {/* TEXT */}
        <div className="w-full md:w-1/2 flex flex-col gap-6">
          <h1 className="text-2xl md:text-4xl font-semibold">
            Become an{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
              Instructor
            </span>
          </h1>

          <p className="text-gray-400 text-sm md:text-base">
            Instructors from around the world teach millions of students on StudyNotion.
            We provide tools and skills to teach what you love.
          </p>

          <button className="bg-yellow-500 px-6 py-2 rounded-md text-black text-sm font-semibold w-fit">
            Start Teaching Today
          </button>
        </div>
      </div>

      {/* REVIEWS TITLE */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-3 text-center mb-10">
        <h1 className="text-xl md:text-3xl font-semibold">
          Reviews from other{" "}
          <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
            learners
          </span>
        </h1>
        <PiNotePencilFill className="text-yellow-400 w-10 h-10" />
      </div>

      {/* REVIEW CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pb-20">

        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-gray-950 border border-gray-700 rounded-xl p-6 flex flex-col min-h-[300px]"
          >
            {/* HEADER */}
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-sky-950 w-10 h-10 rounded-full flex items-center justify-center">
                <h1>{review.DP}</h1>
              </div>

              <div>
                <h2 className="font-semibold">{review.name}</h2>
                <p className="text-gray-500 text-sm">{review.title}</p>
              </div>
            </div>

            {/* COMMENT */}
            <p className="text-gray-300 text-sm flex-1">
              {review.comment}
            </p>

            {/* STARS */}
            <div className="flex mt-4">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-yellow-400 mr-1" />
              ))}
            </div>
          </div>
        ))}

      </div>

    </div>
  );
};

export default BecomeInstructor;