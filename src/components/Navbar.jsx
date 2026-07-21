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
          className="hidden md:inline-flex btn-secondary px-4 py-2"
        >
          Contact
        </a>
        <a
          href={Naved_Ahmed_Khan_Resume}
          className="btn-primary flex items-center gap-2 px-4 py-2 rounded-md hover:scale-105 transition-all"
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
