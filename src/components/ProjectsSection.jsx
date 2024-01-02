import React from 'react'
import ProjectCard from './ProjectCard'
import neutrelleImage from '../assets/neutrelle.jpg'
import iFileVATImage from '../assets/ifilevat.jpg'
import macTassosImage from '../assets/mactassos.jpg'

const ProjectsSection = () => {
    return (
        <div className="relative mx-auto py-10">
            <h2 className="text-3xl">My Recent Work</h2>
            <div className="flex flex-col gap-10 md:flex-row">

                <ProjectCard
                    image={<img src={neutrelleImage} />}
                    title="Neutrelle"
                    description="Glasgow-based start-up neutrelle empowers car owners to reduce their carbon footprint through innovative technology. They calculate CO2 emissions based on mileage and recommend tree offsets, revolutionising eco-friendly driving for a greener future."
                    link="https://neutrelle.vercel.app/impact_calculator"
                    techStack="Web App"
                />
                <ProjectCard
                    image={<img src={iFileVATImage} />}
                    title="iFileVAT"
                    description="VAT Return Submission platform for the UK businesses, simplifies the process of submitting VAT returns to HMRC and accessing related information on liabilities and payments."
                    link="https://ifilevat-web-app-test.vercel.app/"
                    techStack="Web App"
                />
                <ProjectCard
                    image={<img src={macTassosImage} />}
                    title="MacTassos"
                    description="Developing a branded mobile app solved challenges by offering unique features, enhancing brand visibility, and eliminating high subscription costs from third-party platforms. It ensured a cost-effective solution, maintaining brand control and enhancing the customer experience."
                    techStack="Mobile App"
                />
            </div>

        </div>
    )
}

export default ProjectsSection