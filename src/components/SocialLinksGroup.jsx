import {FaLinkedin, FaInstagramSquare, FaGithub} from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
const SocialLinksGroup = () => {
  return (
    <div className="flex items-center justify-center gap-5 text-3xl py-4 text-gray-500">
      <a href="#">
        <FaLinkedin />
      </a>
      <a href="#">
        <FaSquareXTwitter />
      </a>
      <a href="#">
        <FaGithub />
      </a>
      <a href="#">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default SocialLinksGroup;
