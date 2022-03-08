/* eslint-disable import/extensions */
import { Fade } from "react-awesome-reveal";
import ExperienceTree from "../ExperienceTree";

import workExperience from "../../data/workExperience.json";
import education from "../../data/education.json";

const Experience = () => {
  return (
    <div className="content-section">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2>Work Experience</h2>
          <Fade triggerOnce direction="down" duration={1200}>
            <ExperienceTree experience={workExperience} />
          </Fade>
        </div>
        <div className="col-md-6 mb-4">
          <h2>Education</h2>
          <Fade triggerOnce direction="down" duration={1200}>
            <ExperienceTree experience={education} />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Experience;
