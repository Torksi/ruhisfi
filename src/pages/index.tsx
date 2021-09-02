import Title from "../components/Title";

import Introduction from "../components/content/Introduction";
import Skills from "../components/content/Skills";
import Languages from "../components/content/Languages";
import Jumbotron from "../components/content/Jumbotron";

export default function Home() {
  return (
    <>
      <Title />
      <div className="container-flex">
        <Jumbotron />
      </div>
      <div className="container pt-5">
        <Introduction />
        <Skills />
        <Languages />
      </div>
    </>
  );
}
