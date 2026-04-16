import React from 'react'
import { FaRocketchat } from "react-icons/fa";
import { FaGlobeAmericas } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";

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

const Contact = () => {
    return (
        <div className='bg-black'>

            <div className=' flex justify-between items-start bg-black  pt-30  pb-20 mx-32'>
                {/* left Chat */}
                <div className=' flex flex-col justify-center item-center bg-gray-900 border rounded-2xl  px-20 pt-10'>

                    <div className=' flex  flex-col justify-center items-start mb-2'>
                        <div className='flex justify-center items-center text-gray-400'>
                            <FaRocketchat className="text-gray-500 " />  
                            <h1>Chat on us</h1>
                        </div>

                        <div className=' flex flex-col text-gray-400 text-sm font-semibold'>
                            <p>Our friendly team is here to help.</p>
                            <p>info@studynotion.com</p>
                        </div>
                    </div>
                    <div className=' flex flex-col justify-center items-start  mt-10 '>
                        <div className='flex justify-center items-center text-gray-400'>
                            <FaGlobeAmericas className="text-gray-500 " />
                            <h1>Visit us</h1>
                        </div>
                        <div className=' flex flex-col text-gray-400 text-sm font-semibold '>
                            <p>123 Learning St., Knowledge City, EduState, 45678</p>
                            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        </div>

                    </div>

                    <div className=' flex flex-col justify-center items-start   mt-10 '>

                        <div className='flex justify-center items-center text-gray-400'>
                            <IoCallSharp className="text-gray-500 " />
                            <h1>Call us</h1>
                        </div>
                        <div className=' flex flex-col text-gray-400 text-sm font-semibold mb-20'>
                            <p>+1 (123) 456-7890</p>
                            <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                        </div>
                    </div>
                </div>
                {/* right form */}
                <div>
                    <form className="bg-gray-900 text-white p-8 rounded-2xl w-full max-w-2xl shadow-lg border border-gray-700">

                        <h2 className="text-3xl font-semibold mb-6 text-center">
                           Got a Idea? We've got the skills. Let's team up
                        </h2>
                        <p>Tell us more about yourself and what you're got in mind.</p>

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
    )
}

export default Contact