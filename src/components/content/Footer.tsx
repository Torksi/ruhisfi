import dayjs from "dayjs";

const Footer = () => {
  return (
    <footer className="footer container">
      <div className="row">
        <div className="col-md-6">
          <p>
            &copy; {dayjs().format("YYYY")} Toni Ruhanen, All rights reserved.
          </p>
        </div>
        <div className="col-md-6 social-media">
          <p className="float-end">
            <a
              className="social-media-icon"
              href="https://www.linkedin.com/in/toniruhanen/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-box-fill nav-link-icon" />
            </a>
            <a
              className="social-media-icon"
              href="https://github.com/Torksi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-fill nav-link-icon" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
