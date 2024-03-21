import dayjs from "dayjs";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ marginTop: "1rem" }}>
      <div className="row">
        <div className="col-md-12">
          <span className="section-subheader">
            Skills, certifications and specialities
          </span>
          <h2 className="section-header">What can I do?</h2>

          <Tabs>
            <div className="row">
              <div className="col-md-3">
                <TabList>
                  <Tab>Information Security</Tab>
                  <Tab>Programming</Tab>
                  <Tab>Sysadmin</Tab>
                  <Tab>Hobbies</Tab>
                  <Tab>Certifications</Tab>
                </TabList>
              </div>
              {/* TODO: Come up with some text for the skills section */}
              <div className="col-md-9">
                <TabPanel>
                  <div className="tab-content tab-content-infosec">
                    <div className="content col-md-9">
                      <p>
                        Information Security has been a hobby of mine for a long
                        time now. Even though I'm still relatively young, I've
                        already gained a lot of experience in the field. I have
                        seen both sides of the coin, as I've done both offensive
                        and defensive work.
                      </p>
                      <p>
                        I have a lot of experience in <b>Incident Response</b>,
                        and it's one of my favorite things to do. I enjoy going
                        thru logs and finding out what happened, and piecing
                        everything together. Some of my other favorites things
                        in the field are <b>Threat Hunting</b> and{" "}
                        <b>Penetration Testing</b>. I also have good
                        communication skills, and I like cooperation between
                        different stakeholders.
                      </p>
                      <p>
                        During my so far pretty short but eventful career, I've
                        also had the opportunity to work with many different SOC
                        operators, internal security teams, as well as some
                        government agencies like Traficom (CERT-FI). In 2019 I
                        was interviewed by Traficom for{" "}
                        <a
                          href="https://www.kyberturvallisuuskeskus.fi/fi/ajankohtaista/toni-ruhanen-ja-muut-valkohatut-kuuluvat-hyvisjengiin"
                          target="_blank"
                          referrerPolicy="no-referrer"
                        >
                          their website
                        </a>{" "}
                        about my experiences as a white hat hacker.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content tab-content-programming">
                    <div className="content col-md-9">
                      <p>
                        I've been programming for about{" "}
                        {dayjs().diff("2011-01-01", "year")} years now and I've
                        managed to learn many different programming languages
                        along the way. I'm most comfortable with{" "}
                        <b>TypeScript</b>, <b>Java</b>, and <b>C#</b>. I enjoy
                        especially working with backends and APIs, but whenever
                        needed, I can also do frontend development.
                      </p>
                      <p>
                        Aside from programming being my hobby, I've also worked
                        as an intern in a software development company. I've
                        also done some freelance work for a few clients. In 2021
                        I got a vocational qualification in Information and
                        Communication Technology with a major in Software
                        Development. That qualification didn't really teach me
                        anything new, as I was able to complete most of the
                        assignments ahead of time, but it was still a good
                        experience.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content">
                    <div className="content col-md-9">
                      <p>
                        I've been hosting my own servers almost as long as I've
                        been programming. The first server I ever hosted was a
                        Minecraft server, which I played on with my friends.
                        Since then, I've hosted a variety of different services,
                        such as:
                      </p>
                      <p>
                        <b>Proxmox</b>: Most of my servers are running
                        virtualized on Proxmox. Some of my favorite distros to
                        run are Debian and Ubuntu.
                      </p>
                      <p>
                        <b>Windows Server / AD</b>: For what ever reason, I've
                        been hosting an Active Directory server for a few years
                        in my home network. I mostly use it for testing stuff.
                      </p>
                      <p>
                        <b>Docker</b>: I've containerized most of my services to
                        make them easier to manage.
                      </p>
                      <p>
                        <b>Networking</b>: I have enterprise grade networking
                        equipment in my home network, and I've played around
                        with it quite a bit. I also have multiple VPN servers
                        around the world.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content tab-content-hobbies">
                    <div className="content col-md-9">
                      <p>
                        Whenever I'm not working, you'll probably find me doing
                        one of the following things:
                      </p>
                      <p>
                        <b>Hiking</b>: I grew up in the countryside, so I've
                        always enjoyed being outdoors. I especially enjoy hiking
                        in the Finnish nature, and my goal is to visit as many
                        national parks as possible.
                      </p>
                      <p>
                        <b>Video Games</b> have been a big part of my life ever
                        since I was a kid. My favorite genres are survival and
                        open world games, but I also enjoy playing FPS games
                        with my friends.
                      </p>
                      <p>
                        <b>Volunteer Firefighter</b>: I've been a volunteer in
                        the local fire department for some time now. This is a
                        good counter balance to my desk job.
                      </p>
                      <p>
                        <b>Cyber Security</b>: Even though it's also my job, I
                        enjoy doing some hacking in my free time as well. I
                        especially enjoy making my own tools and automating
                        things, which relates to my another hobby,{" "}
                        <b>Programming</b>.
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="tab-content tab-content-hobbies">
                    <div className="content col-md-9">
                      <p>
                        I currently have completed the following
                        certifications/courses:
                      </p>
                      <ul>
                        <li>Cortex XDR: Investigation and Response</li>
                        <li>Cortex XDR: Prevention and Deployment</li>
                        <li>
                          Prisma Access SASE Security - Design and Operation
                        </li>
                        <li>EASA A1/A3 Drone Pilot License</li>
                        <li>Driving License (Category: B)</li>
                      </ul>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </div>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Skills;
