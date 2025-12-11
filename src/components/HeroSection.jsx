import SocialLinksGroup from "./SocialLinksGroup";
import myImg from "../assets/dev-ed-wave.png"
const HeroSection = () => {
  return (
    <div className="relative text-center px-6 py-10 md:p-14 space-y-6">
      <div className="space-y-2">
        <h1 className="text-5xl py-2 text-teal-400 md:text-6xl">Naved Ahmed Khan</h1>
        <p className="text-2xl md:text-3xl font-semibold">Full-stack React & React Native Engineer</p>
        <p className="text-md text-gray-200 mx-auto max-w-2xl leading-8 md:text-xl">
          I help teams launch web and mobile apps quickly with clean design and stable code. Recent work: fewer app crashes, happier users, and faster releases.
        </p>
      </div>
      <SocialLinksGroup />
      <div className="flex flex-wrap gap-3 justify-center">
        <a
          href="#contact"
          className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-9 py-3 border-none rounded-md text-md md:text-xl shadow-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-gray-900"
        >
          Book a call
        </a>
        <a
          href="#services"
          className="px-9 py-3 rounded-md border border-gray-700 text-white text-md md:text-xl hover:border-teal-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 focus:ring-offset-gray-900"
        >
          View services
        </a>
      </div>
      <div className="mt-10 overflow-hidden relative flex justify-center">
        <img
          src={myImg}
          alt="Portrait of Naved Ahmed Khan"
          loading="lazy"
          className="bg-gradient-to-b from-teal-500 rounded-full mx-auto object-cover w-72 h-72 md:w-96 md:h-96 border-4 border-teal-500/40 shadow-2xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
