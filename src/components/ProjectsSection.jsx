import ProjectCard from "./ProjectCard";
import neutrelleImage from "../assets/neutrelle.png";
import iFileVATImage from "../assets/ifilevat.png";
import macTassosImage from "../assets/mactassos.png";
import newsNerdImage from "../assets/newsNerd.png";
import securePassImage from "../assets/securePass.png";
import dentalImage from "../assets/dental.png";
import pathEdImage from "../assets/pathEd.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      image: neutrelleImage,
      title: "Neutrelle",
      description:
        "Glasgow-based start-up neutrelle empowers car owners to reduce their carbon footprint through innovative technology. They calculate CO2 emissions based on mileage and recommend tree offsets, revolutionising eco-friendly driving for a greener future.",
      link: "https://neutrelle.vercel.app/impact_calculator",
      techStack: "Web App",
    },
    {
      id: 4,
      image: newsNerdImage,
      title: "News Nerd",
      description:
        "Powered by the Hacker News API, News Nerd delivers the latest and most relevant tech news straight to your fingertips. Say goodbye to clutter and distractions, and hello to a curated selection of tech updates presented in a clean and user-friendly interface. Stay ahead of the curve with News Nerd, your ultimate source for all things tech.",
      link: "https://news-nerd-beta.vercel.app",
      techStack: "Web App",
    },
    {
      id: 5,
      image: securePassImage,
      title: "Secure Pass",
      description:
        "Secure Pass is a modern web application designed for robust and secure password management. Built using the React JS library, it offers a seamless user experience with a focus on both functionality and security. Utilizing the powerful Crypto JS library,It ensures that all sensitive data, such as passwords and personal information, are encrypted and protected.",
      link: "https://securepass-mu.vercel.app",
      techStack: "Web App",
    },
    {
      id: 5,
      image: dentalImage,
      title: "Happy Dental",
      description:
        "Happy Dental is a responsive website built with Next.js and styled with Tailwind CSS. It offers a user-friendly experience with easy navigation through services, patient info, and contact details. Optimized for performance, it ensures fast loading times and accessibility, providing a professional online presence for dental practices.",
      link: "https://happy-dental.vercel.app",
      techStack: "Website",
    },
    {
      id: 6,
      image: pathEdImage,
      title: "PathEd",
      description:
        "PathEd is a React Native app designed as a comprehensive Learning Management System (LMS). It allows users to be tutors or learners, offering features like watching courses, purchasing them, adding to the cart or favorites, and signing in via Google. With a seamless user experience, PathEd provides a versatile platform for online learning and teaching, enhancing accessibility and engagement in the educational ecosystem.",
      link: "https://play.google.com/store/apps/details?id=com.pathed",
      techStack: "Mobile App",
    },
    {
      id: 2,
      image: iFileVATImage,
      title: "iFileVAT",
      description:
        "VAT Return Submission platform for the UK businesses, simplifies the process of submitting VAT returns to HMRC & accessing related information on liabilities & payments.A user-friendly web platform with a modern interface,streamlined navigation & optimised performance.",
      // link: "https://ifilevat-web-app-test.vercel.app",
      techStack: "Web App",
    },
    {
      id: 3,
      image: macTassosImage,
      title: "MacTassos",
      description:
        "Developing a branded mobile app solved challenges by offering unique features, enhancing brand visibility, and eliminating high subscription costs from third-party platforms. It ensured a cost-effective solution, maintaining brand control and enhancing the customer experience.",
      techStack: "Mobile App",
    },
  ];
  return (
    <div className="relative mx-auto py-10">
      <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
        My Recent Work
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects?.map((item, key) => {
          return (
            <ProjectCard
              key={key}
              image={<img src={item.image} />}
              title={item.title}
              description={item.description}
              link={item.link}
              techStack={item.techStack}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsSection;
