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
      <a href={Naved_Ahmed_Khan_Resume} className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md" download>
        <FiDownload />
        <button>
          Resume
        </button>
      </a>
    </div>
  );
};

export default Navbar;
