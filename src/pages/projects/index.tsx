import Link from "next/link";
import Title from "../../components/Title";
import projects from "../../data/projects";
import { Project } from "../../types/Project";

export default function ProjectPage() {
  return (
    <>
      <Title title="Projects" />
      <div className="container project-page pt-3">
        <div className="row">
          <h1 className="section-header">Projects</h1>
          <div className="row">
            {projects.map((project: Project) => (
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
          </div>
        </div>
      </div>
    </>
  );
}
