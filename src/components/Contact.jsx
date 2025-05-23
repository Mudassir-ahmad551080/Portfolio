
import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import axios from 'axios';
import { toast } from 'react-hot-toast';
function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  let [requirename, setRequirename] = useState('');
  let [requireemail, setRequireEmail] = useState('')
  let [requiremessage, setRequireMessage] = useState('')
  const [formsubmit,setFormsubmit]=useState('')
  const [error,setError]= useState('');
  const handleSubmit = async (e) => {
    if(name.length<5){
      setError("Your name must be at least 5 charators")
      setFormsubmit('')
      e.preventDefault()
      return ;
    }

    if(message.length<20){
      setError("the message lenght will contain the 20 charactor")
      e.preventDefault()
      setFormsubmit('')
      return;
    }
     
    {
      e.preventDefault();
      setName('');
      setEmail('');
      setMessage('')
      console.log('Form submitted:');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      setRequirename('')
      setRequireEmail('')
      setRequireMessage('')
      setError('')
    }
    try {
      await axios.post('https://getform.io/f/bvryewyb', {
        name,
        email,
        message
      });
     toast.success("Your message has been send Sucessfuly");
    } catch (error) {
        toast.error("something went wrong");
        setName(name);
        setEmail(email);
        setMessage(message);
        return;
    }

  };
  const [theme] = useTheme();

  return (
    <>
      <div id={theme} name='Contact' className="max-w-md dark:text-white  mx-auto p-4 bg-yellow-50 mx-10 rounded shadow-md">
        <h2 className="text-lg font-bold mb-4">Send Your Message</h2>
        <form action='https://getform.io/f/bvryewyb' method="POST" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <p className='text-red-500'>{requirename}</p>
            <input
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              name='name'
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <p className='text-red-500'>{requireemail}</p>
            <input
              required
              className="shadow  text-gray-500 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
            />
          </div>
          {/* <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div> */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <p className='text-red-500'>{requiremessage}</p>
            <textarea
              required
              className="shadow  text-gray-500 appearance-none border rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
            />
          </div>
          {error && 
            <p className='text-red-500 text-sm mb-4'>{error}</p>
        }
        
          <button
          id='anotherbutton'
            className="bg-blue-500 cursor-pointer shadow-md   hover:bg-blue-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type='submit'
          >
            Send Message
          </button>
        </form>
        <div>
          <p className='text-green-500 text-sm mt-3 '>
            {formsubmit}
          </p>
          
        </div>
      </div>
    </>
  );
}

export default Contact;
