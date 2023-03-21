import React from 'react';
import FoxModal from './FoxModal';

import FoxCard from './FoxCard';
import './Favorites.css';

class Favorites extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showModal: false,
    }
  }

  openModal = () => {
    this.setState({
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  render() {
    // let foxCards = this.props.data.map((i, idx) => {
    //   return <FoxCard
    //     image_url='https://randomfox.ca/images/49.jpg'
    //     key={idx}
    //     alt='memealt'
    //     text='memetext'
    //     showModal={this.showModal}
    //   />
    // });
    return (
      <>
        {/* {foxCards} */}
        <FoxCard
        openModal={this.openModal}
        
        />
        <FoxModal 
        openModal = {this.openModal}
        closeModal = {this.closeModal}
        showModal={this.state.showModal}
        />
      </>
    )
  }
}

export default Favorites;