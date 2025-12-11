import Naved_Ahmed_Khan_Resume from "../Naved_Ahmed_Khan_Resume.pdf"
import { FiDownload } from "react-icons/fi"
const Navbar = () => {
  return (
    <div className="p-3 flex justify-between items-center">
      <h4 className="text-3xl text-slate-100">
        <span className=" text-teal-400">
          N
        </span>
        K
      </h4>
      <div className="flex items-center gap-3">
        <a
          href="#contact"
          className="hidden md:inline-flex items-center px-4 py-2 rounded-md border border-gray-700 text-white hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-gray-900"
        >
          Contact
        </a>
        <a
          href={Naved_Ahmed_Khan_Resume}
          className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md hover:scale-105 transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-gray-900"
          download
        >
          <FiDownload aria-hidden="true" />
          <span>Resume</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
