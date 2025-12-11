import { useMemo, useState } from "react";

const initialState = { name: "", email: "", projectType: "", budget: "", timeline: "", message: "" };

const ContactSection = () => {
  const [form, setForm] = useState(initialState);
  const [error, setError] = useState("");

  const isValid = useMemo(() => {
    return form.name.trim().length > 1 && form.email.includes("@") && form.projectType && form.budget && form.timeline;
  }, [form]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) {
      setError("Please fill required fields: name, email, project type, budget, timeline.");
      return;
    }
    setError("");
    const body = encodeURIComponent(
      `Hi Naved,\n\nProject type: ${form.projectType}\nBudget: ${form.budget}\nTimeline: ${form.timeline}\n\nDetails:\n${form.message || "N/A"}\n\nThank you,\n${form.name}`
    );
    const mailto = `mailto:navedahmed040@gmail.com?subject=Project inquiry&body=${body}`;
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="relative mx-auto py-10 space-y-6">
      <div className="flex flex-col gap-3">
        <h2 className="text-3xl font-semibold underline decoration-teal-400 underline-offset-8">
          Let’s Talk
        </h2>
        <p className="text-gray-200 md:text-lg leading-8 max-w-3xl">
          Share what you need and I’ll respond within a day with next steps.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5 items-start">
        <form onSubmit={handleSubmit} className="md:col-span-2 bg-gray-800/70 border border-gray-700 rounded-2xl p-5 shadow-lg space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Name*
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                className="rounded-md px-3 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Your name"
                required
              />
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Email*
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="rounded-md px-3 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="you@example.com"
                required
              />
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Project type*
              <select
                name="projectType"
                value={form.projectType}
                onChange={handleChange}
                className="rounded-md px-3 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              >
                <option value="">Select</option>
                <option>React/Next.js Web App</option>
                <option>React Native Mobile App</option>
                <option>Backend APIs</option>
                <option>Performance/UX Revamp</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Budget (USD)*
              <select
                name="budget"
                value={form.budget}
                onChange={handleChange}
                className="rounded-md px-3 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              >
                <option value="">Select</option>
                <option>$1k - $2k</option>
                <option>$2k - $4k</option>
                <option>$4k - $7k</option>
                <option>$7k+</option>
              </select>
            </label>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Timeline*
              <select
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                className="rounded-md px-3 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                required
              >
                <option value="">Select</option>
                <option>2-4 weeks</option>
                <option>4-8 weeks</option>
                <option>8+ weeks</option>
              </select>
            </label>
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Project summary
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="rounded-md px-3 py-2 bg-gray-900 border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-teal-400"
                placeholder="Goals, users, key features..."
              />
            </label>
          </div>
          {error && <p className="text-red-400 text-sm">{error}</p>}
          <div className="flex flex-wrap gap-3">
            <button
              type="submit"
              className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-gray-900"
            >
              Book a call
            </button>
            <a
              href="mailto:navedahmed040@gmail.com"
              className="px-6 py-3 rounded-md border border-gray-700 text-white hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-gray-900"
            >
              Email directly
            </a>
          </div>
        </form>

        <div className="bg-gray-800/70 border border-gray-700 rounded-2xl p-5 shadow-lg space-y-3">
          <h3 className="text-xl font-semibold text-white">Availability</h3>
            <p className="text-gray-200 text-sm leading-6">
            20–30 hrs/week • Replies within 24 hours • Timezone: IST (overlaps with EU/UK/US East).
          </p>
          <div className="space-y-2 text-sm text-gray-200">
            <p className="font-semibold text-teal-300">What to expect</p>
            <ul className="space-y-1">
              <li>• Clear scope + milestones</li>
              <li>• Weekly demos</li>
              <li>• Code handoff + docs</li>
            </ul>
          </div>
          <p className="text-xs text-gray-400">
            Note: Embedded chatbot uses a third-party service; avoid sharing sensitive info there.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

