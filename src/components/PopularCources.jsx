import React from "react";
import { useNavigate } from "react-router-dom";
import { FcRating } from "react-icons/fc";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import img1 from "../assets/pop1.png";
import img2 from "../assets/pop2.png";
import img3 from "../assets/pop3.png";
import img4 from "../assets/pop4.jpg";
import img5 from "../assets/pop5.png";
import img6 from "../assets/pop6.png";
import img7 from "../assets/pop7.png";
import img8 from "../assets/pop8.png";
import img9 from "../assets/pop9.png";

const populars = [
  { id: 1, title: "Full Stack Web Development", img1 },
  { id: 2, title: "Mobile App Development", img1: img2 },
  { id: 3, title: "Data Science & Machine Learning", img1: img3 },
  { id: 4, title: "Digital Marketing", img1: img4 },
  { id: 5, title: "Graphic Design", img1: img5 },
  { id: 6, title: "Cybersecurity", img1: img6 },
  { id: 7, title: "Cloud Computing", img1: img7 },
  { id: 8, title: "Artificial Intelligence", img1: img8 },
  { id: 9, title: "Blockchain Technology", img1: img9 },
];

const PopularCources = () => {
  const navigate = useNavigate();

  const settingsMain = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const settingsTop = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 800,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="text-white pb-20 px-4 md:px-20">

      {/* TITLE */}
      <h1 className="text-center text-xl md:text-2xl font-bold">
        Popular Picks for You
      </h1>

      {/* SLIDER 1 */}
      <div className="mt-10 mb-20">
        <Slider {...settingsMain}>
          {populars.map((course) => (
            <div key={course.id} className="p-2">
              <div className="bg-gray-900 rounded-xl overflow-hidden">

                <img
                  src={course.img1}
                  alt="course"
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {course.title}
                  </h2>

                  <p className="text-sm text-gray-300">
                    <FcRating className="inline" /> 4.8 (1200+ ratings)
                  </p>

                  <button className="bg-blue-600 px-4 py-2 rounded-md mt-4 text-sm hover:bg-blue-700">
                    Buy Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* TITLE 2 */}
      <h1 className="text-center text-xl md:text-2xl font-bold">
        Top Enrollments
      </h1>

      {/* SLIDER 2 */}
      <div className="mt-10">
        <Slider {...settingsTop}>
          {populars.map((course) => (
            <div key={course.id} className="p-2">
              <div className="bg-gray-900 rounded-xl overflow-hidden">

                <img
                  src={course.img1}
                  alt="course"
                  className="w-full h-52 object-cover"
                />

                <div className="p-4">
                  <h2 className="text-lg font-semibold mb-2">
                    {course.title}
                  </h2>

                  <p className="text-sm text-gray-300">
                    <FcRating className="inline" /> 4.8 (1200+ ratings)
                  </p>

                  <button
                    onClick={() => navigate("/courses")}
                    className="bg-blue-600 px-4 py-2 rounded-md mt-4 text-sm hover:bg-blue-700"
                  >
                    Enroll Now
                  </button>
                </div>

              </div>
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default PopularCources;