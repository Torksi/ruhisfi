import { Experience } from "../types/Experience";

interface ExperienceTreeProps {
  experience: Experience[];
}

const ExperienceTree: React.FC<ExperienceTreeProps> = ({ experience }) => {
  return (
    <>
      <div className="experience-tree flex">
        <div className="experience-tree-trunk" />
        <div className="experience-tree-node">
          {experience.map((exp) => {
            return (
              <div key={`experience-${exp.name}-${exp.length}`}>
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
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExperienceTree;
