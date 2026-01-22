import React, { useState } from "react";
import react from '../../public/react.png'
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { RxCross1 } from "react-icons/rx";
import sun from '../img/sun.png'
import moon from '../img/moon.png'

function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    {id: 6, text: "Skills" },
    { id: 5, text: "Contact" },
  ];

  const [theme, setTheme] = useTheme();

  function handleChange() {
     setTheme(prev => (prev === 'ligth' ? 'dark' : 'ligth'));
  }

  return (
    <>
      <div 
        // REMOVED: id={theme} (This was overriding your transparency)
        // ADDED: Conditional text color based on theme
        className={`max-w-screen-2xl backdrop-blur-lg container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 
          ${theme === 'ligth' ? 'bg-white/70 text-black' : 'bg-black/70 text-white'}`}
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={react} className="h-12 w-12 animate-spin duration-700 transition-all hover:animate-none cursor-pointer hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.6)] object-cover mt-1 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Mudassi<span className="text-green-500 text-2xl">r</span>
              <p className="text-sm">Software Developer</p>
            </h1>
          </div>
          
          {/* Desktop Toggle Button */}
          <div onClick={handleChange} className='md:ml-92 ml-10 mt-1 md:mt-0 cursor-pointer'>
            {theme === 'ligth' ? (<img src={sun} height={10} width={40} alt="light mode"/>) : (<img src={moon} height={10} width={40} alt="dark mode"/>)}
          </div>
          
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 hover:underline transition-all duration-300 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden cursor-pointer">
              {menu ? <RxCross1 className="mt-1" size={30} /> : <span className="w-20 h-20 text-5xl">&#8801;</span>}
            </div>
          </div>
        </div>

        {/* Mobile navbar */}
        {menu && (
          <div 
            // REMOVED: id={theme}
            className={`shadow-md h-screen w-full md:hidden fixed top-16 left-0 
              ${theme === 'ligth' ? 'bg-white text-black' : 'bg-black text-white'}`}
          >
            <ul className="flex flex-col items-center justify-center space-y-8 h-[80vh] text-2xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;