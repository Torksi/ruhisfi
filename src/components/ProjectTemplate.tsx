import Link from "next/link";
import React from "react";
import Title from "./Title";

const ProjectTemplate = ({
  projectName,
  children,
}: {
  projectName: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Title title={`Project: ${projectName}`} />
      <div className="container project-page pt-3">
        <Link href="/#projects" className="breadcrumb-link">
          <i
            className="ri-arrow-left-line"
            style={{ verticalAlign: "center" }}
          />
          <span style={{ verticalAlign: "center", marginLeft: "0.2rem" }}>
            Go back
          </span>
        </Link>
        <div className="row">
          <h1 className="section-header">Project: {projectName}</h1>
          {children}
        </div>
      </div>
    </>
  );
};

export default ProjectTemplate;
