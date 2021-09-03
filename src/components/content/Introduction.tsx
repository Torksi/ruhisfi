import { Fade } from "react-awesome-reveal";
import Scroll from "react-scroll";
import Image from "next/image";
import kiiminkiPicture from "../../images/kiiminki.png";

const Introduction = () => {
  return (
    <Scroll.Element name="introduction">
      <div className="content-section" id="introduction">
        <div className="row">
          <div className="col-md-5">
            <Fade triggerOnce direction="left" duration={1200}>
              <Image
                draggable={false}
                alt="Kiiminginjoki, Finland"
                src={kiiminkiPicture}
                className="content-image"
              />
            </Fade>
          </div>
          <div className="col-md-7">
            <h2>About Me</h2>
            <p>
              Hey there! I&apos;m{" "}
              <span className="text-white">Toni Ruhanen</span>, a Finnish full
              stack developer. I am currently studying Business Information
              Technology at Haaga-Helia University of Applied Sciences.
            </p>
            <p>
              I have been programming for 10 years and have a great
              understanding of different techniques and programming languages.
            </p>
            <p>
              If you have any questions, feel free to message me on{" "}
              <a href="mailto:toni@ruhis.fi">toni@ruhis.fi</a>.
            </p>
          </div>
        </div>
      </div>
    </Scroll.Element>
  );
};

export default Introduction;
