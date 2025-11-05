// ResumeButton.js
import React from 'react';

const ResumeButton = () => {
  return (
    <div className="fixed bottom-4 right-6 z-50">
      <a href="/mudassir.pdf" download="Mudassir_Ahmad_Resume.pdf">
        <button
          className="animate-bounce hover:animate-none glow-button"
        >
          📄 Download Resume
        </button>
      </a>

      <style jsx>{`
        .glow-button {
          padding: 12px 24px;
          background: linear-gradient(135deg, #1f2937, #111827);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          box-shadow: 0 0 10px rgba(59, 130, 246, 0.4),
                      0 0 20px rgba(59, 130, 246, 0.3);
          transition: all 0.3s ease-in-out;
        }

        .glow-button:hover {
          transform: scale(1.05);
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.8),
                      0 0 30px rgba(59, 130, 246, 0.6),
                      0 0 45px rgba(59, 130, 246, 0.4);
          background: linear-gradient(135deg, #2563eb, #1e40af);
        }
      `}</style>
    </div>
  );
};

export default ResumeButton;
