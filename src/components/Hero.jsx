import React from "react";
import img1 from "../assets/Images/random-image/codingbg8.jpeg";
import img2 from "../assets/Images/random-image/codingbg9.jpg";
import img3 from "../assets/Images/random-image/codingbg10.jpg";
import img4 from "../assets/Images/random-image/codingbg11.jpg";
import img5 from "../assets/Images/random-image/codingbg1.jpg";
import img6 from "../assets/Images/random-image/codingbg2.jpg";
import img7 from "../assets/Images/random-image/codingbg3.jpg";
import img8 from "../assets/Images/random-image/codingbg4.jpg";
import img9 from "../assets/Images/random-image/codingbg5.jpg";
import img10 from "../assets/Images/random-image/codingbg6.jpeg";
import img11 from "../assets/Images/random-image/codingbg7.jpg";

const backgroundImages = [
  img1, img2, img3, img4, img5, img6,
  img7, img8, img9, img10, img11
];

const Hero = () => {
  const [bgImage, setBgImage] = React.useState(backgroundImages[0]);

  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              entry.target === leftRef.current
                ? "animate-leftText"
                : "animate-rightText"
            );
            entry.target.classList.remove("scroll-hidden");
          } else {
            entry.target.classList.remove(
              "animate-leftText",
              "animate-rightText"
            );
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

  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBgImage(backgroundImages[randomIndex]);
  }, []);

  return (
    <div
      className="relative text-white flex flex-col gap-6 justify-center items-center min-h-[500px] md:h-[700px] bg-black text-center px-4 md:px-20 mt-0 md:-mt-24"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* content */}
      <div className="relative z-10 flex flex-col gap-6 justify-center items-center">

        <div ref={leftRef} className="scroll-hidden">
          <h1 className="text-2xl md:text-5xl font-bold">
            Welcome to{" "}
            <span className="bg-gradient-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text">
              Our platform
            </span>
          </h1>
        </div>

        <div ref={rightRef} className="scroll-hidden">
          <p className="text-lg md:text-3xl font-semibold">
            Learn new skills and advance your career with our expert-led courses.
          </p>

          <p className="px-2 md:px-30 text-sm md:text-base">
            With our online coding courses, you can learn at your own pace, from anywhere in the world,
            and get access to hands-on projects, quizzes, and personalized feedback from instructors.
          </p>
        </div>

        {/* buttons */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-4">
          <button className="bg-yellow-500 px-6 py-2 rounded-xl text-black text-sm font-semibold">
            Learn More
          </button>
          <button className="bg-gray-700 px-6 py-2 rounded-xl text-white text-sm font-semibold">
            Get Started
          </button>
        </div>

      </div>
    </div>
  );
};

export default Hero;