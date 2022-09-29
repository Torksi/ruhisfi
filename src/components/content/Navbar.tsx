import Link from "next/link";

const Navbar = () => {
  return (
    <nav id="navbar" className="navbar navbar-dark sticky-top flex-md-nowrap">
      <div className="container">
        <Link href="/">
          <a className="navbar-brand">Toni Ruhanen</a>
        </Link>

        <ul className="navbar-nav ml-auto">
          <a
            style={{ paddingTop: "0.9rem", marginRight: "1rem" }}
            className="nav-link"
            href="/projects"
          >
            Portfolio
          </a>
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/toniruhanen/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-linkedin-box-fill nav-link-icon" />
          </a>
          <a
            className="nav-link"
            href="https://github.com/Torksi"
            target="_blank"
            rel="noreferrer"
          >
            <i className="ri-github-fill nav-link-icon" />
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
