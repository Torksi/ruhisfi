import dayjs from "dayjs";
import Image from "next/image";

const Introduction = () => {
  return (
    <section id="about" className="container" style={{ marginTop: "5rem" }}>
      <div className="row">
        <div className="col-md-6">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className="mb-2"
          >
            <Image
              src="https://github.com/Torksi.png"
              height={"325px"}
              width={"325px"}
              className="mx-auto rounded-circle"
              loading="eager"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row pb-4">
            <div className="col-md-3">
              <span className="stat-number">
                {dayjs().diff("2003-11-24", "year")}
              </span>
              <span className="stat-description">Years Old</span>
            </div>
            <div className="col-md-3">
              <span className="stat-number">1100+</span>
              <span className="stat-description">Commits</span>
            </div>
            <div className="col-md-3">
              <span className="stat-number">
                {dayjs().diff("2011-01-01", "year")}+
              </span>
              <span className="stat-description">Years of Coding</span>
            </div>
            <div className="col-md-3">
              <span className="stat-number">40+</span>
              <span className="stat-description">Vulns. reported</span>
            </div>
          </div>
          <p>
            I&apos;m a Fullstack developer and a cybersecurity enthusiast from
            Helsinki, Finland. My focus area has always been backend development
            with <strong>TypeScript</strong> and <strong>Java</strong> because I
            enjoy creating the complex logic behind applications.
          </p>
          <p>
            I've been interested in computers since I was a kid and have gained
            vast experience in many different topics. Usually, I did one of the
            following things: Played videogames or modded them, tinkered with
            computer hardware, learned new programming languages, worked on my
            homelab and self-hosted servers or tried to find exploits from bug
            bounties.
          </p>
          <p>
            I also have the cutest dog in the world, and I love spending time
            with her. I also enjoy going hiking and camping in the summer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
