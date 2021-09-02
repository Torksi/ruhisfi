import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import Typist from "react-typist";

const Languages = () => {
  const [carouselPhrases] = useState([
    ["I'm fluent in English.", "‎", "English"],
    [
      "Puhun suomea äidinkielenäni.",
      "Finnish is my native language.",
      "Finnish",
    ],
    ["Jag pratar också lite svenska.", "I also speak some Swedish.", "Swedish"],
  ]);
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      if (currentPhrase === carouselPhrases.length - 1) {
        setCurrentPhrase(0);
      } else {
        setCurrentPhrase(currentPhrase + 1);
      }
    }, 5000);
  }, [carouselPhrases, currentPhrase]);

  const LanguageCarousel = () => {
    return (
      <>
        <Typist cursor={{ show: false }}>
          <span className="text-md">{carouselPhrases[currentPhrase][0]}</span>
        </Typist>
        <Typist cursor={{ show: false }}>
          <span className="text-alt">
            <i>{carouselPhrases[currentPhrase][1]}</i>
          </span>
        </Typist>
      </>
    );
  };

  return (
    <Fade triggerOnce>
      <div className="content-section" id="languages">
        <div className="row">
          <div className="col-md-12">
            <h2>Languages</h2>
            <p>
              <LanguageCarousel />
            </p>
            <p className="text-sm">
              {carouselPhrases.map((language) => {
                return (
                  <span className="language-list" key={`lang-${language[2]}`}>
                    {language[2]}
                  </span>
                );
              })}
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Languages;
