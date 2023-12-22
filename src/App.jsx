import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main className="px-10 bg-gray-900 text-white min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
    </main>
  );
}

export default App;
