import { useState } from "react";

const ChatButton = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      {isChatOpen && (
        <div className="animate-fadeIn">
          <iframe
            src="https://ai-chatbot-two-opal.vercel.app/"
            title="AI Chatbot"
            className="w-80 h-[400px] border-none rounded-lg shadow-2xl bg-white/10 backdrop-blur-sm transition-all duration-300 ease-in-out"
          ></iframe>
        </div>
      )}
      <button
        onClick={() => setIsChatOpen(!isChatOpen)}
        className="group relative flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 ease-in-out"
      >
        <span className="relative z-10">
          {isChatOpen ? "Close" : "Let's Chat!"}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 ${
            isChatOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatButton; 