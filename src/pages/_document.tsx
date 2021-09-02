/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
// eslint-disable-next-line @next/next/no-script-in-document
import Script from "next/script";

class DefaultDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#2d333b" />

          <meta charSet="utf-8" />
          <meta
            name="description"
            content="developer, sysadmin, university student"
          />

          <meta name="og:site_name" content="Toni Ruhanen" />
          <meta name="og:title" content="Home" />
          <meta
            name="og:description"
            content="developer, sysadmin, university student"
          />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://ruhis.fi" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
            rel="stylesheet"
          />

          <Script
            strategy="lazyOnload"
            src="https://www.googletagmanager.com/gtag/js?id=G-N09G3K6PHV"
          />
          <Script
            id="ga-function"
            strategy="lazyOnload"
          >{`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-N09G3K6PHV');`}</Script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default DefaultDocument;
