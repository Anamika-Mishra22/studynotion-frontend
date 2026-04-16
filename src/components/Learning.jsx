import React from 'react'
import { useState } from 'react';
import bghome from '../assets/Images/bghome.svg';
import { IoMdContacts } from "react-icons/io";
import { PiNetworkThin } from "react-icons/pi";

const tabs = [
    "Free",
    "New to coding",
    "Most popular",
    "Skills paths",
    "Career paths",
];

const cardData = {
    Free: [
        { id: 1, title: "HTML Basics", description: "Learn the fundamentals of HTML,standard markup language for creating web pages." },
        { id: 2, title: "CSS Fundamentals", description: "Understand the basics of CSS to style and the layout web pages effectively." },
        { id: 3, title: "JavaScript Intro" , description: "Get started with JavaScript, the programming  language of the web." },
    ],
    "New to coding": [
        { id: 4, title: "Programming 101" , description: "An introduction to programming concepts and logic for beginners." },
        { id: 5, title: "Beginner Python" , description: "Start your coding journey with Python, a versatile and beginner-friendly language." },
        { id: 6, title: "Coding Logic", description: "Learn the fundamentals of coding logic and problem-solving techniques." },
    ],
    "Most popular": [
        { id: 7, title: "React Mastery" , description: "Become proficient in React, a popular JavaScript library for building user interfaces." },
        { id: 8, title: "Node.js Bootcamp" ,    description: "Learn Node.js to build scalable and efficient server-side applications. it allows js to run outside the browser" },
        { id: 9, title: "Full Stack Dev" , description: "Master both frontend and backend development to become a full stack developer." },
    ],
    "Skills paths": [
        { id: 10, title: "Frontend Path" , description: "Learn the skills needed to become a frontend developer, including HTML, CSS, and JavaScript." },
        { id: 11, title: "Backend Path" , description: "Gain expertise in backend development with Node.js, databases, and server management." },
        { id: 12, title: "DevOps Path" , description: "Explore the world of DevOps and learn about CI/CD, cloud computing, and infrastructure management." },
    ],
    "Career paths": [
        { id: 13, title: "Web Developer"  , description: "Prepare for a career as a web developer by mastering essential web technologies and frameworks." },
        { id: 14, title: "Data Scientist", description: "Learn data analysis, machine learning, and statistical techniques to become a data scientist." },
        { id: 15, title: "Mobile App Dev", description: "Develop skills to create mobile applications for iOS and Android platforms. It is a rapidly growing field with high demand." },
    ],
};


const Learning = () => {
    const [activeTab, setActiveTab] = useState("Free");

    return (
        <div className='pb-0'>

            <h1 className='text-4xl text-white text-center font-bold'>Unlock the Power of Code</h1>
            <p className='text-md font-semibold pt-2 text-gray-500 text-center'>Learn to Build Anything You Can Imagine</p>

            {/* <div className='flex justify-center gap-8 bg-gray-800 py-2 rounded-full mt-10 mb-20 mx-100  text-gray-400 '>
            <button className='hover:bg-gray-900  hover:rounded-3xl hover:px-4 px-4 hover:text-white'> free</button>
            <button className='hover:bg-gray-900  hover:rounded-3xl py-1 px-2 hover:text-white'>New To Coding</button>
            <button className='hover:bg-gray-900  hover:rounded-3xl py-1  px-2 hover:text-white'>Most Popular</button>
            <button className='hover:bg-gray-900  hover:rounded-3xl py-1 px-2 hover:text-white'>Skills Path</button>
            <button className='hover:bg-gray-900  hover:rounded-3xl py-1 px-2 hover:text-white'>Career Path</button>
        </div> */}


            <div className="flex gap-4 justify-center  bg-gray-800 py-2 rounded-full  mt-10 mb-40 mx-100  text-gray-400">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-5 py-2 rounded-full font-semibold transition
        ${activeTab === tab
                                ? "bg-gray-900 text-white"
                                : ""
                            }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            
             <div className=" relative w-full h-100 mt-30  bg-repeat  bg-white"
                    style={{
                        backgroundImage: `url(${bghome})`,

                    }} >
                <div className="flex gap-6 mt-10   absolute top-[-120px] left-1/2 -translate-x-1/2 z-20">
                    {cardData[activeTab].map((card, index) => (
                        <div
                            key={card.id}
                            className={` p-6 shadow-lg w-80 h-80
                             ${index === 0 ? "bg-white text-black" : "bg-gray-800 text-white"} 
                            `}
                        >
                            <h3 className="text-lg font-bold">
                                {card.title}
                            </h3>
                            <p className="mb-4 text-sm text-gray-400 mt-2">{card.description}</p>


                            <p className='mt-25 text-gray-400'>------------------------------------------</p>
                            <div className=' flex justify-between items-center mt-4'>
                                <div className=' flex  items-center mt-4 text-sm'>
                                    <span className='w-5 h-5 '><IoMdContacts /></span>
                                    <span className='font-bold  '> Beginner</span>
                                </div>
                                <div className='flex items-center mt-4'>
                                    <span className='w-5 h-5'> <PiNetworkThin /></span>
                                    <span className='font-bold  '> 6 Lession</span>
                                </div>
                            </div>

                        </div>
                    ))}
                    
                </div>

                <div className=' flex justify-around  gap-8 mt-10 absolute top-[240px] left-1/2 -translate-x-1/2 z-20'>
                    <button className=' bg-yellow-500 px-8 py-3 rounded-xl text-black text-[14px] font-semibold'>Explore All Catalog </button>
                    <button className='bg-gray-700 rounded-xl text-white text-[14px] px-8 py-3 font-semibold'>Learn More</button>
                </div>

                
            </div>

        </div>
    )
}

export default Learning