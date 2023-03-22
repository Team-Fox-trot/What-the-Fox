import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function FoxCarousel(props) {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    console.log(selectedIndex);
    setIndex(selectedIndex);
  };

  const foxHandler = (e) =>{
    e.preventDefault();
    let newFoxMeme = {
      userInput: props.userInput,
      imgURL: props.allFoxes[index].src,
    }
    console.log(newFoxMeme);
    props.handleFoxSubmit(newFoxMeme);
  }
    return (
      <Container>
      <Carousel interval={null} index={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.allFoxes[0].src}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.allFoxes[1].src}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.allFoxes[2].src}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.allFoxes[3].src}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={props.allFoxes[4].src}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <Form onSubmit={foxHandler}>
      <Form.Group  controlId="userInput">
        <Form.Control type="text"  placeholder="What does the fox say?" onChange={props.handleOnChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    )
  }

