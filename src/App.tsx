import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { TechStack } from "./components/TechStack";
import { Philosophy } from "./components/Philosophy";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-warm-sand text-warm-brown font-body">
      <Navigation />
      <main id="home">
        <Hero />
        <Projects />
        <TechStack />
        <Philosophy />
      </main>
      <Footer />
    </div>
  );
}
