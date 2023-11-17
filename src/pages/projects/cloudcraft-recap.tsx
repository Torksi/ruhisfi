import ImagePopup from "../../components/ImagePopup";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function CloudCraftRecapProject() {
  return (
    <ProjectTemplate projectName="CloudCraft Recap 2021">
      <div className="row mb-4">
        <div className="col-md-6">
          <p>
            CloudCraft Recap 2021 was a small project for the CloudCraft
            Minecraft server. The project was made in the middle of the night in
            about 5 hours. The website shows some statistics about the server
            and its players. The website was made with Next.js and it is
            deployed on Vercel. The website is available at{" "}
            <a
              href="https://recap.cloudcraft.fi/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              recap.cloudcraft.fi
            </a>{" "}
            and it's source code is available on{" "}
            <a
              href="https://github.com/Torksi/cloudcraft-recap"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              GitHub
            </a>
            . I haven't touched the project since it was made, so it's not
            really up to date anymore.
          </p>
          <p>
            The stats were collected from the server's Plan plugin. The plugin
            collects all kinds of data about the server and its players. The
            data was then saved to JSON files and uploaded to the website.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/cloudcraft-recap/front.png"
            alt="Screenshot of the webpage"
            className="project-image img-fluid"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/cloudcraft-recap/stats.png"
            alt="Screenshot of player stats"
            className="project-image img-fluid"
          />
        </div>
        <div className="col-md-6">
          <span className="section-subheader">Fun facts for the community</span>
          <h2 className="section-header">Idea & Purpose</h2>
          <p>
            The idea for this project came in during the New Year's Eve of 2021,
            and I eventually put the website together in the middle of the
            night. The website doesn't really serve any purpose, but it was a
            fun little project to make and I got some positive feedback from the
            community.
          </p>
        </div>
      </div>
    </ProjectTemplate>
  );
}
