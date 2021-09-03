const ThisPage = () => {
  return (
    <div className="content-section" id="introduction">
      <div className="row">
        <div className="col-md-16">
          <h2>About This Page</h2>
          <p>
            This website is built using TypeScript and{" "}
            <a href="https://nextjs.org/" target="_blank" rel="noreferrer">
              Next.js
            </a>{" "}
            and styled with a bit of{" "}
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              rel="noreferrer"
            >
              Bootstrap
            </a>
            . The code is deployed on{" "}
            <a href="https://vercel.com/" target="_blank" rel="noreferrer">
              Vercel
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default ThisPage;
