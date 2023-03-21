import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

class FoxCarousel extends React.Component {
  
  render() {
    return (
      <>
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
    </>
    )
  }
}

export default FoxCarousel;