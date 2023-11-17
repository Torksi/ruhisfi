import Link from "next/link";
import { Navbar, Nav, Container } from "react-bootstrap";

const NewNavbar = () => {
  return (
    <Navbar collapseOnSelect id="navbar" expand="lg" sticky="top">
      <Container>
        <Link href="/" passHref legacyBehavior>
          <Navbar.Brand>Toni Ruhanen</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="navbar-nav">
          <i className="ri-menu-fill" />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/projects" passHref legacyBehavior>
              <Nav.Link>Projects</Nav.Link>
            </Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link
              title="LinkedIn"
              href="https://www.linkedin.com/in/toniruhanen/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-linkedin-box-fill nav-link-icon" />
            </Nav.Link>
            <Nav.Link
              title="GitHub"
              href="https://github.com/Torksi"
              target="_blank"
              rel="noreferrer"
            >
              <i className="ri-github-fill nav-link-icon" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NewNavbar;
