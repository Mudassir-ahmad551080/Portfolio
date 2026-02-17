import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import logo from '../../public/logo.gif';

// Ideally, store API endpoints in .env files (e.g., process.env.REACT_APP_GETFORM_URL)
// keeping it here for demonstration purposes.
const FORM_ENDPOINT = 'https://getform.io/f/agdldjpb';

function Contact() {
  const [theme] = useTheme();
  
  // 1. Consolidated State for cleaner management
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  // 2. centralized input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // 3. Validation Logic
  const validateForm = () => {
    const newErrors = {};
    if (formData.name.length < 5) {
      newErrors.name = "Name must be at least 5 characters.";
    }
    if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters.";
    }
    if (!formData.email.includes('@')) {
      newErrors.email = "Please enter a valid email address.";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    setIsSubmitting(true);

    try {
      await axios.post(FORM_ENDPOINT, formData);
      
      // Success State
      toast.success("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Reset Form
      setErrors({});
      
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div name="Contact" className={`w-full py-16 px-4 ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="max-w-[600px] mx-auto w-full border border-1 rounded-xl shadow-lg overflow-hidden transition-all duration-300">
        
        {/* Header Section */}
        <div className="p-8 text-center border-b border-gray-200 dark:border-gray-700">
          {logo && <img src={logo} alt="Brand Logo" className="w-16 h-16 mx-auto mb-4 object-contain" />}
          <h2 id={theme} className="text-3xl font-bold ">Get In Touch</h2>
          <p id={theme} className=" mt-2">
            Have a question or want to work together?
          </p>
        </div>

        {/* Form Section */}
        <div className="p-8">
          <form 
            action={FORM_ENDPOINT} 
            method="POST" 
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            {/* Name Input */}
            <div className="flex flex-col">
              <label id={theme} className="text-sm font-semibold mb-2" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={`p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 outline-none transition-all duration-200 ${
                  errors.name 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200'
                }`}
              />
              {errors.name && <span className="text-red-500 text-xs mt-1">{errors.name}</span>}
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label id={theme}  className="text-sm font-semibold mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={`p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 outline-none transition-all duration-200 ${
                  errors.email 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200'
                }`}
              />
              {errors.email && <span className="text-red-500 text-xs mt-1">{errors.email}</span>}
            </div>

            {/* Message Input */}
            <div className="flex flex-col">
              <label id={theme} className="text-sm font-semibold mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="How can I help you?"
                className={`p-3 rounded-lg border bg-gray-50 dark:bg-gray-700 dark:text-white focus:ring-2 outline-none transition-all duration-200 resize-none ${
                  errors.message 
                    ? 'border-red-500 focus:ring-red-200' 
                    : 'border-gray-300 dark:border-gray-600 focus:border-blue-500 focus:ring-blue-200'
                }`}
              />
              {errors.message && <span className="text-red-500 text-xs mt-1">{errors.message}</span>}
            </div>

            {/* Submit Button with Loading State */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-lg text-white font-bold tracking-wide transition-all duration-300 shadow-md ${
                isSubmitting 
                  ? 'bg-blue-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 hover:shadow-lg transform hover:-translate-y-0.5'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;