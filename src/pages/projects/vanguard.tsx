import Link from "next/link";
import ImagePopup from "../../components/ImagePopup";
import ProjectTemplate from "../../components/ProjectTemplate";

export default function VanguardProject() {
  return (
    <ProjectTemplate projectName="Vanguard">
      <div className="row mb-4">
        <div className="col-md-6">
          <p>
            Vanguard is a full-fledged SIEM with endpoint agents, SOAR,
            integrations and attack surface monitoring. The frontend is built
            with TypeScript on Next.js and the backend is built with TypeScript
            on Node. Endpoint agents are built, depending on the version with
            Rust or C#.
          </p>
          <p>
            For a long time I have wanted to collect all the logs and alerts
            from my home network and servers into a single platform. I have
            tried many open-source solutions, but none of them have had all the
            features I wanted. That's why I decided to create Vanguard. It has
            all the features I have gotten used to from enterprise solutions
            like Splunk and Palo Alto Cortex, but it doesn't cost a fortune to
            run.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/vanguard.png"
            alt="Screenshot of the incident view"
            className="project-image img-fluid"
            showAltInThumbnail
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/vanguard/soar.png"
            alt="Screenshot of an incident that has been handled by SOAR"
            className="project-image img-fluid"
            showAltInThumbnail
          />
        </div>
        <div className="col-md-6">
          <span className="section-subheader">
            Automating incident response
          </span>
          <h2 className="section-header">SOAR</h2>
          <p>
            One of the most important features of Vanguard is the SOAR. It
            allows the automation of handling alerts and incidents. This means
            that before an analyst even sees the alert, Vanguard has already
            done all the necessary enrichment and taken the necessary actions to
            mitigate the threat. Vanguard SOAR is capable of doing things like
            blocking IP addresses, enriching alerts, sending emails, creating
            tickets in 3rd-party apps, and much more. According to my tests, the
            average time to handle an incident from the moment it is detected is
            less than 60 seconds.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <span className="section-subheader">
            Analyzing suspicious websites
          </span>
          <h2 className="section-header">URL Scanning</h2>
          <p>
            I had previously created a tool called urlcheck, which I used to
            analyze suspicious websites. I integrated this tool into Vanguard to
            make it easier to analyze suspicious URLs. The scanning algorithm is
            drastically improved compared to the original publicly available
            version and it is now capable of detecting phishing sites with a
            high accuracy. The new version also allows email submissions and
            integration with SOAR for automated analysis and response.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/vanguard/urlscan.png"
            alt="Screenshot of the URL Scanner results page"
            className="project-image img-fluid"
            showAltInThumbnail
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/vanguard/logs.png"
            alt="Screenshot of the log view"
            className="project-image img-fluid"
            showAltInThumbnail
          />
        </div>
        <div className="col-md-6">
          <span className="section-subheader">
            Centralised log collection and analysis
          </span>
          <h2 className="section-header">Log Ingestion and IOCs</h2>
          <p>
            Vanguard is capable of collecting logs from almost any source. It
            has built-in support for syslog, Windows Event Log, and many other
            sources. It can also collect logs from custom sources using the HTTP
            API. Once the logs have been collected, they are parsed and
            normalized into a common format. This allows Vanguard to easily
            analyze and correlate logs from different sources. The logs can
            easily be queried using <Link href="/projects/rql">RQL</Link> which
            was specifically designed for this project.
          </p>
          <p>
            After the normalizing, Vanguard runs the logs through a set of IOCs
            to detect possible threats. If an IOC is detected, Vanguard will
            automatically raise an alert and take the necessary actions.
          </p>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-md-6">
          <span className="section-subheader">
            Interacting with the end-user
          </span>
          <h2 className="section-header">Email Integration</h2>
          <p>
            Vanguard has a built-in email integration that allows sending and
            receiving of emails. This is useful for example when an analyst
            needs to communicate with the end-user. Vanguard SOAR is also able
            to use this integration to notify the analyst, if there is a need
            for manual intervention.
          </p>
          <p>
            Vanguard also allows IOC rules to be applied to emails. This means
            that if an email contains an IOC, Vanguard will automatically raise
            an alert or incident. After the incident has been created, Vanguard
            SOAR playbooks can be used to handle the incident.
          </p>
        </div>
        <div className="col-md-6">
          <ImagePopup
            src="/images/projects/vanguard/email.png"
            alt="An example of an email that has been sent by Vanguard"
            className="project-image img-fluid"
            showAltInThumbnail
          />
        </div>
      </div>
      <div className="row mb-4">
        <span className="section-subheader">
          Technologies used, architecture, and more
        </span>
        <h2 className="section-header">Technical stuff</h2>
        <p>
          Most of the code in Vanguard is written in TypeScript. The only parts
          that are not written in TypeScript are the endpoint agents, which are
          written in Rust and C#. The database I chose to use is PostgreSQL and
          the logs are stored in Elasticsearch.
        </p>
        <p>
          Currently the Vanguard backend is running on a single server, but I
          have been planning to make it more scalable by splitting some
          components like SOAR and log ingestion to their own servers. This
          would allow the system to scale better and handle more load. Both the
          frontend and backend are running on Docker, which makes it easy to
          deploy and update the system.
        </p>
      </div>
    </ProjectTemplate>
  );
}
