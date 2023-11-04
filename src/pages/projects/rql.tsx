import Link from "next/link";
import ImagePopup from "../../components/ImagePopup";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function RQLProject() {
  return (
    <ProjectTemplate projectName="RQL">
      <div className="row mb-4">
        <div className="col-md-6">
          <p>
            RQL (Ruhis Query Language) is a query language designed for querying
            security logs. It was initially designed to be used in{" "}
            <Link href="/projects/vanguard">Vanguard</Link>, but I decided to
            make it a separate project, because I think it could be useful for
            other projects as well. RQL is heavily inspired by{" "}
            <a
              href="https://learn.microsoft.com/en-us/azure/data-explorer/kusto/query/"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              KQL
            </a>{" "}
            and{" "}
            <a
              href="https://docs-cortex.paloaltonetworks.com/r/Cortex-XDR/Cortex-XDR-XQL-Language-Reference/Get-Started-with-XQL"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              XQL
            </a>
            . It is built with TypeScript and is available as an{" "}
            <a
              href="https://www.npmjs.com/package/@ruhisfi/rql"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              npm package
            </a>{" "}
            and the source code can be found on{" "}
            <a
              href="https://github.com/Torksi/rql"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              GitHub
            </a>
            .
          </p>
          <p>
            RQL can be used to query and filter large amounts of data from
            almost any data source. It is designed to be easy to use and to have
            a very simple syntax. Here is an example of a query that could be
            used to fetch the 100 most recent logs from a specific IP range:
            <code style={{ display: "block", marginTop: "0.75rem" }}>
              <span className="code-line">dataset = fw_traffic_raw </span>
              <span className="code-line">
                | filter src_ip incidr 192.168.1.0/24{" "}
              </span>
              <span className="code-line">
                | fields _time, src_ip, dst_ip, dst_port
              </span>
              <span className="code-line">| sort _time desc</span>
              <span className="code-line">| limit 100</span>
            </code>
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/rql/npm.png"
            alt="Screenshot of the npm page"
            className="project-image img-fluid"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/rql/tests.png"
            alt="Screenshot of some of the tests"
            className="project-image img-fluid"
          />
        </div>
        <div className="col-md-6">
          <span className="section-subheader">
            Quality assurance, testing and documentation
          </span>
          <h2 className="section-header">Testing and documentation</h2>
          <p>
            RQL has a comprehensive test suite that covers all of the query
            validation and execution logic. RQL is used in such critical systems
            that it is important to ensure that it works as expected.
          </p>
          <p>
            RQL syntax is very simple and easy to understand, but it also has
            comprehensive documentation that covers all of the features. The
            documentation is available on the{" "}
            <a
              href="https://github.com/Torksi/rql"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              GitHub page
            </a>
            .
          </p>
        </div>
      </div>
    </ProjectTemplate>
  );
}
