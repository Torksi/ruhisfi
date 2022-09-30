import { useEffect, useState } from "react";
import codeSnippets from "../../data/codeSnippets";
import skills from "../../data/skills";

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
                I&apos;m <span className="text-highlight">Toni Ruhanen</span>, a
                Fullstack developer.
              </h1>
              <div className="skill-badges">
                {skills.map((skill) => (
                  <div key={`skill-badge-${skill.id}`} className="skill-badge">
                    <i className={`${skill.icon} skill-icon`} />
                    {skill.label}
                  </div>
                ))}
              </div>
            </header>
            <main>
              <p>
                Programming has been my hobby for almost 12 years now, and
                I&apos;ve managed to gain a pretty good understanding of
                different programming techniques and principles. Writing APIs
                and backends has always been my favourite, but I can also make
                pretty good-looking frontend applications when needed.
              </p>
              <p>
                Cybersecurity is also a significant interest of mine, and
                I&apos;ve participated in many bug bounty programs and done
                penetration testing for almost five years. While co-operating
                with different companies&apos; CERT and cybersecurity teams,
                I&apos;ve gained a good understanding of incident response,
                vulnerability management and other cybersecurity processes.
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
