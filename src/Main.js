import React from 'react';

import FoxCarousel from './FoxCarousel';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
    }
  }
  render() {
    console.log(this.props.allFoxes[0])
    return (
      <>
        <p>this is from main.js</p>

        <FoxCarousel allFoxes={this.props.allFoxes} userInput={this.props.userInput}/>
      </>
    )
  }
}

export default Main;