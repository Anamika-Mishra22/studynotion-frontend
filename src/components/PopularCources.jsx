import React from 'react'
import img1 from '../assets/pop1.png';
import img2 from '../assets/pop2.png';
import img3 from '../assets/pop3.png';
import img4 from '../assets/pop4.jpg';
import img5 from '../assets/pop5.png';
import img6 from '../assets/pop6.png';
import img7 from '../assets/pop7.png';
import img8 from '../assets/pop8.png';
import img9 from '../assets/pop9.png';
import { useNavigate } from 'react-router-dom';

// slider settings
import { FcRating } from "react-icons/fc";


// slick slider

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const populars = [
    {
        id: 1,
        title: "Full Stack Web Development",
        img1: img1,
    },
    {
        id: 2,
        title: "Mobile App Development",
        img1: img2,
    }
    , {
        id: 3,
        title: "Data Science & Machine Learning",
        img1: img3,
    }
    , {
        id: 4,
        title: "Digital Marketing",
        img1: img4,
    }
    , {
        id: 5,
        title: "Graphic Design",
        img1: img5,
    }
    , {
        id: 6,
        title: "Cybersecurity",
        img1: img6,
    }
    , {
        id: 7,
        title: "Cloud Computing",
        img1: img7,
    }
    , {
        id: 8,
        title: "Artificial Intelligence",
        img1: img8,
    }
    , {
        id: 9,
        title: "Blockchain Technology",
        img1: img9,
    }
]
const PopularCources = () => {

     const settings1 = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500
  };

    const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    
  };

  const navigate  = useNavigate();
  const nav = () => {
    navigate('/courses');
  }
    return (
        <div className='text-white  pb-20'>
            <h1 className='text-center text-2xl font-bold'>Popular Picks for You </h1>
            <div className='  mt-10 mb-20  p-20 '>
                 <Slider {...settings}>

                {populars.map((course) => (
                    <div key={course.id} className=' h-auto '>
                        <img src={course.img1} alt="course1" className=' rounded-xl  w-full h-68 object-fill p-2 '  />
                     
                            <div className=' p-4 '>
                                <h2 className=' text-xl mb-2 '>{course.title}</h2>
                                <p>
                                    <FcRating className=' inline '/> 4.8 (1200+ ratings)
                                </p>
                              
                                <button className=' bg-blue-600 px-4 py-2 rounded-md mt-6 hover:bg-blue-700 '>Buy Now</button>
                            </div>
                        </div>  ))}
                        </Slider>



              



            </div>

                {/* top enrollments */}
                <h1 className='text-center text-2xl font-bold'>Top Enrollments </h1>
                <div className=' mt-10   mx-30'>
                    <Slider {...settings1}>
                    {populars.map((course) => (
                    <div key={course.id} className=' h-auto '>
                        <img src={course.img1} alt="course1" className=' rounded-xl  w-full h-68 object-fill p-2 '  />
                     
                            <div className=' p-4 '>
                                <h2 className=' text-xl mb-2 '>{course.title}</h2>
                                <p>
                                    <FcRating className=' inline '/> 4.8 (1200+ ratings)
                                </p>
                              
                                <button onClick={
                                    nav
                                } className=' bg-blue-600 px-4 py-2 rounded-md mt-6 hover:bg-blue-700 '>Enroll Now</button>
                            </div>
                        </div>               ))}
                    </Slider>
                </div>


        </div>
            )
}

            export default PopularCources