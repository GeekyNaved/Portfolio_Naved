const steps = [
  { title: "Discover", detail: "Agree on goals, scope, and what success looks like." },
  { title: "Plan", detail: "Set milestones and how we’ll demo progress." },
  { title: "Build", detail: "Develop features with clear code and checks." },
  { title: "Ship", detail: "Polish, test, and release to web or app stores." },
  { title: "Support", detail: "Handle fixes, watch metrics, and iterate." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="relative mx-auto py-10 space-y-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
          Process
        </h2>
        <p className="text-gray-200 md:text-lg leading-8 max-w-3xl">
          A predictable flow so stakeholders know what’s coming next.
        </p>
      </div>
      <div className="grid md:grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <div key={step.title} className="bg-gray-800/70 border border-gray-700 rounded-2xl p-4 shadow-lg text-center">
            <div className="text-teal-300 font-semibold text-sm mb-1">Step {index + 1}</div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="text-gray-200 mt-2 text-sm leading-6">{step.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessSection;

