import { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";
import dayjs from "dayjs";
import codeSnippets from "../../data/codeSnippets";

const Jumbotron = () => {
  const [randomCode, setRandomCode] = useState(<span>Loading...</span>);

  useEffect(() => {
    setRandomCode(codeSnippets({ idx: 0 }));
  }, []);

  return (
    <div className="jumbotron vertical-center">
      <div className="container">
        <div className="row">
          <div className="col-md-7">
            <header>
              <div className="heading-pre text-highlight">
                Welcome to my site.
              </div>
              <h1 className="heading-hero">
                I'm <span className="text-highlight">Toni Ruhanen</span>,
                <br />
                <Typewriter
                  words={["Hacker", "Developer", "Student"]}
                  cursor
                  loop
                />
              </h1>
            </header>
            <main>
              <p>
                Programming has been my hobby for over{" "}
                {dayjs().diff("2011-01-01", "year")} years now, and I've managed
                to gain a pretty good understanding of different programming
                techniques and principles. Another interest of mine is
                Information Security, and despite my young age, I've already
                gained a lot of experience in the field, both in the offensive
                and defensive side. My specialities include incident response,
                penetration testing, and malware development.
              </p>
            </main>
          </div>
          <div className="col-md-5 codebox-wrapper">
            <div className="codebox">
              <p className="codebox-title filename no-select">
                <span
                  className="wc-button wc-red"
                  onClick={() =>
                    setRandomCode(codeSnippets({ idx: undefined }))
                  }
                  onKeyDown={() => null}
                  role="button"
                  tabIndex={0}
                >
                  &nbsp;
                </span>
                <span
                  className="wc-button wc-yellow"
                  onClick={() =>
                    setRandomCode(codeSnippets({ idx: undefined }))
                  }
                  onKeyDown={() => null}
                  role="button"
                  tabIndex={0}
                >
                  &nbsp;
                </span>
                <span
                  className="wc-button wc-green"
                  onClick={() =>
                    setRandomCode(codeSnippets({ idx: undefined }))
                  }
                  onKeyDown={() => null}
                  role="button"
                  tabIndex={0}
                >
                  &nbsp;
                </span>
                <span className="filename">Terminal</span>
              </p>
              <code>{randomCode}</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron;
