import React from 'react';

const ProjectCard = ({ title, description, link, image, techStack }) => {
    return (
        <div className='bg-white shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl mt-8 p-4 flex flex-col h-full'>
            <div className="w-full h-48 overflow-hidden rounded-xl">
                {image}
            </div>
            <div className="py-4 flex justify-between items-start">
                <h3 className='text-2xl font-semibold text-gray-900'>{title}</h3>
                <span className="ml-2 inline-flex items-center rounded-full bg-gray-800 px-3 py-1 text-xs font-medium text-white">
                    {techStack}
                </span>
            </div>
            <p className='text-gray-700 text-md leading-relaxed flex-1'>
                {description}
            </p>
            {link && (
                <div className="pt-4 mt-auto">
                    <a
                        href={link}
                        target='_blank'
                        rel="noreferrer"
                        className='inline-block bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-sm px-4 py-2 rounded-md hover:opacity-90 transition'
                    >
                        🔗 Live Demo
                    </a>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
