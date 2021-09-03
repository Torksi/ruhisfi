import Link from "next/link";
import ReactTooltip from "react-tooltip";
import { Fade } from "react-awesome-reveal";
// import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SocialMedia = () => {
  return (
    <Fade triggerOnce cascade delay={500} direction="up">
      <p className="text-center text-md social-media-icons">
        <Link href="https://github.com/Torksi">
          <a
            title="GitHub"
            data-tip="Torksi"
            target="_blank"
            rel="noreferrer"
            className="social-media-icon bg-black"
          >
            <i className="fab fa-github text-white" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/toniruhanen?trk=profile-badge">
          <a
            data-tip="LinkedIn"
            target="_blank"
            rel="noreferrer"
            className="social-media-icon"
          >
            <i className="fab fa-linkedin text-logo-linkedin" />
          </a>
        </Link>
        {/* }<Link href="https://www.instagram.com/ruhanentoni/">
              <a
                data-tip="@ruhanentoni"
                target="_blank"
                rel="noreferrer"
                className="social-media-icon bg-logo-instagram"
              >
                <i className="fab fa-instagram text-white" />
              </a>
        </Link>{ */}
        <Link href="mailto:toni@ruhis.fi">
          <a
            data-tip="toni@ruhis.fi"
            target="_blank"
            className="social-media-icon bg-secondary"
          >
            <i className="far fa-envelope text-white" />
          </a>
        </Link>
        <a
          data-tip="Torksi#8081"
          href="#"
          className="social-media-icon bg-logo-discord"
        >
          <i className="fab fa-discord text-white" />
        </a>
        <ReactTooltip />
      </p>
    </Fade>
  );
};

export default SocialMedia;
