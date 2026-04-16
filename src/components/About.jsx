import React from 'react'
import img1 from '../assets/Images/aboutus1.webp';
import img2 from '../assets/Images/aboutus2.webp';
import img3 from '../assets/Images/aboutus3.webp';


const About = () => {
    return (
        <div className='bg-black pb-20 text-white'>
            <div className='relative text-white bg-[#2c333f] pb-25'>
                <div className='px-20 pt-20 pb-40 text-center flex flex-col gap-6 mx-30'>
                    <h1 className='text-4xl font-semibold mx-40'>Driving Innovation in Online Education for a <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'>Better Future</span></h1>
                    <p className='text-gray-500 font-medium text-md'>Studynotion is at the forefront of driving innovation in online education. We're passionate about creating a brighter future by offering cutting-edge courses, leveraging emerging technologies, and nurturing a vibrant learning community.</p>
                </div>

                <div className=' absolute grid grid-cols-3 mx-40 gap-10 mt-10 mb-20 top-60'>
                    <img src={img1} alt="About us 1" />
                    <img src={img2} alt="About us 2" />
                    <img src={img3} alt="About us 3" />
                </div>



            </div>
            <div className='mt-40'>
                <h1 className='text-4xl mx-30 text-center font-semibold'>We are passionate about revolutionizing the way we learn. Our innovative platform <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'>combines technology</span>,
                    <span className='bg-linear-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text'>expertise</span>, and community to create an
                    <span className='bg-linear-to-r from-yellow-500 to-orange-500 text-transparent bg-clip-text'> unparalleled educational experience</span>.</h1>
            </div>

                <div className=" mt-20">
            <hr className="w-full border-b-1 border-gray-600 " />

                </div>
        </div>
    )
}

export default About