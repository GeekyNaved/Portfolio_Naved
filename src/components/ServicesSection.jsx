const services = [
  {
    title: "MVP Build (Web + Mobile)",
    scope: "Take your idea to a working app with sign-up, core screens, and payments.",
    highlights: ["Web + mobile together", "Release-ready builds", "Clean handoff & docs"],
    deliverables: ["React/Next.js web", "React Native app shell", "Backend APIs (Node/Express)", "Handoff docs"],
  },
  {
    title: "React Native Release",
    scope: "Get your mobile app store-ready or steady if it’s already live.",
    highlights: ["Fewer crashes", "Store-friendly builds", "Analytics ready"],
    deliverables: ["Crash fixes", "Store-ready builds", "In-app analytics", "Performance tune-up"],
  },
  {
    title: "Web App Revamp",
    scope: "Make your web app cleaner, faster, and easier to use.",
    highlights: ["Sharper UI", "More accessible", "Faster load"],
    deliverables: ["UI refresh", "Accessibility fixes", "Performance pass", "Reusable components"],
  },
  {
    title: "Backend APIs",
    scope: "APIs that are safe, documented, and ready for your frontend to plug into.",
    highlights: ["Secure by default", "Logging included", "Clear API docs"],
    deliverables: ["Node/Express services", "MongoDB schema", "Auth + validation", "Docs + handoff"],
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative mx-auto py-10 space-y-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
          Services
        </h2>
        <p className="text-gray-200 md:text-lg max-w-3xl leading-8">
          Simple packages founders can pick and start with—clear scope, steady updates, and quick replies.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        {services.map((service) => (
          <div key={service.title} className="bg-gray-800/70 border border-gray-700 rounded-2xl p-5 shadow-lg hover:-translate-y-1 transition-transform">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              </div>
            </div>
            <p className="text-gray-200 mt-3 leading-7">{service.scope}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              {service.highlights.map((badge) => (
                <span key={badge} className="bg-teal-500/15 text-teal-200 text-xs px-3 py-1 rounded-full border border-teal-500/30">
                  {badge}
                </span>
              ))}
            </div>
            <ul className="mt-4 space-y-2 text-sm text-gray-200">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-teal-300 mt-1">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

