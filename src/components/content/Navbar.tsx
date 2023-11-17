import Link from "next/link";

const Navbar = () => {
  return (
    <nav
      id="navbar"
      className="navbar navbar-dark sticky-top navbar-expand-lg flex-md-nowrap"
    >
      <div className="container-fluid">
        <Link href="/" className="navbar-brand">
          Toni Ruhanen
        </Link>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link href="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/projects" className="nav-link">
                Portfolio
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a
                className="nav-link"
                title="LinkedIn"
                href="https://www.linkedin.com/in/toniruhanen/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-linkedin-box-fill nav-link-icon" />
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                title="GitHub"
                href="https://github.com/Torksi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="ri-github-fill nav-link-icon" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
