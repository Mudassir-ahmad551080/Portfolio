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

      <style jsx>{`
        .glow-button {
          padding: 12px 28px;
          background: linear-gradient(135deg, #0ea5e9, #2563eb);
          color: white;
          border: none;
          border-radius: 50px;
          cursor: pointer;
          font-weight: 600;
          font-size: 16px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease-in-out;
          box-shadow: 0 0 15px rgba(37, 99, 235, 0.5);
          animation: pulse-glow 2s infinite;
        }

        .glow-button:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 25px rgba(37, 99, 235, 0.8),
                      0 0 10px rgba(14, 165, 233, 0.6);
          background: linear-gradient(135deg, #38bdf8, #3b82f6);
        }

        @keyframes pulse-glow {
          0% {
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
          }
          50% {
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.8);
          }
          100% {
            box-shadow: 0 0 10px rgba(37, 99, 235, 0.5);
          }
        }
      `}</style>
    </div>
  );
};

export default ResumeButton;
