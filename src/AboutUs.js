import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

class AboutUs extends React.Component {
  render() {
    return (
      <>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="Assests/tomPicture.png" max-height="180" max-width="286"/>
          <Card.Body>
            <Card.Title>Thomas Lau</Card.Title>
            <Card.Text>
              I'm Thomas, a software developer with a military and filmmaking
              background. I am always interested in Software Development and
              always want to get into coding. Which is why when I want to make a
              career transition few months ago, I picked software development
              and focus on Full Stack Development.
            </Card.Text>
            <Button variant="primary" src="https://github.com/Rapib">
              My Github
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="Assests/tomPicture.png" max-height="180" max-width="286"/>
          <Card.Body>
            <Card.Title>Lauren Perkins</Card.Title>
            <Card.Text>
              I'm Thomas, a software developer with a military and filmmaking
              background. I am always interested in Software Development and
              always want to get into coding. Which is why when I want to make a
              career transition few months ago, I picked software development
              and focus on Full Stack Development.
            </Card.Text>
            <Button variant="primary" src="https://github.com/gone-explauren">
              My Github
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="Assests/abshirPicture.jpg" max-height="180" max-width="286"/>
          <Card.Body>
            <Card.Title>Abshir Ibrahim</Card.Title>
            <Card.Text>
            I'm Abshir.  I'm born & raised in Seattle, WA and I studied Marketing at the University of Washington. I have a background in Marketing & Sales for a few years. I'm excited to be here at Code Fellows and become a Software Developer!
            </Card.Text>
            <Button variant="primary" src="https://github.com/abshir206">
              My Github
            </Button>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src="Assests/tomPicture.png" max-height="180" max-width="286"/>
          <Card.Body>
            <Card.Title>Trey Young</Card.Title>
            <Card.Text>
              I'm Thomas, a software developer with a military and filmmaking
              background. I am always interested in Software Development and
              always want to get into coding. Which is why when I want to make a
              career transition few months ago, I picked software development
              and focus on Full Stack Development.
            </Card.Text>
            <Button variant="primary" src="https://github.com/goodpudding">
              My Github
            </Button>
          </Card.Body>
        </Card>
      </>
    );
  }
}

export default AboutUs;
