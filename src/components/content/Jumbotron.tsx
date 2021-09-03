/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useEffect, useState } from "react";
import Typist from "react-typist";
import Scroll from "react-scroll";
import SocialMedia from "./SocialMedia";

const Jumbotron = () => {
  const { scroller } = Scroll;

  const [carouselPhrases] = useState([
    "Developer",
    "Sysadmin",
    "University Student",
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

  const TextCarousel = () => {
    return (
      <Typist cursor={{ blink: false }}>
        <span>{carouselPhrases[currentPhrase]}</span>
      </Typist>
    );
  };

  return (
    <div className="jumbotron vertical-center">
      <div
        id="scroll-down-indicator"
        onClick={() => {
          scroller.scrollTo("introduction", {
            duration: 250,
            delay: 100,
            smooth: true,
            offset: -25,
          });
        }}
      >
        <i className="far fa-chevron-down" />
      </div>
      <div className="container">
        <h1 className="text-center text-lg">Toni Ruhanen</h1>
        <h2 className="text-center color-body">
          <TextCarousel />
        </h2>
        <SocialMedia />
      </div>
    </div>
  );
};

export default Jumbotron;
