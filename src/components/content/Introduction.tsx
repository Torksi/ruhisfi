import dayjs from "dayjs";
import Image from "next/image";
import getTotalCommits from "../../data/commits";

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
              height="325"
              width="325"
              alt="Toni Ruhanen"
              className="mx-auto rounded-circle no-select"
              loading="eager"
              unoptimized
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="row pb-4 no-select">
            <div className="col-md-3">
              <span className="stat-number">
                {dayjs().diff("2003-11-24", "year", false)}
              </span>
              <span className="stat-description">Years Old</span>
            </div>
            <div className="col-md-3">
              <span className="stat-number">{getTotalCommits()}+</span>
              <span className="stat-description">Commits</span>
            </div>
            <div className="col-md-3">
              <span className="stat-number">
                {dayjs().diff("2011-01-01", "year")}+
              </span>
              <span className="stat-description">Years of Coding</span>
            </div>
            <div className="col-md-3">
              <span className="stat-number">
                {dayjs().diff("2017-01-01", "year")}+
              </span>
              <span className="stat-description">Years of Infosec</span>
            </div>
          </div>
          <p>
            I'm a Fullstack developer and a cybersecurity enthusiast from Espoo,
            Finland. My focus area has always been backend development with{" "}
            <strong>TypeScript</strong> and <strong>Java</strong> because I
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
            During my free time, I enjoy hiking, camping in the summer, and
            playing with my dogs. I'm also a volunteer firefighter.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
