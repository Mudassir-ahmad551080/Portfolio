import React from 'react'
import pic from '../../public/react.png'
import second from '../../public/node.png'
import third from '../../public/express.png'
import forth from '../../public/mongo.png.svg'
import hacker from '../../public/pic.jpg'
import facebook from '../../public/icon/facebook.jpg'
import linkdin from '../../public/icon/linkdin.jpg'
import youtube from '../../public/icon/youtube.jpg'
import instagram from '../../public/icon/instagram.jpg'
import { ReactTyped, Typed } from "react-typed";
import picture from "../../public/name.jpg";
import face from '../../public/icon/facebook.jpg'
import { motion } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
const Home = () => {
    const [theme] = useTheme();
    return (
        <>
            <div name='Home' id={theme} className=' p-3 w-full flex md:flex-row flex-col'>
                <div className=' h-auto mt-12 md:mt-36 mt-16 md:order-1 order-2  max-w-150 h-96  m-2 md:ml-20 space-y-1' >
                    <motion.h2 className='text-xl opacity-0 font-semibold'
                        animate={{ y: 4, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}

                    >Welcome In My, Feed</motion.h2>
                    <motion.h1 className='text-2xl font-bold space-x-1 opacity-0'
                        animate={{ y: 4, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1.5 }}
                    >Hello, I'am
                        <ReactTyped
                            className='ml-2 text-red-600'
                            strings={["Programmer", "Developer", "Coder",'Web Designer']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop={true}
                        />
                    </motion.h1>
                    <div className=' mt-5'>
                        <motion.p className='text-justify opacity-0'
                            animate={{ y: 4, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1.5 }}
                        >As a seasoned MERN stack developer, I possess a strong proficiency in designing, developing, and deploying scalable, efficient, and secure web applications. With a keen eye for detail and a passion for staying up-to-date with the latest industry trends, I deliver high-quality solutions that meet and exceed client expectations.
                        </motion.p>
                    </div>
                    <div className='flex  justify-between space-y-6 md:space-y-0 items-center flex-col md:flex-row'>
                        <div className='mt-10 space-y-1 text-center'>
                            <h1 className='text-xl font-bold'>Available On</h1>
                            <div id='icon' className='flex space-x-2 flex-wrap'>
                                <li id='mylist' className='font-bold cursor-pointer'>
                                    <a href="https://facebook.com/" target='_blank'>
                                        <img src={facebook} alt="" className='w-10 hover:scale-110 duration-200 rounded-full h-10' /></a>
                                </li>
                                <li id='mylist' className='font-bold cursor-pointer'>

                                    <a href="https://pk.linkedin.com/" target='_blank'>
                                        <img src={linkdin} alt="" className='w-10 hover:scale-110 duration-200 rounded-full h-10' />
                                    </a>

                                </li>
                                <li id='mylist' className='font-bold cursor-pointer' >
                                    <a href="https://www.youtube.com/" target='_blank'>
                                        <img src={youtube} alt="" className='w-10 hover:scale-110 duration-200 rounded-full h-10' /> </a>

                                </li>
                                <li id='mylist' className='font-bold cursor-pointer'>
                                    <a href="https://www.instagram.com/" target='_blank'>
                                        <img src={instagram} alt="" className='w-10 hover:scale-110 duration-200 rounded-full h-10' />
                                    </a>
                                </li>
                            </div>
                        </div>
                        <div className=' mt-4 md:mt-8 space-y-2'>
                            <h1 className='font-bold'>Current Working On</h1>
                            <div id='for-image-icon' className='flex space-x-3 flex-wrap'>
                                <img className='w-8 h-8 hover:scale-110 duration-200 cursor-pointer' src={pic} alt="" />
                                <img className='w-8 h-8 hover:scale-110 duration-200 cursor-pointer' src={second} alt="" />
                                <img className='w-8 h-8 hover:scale-110 duration-200 cursor-pointer' src={third} alt="" />
                                <img className='w-8 h-8 hover:scale-110 duration-200 cursor-pointer' src={forth} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id='img-div' className='md:mt-25 md:ml-32 md:order-2 order-1  m-8  mt-28 bottom-0 rounded-full flex'>
                    <img id='hacker' className='md:w-[400px] w-full object-cover w-[300px] h-[300px] rounded-full mb-0  md:h-[400px]' src={picture} alt="" />
                </div>
            </div>

        </>
    )
}

export default Home