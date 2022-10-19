import { Tabs, TabList, Tab, TabPanel } from "react-tabs";

const Skills = () => {
  return (
    <section id="skills" className="container" style={{ marginTop: "1rem" }}>
      <div className="row">
        <div className="col-md-12">
          <span className="section-subheader">Techniques & Languages</span>
          <h2 className="section-header">Skills</h2>

          <Tabs>
            <div className="row">
              <div className="col-md-3">
                <TabList>
                  <Tab>Programming</Tab>
                  <Tab>Cybersecurity</Tab>
                  <Tab>Sysadmin</Tab>
                  <Tab>Certifications</Tab>
                </TabList>
              </div>
              <div className="col-md-9">
                <TabPanel>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec auctor suscipit sem nec fringilla. Aliquam vitae
                    feugiat ante, sit amet faucibus felis. Cras et sem et mauris
                    posuere dictum. Praesent imperdiet magna et metus eleifend,
                    in facilisis risus laoreet. Suspendisse vitae placerat nisl.
                    Fusce viverra, quam at volutpat ornare, nibh felis malesuada
                    risus, hendrerit condimentum erat turpis et nibh. In non
                    vestibulum dui. Pellentesque feugiat sit amet ex a
                    vulputate. Suspendisse vulputate, neque a tempus euismod,
                    ligula velit consequat elit, sed scelerisque massa urna nec
                    nibh. Phasellus eros tortor, cursus vel consectetur nec,
                    vestibulum et justo. Ut ac hendrerit neque. Nulla sit amet
                    vehicula ex. Nunc vulputate mi ligula, et varius erat
                    commodo sit amet. Nam id sodales nulla. Nulla nec tellus
                    ullamcorper, facilisis risus ac, aliquam arcu. Nulla
                    pulvinar dolor ut neque feugiat pretium. Phasellus ultricies
                    pulvinar lacus a facilisis. Praesent in odio quis nibh
                    vestibulum aliquam ac bibendum ante. Sed faucibus sagittis
                    sapien quis pellentesque. Sed urna risus, posuere id
                    tincidunt quis, posuere at dui. Aliquam sit amet gravida
                    orci, sit amet consequat eros. Integer iaculis, turpis sed
                    tincidunt dignissim, odio nunc bibendum neque, nec pulvinar
                    nisi ante ut augue. Integer rutrum tempus leo at
                    sollicitudin. Vestibulum ante ipsum primis in faucibus orci
                    luctus et ultrices posuere cubilia curae; Proin feugiat urna
                    non risus laoreet, blandit suscipit velit ullamcorper.
                    Suspendisse quis vulputate quam, sed malesuada diam. Orci
                    varius natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus. Quisque a velit enim.
                  </p>
                </TabPanel>
                <TabPanel>
                  <h3>Any content 2</h3>
                </TabPanel>
                <TabPanel>
                  <h3>Any content 3</h3>
                </TabPanel>
                <TabPanel>
                  <p>I have completed the following certifications:</p>
                  <ul>
                    <li>Työturvallisuuskortti (Exp. 04/2025)</li>
                    <li>Tieturvakortti, Tieturva 1 (Exp. 11/2026)</li>
                    <li>Tieturvakortti, Tieturva 2 (Exp. 10/2027)</li>
                    <li>EASA A1/A3 EU Drone License (Exp. 12/2026)</li>
                  </ul>
                  <p>
                    I'm currently working on getting the following
                    certifications:
                  </p>
                  <ul>
                    <li>Driving License (B)</li>
                  </ul>
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
