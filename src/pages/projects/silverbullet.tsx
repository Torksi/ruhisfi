import ImagePopup from "../../components/ImagePopup";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function SilverBulletProject() {
  return (
    <ProjectTemplate projectName="SilverBullet">
      <div className="row mb-4">
        <div className="col-md-6">
          <p>
            SilverBullet is a tool I made for internal red teaming purposes. It
            is a simple C2 reverse-shell client, that is able to bypass most
            publicly available enterprise XDRs. At first this project was just a
            simple proof-of-concept, but it has evolved into a powerful tool
            that I've used in multiple red teaming engagements.
          </p>
          <div className="alert alert-warning">
            The source code of this project is not available publicly and it
            will never be.
          </div>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/silverbullet.webp"
            alt="Blurred code of v3"
            className="project-image img-fluid"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/silverbullet/alpha.png"
            alt="Console output of v3"
            className="project-image img-fluid"
          />
        </div>
        <div className="col-md-6">
          <span className="section-subheader">Doing the "impossible"</span>
          <h2 className="section-header">Initial development</h2>
          <p>
            This whole project started after I was challenged as a joke to
            bypass a specific XDR. I started to research the XDR and found some
            loop-holes in it. A few days later I had a working prototype that
            was able to bypass the XDR. After the initial success, I started to
            research other XDRs and found out that most of them were vulnerable
            to the same technique.
          </p>
          <p>
            After the initial findings, I contacted some XDR vendors and
            disclosed the exploit method to them. Most of the vendors were
            really helpful and made the necessary changes to fix the issues.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <span className="section-subheader">Development continues</span>
          <h2 className="section-header">Next steps</h2>
          <p>
            Now, after over a year of development later, SilverBullet has
            evolved into a powerful tool that I've used in multiple red teaming
            engagements. The current version has a web dashboard for managing
            the clients and sending commands. The dashboard also has a list of
            predefined commands for some common tasks. The latest version also
            supports multiple different C2 protocols to avoid detection.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/silverbullet/dashboard.png"
            alt="Web interface of v5"
            className="project-image img-fluid"
          />
        </div>
      </div>
    </ProjectTemplate>
  );
}
