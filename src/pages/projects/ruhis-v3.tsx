import ImagePopup from "../../components/ImagePopup";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function RuhisProject() {
  return (
    <ProjectTemplate projectName="Ruhis">
      <div className="row mb-4">
        <div className="col-md-6">
          <p>
            Ruhis is my personal portfolio website. I made it to showcase my
            projects and skills. It's source code is available on{" "}
            <a
              href="https://github.com/Torksi/ruhisfi"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              GitHub
            </a>
            . The website is automatically deployed to Vercel using GitHub
            actions. There are some hidden easter eggs on the website, so make
            sure to click around and try to find them.
          </p>
          <p>
            I made my first website in 2012 and since then, I've remade it
            probably like 50 times. I've used many different technologies and
            frameworks, but I always end up remaking it, because I want to try
            something new. This time I decided to use Next.js, and it has been
            one of my favorite frameworks so far.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/ruhis2.png"
            alt="Screenshot of the webpage"
            className="project-image img-fluid"
          />
        </div>
      </div>
    </ProjectTemplate>
  );
}
