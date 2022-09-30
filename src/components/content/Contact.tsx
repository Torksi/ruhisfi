import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact" className="container" style={{ marginTop: "5rem" }}>
      <div className="row">
        <div className="col-md-6">
          <span className="section-subheader">Contact</span>
          <h2 className="section-header">Get in touch</h2>
          <p>
            If you are interested in working with me or have open job
            opportunities, feel free to contact me. I'm always interested in
            hearing about new opportunities, and I enjoy collaborating with
            other people to create even more useless projects!
          </p>
          <p>
            <i className="contact-icon ri-linkedin-fill" />
            <span className="contact-handle">
              <span className="text-white">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/toniruhanen/"
                rel="noreferrer"
                target="_blank"
              >
                Toni Ruhanen
              </a>
            </span>
          </p>
          <p>
            <i className="contact-icon ri-github-fill" />
            <span className="contact-handle">
              <span className="text-white">GitHub: </span>
              <a
                href="https://github.com/Torksi"
                rel="noreferrer"
                target="_blank"
              >
                Torksi
              </a>
            </span>
          </p>
          <p>
            <i className="contact-icon ri-mail-fill" />
            <span className="contact-handle">
              <span className="text-white">Email: </span>
              <a href="mailto:toni@ruhis.fi" rel="noreferrer" target="_blank">
                toni@ruhis.fi
              </a>
            </span>
          </p>
        </div>
        <div className="col-md-6">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
            className="mb-2"
          >
            <Image
              src="/images/code.webp"
              height="325px"
              width="325px"
              alt="Code"
              className="mx-auto rounded-circle no-select contact-image"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
