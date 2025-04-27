import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Gayatri Nehe!  </span>
             from <span className="purple"> Sangamner, MH, India.</span>
            <br />
            I am currently studying in Amrutvahini College Of Engineering from BE-IT Dept.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Drawing Sketch
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Shayries
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Calm, Relax, Chill"{" "}
          </p>
          <footer className="blockquote-footer">Gayatri Nehe</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
