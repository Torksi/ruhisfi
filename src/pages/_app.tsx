import "bootstrap/dist/css/bootstrap.css";
import "../styles/fontawesome/css/all.css";
import "../styles/App.scss";
import type { AppProps } from "next/app";
import Link from "next/link";
import { Nav, Navbar } from "react-bootstrap";
import moment from "moment";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar collapseOnSelect variant="dark" fixed="top" expand="lg">
        <Link href="/" passHref>
          <Navbar.Brand>Ruhis</Navbar.Brand>
        </Link>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link href="/" passHref>
              <Nav.Link>Home</Nav.Link>
            </Link>
            <Link href="/projects" passHref>
              <Nav.Link>Projects</Nav.Link>
            </Link>
            <Link href="/skills" passHref>
              <Nav.Link>Skills</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="page-content content-fadein">
        <div className="container">
          <Component {...pageProps} />
          <footer className="footer">
            <p className="footer-line" aria-hidden="true">
              —————
            </p>
            <p>&copy; Toni Ruhanen {moment().format("Y")}</p>
          </footer>
        </div>
      </div>
    </>
  );
}
export default MyApp;
