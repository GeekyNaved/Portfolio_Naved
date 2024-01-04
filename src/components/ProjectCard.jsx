import React from 'react'

const ProjectCard = ({ title, description, link, image, techStack }) => {
    return (
        <div className='bg-gray-50 shadow-lg px-5 py-5 mt-8 rounded flex-1'>
            {image}
            <div className="pt-2 flex justify-between items-center">
                <p className='text-gray-900 text-3xl font-bold pt-2'>
                    {title}
                </p>
                <span className="inline-flex items-center rounded-md bg-gray-800  px-2 py-1 text-xs font-medium text-white ring-1 ring-inset ring-gray-500/10">
                    {techStack}
                </span>
            </div>
            <p className='py-2 text-gray-700 leading-8'>
                {description}
            </p>
            <div className="pt-5">
                <a href={link} target='_blank' className='text-gray-900 underline font-semibold'>
                    {link ? "Live Link" : "In Progress"}
                </a>


            </div>
        </div>

    )
}

export default ProjectCard