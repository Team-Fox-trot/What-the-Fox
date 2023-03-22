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

  openModal = (id, text, imgURL) => {
    this.setState({
      showModal: true,
      id: id,
      text: text,
      imgURL: imgURL,
    })
    console.log(id);
  }

  closeModal = () => {
    this.setState({
      showModal: false,
    })
  }

  componentDidMount() {
    this.props.foxFromDBtoFav();

  }



  render() {
    console.log(this.props.foxMemes[1]);
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
        <FoxModal
          openModal={this.openModal}
          closeModal={this.closeModal}
          deleteFoxMeme={this.props.deleteFoxMeme}
          showModal={this.state.showModal}
          text={this.state.text}
          id={this.state.id}
          imgURL={this.state.imgURL}
        />
      </>
    )
  }
}

export default Favorites;