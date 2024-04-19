import ProjectCard from "./ProjectCard";
import neutrelleImage from "../assets/neutrelle.jpg";
import iFileVATImage from "../assets/ifilevat.jpg";
import macTassosImage from "../assets/mactassos.jpg";
import newsNerdImage from "../assets/newsNerd.png";

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
      id: 2,
      image: iFileVATImage,
      title: "iFileVAT",
      description:
        "VAT Return Submission platform for the UK businesses, simplifies the process of submitting VAT returns to HMRC & accessing related information on liabilities & payments.A user-friendly web platform with a modern interface,streamlined navigation & optimised performance.",
      link: "https://ifilevat-web-app-test.vercel.app",
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
    {
      id: 4,
      image: newsNerdImage,
      title: "News Nerd",
      description:
        "Powered by the Hacker News API, News Nerd delivers the latest and most relevant tech news straight to your fingertips. Say goodbye to clutter and distractions, and hello to a curated selection of tech updates presented in a clean and user-friendly interface. Stay ahead of the curve with News Nerd, your ultimate source for all things tech.",
      link: "https://news-nerd-beta.vercel.app",
      techStack: "Web App",
    },
  ];
  return (
    <div className="relative mx-auto py-10">
      <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
        My Recent Work
      </h2>
      <div className="grid md:grid-cols-3 gap-5">
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
