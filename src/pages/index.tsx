import About from "../components/content/About";
import Contact from "../components/content/Contact";
import Navbar from "../components/content/Navbar";
import Projects from "../components/content/Projects";
import Skills from "../components/content/Skills";
import Testimonials from "../components/content/Testimonials";
import Title from "../components/Title";

export default function Home() {
  return (
    <main>
      <Title />
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}
