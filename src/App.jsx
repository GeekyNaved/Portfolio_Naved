import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import ChatButton from "./components/ChatButton";

function App() {
  return (
    <main className="font-quicksand px-5 md:px-8 bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <Footer />
      <ChatButton />
    </main>
  );
}

export default App;
