import React from 'react';
import { useTheme } from '../context/ThemeContext';
const About = () => {
    const theme = useTheme();
    return (
        <div id={theme} name='About' className='w-full min-h-screen bg-gradient-to-b   py-20'>
            <div id={theme} className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>

                {/* --- Header Section --- */}
                <div id={theme} className='pb-8'>
                    <p id={theme} className='text-4xl font-bold inline border-b-4 border-green-500 '>
                        About
                    </p>
                    <div className='mt-6'>
                        <p id={theme} className='text-xl sm:text-2xl leading-relaxed '>
                            Hello! I’m <span id={theme} className=" font-bold">Mudassir</span>, a Full Stack Developer currently pursuing a BS in Software Engineering.
                            I specialize in turning creative ideas into robust, production-ready code.
                        </p>
                        {/* University Badge Style */}
                        <div id={theme} className='mt-4 flex border border-1 items-center p-4  rounded-lg shadow-md border-l-4 border-green-500'>
                            <p id={theme} className='font-semibold italic '>
                                <span id={theme} className='text-red-500 text-xl'>U</span>niversity of
                                <span id={theme} className='text-green-500 text-xl ml-1'>I</span>slamia
                                <span id={theme} className='text-red-500 text-xl ml-1'>C</span>ollege
                                <span id={theme} className='text-green-500 text-xl ml-1'>P</span>eshawar
                            </p>
                        </div>
                    </div>
                </div>

                {/* --- Main Grid Content --- */}
                <div id={theme} className="grid md:grid-cols-2 gap-8">

                    {/* Left Column: Education & Summary */}
                    <div id={theme} className='space-y-8'>

                        {/* Education Card */}
                        <div id={theme} className='border border-1 p-3 rounded-xl shadow-lg hover:shadow-green-500/20 transition duration-300'>
                            <h2 id={theme} className='text-2xl font-bold mb-4 border-b border-gray-700 pb-2'>
                                Education
                            </h2>
                            <h3 id={theme} className='text-xl font-bold text-green-400'>BS in Software Engineering</h3>
                            <p id={theme} className='text-sm mb-2'>Islamia College Peshawar • Class of 2026</p>
                            <div className='mt-4'>
                                <p id={theme} className='font-semibold '>Coursework:</p>
                                <p id={theme} className='text-sm mt-1'>Data Structures, Algorithms, Computer Systems, Web Development, Database Systems</p>
                            </div>
                            <div className='mt-4'>
                                <p id={theme} className='font-semibold'>Key Projects:</p>
                                <p id={theme} className='text-sm mt-1'>Developed multiple software projects, including a web-based application using the MERN stack.</p>
                            </div>
                        </div>

                        {/* Professional Summary */}
                        <div id={theme} className='border border-1 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition duration-300'>
                            <h2 id={theme} className='text-2xl font-bold mb-4 border-b border-gray-700 pb-2'>
                                Professional Summary
                            </h2>
                            <p id={theme} className='text-justify leading-relaxed'>
                                As a seasoned MERN stack developer, I possess a strong proficiency in designing, developing, and deploying scalable, efficient, and secure web applications. With a keen eye for detail and a passion for staying up-to-date with the latest industry trends, I deliver high-quality solutions that meet and exceed client expectations.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Skills & Experience */}
                    <div id={theme} className='space-y-8'>

                        {/* Technical Skills (Badges) */}


                        {/* Professional Experience List */}
                        <div id={theme} className='border border-1 p-6 rounded-xl shadow-lg hover:shadow-green-500/20 transition duration-300'>
                            <h2 id={theme} className='text-2xl font-bold mb-4 border-b border-gray-700 pb-2'>
                                Development Capabilities
                            </h2>
                            <ul id={theme} className='space-y-2 list-disc list-inside text-gray-300'>
                                <li id={theme}>Full MERN Stack Development</li>
                                <li id={theme}>Responsive Web Design & UI/UX</li>
                                <li id={theme}>RESTful API Design & Integration</li>
                                <li id={theme}>Database Modeling (NoSQL/MongoDB)</li>
                                <li id={theme}>Agile Development Methodologies</li>
                                <li id={theme}>Front-end & Back-end Architecture</li>
                            </ul>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default About