import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

import './FoxCarousel.css'
import { Container } from 'react-bootstrap';

class FoxCarousel extends React.Component {

  render() {
    return (
      <Container>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.allFoxes[0].src}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>{this.props.userInput}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.allFoxes[1].src}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>{this.props.userInput}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.allFoxes[2].src}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>{this.props.userInput}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.allFoxes[3].src}
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h3>{this.props.userInput}</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={this.props.allFoxes[4].src}
              alt="Fifth slide"
            />
            <Carousel.Caption>
              <h3>{this.props.userInput}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    )
  }


export default FoxCarousel;