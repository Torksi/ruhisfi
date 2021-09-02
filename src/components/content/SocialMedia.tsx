import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const SocialMedia = () => {
  return (
    <Fade triggerOnce cascade delay={500} direction="up">
      <p className="text-center text-md social-media-icons">
        <Link href="https://github.com/Torksi">
          <a target="_blank" className="social-media-icon bg-black">
            <i className="fab fa-github text-white" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/toniruhanen?trk=profile-badge">
          <a target="_blank" className="social-media-icon">
            <i className="fab fa-linkedin text-logo-linkedin" />
          </a>
        </Link>
        <Link href="https://www.instagram.com/ruhanentoni/">
          <a target="_blank" className="social-media-icon bg-logo-instagram">
            <i className="fab fa-instagram text-white" />
          </a>
        </Link>
        <OverlayTrigger
          key="discord-tooltip"
          placement="bottom"
          overlay={<Tooltip id="discord-tooltip">Torksi#8081</Tooltip>}
        >
          <a target="_blank" className="social-media-icon bg-logo-discord">
            <i className="fab fa-discord text-white" />
          </a>
        </OverlayTrigger>
      </p>
    </Fade>
  );
};

export default SocialMedia;
