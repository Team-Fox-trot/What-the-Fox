import React from 'react';
import Container from 'react-bootstrap/Container';

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
        <Container>
          <FoxCarousel allFoxes={this.props.allFoxes} userInput={this.props.userInput}/>
         </Container>
       </>
        )

  }
}

        export default Main;