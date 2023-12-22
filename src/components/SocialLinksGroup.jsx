import { FaLinkedin, FaInstagramSquare, FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
const SocialLinksGroup = () => {
  return (
    <div className="flex items-center justify-center gap-5 text-3xl py-4 text-gray-500">
      <a href="https://www.linkedin.com/in/naved-ahmed-khan/" target="_blank">
        <FaLinkedin />
      </a>
      <a href="https://twitter.com/naved_js" target="_blank">
        <FaSquareXTwitter />
      </a>
      <a href="https://github.com/GeekyNaved" target="_blank">
        <FaGithub />
      </a>
      <a href="https://www.instagram.com/_naved.ahmed/?igsh=NGdsbjk3NXRyaWt1" target="_blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default SocialLinksGroup;
