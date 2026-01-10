import React from 'react'
import js from '../../public/language/js.png'
import css from '../../public/language/css.png'
import html from '../../public/language/html.png';
import tailwindcss from '../../public/language/tailwind-css.svg'
import react from '../../public/language/react.jpg'
import { useTheme } from '../context/ThemeContext';

const Exprience = () => {
    const [theme] = useTheme()

    // Define language cards to avoid repeating code
    const languages = [
        { img: js, name: "Javascript" },
        { img: html, name: "HTML" },
        { img: css, name: "CSS" },
        { img: tailwindcss, name: "Tailwind Css" },
        { img: react, name: "React" },
    ];

    return (
        <div 
            id={theme} 
            name='Experiance' 
            // FIX: Force background transparent so stars show through
            style={{ backgroundColor: 'transparent' }}
            className='p-5 items-center md:p-10 mx-auto container px-4 flex flex-wrap gap-10 md:px-20 relative z-10'
        >
            <div className='space-y-1 ml-20 md:ml-0'>
                <h1 className='font-bold text-2xl mt-10'>Experiences</h1>
            </div>

            <div className='w-screen flex flex-wrap md:gap-10 items-center justify-center md:justify-start'>
                {languages.map((lang, index) => (
                    <div 
                        key={index}
                        // FIX: Dynamic background and text colors
                        className={`border items-center text-center cursor-pointer shadow-md hover:scale-105 duration-200 h-auto w-54 md:w-60 rounded-md p-5 mt-10 backdrop-blur-sm
                            ${theme === 'ligth' 
                                ? 'bg-white/80 text-black border-gray-200' 
                                : 'bg-zinc-900/80 text-white border-zinc-700'
                            }`}
                    >
                        <img className='rounded-md w-full h-40 object-contain' src={lang.img} alt={lang.name} />
                        <h2 className='mt-5 font-semibold'>{lang.name}</h2>
                    </div>
                ))}
                
                
            </div>
        </div>
    )
}

export default Exprience