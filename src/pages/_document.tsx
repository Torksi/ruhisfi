/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-document-import-in-page */
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";

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
            name="keywords"
            content="ruhis, toni, finland, ruhanen, toni ruhanen, java, javascript, typescript, nodejs, developer, sysadmin, university student, technology, business"
          />
          <meta
            name="description"
            content="I'm a Finnish full
              stack developer and a student at Haaga-Helia University of Applied Sciences, welcome to my portfolio!"
          />
          <meta name="author" content="Toni Ruhanen" />
          <meta
            name="robots"
            content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
          />

          <meta name="og:site_name" content="Toni Ruhanen" />
          <meta name="og:title" content="Ruhis" />
          <meta
            name="og:description"
            content="I'm a Finnish full
              stack developer and a student at Haaga-Helia University of Applied Sciences, welcome to my portfolio!"
          />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://ruhis.fi" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap"
            rel="stylesheet"
          />

          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-N09G3K6PHV"
          />
          <script
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-N09G3K6PHV');`,
            }}
          />
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
