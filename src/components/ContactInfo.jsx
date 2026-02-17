import React from 'react';
import { FaPhone, FaWhatsapp } from "react-icons/fa6"; // Updated import for consistency
import { MdOutlineMail } from "react-icons/md";
import { useTheme } from '../context/ThemeContext';
const ContactInfo = () => {
  
  // 1. Data Structure: Easy to maintain and scalable
  const [theme] = useTheme();
  const contactData = [
    {
      id: 1,
      icon: <FaPhone className="w-6 h-6" />,
      title: "Phone",
      text: "+92 310 4847156", // formatted for readability
      link: "tel:+923104847156", // functional link
      color: "text-blue-500"
    },
    {
      id: 2,
      icon: <FaWhatsapp className="w-6 h-6" />,
      title: "WhatsApp",
      text: "+92 321 5837843",
      link: "https://wa.me/923215837843", // Opens WhatsApp directly
      color: "text-green-500"
    },
    {
      id: 3,
      icon: <MdOutlineMail className="w-6 h-6" />,
      title: "Email",
      text: "ma6386731@gmail.com",
      link: "mailto:ma6386731@gmail.com", // Opens email client
      color: "text-red-500"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10">
      <div id={theme} className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {contactData.map((item) => (
          <a 
           id={theme}
            key={item.id}
            href={item.link}
            target={item.title === 'WhatsApp' ? '_blank' : '_self'}
            rel="noreferrer"
            className="group flex flex-col items-center justify-center p-8  rounded-xl shadow-sm border  transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
          >
            {/* Icon Container with subtle background blob */}
            <div className={`p-4 rounded-full bg-gray-50 dark:bg-gray-700 mb-4 transition-colors duration-300 group-hover:bg-opacity-80 ${item.color}`}>
              {item.icon}
            </div>
            
            <h3 className="text-lg font-bold  mb-2">
              {item.title}
            </h3>
            
            <p className=" text-sm md:text-base font-medium">
              {item.text}
            </p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default ContactInfo;