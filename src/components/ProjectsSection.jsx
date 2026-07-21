import ProjectCard from "./ProjectCard";
import ddpImage from "../assets/ddp.png";
import neutrelleImage from "../assets/neutrelle.png";
import iFileVATImage from "../assets/ifilevat.png";
import macTassosImage from "../assets/mactassos.png";
// import newsNerdImage from "../assets/newsNerd.png";
// import securePassImage from "../assets/securePass.png";
import dentalImage from "../assets/dental.png";
import pathEdImage from "../assets/pathEd.png";
import utellsImage from "../assets/utells-app.png";
// import goalOasisImage from "../assets/goaloasis.png";

const projects = [
  {
    id: "dar-ul-dawa",
    image: ddpImage,
    alt: "DAR-UL-DAWA OPC Ltd pharmaceutical product portal homepage",
    title: "DAR-UL-DAWA OPC Ltd",
    problem:
      "Pharmaceutical distributor needed a professional site to showcase products and reach healthcare providers.",
    approach:
      "Built a fast product portal with category browsing and an admin CMS so the team can update inventory without developer help.",
    result:
      "Healthcare providers can browse products and submit inquiries on any device, with faster content updates for the business.",
    link: "https://www.daruldawapharmulations.com",
    linkLabel: "Live demo",
    impactHighlights: ["Self-serve product catalog", "Admin CMS for fast updates"],
    techStack: ["React", "Node", "MongoDB"],
  },
  {
    id: "utells",
    image: utellsImage,
    alt: "Utells mobile app showing hotel booking, services, and room upgrade screens",
    title: "Utells",
    problem: "Travelers needed one app to book hotels and order in-house services.",
    approach:
      "Built a unified hotel app and upgraded core architecture to remove platform limits and speed up feature delivery.",
    result: "Live on both app stores with smoother ordering, fewer crashes, and 200+ fixes shipped.",
    link: "https://apps.apple.com/us/app/utells/id6740999055",
    linkLabel: "App Store",
    secondaryLink: "https://play.google.com/store/apps/details?id=app.flowerresort.utells",
    secondaryLabel: "Play Store",
    impactHighlights: ["200+ bug fixes shipped", "Store-ready release on iOS & Android"],
    techStack: ["React Native", "React", "Node", "Nest.js", "MongoDB"],
  },
  {
    id: "neutrelle",
    image: neutrelleImage,
    alt: "Neutrelle carbon calculator dashboard",
    title: "Neutrelle",
    problem: "Drivers wanted an easy way to see their car’s CO2 impact.",
    approach: "Built a clean calculator with simple steps and tips to offset emissions.",
    result: "Production-ready experience that turns complex data into clear, actionable insights.",
    link: "https://neutrelle.vercel.app/impact_calculator",
    linkLabel: "Live demo",
    impactHighlights: ["Production-ready launch", "Clear 3-step user flow"],
    techStack: ["React", "Tailwind", "Node/Express", "MongoDB"],
  },
  {
    id: "happy-dental",
    image: dentalImage,
    alt: "Happy Dental clinic website hero",
    title: "Happy Dental",
    problem: "Clinic needed a friendly site that works on any device.",
    approach: "Built a fast Next.js site with clear sections, accessibility fixes, and a performance pass.",
    result: "Mobile-friendly site with improved load speeds and a welcoming patient experience.",
    link: "https://happy-dental.vercel.app",
    linkLabel: "Live demo",
    impactHighlights: ["Up to 40% faster page loads", "Mobile-first responsive design"],
    techStack: ["Next.js", "Tailwind"],
  },
  {
    id: "pathed",
    image: pathEdImage,
    alt: "PathEd learning app screens",
    title: "PathEd",
    problem: "Tutors and learners needed one place to teach and learn on the go.",
    approach: "Built a React Native app with lessons, purchases, favorites, and Google sign-in.",
    result: "Live on Play Store with smooth lessons, checkout, and fewer drop-offs during onboarding.",
    link: "https://play.google.com/store/apps/details?id=com.pathed",
    linkLabel: "Play Store",
    impactHighlights: ["Play Store launch", "Smooth in-app checkout"],
    techStack: ["React Native", "Firebase", "Google Auth"],
  },
  {
    id: "ifilevat",
    image: iFileVATImage,
    alt: "iFileVAT VAT submission dashboard",
    title: "iFileVAT",
    problem: "UK businesses found VAT submissions confusing and time-consuming.",
    approach: "Built a clear web app for returns, payments, and submission history in one place.",
    result: "Simpler VAT workflow that reduces form confusion and saves teams time each filing cycle.",
    impactHighlights: ["Streamlined VAT submissions", "Reduced form confusion"],
    techStack: ["React", "Node/Express", "MongoDB"],
  },
  {
    id: "mactassos",
    image: macTassosImage,
    alt: "MacTassos branded app preview",
    title: "MacTassos",
    problem: "Brand wanted its own mobile app without heavy platform fees.",
    approach: "Built a branded React Native app with the must-have features and a reusable design system.",
    result: "Stronger brand presence and a direct customer channel without third-party marketplace costs.",
    impactHighlights: ["Branded mobile presence", "No third-party platform fees"],
    techStack: ["React Native", "Design system"],
  },
  // {
  //   id: "goaloasis",
  //   image: goalOasisImage,
  //   alt: "GoalOasis goal tracking app",
  //   title: "GoalOasis",
  //   problem: "People needed a simple way to plan long-term goals without getting lost in endless to-dos.",
  //   approach: "Built a React Native app with goals, milestones, and tasks on a color-coded timeline, plus reminders to keep users on track.",
  //   result: "Users reported clearer progress and faster completion of their milestones during beta.",
  //   impactHighlights: ["Beta users hit milestones faster", "Clear goal-tracking UX"],
  //   techStack: ["React Native", "React", "Firebase"],
  // },
];

const ProjectsSection = () => {
  return (
    <div id="projects" className="relative mx-auto py-10">
      <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
        My Recent Work
      </h2>
      <p className="text-gray-200 md:text-lg leading-8 max-w-3xl py-3">
        Real products shipped for real users—each with measurable impact on performance, reliability, and growth.
        Technical depth for engineers, clear outcomes for founders.
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
            impactHighlights={item.impactHighlights}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsSection;
