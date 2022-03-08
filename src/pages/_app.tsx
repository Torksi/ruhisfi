import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/fontawesome/css/all.css";
import "../styles/App.scss";
import type { AppProps } from "next/app";
import dayjs from "dayjs";
import { useRouter } from "next/dist/client/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <>
      <div className="page-content">
        <Component {...pageProps} />
        {router.pathname === "/" && (
          <footer className="footer container">
            <p className="footer-line" aria-hidden="true">
              —————
            </p>
            <p>&copy; Toni Ruhanen {dayjs().format("YYYY")}</p>
          </footer>
        )}
      </div>
    </>
  );
}
export default MyApp;
