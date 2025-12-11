const ProjectCard = ({ title, problem, approach, result, link, linkLabel, secondaryLink, secondaryLabel, image, alt, techStack }) => {
    return (
        <div className='bg-gray-800/70 text-white shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl mt-8 p-4 flex flex-col h-full border border-gray-700'>
            <div className="w-full h-48 overflow-hidden rounded-xl bg-gray-900">
                <img src={image} alt={alt} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div className="py-4 flex justify-between items-start gap-2">
                <h3 className='text-2xl font-semibold'>{title}</h3>
                <div className="flex flex-wrap gap-2 justify-end">
                    {techStack?.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-full bg-gray-900 text-teal-200 px-3 py-1 text-xs font-medium border border-gray-700">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
            <div className='text-sm text-gray-200 leading-relaxed space-y-2 flex-1'>
                <p><span className="font-semibold text-white">Problem:</span> {problem}</p>
                <p><span className="font-semibold text-white">Approach:</span> {approach}</p>
                <p><span className="font-semibold text-white">Result:</span> {result}</p>
            </div>
            {link && (
                <div className="pt-4 mt-auto flex flex-wrap gap-3">
                    <a
                        href={link}
                        target='_blank'
                        rel="noreferrer noopener"
                        className='inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-cyan-500 to-teal-500 text-white text-base font-semibold px-5 py-2.5 rounded-md shadow-md hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900'
                    >
                        {linkLabel || "Live Demo"}
                    </a>
                    {secondaryLink && (
                        <a
                            href={secondaryLink}
                            target='_blank'
                            rel="noreferrer noopener"
                            className='inline-flex items-center justify-center w-full sm:w-auto bg-gray-900 border border-gray-700 text-white text-base font-semibold px-5 py-2.5 rounded-md hover:border-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900'
                        >
                            {secondaryLabel || "Secondary link"}
                        </a>
                    )}
                </div>
            )}
        </div>
    );
};

export default ProjectCard;
