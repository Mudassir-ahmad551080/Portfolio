import React from 'react'
import js from '../../public/language/js.png'
import css from '../../public/language/css.png'
import html from '../../public/language/html.png';
import tailwindcss from '../../public/language/tailwind-css.svg'
import react from '../../public/language/react.jpg'
import { useTheme } from '../context/ThemeContext';

const Exprience = () => {
    const [theme] = useTheme()
    return (
        <div id={theme} name='Experiance' className='p-5 items-center md:p-10   mx-auto h-a container px-4  flex flex-wrap gap-10  md:px-20  md:p-10'>
            <div className='space-y-1 ml-20 md:ml-0'>
                <h1 className='font-bold text-2xl mt-10'>Expriences</h1>
            </div>
            <div className=' w-screen flex flex-wrap md:gap-10 items-center'>
                <div id={theme} className='bg-yellow-50 border ml-16 md:ml-0 items-center text-center  cursor-pointer shadow-md hover:scale-105 duration-200 h-auto w-54 md:w-60 rounded-md cursor-pointer  shadow-md p-5 mt-10 ml-8 md:ml-0'>
                    <img className='rounded-md w-50 h-50' src={js} alt="" />
                    <h2 className='mt-5'>Javascript</h2>
                </div>
                {/* for html Image */}
                <div id={theme} className='bg-yellow-50 border ml-16 md:ml-0 items-center text-center   cursor-pointer shadow-md hover:scale-105 duration-200 h-auto w-54 md:w-60 rounded-md cursor-pointer  shadow-md p-5 mt-10 ml-8 md:ml-0'>
                    <img className='rounded-md w-50 h-50' src={html} alt="" />
                    <h2 className='mt-5'>HTML</h2>
                </div>
                {/* for Express Image */}
                <div id={theme} className='bg-yellow-50 border ml-16 md:ml-0 items-center text-center   cursor-pointer shadow-md hover:scale-105 duration-200 h-auto w-54 md:w-60 rounded-md cursor-pointer  shadow-md p-5 mt-10 ml-8 md:ml-0'>
                    <img className='rounded-md w-50 h-50' src={css} alt="" />
                    <h2 className='mt-5'>CSS</h2>
                </div>
                {/* for Redux Image */}
                <div id={theme} className='bg-yellow-50  border ml-16 md:ml-0 items-center text-center   cursor-pointer shadow-md hover:scale-105 duration-200 h-auto w-54 md:w-60 rounded-md cursor-pointer  shadow-md p-5 mt-10 ml-8 md:ml-0'>
                    <img className='rounded-md w-50 h-50' src={tailwindcss} alt="" />
                    <h2 className='mt-5'>Tailwind Css</h2>
                </div>
                {/* for Node js Image */}
                <div id={theme} className='bg-yellow-50 border ml-16 md:ml-0  items-center text-center  cursor-pointer shadow-md hover:scale-105 duration-200 h-auto w-54 md:w-60 rounded-md cursor-pointer  shadow-md p-5 mt-10 ml-8 md:ml-0'>
                    <img className='rounded-md w-50 h-50' src={react} alt="" />
                    <h2 className='mt-5'>React</h2>
                </div>

            </div>
        </div>
    )
}

export default Exprience