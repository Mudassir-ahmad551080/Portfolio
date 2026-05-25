// ResumeButton.js
import React from 'react';

const ResumeButton = () => {
  return (
    <div className="inline-block z-50">
      <a href="./mudassir.pdf" download="Mudassir_Ahmad_Resume.pdf">
        <button
          className="glow-button"
        >
          Download Resume
        </button>
      </a>
    </div>
  );
};

export default ResumeButton;
