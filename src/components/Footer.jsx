import React from 'react'
import facebook from '../../public/icon/facebook.jpg'
import linkdin from '../../public/icon/linkdin.jpg'
import youtube from '../../public/icon/youtube.jpg'
import instagram from '../../public/icon/instagram.jpg'
const Footer = () => {
  return (
    <footer>
      <div className='md:p-20 p-4  '>
        <div className='flex items-center justify-center space-x-3'>
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
        <div className='bg-zinc-500 h-0.5 md:w-76 mt-5 w-full md:ml-100 '>

        </div>
        <div className='text-center mt-4'>
          <p className='text-sm'>&copy; 2025 Your Company. All rights reseverd</p>
          <p className='text-sm'>Supportive Partner ❤ Hamza</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer