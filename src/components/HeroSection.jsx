import SocialLinksGroup from "./SocialLinksGroup";

const HeroSection = () => {
  return (
    <div className="relative mx-auto text-center">
      <h1 className="text-4xl">Naved Khan</h1>
      <p>Web & App Developer</p>
      <SocialLinksGroup />
      <a
        href="#"
        className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md"
      >
        Let&apos;s Chat
      </a>
    </div>
  );
};

export default HeroSection;
