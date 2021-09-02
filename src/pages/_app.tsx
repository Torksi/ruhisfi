import "bootstrap/dist/css/bootstrap.css";
import "../styles/fontawesome/css/all.css";
import "../styles/App.scss";
import type { AppProps } from "next/app";
// import Link from "next/link";
// import { Nav, Navbar } from "react-bootstrap";
import moment from "moment";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="page-content">
        <Component {...pageProps} />
        <footer className="footer container">
          <p className="footer-line" aria-hidden="true">
            —————
          </p>
          <p>&copy; Toni Ruhanen {moment().format("Y")}</p>
        </footer>
      </div>
    </>
  );
}
export default MyApp;
