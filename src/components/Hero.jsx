import React from 'react'
import img1 from '../assets/Images/random-image/codingbg8.jpeg'
import img2 from '../assets/Images/random-image/codingbg9.jpg'
import img3 from '../assets/Images/random-image/codingbg10.jpg'
import img4 from '../assets/Images/random-image/codingbg11.jpg'
import img5 from '../assets/Images/random-image/codingbg1.jpg'
import img6 from '../assets/Images/random-image/codingbg2.jpg'
import img7 from '../assets/Images/random-image/codingbg3.jpg'
import img8 from '../assets/Images/random-image/codingbg4.jpg'
import img9 from '../assets/Images/random-image/codingbg5.jpg'
import img10 from '../assets/Images/random-image/codingbg6.jpeg'
import img11 from '../assets/Images/random-image/codingbg7.jpg'

const backgroundImages = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11];



const Hero = () => {
  // Select a random image from the array
  const [bgImage, setBgImage] = React.useState(backgroundImages[0]);

  const leftRef = React.useRef(null);
  const rightRef = React.useRef(null);
  
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === leftRef.current) {
              entry.target.classList.add("animate-leftText");
            }
  
            if (entry.target === rightRef.current) {
              entry.target.classList.add("animate-rightText");
            }
  
            entry.target.classList.remove("scroll-hidden");
          } else {
            // viewport se bahar jaate hi reset
            if (entry.target === leftRef.current) {
              entry.target.classList.remove("animate-leftText");
            }
  
            if (entry.target === rightRef.current) {
              entry.target.classList.remove("animate-rightText");
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
  React.useEffect(() => {
    const randomIndex = Math.floor(Math.random() * backgroundImages.length);
    setBgImage(backgroundImages[randomIndex]);
  }, []);



  return (
    <div className='text-white flex flex-col gap-6 justify-center items-center h-[700px] bg-gradient-to-b from-black via-gray-900 to-black text-center px-4 mt-[-99px]'
      style={{ backgroundImage: `url(${bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '700px' }}
    >

      <div className="absolute inset-0 h-[697px] bg-black/70"></div>
      <div className="relative z-10 flex flex-col gap-6 justify-center items-center">
        <div ref={leftRef} className='scroll-hidden'> 
        <h1 className='text-5xl font-bold '>Welcome to  <span className='bg-linear-to-r from-blue-500 to-teal-500 text-transparent bg-clip-text'> Our platform</span></h1>
        </div>
        <div ref={rightRef} className='scroll-hidden'>
        <p className='text-3xl font-semibold'>Learn new skills and advance your career with our expert-led courses.</p>
        <p className='xl:px-30 px-7'>With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.</p>
        </div>
        <div className='flex justify-center gap-2'>
          <button className=' bg-yellow-500 px-6 py-2 rounded-xl text-black text-[14px] font-semibold'>Learn More </button>
          <button className='bg-gray-700 rounded-xl text-white text-[14px] px-6 py-2 font-semibold'>Get Started</button>

        </div>
      </div>
    </div>
  )
}

export default Hero