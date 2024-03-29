/* eslint-disable @next/next/no-css-tags */
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
            content="ruhis, toni, ruhanen, toni ruhanen, programming, programmer, developer, sysadmin, fullstack, full stack, typescript, nextjs, java, javascript, react"
          />
          <meta
            name="description"
            content="Hey there! I'm Toni Ruhanen, and I'm a Finnish fullstack developer. This website was made to showcase all of what I can do."
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
            content="Hey there! I'm Toni Ruhanen, and I'm a Finnish fullstack developer. This website was made to showcase all of what I can do."
          />
          <meta name="og:type" content="website" />
          <meta name="og:url" content="https://ruhis.fi" />

          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
            rel="stylesheet"
          />

          <link
            href="//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack.css"
            rel="stylesheet"
          />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css"
          />

          <link rel="preload" href="/images/projects/router.webp" as="image" />
          <link
            rel="preload"
            href="/images/projects/firetruck.jpg"
            as="image"
          />
          <link
            rel="preload"
            href="/images/projects/programming.png"
            as="image"
          />
          <link
            rel="preload"
            href="/images/projects/vanguard/logs.png"
            as="image"
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
