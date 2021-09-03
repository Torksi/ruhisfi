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
              Programming has been my hobby for about 10 years and have a great
              understanding of different techniques and programming languages. I
              like backend programming more but I can also do frontend when
              needed. For the past four years, I have participated in many
              different CTFs and Bug Bounties, so I have pretty good
              understanding of cyber security.
            </p>
            <p>
              I have been an administrator on one of the Finland&apos;s biggest
              gaming network with over 200 concurrent players. I have also
              managed many different servers both on cloud platforms and on
              dedicated machines.
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
