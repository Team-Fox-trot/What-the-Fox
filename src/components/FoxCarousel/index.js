import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import './FoxCarousel.css'
import { useNavigate } from "react-router-dom";
import './FoxCarousel.css'


function FoxCarousel(props) {
  //auth0
  const { isAuthenticated } = useAuth0()
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  const navigate = useNavigate();

  const foxHandler = (e) =>{
    e.preventDefault();
    let newFoxMeme = {
      userInput: props.userInput,
      imgUrl: props.allFoxes[index].src,
    }
    props.handleFoxSubmit(newFoxMeme);
    navigate("/favorites");
  }
    return (
      <Container className='carousel'>
      <Carousel  interval={null} index={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="foxCarouselItem"
          src={props.allFoxes[0].src}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="foxCarouselItem"
          src={props.allFoxes[1].src}
          alt="Second slide"
        />
        <Carousel.Caption>
        <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="foxCarouselItem"
          src={props.allFoxes[2].src}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="foxCarouselItem"
          src={props.allFoxes[3].src}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="foxCarouselItem"
          src={props.allFoxes[4].src}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3>{props.userInput}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    {isAuthenticated && (<Form onSubmit={foxHandler}>
      <Form.Group  controlId="userInput">
        <Form.Control type="text"  placeholder="What does the fox say?" onChange={props.handleOnChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>)}
    </Container>
    )
  }


export default FoxCarousel;