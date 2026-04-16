import React from "react";
import img from "../assets/Images/FoundingStory.png";
import { useEffect, useRef } from "react";
import { FaStar } from "react-icons/fa";
import { PiNotePencilFill } from "react-icons/pi";


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

const Story = () => {
    const leftRef = useRef(null);
    const rightRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        if (entry.target === leftRef.current) {
                            entry.target.classList.add("animate-storyInleft");
                        }

                        if (entry.target === rightRef.current) {
                            entry.target.classList.add("animate-storyInRight");
                        }

                        entry.target.classList.remove("scroll-hidden");
                    } else {
                        // viewport se bahar jaate hi reset
                        if (entry.target === leftRef.current) {
                            entry.target.classList.remove("animate-storyInleft");
                        }

                        if (entry.target === rightRef.current) {
                            entry.target.classList.remove("animate-storyInRight");
                        }

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
        <div className="bg-black text-white py-20">


            
            <div className="flex justify-between items-center gap-12 max-w-7xl mx-auto px-10">

                {/* Left text */}
                <div className="w-1/2 text-gray-400  scroll-hidden" ref={leftRef} >
                    <h1 className="bg-linear-to-r from-pink-600 via-orange-700 to-yellow-600 text-transparent bg-clip-text text-4xl p-4 font-semibold mb-2">
                        Our Founding Story
                    </h1>

                    <p className="mt-2">
                        Our e-learning platform was born out of a shared vision and passion
                        for transforming education. It all began with a group of educators,
                        technologists, and lifelong learners who recognized the need for
                        accessible, flexible, and high-quality learning opportunities in a
                        rapidly evolving digital world.
                    </p>

                    <p className="mt-12">
                        As experienced educators ourselves, we witnessed firsthand the
                        limitations and challenges of traditional education systems. We
                        believed that education should not be confined to the walls of a
                        classroom or restricted by geographical boundaries. We envisioned a
                        platform that could bridge these gaps and empower individuals from
                        all walks of life to unlock their full potential.
                    </p>
                </div>

                {/* Right image */}
                <div className="w-1/2 flex justify-center scroll-hidden" ref={rightRef}>
                    <img
                        src={img}
                        alt="Founding Story"
                        className="max-w-md w-full border border-amber-800 shadow-lg shadow-amber-800 "
                    />
                </div>

            </div>

            <div className="max-w-7xl md:mx-auto px-10 mt-40 flex gap-40  ">
                <div className=" ml-10" >

                    <h1 className='bg-linear-to-r from-blue-500 via-teal-700 to-teal-200 text-transparent bg-clip-text text-4xl font-semibold mb-2'>Our Vision</h1>
                    <p className="mt-6 text-gray-400">With this vision in mind, we set out on a journey to create an e-learning platform that would revolutionize the way people learn. Our team of dedicated experts worked tirelessly to develop a robust and intuitive platform that combines cutting-edge technology with engaging content, fostering a dynamic and interactive learning experience.</p>
                </div>
                <div>
                    <h1 className='bg-linear-to-r from-yellow-500 to-orange-700 text-transparent bg-clip-text text-4xl font-semibold mb-2'>Our Mission</h1>
                    <p className="text-gray-400 mt-6">Our mission goes beyond just delivering courses online. We wanted to create a vibrant community of learners, where individuals can connect, collaborate, and learn from one another. We believe that knowledge thrives in an environment of sharing and dialogue, and we foster this spirit of collaboration through forums, live sessions, and networking opportunities.</p>
                </div>
            </div>

            {/*  */}

            <div className=" flex justify-between items-center bg-[#2c333f] py-10 px-10  mt-20 text-center text-white">
                <div className="ml-40">
                    <h1 className="text-3xl font-semibold">5K</h1>
                    <p className="text-medium text-gray-400">Active Learners</p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">10+</h1>
                    <p className="text-medium text-gray-400">Mentors</p>
                </div>
                <div>
                    <h1 className="text-3xl font-semibold">200+</h1>
                    <p className="text-medium text-gray-400">Courses</p>
                </div>
                <div className="mr-40">
                    <h1 className="text-3xl font-semibold">50+</h1>
                    <p className="text-medium text-gray-400">Awards</p>
                </div>
            </div>


            {/* World Class Learning */}
            <div className="mt-40 mb-20 mx-auto px-6 max-w-7xl">

                <div className="grid grid-cols-1 md:grid-cols-4  auto-rows-[220px]">

                    {/* Main content block */}
                    <div className="md:col-span-2 p-10 flex flex-col justify-between ">
                        <div>
                            <h1 className="text-4xl font-bold mb-4">
                                World-Class Learning for <span className='bg-linear-to-r from-blue-500 via-teal-700 to-teal-200 text-transparent bg-clip-text'>Anyone, Anywhere</span>
                            </h1>
                            <p className="text-gray-400">
                                Studynotion partners with more than 275+ leading universities and
                                companies to bring flexible, affordable, job-relevant online learning
                                to individuals and organizations worldwide.
                            </p>
                        </div>

                        <div className="mt-6">
                            <button className="bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="bg-[#2c333f]  p-6 flex flex-col justify-center">
                        <h1 className="text-xl font-semibold mb-2">
                            Curriculum Based on Industry Needs
                        </h1>
                        <p className="text-sm text-gray-400">
                            Save time and money! The Belajar curriculum is made to be easier to
                            understand and in line with industry needs.
                        </p>
                    </div>

                    <div className="bg-[#161d29] text-gray-400  p-6 flex flex-col justify-center">
                        <h1 className="text-xl font-semibold mb-2 text-white">
                            Our Learning Methods
                        </h1>
                        <p className="text-sm">
                            Studynotion partners with more than 275+ leading universities and
                            companies to bring.
                        </p>
                    </div>

                    <div className="bg-[#2c333f] col-start-2  p-6 flex flex-col justify-center">
                        <h1 className="text-xl font-semibold mb-2 ">
                            Certification
                        </h1>
                        <p className="text-sm text-gray-400">
                            Studynotion partners with more than 275+ leading universities and
                            companies to bring.
                        </p>
                    </div>

                    <div className="bg-[#161d29] text-gray-400  p-6 flex flex-col justify-center">
                        <h1 className="text-xl font-semibold mb-2 text-white">
                            Rating "Auto-grading"
                        </h1>
                        <p className="text-sm">
                            Studynotion partners with more than 275+ leading universities and
                            companies to bring.
                        </p>
                    </div>

                    <div className="bg-[#2c333f]  p-6 flex flex-col justify-center">
                        <h1 className="text-xl font-semibold mb-2">
                            Ready to Work
                        </h1>
                        <p className="text-sm text-gray-400">
                            Studynotion partners with more than 275+ leading universities and
                            companies to bring.
                        </p>
                    </div>

                </div>

            </div>


            {/* get In touch section */}

            <div className=" flex flex-col justify-center items-center pt-20 pb-20">

                <h1 className="text-4xl text-center font-bold mb-2">Get in Touch</h1>
                <p className="text-[16px] text-gray-200 font-semibold">We'd love to here for you, Please fill out this form.</p>

                <form className=" text-white p-8 rounded-2xl w-full max-w-2xl shadow-lg  ">



                    {/* First & Last Name */}
                    <div className="flex flex-col md:flex-row gap-6 mb-4">
                        <div className="flex-1">
                            <label className="block text-sm text-gray-400 mb-1">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter first name"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>

                        <div className="flex-1">
                            <label className="block text-sm text-gray-400 mb-1">
                                Last Name
                            </label>
                            <input
                                type="text"
                                placeholder="Enter last name"
                                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        />
                    </div>

                    {/* Mobile with Country Code */}
                    <div className="mb-4">
                        <label className="block text-sm text-gray-400 mb-1">
                            Mobile Number
                        </label>
                        <div className="flex gap-3">
                            <select className="w-28 px-3 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500">
                                <option>+91</option>
                                <option>+1</option>
                                <option>+44</option>
                                <option>+61</option>
                                <option>+81</option>
                            </select>

                            <input
                                type="tel"
                                placeholder="Enter mobile number"
                                className="flex-1 px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                            />
                        </div>
                    </div>

                    {/* Description */}
                    <div className="mb-6">
                        <label className="block text-sm text-gray-400 mb-1">
                            Description
                        </label>
                        <textarea
                            rows="4"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 resize-none focus:outline-none focus:ring-2 focus:ring-yellow-500"
                        ></textarea>
                    </div>

                    {/* Send Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="bg-yellow-500 text-black px-8 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition duration-200"
                        >
                            Send Message
                        </button>
                    </div>

                </form>
            </div>

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
    );
};

export default Story;
