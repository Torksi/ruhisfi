import { Fade } from "react-awesome-reveal";
import Scroll from "react-scroll";

const Introduction = () => {
  return (
    <Fade triggerOnce>
      <Scroll.Element name="introduction">
        <div className="content-section" id="home">
          <div className="row">
            <div className="col-md-12">
              <h1>Toni Ruhanen</h1>
              <p>
                Hey! I&apos;m <span className="text-white">Toni</span>, a
                Finnish student at Haaga-Helia University of Applied Sciences
                studying Business Information Technology.
              </p>
            </div>
          </div>
        </div>
      </Scroll.Element>
    </Fade>
  );
};

export default Introduction;
