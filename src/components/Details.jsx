import React from 'react'

import { useState, useEffect } from 'react';
import bghome from '../assets/Images/bghome.svg'

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
    const speed = 50; // typing speed per char
    const delay = 800; // delay between lines

    const [currentChar, setCurrentChar] = useState("");
    const [lineIndex, setLineIndex] = useState(0);
    const [visibleLines, setVisibleLines] = useState([]);

    useEffect(() => {
        let charIndex = 0;

        if (lineIndex >= lines.length) {
            // Restart after finishing all lines
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

                setVisibleLines((prev) => [
                    ...prev,
                    lines[lineIndex],
                ]);

                setCurrentChar("");

                setTimeout(() => {
                    setLineIndex((prev) => prev + 1);
                }, delay);
            }
        }, speed);

        return () => clearInterval(interval);
    }, [lineIndex]);

    return (
        <div className=' flex justify-between gap-8 mt-5 text-white mx-40 pb-30'>
            <div className='flex flex-col w-1/2 justify-center items-start mr-10 '>

                <h1 className='text-4xl font-bold break-words'>Unlock Your
                    <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'> coding potential</span> with our online courses</h1>
                <p className='mb-4  break-words mt-2 text-gray-600 font-semibold'>Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you.</p>
                <div className=' flex justify-around  gap-8 mt-10'>
                    <button className=' bg-yellow-500 px-6 py-2 rounded-xl text-black text-[14px] font-semibold'>try it yourself </button>
                    <button className='bg-gray-700 rounded-xl text-white text-[14px] px-6 py-2 font-semibold'>Learn More</button>
                </div>

            </div>


            <div className="relative w-1/2 h-75 border border-white/10 rounded-2xl pl-4 pt-5   overflow-hidden font-mono ml-20">

                {/* Blurred gradient background */}
                <div style={{
                    background: 'radial-gradient(circle at top left, purple, brown, orange, black)',
                    filter: 'blur(10px)',
                }} className="absolute inset-0  w-100 h-60 rounded-full shadow-xl shadow-amber-300 opacity-10 pt-6 ml-10  " />

                {/* Glass code card */}
                <pre className=" relative z-10 -4 w-140 h-full  text-white   font-mono whitespace-pre-wrap">
                  
                        {lines.map((line, index) => (
                            <div key={index} className="flex">

                                {/* Fixed S.No column */}
                                <span className="w-8 text-gray-500 select-none">
                                    {index + 1}.
                                </span>

                                {/* Code typing area */}
                                <span>
                                    {visibleLines[index] ||
                                        (index === lineIndex ? currentChar : "")}
                                </span>

                            </div>
                        ))}

                        <span className="animate-pulse text-white"></span>


                    </pre>

            </div>

        </div>

    )
}

export default Details



