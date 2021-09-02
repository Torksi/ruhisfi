import Title from "../components/Title";

import Introduction from "../components/content/Introduction";
import Languages from "../components/content/Languages";
import Jumbotron from "../components/content/Jumbotron";
import Experience from "../components/content/Experience";

export default function Home() {
  return (
    <>
      <Title />
      <div className="container-flex">
        <Jumbotron />
      </div>
      <div className="container pt-2">
        <Introduction />
        <Experience />
        <Languages />
      </div>
    </>
  );
}
