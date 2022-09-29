import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../styles/App.scss";
import type { AppProps } from "next/app";
import Footer from "../components/content/Footer";
import Navbar from "../components/content/Navbar";
import Title from "../components/Title";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="page-content">
        <Title />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
export default MyApp;
