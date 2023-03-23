import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// Add Music to Credits
// <https://github.com/goldfire/howler.js>
import { Howl } from 'howler';

import './AboutUs.css';

const sound = new Howl({
  src: 'public/Assests/fox-ylvis-second-chorus-and-outro.mp3',
  html5: false,
  format: 'mp3',
  volume: 1.0,
});
// console.log(sound);
// embed video https://www.youtube.com/watch?v=jofNR_WkoCE&ab_channel=discoveryplusNorge


class AboutUs extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      showMusicButton: true,
    }
  }

  removeButton = () => {
    this.setState({ showMusicButton: false })
  };

  playMusic = () => {
    sound.play();
    this.removeButton();
    // console.log("Play the tunes!")
  }

  render() {


    return (
      <>
        <section id="button-section">
          {this.state.showMusicButton && <Button id="music-button"
            onClick={() => {
              this.playMusic()
            }}
          >
            Roll Credits!
          </Button>
          }
        </section>

        <div id="scroll-container">
          <div id="scroll-text">
            <div id="bio-cards">

              <Card id="wdtfs-gif-1">
                <Card.Img variant="top" src="Assests/wdtfs-1.gif" />
              </Card>

              <Card id="thomas">
                <Card.Img variant="top" src="Assests/tomPicture.png" />
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

              <Card id="wdtfs-gif-2">
                <Card.Img variant="top" src="Assests/wdtfs-2.gif" height="180" width="286" />
              </Card>

              <Card id="laurel">
                <Card.Img variant="top" src="Assests/laurelPicture.jpg" />
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

              {/* adjust size of gif to match the size of wdtfs-2.gif */}
              <Card id="wdtfs-gif-3">
                <Card.Img variant="top" src="Assests/wdtfs-3.gif" height="180" width="286" />
              </Card>

              <Card id="abshir">
                <Card.Img variant="top" src="Assests/abshirPicture.jpg" />
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

              <Card id="wdtfs-gif-4">
                <Card.Img variant="top" src="Assests/wdtfs-4.gif" height="180" width="286" />
              </Card>

              <Card id="trey">
                <Card.Img variant="top" src="Assests/treyPicture.jpg" />
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

              <Card id="wdtfs-gif-5">
                <Card.Img variant="top" src="Assests/wdtfs-5.gif" height="180" width="286" />
              </Card>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutUs;
