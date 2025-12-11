import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ChatButton from "./components/ChatButton";
import ServicesSection from "./components/ServicesSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import ProcessSection from "./components/ProcessSection";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <main className="font-quicksand px-5 md:px-8 bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <ProjectsSection />
      <ExperienceSection />
      <SkillsSection />
      <ProcessSection />
      <AboutSection />
      <ContactSection />
      <Footer />
      <ChatButton />
    </main>
  );
}

export default App;
