import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import helsinkiPicture from "../../images/helsinki.jpg";

const Skills = () => {
  return (
    <div className="content-section" id="skills">
      <div className="row">
        <div className="col-md-5">
          <Fade triggerOnce direction="left" duration={800}>
            <Image
              alt="Helsinki"
              src={helsinkiPicture}
              className="content-image"
            />
          </Fade>
        </div>
        <div className="col-md-7">
          <h2>Skills</h2>
          <p>
            Hi! I&apos;m <span className="text-white">Toni</span>, a Finnish
            student at Haaga-Helia University of Applied Sciences studying
            Business Information Technology. Checkout my{" "}
            <span className="highlight">Github</span> account. You can also read
            my blog <a href="#">here</a>.
          </p>
          <ul>
            <li>test</li>
            <li>test 2</li>
            <li>test 3</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
