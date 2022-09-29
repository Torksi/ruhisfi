/* eslint-disable import/extensions */
import ExperienceTree from "../ExperienceTree";

import workExperience from "../../data/workExperience.json";
import education from "../../data/education.json";

const Experience = () => {
  return (
    <section id="experience" className="container">
      <span className="section-subheader">Work & Education</span>
      <h2 className="section-header">Experience</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <ExperienceTree experience={workExperience} />
        </div>
        <div className="col-md-6 mb-4">
          <ExperienceTree experience={education} />
        </div>
      </div>
    </section>
  );
};

export default Experience;
