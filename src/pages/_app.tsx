import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "../styles/App.scss";
import type { AppProps } from "next/app";
import Head from "next/head";
import Footer from "../components/content/Footer";
import Navbar from "../components/content/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="page-content">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  );
}
export default MyApp;
