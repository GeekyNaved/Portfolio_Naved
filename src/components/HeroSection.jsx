import SocialLinksGroup from "./SocialLinksGroup";
import myImg from "../assets/dev-ed-wave.png"
const HeroSection = () => {
  return (
    <div className="relative mx-auto text-center py-10">
      <h1 className="text-4xl">Naved Ahmed Khan</h1>
      <p>Web and App Developer</p>
      <SocialLinksGroup />
      <a
        href="mailto:navedahmed040@gmail.com"
        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md"
      >
        Let&apos;s Chat
      </a>
      <img src={myImg} className="bg-gradient-to-b from bg-teal-500 rounded-full mx-auto mt-20 w-66 h-56 relative overflow-hidden bg-cover" />
    </div>
  );
};

export default HeroSection;
