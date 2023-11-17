import Link from "next/link";
import ImagePopup from "../../components/ImagePopup";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function UrlcheckProject() {
  return (
    <ProjectTemplate projectName="urlcheck">
      <div className="row mb-4">
        <div className="col-md-6">
          <p>
            urlcheck is a tool I made for scanning and analysing suspicious
            URLs. The tool is publicly available at{" "}
            <a href="https://urlcheck.ruhis.fi/">urlcheck.ruhis.fi</a> and it's{" "}
            source code is available on{" "}
            <a
              href="https://github.com/Torksi/urlcheck"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              GitHub
            </a>
            . This project is no longer in active development, as I have
            integrated an improved version into my new project,{" "}
            <Link href="/projects/vanguard">Vanguard</Link>.
          </p>
          <p>
            The spark for this project came from my 9-5 job, where I was
            analyzing phishing emails. The tools that were available, weren't
            really that good, so I decided to make my own. The tool scans the
            URL, takes a screenshot and collects some data about the website.
            After I started using this tool, my workflow became much more
            efficient and I was able to do my job much faster, as I had all the
            information I needed in one place.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/urlcheck/urlcheck.png"
            alt="Screenshot of the webpage"
            className="project-image img-fluid"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/urlcheck/results.png"
            alt="Screenshot of the webpage"
            className="project-image img-fluid"
          />
        </div>
        <div className="col-md-6">
          <span className="section-subheader">
            Centralised collection of metadata
          </span>
          <h2 className="section-header">Analytics & Privacy</h2>
          <p>
            urlcheck collects metadata about the scanned URLs and stores it in a
            database. The collected data contains information such as the
            screenshot, list of contacted domains and IPs, the final HTML
            render, and more. This data can be used to analyze the URLs and
            detect possible threats. urlcheck also contains some basic checks
            and alerts for detecting some very common threats.
          </p>
          <p>
            urlcheck is made with privacy in mind. It only collects the least
            amount of data from the user as possible. All the scan results are
            only stored for 48 hours and then they are automatically purged.
            urlcheck makes sure that all requests to the scanned URLs are made
            by the server and not the user's browser. This ensures that the
            scanned website doesn't get any information about the user.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <span className="section-subheader">The future of urlcheck</span>
          <h2 className="section-header">Vanguard</h2>
          <p>
            After starting to work on{" "}
            <Link href="/projects/vanguard">Vanguard</Link>, I decided to
            integrate urlcheck into it. The new version of urlcheck is much more
            powerful and capable of detecting phishing sites with a high
            accuracy. Vanguard URL Scanner has all the features of the original
            version and more. It also allows integration with SOAR for automated
            analysis and response and some third-party services to enrich the
            scan results. The new version is not publicly available.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/vanguard/urlscan.png"
            alt="Screenshot of the webpage"
            className="project-image img-fluid"
          />
        </div>
      </div>
    </ProjectTemplate>
  );
}
