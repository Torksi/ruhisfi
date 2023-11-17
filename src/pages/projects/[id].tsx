import Image from "next/image";
import Markdown from "markdown-to-jsx";
import Link from "next/link";
import { GetStaticPaths } from "next";
import projects from "../../data/projects";
import Title from "../../components/Title";
import { Project } from "../../types/Project";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function ProjectPage({ project }: { project: Project }) {
  if (!project) {
    return (
      <>
        <Title title="Project not found" />
        <div className="container-flex">
          <div className="jumbotron vertical-center">
            <div className="container">
              <h1 className="text-center section-header">404</h1>
              <h3 className="text-center">Project not found.</h3>
              <p className="text-center pt-2">
                <Link
                  href="/"
                  style={{
                    textDecoration: "none",
                    color: "var(--color-text-highlight)",
                  }}
                >
                  Go back to home
                </Link>
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <ProjectTemplate projectName={project.name}>
      <div className="col-md-6 mb-4">
        <div className="mb-2">
          <Markdown>{project.shortDescription}</Markdown>
        </div>

        {project.date && (
          <p title="Date">
            <i className="ri-calendar-fill project-icon" />
            <span className="project-tags-list">
              <span className="text-white">Date: </span>
              {project.date}
            </span>
          </p>
        )}
        {project.team && (
          <p title="Date">
            <i className="ri-group-fill project-icon" />
            <span className="project-tags-list">
              <span className="text-white">Team: </span>
              {project.team}
            </span>
          </p>
        )}
        {project.version && (
          <p title="Version">
            <i className="ri-git-pull-request-fill project-icon" />
            <span className="project-tags-list">
              <span className="text-white">Version: </span>
              {project.version}
            </span>
          </p>
        )}
        {project.sourceUrl && (
          <a
            href={project.sourceUrl}
            target="_blank"
            className="project-button mt-2"
            rel="noreferrer"
          >
            <i className="ri-git-repository-line project-icon" />
            <span style={{ verticalAlign: "center" }}>Source Code</span>
          </a>
        )}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            className="project-button mt-2"
            rel="noreferrer"
          >
            <i className="ri-arrow-right-up-line project-icon" />
            <span style={{ verticalAlign: "center" }}>Live Demo</span>
          </a>
        )}
      </div>
      <div className="col-md-6">
        <Image
          src={project.imageUrl}
          alt={project.name}
          width={350}
          height={190}
          className="project-image"
        />
      </div>
    </ProjectTemplate>
  );
}

export async function getStaticProps({ params }: { params: any }) {
  const { id } = params;
  return { props: { project: projects.find((pr) => pr.id === id) } };
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};
