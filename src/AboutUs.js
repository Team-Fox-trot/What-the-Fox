import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Add Music to Credits
// <https://github.com/goldfire/howler.js>
import { Howl } from 'howler';

import './AboutUs.css';

const sound = new Howl({
  src: 'public/Assests/fox-ylvis-second-chorus-and-outro.mp3',
  html5: true,
  format: 'mp3',
  volume: 1.0,
});
// console.log(sound);

const removeButton = () => {
  this.setState({ showMusicButton: false })
};

class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMusicButton: true,
    }
  }

  playMusic = () => {
    sound.play();
    removeButton();
  }

  render() {


    return (
      <>
        <section id="button-section">
          <Button id="music-button"
            onClick={() => {
              this.playMusic()
            }}
          >
            Roll Credits!
          </Button>
        </section>

        <div id="scroll-container">
          <div id="fade">
            <div id="scroll-text">
              <div id="bio-cards">
                <Card id="thomas">
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
                <Card id="laurel">
                  <Card.Img variant="top" src="Assests/laurelPicture.jpg" max-height="300" max-width="300" />
                  <Card.Body>
                    <Card.Title>Laurel Perkins</Card.Title>
                    <Card.Text>
                      Hi, I'm Laurel! I am a Seattle-based full-stack software developer and Navy veteran with a background in analog photography.
                      I am excited to start an exciting and fulfilling new career path in tech and contribute to innovative new projects.
                    </Card.Text>
                    <Button
                      id="laurel-button"
                      variant="primary" src="https://github.com/gone-explauren">
                      Check Out My Github
                    </Button>
                  </Card.Body>
                </Card>
                <Card id="abshir">
                  <Card.Img variant="top" src="Assests/abshirPicture.jpg" max-height="180" max-width="286" />
                  <Card.Body>
                    <Card.Title>Abshir Ibrahim</Card.Title>
                    <Card.Text>
                      I'm Abshir. I was born & raised in Seattle, WA and I studied Marketing at the University of Washington. I have a background in Marketing & Sales for a few years. I'm excited to be here at Code Fellows and to become a full-stack software developer!
                    </Card.Text>
                    <Button
                      id="abshir-button"
                      variant="primary" src="https://github.com/abshir206">
                      Check Out My Github
                    </Button>
                  </Card.Body>
                </Card>
                <Card id="trey">
                  <Card.Img variant="top" src="Assests/treyPicture.jpg" max-height="180" max-width="286" />
                  <Card.Body>
                    <Card.Title>Trey Young</Card.Title>
                    <Card.Text>
                      I'm Thomas, you're Thomas, we're all Thomas!
                      I'm Thomas, you're Thomas, we're all Thomas!
                      I'm Thomas, you're Thomas, we're all Thomas!
                      I'm Thomas, you're Thomas, we're all Thomas!
                      I'm Thomas, you're Thomas, we're all Thomas!
                      I'm Thomas, you're Thomas, we're all Thomas!
                    </Card.Text>
                    <Button
                      id="trey-button"
                      variant="primary" src="https://github.com/goodpudding">
                      Check Out My Github
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
