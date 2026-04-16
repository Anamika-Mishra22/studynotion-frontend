import React, { useRef, useEffect } from 'react'
import img1 from '../assets/TimeLineLogo/Logo1.svg'
import img2 from '../assets/TimeLineLogo/Logo2.svg'
import img3 from '../assets/TimeLineLogo/Logo3.svg'
import img4 from '../assets/TimeLineLogo/Logo4.svg'
import timeline from '../assets/Images/TimelineImage.png'
import compareImg from '../assets/Images/Compare_with_others.png'
import planTmg from '../assets/Images/Plan_your_lessons.png'
import KnowImg from '../assets/Images/Know_your_progress.png'

const Skills = () => {


   const leftRef = useRef(null);
const rightRef = useRef(null);

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === leftRef.current) {
            entry.target.classList.add("animate-slideInleft");
          }

          if (entry.target === rightRef.current) {
            entry.target.classList.add("animate-slideInRight");
          }

          entry.target.classList.remove("scroll-hidden");
        } else {
          // viewport se bahar jaate hi reset
          if (entry.target === leftRef.current) {
            entry.target.classList.remove("animate-slideInleft");
          }

          if (entry.target === rightRef.current) {
            entry.target.classList.remove("animate-slideInRight");
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
    <div className='bg-white  pb-110'>
        {/* top */}
        <div className=' flex justify-between item-center '>
            <div className=' mt-40 ml-40 w-1/2 '>
                <h1 className='text-4xl font-semibold'>Get the Skills you need for a <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'>Job that is in demand</span></h1>

            </div>
            <div className=' mt-40 mr-40 w-1/2 '>
                <p className='text-md text-black mb-10'>The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.</p>
                <button className='bg-yellow-500 px-8 py-3 rounded-xl text-black text-[14px] font-semibold'>Learn More</button>
            </div>
        </div>


        {/* bottom */}

        <div className=' flex justify-between items-center gap-40  mt-10  mb-20 mx-40 '>

            {/* left */}
            <div ref={leftRef} className='scroll-hidden w-1/2 flex flex-col  '>
            <div className='flex items-center mb-2'>
                <img className='bg-cyan-950 rounded-full w-14 h-14 p-3' src={img1} alt="" />
                <div className='ml-4 flex flex-col text-black'>
                    <h1 className='textblack text-[18px] font-bold '>Leadership</h1>
                    <p className='text-gray-900 text-semibold '>Fully committed to the success company</p>
                </div>
                
            </div>
             <div className='flex items-center mb-2'>
                <img className='bg-cyan-950 rounded-full w-14 h-14 p-3' src={img2} alt="" />
                <div className='ml-4 flex flex-col text-black'>
                    <h1 className='textblack text-[18px] font-bold '>Responsibility</h1>
                    <p className='text-gray-900 text-semibold '>Students will always be our top priority</p>
                </div>
                
            </div>
             <div className='flex items-center mb-2'>
                <img className='bg-cyan-950 rounded-full w-14 h-14 p-3' src={img3} alt="" />
                <div className='ml-4 flex flex-col text-black'>
                    <h1 className='textblack text-[18px] font-bold '>Flexibility</h1>
                    <p className='text-gray-900 text-semibold '>The ability to switch is an important skills</p>
                </div>
                
            </div>
             <div className='flex items-center mb-2'>
                <img className='bg-cyan-950 rounded-full w-14 h-14 p-3' src={img4} alt="" />
                <div className='ml-4 flex flex-col text-black'>
                    <h1 className='textblack text-[18px] font-bold '>Solve the problem</h1>
                    <p className='text-gray-900 text-semibold '>Code your way to a solution</p>
                </div>
                
            </div>
             
            </div>

            {/* right */}
            <div ref={rightRef} className='scroll-hidden '>
               <img className='xl:w-150' src={timeline} alt="" /> 
            </div>

        </div>



        {/* Your Swiss Knife for learning any language */}
        <div className=' flex  flex-col items-center justify-center'>
                <h1 className='text-4xl font-bold font-stretch-normal'>Your Swiss Knife for <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'>learning any language</span></h1>
                <p className='wrap-break-word mr-90 ml-90 text-center mt-2 text-gray-800'> Using spin making learning multiple languages easy. with 20+ languages realistic voice-over, progress tracking, custom schedule and more.</p>
            </div>


            <div className=' relative flex justify-center items-center gap-10 mt-10 pb-50  '>
               
                <img className='absolute z-0  left-50 top-15'  src={KnowImg} alt="" />
                 <img className='absolute z-10 top-0' src={compareImg} alt="" />
                <img className='absolute z-20 top-5 right-40' src={planTmg} alt="" />
            <button className='bg-yellow-500 px-8 py-3 rounded-xl text-black text-[14px] font-semibold top-141 absolute' >Learn More</button>
            

            </div>



            
    </div>
  )
}

export default Skills