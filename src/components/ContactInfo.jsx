import React from 'react'
import { FaPhone } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
const ContactInfo = () => {
  return (
    <div className='flex justify-between flex-col mt-10 mb-10 gap-10 md:gap-0 md:flex-row mx-15'>
        <div id='namediv' className=' border border-1 p-10'>
          <div className='flex gap-4'>
            <h3 className='font-bold'>Phone</h3>
            <FaPhone className='mt-1'/>
          </div>
          <p className='mt-2'>03104847156</p>
        </div>
        <div id='namediv' className='border border-1 p-10'>
          <div className='flex gap-4'>
            <h3 className='font-bold'>WhatsApp</h3>
            <FaWhatsapp className='mt-1'/>
          </div>
          <p className='mt-2'>03215837843</p>
        </div>
        <div id='namediv' className='border border-1 p-10'>
          <div className='flex gap-4'>
            <h3 className='font-bold'>Email</h3>
            <MdOutlineMail className='mt-1'/>
          </div>
          <p className='mt-2'>ma6386731@gmail.com</p>
        </div>
    </div>
  )
}

export default ContactInfo