import React from 'react';
import Container from 'react-bootstrap/Container';

import FoxCarousel from './FoxCarousel';
import './Main.css'

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
        <Container>
        <FoxCarousel allFoxes={this.props.allFoxes} userInput={this.props.userInput} handleFoxSubmit ={this.props.handleFoxSubmit} handleOnChange={this.props.handleOnChange}/>
         </Container>
      </>
    )
  }
}

        export default Main;