import React, { useEffect, useRef } from 'react'
import teacher3 from '../assets/Images/teacher3.png'
import { PiNotePencilFill } from "react-icons/pi";
import { FaStar } from "react-icons/fa";


const reviews = [
    {
        id: 1,
        name: "John Doe",
        title: "Software Engineer",
        comment: "This platform has transformed my career! The courses are top-notch and the instructors are incredibly knowledgeable.",
        DP: "JD"
    },
    {
        id: 2,
        name: "Jane Smith",
        title: "Web Developer",
        comment: "I love the flexibility of learning at my own pace. The content is engaging and easy to follow.",
        DP: "JS"
    },
    {
        id: 3,
        name: "Mike Johnson",
        title: "Data Scientist",
        comment: "The hands-on projects really helped me solidify my understanding. Highly recommend to anyone looking to upskill!",

        DP: "MJ"
    },
    {
        id: 4,
        name: "Emily Davis",
        title: "UI/UX Designer",
        comment: "The community support is fantastic. I always feel motivated to keep learning and growing my skills.",
        DP: "ED"
    }
]

const BecomeInstructor = () => {
    const scaleRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === scaleRef.current) {
                            entry.target.classList.add("animate-ImageScale");
                        }
                        entry.target.classList.remove("scroll-hidden");
                    } else {
                        // viewport se bahar jaate hi reset
                        if (entry.target === scaleRef.current) {
                            entry.target.classList.remove("animate-ImageScale");
                        }
                        entry.target.classList.add("scroll-hidden");
                    }
                });
            }
            , { threshold: 0.1 });

        if (scaleRef.current) observer.observe(scaleRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <div className=' text-white'>

            <div className=' flex justify-center items-center gap-20 p-20 mx-36 '>

                <div ref={scaleRef} className='scroll-hidden'>
                    <img src={teacher3} alt="teacher image" className='rounded-xl' />
                </div>
                <div className=' flex flex-col gap-6 w-1/2 text-white ' >
                    <h1 className='text-4xl font-semibold'>Become an <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'>Instructor</span></h1>
                    <p className='text-gray-600 font-medium'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                    <div className=' '>
                        <button className=' bg-yellow-500 px-8  py-2 rounded-md text-black text-[14px] font-semibold'>Start Teaching Today</button>

                    </div>
                </div>
            </div>


            {/* reviews */}
            <div className=' text-white  flex  justify-center items-center gap-10  mb-20 '>
                <h1 className='text-3xl font-semibold'>Reviews from other <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'>learners</span></h1>
                <PiNotePencilFill className='text-yellow-400 w-12 h-12' />
            </div>

            <div>
                {/* review cards */}
                <div className="flex justify-center items-center gap-8 mx-36  pb-20">
                    {reviews.map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-950 rounded-xl border border-gray-700 p-6 w-1/4 min-h-[320px] flex flex-col"
                        >
                            {/* Header */}
                            <div className="flex gap-2 items-center mb-2">
                                <div className="flex items-center bg-sky-950 w-10 h-10 rounded-full justify-center mr-4 p-2">
                                    <h1 className="text-white">{review.DP}</h1>
                                </div>
                                <div>
                                    <h2 className=" font-semibold">{review.name}</h2>
                                    <p className="text-gray-500 text-sm">{review.title}</p>
                                </div>
                            </div>

                            {/* Comment */}
                            <p className="mt-2 text-white">
                                {review.comment}
                            </p>

                            {/* Rating — bottom aligned */}
                            <div className="flex mt-auto">
                                <FaStar className="text-yellow-400 inline-block mr-1" />
                                <FaStar className="text-yellow-400 inline-block mr-1" />
                                <FaStar className="text-yellow-400 inline-block mr-1" />
                                <FaStar className="text-yellow-400 inline-block mr-1" />
                                <FaStar className="text-yellow-400 inline-block mr-1" />
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default BecomeInstructor