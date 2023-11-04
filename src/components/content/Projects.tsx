import Link from "next/link";
import { useState } from "react";
import projects from "../../data/projects";
import { Project } from "../../types/Project";

const Projects = () => {
  const [viewMore, setViewMore] = useState(false);

  return (
    <section id="projects" className="container">
      <span className="section-subheader">Project Spotlight</span>
      <h2 className="section-header">Things I've done</h2>
      <div className="row">
        {projects
          .filter((p) => (viewMore ? true : p.spotlight))
          .map((project: Project) => (
            <div key={`project-${project.id}`} className="col-md-4 mb-3">
              <Link href={`/projects/${project.id}`}>
                <div className="project-card">
                  <img
                    src={project.imageUrl}
                    className="project-card-image image-previewable"
                    alt="Project screenshot"
                    draggable={false}
                  />
                  <div className="project-info">
                    <p>
                      <span className="project-title">{project.name}</span>
                      <span className="project-description">
                        {project.shortDescription}
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        <p className="text-center">
          <button
            type="button"
            onClick={() => {
              setViewMore(!viewMore);
            }}
            className="btn project-btn-primary"
          >
            {viewMore ? "View less" : "View more"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Projects;
