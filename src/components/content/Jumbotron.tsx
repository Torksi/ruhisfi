import { useEffect, useState } from "react";
import Typist from "react-typist";
import SocialMedia from "./SocialMedia";

const Jumbotron = () => {
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
