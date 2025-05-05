import React from 'react'
import mongodb from '../img/mongo.png.svg'
import react from '../img/react.png.png'
import Redux from '../img/redux.png'
import node from '../img/node.png'
import express from '../img/express.png'
import { useTheme } from '../context/ThemeContext'

const Portfolio = () => {
    const [theme] = useTheme();
    return (
        <div id={theme} name='Portfolio' className='p-10  mx-auto h-a container px-0 mx-2  flex flex-wrap gap-10  md:px-20  md:p-10'>
            <div className='space-y-1 ml-20 md:ml-0'>
                <h1 className='text-2xl font-bold' >Portfolio</h1>
                <span className='underline font-bold'>Feature Project</span>
            </div>
            <div id={theme} className=' w-screen md:ml-15 md:gap-10 flex flex-wrap  items-center'>
                <div id={theme} className='bg-yellow-50  border-1 rounded-md  hover:bg-black hover:text-white cursor-pointer shadow-md hover:scale-105 duration-200 h-auto w-72 md:w-78 shadow-md p-5 mt-10 ml-8 md:ml-0'>
                    <img className='w-20 h-20 rounded-md' src={mongodb} alt="" />
                    <h1 className='font-bold text-xl font-sans'>MongoDb</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae asperiores aut explicabo, veniam iste dolorum assumenda libero non praesentium!</p>
                    <div className='flex space-x-10 mt-5'>
                        <button className='bg-green-400 md:p-3   text-white rounded-md w-[100px] cursor-pointer font-black p-1'>Vedio</button>
                        <button className='bg-red-500 md:p-3   text-white rounded-md  cursor-pointer font-black p-1'>Source Code</button>
                    </div>
                </div>
                {/* for React Image */}
                <div id={theme} className='bg-yellow-50 border-1 rounded-md  hover:bg-black hover:text-white  cursor-pointer hover:scale-105 duration-200 shadow-md h-auto w-72 md:w-78 shadow-md ml-8 md:ml-0  p-4 mt-10'>
                    <img className='w-25 rounded-full h-25 rounded-md' src={react} alt="" />
                    <h1 className='font-bold text-xl font-sans'>React.Js</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae asperiores aut explicabo, veniam iste dolorum assumenda libero non praesentium!</p>
                    <div className='flex space-x-10 mt-5'>
                        <button className='bg-green-400 md:p-3 p-1 text-white rounded-md w-[100px] cursor-pointer font-black p-1'>Vedio</button>
                        <button className='bg-red-500 md:p-3 p-1 text-white rounded-md  cursor-pointer font-black p-1'>Source Code</button>
                    </div>
                </div>
                {/* for Express Image */}
                <div id={theme} className='bg-yellow-50 border-1 rounded-md  hover:bg-black hover:text-white  cursor-pointer hover:scale-105 duration-200 shadow-md ml-8  h-auto w-72 md:w-78 md:ml-0 shadow-md p-5 mt-10'>
                    <img className='w-20 h-20 rounded-md' src={express} alt="" />
                    <h1 className='font-bold text-xl font-sans'>Express</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae asperiores aut explicabo, veniam iste dolorum assumenda libero non praesentium!</p>
                    <div className='flex space-x-10 mt-5'>
                        <button className='bg-green-400 md:p-3 p-1 text-white rounded-md w-[100px] cursor-pointer font-black '>Vedio</button>
                        <button className='bg-red-500 md:p-3 p-1 text-white rounded-md  cursor-pointer font-black '>Source Code</button>
                    </div>
                </div>
                {/* for Redux Image */}
                <div id={theme} className='bg-yellow-50 border-1 rounded-md  hover:bg-black hover:text-white  cursor-pointer hover:scale-105 duration-200 shadow-md h-auto w-72 ml-8  md:w-78 md:ml-0 shadow-md p-5 mt-10'>
                    <img className='w-20 h-20 rounded-md' src={Redux} alt="" />
                    <h1 className='font-bold text-xl font-sans'>Redux</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae asperiores aut explicabo, veniam iste dolorum assumenda libero non praesentium!</p>
                    <div className='flex space-x-10 mt-5'>
                        <button className='bg-green-400 md:p-3 p-1 text-white rounded-md w-[100px] cursor-pointer font-black p-1'>Vedio</button>
                        <button className='bg-red-500 md:p-3 p-1 text-white rounded-md  cursor-pointer font-black '>Source Code</button>
                    </div>
                </div>
                {/* for Node js Image */}
                <div id={theme} className='bg-yellow-50 border-1 rounded-md  hover:bg-black  hover:text-white hover:scale-105 duration-200 cursor-pointer shadow-md rounded-md h-auto w-72 ml-8 md:ml-0  md:w-78 shadow-md p-5 mt-10'>
                    <img className='w-20 h-20 rounded-md mb-1' src={node} alt="" />
                    <h1 className='font-bold text-xl font-sans'>Node.Js</h1>
                    <p className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia repudiandae asperiores aut explicabo, veniam iste dolorum assumenda libero non praesentium!</p>
                    <div className='flex space-x-10 mt-5'>
                        <button className='bg-green-400 md:p-3  text-white rounded-md w-[100px] cursor-pointer font-black p-1'>Vedio</button>
                        <button className='bg-red-500 md:p-3 text-white rounded-md  cursor-pointer font-black p-1'>Source Code</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio