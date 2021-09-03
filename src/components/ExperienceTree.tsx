/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Experience } from "../types";

interface ExperienceTreeProps {
  experience: Experience[];
}

const ExperienceTree: React.FC<ExperienceTreeProps> = ({ experience }) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <div className="experience-tree flex">
        <div className="experience-tree-trunk" />
        <div className="experience-tree-node">
          {experience.map((exp) => {
            if (!showMore && experience.indexOf(exp) > 2) {
              return null;
            }
            return (
              <Fade
                key={`experience-${exp.name}-${exp.length}`}
                triggerOnce
                direction="down"
                duration={800}
              >
                <div className="experience-tree-dot" />
                <div className="experience-container">
                  <h6 className="mb-1">
                    {exp.name}{" "}
                    {!exp.yearsOnly && (
                      <span className="text-sm color-body">({exp.length})</span>
                    )}
                  </h6>
                  <p className="mb-1">{exp.description}</p>
                  {exp.location && (
                    <p className="text-sm">
                      <i className="fa fa-map-marker-alt" /> {exp.location}
                    </p>
                  )}

                  {exp.yearsOnly && (
                    <p className="text-sm color-body">({exp.length})</p>
                  )}
                </div>
              </Fade>
            );
          })}
        </div>
      </div>
      {!showMore && experience.length > 3 && (
        <p className="text-center">
          <a
            onClick={() => setShowMore(true)}
            title="Show more"
            className="cursor-pointer color-body"
          >
            <i className="far fa-chevron-down" />
          </a>
        </p>
      )}
    </>
  );
};

export default ExperienceTree;
