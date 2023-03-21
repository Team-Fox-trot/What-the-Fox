import React from 'react';
import Favorites from './Favorites';
import Carousel from './Carousel';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }
  render() {
    return (
      <>
        <p>this is from main.js</p>
        <Favorites />
        <Carousel />
      </>
    )
  }
}

export default Main;