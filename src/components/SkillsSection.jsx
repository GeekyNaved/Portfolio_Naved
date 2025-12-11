const skillGroups = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Material UI"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo → RN CLI migrations", "Store deployment", "Crash analytics"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Auth & validation"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2/S3 basics)", "Vercel", "Netlify", "CI-ready setups"],
  },
  {
    title: "Quality",
    skills: ["Vitest", "React Testing Library", "Debugging & perf profiling", "Accessibility"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative mx-auto py-10 space-y-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
          Skills & Tooling
        </h2>
        <p className="text-gray-200 md:text-lg leading-8 max-w-3xl">
          Battle-tested stack for shipping mobile and web apps fast with reliability.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-gray-800/70 border border-gray-700 rounded-2xl p-4 shadow-lg">
            <h3 className="text-xl font-semibold text-white mb-3">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span key={skill} className="bg-gray-900 text-teal-200 text-xs px-3 py-1 rounded-full border border-gray-700">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;

