import React from 'react';
import FoxModal from './FoxModal';

import FoxCard from './FoxCard';
import './Favorites.css';

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
      id: '',
      text: '',
    }
  }

  openModal = (id, text) => {
    this.setState({
      showModal: true,
      id: id,
      text: text,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    let foxCards = this.props.foxMemes.map(i => {
      return <FoxCard
        imgURL={i.imgURL}
        key={i._id}
        alt={i.userInput}
        text={i.userInput}
        showModal={this.showModal}
        openModal={this.openModal}

      />
    });
    return (
      <>
        {foxCards}
        {/* <FoxCard
        openModal={this.openModal}
        /> */}
        <FoxModal
          openModal={this.openModal}
          closeModal={this.closeModal}
          deleteFoxMeme={this.props.deleteFoxMeme}
          showModal={this.state.showModal}
        />
      </>
    )
  }
}

export default Favorites;