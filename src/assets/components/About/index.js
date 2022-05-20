import "./index.scss";
import AnimatedLetters from "../AnimatedLetters";
import { useState, useEffect } from "react";
const About = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      return setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={["A", "b", "o", "u", "t", " ", "m", "e"]}
            idx={15}
          />
        </h1>
        <p>I’m a very ambitious developer...</p>
        <p>I'm naturally confident...</p>
        <p>If I were to define myself...</p>
      </div>
    </div>
  );
};

export default About;
