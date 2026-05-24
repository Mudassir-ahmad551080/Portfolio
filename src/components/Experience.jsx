import React from 'react'

const Experience = () => {
  return (
    <section id='experience' className='py-16 px-6 md:px-12 lg:px-24 transition-colors duration-300'>
      <div className='max-w-5xl mx-auto'>
        <h2 name='Experience' className='text-3xl md:text-4xl font-bold  mb-12 text-center md:text-left border-b-4 border-blue-500 w-fit'>
          Experience
        </h2>

        <div className='relative border-l-4 border-blue-500 ml-3 md:ml-6 space-y-12'>
          {/* Experience Item */}
          <div className='relative pl-8'>
            {/* Timeline Dot */}
            <div className='absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-sm'></div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  Project Engineer (Academic Role)
                </h3>
                <span className='text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit'>
                  Nov 2025 – Apr 2026
                </span>
              </div>

              <div className='text-gray-600 dark:text-gray-400 italic mb-4 flex items-center gap-2'>
                <span className='font-semibold not-italic text-gray-700 dark:text-gray-300'>Islamia College Peshawar</span>
                <span>|</span>
                <span>Peshawar, Pakistan</span>
              </div>

              <ul className='list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed'>
                <li>
                  Led backend development for <span className='font-medium'>3+ MERN stack projects</span>, designing scalable architectures with clean separation of concerns, reducing codebase complexity by <span className='font-medium'>~30%</span>.
                </li>
                <li>
                  Guided cross-functional teams of <span className='font-medium'>4–6 developers</span> on best practices, cutting frontend-backend integration bugs by <span className='font-medium'>40%</span> and ensuring on-time delivery across all sprints.
                </li>
                <li>
                  Delivered 3 high-performance, data-driven web applications achieving <span className='font-medium'>100% on-time completion</span>, each supporting 100+ concurrent users with sub-300ms API response times.
                </li>
              </ul>
            </div>
          </div>

          {/* Experience Item */}
          <div className='relative pl-8'>
            {/* Timeline Dot */}
            <div className='absolute -left-3 top-1 w-5 h-5 bg-blue-500 rounded-full border-4 border-white dark:border-slate-900 shadow-sm'></div>

            <div className='bg-white dark:bg-slate-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group'>
              <div className='flex flex-col md:flex-row md:justify-between md:items-center mb-4 gap-2'>
                <h3 className='text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                  Full-stack Developer
                </h3>
                <span className='text-sm font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 px-3 py-1 rounded-full w-fit'>
                  Sep 2025 – Dec 2025
                </span>
              </div>

              <div className='text-gray-600 dark:text-gray-400 italic mb-4 flex items-center gap-2'>
                <span className='font-semibold not-italic text-gray-700 dark:text-gray-300'>step2scientest</span>
                <span>|</span>
                <span>Abdara Road · On-site</span>
              </div>

              <ul className='list-disc list-inside space-y-3 text-gray-700 dark:text-gray-300 leading-relaxed'>
                <li>
                  Developed engaging front-end applications for various projects at <span className='font-medium'>Step2Scientest</span>, enhancing user experience.
                </li>
                <li>
                  Instructed BSCS and BSSE students in web development, fostering their skills and knowledge in the field.
                </li>
                <li>
                  Collaborated with team members to implement best practices in coding and design, contributing to project success.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
