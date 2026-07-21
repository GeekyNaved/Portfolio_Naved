import { useState } from "react";
import Naved_Ahmed_Khan_Resume from "../Naved_Ahmed_Khan_Resume.pdf";

const ChatButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed z-40 bottom-[max(1rem,env(safe-area-inset-bottom))] right-[max(1rem,env(safe-area-inset-right))] sm:bottom-6 sm:right-6 flex flex-col items-end gap-2 max-w-[calc(100vw-2rem)]">
      {isOpen && (
        <div className="animate-fadeIn bg-gray-900/95 text-white border border-gray-700 rounded-xl shadow-2xl p-4 w-72 md:w-80 max-w-full max-h-[min(24rem,calc(100vh-8rem))] overflow-y-auto space-y-3 backdrop-blur-sm">
          <div className="text-sm text-gray-200">
            Need something quickly? Pick an option below.
          </div>
          <div className="flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full text-left px-4 py-2.5 rounded-md"
            >
              Share project details
            </a>
            <a
              href="mailto:navedahmed040@gmail.com?subject=Project inquiry"
              className="btn-secondary w-full text-left px-4 py-2.5"
            >
              Email me directly
            </a>
            <a
              href={Naved_Ahmed_Khan_Resume}
              download
              className="btn-secondary w-full text-left px-4 py-2.5"
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
        className="btn-primary px-5 py-3 sm:px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out"
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
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
    </div>
  );
};

export default ChatButton;
