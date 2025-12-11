import ProjectCard from "./ProjectCard";
import neutrelleImage from "../assets/neutrelle.png";
import iFileVATImage from "../assets/ifilevat.png";
import macTassosImage from "../assets/mactassos.png";
// import newsNerdImage from "../assets/newsNerd.png";
// import securePassImage from "../assets/securePass.png";
import dentalImage from "../assets/dental.png";
import pathEdImage from "../assets/pathEd.png";
import utellsImage from "../assets/utells-app.png";
import goalOasisImage from "../assets/goaloasis.png";

const projects = [
  {
    id: "utells",
    image: utellsImage,
    alt: "Utells mobile app showing hotel booking, services, and room upgrade screens",
    title: "Utells",
    problem: "Travelers needed one app to book hotels and order in-house services.",
    approach: "Built a React Native + React app with ordering, migrated from Expo to RN CLI, and managed store releases.",
    result: "Live on app stores with smoother ordering and fewer bugs across 200+ fixes.",
    link: "https://apps.apple.com/us/app/utells/id6740999055",
    linkLabel: "App Store",
    secondaryLink: "https://play.google.com/store/apps/details?id=app.flowerresort.utells",
    secondaryLabel: "Play Store",
    techStack: ["React Native", "React", "Node", "Nest.js", "MongoDB"],
  },
  {
    id: "neutrelle",
    image: neutrelleImage,
    alt: "Neutrelle carbon calculator dashboard",
    title: "Neutrelle",
    problem: "Drivers wanted an easy way to see their car’s CO2 impact.",
    approach: "Built a clean calculator with simple steps and tips to offset.",
    result: "Production-ready experience that’s easy to understand.",
    link: "https://neutrelle.vercel.app/impact_calculator",
    linkLabel: "Live demo",
    techStack: ["React", "Tailwind", "Node/Express", "MongoDB"],
  },
  {
    id: "happy-dental",
    image: dentalImage,
    alt: "Happy Dental clinic website hero",
    title: "Happy Dental",
    problem: "Clinic needed a friendly site that works on any device.",
    approach: "Built a fast Next.js site with clear sections and smooth navigation.",
    result: "Mobile-friendly site that loads fast and feels welcoming.",
    link: "https://happy-dental.vercel.app",
    linkLabel: "Live site",
    techStack: ["Next.js", "Tailwind"],
  },
  {
    id: "pathed",
    image: pathEdImage,
    alt: "PathEd learning app screens",
    title: "PathEd",
    problem: "Tutors and learners needed one place to teach and learn on the go.",
    approach: "React Native app with lessons, purchases, favorites, and Google sign-in.",
    result: "Live on Play Store with smooth lessons and checkout.",
    link: "https://play.google.com/store/apps/details?id=com.pathed",
    linkLabel: "Play Store",
    techStack: ["React Native", "Firebase", "Google Auth"],
  },
  {
    id: "ifilevat",
    image: iFileVATImage,
    alt: "iFileVAT VAT submission dashboard",
    title: "iFileVAT",
    problem: "UK businesses found VAT submissions confusing.",
    approach: "Built a clear web app for returns, payments, and history.",
    result: "Simpler VAT workflow with a clean interface.",
    techStack: ["React", "Node/Express", "MongoDB"],
  },
  {
    id: "mactassos",
    image: macTassosImage,
    alt: "MacTassos branded app preview",
    title: "MacTassos",
    problem: "Brand wanted its own mobile app without heavy platform fees.",
    approach: "Built a branded React Native app with the must-have features.",
    result: "Better brand presence and customer experience.",
    techStack: ["React Native", "Design system"],
  },
  {
    id: "goaloasis",
    image: goalOasisImage,
    alt: "GoalOasis goal tracking app",
    title: "GoalOasis",
    problem: "People needed a simple way to plan long-term goals without getting lost in endless to-dos.",
    approach: "Built a React Native app with goals, milestones, and tasks on a color-coded timeline, plus reminders to keep users on track.",
    result: "Users reported clearer progress and faster completion of their milestones during beta.",
    link: "https://www.goaloasis.com/",
    linkLabel: "Visit website",
    techStack: ["React Native", "React", "Firebase"],
  },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="relative mx-auto py-10">
      <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
        My Recent Work
      </h2>
      <p className="text-gray-200 md:text-lg leading-8 max-w-3xl py-3">
        Selected projects showing product thinking, full-stack delivery, and measurable outcomes.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((item) => (
          <ProjectCard
            key={item.id}
            image={item.image}
            alt={item.alt}
            title={item.title}
            problem={item.problem}
            approach={item.approach}
            result={item.result}
            link={item.link}
            linkLabel={item.linkLabel}
            secondaryLink={item.secondaryLink}
            secondaryLabel={item.secondaryLabel}
            techStack={item.techStack}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
