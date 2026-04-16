import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import logo from '../assets/Logo/Logo-full-light.png'
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const Fotter = () => {
    return (
        <div className='bg-black text-white px-20  pt-20  pb-20'>
            {/* inner div */}
            <div className='border border-white/10 pb-20  bg-gray-900/90  rounded-2xl'>
                <div className='flex justify-between items-start '>
                    {/* left */}
                    <div className='flex justify-between gap-4 mx-20 mt-20'>

                        <div className=' flex flex-col gap-2 '>
                            <img src={logo} alt="Company Logo" />
                            <ul className=' text-gray-500 text-sm font-medium  leading-8'>
                                <li className=' text-white text-md  font-semibold mb-2  '>Company</li>
                                <li>About</li>
                                <li>Careers</li>
                                <li>Affiliates</li>
                            </ul>

                            <div className=' flex gap-3 mt-4 '>
                                <FaFacebookSquare className='text-blue-700' />
                                <FcGoogle />
                                <FaYoutube className='text-red-700' />
                                <FaTwitter className='text-blue-600' />
                            </div>
                        </div>


                        <div className=' flex flex-col  mx-5 gap-2'>

                            <h1 className='text-white text-md  font-semibold mb-2'>Resource</h1>
                            <ul className='text-gray-500 text-sm font-medium leading-8'>
                                <li>Articles</li>
                                <li>Blog</li>
                                <li>Chart Sheet</li>
                                <li> Code challenges</li>
                                <li>Docs</li>
                                <li>Projects</li>
                                <li>Videos</li>
                                <li>Workspaces</li>
                            </ul>
                        </div>
                        <div className=' flex flex-col  gap-2'>
                            <div>
                                <h1 className='text-white text-md  font-semibold mb-2'>Plans</h1>
                                <ul className='text-gray-500 text-sm font-medium leading-8'>
                                    <li>Paid memberships</li>
                                    <li>For students</li>
                                    <li>Business Solutions</li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-white text-md  font-semibold mb-2'>Community</h1>
                                <ul className='text-gray-500 text-sm font-medium leading-8'>
                                    <li>Forums</li>
                                    <li>Chapters</li>
                                    <li>Events</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* verical divider */}
                    <div className=' mt-20'>
                        <div className='h-160 border-l-1 border-gray-600 '></div>
                    </div>

                    {/* right */}
                    <div className=' flex justify-between gap-20 mx-20  pt-20'>
                        {/* subjects */}
                        <div className=' flex flex-col gap-2 ' >
                            <h1 className='text-white text-md  font-semibold mb-2'>Subjects</h1>
                            <ul className='text-gray-400 text-sm font-medium leading-8'>
                                <li>AI</li>
                                <li>Cloud Computing</li>
                                <li>Code Foundations</li>
                                <li>Computer Science</li>
                                <li> CyberSecurity</li>
                                <li>Data Analytics</li>
                                <li>Data Science</li>
                                <li>Data visualization</li>
                                <li>Developer Tools</li>
                                <li>Devops</li>
                                <li>Game Development</li>
                                <li> IT</li>
                                <li>Machine Learning</li>
                                <li>Math</li>
                                <li>Mobile Development</li>
                                <li>Web Design</li>
                                <li>Web Development</li>
                            </ul>
                        </div>
                        <div className=' flex flex-col gap-2 '>
                            <h1 className='text-white text-md  font-semibold mb-2'>Languages</h1>
                            <ul className='text-gray-400 text-sm font-medium leading-8'>
                                <li>C and C++</li>
                                <li> C#</li>
                                <li>CSS</li>
                                <li>HTML</li>
                                <li>Java</li>
                                <li>JavaScript</li>
                                <li>Bash</li>
                                <li>PHP</li>
                                <li>Python</li>
                                <li>R</li>
                                <li>Ruby</li>
                                <li>Swift</li>
                                <li>TypeScript</li>
                                <li>SQL</li>
                            </ul>
                        </div>

                        {/* career Building */}
                        <div className=' flex flex-col gap-2 '>
                            <h1 className='text-white text-md  font-semibold mb-2'>Career Building</h1>
                            <ul className='text-gray-400 text-sm font-medium leading-8'>
                                <li>Career path</li>
                                <li>Career services</li>
                                <li>Job Board</li>
                                <li>Resume Services</li>
                                <li>Skills Assessments</li>
                                <li>Interview Prep</li>
                                <li>-</li>
                                <li>Full Catolog</li>
                                <li>Beta Content</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* horizontal divider */}
                <div className='mx-20'>
                    <hr className='w-full border-b-1 border-gray-600 ' />
                </div>

                {/* made by  and Policy */}
                <div className=' flex justify-between items-center mx-20 mt-6 text-gray-500 text-sm font-medium '>
                    <div className='flex justify-between    items-center gap-4'>
                        <h1>Privacy Policy</h1>
                        <span>|</span>
                        <h1>Cookie Policy</h1>
                        <span>|</span>
                        <h1>Terms</h1>
                    </div>
                    <div>
                        <h1 className='text-gray-500 '>Made with ❤️ Anamika Mishra © 2026 Studynotion</h1>

                    </div>
                    <div className='flex'>
                        <FaLinkedinIn  className='text-gray-500'/>
                        <FaGithub className='ml-4 text-gray-500' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Fotter