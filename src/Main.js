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
    return (
      <>
        <p>this is from main.js</p>

        <FoxCarousel allFoxes={this.props.allFoxes} userInput={this.props.userInput} handleFoxSubmit ={this.props.handleFoxSubmit} handleOnChange={this.props.handleOnChange}/>
      </>
    )
  }
}

export default Main;