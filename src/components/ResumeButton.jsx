// Inside App.js or any component like Navbar or ResumeSection

import React from 'react';

const ResumeButton = () => {
  return (
   <div className='fixed bottom-1 right-4 z-50'>
     <a  href="/mudassir.pdf" download="Mudassir_Ahmad_Resume.pdf">
      <button className='resume-button' style={{
        padding: '10px 20px',
        backgroundColor: '#1f2937',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
      }}>
        📄 Download Resume
      </button>
      
    </a>
   </div>
  );
};

export default ResumeButton;
