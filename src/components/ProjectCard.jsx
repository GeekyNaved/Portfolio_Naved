import React from 'react'

const ProjectCard = ({ title, description, link, image, techStack }) => {
    return (
        <div className='bg-gray-50 shadow-lg px-5 py-5 mt-8 rounded flex-1'>
            {image}
            <div className="py-5 flex justify-between items-center">
                <p className='text-gray-900 text-3xl font-bold'>
                    {title}
                </p>
                <span className="inline-flex items-center rounded-md bg-gray-800  px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                    {techStack}
                </span>
            </div>
            <p className='md:py-1 text-md md:text-xl text-gray-700 leading-8'>
                {description}
            </p>
            {link && (
                <div className="py-5">
                    <a href={link} target='_blank' className='bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md'>
                        Live Link
                    </a>
                </div>
            )}
        </div>

    )
}

export default ProjectCard