import React, { useState } from "react";
// import pic from '../../public/pic.png'
import react from '../../public/react.png'
// import cross from '../../public/menu/cross.jpg'
// import logo from '../../public/logo.jpg'
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext";
import { RxCross1 } from "react-icons/rx";
import { RiMoonClearFill } from "react-icons/ri";
import sun from '../img/sun.png'
import moon from '../img/moon.png'
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Portfolio",
    },
    {
      id: 4,
      text: "Experiance",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  const [theme, setTheme] = useTheme();
  let clutter = 0;
  function handleChange() {
    if (clutter == 0) {
      setTheme((preve) => (preve === 'ligth' ? 'dark' : 'ligth'));
      // clutter=1;
    }
    else {
      setTheme(<img src={face} />);
      // clutter=0;
    }
  }
  return (
    <>
      <div id={theme} className="max-w-screen-2xl backdrop-blur-lg container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 ">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <img src={react} className="h-12 w-12 animate-spin duration-700 transition-all hover:animate-none cursor-pointer hover:shadow-[0_0_20px_10px_rgba(0,255,255,0.6)] object-cover mt-1 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              Mudassi<span className="text-green-500 text-2xl">r</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div onClick={handleChange} id={theme} className='md:ml-92 ml-10  mt-1 md:mt-0 cursor-pointer'>
            {theme === 'ligth' ? (<img src={sun} height={10} width={40}/>) : (<img src={moon} height={10} width={40}/>)}
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
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <RxCross1 className="mt-1" size={30} /> : <span className="w-20 h-20 text-5xl">&#8801;</span>}
            </div>
          </div>
        </div>
        {/* mobile navbar */}
        {menu && (
          <div id={theme} className="bg-white shadow-md h-screen w-[100%] md:hidden ">
            <ul className="md:hidden flex flex-col h-screen w-full items-center justify-center space-y-3 text-xl">
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

