import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import './AboutUs.css';

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <div id="scroll-container">
          <div id="scroll-text">
            <div id="bio-cards">
              <Card id="thomas" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="Assests/tomPicture.png" max-height="180" max-width="286" />
                <Card.Body>
                  <Card.Title>Thomas Lau</Card.Title>
                  <Card.Text>
                    I'm Thomas, a software developer with a military and filmmaking
                    background. I've always been interested in software development and
                    always wanted to get into coding, which is why, when I decided to make a
                    career transition few months ago, I picked software development
                    and focused on Full Stack Development.
                  </Card.Text>
                  <Button 
                  id="tom-button"
                  variant="primary" src="https://github.com/Rapib">
                    Check Out My Github
                  </Button>
                </Card.Body>
              </Card>
              <Card id="laurel" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="Assests/tomPicture.png" max-height="180" max-width="286" />
                <Card.Body>
                  <Card.Title>Laurel Perkins</Card.Title>
                  <Card.Text>
                    Hi, I'm Laurel! I am a Seattle-based full-stack software developer and Navy veteran with a background in analog photography.
                    I am excited to start an exciting and fulfilling new career path in tech and contribute to innovative new projects.
                  </Card.Text>
                  <Button 
                  id="laurel-button"
                  variant="primary" src="https://github.com/gone-explauren">
                    Git At Me !
                  </Button>
                </Card.Body>
              </Card>
              <Card id="abshir" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="Assests/abshirPicture.jpg" max-height="180" max-width="286" />
                <Card.Body>
                  <Card.Title>Abshir Ibrahim</Card.Title>
                  <Card.Text>
                    I'm Abshir. I was born & raised in Seattle, WA and I studied Marketing at the University of Washington. I have a background in Marketing & Sales for a few years. I'm excited to be here at Code Fellows and to become a full-stack software developer!
                  </Card.Text>
                  <Button 
                  id="abshir-button"
                  variant="primary" src="https://github.com/abshir206">
                    Find Me on GitHub
                  </Button>
                </Card.Body>
              </Card>
              <Card id="trey" style={{ width: "18rem" }}>
                <Card.Img variant="top" src="Assests/tomPicture.png" max-height="180" max-width="286" />
                <Card.Body>
                  <Card.Title>Trey Young</Card.Title>
                  <Card.Text>
                    I'm Thomas, a software developer with a military and filmmaking
                    background. I am always interested in Software Development and
                    always want to get into coding. Which is why when I want to make a
                    career transition few months ago, I picked software development
                    and focus on Full Stack Development.
                  </Card.Text>
                  <Button
                  id="trey-button"
                  variant="primary" src="https://github.com/goodpudding">
                    My Github
                  </Button>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
