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
      v: '',

    }
  }

  openModal = (id, text, imgURL, v) => {
    this.setState({
      showModal: true,
      id: id,
      text: text,
      imgURL: imgURL,
      v: v,
    })
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
    (this.props.foxmemes && this.props.foxmemes.length > 0 && console.log(this.props.foxMemes[0]._id));
    let foxCards = this.props.foxMemes.map(i => {
      return <FoxCard
        imgURL={i.imgURL}
        key={i._id}
        id={i._id}
        alt={i.userInput}
        v={i.__v}
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
          updateFoxMeme={this.props.updateFoxMeme}
          showModal={this.state.showModal}
          text={this.state.text}
          id={this.state.id}
          v={this.state.v}
          imgURL={this.state.imgURL}
        />
      </>
    )
  }
}

export default Favorites;