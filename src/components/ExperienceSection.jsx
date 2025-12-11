const ExperienceSection = () => {
  return (
    <section id="experience" className="relative mx-auto py-10 space-y-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
          Experience
        </h2>
        <p className="text-gray-200 md:text-lg leading-8 max-w-3xl">
          Selected engagements (2021–Present): contract and consulting roles shipping mobile and web apps that stay stable and easy to use.
        </p>
      </div>
      <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-5 shadow-lg space-y-3">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Contract & Consulting</h3>
            <p className="text-teal-300 text-sm">Remote • 2021 – Present</p>
          </div>
          <span className="text-sm text-gray-300">iSmart Apps, QuikieApps, 40Bears, Freelancing</span>
        </div>
        <ul className="space-y-2 text-gray-200 text-sm md:text-base">
          <li className="flex items-start gap-2">
            <span className="text-teal-300 mt-1">•</span>
            <span>Cut mobile app crashes and made users stick around longer.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-300 mt-1">•</span>
            <span>Led redesigns that made sites easier to use and quicker to load.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-300 mt-1">•</span>
            <span>Mentored junior devs, shipped on time with weekly demos, and kept code quality high.</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-teal-300 mt-1">•</span>
            <span>Fixed many production issues quickly to keep apps stable and calm for users.</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ExperienceSection;

