import Image from "next/image";
import Link from "next/link";
import projects from "../../data/projects";
import { Project } from "../../types/Project";

const Projects = () => {
  return (
    <section id="experience" className="container">
      <span className="section-subheader">Projects</span>
      <h2 className="section-header">Things I've done</h2>
      <div className="row">
        {projects
          .filter((p) => p.spotlight)
          .map((project: Project) => (
            <div key={`project-${project.id}`} className="col-md-4">
              <div className="project-card">
                <Image
                  src={project.imageUrl}
                  alt={project.name}
                  width={275}
                  height={149}
                  className="project-image"
                  loading="lazy"
                />
                <p className="project-name">{project.name}</p>
                <p>{project.shortDescription}</p>
                <p title="Languages used">
                  <i className="ri-code-s-slash-fill project-icon" />
                  <span className="project-tags-list">
                    {project.languages.join(", ")}
                  </span>
                </p>
                <p title="Frameworks/APIs used" className="pb-2">
                  <i className="ri-tools-fill project-icon" />
                  <span className="project-tags-list">
                    {project.frameworks.join(", ")}
                  </span>
                </p>
                <Link href={`/projects/${project.id}`}>
                  <a className="project-button">
                    <i className="ri-arrow-right-up-line project-icon" />
                    <span style={{ verticalAlign: "center" }}>Read more</span>
                  </a>
                </Link>
              </div>
            </div>
          ))}
        <p className="text-center">
          View all of my projects{" "}
          <Link href="/projects">
            <a>here</a>
          </Link>
          !
        </p>
      </div>
    </section>
  );
};

export default Projects;