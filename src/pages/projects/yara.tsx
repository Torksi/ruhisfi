import ImagePopup from "../../components/ImagePopup";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function YaraProject() {
  return (
    <ProjectTemplate projectName="Yara - Node.js wrapper">
      <div className="row mb-4">
        <div className="col-md-6">
          <div className="alert alert-warning">
            <strong>Note:</strong> This project is still in development and is
            not yet available for public use.
          </div>
          <p>
            I've been making a Node.js library for parsing and executing Yara
            rules. The library follows the official{" "}
            <a href="https://yara.readthedocs.io/en/stable/index.html">
              Yara specification
            </a>{" "}
            and is compatible with most of the functions. I started the project
            because I couldn't find any other libraries that would have the same
            functionality and wouldn't require external dependencies, such as
            the compiled version of Yara. More information about the project
            will be available later, once the project is ready for public use.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/yara/redline_demo.webp"
            alt="Example of a Yara rule"
            className="project-image img-fluid"
          />
        </div>
      </div>
    </ProjectTemplate>
  );
}
