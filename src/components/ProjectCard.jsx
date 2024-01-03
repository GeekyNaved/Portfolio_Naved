import React from 'react'

const ProjectCard = ({ title, description, link, image, techStack }) => {
    return (
        <div className='bg-gradient-to-r from-cyan-500 text- to-teal-500 px-5 py-3 mt-8 rounded flex-1'>
            {image}
            <div className="pt-2 flex justify-between items-center">
                <p className='text-gray-950 text-3xl font-extrabold pt-2'>
                    {title}
                </p>
                <span className="inline-flex items-center rounded-md bg-gray-50 px-2 py-1 text-xs font-medium text-gray-600 ring-1 ring-inset ring-gray-500/10">
                    {techStack}
                </span>
            </div>
            <p className='py-2 text-gray-600'>
                {description}
            </p>
            <div className="pt-2">
                <a href={link} target='_blank' className='underline font-semibold'>
                    {link ? "Live Link" : "In Progress"}
                </a>


            </div>
        </div>

    )
}

export default ProjectCard