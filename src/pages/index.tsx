import Introduction from "../components/content/Introduction";
import Jumbotron from "../components/content/Jumbotron";
import Experience from "../components/content/Experience";
import Projects from "../components/content/Projects";
import Title from "../components/Title";
import Contact from "../components/content/Contact";

export default function Home() {
  return (
    <>
      <Title title="Home" />
      <div className="container-flex">
        <Jumbotron />
      </div>
      <div className="container pt-2">
        <Introduction />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </>
  );
}
