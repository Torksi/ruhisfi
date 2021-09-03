import { Fade } from "react-awesome-reveal";
import ExperienceTree from "../ExperienceTree";

const Experience = () => {
  return (
    <div className="content-section">
      <div className="row">
        <div className="col-md-6 mb-4">
          <h2>Work Experience</h2>
          <Fade triggerOnce direction="down" duration={1200}>
            <ExperienceTree
              experience={[
                {
                  name: "Gigantti Oy",
                  description: "Customer Support Technician",
                  length: "Aug'21 - Present",
                  location: "Vantaa, Finland",
                  yearsOnly: false,
                },
                {
                  name: "Observis Oy",
                  description: "Software Trainee",
                  length: "Aug'20 - Dec'20",
                  location: "Mikkeli, Finland",
                  yearsOnly: false,
                },
                {
                  name: "Gigantti Oy",
                  description: "Customer Support Technician",
                  length: "May'20 - Jul'20",
                  location: "Mikkeli, Finland",
                  yearsOnly: false,
                },
                {
                  name: "Observis Oy",
                  description: "Software Trainee",
                  length: "Feb'20 - May'20",
                  location: "Mikkeli, Finland",
                  yearsOnly: false,
                },
                {
                  name: "Gigantti Oy",
                  description: "Customer Support Technician",
                  length: "Aug'19 - Jan'20",
                  location: "Mikkeli, Finland",
                  yearsOnly: false,
                },
              ]}
            />
          </Fade>
        </div>
        <div className="col-md-6 mb-4">
          <h2>Education</h2>
          <Fade triggerOnce direction="down" duration={1200}>
            <ExperienceTree
              experience={[
                {
                  name: "Haaga-Helia University of Applied Sciences",
                  description:
                    "Bachelor of Business Administration, Business IT Technology",
                  length: "2021 - Present",
                  yearsOnly: true,
                },
                {
                  name: "Esedu Vocational College",
                  description:
                    "Vocational Qualification in Business Information Technology",
                  length: "2019 - 2021",
                  yearsOnly: true,
                },
              ]}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Experience;
