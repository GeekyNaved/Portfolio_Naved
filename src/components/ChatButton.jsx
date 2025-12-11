import { useState } from "react";
import Naved_Ahmed_Khan_Resume from "../Naved_Ahmed_Khan_Resume.pdf";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {isOpen && (
        <div className="animate-fadeIn bg-gray-900/90 text-white border border-gray-700 rounded-xl shadow-2xl p-4 w-72 md:w-80 space-y-3 backdrop-blur-sm">
          <div className="text-sm text-gray-200">
            Need something quickly? Pick an option below.
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="#contact"
              className="w-full text-left px-4 py-2 rounded-md bg-teal-600 hover:bg-teal-500 transition focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Share project details
            </a>
            <a
              href="mailto:navedahmed040@gmail.com?subject=Project inquiry"
              className="w-full text-left px-4 py-2 rounded-md border border-gray-600 hover:border-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Email me directly
            </a>
            <a
              href={Naved_Ahmed_Khan_Resume}
              download
              className="w-full text-left px-4 py-2 rounded-md border border-gray-600 hover:border-teal-400 transition focus:outline-none focus:ring-2 focus:ring-teal-300 focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Download my resume
            </a>
          </div>
          <p className="text-xs text-gray-400">
            Prefer a call? Include your timezone and a couple of slots.
          </p>
        </div>
      )}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle quick actions"
        aria-expanded={isOpen}
        className="group relative flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-gray-900"
      >
        <span className="relative z-10">
          {isOpen ? "Close panel" : "Quick actions"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default ChatButton;