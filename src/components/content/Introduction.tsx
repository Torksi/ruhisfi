import { Fade } from "react-awesome-reveal";

const Introduction = () => {
  return (
    <Fade triggerOnce>
      <div className="content-section" id="home">
        <div className="row">
          <div className="col-md-12">
            <h1>Toni Ruhanen</h1>
            <p>
              Hey! I&apos;m <span className="text-white">Toni</span>, a Finnish
              student at Haaga-Helia University of Applied Sciences studying
              Business Information Technology. Checkout my{" "}
              <span className="highlight">Github</span> account. You can also
              read my blog <a href="#">here</a>.
            </p>
            <ul>
              <li>test</li>
              <li>test 2</li>
              <li>test 3</li>
            </ul>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Introduction;
