import React from 'react'
import { FaArrowUp } from "react-icons/fa";
const Scrool = () => {
  const scroolHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className=''>
    <FaArrowUp onClick={scroolHandler} className='mb-0 w-10 h-6 animate-pulse cursor-pointer' />
    </div>
  )
}

export default Scrool