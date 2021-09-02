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
          <p>Coming soon.</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
