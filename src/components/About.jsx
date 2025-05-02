import React from 'react'

const About = () => {
    return (
        <div name='About' className=' h-auto p-8 space-y-6 '>
            <div id='container' className=''>
                <div id='first' className='space-y-4'>
                    <h1 className='text-3xl font-bold'>About</h1>
                    <p className='sm:text-justify'>hello my name is mudassir and i am a full stack developer and i am a student of bs software engineering from <span className='text-red-500 font-bold'>U</span>niverstiy of <span className='text-green-500 font-bold'>I</ span>slamia <span className='text-red-500 font-bold'>C</span>ollege <span className='text-green-500 font-bold'>P</span>eshawar  </p>
                </div>
                <div id='second' className='mt-8 space-y-4'>
                    <h1 className='text-green-500 font-bold text-2xl'>Education and Training</h1>
                    <p>Bachelor of Software Engineering
                        [Islamia College Peshawar], [near UOP]
                        [2026]

                        Coursework: Data Structures, Algorithms, Computer Systems, Web Development, Database Systems
                        Projects: Developed multiple software projects, including a web-based application using the MERN stack
                        Relevant tools and technologies: Git, GitHub, Visual Studio Code </p>
                </div>
                <div id='second' className='mt-8 space-y-4'>
                    <h1 className='text-green-500 font-bold text-2xl'>Technical Skills</h1>
                    <p>- Programming languages: JavaScript, HTML/CSS
                        - Frameworks: React, Express
                        - Databases: MongoDB
                        - Operating Systems: Windows, Linux
                    </p>
                </div>
                <div id='second' className='mt-8 space-y-4'>
                    <h1 className='text-green-500 font-bold text-2xl'>Skill & Exprience</h1>
                    <p>As a seasoned MERN stack developer, I possess a strong proficiency in designing, developing, and deploying scalable, efficient, and secure web applications. With a keen eye for detail and a passion for staying up-to-date with the latest industry trends, I deliver high-quality solutions that meet and exceed client expectations. </p>
                </div>
                <div id='second' className='mt-8 space-y-4'>
                    <h1 className='text-green-500 font-bold text-2xl'>Porfessionla Exprience</h1>
                    <p>- MERN stack development (MongoDB, Express, React, Node.js)
                        Front-end and back-end development
                        Responsive web design
                        RESTful API design and development
                        Database modeling and management
                        Agile development methodologies </p>
                </div>
            </div>
        </div>
    )
}

export default About