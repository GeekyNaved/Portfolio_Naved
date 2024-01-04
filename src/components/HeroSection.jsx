import SocialLinksGroup from "./SocialLinksGroup";
import myImg from "../assets/dev-ed-wave.png"
const HeroSection = () => {
  return (
    <div className="relative text-center px-6 py-10 md:p-14">
      <h1 className="text-5xl py-2 text-teal-400 md:text-6xl">Naved Ahmed Khan</h1>
      <p className="text-2xl py-2 md:text-3xl">Web and App Developer</p>
      <p className="text-md py-5 text-gray-200 mx-auto max-w-xl leading-8 md:text-xl">
        Having worked with various companies, I'm here to bring your projects to life. Let's collaborate and turn your ideas into reality. Join me down below and let's get cracking!
      </p>
      <SocialLinksGroup />
      <div className="pt-5">
        <a
          href="mailto:navedahmed040@gmail.com"
          className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-9 py-3 border-none rounded-md text-md md:text-xl"
        >
          Let&apos;s Chat
        </a>
      </div>
      <div className="mt-20 overflow-hidden relative">
        <img src={myImg} className="bg-gradient-to-b from-teal-500 rounded-full mx-auto object-cover w-80 h-80 md:w-96 md:h-96" />
      </div>
    </div>
  );
};

export default HeroSection;
